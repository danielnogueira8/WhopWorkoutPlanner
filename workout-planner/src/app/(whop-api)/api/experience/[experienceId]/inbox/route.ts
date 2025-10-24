import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { and, eq, or } from 'drizzle-orm'
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

	// Any user with access can read their conversation
	const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
	if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

	const isAdmin = (access as any).accessLevel === 'owner' || (access as any).accessLevel === 'admin'
	const conversationUserId = isAdmin ? (new URL(req.url)).searchParams.get('userId') || userId : userId

	const messages = await db
		.select()
		.from(inboxMessages)
		.where(and(
			eq(inboxMessages.experienceId, experienceId),
			eq(inboxMessages.conversationUserId, conversationUserId),
		))
		.orderBy(inboxMessages.createdAt)

	return NextResponse.json(messages)
}

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string }> },
) {
	const { experienceId } = await params
	if (!experienceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })
	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	const body = (await req.json().catch(() => null)) as { content?: string; userId?: string } | null
	if (!body?.content) return NextResponse.json({ error: 'Missing content' }, { status: 400 })

	const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
	if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
	const isAdmin = (access as any).accessLevel === 'owner' || (access as any).accessLevel === 'admin'

	const conversationUserId = isAdmin ? (body.userId ?? userId) : userId

	const [inserted] = await db
		.insert(inboxMessages)
		.values({
			experienceId,
			conversationUserId,
			senderUserId: userId,
			content: body.content,
		})
		.returning()

	return NextResponse.json(inserted, { status: 201 })
}



