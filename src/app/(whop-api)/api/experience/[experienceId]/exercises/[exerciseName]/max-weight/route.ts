import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { exerciseLogs, workoutExercises, workoutSessions } from '~/db/schema'
import { whop } from '~/lib/whop'
import { and, eq, max, sql } from 'drizzle-orm'

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string; exerciseName: string }> },
) {
	const { experienceId, exerciseName } = await params
	if (!experienceId || !exerciseName)
		return NextResponse.json({ error: 'Missing params' }, { status: 400 })

	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	try {
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		// Find the max weight for this exercise name across all user's workout sessions
		const result = await db
			.select({ 
				maxWeight: max(exerciseLogs.weight)
			})
			.from(exerciseLogs)
			.innerJoin(workoutSessions, eq(exerciseLogs.sessionId, workoutSessions.id))
			.innerJoin(workoutExercises, eq(exerciseLogs.exerciseId, workoutExercises.id))
			.where(and(
				eq(workoutSessions.whopUserId, userId),
				eq(workoutExercises.name, exerciseName)
			))

		const maxWeight = result[0]?.maxWeight || 0

		return NextResponse.json({ maxWeight })
	} catch (error) {
		console.error('Error fetching max weight:', error)
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
	}
}
