import { useMutation, useQueryClient } from '@tanstack/react-query'

export const nutritionPlansQuery = (experienceId: string) => ({
  queryKey: ['nutrition-plans', experienceId],
  queryFn: async () => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition`)
    if (!res.ok) throw new Error('Failed to fetch nutrition plans')
    return res.json()
  },
})

export const createNutritionPlanMutation = (experienceId: string) => ({
  mutationFn: async (vars: { title: string }) => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vars),
    })
    if (!res.ok) throw new Error('Failed to create nutrition plan')
    return res.json()
  },
})

export const updateNutritionPlanMutation = (experienceId: string, planId: string) => ({
  mutationFn: async (vars: { title: string }) => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vars),
    })
    if (!res.ok) throw new Error('Failed to update nutrition plan')
    return res.json()
  },
})

export const deleteNutritionPlanMutation = (experienceId: string, planId: string) => ({
  mutationFn: async () => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}`, {
      method: 'DELETE',
    })
    if (!res.ok) throw new Error('Failed to delete nutrition plan')
    return res.json()
  },
})

export const assignNutritionPlanMutation = (experienceId: string, planId: string) => ({
  mutationFn: async (vars: { whopUserId: string }) => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}/assign`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vars),
    })
    if (!res.ok) throw new Error('Failed to assign nutrition plan')
    return res.json()
  },
})

export const removeNutritionPlanAssignmentMutation = (experienceId: string, planId: string) => ({
  mutationFn: async (vars: { whopUserId: string }) => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}/assign`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vars),
    })
    if (!res.ok) throw new Error('Failed to remove nutrition plan assignment')
    return res.json()
  },
})
