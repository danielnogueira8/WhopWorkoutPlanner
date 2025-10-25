import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { whop } from '~/lib/whop'
import { db } from '~/db'
import { nutritionPlanContent, nutritionPlans } from '~/db/schema'
import { eq, and } from 'drizzle-orm'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  try {
    const { experienceId, planId } = await params
    const { userId } = await verifyUserToken(req.headers)
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has access to the experience
    const access = await whop.access.checkIfUserHasAccessToExperience({
      experienceId,
      userId
    })

    if (access.accessLevel === 'no_access') {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 })
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

    // Get the content for this plan
    const content = await db
      .select()
      .from(nutritionPlanContent)
      .where(eq(nutritionPlanContent.planId, planId))
      .limit(1)

    if (content.length === 0) {
      return NextResponse.json({
        contentType: null,
        content: null,
        pdfUrl: null,
        pdfFilename: null
      })
    }

    return NextResponse.json(content[0])
  } catch (error) {
    console.error('Error fetching nutrition plan content:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
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

    const body = await req.json()
    const { contentType, content } = body

    if (!contentType || !['text', 'pdf'].includes(contentType)) {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 })
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

    // Check if content already exists
    const existingContent = await db
      .select()
      .from(nutritionPlanContent)
      .where(eq(nutritionPlanContent.planId, planId))
      .limit(1)

    if (existingContent.length > 0) {
      // Update existing content
      const updatedContent = await db
        .update(nutritionPlanContent)
        .set({
          contentType,
          content: contentType === 'text' ? content : null,
          pdfUrl: contentType === 'pdf' ? content : null,
          updatedAt: new Date()
        })
        .where(eq(nutritionPlanContent.planId, planId))
        .returning()

      return NextResponse.json(updatedContent[0])
    } else {
      // Create new content
      const newContent = await db
        .insert(nutritionPlanContent)
        .values({
          planId,
          contentType,
          content: contentType === 'text' ? content : null,
          pdfUrl: contentType === 'pdf' ? content : null
        })
        .returning()

      return NextResponse.json(newContent[0])
    }
  } catch (error) {
    console.error('Error saving nutrition plan content:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
