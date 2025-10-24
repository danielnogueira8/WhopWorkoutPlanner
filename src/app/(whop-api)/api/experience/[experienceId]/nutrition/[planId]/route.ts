import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { nutritionPlans } from '~/db/schema'
import { eq, and } from 'drizzle-orm'

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { experienceId, planId } = await params
  const { title } = await req.json()
  
  const [plan] = await db.update(nutritionPlans)
    .set({ title, updatedAt: new Date() })
    .where(and(
      eq(nutritionPlans.id, planId),
      eq(nutritionPlans.experienceId, experienceId)
    ))
    .returning()
  
  if (!plan) {
    return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
  }
  
  return NextResponse.json(plan)
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string; planId: string }> }
) {
  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { experienceId, planId } = await params
  
  const [plan] = await db.delete(nutritionPlans)
    .where(and(
      eq(nutritionPlans.id, planId),
      eq(nutritionPlans.experienceId, experienceId)
    ))
    .returning()
  
  if (!plan) {
    return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
  }
  
  return NextResponse.json({ success: true })
}
