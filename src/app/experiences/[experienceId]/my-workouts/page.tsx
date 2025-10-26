'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, Button } from 'frosted-ui'
import { Calendar, BookOpen, CheckCircle, Clock, Target, Dumbbell, Download, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useWhop } from '~/components/whop-context'
import { plansQuery, planDetailQuery, workoutHistoryQuery } from '~/components/workouts/queries'
import { generateWorkoutPlanPDF } from '~/lib/pdf-generator'
import { StatsSkeleton, CardSkeleton } from '~/components/ui/Skeleton'
import { EmptyState } from '~/components/ui/EmptyState'
import { WhopAccess } from '~/types/whop'

export default function MyWorkoutsPage() {
  const { experience, user, access } = useWhop()
  const isAdmin = (access as WhopAccess)?.accessLevel === 'admin'
  const { data: plans, isLoading } = useQuery(plansQuery(experience.id))
  const { data: workoutHistory, isLoading: isLoadingHistory } = useQuery(workoutHistoryQuery(experience.id))

  const handleDownloadPDF = async (planId: string, planTitle: string) => {
    try {
      // Fetch the full plan details including all days and exercises
      const response = await fetch(`/api/experience/${experience.id}/workouts/${planId}`)
      if (!response.ok) throw new Error('Failed to fetch plan details')
      const planDetails = await response.json()
      
      // Generate and download the PDF
      generateWorkoutPlanPDF(planDetails)
    } catch (error) {
      console.error('Error downloading PDF:', error)
      // You could add a toast notification here
    }
  }

  // API already filters to only show plans assigned to this user for non-admin users
  const userPlans = plans ?? []

  const totalWorkouts = userPlans.length
  const completedWorkouts = workoutHistory?.length || 0
  const totalDays = userPlans.reduce((sum, plan) => sum + (plan.daysCount || 0), 0)

  const stats = [
    {
      icon: Dumbbell,
      label: 'Assigned Plans',
      value: totalWorkouts,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950'
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
    }
  ]

  if (isLoading) {
    return (
      <div className="p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">My Workouts</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">Track your fitness journey and progress</p>
        </div>

        {/* Stats Overview Skeleton */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <Card className="border border-gray-100 dark:border-gray-800"><StatsSkeleton /></Card>
          <Card className="border border-gray-100 dark:border-gray-800"><StatsSkeleton /></Card>
          <Card className="border border-gray-100 dark:border-gray-800"><StatsSkeleton /></Card>
        </div>

        {/* Workout Plans Skeleton */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Your Workout Plans</h2>
          <div className="grid gap-4">
            <Card className="border border-gray-100 dark:border-gray-800"><CardSkeleton /></Card>
            <Card className="border border-gray-100 dark:border-gray-800"><CardSkeleton /></Card>
          </div>
        </div>

        {/* Workout History Skeleton */}
        <Card className="border border-gray-100 dark:border-gray-800">
          <div className="p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Workout History</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                  <div>
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1" />
                    <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1" />
                  <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  if (userPlans.length === 0) {
    return (
      <div className="p-4 md:p-6 space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">My Workouts</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">Track your fitness journey and progress</p>
        </div>
        <EmptyState
          icon={Dumbbell}
          title="No Workouts Assigned"
          description="You don't have any workout plans assigned yet. Contact your trainer to get started!"
        />
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">My Workouts</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">Track your fitness journey and progress</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="border border-gray-100 dark:border-gray-800 transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <p className="text-xs opacity-70">{stat.label}</p>
                  <div className={`w-8 h-8 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Workout Plans */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Your Workout Plans</h2>
        <div className="grid gap-4">
          {userPlans.map((plan) => {
            const isCompleted = false // TODO: Implement completion tracking
            
            return (
              <Card key={plan.id} className="border border-gray-100 dark:border-gray-800 transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
                <div className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-sm font-medium">{plan.title}</h3>
                        {isCompleted && (
                          <div className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs rounded-full">
                            Completed
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-xs opacity-70">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          {plan.daysCount} days
                        </div>
                      </div>
                      {plan.description && (
                        <p className="text-xs opacity-70 mt-2">{plan.description}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/experiences/${experience.id}/my-workouts/${plan.id}` as any}>
                        <Button variant="soft" size="2" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200">
                          View Plan
                        </Button>
                      </Link>
                      {!isCompleted && (
                        <Link href={`/experiences/${experience.id}/my-workouts/${plan.id}/track` as any}>
                          <Button size="2" className="transition-colors duration-200">
                            Start Workout
                          </Button>
                        </Link>
                      )}
                      <Button 
                        variant="soft" 
                        size="2"
                        onClick={() => handleDownloadPDF(plan.id, plan.title)}
                        className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Workout History */}
      <Card className="border border-gray-100 dark:border-gray-800">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Workout History</h3>
            <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          {isLoadingHistory ? (
            <div className="text-sm opacity-70">Loading workout history...</div>
          ) : workoutHistory && workoutHistory.length > 0 ? (
            <div className="space-y-3">
              {workoutHistory.map((session) => (
                <Link 
                  key={session.id} 
                  href={`/experiences/${experience.id}/my-workouts/sessions/${session.id}`}
                  className="block"
                >
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{session.planTitle}</div>
                        <div className="text-xs opacity-70">{session.dayName}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="text-xs opacity-70">
                          {new Date(session.completedAt).toLocaleDateString()}
                        </div>
                        <div className="text-xs opacity-70">
                          {session.exerciseCount} exercises logged
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Clock}
              title="No Workout History"
              description="Your completed workouts will appear here."
            />
          )}
        </div>
      </Card>

    </div>
  )
}

