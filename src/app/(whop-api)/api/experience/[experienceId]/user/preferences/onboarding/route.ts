import { NextRequest, NextResponse } from 'next/server'
import { db, userPreferences } from '~/db'
import { eq, and } from 'drizzle-orm'
import { sql } from 'drizzle-orm'
import { verifyUserToken } from '@whop/api'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  const { experienceId } = await params
  if (!experienceId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })

  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    // Check if preferences already exist
    const existing = await db
      .select()
      .from(userPreferences)
      .where(
        and(
          eq(userPreferences.whopUserId, userId),
          eq(userPreferences.experienceId, experienceId)
        )
      )
      .limit(1)

    if (existing.length > 0) {
      // Update existing preferences
      const updated = await db
        .update(userPreferences)
        .set({
          onboardingCompleted: true,
          onboardingCompletedAt: new Date(),
          updatedAt: new Date(),
        })
        .where(
          and(
            eq(userPreferences.whopUserId, userId),
            eq(userPreferences.experienceId, experienceId)
          )
        )
        .returning()

      return NextResponse.json({ success: true, preferences: updated[0] })
    } else {
      // Create new preferences entry
      const created = await db
        .insert(userPreferences)
        .values({
          whopUserId: userId,
          experienceId,
          onboardingCompleted: true,
          onboardingCompletedAt: new Date(),
        })
        .returning()

      return NextResponse.json({ success: true, preferences: created[0] })
    }
  } catch (error) {
    console.error('Error updating onboarding status:', error)
    return NextResponse.json({ error: 'Failed to update onboarding status' }, { status: 500 })
  }
}

