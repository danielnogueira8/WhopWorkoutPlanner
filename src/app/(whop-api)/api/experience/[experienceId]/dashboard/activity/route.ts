import { NextRequest } from 'next/server'
import { db } from '~/db'
import { workoutPlans, workoutAssignments, inboxMessages } from '~/db/schema'
import { eq, desc } from 'drizzle-orm'
import { verifyUserToken } from '@whop/api'
import { whop } from '~/lib/whop'
import { env } from '~/env'

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

    // Get recent workout plan creations - very simple query
    let planCreations: any[] = []
    try {
      const plans = await db
        .select({
          id: workoutPlans.id,
          title: workoutPlans.title,
          createdByWhopUserId: workoutPlans.createdByWhopUserId,
          createdAt: workoutPlans.createdAt,
        })
        .from(workoutPlans)
        .where(eq(workoutPlans.experienceId, experienceId))
        .orderBy(desc(workoutPlans.createdAt))
        .limit(3)
      
      planCreations = plans.map(plan => ({
        id: plan.id,
        type: 'plan_creation',
        planTitle: plan.title,
        whopUserId: plan.createdByWhopUserId,
        createdAt: plan.createdAt,
      }))
    } catch (error) {
      console.error('Error fetching plan creations:', error)
    }

    // Get recent inbox messages - very simple query
    let messages: any[] = []
    try {
      const inboxData = await db
        .select({
          id: inboxMessages.id,
          senderUserId: inboxMessages.senderUserId,
          content: inboxMessages.content,
          createdAt: inboxMessages.createdAt,
        })
        .from(inboxMessages)
        .where(eq(inboxMessages.experienceId, experienceId))
        .orderBy(desc(inboxMessages.createdAt))
        .limit(3)
      
      // Fetch user details for message senders using the correct Whop API method
      const senderUserIds = inboxData.map(msg => msg.senderUserId)
      const userDetails = new Map()
      
      if (senderUserIds.length > 0) {
        try {
          // Get all company members and create a lookup map
          const members = await whop.companies.listMembers({
            companyId: env.NEXT_PUBLIC_WHOP_COMPANY_ID,
          })
          
          const nodes = members?.members?.nodes ?? []
          nodes.forEach((m: any) => {
            if (m?.user && senderUserIds.includes(m.user.id)) {
              userDetails.set(m.user.id, {
                name: m.user.name || m.user.username || 'Unknown User',
                username: m.user.username || 'unknown'
              })
            }
          })
          
          // Set fallback for any users not found in the company members
          senderUserIds.forEach(userId => {
            if (!userDetails.has(userId)) {
              userDetails.set(userId, {
                name: `User ${userId.slice(-4)}`, // Show last 4 chars of user ID
                username: `user_${userId.slice(-4)}`
              })
            }
          })
        } catch (error) {
          console.error('Error fetching user details:', error)
          // Set fallback for all users if the API call fails
          senderUserIds.forEach(userId => {
            userDetails.set(userId, {
              name: `User ${userId.slice(-4)}`,
              username: `user_${userId.slice(-4)}`
            })
          })
        }
      }
      
      messages = inboxData.map(msg => {
        const userInfo = userDetails.get(msg.senderUserId)
        return {
          id: msg.id,
          type: 'message',
          planTitle: null,
          whopUserId: msg.senderUserId,
          createdAt: msg.createdAt,
          message: msg.content,
          senderName: userInfo?.name || 'Unknown User',
          senderUsername: userInfo?.username || 'unknown'
        }
      })
    } catch (error) {
      console.error('Error fetching messages:', error)
    }

    // Combine activities
    const activities = [...planCreations, ...messages]

    // Sort by date
    activities.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime()
      const dateB = new Date(b.createdAt).getTime()
      return dateB - dateA
    })

    return Response.json({ activities })
    
  } catch (error) {
    console.error('Error fetching recent activity:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
