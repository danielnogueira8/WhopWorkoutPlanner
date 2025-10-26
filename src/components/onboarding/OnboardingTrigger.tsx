'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { useWhop } from '~/components/whop-context'
import { getApiUrl } from '~/components/whop-context/whop-queries'
import { OnboardingModal } from './OnboardingModal'

const OnboardingContext = createContext<{
  showOnboarding: boolean
  setShowOnboarding: (show: boolean) => void
} | null>(null)

export function useOnboardingTrigger() {
  const context = useContext(OnboardingContext)
  if (!context) {
    throw new Error('useOnboardingTrigger must be used within OnboardingProvider')
  }
  return context
}

interface OnboardingProviderProps {
  children: React.ReactNode
}

export function OnboardingProvider({ children }: OnboardingProviderProps) {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [hasManuallyClosed, setHasManuallyClosed] = useState(false)
  const { experience, user, access } = useWhop()
  const isAdmin = (access as any).accessLevel === 'admin'
  const queryClient = useQueryClient()

  // Fetch user preferences to check onboarding status
  const { data: preferences } = useQuery({
    queryKey: ['user-preferences', experience.id, user.id],
    queryFn: async () => {
      const res = await fetch(getApiUrl(`/api/experience/${experience.id}/user/preferences`))
      if (!res.ok) throw new Error('Failed to fetch preferences')
      return res.json()
    },
    enabled: isAdmin,
  })

  // Mutation to mark onboarding as complete
  const completeOnboardingMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(getApiUrl(`/api/experience/${experience.id}/user/preferences/onboarding`), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      if (!res.ok) throw new Error('Failed to complete onboarding')
      return res.json()
    },
    onSuccess: () => {
      // Invalidate cache so preferences are updated
      queryClient.invalidateQueries({ queryKey: ['user-preferences', experience.id, user.id] })
    },
  })

  // Show onboarding if not completed (only on initial load)
  useEffect(() => {
    if (preferences && !preferences.onboardingCompleted && !showOnboarding && !hasManuallyClosed && isAdmin) {
      setShowOnboarding(true)
    }
  }, [preferences, showOnboarding, hasManuallyClosed, isAdmin])

  const handleCompleteOnboarding = useCallback(() => {
    // Mark as manually closed to prevent reopening
    setHasManuallyClosed(true)
    // Close modal immediately for better UX
    setShowOnboarding(false)
    // Then save to database in background
    completeOnboardingMutation.mutate()
  }, [completeOnboardingMutation])

  return (
    <OnboardingContext.Provider value={{ showOnboarding, setShowOnboarding }}>
      {children}
      <OnboardingModal
        open={showOnboarding}
        onClose={() => setShowOnboarding(false)}
        onComplete={handleCompleteOnboarding}
      />
    </OnboardingContext.Provider>
  )
}

