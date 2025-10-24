'use client'

import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { type ReactNode, useState } from 'react'
import { WhopContext } from './whop-context'
import { whopExperienceQuery, whopUserQuery } from './whop-queries'

interface WhopProviderProps {
  children: ReactNode
  experienceId: string
  state: DehydratedState
}

export function WhopProvider({ children, experienceId, state }: WhopProviderProps) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={client}>
      <HydrationBoundary state={state}>
        <WhopProviderInner experienceId={experienceId}>{children}</WhopProviderInner>
      </HydrationBoundary>
    </QueryClientProvider>
  )
}

interface WhopProviderInnerProps {
  children: ReactNode
  experienceId: string
}

function WhopProviderInner({ children, experienceId }: WhopProviderInnerProps) {
  const { data: experience, isLoading: isLoadingExperience } = useQuery(whopExperienceQuery(experienceId))
  const { data: userAndAccess, isLoading: isLoadingUser } = useQuery(whopUserQuery(experienceId))

  if (isLoadingExperience || isLoadingUser || !experience || !userAndAccess) {
    return null
  }

  return (
    <WhopContext.Provider value={{ experience, user: userAndAccess.user, access: userAndAccess.access }}>
      {children}
    </WhopContext.Provider>
  )
}
