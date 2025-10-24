'use client'

import { useQuery } from '@tanstack/react-query'
import { Card } from 'frosted-ui'
import { use } from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { useWhop } from '~/components/whop-context'
import { planDetailQuery, type WorkoutPlanDetail } from '~/components/workouts/queries'

interface MyWorkoutPlanPageProps {
  params: Promise<{ experienceId: string; planId: string }>
}

export default function MyWorkoutPlanPage({ params }: MyWorkoutPlanPageProps) {
  const { experienceId, planId } = use(params)
  const { experience } = useWhop()

  const { data: plan, isLoading, error } = useQuery(planDetailQuery(experienceId, planId))

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="text-sm opacity-70">Loading workout plan...</div>
      </div>
    )
  }

  if (error || !plan) {
    return (
      <div className="p-6">
        <div className="text-sm opacity-70">Failed to load workout plan.</div>
        <Link href={`/experiences/${experienceId}/my-workouts`}>
          <div className="mt-4 text-accent hover:underline cursor-pointer">← Back to My Workouts</div>
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6">
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
          <span className="text-gray-900 font-medium">{plan.title}</span>
        </div>
      </nav>

      <div className="mb-6">
        <h1 className="text-2xl font-bold">{plan.title}</h1>
        {plan.description && (
          <p className="text-sm opacity-70 mt-1">{plan.description}</p>
        )}
      </div>

      <div className="space-y-6">
        {plan.days.map((day) => (
          <Card key={day.id}>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">{day.name}</h2>
              
              {day.exercises.length === 0 ? (
                <div className="text-sm opacity-70">No exercises added yet.</div>
              ) : (
                <div className="space-y-3">
                  {day.exercises.map((exercise) => (
                    <div key={exercise.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{exercise.name}</h3>
                        <div className="text-sm opacity-70">
                          {exercise.sets} sets × {exercise.reps} reps
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="opacity-70">Current Weight:</span>
                          <span className="ml-2 font-medium">{exercise.currentWeight} {exercise.weightUnit}</span>
                        </div>
                        <div>
                          <span className="opacity-70">Max Weight:</span>
                          <span className="ml-2 font-medium">{exercise.maxWeight} {exercise.weightUnit}</span>
                        </div>
                      </div>
                      
                      {exercise.notes && (
                        <div className="mt-2 text-sm opacity-70">
                          <span className="font-medium">Notes:</span> {exercise.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
