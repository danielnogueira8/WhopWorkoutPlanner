'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Card, TextField, Dialog } from 'frosted-ui'
import { useState, use } from 'react'
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
  type WorkoutDay,
  type WorkoutExercise
} from '~/components/workouts/queries'

interface WorkoutBuilderProps {
  params: Promise<{ experienceId: string; planId: string }>
}

export default function WorkoutBuilderPage({ params }: WorkoutBuilderProps) {
  const { experienceId, planId } = use(params)
  const { access } = useWhop()
  const isAdmin = access.accessLevel === 'owner' || access.accessLevel === 'admin'
  const [newDayOpen, setNewDayOpen] = useState(false)
  const [newDayName, setNewDayName] = useState('')
  const [editingDay, setEditingDay] = useState<WorkoutDay | null>(null)
  const [editingDayName, setEditingDayName] = useState('')
  const [selectedDayId, setSelectedDayId] = useState<string | null>(null)
  const [newExerciseOpen, setNewExerciseOpen] = useState(false)
  const [editingExercise, setEditingExercise] = useState<WorkoutExercise | null>(null)
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
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      {/* Days Panel */}
      <Card>
        <div className="p-3 md:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <h3 className="font-semibold text-sm md:text-base">Workout Days</h3>
            <Button variant="solid" onClick={() => setNewDayOpen(true)} className="!bg-accent hover:!bg-accent/90 !text-white">
              Add Day
            </Button>
          </div>
          
          {isLoadingDays ? (
            <div className="text-sm opacity-70">Loading days...</div>
          ) : (
            <div className="space-y-2">
              {(days ?? []).map((day) => (
                <div
                  key={day.id}
                  className={`p-3 rounded cursor-pointer border ${
                    selectedDayId === day.id 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' 
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedDayId(day.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{day.name}</div>
                      <div className="text-xs opacity-70">Day {day.dayIndex + 1}</div>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="soft"
                        onClick={(e) => {
                          e.stopPropagation()
                          setEditingDay(day)
                          setEditingDayName(day.name)
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="soft"
                        onClick={(e) => {
                          e.stopPropagation()
                          setEditingDay(day)
                          deleteDay.mutate()
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Exercises Panel */}
      <Card>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">
              {selectedDayId ? days?.find(d => d.id === selectedDayId)?.name : 'Select a Day'}
            </h3>
            {selectedDayId && (
              <Button variant="solid" onClick={() => setNewExerciseOpen(true)} className="!bg-accent hover:!bg-accent/90 !text-white">
                Add Exercise
              </Button>
            )}
          </div>
          
          {!selectedDayId ? (
            <div className="text-sm opacity-70">Select a day to view exercises</div>
          ) : isLoadingExercises ? (
            <div className="text-sm opacity-70">Loading exercises...</div>
          ) : (
            <div className="space-y-2">
              {(exercises ?? []).map((exercise) => (
                <div key={exercise.id} className="p-3 border rounded">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">{exercise.name}</div>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="soft"
                        onClick={() => setEditingExercise(exercise)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="soft"
                        onClick={() => {
                          setEditingExercise(exercise)
                          deleteExercise.mutate()
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs opacity-70">
                    <div>Sets: {exercise.sets}</div>
                    <div>Reps: {exercise.reps}</div>
                    <div>Current: {exercise.currentWeight}lbs</div>
                    <div>Max: {exercise.maxWeight}lbs</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Exercise Details Panel */}
      <Card>
        <div className="p-4">
          <h3 className="font-semibold mb-4">Exercise Details</h3>
          {editingExercise ? (
            <ExerciseForm
              exercise={editingExercise}
              onSave={(data) => updateExercise.mutate(data)}
              onCancel={() => setEditingExercise(null)}
              isLoading={updateExercise.isPending}
            />
          ) : (
            <div className="text-sm opacity-70">Select an exercise to edit details</div>
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
  const [name, setName] = useState(exercise?.name || '')
  const [reps, setReps] = useState(exercise?.reps || 0)
  const [sets, setSets] = useState(exercise?.sets || 0)
  const [currentWeight, setCurrentWeight] = useState(exercise?.currentWeight || 0)
  const [maxWeight, setMaxWeight] = useState(exercise?.maxWeight || 0)

  const handleSave = () => {
    onSave({
      name,
      reps,
      sets,
      currentWeight,
      maxWeight,
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
      <div className="grid grid-cols-2 gap-2">
        <TextField.Input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e: any) => setSets(parseInt(e.target.value) || 0)}
        />
        <TextField.Input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e: any) => setReps(parseInt(e.target.value) || 0)}
        />
        <TextField.Input
          type="number"
          placeholder="Current Weight (lbs)"
          value={currentWeight}
          onChange={(e: any) => setCurrentWeight(parseInt(e.target.value) || 0)}
        />
        <TextField.Input
          type="number"
          placeholder="Max Weight (lbs)"
          value={maxWeight}
          onChange={(e: any) => setMaxWeight(parseInt(e.target.value) || 0)}
        />
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
