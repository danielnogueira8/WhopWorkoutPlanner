import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { workoutAssignments, nutritionAssignments, workoutPlans, nutritionPlans } from '~/db/schema'
import { whop } from '~/lib/whop'
import { and, eq } from 'drizzle-orm'

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string; userId: string }> },
) {
	const { experienceId, userId } = await params
	if (!experienceId || !userId)
		return NextResponse.json({ error: 'Missing params' }, { status: 400 })

	const { userId: requesterId } = await verifyUserToken(req.headers)
	if (!requesterId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	try {
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId: requesterId })
		if (!access || (access as any).accessLevel !== 'admin')
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		// Get workout plan assignments for this user
		const workoutAssignmentsList = await db
			.select({ planId: workoutAssignments.planId })
			.from(workoutAssignments)
			.innerJoin(workoutPlans, eq(workoutAssignments.planId, workoutPlans.id))
			.where(and(
				eq(workoutAssignments.whopUserId, userId),
				eq(workoutPlans.experienceId, experienceId)
			))

		// Get nutrition plan assignments for this user
		const nutritionAssignmentsList = await db
			.select({ planId: nutritionAssignments.planId })
			.from(nutritionAssignments)
			.innerJoin(nutritionPlans, eq(nutritionAssignments.planId, nutritionPlans.id))
			.where(and(
				eq(nutritionAssignments.whopUserId, userId),
				eq(nutritionPlans.experienceId, experienceId)
			))

		return NextResponse.json({
			workoutPlans: workoutAssignmentsList.map(a => a.planId),
			nutritionPlans: nutritionAssignmentsList.map(a => a.planId),
		})
	} catch (error) {
		console.error('Error fetching user assignments:', error)
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
	}
}
