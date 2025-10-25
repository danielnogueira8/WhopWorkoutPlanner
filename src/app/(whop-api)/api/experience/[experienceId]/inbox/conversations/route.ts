import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { and, eq, isNull, ne, sql } from 'drizzle-orm'
import { db } from '~/db'
import { inboxMessages } from '~/db/schema'
import { whop } from '~/lib/whop'

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string }> },
) {
	const { experienceId } = await params
	if (!experienceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })
	
	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	// Verify user has access to this experience
	const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
	if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

	const isAdmin = (access as any).accessLevel === 'admin'

	if (isAdmin) {
		// For admins, get all conversations with unread counts
		const conversations = await db
			.select({
				conversationUserId: inboxMessages.conversationUserId,
				unreadCount: sql<number>`COUNT(CASE WHEN ${inboxMessages.readAt} IS NULL AND ${inboxMessages.senderUserId} != ${userId} THEN 1 END)`,
				lastMessage: sql<string>`MAX(${inboxMessages.createdAt})`,
				lastMessageContent: sql<string>`(
					SELECT ${inboxMessages.content} 
					FROM ${inboxMessages} m2 
					WHERE m2.conversation_user_id = ${inboxMessages.conversationUserId} 
					AND m2.experience_id = ${experienceId}
					ORDER BY m2.created_at DESC 
					LIMIT 1
				)`,
			})
			.from(inboxMessages)
			.where(eq(inboxMessages.experienceId, experienceId))
			.groupBy(inboxMessages.conversationUserId)
			.orderBy(sql`unread_count DESC`, sql`last_message DESC`)

		return NextResponse.json(conversations)
	} else {
		// For regular users, get their own conversation summary
		const conversation = await db
			.select({
				conversationUserId: inboxMessages.conversationUserId,
				unreadCount: sql<number>`COUNT(CASE WHEN ${inboxMessages.readAt} IS NULL AND ${inboxMessages.senderUserId} != ${userId} THEN 1 END)`,
				lastMessage: sql<string>`MAX(${inboxMessages.createdAt})`,
				lastMessageContent: sql<string>`(
					SELECT ${inboxMessages.content} 
					FROM ${inboxMessages} m2 
					WHERE m2.conversation_user_id = ${inboxMessages.conversationUserId} 
					AND m2.experience_id = ${experienceId}
					ORDER BY m2.created_at DESC 
					LIMIT 1
				)`,
			})
			.from(inboxMessages)
			.where(and(
				eq(inboxMessages.experienceId, experienceId),
				eq(inboxMessages.conversationUserId, userId)
			))
			.groupBy(inboxMessages.conversationUserId)

		return NextResponse.json(conversation)
	}
}
