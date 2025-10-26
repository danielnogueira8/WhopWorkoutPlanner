import { getApiUrl } from '~/components/whop-context/whop-queries'

export type WorkoutPlanSummary = {
	id: string
	title: string
	description: string | null
	updatedAt: string
	daysCount: number
	assignedCount: number
}

export const plansQuery = (experienceId: string) => ({
	queryKey: ['workout-plans', experienceId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts`))
		if (!res.ok) throw new Error('Failed to fetch plans')
		return res.json() as Promise<WorkoutPlanSummary[]>
	},
})

export type WorkoutExercise = {
	id: string
	dayId: string
	name: string
	reps: string
	sets: number
	currentWeight: number
	maxWeight: number
	weightUnit: 'lbs' | 'kgs'
	restTime: number
	notes?: string
	orderIndex: number
}

export type WorkoutDay = {
	id: string
	planId: string
	name: string
	dayIndex: number
	exercises: WorkoutExercise[]
}

export type WorkoutPlanDetail = {
	id: string
	title: string
	description: string | null
	createdByWhopUserId: string
	createdAt: string
	updatedAt: string
	days: WorkoutDay[]
}

export const planDetailQuery = (experienceId: string, planId: string) => ({
	queryKey: ['workout-plan', experienceId, planId],
	queryFn: async () => {
		const res = await fetch(
			getApiUrl(`/api/experience/${experienceId}/workouts/${planId}`),
		)
		if (!res.ok) throw new Error('Failed to fetch plan')
		return res.json() as Promise<WorkoutPlanDetail>
	},
})

export const createPlanMutation = (experienceId: string) => ({
	mutationFn: async (payload: { title: string; description?: string }) => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts`), {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})
		if (!res.ok) throw new Error('Failed to create plan')
		return res.json()
	},
})

export const assignPlanMutation = (experienceId: string, planId: string) => ({
	mutationFn: async (payload: { whopUserId: string }) => {
		const res = await fetch(
			getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/assign`),
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			},
		)
		if (!res.ok) throw new Error('Failed to assign plan')
		return res.json()
	},
})

export const removePlanAssignmentMutation = (experienceId: string, planId: string) => ({
	mutationFn: async (payload: { whopUserId: string }) => {
		const res = await fetch(
			getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/assign`),
			{
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			},
		)
		if (!res.ok) throw new Error('Failed to remove plan assignment')
		return res.json()
	},
})

export const updatePlanMutation = (experienceId: string, planId: string) => ({
	mutationFn: async (payload: { title?: string; description?: string | null }) => {
		const res = await fetch(
			getApiUrl(`/api/experience/${experienceId}/workouts/${planId}`),
			{
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			},
		)
		if (!res.ok) throw new Error('Failed to update plan')
		return res.json()
	},
})

export const deletePlanMutation = (experienceId: string, planId: string) => ({
	mutationFn: async () => {
		const res = await fetch(
			getApiUrl(`/api/experience/${experienceId}/workouts/${planId}`),
			{
				method: 'DELETE',
			},
		)
		if (!res.ok) throw new Error('Failed to delete plan')
		return res.json()
	},
})

export type CompanyUser = { id: string; username: string; name: string }

export const usersQuery = (experienceId: string, q?: string) => ({
	queryKey: ['users', experienceId, q ?? ''],
	queryFn: async () => {
		const url = new URL(getApiUrl(`/api/experience/${experienceId}/users`), 'http://localhost')
		if (q) url.searchParams.set('q', q)
		const path = url.pathname + (url.search ? `?${url.searchParams.toString()}` : '')
		const res = await fetch(getApiUrl(path))
		if (!res.ok) throw new Error('Failed to fetch users')
		return res.json() as Promise<CompanyUser[]>
	},
})

export type InboxMessage = {
	id: string
	conversationUserId: string
	senderUserId: string
	content: string
	createdAt: string
	readAt?: string
}

export type ConversationSummary = {
	conversationUserId: string
	unreadCount: number
	lastMessage: string
	lastMessageContent: string
}

export const inboxQuery = (experienceId: string, conversationUserId?: string) => ({
	queryKey: ['inbox', experienceId, conversationUserId ?? 'me'],
	queryFn: async () => {
		const url = new URL(getApiUrl(`/api/experience/${experienceId}/inbox`), 'http://localhost')
		if (conversationUserId) url.searchParams.set('userId', conversationUserId)
		const path = url.pathname + (url.search ? `?${url.searchParams.toString()}` : '')
		const res = await fetch(getApiUrl(path))
		if (!res.ok) throw new Error('Failed to fetch messages')
		return res.json() as Promise<InboxMessage[]>
	},
})

export const sendMessageMutation = (experienceId: string) => ({
	mutationFn: async (payload: { content: string; userId?: string }) => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/inbox`), {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})
		if (!res.ok) throw new Error('Failed to send message')
		return res.json()
	},
})

export const conversationsQuery = (experienceId: string) => ({
	queryKey: ['conversations', experienceId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/inbox/conversations`))
		if (!res.ok) throw new Error('Failed to fetch conversations')
		return res.json() as Promise<ConversationSummary[]>
	},
})

export const markMessagesReadMutation = (experienceId: string) => ({
	mutationFn: async (conversationUserId: string) => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/inbox/mark-read`), {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ conversationUserId }),
		})
		if (!res.ok) throw new Error('Failed to mark messages as read')
		return res.json()
	},
})

// Days queries and mutations
export const planDaysQuery = (experienceId: string, planId: string) => ({
	queryKey: ['workout-plan-days', experienceId, planId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/days`))
		if (!res.ok) throw new Error('Failed to fetch plan days')
		return res.json() as Promise<WorkoutDay[]>
	},
})

export const createDayMutation = (experienceId: string, planId: string) => ({
	mutationFn: async (payload: { name: string; dayIndex?: number }) => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/days`), {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})
		if (!res.ok) throw new Error('Failed to create day')
		return res.json()
	},
})

export const updateDayMutation = (experienceId: string, planId: string, dayId: string) => ({
	mutationFn: async (payload: { name: string; dayIndex?: number }) => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}`), {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})
		if (!res.ok) throw new Error('Failed to update day')
		return res.json()
	},
})

export const deleteDayMutation = (experienceId: string, planId: string, dayId: string) => ({
	mutationFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}`), {
			method: 'DELETE',
		})
		if (!res.ok) throw new Error('Failed to delete day')
		return res.json()
	},
})

// Exercises queries and mutations
export const dayExercisesQuery = (experienceId: string, planId: string, dayId: string) => ({
	queryKey: ['workout-exercises', experienceId, planId, dayId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises`))
		if (!res.ok) throw new Error('Failed to fetch exercises')
		return res.json() as Promise<WorkoutExercise[]>
	},
})

export const createExerciseMutation = (experienceId: string, planId: string, dayId: string) => ({
	mutationFn: async (payload: { 
		name: string; 
		reps?: string; 
		sets?: number; 
		currentWeight?: number; 
		maxWeight?: number; 
		weightUnit?: 'lbs' | 'kgs';
		restTime?: number;
		notes?: string;
		orderIndex?: number 
	}) => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises`), {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})
		if (!res.ok) throw new Error('Failed to create exercise')
		return res.json()
	},
})

export const updateExerciseMutation = (experienceId: string, planId: string, dayId: string, exerciseId: string) => ({
	mutationFn: async (payload: { 
		name: string; 
		reps?: string; 
		sets?: number; 
		currentWeight?: number; 
		maxWeight?: number; 
		weightUnit?: 'lbs' | 'kgs';
		restTime?: number;
		notes?: string;
		orderIndex?: number 
	}) => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises/${exerciseId}`), {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})
		if (!res.ok) throw new Error('Failed to update exercise')
		return res.json()
	},
})

export const deleteExerciseMutation = (experienceId: string, planId: string, dayId: string, exerciseId: string) => ({
	mutationFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises/${exerciseId}`), {
			method: 'DELETE',
		})
		if (!res.ok) throw new Error('Failed to delete exercise')
		return res.json()
	},
})

// Dashboard queries
export type DashboardStats = {
	totalClients: number
	totalPlans: number
	totalAssignments: number
	recentAssignments: number
}

export const dashboardStatsQuery = (experienceId: string) => ({
	queryKey: ['dashboard-stats', experienceId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/dashboard/stats`))
		if (!res.ok) throw new Error('Failed to fetch dashboard stats')
		return res.json() as Promise<DashboardStats>
	},
})

export interface RecentActivity {
	id: string
	type: 'assignment' | 'plan_creation' | 'message'
	planTitle: string | null
	whopUserId: string
	createdAt: string
	message?: string
}

export const recentActivityQuery = (experienceId: string) => ({
	queryKey: ['recent-activity', experienceId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/dashboard/activity`))
		if (!res.ok) throw new Error('Failed to fetch recent activity')
		return res.json() as Promise<{ activities: RecentActivity[] }>
	},
})

export interface RecentAssignment {
	id: string
	planTitle: string
	assignedAt: string
	type: 'workout' | 'nutrition'
	user: {
		id: string
		name: string
		username: string
	}
	assignedBy: {
		id: string
		name: string
		username: string
	}
}

export const recentAssignmentsQuery = (experienceId: string) => ({
	queryKey: ['recent-assignments', experienceId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/dashboard/recent-assignments`))
		if (!res.ok) throw new Error('Failed to fetch recent assignments')
		return res.json() as Promise<{ assignments: RecentAssignment[] }>
	},
})

export const userAssignmentsQuery = (experienceId: string, userId: string) => ({
	queryKey: ['user-assignments', experienceId, userId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/users/${userId}/assignments`))
		if (!res.ok) throw new Error('Failed to fetch user assignments')
		return res.json() as Promise<{ workoutPlans: string[], nutritionPlans: string[] }>
	},
})

export const exerciseMaxWeightQuery = (experienceId: string, exerciseName: string) => ({
	queryKey: ['exercise-max-weight', experienceId, exerciseName],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/exercises/${encodeURIComponent(exerciseName)}/max-weight`))
		if (!res.ok) throw new Error('Failed to fetch max weight')
		return res.json() as Promise<{ maxWeight: number }>
	},
	enabled: !!exerciseName && exerciseName.trim().length > 0,
})

export const reorderDaysMutation = (experienceId: string, planId: string) => ({
	mutationFn: async (dayIds: string[]) => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/days/reorder`), {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ dayIds }),
		})
		if (!res.ok) throw new Error('Failed to reorder days')
		return res.json()
	},
})

// Workout history queries
export const workoutHistoryQuery = (experienceId: string) => ({
	queryKey: ['workout-history', experienceId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/sessions/history`))
		if (!res.ok) throw new Error('Failed to fetch workout history')
		return res.json() as Promise<WorkoutHistoryItem[]>
	},
})

export type WorkoutHistoryItem = {
	id: string
	planId: string
	dayId: string
	completedAt: string
	notes?: string
	planTitle: string
	dayName: string
	exerciseCount: number
}

export const workoutSessionDetailQuery = (experienceId: string, sessionId: string) => ({
	queryKey: ['workout-session-detail', experienceId, sessionId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/sessions/${sessionId}`))
		if (!res.ok) throw new Error('Failed to fetch workout session details')
		return res.json() as Promise<WorkoutSessionDetail>
	},
})

export type WorkoutSessionDetail = {
	id: string
	planId: string
	dayId: string
	completedAt: string
	notes?: string
	planTitle: string
	planDescription?: string
	dayName: string
	exercises: {
		id: string
		exerciseId: string
		sets: number
		reps: number
		weight: number
		notes?: string
		exerciseName: string
		weightUnit: string
	}[]
}

// Client types and queries
export type Client = {
	id: string
	username: string
	name: string
}

export const clientsQuery = (experienceId: string) => ({
	queryKey: ['clients', experienceId],
	queryFn: async () => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/users`))
		if (!res.ok) throw new Error('Failed to fetch clients')
		return res.json() as Promise<Client[]>
	},
})

export const bulkAssignWorkoutMutation = (experienceId: string, planId: string) => ({
	mutationFn: async (whopUserIds: string[]) => {
		const res = await fetch(getApiUrl(`/api/experience/${experienceId}/workouts/${planId}/bulk-assign`), {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ whopUserIds }),
		})
		if (!res.ok) throw new Error('Failed to assign workout plan')
		return res.json()
	},
})

