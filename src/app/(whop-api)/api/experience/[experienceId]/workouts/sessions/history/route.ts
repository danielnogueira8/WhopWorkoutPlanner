import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { workoutSessions, workoutPlans, workoutPlanDays, exerciseLogs } from '~/db/schema'
import { eq, desc, count } from 'drizzle-orm'
import { whop } from '~/lib/whop'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  const { experienceId } = await params
  if (!experienceId)
    return NextResponse.json({ error: 'Missing experienceId' }, { status: 400 })

  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Get workout sessions with plan and day details, ordered by completion date
    const sessions = await db
      .select({
        id: workoutSessions.id,
        planId: workoutSessions.planId,
        dayId: workoutSessions.dayId,
        completedAt: workoutSessions.completedAt,
        notes: workoutSessions.notes,
        planTitle: workoutPlans.title,
        dayName: workoutPlanDays.name,
        exerciseCount: count(exerciseLogs.id)
      })
      .from(workoutSessions)
      .innerJoin(workoutPlans, eq(workoutSessions.planId, workoutPlans.id))
      .innerJoin(workoutPlanDays, eq(workoutSessions.dayId, workoutPlanDays.id))
      .leftJoin(exerciseLogs, eq(workoutSessions.id, exerciseLogs.sessionId))
      .where(eq(workoutSessions.whopUserId, userId))
      .groupBy(
        workoutSessions.id,
        workoutSessions.planId,
        workoutSessions.dayId,
        workoutSessions.completedAt,
        workoutSessions.notes,
        workoutPlans.title,
        workoutPlanDays.name
      )
      .orderBy(desc(workoutSessions.completedAt))
      .limit(10)

    return NextResponse.json(sessions)
  } catch (error) {
    console.error('Failed to fetch workout history:', error)
    return NextResponse.json({ error: 'Failed to fetch workout history' }, { status: 500 })
  }
}
