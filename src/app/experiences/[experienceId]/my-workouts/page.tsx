'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, Button } from 'frosted-ui'
import { Calendar, BookOpen, CheckCircle, Clock, TrendingUp, Target, Dumbbell } from 'lucide-react'
import Link from 'next/link'
import { useWhop } from '~/components/whop-context'
import { plansQuery } from '~/components/workouts/queries'

export default function MyWorkoutsPage() {
  const { experience, user } = useWhop()
  const { data: plans, isLoading } = useQuery(plansQuery(experience.id))

  // API already filters to only show plans assigned to this user for non-admin users
  const userPlans = plans ?? []

  const totalWorkouts = userPlans.length
  const completedWorkouts = 0 // TODO: Implement completion tracking
  const totalDays = userPlans.reduce((sum, plan) => sum + (plan.daysCount || 0), 0)

  const stats = [
    {
      icon: Dumbbell,
      label: 'Assigned Plans',
      value: totalWorkouts,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      icon: CheckCircle,
      label: 'Completed',
      value: completedWorkouts,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950'
    },
    {
      icon: Calendar,
      label: 'Total Days',
      value: totalDays,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      icon: TrendingUp,
      label: 'Progress',
      value: totalWorkouts > 0 ? `${Math.round((completedWorkouts / totalWorkouts) * 100)}%` : '0%',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950'
    }
  ]

  if (isLoading) {
    return (
      <div className="p-4 md:p-6">
        <div className="text-sm opacity-70">Loading your workouts...</div>
      </div>
    )
  }

  if (userPlans.length === 0) {
    return (
      <div className="p-4 md:p-6">
        <div className="text-center py-12">
          <Dumbbell className="w-16 h-16 mx-auto text-accent mb-4" />
          <h2 className="text-xl font-semibold mb-2">No Workouts Assigned</h2>
          <p className="text-sm opacity-70 mb-6">
            You don't have any workout plans assigned yet. Contact your trainer to get started!
          </p>
          <Link href={`/experiences/${experience.id}/inbox`}>
            <Button variant="soft">
              <Target className="w-4 h-4 mr-2" />
              Contact Trainer
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold">My Workouts</h1>
        <p className="text-sm opacity-70 mt-1">Track your fitness journey and progress</p>
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

      {/* Workout Plans */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Your Workout Plans</h2>
        <div className="grid gap-4">
          {userPlans.map((plan) => {
            const isCompleted = false // TODO: Implement completion tracking
            
            return (
              <Card key={plan.id}>
                <div className="p-4 md:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{plan.title}</h3>
                        {isCompleted && (
                          <div className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full">
                            Completed
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm opacity-70">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-accent" />
                          {plan.daysCount} days
                        </div>
                      </div>
                      {plan.description && (
                        <p className="text-sm opacity-70 mt-2">{plan.description}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                          <Link href={`/experiences/${experience.id}/workouts/${plan.id}` as any}>
                        <Button variant="soft" size="2">
                          View Plan
                        </Button>
                      </Link>
                      {!isCompleted && (
                            <Link href={`/experiences/${experience.id}/workouts/${plan.id}/track` as any}>
                          <Button size="2">
                            Start Workout
                          </Button>
                        </Link>
                      )}
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
              <Link href={`/experiences/${experience.id}/inbox`}>
                <Button variant="soft" className="w-full sm:w-auto">
                  <Target className="w-4 h-4 mr-2 text-accent" />
                  Contact Trainer
                </Button>
              </Link>
              <Link href={`/experiences/${experience.id}/workouts`}>
                <Button variant="soft" className="w-full sm:w-auto">
                  <BookOpen className="w-4 h-4 mr-2 text-accent" />
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

