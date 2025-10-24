'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Card, TextField, Dialog } from 'frosted-ui'
import { useState } from 'react'
import { useWhop } from '~/components/whop-context'
import { assignPlanMutation, plansQuery, usersQuery } from '~/components/workouts/queries'
import { assignNutritionPlanMutation, nutritionPlansQuery } from '~/components/nutrition/queries'

export default function ClientsPage() {
  const { access, experience } = useWhop()
  const isAdmin = (access as any).accessLevel === 'owner' || (access as any).accessLevel === 'admin'
  const [userSearch, setUserSearch] = useState('')
  const [selectedUserId, setSelectedUserId] = useState('')
  const [assignUserId, setAssignUserId] = useState('')
  const qc = useQueryClient()

  if (!isAdmin) {
    return (
      <div className="p-6">
        <div className="text-sm opacity-70">You don't have access to this page.</div>
      </div>
    )
  }

  const { data: users, isLoading: isLoadingUsers } = useQuery({ ...usersQuery(experience.id, userSearch), enabled: isAdmin })
  const { data: plans, isLoading: isLoadingPlans } = useQuery(plansQuery(experience.id))
  const { data: nutritionPlans, isLoading: isLoadingNutritionPlans } = useQuery(nutritionPlansQuery(experience.id))

  const assignPlan = useMutation({
    mutationFn: async (vars: { planId: string; whopUserId: string }) =>
      assignPlanMutation(experience.id, vars.planId).mutationFn({ whopUserId: vars.whopUserId }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout-plans', experience.id] })
      setAssignUserId('')
    },
  })

  const assignNutritionPlan = useMutation({
    mutationFn: async (vars: { planId: string; whopUserId: string }) =>
      assignNutritionPlanMutation(experience.id, vars.planId).mutationFn({ whopUserId: vars.whopUserId }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['nutrition-plans', experience.id] })
      setAssignUserId('')
    },
  })

  return (
    <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      <Card>
        <div className="p-3 md:p-4">
          <div className="text-sm opacity-70 mb-2">Clients</div>
          <div className="mb-3">
            <TextField.Input placeholder="Search users" value={userSearch} onChange={(e: any) => setUserSearch(e.target.value)} />
          </div>
          {isLoadingUsers ? (
            <div className="text-sm opacity-70">Loading users...</div>
          ) : (
            <div className="space-y-2 max-h-80 overflow-auto">
              {(users ?? []).map((u) => (
                <div 
                  key={u.id} 
                  className={`px-3 py-2 rounded cursor-pointer ${selectedUserId === u.id ? 'bg-black/5 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/10'}`}
                  onClick={() => setSelectedUserId(u.id)}
                >
                  <div className="font-medium">{u.name || u.username}</div>
                  <div className="text-xs opacity-70">@{u.username}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      <Card>
        <div className="p-3 md:p-4">
          <div className="text-sm opacity-70 mb-2">Assign Workouts</div>
          {selectedUserId ? (
            <div className="space-y-3">
              <div className="text-sm">
                Assigning to: <span className="font-medium">{users?.find(u => u.id === selectedUserId)?.name || users?.find(u => u.id === selectedUserId)?.username}</span>
              </div>
              {isLoadingPlans ? (
                <div className="text-sm opacity-70">Loading plans...</div>
              ) : (
                <div className="space-y-2">
                  {(plans ?? []).map((p) => (
                    <div key={p.id} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <div className="font-medium">{p.title}</div>
                        <div className="text-xs opacity-70">
                          {p.daysCount} days • {p.assignedCount} assigned
                        </div>
                      </div>
                      <Button
                        size="2"
                        disabled={assignPlan.isPending}
                        onClick={() => assignPlan.mutate({ planId: p.id, whopUserId: selectedUserId })}
                      >
                        Assign
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm opacity-70">Select a client to assign workouts</div>
          )}
        </div>
      </Card>

      <Card>
        <div className="p-3 md:p-4">
          <div className="text-sm opacity-70 mb-2">Assign Nutrition Plans</div>
          {selectedUserId ? (
            <div className="space-y-3">
              <div className="text-sm">
                Assigning to: <span className="font-medium">{users?.find(u => u.id === selectedUserId)?.name || users?.find(u => u.id === selectedUserId)?.username}</span>
              </div>
              {isLoadingNutritionPlans ? (
                <div className="text-sm opacity-70">Loading nutrition plans...</div>
              ) : (
                <div className="space-y-2">
                  {(nutritionPlans ?? []).map((p: any) => (
                    <div key={p.id} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <div className="font-medium">{p.title}</div>
                        <div className="text-xs opacity-70">
                          {p.daysCount || 0} days • {p.assignedCount} assigned
                        </div>
                      </div>
                      <Button
                        size="2"
                        disabled={assignNutritionPlan.isPending}
                        onClick={() => assignNutritionPlan.mutate({ planId: p.id, whopUserId: selectedUserId })}
                      >
                        Assign
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm opacity-70">Select a client to assign nutrition plans</div>
          )}
        </div>
      </Card>
    </div>
  )
}


