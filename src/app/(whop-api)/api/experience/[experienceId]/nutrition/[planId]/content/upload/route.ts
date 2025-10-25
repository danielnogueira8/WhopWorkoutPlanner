import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { whop } from '~/lib/whop'
import { db } from '~/db'
import { nutritionPlanContent, nutritionPlans } from '~/db/schema'
import { eq, and } from 'drizzle-orm'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'

// Ensure uploads directory exists
const uploadsDir = join(process.cwd(), 'public', 'uploads', 'nutrition-pdfs')
if (!existsSync(uploadsDir)) {
  mkdirSync(uploadsDir, { recursive: true })
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  try {
    const { experienceId, planId } = await params
    const { userId } = await verifyUserToken(req.headers)
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has admin access to the experience
    const access = await whop.access.checkIfUserHasAccessToExperience({
      experienceId,
      userId
    })

    if (access.accessLevel !== 'admin') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    // Get the nutrition plan to verify it exists and belongs to this experience
    const plan = await db
      .select()
      .from(nutritionPlans)
      .where(and(
        eq(nutritionPlans.id, planId),
        eq(nutritionPlans.experienceId, experienceId)
      ))
      .limit(1)

    if (plan.length === 0) {
      return NextResponse.json({ error: 'Nutrition plan not found' }, { status: 404 })
    }

    const formData = await req.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 })
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be less than 10MB' }, { status: 400 })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const filename = `${planId}-${timestamp}.pdf`
    const filepath = join(uploadsDir, filename)
    const fileUrl = `/uploads/nutrition-pdfs/${filename}`

    // Save file to disk
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filepath, buffer)

    // Check if content already exists
    const existingContent = await db
      .select()
      .from(nutritionPlanContent)
      .where(eq(nutritionPlanContent.planId, planId))
      .limit(1)

    let result
    if (existingContent.length > 0) {
      // Delete old PDF file if it exists
      if (existingContent[0].pdfUrl) {
        const oldFilename = existingContent[0].pdfUrl.split('/').pop()
        if (oldFilename) {
          const oldFilepath = join(uploadsDir, oldFilename)
          try {
            await unlink(oldFilepath)
          } catch (error) {
            console.warn('Could not delete old PDF file:', error)
          }
        }
      }

      // Update existing content
      result = await db
        .update(nutritionPlanContent)
        .set({
          contentType: 'pdf',
          content: null,
          pdfUrl: fileUrl,
          pdfFilename: file.name,
          updatedAt: new Date()
        })
        .where(eq(nutritionPlanContent.planId, planId))
        .returning()
    } else {
      // Create new content
      result = await db
        .insert(nutritionPlanContent)
        .values({
          planId,
          contentType: 'pdf',
          content: null,
          pdfUrl: fileUrl,
          pdfFilename: file.name
        })
        .returning()
    }

    return NextResponse.json({
      success: true,
      content: result[0],
      fileUrl
    })
  } catch (error) {
    console.error('Error uploading PDF:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  try {
    const { experienceId, planId } = await params
    const { userId } = await verifyUserToken(req.headers)
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has admin access to the experience
    const access = await whop.access.checkIfUserHasAccessToExperience({
      experienceId,
      userId
    })

    if (access.accessLevel !== 'admin') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    // Get the nutrition plan to verify it exists and belongs to this experience
    const plan = await db
      .select()
      .from(nutritionPlans)
      .where(and(
        eq(nutritionPlans.id, planId),
        eq(nutritionPlans.experienceId, experienceId)
      ))
      .limit(1)

    if (plan.length === 0) {
      return NextResponse.json({ error: 'Nutrition plan not found' }, { status: 404 })
    }

    // Get existing content
    const existingContent = await db
      .select()
      .from(nutritionPlanContent)
      .where(eq(nutritionPlanContent.planId, planId))
      .limit(1)

    if (existingContent.length === 0) {
      return NextResponse.json({ error: 'No content found' }, { status: 404 })
    }

    // Delete PDF file if it exists
    if (existingContent[0].pdfUrl) {
      const filename = existingContent[0].pdfUrl.split('/').pop()
      if (filename) {
        const filepath = join(uploadsDir, filename)
        try {
          await unlink(filepath)
        } catch (error) {
          console.warn('Could not delete PDF file:', error)
        }
      }
    }

    // Delete content record
    await db
      .delete(nutritionPlanContent)
      .where(eq(nutritionPlanContent.planId, planId))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting PDF:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
