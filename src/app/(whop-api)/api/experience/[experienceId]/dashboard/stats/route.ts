import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { workoutPlans, workoutAssignments } from '~/db/schema'
import { whop } from '~/lib/whop'
import { eq, and, gte, sql } from 'drizzle-orm'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  try {
    const { experienceId } = await params
    if (!experienceId)
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Get total workout plans count
    const [totalPlansResult] = await db
      .select({ count: sql<number>`count(*)` })
      .from(workoutPlans)
      .where(eq(workoutPlans.experienceId, experienceId))

    // Get total assignments count
    const [totalAssignmentsResult] = await db
      .select({ count: sql<number>`count(*)` })
      .from(workoutAssignments)
      .innerJoin(workoutPlans, eq(workoutAssignments.planId, workoutPlans.id))
      .where(eq(workoutPlans.experienceId, experienceId))

    // Get recent assignments count (last 7 days)
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

    const [recentAssignmentsResult] = await db
      .select({ count: sql<number>`count(*)` })
      .from(workoutAssignments)
      .innerJoin(workoutPlans, eq(workoutAssignments.planId, workoutPlans.id))
      .where(
        and(
          eq(workoutPlans.experienceId, experienceId),
          gte(workoutAssignments.assignedAt, sevenDaysAgo)
        )
      )

    // Get unique clients count (users who have been assigned workouts)
    const [totalClientsResult] = await db
      .select({ count: sql<number>`count(distinct ${workoutAssignments.whopUserId})` })
      .from(workoutAssignments)
      .innerJoin(workoutPlans, eq(workoutAssignments.planId, workoutPlans.id))
      .where(eq(workoutPlans.experienceId, experienceId))

    const stats = {
      totalClients: totalClientsResult.count,
      totalPlans: totalPlansResult.count,
      totalAssignments: totalAssignmentsResult.count,
      recentAssignments: recentAssignmentsResult.count,
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

