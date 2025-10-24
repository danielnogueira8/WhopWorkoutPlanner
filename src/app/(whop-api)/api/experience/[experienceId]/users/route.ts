import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { env } from '~/env'
import { whop } from '~/lib/whop'

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ experienceId: string }> },
) {
	const { experienceId } = await params
	if (!experienceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })

	const { userId } = await verifyUserToken(req.headers)
	if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

	try {
		// Ensure requester has access and is owner (admin-only endpoint for now)
		const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
		if (
			!access ||
			!((access as any).accessLevel === 'owner' || (access as any).accessLevel === 'admin')
		)
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

		const { searchParams } = new URL(req.url)
		const q = searchParams.get('q')?.trim()

		const members = await whop.companies.listMembers({
			companyId: env.NEXT_PUBLIC_WHOP_COMPANY_ID,
			filters: q ? { query: q } : undefined,
		})

		const nodes = members?.members?.nodes ?? []
		const result = nodes
			.filter((m: any) => !!m?.user)
			.map((m: any) => ({
				id: m.user.id as string,
				username: (m.user.username ?? '') as string,
				name: (m.user.name ?? '') as string,
			}))

		return NextResponse.json(result)
	} catch (error) {
		console.error('Failed to list users:', error)
		return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
	}
}


