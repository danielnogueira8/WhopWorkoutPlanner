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

export const bulkAssignNutritionPlanMutation = (experienceId: string, planId: string) => ({
  mutationFn: async (whopUserIds: string[]) => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}/assign/bulk`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ whopUserIds }),
    })
    if (!res.ok) throw new Error('Failed to bulk assign nutrition plan')
    return res.json()
  },
})

// Nutrition plan detail query
export const nutritionPlanDetailQuery = (experienceId: string, planId: string) => ({
  queryKey: ['nutrition-plan-detail', experienceId, planId],
  queryFn: async () => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}`)
    if (!res.ok) throw new Error('Failed to fetch nutrition plan detail')
    return res.json()
  },
})

// Nutrition plan content queries
export const nutritionContentQuery = (experienceId: string, planId: string) => ({
  queryKey: ['nutrition-content', experienceId, planId],
  queryFn: async () => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}/content`)
    if (!res.ok) throw new Error('Failed to fetch nutrition content')
    return res.json()
  },
})

export const saveNutritionContentMutation = (experienceId: string, planId: string) => ({
  mutationFn: async (data: { contentType: 'text' | 'pdf', content?: string }) => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}/content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed to save nutrition content')
    return res.json()
  },
})

export const uploadNutritionPDFMutation = (experienceId: string, planId: string) => ({
  mutationFn: async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}/content/upload`, {
      method: 'POST',
      body: formData,
    })
    if (!res.ok) throw new Error('Failed to upload PDF')
    return res.json()
  },
})

export const deleteNutritionPDFMutation = (experienceId: string, planId: string) => ({
  mutationFn: async () => {
    const res = await fetch(`/api/experience/${experienceId}/nutrition/${planId}/content/upload`, {
      method: 'DELETE',
    })
    if (!res.ok) throw new Error('Failed to delete PDF')
    return res.json()
  },
})
