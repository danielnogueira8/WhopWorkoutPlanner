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
	try {
		const { experienceId } = await params
		console.log('📨 GET /inbox - experienceId:', experienceId)
		
		if (!experienceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })
		
		const { userId } = await verifyUserToken(req.headers)
		console.log('📨 GET /inbox - userId:', userId)
		
		if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

		// Any user with access can read their conversation
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		console.log('📨 GET /inbox - access:', access)
		
		if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		const isAdmin = (access as any).accessLevel === 'admin'
		const conversationUserId = isAdmin ? (new URL(req.url)).searchParams.get('userId') || userId : userId
		
		console.log('📨 GET /inbox - isAdmin:', isAdmin, 'conversationUserId:', conversationUserId)

		const messages = await db
			.select()
			.from(inboxMessages)
			.where(and(
				eq(inboxMessages.experienceId, experienceId),
				eq(inboxMessages.conversationUserId, conversationUserId),
			))
			.orderBy(inboxMessages.createdAt)

		console.log('📨 GET /inbox - found messages:', messages.length)
		console.log('📨 GET /inbox - messages:', messages.map(m => ({ id: m.id, senderUserId: m.senderUserId, content: m.content?.substring(0, 50) })))

		return NextResponse.json(messages)
	} catch (error) {
		console.error('📨 GET /inbox - ERROR:', error)
		return NextResponse.json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
	}
}

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string }> },
) {
	try {
		const { experienceId } = await params
		console.log('📤 POST /inbox - experienceId:', experienceId)
		
		if (!experienceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })
		
		const { userId } = await verifyUserToken(req.headers)
		console.log('📤 POST /inbox - userId:', userId)
		
		if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

		const body = (await req.json().catch(() => null)) as { content?: string; userId?: string } | null
		console.log('📤 POST /inbox - body:', body)
		
		if (!body?.content) return NextResponse.json({ error: 'Missing content' }, { status: 400 })

		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		console.log('📤 POST /inbox - access:', access)
		
		if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
		
		const isAdmin = (access as any).accessLevel === 'admin'
		const conversationUserId = isAdmin ? (body.userId ?? userId) : userId
		
		console.log('📤 POST /inbox - isAdmin:', isAdmin, 'conversationUserId:', conversationUserId, 'senderUserId:', userId)

		const [inserted] = await db
			.insert(inboxMessages)
			.values({
				experienceId,
				conversationUserId,
				senderUserId: userId,
				content: body.content,
			})
			.returning()

		console.log('📤 POST /inbox - inserted message:', inserted)

		return NextResponse.json(inserted, { status: 201 })
	} catch (error) {
		console.error('📤 POST /inbox - ERROR:', error)
		return NextResponse.json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
	}
}



