'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, Button } from 'frosted-ui'
import { Calendar, Apple, Clock, Target } from 'lucide-react'
import Link from 'next/link'
import { useWhop } from '~/components/whop-context'
import { nutritionPlansQuery } from '~/components/nutrition/queries'

export default function NutritionPage() {
  const { experience, user } = useWhop()
  const { data: plans, isLoading } = useQuery(nutritionPlansQuery(experience.id))

  // Filter to only show plans assigned to this user
  const userPlans = plans?.filter((plan: any) => 
    plan.assignedUsers?.some((assignment: any) => assignment.whopUserId === user.id)
  ) ?? []

  const totalPlans = userPlans.length
  const stats = [
    {
      icon: Apple,
      label: 'Assigned Plans',
      value: totalPlans,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950'
    }
  ]

  if (isLoading) {
    return (
      <div className="p-4 md:p-6">
        <div className="text-sm opacity-70">Loading your nutrition plans...</div>
      </div>
    )
  }

  if (userPlans.length === 0) {
    return (
      <div className="p-4 md:p-6">
        <div className="text-center py-12">
          <Apple className="w-16 h-16 mx-auto text-accent mb-4" />
          <h2 className="text-xl font-semibold mb-2">No Nutrition Plans Assigned</h2>
          <p className="text-sm opacity-70 mb-6">
            You don't have any nutrition plans assigned yet. Contact your trainer to get started!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold">My Nutrition</h1>
        <p className="text-sm opacity-70 mt-1">Track your nutrition journey and progress</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <div className="p-3 md:p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs md:text-sm opacity-70">{stat.label}</p>
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <p className="text-lg md:text-2xl font-bold">{stat.value}</p>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Nutrition Plans */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Your Nutrition Plans</h2>
        <div className="grid gap-4">
          {userPlans.map((plan: any) => {
            const assignment = plan.assignedUsers?.find((a: any) => a.whopUserId === user.id)
            const assignedDate = assignment?.assignedAt ? new Date(assignment.assignedAt) : null
            
            return (
              <Card key={plan.id}>
                <div className="p-4 md:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{plan.title}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm opacity-70">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-accent" />
                          {plan.daysCount || 0} days
                        </div>
                        {assignedDate && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-accent" />
                            Assigned {assignedDate.toLocaleDateString()}
                          </div>
                        )}
                      </div>
                      {plan.description && (
                        <p className="text-sm opacity-70 mt-2">{plan.description}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/experiences/${experience.id}/nutrition-plans/${plan.id}` as any}>
                        <Button variant="soft" size="2">
                          View Plan
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <Card>
          <div className="p-4 md:p-5">
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={`/experiences/${experience.id}/nutrition-plans`}>
                <Button variant="soft" className="w-full sm:w-auto">
                  <Apple className="w-4 h-4 mr-2 text-accent" />
                  View All Plans
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
