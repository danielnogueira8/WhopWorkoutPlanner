'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, Button, Dialog, TextField } from 'frosted-ui'
import { Users, BookOpen, CheckCircle, UserPlus, Plus, UserCheck, Eye, Settings, MessageSquare, Clock, UserCheck as UserCheckIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useWhop } from '~/components/whop-context'
import { dashboardStatsQuery, createPlanMutation, recentActivityQuery, recentAssignmentsQuery, type RecentActivity, type RecentAssignment } from '~/components/workouts/queries'
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
          color: 'text-blue-600'
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
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950'
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
    <div className="p-4 md:p-6">
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
      </div>

      {/* Clean Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index}>
              <div className="p-3 md:p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs md:text-sm opacity-70">{metric.label}</p>
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                {isLoading ? (
                  <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                ) : error ? (
                  <p className="text-sm text-red-600">Error</p>
                ) : (
                  <p className="text-lg md:text-2xl font-bold">{metric.value}</p>
                )}
              </div>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity and Recent Assignments */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 mt-6 md:mt-8">

        <Card>
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-base md:text-lg font-semibold">Recent Activity</h2>
              <Clock className="w-4 h-4 text-accent" />
            </div>
            {isLoadingActivity ? (
              <div className="space-y-2">
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
              <div className="text-sm opacity-70">
                <p className="mb-2">No recent activity yet.</p>
                <p className="text-xs">
                  Activity will appear here when you create plans, assign workouts, or send messages.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {activityData?.activities.slice(0, 5).map((activity) => {
                  const formatted = formatActivity(activity)
                  const Icon = formatted.icon
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <Icon className="w-4 h-4 mt-0.5 text-accent" />
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

        <Card>
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-base md:text-lg font-semibold">Recent Assignments</h2>
              <UserCheckIcon className="w-4 h-4 text-accent" />
            </div>
            {isLoadingAssignments ? (
              <div className="space-y-2">
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
              <div className="text-sm opacity-70">No recent assignments</div>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {assignmentsData?.assignments.slice(0, 5).map((assignment) => (
                  <div key={assignment.id} className="flex items-start space-x-3">
                    <UserCheckIcon className="w-4 h-4 mt-0.5 text-accent" />
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
      <div className="mt-4 md:mt-6 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
        <Card>
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-base md:text-lg font-semibold">Quick Actions</h2>
              <Settings className="w-4 h-4 text-accent" />
            </div>
            <div className="space-y-3">
              <Dialog.Root open={newPlanOpen} onOpenChange={setNewPlanOpen}>
                <Dialog.Trigger>
                  <Button variant="ghost" className="w-full flex items-center justify-start text-left p-0 h-auto">
                    <Plus className="w-4 h-4 mr-2 text-accent" />
                    Create New Workout Plan
                  </Button>
                </Dialog.Trigger>
                <Dialog.Content>
                  <Dialog.Title>Create New Workout Plan</Dialog.Title>
                  <div className="mt-4">
                    <TextField.Input
                      placeholder="Plan title"
                      value={newPlanTitle}
                      onChange={(e: any) => setNewPlanTitle(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button
                      disabled={!newPlanTitle || createPlan.isPending}
                      onClick={() => createPlan.mutate({ title: newPlanTitle })}
                    >
                      {createPlan.isPending ? "Creating..." : "Create"}
                    </Button>
                  </div>
                </Dialog.Content>
              </Dialog.Root>

              <Link href={`/experiences/${experience.id}/clients`}>
                <Button variant="ghost" className="w-full flex items-center justify-start text-left p-0 h-auto">
                  <UserCheck className="w-4 h-4 mr-2 text-accent" />
                  Assign Workout to Client
                </Button>
              </Link>
            </div>
          </div>
        </Card>
        <div></div>
      </div>

    </div>
  )
}


