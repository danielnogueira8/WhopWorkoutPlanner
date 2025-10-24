import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { workoutPlanDays } from '~/db/schema'
import { eq, inArray } from 'drizzle-orm'
import { whop } from '~/lib/whop'

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  const { experienceId, planId } = await params
  if (!experienceId || !planId)
    return NextResponse.json({ error: 'Missing params' }, { status: 400 })

  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access || (access as any).accessLevel !== 'admin')
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { dayIds } = await req.json()
    if (!Array.isArray(dayIds)) {
      return NextResponse.json({ error: 'dayIds must be an array' }, { status: 400 })
    }

    // Update the dayIndex for each day based on the new order
    for (let i = 0; i < dayIds.length; i++) {
      await db
        .update(workoutPlanDays)
        .set({ dayIndex: i })
        .where(eq(workoutPlanDays.id, dayIds[i]))
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to reorder days:', error)
    return NextResponse.json({ error: 'Failed to reorder days' }, { status: 500 })
  }
}
