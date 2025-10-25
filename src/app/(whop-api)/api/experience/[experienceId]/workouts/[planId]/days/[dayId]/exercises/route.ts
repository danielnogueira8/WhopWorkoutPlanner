import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { workoutExercises, workoutPlanDays, workoutPlans } from '~/db/schema'
import { whop } from '~/lib/whop'
import { eq, and } from 'drizzle-orm'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string; dayId: string }> }
) {
  try {
    const { experienceId, planId, dayId } = await params
    if (!experienceId || !planId || !dayId)
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Verify the day exists and belongs to this plan and experience
    const day = await db
      .select()
      .from(workoutPlanDays)
      .innerJoin(workoutPlans, eq(workoutPlanDays.planId, workoutPlans.id))
      .where(
        and(
          eq(workoutPlanDays.id, dayId),
          eq(workoutPlanDays.planId, planId),
          eq(workoutPlans.experienceId, experienceId)
        )
      )
      .limit(1)

    if (day.length === 0) {
      return NextResponse.json({ error: 'Day not found' }, { status: 404 })
    }

    // Get all exercises for this day, ordered by orderIndex
    const exercises = await db
      .select()
      .from(workoutExercises)
      .where(eq(workoutExercises.dayId, dayId))
      .orderBy(workoutExercises.orderIndex)

    return NextResponse.json(exercises)
  } catch (error) {
    console.error('Error fetching workout exercises:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string; dayId: string }> }
) {
  try {
    const { experienceId, planId, dayId } = await params
    if (!experienceId || !planId || !dayId)
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    const body = await request.json()
    const { name, reps, sets, currentWeight, maxWeight, weightUnit, restTime, orderIndex } = body

    if (!name) {
      return NextResponse.json({ error: 'Exercise name is required' }, { status: 400 })
    }

    // Verify the day exists and belongs to this plan and experience
    const day = await db
      .select()
      .from(workoutPlanDays)
      .innerJoin(workoutPlans, eq(workoutPlanDays.planId, workoutPlans.id))
      .where(
        and(
          eq(workoutPlanDays.id, dayId),
          eq(workoutPlanDays.planId, planId),
          eq(workoutPlans.experienceId, experienceId)
        )
      )
      .limit(1)

    if (day.length === 0) {
      return NextResponse.json({ error: 'Day not found' }, { status: 404 })
    }

    // Create the new exercise
    const [newExercise] = await db
      .insert(workoutExercises)
      .values({
        dayId,
        name,
        reps: reps ?? 0,
        sets: sets ?? 0,
        currentWeight: currentWeight ?? 0,
        maxWeight: maxWeight ?? 0,
        weightUnit: weightUnit ?? 'lbs',
        restTime: restTime ?? 60,
        orderIndex: orderIndex ?? 0,
      })
      .returning()

    return NextResponse.json(newExercise, { status: 201 })
  } catch (error) {
    console.error('Error creating workout exercise:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
