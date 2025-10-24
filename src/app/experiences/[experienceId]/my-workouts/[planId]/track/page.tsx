'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Button, Card, TextField } from 'frosted-ui'
import { useState, use } from 'react'
import { CheckCircle, Clock, BookOpen, ArrowLeft, Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useWhop } from '~/components/whop-context'
import { 
  planDetailQuery,
  dayExercisesQuery,
  type WorkoutDay,
  type WorkoutExercise
} from '~/components/workouts/queries'

interface WorkoutTrackProps {
  params: Promise<{ experienceId: string; planId: string }>
}

interface ExerciseLog {
  exerciseId: string
  weight: number
  notes?: string
}

export default function WorkoutTrackPage({ params }: WorkoutTrackProps) {
  const { experienceId, planId } = use(params)
  const { user } = useWhop()
  const router = useRouter()
  const [selectedDayId, setSelectedDayId] = useState<string | null>(null)
  const [exerciseLogs, setExerciseLogs] = useState<Record<string, ExerciseLog>>({})
  const [workoutNotes, setWorkoutNotes] = useState('')
  const qc = useQueryClient()

  const { data: plan } = useQuery(planDetailQuery(experienceId, planId))
  const days = plan?.days
  const isLoadingDays = !plan
  const { data: exercises, isLoading: isLoadingExercises } = useQuery({
    ...dayExercisesQuery(experienceId, planId, selectedDayId!),
    enabled: !!selectedDayId
  })

  const updateExerciseLog = (exerciseId: string, updates: Partial<ExerciseLog>) => {
    setExerciseLogs(prev => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        exerciseId,
        weight: prev[exerciseId]?.weight || 0,
        ...updates
      }
    }))
  }

  const completeWorkout = useMutation({
    mutationFn: async () => {
      if (!selectedDayId) throw new Error('No day selected')
      if (!exercises) throw new Error('No exercises found')
      
      // Log ALL exercises from the selected day
      const exerciseLogData = exercises.map(exercise => {
        const userLog = exerciseLogs[exercise.id]
        return {
          exerciseId: exercise.id,
          weight: userLog?.weight ?? exercise.currentWeight, // Use user's weight or default from plan
          notes: userLog?.notes || null
        }
      })

      const res = await fetch(`/api/experience/${experienceId}/workouts/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId,
          dayId: selectedDayId,
          notes: workoutNotes,
          exerciseLogs: exerciseLogData
        })
      })

      if (!res.ok) throw new Error('Failed to complete workout')
      return res.json()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout-plans', experienceId] })
      qc.invalidateQueries({ queryKey: ['workout-history', experienceId] })
      router.push(`/experiences/${experienceId}/my-workouts`)
    },
  })


  const selectedDay = days?.find(d => d.id === selectedDayId)

  if (isLoadingDays) {
    return (
      <div className="p-4 md:p-6">
        <div className="text-sm opacity-70">Loading workout plan...</div>
      </div>
    )
  }

  if (!plan) {
    return (
      <div className="p-4 md:p-6">
        <div className="text-sm opacity-70">Workout plan not found.</div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6">
      {/* Breadcrumb Navigation */}
      <nav className="mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <Link 
            href={`/experiences/${experienceId}`}
            className="flex items-center gap-1 text-gray-600 hover:text-accent transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link 
            href={`/experiences/${experienceId}/my-workouts`}
            className="text-gray-600 hover:text-accent transition-colors"
          >
            My Workouts
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link 
            href={`/experiences/${experienceId}/my-workouts/${planId}`}
            className="text-gray-600 hover:text-accent transition-colors"
          >
            {plan.title}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">Track Workout</span>
        </div>
      </nav>

      {/* Header */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="px-3 py-1 bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 text-sm rounded-full">
            Tracking
          </div>
        </div>
        <h1 className="text-xl md:text-2xl font-bold">{plan.title}</h1>
        {plan.description && (
          <p className="text-sm opacity-70 mt-1">{plan.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Days Selection */}
        <Card>
          <div className="p-3 md:p-4">
            <h3 className="font-semibold text-sm md:text-base mb-4">Select Workout Day</h3>
            {isLoadingDays ? (
              <div className="text-sm opacity-70">Loading days...</div>
            ) : (
              <div className="space-y-2">
                {days?.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setSelectedDayId(day.id)}
                    className={`w-full text-left p-3 rounded-md border transition-colors ${
                      selectedDayId === day.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="font-medium">{day.name}</div>
                    <div className="text-xs opacity-70">
                      {day.exercises?.length || 0} exercises
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </Card>

        {/* Exercise Tracking */}
        <Card>
          <div className="p-3 md:p-4">
            <div className="mb-4">
              <h3 className="font-semibold text-sm md:text-base">
                {selectedDay ? selectedDay.name : 'Select a Day'}
              </h3>
            </div>

            {!selectedDay ? (
              <div className="text-sm opacity-70 text-center py-8">
                Select a workout day to start tracking
              </div>
            ) : isLoadingExercises ? (
              <div className="text-sm opacity-70">Loading exercises...</div>
            ) : (
              <div className="space-y-4">
                {exercises?.map((exercise) => {
                  const log = exerciseLogs[exercise.id]
                  return (
                    <div key={exercise.id} className="border rounded-lg p-3">
                      <div className="font-medium mb-3">{exercise.name}</div>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div>
                          <label className="text-xs opacity-70">Sets</label>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded border text-sm text-gray-600 dark:text-gray-400">
                            {exercise.sets}
                          </div>
                        </div>
                        <div>
                          <label className="text-xs opacity-70">Reps</label>
                          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded border text-sm text-gray-600 dark:text-gray-400">
                            {exercise.reps}
                          </div>
                        </div>
                        <div>
                          <label className="text-xs opacity-70">Weight ({exercise.weightUnit})</label>
                          <TextField.Input
                            type="number"
                            value={log?.weight === undefined ? (exercise.currentWeight || '') : log.weight}
                            onChange={(e) => updateExerciseLog(exercise.id, { weight: parseInt(e.target.value) || 0 })}
                            placeholder={exercise.currentWeight?.toString() || "0"}
                            className="text-sm"
                          />
                        </div>
                      </div>
                      <TextField.Input
                        placeholder="Notes (optional)"
                        value={log?.notes || ''}
                        onChange={(e) => updateExerciseLog(exercise.id, { notes: e.target.value })}
                        className="text-sm"
                      />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Workout Summary & Actions - Separate Row */}
      <div className="mt-4 md:mt-6">
        {/* Workout Summary & Actions */}
        <Card>
          <div className="p-3 md:p-4">
            <h3 className="font-semibold text-sm md:text-base mb-4">Workout Summary</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-sm">
                  {selectedDay ? `${selectedDay.name} - ${exercises?.length || 0} exercises` : 'No day selected'}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">
                  {exercises?.length || 0} exercises logged
                </span>
              </div>

              <div className="pt-4 border-t">
                <label className="text-sm font-medium mb-2 block">Workout Notes</label>
                <TextField.Input
                  placeholder="How did the workout feel? Any observations?"
                  value={workoutNotes}
                  onChange={(e) => setWorkoutNotes(e.target.value)}
                  className="text-sm"
                />
              </div>

              <div className="pt-4 border-t space-y-3">
                <Button
                  onClick={() => completeWorkout.mutate()}
                  disabled={completeWorkout.isPending || !selectedDay}
                  variant="solid"
                  className="w-full"
                >
                  <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                  {completeWorkout.isPending ? 'Completing...' : 'Mark as Complete'}
                </Button>

              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
