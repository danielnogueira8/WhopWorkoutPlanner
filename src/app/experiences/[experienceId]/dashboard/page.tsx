'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, Button, Dialog, TextField } from 'frosted-ui'
import { Users, BookOpen, CheckCircle, UserPlus, Plus, UserCheck, Eye, Settings, MessageSquare, Clock, UserCheck as UserCheckIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useWhop } from '~/components/whop-context'
import { dashboardStatsQuery, createPlanMutation, recentActivityQuery, recentAssignmentsQuery, type RecentActivity, type RecentAssignment } from '~/components/workouts/queries'
import { StatsSkeleton } from '~/components/ui/Skeleton'
import { EmptyState } from '~/components/ui/EmptyState'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function DashboardPage() {
  const { access, experience } = useWhop()
  const isAdmin = (access as any).accessLevel === 'admin'
  const [newPlanOpen, setNewPlanOpen] = useState(false)
  const [newPlanTitle, setNewPlanTitle] = useState('')
  const qc = useQueryClient()
  
  if (!isAdmin) {
    return (
      <div className="p-6">
        <div className="text-sm opacity-70">You don't have access to this page.</div>
      </div>
    )
  }

  const { data: stats, isLoading, error } = useQuery(dashboardStatsQuery(experience.id))
  const { data: activityData, isLoading: isLoadingActivity } = useQuery(recentActivityQuery(experience.id))
  const { data: assignmentsData, isLoading: isLoadingAssignments } = useQuery(recentAssignmentsQuery(experience.id))

  const createPlan = useMutation({
    mutationFn: createPlanMutation(experience.id).mutationFn,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['dashboard-stats', experience.id] })
      qc.invalidateQueries({ queryKey: ['workout-plans', experience.id] })
      qc.invalidateQueries({ queryKey: ['recent-activity', experience.id] })
      setNewPlanOpen(false)
      setNewPlanTitle('')
    },
  })

  const formatActivity = (activity: RecentActivity) => {
    const timeAgo = new Date(activity.createdAt).toLocaleDateString()
    
    switch (activity.type) {
      case 'assignment':
        return {
          icon: UserCheck,
          description: `Assigned "${activity.planTitle}" to client`,
          time: timeAgo,
          color: 'text-emerald-600'
        }
      case 'plan_creation':
        return {
          icon: Plus,
          description: `Created workout plan "${activity.planTitle}"`,
          time: timeAgo,
          color: 'text-green-600'
        }
      case 'message':
        const senderName = (activity as any).senderName || 'Unknown User'
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

  const metrics = [
    {
      icon: Users,
      label: 'Total Clients',
      value: stats?.totalClients ?? 0,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950'
    },
    {
      icon: BookOpen,
      label: 'Workout Plans',
      value: stats?.totalPlans ?? 0,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950'
    },
    {
      icon: CheckCircle,
      label: 'Total Assignments',
      value: stats?.totalAssignments ?? 0,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      icon: UserPlus,
      label: 'Recent Assignments',
      value: stats?.recentAssignments ?? 0,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950'
    }
  ]

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
          Overview of your fitness coaching business
        </p>
      </div>

      {/* Clean Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {isLoading ? (
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
          metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card key={index} className="border border-gray-100 dark:border-gray-800 transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-xs opacity-70">{metric.label}</p>
                    <div className={`w-8 h-8 ${metric.bgColor} rounded-full flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                  {error ? (
                    <p className="text-sm text-red-600">Error</p>
                  ) : (
                    <p className="text-2xl font-bold">{metric.value}</p>
                  )}
                </div>
              </Card>
            )
          })
        )}
      </div>

      {/* Recent Activity and Recent Assignments */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

        <Card className="border border-gray-100 dark:border-gray-800">
          <div className="p-4 md:p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
            {isLoadingActivity ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
                      <div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : activityData?.activities.length === 0 ? (
              <EmptyState
                icon={Clock}
                title="No Recent Activity"
                description="Activity will appear here when you create plans, assign workouts, or send messages."
              />
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {activityData?.activities.slice(0, 5).map((activity) => {
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
              </div>
            )}
          </div>
        </Card>

        <Card className="border border-gray-100 dark:border-gray-800">
          <div className="p-4 md:p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Recent Assignments</h2>
              <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
                <UserCheckIcon className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
            {isLoadingAssignments ? (
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
            ) : assignmentsData?.assignments.length === 0 ? (
              <EmptyState
                icon={UserCheckIcon}
                title="No Recent Assignments"
                description="Assignments will appear here when you assign workout plans to clients."
              />
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {assignmentsData?.assignments.slice(0, 5).map((assignment) => (
                  <div key={assignment.id} className="flex items-start space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center mt-0.5">
                      <UserCheckIcon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{assignment.user.name}</p>
                      <p className="text-xs opacity-70">
                        Assigned "{assignment.planTitle}" by {assignment.assignedBy.name}
                      </p>
                      <p className="text-xs opacity-50">
                        {new Date(assignment.assignedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border border-gray-100 dark:border-gray-800">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
              <Settings className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          <div className="space-y-4">
            <Dialog.Root open={newPlanOpen} onOpenChange={setNewPlanOpen}>
              <Dialog.Trigger>
                <Button variant="ghost" className="w-full flex items-center justify-start text-left p-3 h-auto !justify-start transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                  <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center mr-3">
                    <Plus className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Create New Workout Plan</p>
                    <p className="text-xs opacity-70">Start building a new workout plan</p>
                  </div>
                </Button>
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Title>Create New Workout Plan</Dialog.Title>
                <div className="mt-4">
                  <TextField.Input
                    placeholder="Plan title"
                    value={newPlanTitle}
                    onChange={(e: any) => setNewPlanTitle(e.target.value)}
                    className="focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="soft"
                    onClick={() => setNewPlanOpen(false)}
                    className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950"
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={!newPlanTitle || createPlan.isPending}
                    onClick={() => createPlan.mutate({ title: newPlanTitle })}
                    className="transition-colors duration-200"
                  >
                    {createPlan.isPending ? "Creating..." : "Create"}
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Root>

            <Link href={`/experiences/${experience.id}/clients`}>
              <Button variant="ghost" className="w-full flex items-center justify-start text-left p-3 h-auto !justify-start transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center mr-3">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Assign Workout to Client</p>
                  <p className="text-xs opacity-70">Manage client assignments</p>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </Card>

    </div>
  )
}


