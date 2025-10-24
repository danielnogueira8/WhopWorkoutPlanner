import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { workoutAssignments, workoutPlanDays, workoutPlans } from '~/db/schema'
import { whop } from '~/lib/whop'
import { and, eq, inArray, sql } from 'drizzle-orm'

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string }> },
) {
	const { experienceId } = await params
	if (!experienceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })

	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	try {
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
		const isAdmin = (access as any).accessLevel === 'owner' || (access as any).accessLevel === 'admin'

		let plans = await db
			.select()
			.from(workoutPlans)
			.where(eq(workoutPlans.experienceId, experienceId))
			.orderBy(sql`${workoutPlans.updatedAt} desc`)

		if (!isAdmin) {
			// Restrict to plans assigned to this user
			const assignedPlanIdsRows = await db
				.select({ planId: workoutAssignments.planId })
				.from(workoutAssignments)
				.where(and(eq(workoutAssignments.whopUserId, userId)))
			const assignedPlanIds = assignedPlanIdsRows.map((r) => r.planId)
			plans = plans.filter((p) => assignedPlanIds.includes(p.id))
		}

		// Aggregate counts
		const planIds = plans.map((p) => p.id)
		let daysCounts: Record<string, number> = {}
		let assignedCounts: Record<string, number> = {}
		if (planIds.length > 0) {
			const dayRows = await db
				.select({
					planId: workoutPlanDays.planId,
					daysCount: sql<number>`count(*)`,
				})
				.from(workoutPlanDays)
				.where(inArray(workoutPlanDays.planId, planIds))
				.groupBy(workoutPlanDays.planId)
			for (const r of dayRows) daysCounts[r.planId] = Number(r.daysCount)

			const assignRows = await db
				.select({
					planId: workoutAssignments.planId,
					assignedCount: sql<number>`count(*)`,
				})
				.from(workoutAssignments)
				.where(inArray(workoutAssignments.planId, planIds))
				.groupBy(workoutAssignments.planId)
			for (const r of assignRows) assignedCounts[r.planId] = Number(r.assignedCount)
		}

		const result = plans.map((p) => ({
			...p,
			daysCount: daysCounts[p.id] ?? 0,
			assignedCount: assignedCounts[p.id] ?? 0,
		}))

		return NextResponse.json(result)
	} catch (error) {
		console.error('Failed to list workouts:', error)
		return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
	}
}

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string }> },
) {
	const { experienceId } = await params
	if (!experienceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })

	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	const body = await req.json().catch(() => null) as { title?: string; description?: string } | null
	if (!body?.title) return NextResponse.json({ error: 'Missing title' }, { status: 400 })

	try {
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		if (!access || !((access as any).accessLevel === 'owner' || (access as any).accessLevel === 'admin'))
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		const [inserted] = await db
			.insert(workoutPlans)
			.values({
				experienceId,
				title: body.title,
				description: body.description ?? null,
				createdByWhopUserId: userId,
			})
			.returning()

		return NextResponse.json(inserted, { status: 201 })
	} catch (error) {
		console.error('Failed to create workout plan:', error)
		return NextResponse.json({ error: 'Failed to create' }, { status: 500 })
	}
}


