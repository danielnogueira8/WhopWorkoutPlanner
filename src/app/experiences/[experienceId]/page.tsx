'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, Button } from 'frosted-ui'
import { 
  Dumbbell, 
  Apple, 
  CheckCircle,
  Clock, 
  Target,
  MessageSquare,
  Download,
  Play
} from 'lucide-react'
import Link from 'next/link'
import { useWhop } from '~/components/whop-context'
import { nutritionPlansQuery } from '~/components/nutrition/queries'
import { plansQuery, userAssignmentsQuery, workoutHistoryQuery } from '~/components/workouts/queries'

export default function UserDashboardPage() {
  const { access, experience, user } = useWhop()
  const isAdmin = (access as any).accessLevel === 'admin'
  
  // If admin, redirect to admin dashboard
  if (isAdmin) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-gray-600 mb-6">You're viewing the admin dashboard.</p>
          <Link href={`/experiences/${experience.id}/dashboard`}>
            <Button variant="solid" className="!bg-accent hover:!bg-accent/90 !text-white">
              Go to Admin Dashboard
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // Queries for user data
  const { data: nutritionPlans, isLoading: nutritionLoading } = useQuery(nutritionPlansQuery(experience.id))
  const { data: workoutPlans, isLoading: workoutLoading } = useQuery(plansQuery(experience.id))
  const { data: userAssignments, isLoading: assignmentsLoading } = useQuery(userAssignmentsQuery(experience.id, user.id))
  const { data: workoutHistory, isLoading: historyLoading } = useQuery(workoutHistoryQuery(experience.id))
  
  // Filter user's assigned plans
  const userWorkoutPlans = workoutPlans?.filter((plan: any) => 
    userAssignments?.workoutPlans?.includes(plan.id)
  ) ?? []
  const userNutritionPlans = nutritionPlans?.filter((plan: any) => 
    userAssignments?.nutritionPlans?.includes(plan.id)
  ) ?? []

  // Calculate stats
  const totalWorkoutPlans = userWorkoutPlans.length
  const totalNutritionPlans = userNutritionPlans.length

  const stats = [
    {
      icon: Dumbbell,
      label: 'My Workouts',
      value: totalWorkoutPlans,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      href: `/experiences/${experience.id}/my-workouts`
    },
    {
      icon: Apple,
      label: 'Nutrition Plans',
      value: totalNutritionPlans,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950',
      href: `/experiences/${experience.id}/nutrition`
    }
  ]

  return (
    <div className="p-4 md:p-6">
      {/* Welcome Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name}!
        </h1>
        <p className="text-gray-600">
          Ready to continue your fitness journey? Let's make today count.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const content = (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <p className="text-sm opacity-70">{stat.label}</p>
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </Card>
          )

          return stat.href ? (
            <Link key={index} href={stat.href as any}>
              {content}
            </Link>
          ) : content
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-8">
        
        {/* My Workouts */}
        <Card>
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg font-semibold text-gray-900">My Workouts</h2>
              <Dumbbell className="w-5 h-5 text-accent" />
            </div>
            
            {totalWorkoutPlans === 0 ? (
              <div className="text-center py-8">
                <Dumbbell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Workouts Yet</h3>
                <p className="text-gray-600 mb-4">Your trainer hasn't assigned any workout plans yet.</p>
                <Link href={`/experiences/${experience.id}/inbox`} className="mt-6 inline-block">
                  <Button variant="soft" size="2">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Trainer
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {userWorkoutPlans.slice(0, 3).map((plan: any) => (
                  <div key={plan.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Dumbbell className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{plan.title}</h4>
                        <p className="text-xs opacity-70">{plan.daysCount || 0} days</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/experiences/${experience.id}/my-workouts/${plan.id}`}>
                        <Button variant="soft" size="1">
                          <Target className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </Link>
                      <Link href={`/experiences/${experience.id}/my-workouts/${plan.id}/track`}>
                        <Button size="1">
                          <Play className="w-3 h-3 mr-1" />
                          Start
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
                {totalWorkoutPlans > 3 && (
                  <Link href={`/experiences/${experience.id}/my-workouts`}>
                    <Button variant="ghost" className="w-full">
                      View All Workouts
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </Card>

        {/* My Nutrition Plans */}
        <Card>
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg font-semibold text-gray-900">My Nutrition Plans</h2>
              <Apple className="w-5 h-5 text-accent" />
            </div>
            
            {totalNutritionPlans === 0 ? (
              <div className="text-center py-8">
                <Apple className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Nutrition Plans Yet</h3>
                <p className="text-gray-600 mb-4">Your trainer hasn't assigned any nutrition plans yet.</p>
                <Link href={`/experiences/${experience.id}/inbox`} className="mt-6 inline-block">
                  <Button variant="soft" size="2">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Trainer
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {userNutritionPlans.slice(0, 3).map((plan: any) => (
                  <div key={plan.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Apple className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{plan.title}</h4>
                        <p className="text-xs opacity-70">{plan.daysCount || 0} days</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/experiences/${experience.id}/nutrition-plans/${plan.id}`}>
                        <Button variant="soft" size="1">
                          <Target className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </Link>
                      {plan.content?.contentType === 'pdf' && (
                        <Button variant="soft" size="1">
                          <Download className="w-3 h-3 mr-1" />
                          PDF
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                {totalNutritionPlans > 3 && (
                  <Link href={`/experiences/${experience.id}/nutrition`}>
                    <Button variant="ghost" className="w-full">
                      View All Nutrition Plans
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-6">
        <Card>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              <Clock className="w-5 h-5 text-accent" />
            </div>
            {historyLoading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
                      <div className="h-2 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : workoutHistory && workoutHistory.length > 0 ? (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {workoutHistory.slice(0, 5).map((session) => (
                  <div key={session.id} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{session.planTitle} - {session.dayName}</p>
                      <p className="text-xs opacity-70">
                        Completed {new Date(session.completedAt).toLocaleDateString()}
                      </p>
                      <p className="text-xs opacity-50">
                        {session.exerciseCount} exercises
                      </p>
                    </div>
                    <Link href={`/experiences/${experience.id}/my-workouts/sessions/${session.id}`}>
                      <Button variant="soft" size="1">
                        <Target className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </Link>
                  </div>
                ))}
                {workoutHistory.length > 5 && (
                  <Link href={`/experiences/${experience.id}/my-workouts`}>
                    <Button variant="ghost" className="w-full">
                      View All Workout History
                    </Button>
                  </Link>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Recent Activity</h3>
                <p className="text-gray-600">
                  Your workout and nutrition activity will appear here.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}