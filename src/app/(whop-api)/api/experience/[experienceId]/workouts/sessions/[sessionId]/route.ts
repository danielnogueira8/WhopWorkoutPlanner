import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { workoutSessions, workoutPlans, workoutPlanDays, exerciseLogs, workoutExercises } from '~/db/schema'
import { eq } from 'drizzle-orm'
import { whop } from '~/lib/whop'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; sessionId: string }> }
) {
  const { experienceId, sessionId } = await params
  if (!experienceId || !sessionId)
    return NextResponse.json({ error: 'Missing experienceId or sessionId' }, { status: 400 })

  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Get the workout session with plan and day details
    const [session] = await db
      .select({
        id: workoutSessions.id,
        planId: workoutSessions.planId,
        dayId: workoutSessions.dayId,
        completedAt: workoutSessions.completedAt,
        notes: workoutSessions.notes,
        planTitle: workoutPlans.title,
        planDescription: workoutPlans.description,
        dayName: workoutPlanDays.name,
      })
      .from(workoutSessions)
      .innerJoin(workoutPlans, eq(workoutSessions.planId, workoutPlans.id))
      .innerJoin(workoutPlanDays, eq(workoutSessions.dayId, workoutPlanDays.id))
      .where(eq(workoutSessions.id, sessionId))
      .limit(1)

    if (!session) {
      return NextResponse.json({ error: 'Workout session not found' }, { status: 404 })
    }

    // Verify the session belongs to the authenticated user
    const [sessionOwner] = await db
      .select({ whopUserId: workoutSessions.whopUserId })
      .from(workoutSessions)
      .where(eq(workoutSessions.id, sessionId))
      .limit(1)

    if (sessionOwner?.whopUserId !== userId) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 })
    }

    // Get all exercise logs for this session
    const exerciseLogsData = await db
      .select({
        id: exerciseLogs.id,
        exerciseId: exerciseLogs.exerciseId,
        sets: exerciseLogs.sets,
        reps: exerciseLogs.reps,
        weight: exerciseLogs.weight,
        notes: exerciseLogs.notes,
        exerciseName: workoutExercises.name,
        weightUnit: workoutExercises.weightUnit,
      })
      .from(exerciseLogs)
      .innerJoin(workoutExercises, eq(exerciseLogs.exerciseId, workoutExercises.id))
      .where(eq(exerciseLogs.sessionId, sessionId))
      .orderBy(exerciseLogs.id)

    return NextResponse.json({
      ...session,
      exercises: exerciseLogsData
    })
  } catch (error) {
    console.error('Failed to fetch workout session details:', error)
    return NextResponse.json({ error: 'Failed to fetch workout session details' }, { status: 500 })
  }
}
