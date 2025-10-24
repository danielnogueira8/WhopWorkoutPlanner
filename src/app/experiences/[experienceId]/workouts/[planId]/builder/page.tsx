'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Card, TextField, Dialog } from 'frosted-ui'
import { useState, use, useEffect } from 'react'
import { Calendar, Plus, Dumbbell, Clock, Info, GripVertical, Copy, Edit, Trash2, X } from 'lucide-react'
import { useWhop } from '~/components/whop-context'
import { 
  planDaysQuery,
  planDetailQuery,
  createDayMutation, 
  updateDayMutation, 
  deleteDayMutation,
  dayExercisesQuery,
  createExerciseMutation,
  updateExerciseMutation,
  deleteExerciseMutation,
  exerciseMaxWeightQuery,
  type WorkoutDay,
  type WorkoutExercise
} from '~/components/workouts/queries'

interface WorkoutBuilderProps {
  params: Promise<{ experienceId: string; planId: string }>
}

export default function WorkoutBuilderPage({ params }: WorkoutBuilderProps) {
  const { experienceId, planId } = use(params)
  const { access } = useWhop()
  const isAdmin = (access as any).accessLevel === 'admin'
  const [newDayOpen, setNewDayOpen] = useState(false)
  const [newDayName, setNewDayName] = useState('')
  const [editingDay, setEditingDay] = useState<WorkoutDay | null>(null)
  const [editingDayName, setEditingDayName] = useState('')
  const [selectedDayId, setSelectedDayId] = useState<string | null>(null)
  const [newExerciseOpen, setNewExerciseOpen] = useState(false)
  const [editingExercise, setEditingExercise] = useState<WorkoutExercise | null>(null)
  const [inlineEditingId, setInlineEditingId] = useState<string | null>(null)
  const qc = useQueryClient()

  if (!isAdmin) {
    return (
      <div className="p-6">
        <div className="text-sm opacity-70">You don't have access to this page.</div>
      </div>
    )
  }

  const { data: plan } = useQuery(planDetailQuery(experienceId, planId))
  const { data: days, isLoading: isLoadingDays } = useQuery(planDaysQuery(experienceId, planId))
  const { data: exercises, isLoading: isLoadingExercises } = useQuery({
    ...dayExercisesQuery(experienceId, planId, selectedDayId!),
    enabled: !!selectedDayId
  })

  const createDay = useMutation({
    mutationFn: createDayMutation(experienceId, planId).mutationFn,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout-plan-days', experienceId, planId] })
      setNewDayOpen(false)
      setNewDayName('')
    },
  })

  const updateDay = useMutation({
    mutationFn: async (data: { name: string; dayIndex?: number }) => {
      if (!editingDay) throw new Error('No day selected for editing')
      return updateDayMutation(experienceId, planId, editingDay.id).mutationFn(data)
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout-plan-days', experienceId, planId] })
      setEditingDay(null)
      setEditingDayName('')
    },
  })

  const deleteDay = useMutation({
    mutationFn: async () => {
      if (!editingDay) throw new Error('No day selected for deletion')
      return deleteDayMutation(experienceId, planId, editingDay.id).mutationFn()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout-plan-days', experienceId, planId] })
      const deletedDayId = editingDay?.id
      setEditingDay(null)
      if (selectedDayId === deletedDayId) {
        setSelectedDayId(null)
      }
    },
  })

  const createExercise = useMutation({
    mutationFn: async (data: any) => {
      if (!selectedDayId) throw new Error('No day selected')
      return createExerciseMutation(experienceId, planId, selectedDayId).mutationFn(data)
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout-exercises', experienceId, planId, selectedDayId] })
      setNewExerciseOpen(false)
    },
  })

  const updateExercise = useMutation({
    mutationFn: async (data: any) => {
      if (!selectedDayId || !editingExercise) throw new Error('No exercise selected for editing')
      return updateExerciseMutation(experienceId, planId, selectedDayId, editingExercise.id).mutationFn(data)
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout-exercises', experienceId, planId, selectedDayId] })
      setEditingExercise(null)
    },
  })

  const deleteExercise = useMutation({
    mutationFn: async () => {
      if (!selectedDayId || !editingExercise) throw new Error('No exercise selected for deletion')
      return deleteExerciseMutation(experienceId, planId, selectedDayId, editingExercise.id).mutationFn()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout-exercises', experienceId, planId, selectedDayId] })
      setEditingExercise(null)
    },
  })

  return (
    <div className="p-4 md:p-6">
      {/* Header Section */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <h1 className="text-xl md:text-2xl font-bold">{plan?.title || 'Workout Plan'}</h1>
          <div className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full self-start">
            Builder
          </div>
        </div>
        {plan?.description && (
          <p className="text-sm opacity-70 mt-2">{plan.description}</p>
        )}
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <div className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-accent" />
              <div>
                <div className="text-2xl font-bold">{days?.length || 0}</div>
                <div className="text-sm opacity-70">Total Days</div>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-4">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-5 h-5 text-accent" />
              <div>
                <div className="text-2xl font-bold">
                  {days?.reduce((total, day) => total + (exercises?.length || 0), 0) || 0}
                </div>
                <div className="text-sm opacity-70">Total Exercises</div>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-accent" />
              <div>
                <div className="text-2xl font-bold">
                  {Math.round((exercises?.reduce((total, ex) => total + (ex.sets * 2), 0) || 0) / 60)}m
                </div>
                <div className="text-sm opacity-70">Est. Duration</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      {/* Days Panel */}
      <Card>
        <div className="p-4 md:p-5">
          <h3 className="font-semibold text-base flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            Workout Days
          </h3>
          <div className="pt-4 pb-5">
            <Button variant="solid" size="1" onClick={() => setNewDayOpen(true)} className="!bg-accent hover:!bg-accent/90 !text-white text-xs px-2 py-1">
              <Plus className="w-3 h-3 mr-1" />
              Add Day
            </Button>
          </div>
          
          {isLoadingDays ? (
            <div className="text-sm opacity-70">Loading days...</div>
          ) : (
            <div className="space-y-3">
              {(days ?? []).map((day) => {
                const dayExerciseCount = exercises?.filter(ex => ex.dayId === day.id).length || 0
                return (
                  <div
                    key={day.id}
                    className={`p-4 rounded-lg cursor-pointer border transition-all duration-200 ${
                      selectedDayId === day.id 
                        ? 'border-accent bg-accent/5 shadow-sm' 
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedDayId(day.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="font-medium">{day.name}</div>
                          {dayExerciseCount > 0 && (
                            <div className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                              {dayExerciseCount} exercise{dayExerciseCount !== 1 ? 's' : ''}
                            </div>
                          )}
                        </div>
                        <div className="text-xs opacity-70">Day {day.dayIndex + 1}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <GripVertical className="w-4 h-4 text-gray-400 mr-1" />
                        <Button
                          size="2"
                          variant="soft"
                          onClick={(e) => {
                            e.stopPropagation()
                            setEditingDay(day)
                            setEditingDayName(day.name)
                          }}
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button
                          size="2"
                          variant="soft"
                          onClick={(e) => {
                            e.stopPropagation()
                            setEditingDay(day)
                            deleteDay.mutate()
                          }}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </Card>

      {/* Exercises Panel */}
      <Card>
        <div className="p-4 md:p-5">
          <h3 className="font-semibold text-base flex items-center gap-2">
            <Dumbbell className="w-4 h-4 text-accent" />
            {selectedDayId ? days?.find(d => d.id === selectedDayId)?.name : 'Select a Day'}
          </h3>
          <div className="pt-4 pb-5">
            {selectedDayId && (
              <Button variant="solid" size="1" onClick={() => setNewExerciseOpen(true)} className="!bg-accent hover:!bg-accent/90 !text-white text-xs px-2 py-1">
                <Plus className="w-3 h-3 mr-1" />
                Add Exercise
              </Button>
            )}
          </div>
          
          {!selectedDayId ? (
            <div className="text-sm opacity-70">Select a day to view exercises</div>
          ) : isLoadingExercises ? (
            <div className="text-sm opacity-70">Loading exercises...</div>
          ) : (
            <div className="space-y-3">
              {(exercises ?? []).map((exercise) => {
                const isEditing = inlineEditingId === exercise.id
                const formatRestTime = (seconds: number) => {
                  if (seconds < 60) return `${seconds}s`
                  const minutes = Math.floor(seconds / 60)
                  const remainingSeconds = seconds % 60
                  return remainingSeconds > 0 ? `${minutes}:${remainingSeconds.toString().padStart(2, '0')}` : `${minutes}m`
                }
                
                return (
                  <div key={exercise.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                    {isEditing ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <TextField.Input
                            placeholder="Exercise name"
                            value={exercise.name}
                            onChange={(e) => setEditingExercise({...exercise, name: e.target.value})}
                            className="flex-1"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <TextField.Input
                            placeholder="Sets"
                            type="number"
                            value={exercise.sets}
                            onChange={(e) => setEditingExercise({...exercise, sets: parseInt(e.target.value) || 0})}
                          />
                          <TextField.Input
                            placeholder="Reps"
                            value={exercise.reps}
                            onChange={(e) => setEditingExercise({...exercise, reps: e.target.value})}
                          />
                          <TextField.Input
                            placeholder="Weight"
                            type="number"
                            value={exercise.currentWeight}
                            onChange={(e) => setEditingExercise({...exercise, currentWeight: parseInt(e.target.value) || 0})}
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="2"
                            variant="solid"
                            onClick={() => {
                              updateExercise.mutate({
                                name: exercise.name,
                                sets: exercise.sets,
                                reps: exercise.reps,
                                currentWeight: exercise.currentWeight,
                                weightUnit: exercise.weightUnit,
                                restTime: exercise.restTime,
                                notes: exercise.notes
                              })
                              setInlineEditingId(null)
                            }}
                            className="!bg-accent hover:!bg-accent/90 !text-white"
                          >
                            Save
                          </Button>
                          <Button
                            size="2"
                            variant="soft"
                            onClick={() => setInlineEditingId(null)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Dumbbell className="w-4 h-4 text-accent" />
                            <div className="font-medium">{exercise.name}</div>
                            {exercise.notes && (
                              <div title={exercise.notes}>
                                <Info className="w-3 h-3 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex gap-1">
                            <Button
                              size="2"
                              variant="soft"
                              onClick={() => setInlineEditingId(exercise.id)}
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              size="2"
                              variant="soft"
                              onClick={() => setEditingExercise(exercise)}
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                            <Button
                              size="2"
                              variant="soft"
                              onClick={() => {
                                setEditingExercise(exercise)
                                deleteExercise.mutate()
                              }}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="opacity-70">Sets × Reps</span>
                            <span className="font-medium">{exercise.sets} × {exercise.reps}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="opacity-70">Weight</span>
                            <span className="font-medium">{exercise.currentWeight} {exercise.weightUnit}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="opacity-70 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              Rest
                            </span>
                            <span className="font-medium">{formatRestTime(exercise.restTime)}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </Card>

      {/* Exercise Details Panel */}
      <Card>
        <div className="p-4 md:p-5">
          <h3 className="font-semibold text-base flex items-center gap-2 mb-5">
            <Info className="w-4 h-4 text-accent" />
            Exercise Details
          </h3>
          {editingExercise ? (
            <ExerciseForm
              exercise={editingExercise}
              onSave={(data) => updateExercise.mutate(data)}
              onCancel={() => setEditingExercise(null)}
              isLoading={updateExercise.isPending}
            />
          ) : (
            <div className="text-center py-8">
              <Dumbbell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <div className="text-sm opacity-70">Select an exercise to view details</div>
            </div>
          )}
        </div>
      </Card>

      {/* New Day Dialog */}
      <Dialog.Root open={newDayOpen} onOpenChange={setNewDayOpen}>
        <Dialog.Content>
          <Dialog.Title>Add New Day</Dialog.Title>
          <div className="mt-4">
            <TextField.Input
              placeholder="Day name (e.g., Leg Day)"
              value={newDayName}
              onChange={(e: any) => setNewDayName(e.target.value)}
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="soft" onClick={() => setNewDayOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="solid"
              disabled={!newDayName || createDay.isPending}
              onClick={() => createDay.mutate({ 
                name: newDayName, 
                dayIndex: (days?.length ?? 0) 
              })}
              className="!bg-accent hover:!bg-accent/90 !text-white"
            >
              {createDay.isPending ? 'Creating...' : 'Create'}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      {/* Edit Day Dialog */}
      <Dialog.Root open={!!editingDay && !editingExercise} onOpenChange={(open) => {
        if (!open) {
          setEditingDay(null)
          setEditingDayName('')
        }
      }}>
        <Dialog.Content>
          <Dialog.Title>Edit Day</Dialog.Title>
          <div className="mt-4">
            <TextField.Input
              placeholder="Day name"
              value={editingDayName}
              onChange={(e: any) => setEditingDayName(e.target.value)}
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="soft" onClick={() => {
              setEditingDay(null)
              setEditingDayName('')
            }}>
              Cancel
            </Button>
            <Button
              variant="solid"
              disabled={!editingDayName || updateDay.isPending}
              onClick={() => updateDay.mutate({ 
                name: editingDayName, 
                dayIndex: editingDay?.dayIndex 
              })}
              className="!bg-accent hover:!bg-accent/90 !text-white"
            >
              {updateDay.isPending ? 'Saving...' : 'Save'}
            </Button>
            <Button
              variant="soft"
              disabled={deleteDay.isPending}
              onClick={() => deleteDay.mutate()}
            >
              {deleteDay.isPending ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      {/* New Exercise Dialog */}
      <Dialog.Root open={newExerciseOpen} onOpenChange={setNewExerciseOpen}>
        <Dialog.Content>
          <Dialog.Title>Add New Exercise</Dialog.Title>
          <ExerciseForm
            onSave={(data) => createExercise.mutate(data)}
            onCancel={() => setNewExerciseOpen(false)}
            isLoading={createExercise.isPending}
          />
        </Dialog.Content>
      </Dialog.Root>
      </div>
    </div>
  )
}

interface ExerciseFormProps {
  exercise?: WorkoutExercise
  onSave: (data: any) => void
  onCancel: () => void
  isLoading: boolean
}

function ExerciseForm({ exercise, onSave, onCancel, isLoading }: ExerciseFormProps) {
  const { experience } = useWhop()
  const [name, setName] = useState(exercise?.name || '')
  const [reps, setReps] = useState(exercise?.reps?.toString() || '')
  const [sets, setSets] = useState(exercise?.sets || 0)
  const [currentWeight, setCurrentWeight] = useState(exercise?.currentWeight || 0)
  const [maxWeight, setMaxWeight] = useState(exercise?.maxWeight || 0)
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kgs'>(exercise?.weightUnit || 'lbs')
  const [restTime, setRestTime] = useState(exercise?.restTime || 60)
  const [notes, setNotes] = useState(exercise?.notes || '')

  // Fetch max weight when exercise name changes
  const { data: maxWeightData } = useQuery({
    ...exerciseMaxWeightQuery(experience.id, name),
    enabled: !!name && name.trim().length > 0
  })

  // Update max weight when data is fetched
  useEffect(() => {
    if (maxWeightData?.maxWeight && maxWeightData.maxWeight > 0) {
      setMaxWeight(maxWeightData.maxWeight)
    }
  }, [maxWeightData])

  const handleSave = () => {
    onSave({
      name,
      reps,
      sets,
      currentWeight,
      maxWeight,
      weightUnit,
      restTime,
      notes,
      orderIndex: exercise?.orderIndex || 0
    })
  }

  return (
    <div className="space-y-4">
      <TextField.Input
        placeholder="Exercise name"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      
      {/* Weight Unit Selector */}
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium">Weight Unit:</label>
        <div className="flex gap-2">
          <Button
            variant={weightUnit === 'lbs' ? 'solid' : 'soft'}
            size="2"
            onClick={() => setWeightUnit('lbs')}
            className={weightUnit === 'lbs' ? '!bg-accent hover:!bg-accent/90 !text-white' : ''}
          >
            lbs
          </Button>
          <Button
            variant={weightUnit === 'kgs' ? 'solid' : 'soft'}
            size="2"
            onClick={() => setWeightUnit('kgs')}
            className={weightUnit === 'kgs' ? '!bg-accent hover:!bg-accent/90 !text-white' : ''}
          >
            kgs
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Sets</label>
          <TextField.Input
            type="number"
            placeholder="0"
            value={sets}
            onChange={(e: any) => setSets(parseInt(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Reps</label>
          <TextField.Input
            type="text"
            placeholder="e.g., 12, 12-10-8, 8-10-12"
            value={reps}
            onChange={(e: any) => setReps(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">Enter reps as numbers or ranges (e.g., 12-10-8)</p>
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Current Weight ({weightUnit})</label>
          <TextField.Input
            type="number"
            placeholder="0"
            value={currentWeight}
            onChange={(e: any) => setCurrentWeight(parseInt(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Max Weight ({weightUnit})</label>
          <TextField.Input
            type="number"
            placeholder="0"
            value={maxWeight}
            onChange={(e: any) => setMaxWeight(parseInt(e.target.value) || 0)}
            disabled
            className="bg-gray-50 dark:bg-gray-800"
          />
          <p className="text-xs text-gray-500 mt-1">Calculated from your workout history</p>
        </div>
      </div>

      {/* Rest Time Selector */}
      <div>
        <label className="text-sm font-medium mb-2 block flex items-center gap-2">
          <Clock className="w-4 h-4 text-accent" />
          Rest Time Between Sets
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {[30, 60, 90, 120, 180].map((seconds) => (
            <Button
              key={seconds}
              variant={restTime === seconds ? 'solid' : 'soft'}
              size="2"
              onClick={() => setRestTime(seconds)}
              className={restTime === seconds ? '!bg-accent hover:!bg-accent/90 !text-white' : ''}
            >
              {seconds < 60 ? `${seconds}s` : `${Math.floor(seconds / 60)}m${seconds % 60 ? `:${seconds % 60}` : ''}`}
            </Button>
          ))}
        </div>
        <TextField.Input
          type="number"
          placeholder="Custom rest time (seconds)"
          value={restTime}
          onChange={(e: any) => setRestTime(parseInt(e.target.value) || 60)}
          className="w-full"
        />
        <p className="text-xs text-gray-500 mt-1">Rest time between sets in seconds</p>
      </div>

      {/* Notes Field */}
      <div>
        <label className="text-sm font-medium mb-2 block flex items-center gap-2">
          <Info className="w-4 h-4 text-accent" />
          Notes & Instructions
        </label>
        <textarea
          placeholder="Add coaching cues, form tips, or special instructions..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-sm resize-none"
          rows={3}
        />
        <p className="text-xs text-gray-500 mt-1">Optional: Add form cues or special instructions</p>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="soft" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          variant="solid"
          disabled={!name || isLoading}
          onClick={handleSave}
          className="!bg-accent hover:!bg-accent/90 !text-white"
        >
          {isLoading ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </div>
  )
}
