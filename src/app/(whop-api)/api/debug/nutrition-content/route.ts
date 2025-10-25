import { NextRequest, NextResponse } from 'next/server'
import { verifyUserToken } from '@whop/api'
import { db } from '~/db'
import { nutritionPlanContent, nutritionPlans } from '~/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(req: NextRequest) {
  try {
    const { userId } = await verifyUserToken(req.headers)
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get all nutrition plans and their content
    const plans = await db.select().from(nutritionPlans)
    const content = await db.select().from(nutritionPlanContent)
    
    return NextResponse.json({
      plans,
      content,
      userId
    })
  } catch (error) {
    console.error('Debug error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
