import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { workoutExercises, workoutPlanDays, workoutPlans } from '~/db/schema'
import { whop } from '~/lib/whop'
import { eq, and } from 'drizzle-orm'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string; dayId: string; exerciseId: string }> }
) {
  try {
    const { experienceId, planId, dayId, exerciseId } = await params
    if (!experienceId || !planId || !dayId || !exerciseId)
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    const body = await request.json()
    const { name, reps, sets, currentWeight, maxWeight, orderIndex } = body

    if (!name) {
      return NextResponse.json({ error: 'Exercise name is required' }, { status: 400 })
    }

    // Verify the exercise exists and belongs to this day, plan, and experience
    const exercise = await db
      .select()
      .from(workoutExercises)
      .innerJoin(workoutPlanDays, eq(workoutExercises.dayId, workoutPlanDays.id))
      .innerJoin(workoutPlans, eq(workoutPlanDays.planId, workoutPlans.id))
      .where(
        and(
          eq(workoutExercises.id, exerciseId),
          eq(workoutExercises.dayId, dayId),
          eq(workoutPlanDays.planId, planId),
          eq(workoutPlans.experienceId, experienceId)
        )
      )
      .limit(1)

    if (exercise.length === 0) {
      return NextResponse.json({ error: 'Exercise not found' }, { status: 404 })
    }

    // Update the exercise
    const [updatedExercise] = await db
      .update(workoutExercises)
      .set({
        name,
        reps: reps ?? 0,
        sets: sets ?? 0,
        currentWeight: currentWeight ?? 0,
        maxWeight: maxWeight ?? 0,
        orderIndex: orderIndex ?? 0,
        updatedAt: new Date(),
      })
      .where(and(eq(workoutExercises.id, exerciseId), eq(workoutExercises.dayId, dayId)))
      .returning()

    if (!updatedExercise) {
      return NextResponse.json({ error: 'Exercise not found' }, { status: 404 })
    }

    return NextResponse.json(updatedExercise)
  } catch (error) {
    console.error('Error updating workout exercise:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string; dayId: string; exerciseId: string }> }
) {
  try {
    const { experienceId, planId, dayId, exerciseId } = await params
    if (!experienceId || !planId || !dayId || !exerciseId)
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Verify the exercise exists and belongs to this day, plan, and experience
    const exercise = await db
      .select()
      .from(workoutExercises)
      .innerJoin(workoutPlanDays, eq(workoutExercises.dayId, workoutPlanDays.id))
      .innerJoin(workoutPlans, eq(workoutPlanDays.planId, workoutPlans.id))
      .where(
        and(
          eq(workoutExercises.id, exerciseId),
          eq(workoutExercises.dayId, dayId),
          eq(workoutPlanDays.planId, planId),
          eq(workoutPlans.experienceId, experienceId)
        )
      )
      .limit(1)

    if (exercise.length === 0) {
      return NextResponse.json({ error: 'Exercise not found' }, { status: 404 })
    }

    // Delete the exercise
    const [deletedExercise] = await db
      .delete(workoutExercises)
      .where(and(eq(workoutExercises.id, exerciseId), eq(workoutExercises.dayId, dayId)))
      .returning()

    if (!deletedExercise) {
      return NextResponse.json({ error: 'Exercise not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting workout exercise:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
