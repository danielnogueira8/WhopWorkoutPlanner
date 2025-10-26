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
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useWhop } from '~/components/whop-context'
import { nutritionPlansQuery } from '~/components/nutrition/queries'
import { plansQuery, userAssignmentsQuery, workoutHistoryQuery, recentActivityQuery } from '~/components/workouts/queries'
import { StatsSkeleton } from '~/components/ui/Skeleton'
import { EmptyState } from '~/components/ui/EmptyState'
import { WhopAccess } from '~/types/whop'

export default function UserDashboardPage() {
  const { access, experience, user } = useWhop()
  const router = useRouter()
  const isAdmin = (access as WhopAccess)?.accessLevel === 'admin'
  
  // If admin, redirect to admin dashboard immediately
  useEffect(() => {
    if (isAdmin && experience?.id) {
      router.replace(`/experiences/${experience.id}/dashboard`)
    }
  }, [isAdmin, experience?.id, router])
  
  // Show loading while redirecting
  if (isAdmin) {
    return (
      <div className="p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to admin dashboard...</p>
        </div>
      </div>
    )
  }

  // Queries for user data
  const { data: nutritionPlans, isLoading: nutritionLoading } = useQuery(nutritionPlansQuery(experience.id))
  const { data: workoutPlans, isLoading: workoutLoading } = useQuery(plansQuery(experience.id))
  const { data: userAssignments, isLoading: assignmentsLoading } = useQuery(userAssignmentsQuery(experience.id, user.id))
  const { data: workoutHistory, isLoading: historyLoading } = useQuery(workoutHistoryQuery(experience.id))
  const { data: activityData, isLoading: activityLoading } = useQuery(recentActivityQuery(experience.id))
  
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

  const formatActivity = (activity: any) => {
    const timeAgo = new Date(activity.createdAt).toLocaleDateString()
    
    switch (activity.type) {
      case 'assignment':
        return {
          icon: Target,
          description: `Assigned "${activity.planTitle}" to client`,
          time: timeAgo,
          color: 'text-emerald-600'
        }
      case 'plan_creation':
        return {
          icon: Dumbbell,
          description: `Created workout plan "${activity.planTitle}"`,
          time: timeAgo,
          color: 'text-green-600'
        }
      case 'message':
        const senderName = activity.senderName || 'Unknown User'
        return {
          icon: MessageSquare,
          description: `New message from ${senderName}: ${activity.message?.substring(0, 30)}${activity.message && activity.message.length > 30 ? '...' : ''}`,
          time: timeAgo,
          color: 'text-purple-600'
        }
      default:
        return {
          icon: Clock,
          description: 'Unknown activity',
          time: timeAgo,
          color: 'text-gray-600'
        }
    }
  }

  const stats = [
    {
      icon: Dumbbell,
      label: 'My Workouts',
      value: totalWorkoutPlans,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950',
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
    <div className="p-4 md:p-6 space-y-6">
      {/* Welcome Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name}!
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Ready to continue your fitness journey? Let's make today count.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {assignmentsLoading ? (
          <>
            <Card className="border border-gray-100 dark:border-gray-800 transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
              <StatsSkeleton />
            </Card>
            <Card className="border border-gray-100 dark:border-gray-800 transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
              <StatsSkeleton />
            </Card>
            <Card className="border border-gray-100 dark:border-gray-800 transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
              <StatsSkeleton />
            </Card>
            <Card className="border border-gray-100 dark:border-gray-800 transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
              <StatsSkeleton />
            </Card>
          </>
        ) : (
          stats.map((stat, index) => {
            const Icon = stat.icon
            const content = (
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
            
            return stat.href ? (
              <Link key={index} href={stat.href as any} className="transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                {content}
              </Link>
            ) : content
          })
        )}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        
        {/* My Workouts */}
        <Card className="border border-gray-100 dark:border-gray-800">
          <div className="p-4 md:p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg font-semibold text-gray-900">My Workouts</h2>
              <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
                <Dumbbell className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
            
            {totalWorkoutPlans === 0 ? (
              <EmptyState
                icon={Dumbbell}
                title="No Workouts Yet"
                description="Your trainer hasn't assigned any workout plans yet."
                action={{
                  label: "Contact Trainer",
                  onClick: () => window.location.href = `/experiences/${experience.id}/inbox`
                }}
              />
            ) : (
              <div className="space-y-3">
                {userWorkoutPlans.slice(0, 3).map((plan: any) => (
                  <div key={plan.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
                        <Dumbbell className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{plan.title}</h4>
                        <p className="text-xs opacity-70">{plan.daysCount || 0} days</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/experiences/${experience.id}/my-workouts/${plan.id}`}>
                        <Button variant="soft" size="1" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200">
                          <Target className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </Link>
                      <Link href={`/experiences/${experience.id}/my-workouts/${plan.id}/track`}>
                        <Button size="1" className="transition-colors duration-200">
                          <Play className="w-3 h-3 mr-1" />
                          Start
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
                {totalWorkoutPlans > 3 && (
                  <Link href={`/experiences/${experience.id}/my-workouts`}>
                    <Button variant="ghost" className="w-full transition-colors duration-200">
                      View All Workouts
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </Card>

        {/* My Nutrition Plans */}
        <Card className="border border-gray-100 dark:border-gray-800">
          <div className="p-4 md:p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg font-semibold text-gray-900">My Nutrition Plans</h2>
              <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
                <Apple className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
            
            {totalNutritionPlans === 0 ? (
              <EmptyState
                icon={Apple}
                title="No Nutrition Plans Yet"
                description="Your trainer hasn't assigned any nutrition plans yet."
                action={{
                  label: "Contact Trainer",
                  onClick: () => window.location.href = `/experiences/${experience.id}/inbox`
                }}
              />
            ) : (
              <div className="space-y-3">
                {userNutritionPlans.slice(0, 3).map((plan: any) => (
                  <div key={plan.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
                        <Apple className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{plan.title}</h4>
                        <p className="text-xs opacity-70">{plan.daysCount || 0} days</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/experiences/${experience.id}/nutrition-plans/${plan.id}`}>
                        <Button variant="soft" size="1" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200">
                          <Target className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </Link>
                      {plan.content?.contentType === 'pdf' && (
                        <Button variant="soft" size="1" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200">
                          <Download className="w-3 h-3 mr-1" />
                          PDF
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                {totalNutritionPlans > 3 && (
                  <Link href={`/experiences/${experience.id}/nutrition`}>
                    <Button variant="ghost" className="w-full transition-colors duration-200">
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
      <Card className="border border-gray-100 dark:border-gray-800">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          {historyLoading || activityLoading ? (
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
          ) : (workoutHistory && workoutHistory.length > 0) || (activityData?.activities && activityData.activities.length > 0) ? (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {workoutHistory?.slice(0, 5).map((session) => (
                <div key={session.id} className="flex items-start space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
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
                    <Button variant="soft" size="1" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200">
                      <Target className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </Link>
                </div>
              ))}
              
              {/* Show general activity including messages (excluding own messages) */}
              {activityData?.activities
                ?.filter((activity) => {
                  // Filter out user's own messages from recent activity
                  if (activity.type === 'message' && activity.whopUserId === user.id) {
                    return false
                  }
                  return true
                })
                ?.slice(0, 2)
                ?.map((activity) => {
                  const formatted = formatActivity(activity)
                  const Icon = formatted.icon
                  return (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center mt-0.5">
                        <Icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">{formatted.description}</p>
                        <p className="text-xs opacity-70">{formatted.time}</p>
                      </div>
                    </div>
                  )
                })}
              
              {workoutHistory && workoutHistory.length > 5 && (
                <Link href={`/experiences/${experience.id}/my-workouts`}>
                  <Button variant="ghost" className="w-full transition-colors duration-200">
                    View All Workout History
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <EmptyState
              icon={Clock}
              title="No Recent Activity"
              description="Your workout and nutrition activity will appear here."
            />
          )}
        </div>
      </Card>
    </div>
  )
}