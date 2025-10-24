import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { workoutSessions, exerciseLogs, workoutExercises } from '~/db/schema'
import { eq } from 'drizzle-orm'
import { whop } from '~/lib/whop'

export async function POST(
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

    const { planId, dayId, notes, exerciseLogs: exerciseLogData } = await req.json()
    
    if (!planId || !dayId) {
      return NextResponse.json({ error: 'Missing planId or dayId' }, { status: 400 })
    }

    // Create the workout session
    const [session] = await db
      .insert(workoutSessions)
      .values({
        planId,
        dayId,
        whopUserId: userId,
        completedAt: new Date(),
        notes: notes || null,
      })
      .returning()

    // Create exercise logs for each logged exercise
    if (exerciseLogData && exerciseLogData.length > 0) {
      const exerciseLogEntries = []
      
      for (const log of exerciseLogData) {
        if (log.weight > 0) { // Only log exercises where weight was entered
          // Get the exercise details to include sets and reps
          const [exercise] = await db
            .select()
            .from(workoutExercises)
            .where(eq(workoutExercises.id, log.exerciseId))
            .limit(1)

          if (exercise) {
            exerciseLogEntries.push({
              sessionId: session.id,
              exerciseId: log.exerciseId,
              sets: exercise.sets,
              reps: parseInt(exercise.reps) || 0, // Convert string reps to int
              weight: log.weight,
              notes: log.notes || null,
            })
          }
        }
      }

      if (exerciseLogEntries.length > 0) {
        await db.insert(exerciseLogs).values(exerciseLogEntries)
      }
    }

    return NextResponse.json(session, { status: 201 })
  } catch (error) {
    console.error('Failed to create workout session:', error)
    return NextResponse.json({ error: 'Failed to create workout session' }, { status: 500 })
  }
}
