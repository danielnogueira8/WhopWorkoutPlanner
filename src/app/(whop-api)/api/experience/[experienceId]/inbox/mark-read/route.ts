import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { and, eq, isNull, ne } from 'drizzle-orm'
import { db } from '~/db'
import { inboxMessages } from '~/db/schema'
import { whop } from '~/lib/whop'

export async function POST(
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
	const { conversationUserId } = await req.json()

	if (!conversationUserId) {
		return NextResponse.json({ error: 'Missing conversationUserId' }, { status: 400 })
	}

	// For admins, they can mark messages as read for any conversation
	// For regular users, they can only mark messages as read for their own conversation
	const targetConversationUserId = isAdmin ? conversationUserId : userId

	// Mark all unread messages in this conversation as read (excluding own messages)
	await db
		.update(inboxMessages)
		.set({ readAt: new Date() })
		.where(and(
			eq(inboxMessages.experienceId, experienceId),
			eq(inboxMessages.conversationUserId, targetConversationUserId),
			isNull(inboxMessages.readAt), // Only update unread messages
			ne(inboxMessages.senderUserId, userId) // Don't mark own messages as read
		))

	return NextResponse.json({ success: true })
}
