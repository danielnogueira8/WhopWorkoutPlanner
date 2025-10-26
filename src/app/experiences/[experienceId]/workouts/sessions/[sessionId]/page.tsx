'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, Button } from 'frosted-ui'
import { ArrowLeft, Calendar, Clock, Dumbbell, CheckCircle, Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { use } from 'react'
import { useWhop } from '~/components/whop-context'
import { workoutSessionDetailQuery } from '~/components/workouts/queries'

interface WorkoutSessionDetailProps {
  params: Promise<{ experienceId: string; sessionId: string }>
}

export default function WorkoutSessionDetailPage({ params }: WorkoutSessionDetailProps) {
  const { experienceId, sessionId } = use(params)
  const { experience } = useWhop()
  
  const { data: session, isLoading, error } = useQuery(workoutSessionDetailQuery(experienceId, sessionId))

  if (isLoading) {
    return (
      <div className="p-4 md:p-6">
        <div className="text-sm opacity-70">Loading workout session...</div>
      </div>
    )
  }

  if (error || !session) {
    return (
      <div className="p-4 md:p-6">
        <div className="text-sm text-red-600">Failed to load workout session</div>
        <Link href={`/experiences/${experienceId}/workouts`}>
          <Button variant="soft" className="mt-4 text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Workout Plans
          </Button>
        </Link>
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
            href={`/experiences/${experienceId}/workouts`}
            className="text-gray-600 hover:text-accent transition-colors"
          >
            Workout Plans
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">{session.planTitle}</span>
        </div>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="px-3 py-1 bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 text-sm rounded-full">
            Workout Session
          </div>
        </div>
        
        <h1 className="text-xl md:text-2xl font-bold mb-2">{session.planTitle}</h1>
        <h2 className="text-lg md:text-xl text-accent font-semibold mb-2">{session.dayName}</h2>
        
        <div className="flex items-center gap-4 text-sm opacity-70">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(session.completedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {new Date(session.completedAt).toLocaleTimeString()}
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            {session.exercises.length} exercises completed
          </div>
        </div>
      </div>

      {/* Workout Notes */}
      {session.notes && (
        <Card className="mb-6">
          <div className="p-4 md:p-5">
            <h3 className="font-semibold mb-3">Workout Notes</h3>
            <p className="text-sm opacity-80">{session.notes}</p>
          </div>
        </Card>
      )}

      {/* Exercises */}
      <Card>
        <div className="p-4 md:p-5">
          <h3 className="font-semibold mb-4">Exercises Performed</h3>
          
          {session.exercises.length > 0 ? (
            <div className="space-y-4">
              {session.exercises.map((exercise, index) => (
                <div key={exercise.id} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-accent">{index + 1}</span>
                    </div>
                    <h4 className="font-medium">{exercise.exerciseName}</h4>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <label className="text-xs opacity-70">Sets</label>
                      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded border text-sm">
                        {exercise.sets}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs opacity-70">Reps</label>
                      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded border text-sm">
                        {exercise.reps}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs opacity-70">Weight ({exercise.weightUnit})</label>
                      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded border text-sm">
                        {exercise.weight}
                      </div>
                    </div>
                  </div>
                  
                  {exercise.notes && (
                    <div>
                      <label className="text-xs opacity-70">Notes</label>
                      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded border text-sm">
                        {exercise.notes}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Dumbbell className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm opacity-70">No exercises found for this session</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
