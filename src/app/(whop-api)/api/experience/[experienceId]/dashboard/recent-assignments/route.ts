import { NextRequest } from 'next/server'
import { db } from '~/db'
import { workoutPlans, workoutAssignments, nutritionPlans, nutritionAssignments } from '~/db/schema'
import { eq, desc } from 'drizzle-orm'
import { verifyUserToken } from '@whop/api'
import { whop } from '~/lib/whop'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  console.log('🔍 Recent Assignments API called')
  try {
    const { experienceId } = await params
    console.log('🔍 Experience ID:', experienceId)
    
    // Test: Check if there are ANY assignments in the database at all
    try {
      const allWorkoutAssignments = await db.select().from(workoutAssignments).limit(5)
      const allNutritionAssignments = await db.select().from(nutritionAssignments).limit(5)
      console.log('🔍 All workout assignments in DB:', allWorkoutAssignments.length)
      console.log('🔍 All nutrition assignments in DB:', allNutritionAssignments.length)
      console.log('🔍 Sample workout assignment:', allWorkoutAssignments[0])
      console.log('🔍 Sample nutrition assignment:', allNutritionAssignments[0])
    } catch (error) {
      console.error('🔍 Error checking all assignments:', error)
    }
    
    if (!experienceId)
      return Response.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return Response.json({ error: 'Forbidden' }, { status: 403 })

    // Get recent workout plan assignments (last 10)
    let workoutAssignmentsData: any[] = []
    try {
      // First get assignments, then get plan titles separately to avoid circular references
      const assignments = await db
        .select({
          id: workoutAssignments.id,
          planId: workoutAssignments.planId,
          whopUserId: workoutAssignments.whopUserId,
          assignedByWhopUserId: workoutAssignments.assignedByWhopUserId,
          assignedAt: workoutAssignments.assignedAt,
        })
        .from(workoutAssignments)
        .limit(10)
      
      console.log('🔍 Raw workout assignments:', assignments.length)
      
      // Get plan titles for these assignments
      if (assignments.length > 0) {
        const planIds = assignments.map(a => a.planId)
        const plans = await db
          .select({
            id: workoutPlans.id,
            title: workoutPlans.title,
            experienceId: workoutPlans.experienceId,
          })
          .from(workoutPlans)
          .where(eq(workoutPlans.experienceId, experienceId))
        
        console.log('🔍 Plans for experience:', plans.length)
        
        // Match assignments with plans
        workoutAssignmentsData = assignments
          .map(assignment => {
            const plan = plans.find(p => p.id === assignment.planId)
            if (plan) {
              return {
                id: assignment.id,
                planTitle: plan.title,
                whopUserId: assignment.whopUserId,
                assignedByWhopUserId: assignment.assignedByWhopUserId,
                assignedAt: assignment.assignedAt,
                type: 'workout' as const,
              }
            }
            return null
          })
          .filter((item): item is NonNullable<typeof item> => item !== null)
          .sort((a, b) => new Date(b.assignedAt).getTime() - new Date(a.assignedAt).getTime())
      }
      
      console.log('Workout assignments found:', workoutAssignmentsData.length)
    } catch (error) {
      console.error('Error fetching workout assignments:', error)
    }

    // Get recent nutrition plan assignments (last 10)
    let nutritionAssignmentsData: any[] = []
    try {
      // First get assignments, then get plan titles separately to avoid circular references
      const assignments = await db
        .select({
          id: nutritionAssignments.id,
          planId: nutritionAssignments.planId,
          whopUserId: nutritionAssignments.whopUserId,
          assignedByWhopUserId: nutritionAssignments.assignedByWhopUserId,
          assignedAt: nutritionAssignments.assignedAt,
        })
        .from(nutritionAssignments)
        .limit(10)
      
      console.log('🔍 Raw nutrition assignments:', assignments.length)
      
      // Get plan titles for these assignments
      if (assignments.length > 0) {
        const planIds = assignments.map(a => a.planId)
        const plans = await db
          .select({
            id: nutritionPlans.id,
            title: nutritionPlans.title,
            experienceId: nutritionPlans.experienceId,
          })
          .from(nutritionPlans)
          .where(eq(nutritionPlans.experienceId, experienceId))
        
        console.log('🔍 Nutrition plans for experience:', plans.length)
        
        // Match assignments with plans
        nutritionAssignmentsData = assignments
          .map(assignment => {
            const plan = plans.find(p => p.id === assignment.planId)
            if (plan) {
              return {
                id: assignment.id,
                planTitle: plan.title,
                whopUserId: assignment.whopUserId,
                assignedByWhopUserId: assignment.assignedByWhopUserId,
                assignedAt: assignment.assignedAt,
                type: 'nutrition' as const,
              }
            }
            return null
          })
          .filter((item): item is NonNullable<typeof item> => item !== null)
          .sort((a, b) => new Date(b.assignedAt).getTime() - new Date(a.assignedAt).getTime())
      }
      
      console.log('Nutrition assignments found:', nutritionAssignmentsData.length)
    } catch (error) {
      console.error('Error fetching nutrition assignments:', error)
    }

    // Combine and sort by assignedAt date
    const allAssignments = [...workoutAssignmentsData, ...nutritionAssignmentsData]
      .sort((a, b) => new Date(b.assignedAt).getTime() - new Date(a.assignedAt).getTime())
      .slice(0, 10)

    console.log('Total assignments to process:', allAssignments.length)

    // Get user details for each assignment
    let assignmentsWithUsers: any[] = []
    try {
      assignmentsWithUsers = await Promise.all(
        allAssignments.map(async (assignment) => {
          try {
            // Get user details for the assigned user
            const user = await whop.users.getUser({ userId: assignment.whopUserId })
            // Get user details for the assigner
            const assigner = await whop.users.getUser({ userId: assignment.assignedByWhopUserId })
            
            return {
              id: assignment.id,
              planTitle: assignment.planTitle,
              assignedAt: assignment.assignedAt,
              type: assignment.type,
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
            console.error('Error fetching user details for assignment:', assignment.id, error)
            // If user fetch fails, return basic info
            return {
              id: assignment.id,
              planTitle: assignment.planTitle,
              assignedAt: assignment.assignedAt,
              type: assignment.type,
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
    } catch (error) {
      console.error('Error processing assignments with users:', error)
      assignmentsWithUsers = []
    }

    console.log('Final assignments with users:', assignmentsWithUsers.length)
    console.log('🔍 Returning assignments:', assignmentsWithUsers)
    return Response.json({ assignments: assignmentsWithUsers })
  } catch (error) {
    console.error('Error fetching recent assignments:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}

