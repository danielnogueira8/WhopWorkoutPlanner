import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { workoutPlanDays, workoutPlans } from '~/db/schema'
import { whop } from '~/lib/whop'
import { eq, and } from 'drizzle-orm'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  try {
    const { experienceId, planId } = await params
    if (!experienceId || !planId)
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Verify the plan exists and belongs to this experience
    const plan = await db
      .select()
      .from(workoutPlans)
      .where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
      .limit(1)

    if (plan.length === 0) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }

    // Get all days for this plan, ordered by dayIndex
    const days = await db
      .select()
      .from(workoutPlanDays)
      .where(eq(workoutPlanDays.planId, planId))
      .orderBy(workoutPlanDays.dayIndex)

    return NextResponse.json(days)
  } catch (error) {
    console.error('Error fetching workout plan days:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  try {
    const { experienceId, planId } = await params
    if (!experienceId || !planId)
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    const body = await request.json()
    const { name, dayIndex } = body

    if (!name) {
      return NextResponse.json({ error: 'Day name is required' }, { status: 400 })
    }

    // Verify the plan exists and belongs to this experience
    const plan = await db
      .select()
      .from(workoutPlans)
      .where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
      .limit(1)

    if (plan.length === 0) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }

    // Create the new day
    const [newDay] = await db
      .insert(workoutPlanDays)
      .values({
        planId,
        name,
        dayIndex: dayIndex ?? 0,
      })
      .returning()

    return NextResponse.json(newDay, { status: 201 })
  } catch (error) {
    console.error('Error creating workout plan day:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
