import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { workoutAssignments, workoutPlans } from '~/db/schema'
import { whop } from '~/lib/whop'
import { and, eq } from 'drizzle-orm'

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string; planId: string }> },
) {
	try {
		const { experienceId, planId } = await params
		
		if (!experienceId || !planId)
			return NextResponse.json({ error: 'Missing params' }, { status: 400 })

		const { userId } = await verifyUserToken(req.headers)
		if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

		const body = (await req.json().catch(() => null)) as { whopUserIds?: string[] } | null
		
		if (!body?.whopUserIds || !Array.isArray(body.whopUserIds) || body.whopUserIds.length === 0)
			return NextResponse.json({ error: 'Missing whopUserIds array' }, { status: 400 })

		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		
		if (!access || (access as any).accessLevel !== 'admin')
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		// Ensure plan belongs to experience
		const [plan] = await db
			.select({ id: workoutPlans.id })
			.from(workoutPlans)
			.where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
		if (!plan) return NextResponse.json({ error: 'Plan not found' }, { status: 404 })

		// Create assignments for all selected users
		const assignments = body.whopUserIds.map(whopUserId => ({
			planId: plan.id,
			whopUserId,
			assignedByWhopUserId: userId,
		}))

		// Check for existing assignments to avoid duplicates
		const existingAssignments = await db
			.select()
			.from(workoutAssignments)
			.where(eq(workoutAssignments.planId, plan.id))

		// Filter out users who already have this plan assigned
		const existingUserIds = existingAssignments.map(a => a.whopUserId)
		const newAssignments = assignments.filter(assignment => 
			!existingUserIds.includes(assignment.whopUserId)
		)

		if (newAssignments.length === 0) {
			return NextResponse.json({ 
				message: 'All selected users already have this plan assigned',
				assignments: [] 
			}, { status: 200 })
		}

		const inserted = await db
			.insert(workoutAssignments)
			.values(newAssignments)
			.returning()

		return NextResponse.json({ 
			message: `Successfully assigned plan to ${inserted.length} clients`,
			assignments: inserted 
		}, { status: 201 })
	} catch (error) {
		console.error('Failed to bulk assign workout plan:', error)
		return NextResponse.json({ error: 'Failed to assign plan' }, { status: 500 })
	}
}
