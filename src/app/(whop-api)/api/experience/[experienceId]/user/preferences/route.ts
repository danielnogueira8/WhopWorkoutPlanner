import { NextRequest, NextResponse } from 'next/server'
import { db, userPreferences } from '~/db'
import { eq, and } from 'drizzle-orm'
import { verifyUserToken } from '@whop/api'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  const { experienceId } = await params
  if (!experienceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })

  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    // Try to fetch existing preferences
    const preferences = await db
      .select()
      .from(userPreferences)
      .where(
        and(
          eq(userPreferences.whopUserId, userId),
          eq(userPreferences.experienceId, experienceId)
        )
      )
      .limit(1)

    if (preferences.length > 0) {
      return NextResponse.json({
        onboardingCompleted: preferences[0].onboardingCompleted,
        onboardingCompletedAt: preferences[0].onboardingCompletedAt,
      })
    }

    // If no preferences exist, return default
    return NextResponse.json({
      onboardingCompleted: false,
      onboardingCompletedAt: null,
    })
  } catch (error) {
    console.error('Error fetching user preferences:', error)
    return NextResponse.json({ error: 'Failed to fetch preferences' }, { status: 500 })
  }
}

