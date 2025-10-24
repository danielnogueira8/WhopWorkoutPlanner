'use client'

import { useEffect, useState } from 'react'

export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate app loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 second loading time

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-accent-light">
      <div className="text-center">
        <div className="mb-4">
          <div className="w-12 h-12 mx-auto border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Workout Planner...</h2>
        <p className="text-sm text-gray-600">Please wait while we set up your fitness journey</p>
      </div>
    </div>
  )
}
