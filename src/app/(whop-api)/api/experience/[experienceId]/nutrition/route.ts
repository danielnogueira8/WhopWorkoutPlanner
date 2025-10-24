import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { nutritionPlans, nutritionAssignments } from '~/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { experienceId } = await params
  
  const plans = await db.select().from(nutritionPlans).where(eq(nutritionPlans.experienceId, experienceId))
  const assignments = await db.select().from(nutritionAssignments)
  
  // Similar to workouts - aggregate assignment data
  const plansWithData = plans.map(plan => ({
    ...plan,
    assignedUsers: assignments.filter(a => a.planId === plan.id),
    assignedCount: assignments.filter(a => a.planId === plan.id).length,
  }))
  
  return NextResponse.json(plansWithData)
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { experienceId } = await params
  const { title } = await req.json()
  
  const [plan] = await db.insert(nutritionPlans).values({
    experienceId,
    title,
    createdByWhopUserId: userId,
  }).returning()
  
  return NextResponse.json(plan)
}
