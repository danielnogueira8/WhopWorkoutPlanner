import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { workoutExercises, workoutPlanDays, workoutPlans } from '~/db/schema'
import { whop } from '~/lib/whop'
import { and, eq, inArray } from 'drizzle-orm'

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string; planId: string }> },
) {
	const { experienceId, planId } = await params
	if (!experienceId || !planId)
		return NextResponse.json({ error: 'Missing params' }, { status: 400 })

	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	try {
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		const [plan] = await db
			.select()
			.from(workoutPlans)
			.where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
		if (!plan) return NextResponse.json({ error: 'Not found' }, { status: 404 })

		const days = await db
			.select()
			.from(workoutPlanDays)
			.where(eq(workoutPlanDays.planId, plan.id))
			.orderBy(workoutPlanDays.dayIndex)
		const dayIds = days.map((d) => d.id)
		const exercises = dayIds.length
			? await db
					.select()
					.from(workoutExercises)
					.where(inArray(workoutExercises.dayId, dayIds))
			: []

		// Map exercises to days
		const dayIdToExercises: Record<string, typeof exercises> = {}
		for (const ex of exercises) {
			if (!dayIdToExercises[ex.dayId]) dayIdToExercises[ex.dayId] = [] as any
			;(dayIdToExercises[ex.dayId] as any).push(ex)
		}
		const result = {
			...plan,
			days: days.map((d) => ({ ...d, exercises: (dayIdToExercises[d.id] as any) ?? [] })),
		}
		return NextResponse.json(result)
	} catch (error) {
		console.error('Failed to read workout plan:', error)
		return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string; planId: string }> },
) {
	const { experienceId, planId } = await params
	if (!experienceId || !planId)
		return NextResponse.json({ error: 'Missing params' }, { status: 400 })

	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	const body = (await req.json().catch(() => null)) as { title?: string; description?: string | null } | null
	if (!body || (!('title' in body) && !('description' in body)))
		return NextResponse.json({ error: 'No changes' }, { status: 400 })

	try {
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		if (!access || !['owner', 'admin'].includes((access as any).accessLevel))
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		const [updated] = await db
			.update(workoutPlans)
			.set({
				...(body.title !== undefined ? { title: body.title } : {}),
				...(body.description !== undefined ? { description: body.description } : {}),
			})
			.where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
			.returning()

		if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 })
		return NextResponse.json(updated)
	} catch (error) {
		console.error('Failed to update workout plan:', error)
		return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
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

	try {
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		if (!access || !['owner', 'admin'].includes((access as any).accessLevel))
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		// First, get all days for this plan
		const days = await db
			.select({ id: workoutPlanDays.id })
			.from(workoutPlanDays)
			.where(eq(workoutPlanDays.planId, planId))

		const dayIds = days.map(d => d.id)

		// Delete exercises first (if any)
		if (dayIds.length > 0) {
			await db
				.delete(workoutExercises)
				.where(inArray(workoutExercises.dayId, dayIds))
		}

		// Delete days
		await db
			.delete(workoutPlanDays)
			.where(eq(workoutPlanDays.planId, planId))

		// Finally, delete the plan
		const [deleted] = await db
			.delete(workoutPlans)
			.where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
			.returning()

		if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 })
		return NextResponse.json({ success: true })
	} catch (error) {
		console.error('Failed to delete workout plan:', error)
		return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
	}
}


