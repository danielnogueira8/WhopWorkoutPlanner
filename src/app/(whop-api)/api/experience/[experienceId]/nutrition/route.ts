import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { nutritionPlans, nutritionAssignments, nutritionPlanContent } from '~/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { experienceId } = await params
  
  const plans = await db.select().from(nutritionPlans).where(eq(nutritionPlans.experienceId, experienceId))
  const assignments = await db.select().from(nutritionAssignments)
  const contentData = await db.select().from(nutritionPlanContent)
  
  // Similar to workouts - aggregate assignment data and PDF info
  const plansWithData = plans.map(plan => {
    const planContent = contentData.find(c => c.planId === plan.id)
    return {
      ...plan,
      assignedUsers: assignments.filter(a => a.planId === plan.id),
      assignedCount: assignments.filter(a => a.planId === plan.id).length,
      hasPDF: planContent?.contentType === 'pdf' && !!planContent.pdfUrl,
      pdfFilename: planContent?.pdfFilename,
    }
  })
  
  return NextResponse.json(plansWithData)
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ experienceId: string }> }
) {
  const { userId } = await verifyUserToken(req.headers)
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { experienceId } = await params
  const { title } = await req.json()
  
  const [plan] = await db.insert(nutritionPlans).values({
    experienceId,
    title,
    createdByWhopUserId: userId,
  }).returning()
  
  return NextResponse.json(plan)
}
