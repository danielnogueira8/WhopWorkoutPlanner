import { NextRequest } from 'next/server'
import { db } from '~/db'
import { workoutPlans, workoutAssignments } from '~/db/schema'
import { eq, desc } from 'drizzle-orm'
import { verifyUserToken } from '@whop/api'
import { whop } from '~/lib/whop'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  try {
    const { experienceId } = await params
    if (!experienceId)
      return Response.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return Response.json({ error: 'Forbidden' }, { status: 403 })

    // Get recent workout plan assignments (last 10)
    const recentAssignments = await db
      .select({
        id: workoutAssignments.id,
        planTitle: workoutPlans.title,
        whopUserId: workoutAssignments.whopUserId,
        assignedByWhopUserId: workoutAssignments.assignedByWhopUserId,
        assignedAt: workoutAssignments.assignedAt,
      })
      .from(workoutAssignments)
      .innerJoin(workoutPlans, eq(workoutAssignments.planId, workoutPlans.id))
      .where(eq(workoutPlans.experienceId, experienceId))
      .orderBy(desc(workoutAssignments.assignedAt))
      .limit(10)

    // Get user details for each assignment
    const assignmentsWithUsers = await Promise.all(
      recentAssignments.map(async (assignment) => {
        try {
          // Get user details for the assigned user
          const user = await whop.users.getUser({ userId: assignment.whopUserId })
          // Get user details for the assigner
          const assigner = await whop.users.getUser({ userId: assignment.assignedByWhopUserId })
          
          return {
            id: assignment.id,
            planTitle: assignment.planTitle,
            assignedAt: assignment.assignedAt,
            user: {
              id: user.id,
              name: user.name || user.username,
              username: user.username,
            },
            assignedBy: {
              id: assigner.id,
              name: assigner.name || assigner.username,
              username: assigner.username,
            }
          }
        } catch (error) {
          // If user fetch fails, return basic info
          return {
            id: assignment.id,
            planTitle: assignment.planTitle,
            assignedAt: assignment.assignedAt,
            user: {
              id: assignment.whopUserId,
              name: 'Unknown User',
              username: 'unknown',
            },
            assignedBy: {
              id: assignment.assignedByWhopUserId,
              name: 'Unknown User',
              username: 'unknown',
            }
          }
        }
      })
    )

    return Response.json({ assignments: assignmentsWithUsers })
  } catch (error) {
    console.error('Error fetching recent assignments:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}

