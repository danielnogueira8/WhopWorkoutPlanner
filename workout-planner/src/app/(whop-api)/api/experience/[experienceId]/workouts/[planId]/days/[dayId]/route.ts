import { verifyUserToken } from '@whop/api'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/db'
import { workoutPlanDays, workoutPlans } from '~/db/schema'
import { whop } from '~/lib/whop'
import { eq, and } from 'drizzle-orm'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string; dayId: string }> }
) {
  try {
    const { experienceId, planId, dayId } = await params
    if (!experienceId || !planId || !dayId)
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    const body = await request.json()
    const { name, dayIndex } = body

    if (!name) {
      return NextResponse.json({ error: 'Day name is required' }, { status: 400 })
    }

    // Verify the plan exists and belongs to this experience
    const plan = await db
      .select()
      .from(workoutPlans)
      .where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
      .limit(1)

    if (plan.length === 0) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }

    // Update the day
    const [updatedDay] = await db
      .update(workoutPlanDays)
      .set({
        name,
        dayIndex: dayIndex ?? 0,
        updatedAt: new Date(),
      })
      .where(and(eq(workoutPlanDays.id, dayId), eq(workoutPlanDays.planId, planId)))
      .returning()

    if (!updatedDay) {
      return NextResponse.json({ error: 'Day not found' }, { status: 404 })
    }

    return NextResponse.json(updatedDay)
  } catch (error) {
    console.error('Error updating workout plan day:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string; dayId: string }> }
) {
  try {
    const { experienceId, planId, dayId } = await params
    if (!experienceId || !planId || !dayId)
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const { userId } = await verifyUserToken(request.headers)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const access = await whop.access.checkIfUserHasAccessToExperience({ experienceId, userId })
    if (!access) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // Verify the plan exists and belongs to this experience
    const plan = await db
      .select()
      .from(workoutPlans)
      .where(and(eq(workoutPlans.id, planId), eq(workoutPlans.experienceId, experienceId)))
      .limit(1)

    if (plan.length === 0) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }

    // Delete the day (this will cascade delete exercises due to foreign key)
    const [deletedDay] = await db
      .delete(workoutPlanDays)
      .where(and(eq(workoutPlanDays.id, dayId), eq(workoutPlanDays.planId, planId)))
      .returning()

    if (!deletedDay) {
      return NextResponse.json({ error: 'Day not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting workout plan day:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
