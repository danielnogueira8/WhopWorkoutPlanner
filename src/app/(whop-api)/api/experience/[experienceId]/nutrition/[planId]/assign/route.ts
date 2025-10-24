import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { nutritionPlans, nutritionAssignments } from '~/db/schema'
import { eq, and } from 'drizzle-orm'
import { whop } from '~/lib/whop'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { experienceId, planId } = await params
  const { whopUserId } = await req.json()
  
  try {
    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access || (access as any).accessLevel !== 'admin')
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Verify the plan exists and belongs to this experience
    const plan = await db.select().from(nutritionPlans)
      .where(and(
        eq(nutritionPlans.id, planId),
        eq(nutritionPlans.experienceId, experienceId)
      ))
      .limit(1)
    
    if (!plan.length) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    
    // Check if assignment already exists
    const existingAssignment = await db.select().from(nutritionAssignments)
      .where(and(
        eq(nutritionAssignments.planId, planId),
        eq(nutritionAssignments.whopUserId, whopUserId)
      ))
      .limit(1)
    
    if (existingAssignment.length > 0) {
      return NextResponse.json({ error: 'Plan already assigned to this user' }, { status: 400 })
    }
    
    const [assignment] = await db.insert(nutritionAssignments).values({
      planId,
      whopUserId,
      assignedByWhopUserId: userId,
    }).returning()
    
    return NextResponse.json(assignment)
  } catch (error) {
    console.error('Failed to assign nutrition plan:', error)
    return NextResponse.json({ error: 'Failed to assign' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { experienceId, planId } = await params
  const { whopUserId } = await req.json()
  
  try {
    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access || (access as any).accessLevel !== 'admin')
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Verify the plan exists and belongs to this experience
    const plan = await db.select().from(nutritionPlans)
      .where(and(
        eq(nutritionPlans.id, planId),
        eq(nutritionPlans.experienceId, experienceId)
      ))
      .limit(1)
    
    if (!plan.length) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }
    
    // Remove the assignment
    const [deleted] = await db
      .delete(nutritionAssignments)
      .where(and(
        eq(nutritionAssignments.planId, planId),
        eq(nutritionAssignments.whopUserId, whopUserId)
      ))
      .returning()
    
    if (!deleted) {
      return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })
    }
    
    return NextResponse.json({ message: 'Assignment removed' })
  } catch (error) {
    console.error('Failed to remove nutrition plan assignment:', error)
    return NextResponse.json({ error: 'Failed to remove assignment' }, { status: 500 })
  }
}
