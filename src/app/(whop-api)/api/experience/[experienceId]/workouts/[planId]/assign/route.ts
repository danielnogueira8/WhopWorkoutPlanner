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
	const { experienceId, planId } = await params
	if (!experienceId || !planId)
		return NextResponse.json({ error: 'Missing params' }, { status: 400 })

	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	const body = (await req.json().catch(() => null)) as { whopUserId?: string } | null
	if (!body?.whopUserId)
		return NextResponse.json({ error: 'Missing whopUserId' }, { status: 400 })

	try {
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		if (!access || (access as any).accessLevel !== 'admin')
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		// Ensure plan belongs to experience
		const [plan] = await db
			.select({ id: workoutPlans.id })
			.from(workoutPlans)
			.where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
		if (!plan) return NextResponse.json({ error: 'Not found' }, { status: 404 })

		const [inserted] = await db
			.insert(workoutAssignments)
			.values({
				planId: plan.id,
				whopUserId: body.whopUserId,
				assignedByWhopUserId: userId,
			})
			.returning()

		return NextResponse.json(inserted, { status: 201 })
	} catch (error) {
		console.error('Failed to assign workout plan:', error)
		return NextResponse.json({ error: 'Failed to assign' }, { status: 500 })
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string; planId: string }> },
) {
	const { experienceId, planId } = await params
	if (!experienceId || !planId)
		return NextResponse.json({ error: 'Missing params' }, { status: 400 })

	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	const body = (await req.json().catch(() => null)) as { whopUserId?: string } | null
	if (!body?.whopUserId)
		return NextResponse.json({ error: 'Missing whopUserId' }, { status: 400 })

	try {
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		if (!access || (access as any).accessLevel !== 'admin')
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		// Ensure plan belongs to experience
		const [plan] = await db
			.select({ id: workoutPlans.id })
			.from(workoutPlans)
			.where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
		if (!plan) return NextResponse.json({ error: 'Not found' }, { status: 404 })

		// Remove the assignment
		const [deleted] = await db
			.delete(workoutAssignments)
			.where(and(
				eq(workoutAssignments.planId, plan.id),
				eq(workoutAssignments.whopUserId, body.whopUserId)
			))
			.returning()

		if (!deleted) return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })
		return NextResponse.json({ message: 'Assignment removed' })
	} catch (error) {
		console.error('Failed to remove workout plan assignment:', error)
		return NextResponse.json({ error: 'Failed to remove assignment' }, { status: 500 })
	}
}



