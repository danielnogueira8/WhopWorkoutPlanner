import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { nutritionPlans, nutritionAssignments } from '~/db/schema'
import { eq, and } from 'drizzle-orm'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { experienceId, planId } = await params
  const { whopUserId } = await req.json()
  
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
}
