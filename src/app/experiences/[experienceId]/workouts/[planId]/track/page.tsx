'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Card, TextField } from 'frosted-ui'
import { useState, use } from 'react'
import { CheckCircle, Clock, BookOpen, Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useWhop } from '~/components/whop-context'
import { 
  planDetailQuery,
  planDaysQuery,
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
  const [selectedDayId, setSelectedDayId] = useState<string | null>(null)
  const [exerciseLogs, setExerciseLogs] = useState<Record<string, ExerciseLog>>({})
  const [workoutNotes, setWorkoutNotes] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const qc = useQueryClient()

  const { data: plan } = useQuery(planDetailQuery(experienceId, planId))
  const { data: days, isLoading: isLoadingDays } = useQuery(planDaysQuery(experienceId, planId))
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

  const saveWorkout = useMutation({
    mutationFn: async () => {
      // TODO: Implement workout logging API
      console.log('Saving workout:', { exerciseLogs, workoutNotes, isCompleted })
      return Promise.resolve()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout-plans', experienceId] })
      // Reset form
      setExerciseLogs({})
      setWorkoutNotes('')
      setIsCompleted(false)
    },
  })

  const selectedDay = days?.find(d => d.id === selectedDayId)
  const completedExercises = Object.values(exerciseLogs).filter(log => log.weight > 0).length
  const totalExercises = exercises?.length || 0

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
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Link href={`/experiences/${experienceId}/my-workouts`}>
            <Button variant="soft" size="2">
              <ArrowLeft className="w-4 h-4 mr-2 text-accent" />
              Back
            </Button>
          </Link>
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
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm md:text-base">
                {selectedDay ? selectedDay.name : 'Select a Day'}
              </h3>
              {selectedDay && (
                <div className="text-xs opacity-70">
                  {completedExercises}/{totalExercises} completed
                </div>
              )}
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
                  {selectedDay ? `${selectedDay.name} - ${totalExercises} exercises` : 'No day selected'}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">
                  {completedExercises} exercises logged
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
                  onClick={() => setIsCompleted(!isCompleted)}
                  variant={isCompleted ? "solid" : "soft"}
                  className="w-full"
                >
                  <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                  {isCompleted ? 'Workout Completed' : 'Mark as Complete'}
                </Button>

                <Button
                  onClick={() => saveWorkout.mutate()}
                  disabled={saveWorkout.isPending || !selectedDay}
                  className="w-full"
                >
                  <Save className="w-4 h-4 mr-2 text-accent" />
                  {saveWorkout.isPending ? 'Saving...' : 'Save Workout'}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

