'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button, IconButton, Tooltip } from 'frosted-ui'
import { LayoutDashboard, MessageSquare, Users, BookOpen, Dumbbell, Apple, Utensils } from 'lucide-react'
import { useWhop } from '~/components/whop-context'
import { useQuery } from '@tanstack/react-query'
import { conversationsQuery } from '~/components/workouts/queries'

interface SidebarProps {
  experienceId: string
}

export function ExperienceSidebar({ experienceId }: SidebarProps) {
  const { access, user, experience } = useWhop()
  const isAdmin = (access as any).accessLevel === 'admin'
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fetch conversations to get unread counts
  const { data: conversations } = useQuery({ 
    ...conversationsQuery(experienceId),
    refetchOnWindowFocus: true, // Refetch when user returns to tab
    refetchOnMount: true, // Refetch when component mounts
    staleTime: 0, // Data is immediately stale, ensuring fresh data
  })
  
  // Calculate total unread count
  const totalUnreadCount = conversations?.reduce((total, conv) => total + conv.unreadCount, 0) || 0
  

  useEffect(() => {
    setMounted(true)
    const v = localStorage.getItem('xp.sidebar.collapsed')
    if (v === '1') setCollapsed(true)
  }, [])

  const toggleCollapse = () => {
    const next = !collapsed
    setCollapsed(next)
    if (mounted) localStorage.setItem('xp.sidebar.collapsed', next ? '1' : '0')
  }

  const items = [
    // User tabs first
    { key: 'user-dashboard', label: 'Dashboard', href: `/experiences/${experienceId}`, admin: false, icon: LayoutDashboard },
    { key: 'inbox', label: 'Inbox', href: `/experiences/${experienceId}/inbox`, admin: false, icon: MessageSquare },
    { key: 'my-workouts', label: 'My Workouts', href: `/experiences/${experienceId}/my-workouts`, admin: false, icon: Dumbbell },
    { key: 'nutrition', label: 'Nutrition', href: `/experiences/${experienceId}/nutrition`, admin: false, icon: Apple },
    // Admin tabs grouped together
    { key: 'dashboard', label: 'Dashboard', href: `/experiences/${experienceId}/dashboard`, admin: true, icon: LayoutDashboard },
    { key: 'clients', label: 'Clients', href: `/experiences/${experienceId}/clients`, admin: true, icon: Users },
    { key: 'workouts', label: 'Workout Plans', href: `/experiences/${experienceId}/workouts`, admin: true, icon: BookOpen },
    { key: 'nutrition-plans', label: 'Nutrition Plans', href: `/experiences/${experienceId}/nutrition-plans`, admin: true, icon: Utensils },
  ] as const
  // Show appropriate items based on admin status
  const visible = items.filter((i) => {
    if (isAdmin) {
      // Admins see everything EXCEPT the user dashboard
      return i.key !== 'user-dashboard'
    }
    // Users see Dashboard, My Workouts, Inbox, and Nutrition
    return i.key === 'user-dashboard' || i.key === 'my-workouts' || i.key === 'inbox' || i.key === 'nutrition'
  })

  const Nav = (
    <div className="h-full flex flex-col bg-accent-light dark:bg-black">
      <div className="p-3 flex items-center justify-between">
        <div className="truncate">
          <div className="font-medium truncate text-gray-900 dark:text-white">{experience.name}</div>
        </div>
        <IconButton aria-label="Toggle" onClick={toggleCollapse}>
          {collapsed ? '→' : '←'}
        </IconButton>
      </div>
      <nav className="p-2 space-y-1">
        {visible.map((i) => {
          // Determine active state based on item key and current pathname
          let active = false
          
          if (i.key === 'user-dashboard') {
            // User dashboard is active on the exact main page (for both admins and users)
            active = pathname === `/experiences/${experienceId}`
          } else if (i.key === 'dashboard' && isAdmin) {
            // Admin dashboard is active when on admin dashboard page
            active = pathname === `/experiences/${experienceId}/dashboard`
          } else if (i.key === 'workouts' && isAdmin) {
            // Admin workout plans - active when on workout plans pages
            active = pathname?.startsWith(i.href)
          } else if (i.key === 'my-workouts' && !isAdmin) {
            // User workouts - active when on my-workouts pages OR when viewing workout plans
            active = pathname?.startsWith(i.href) || pathname?.includes('/workouts/') || pathname?.includes('/my-workouts/')
          } else if (i.key === 'nutrition-plans' && isAdmin) {
            // Admin nutrition plans - active when on nutrition plans pages (including viewing plans)
            active = pathname?.startsWith(i.href) || pathname?.includes('/nutrition-plans/')
          } else if (i.key === 'nutrition') {
            // Nutrition tab logic
            if (isAdmin) {
              // Admins: Only active on /nutrition page, never on /nutrition-plans/
              active = pathname?.startsWith(i.href) && !pathname?.includes('/nutrition-plans/')
            } else {
              // Users: Active on nutrition pages OR when viewing nutrition plans (except builder)
              if (pathname?.includes('/nutrition-plans/')) {
                active = !pathname?.includes('/builder')
              } else {
                active = pathname?.startsWith(i.href)
              }
            }
          } else {
            // Default behavior for other items
            active = pathname?.startsWith(i.href)
          }
          const Icon = i.icon as any
          const content = (
            <div className={`px-3 py-2 rounded-md flex items-center gap-2 text-gray-900 dark:text-white ${active ? 'bg-black/5 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/10'}`}>
              <div className="relative">
                <Icon size={18} strokeWidth={1.75} className="text-accent" />
                {/* Unread badge for inbox */}
                {i.key === 'inbox' && totalUnreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {totalUnreadCount > 9 ? '9+' : totalUnreadCount}
                  </div>
                )}
              </div>
              {!collapsed && (
                <div className="flex items-center gap-1">
                  <span>{i.label}</span>
                  {i.admin && <span className="text-xs opacity-60">(admin)</span>}
                </div>
              )}
            </div>
          )
          return (
            <Link key={i.key} href={i.href}>
              {collapsed ? <Tooltip content={`${i.label}${i.admin ? ' (admin)' : ''}`}>{content}</Tooltip> : content}
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto p-3 text-xs text-gray-600 dark:text-gray-300">
        Signed in as {user.username}
      </div>
    </div>
  )

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <>
        <div className="hidden md:block border-r" style={{ width: 240 }}>
          <div className="h-full flex flex-col bg-accent-light dark:bg-black">
            <div className="p-3 flex items-center justify-between">
              <div className="truncate">
                <div className="font-medium truncate text-gray-900 dark:text-white">{experience.name}</div>
              </div>
              <IconButton aria-label="Toggle">
                ←
              </IconButton>
            </div>
            <nav className="p-2 space-y-1">
              {visible.map((i) => {
                // Determine active state based on item key and current pathname (same logic as desktop)
                let active = false
                
                if (i.key === 'user-dashboard') {
                  // User dashboard is active on the exact main page (for both admins and users)
                  active = pathname === `/experiences/${experienceId}`
                } else if (i.key === 'dashboard' && isAdmin) {
                  // Admin dashboard is active when on admin dashboard page
                  active = pathname === `/experiences/${experienceId}/dashboard`
                } else if (i.key === 'workouts' && isAdmin) {
                  // Admin workout plans - active when on workout plans pages
                  active = pathname?.startsWith(i.href)
                } else if (i.key === 'my-workouts' && !isAdmin) {
                  // User workouts - active when on my-workouts pages OR when viewing workout plans
                  active = pathname?.startsWith(i.href) || pathname?.includes('/workouts/') || pathname?.includes('/my-workouts/')
                } else if (i.key === 'nutrition-plans' && isAdmin) {
                  // Admin nutrition plans - active when building a plan
                  if (pathname?.includes('/nutrition-plans/')) {
                    active = pathname?.includes('/builder')
                  } else {
                    active = pathname?.startsWith(i.href)
                  }
                } else if (i.key === 'nutrition' && !isAdmin) {
                  // User nutrition - active when on nutrition pages OR when viewing nutrition plans (except builder)
                  if (pathname?.includes('/nutrition-plans/')) {
                    active = !pathname?.includes('/builder')
                  } else {
                    active = pathname?.startsWith(i.href)
                  }
                } else {
                  // Default behavior for other items
                  active = pathname?.startsWith(i.href)
                }
                const Icon = i.icon as any
                const content = (
                  <div className={`px-3 py-2 rounded-md flex items-center gap-2 text-gray-900 dark:text-white ${active ? 'bg-black/5 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/10'}`}>
                    <div className="relative">
                      <Icon size={18} strokeWidth={1.75} className="text-accent" />
                      {/* Unread badge for inbox */}
                      {i.key === 'inbox' && totalUnreadCount > 0 && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                          {totalUnreadCount > 9 ? '9+' : totalUnreadCount}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{i.label}</span>
                      {i.admin && <span className="text-xs opacity-60">(admin)</span>}
                    </div>
                  </div>
                )
                return (
                  <Link key={i.key} href={i.href}>
                    {content}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-auto p-3 text-xs text-gray-600 dark:text-gray-300">
              Signed in as {user.username}
            </div>
          </div>
        </div>
        <div className="md:hidden p-2">
          <Button variant="soft" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950">Menu</Button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="hidden md:block border-r" style={{ width: collapsed ? 72 : 240 }}>
        {Nav}
      </div>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-accent-light dark:bg-black border-t border-gray-200 dark:border-gray-700 z-50">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-1 px-2 py-2">
            {visible.map((i) => {
              // Determine active state based on item key and current pathname (same logic as desktop)
              let active = false
              
              if (i.key === 'user-dashboard') {
                // User dashboard is active on the exact main page (for both admins and users)
                active = pathname === `/experiences/${experienceId}`
              } else if (i.key === 'dashboard' && isAdmin) {
                // Admin dashboard is active when on admin dashboard page
                active = pathname === `/experiences/${experienceId}/dashboard`
              } else if (i.key === 'workouts' && isAdmin) {
                // Admin workout plans - active when on workout plans pages
                active = pathname?.startsWith(i.href)
              } else if (i.key === 'my-workouts' && !isAdmin) {
                // User workouts - active when on my-workouts pages OR when viewing workout plans
                active = pathname?.startsWith(i.href) || pathname?.includes('/workouts/') || pathname?.includes('/my-workouts/')
              } else if (i.key === 'nutrition-plans' && isAdmin) {
                // Admin nutrition plans - active when on nutrition plans pages (including viewing plans)
                active = pathname?.startsWith(i.href) || pathname?.includes('/nutrition-plans/')
              } else if (i.key === 'nutrition') {
                // Nutrition tab logic
                if (isAdmin) {
                  // Admins: Only active on /nutrition page, never on /nutrition-plans/
                  active = pathname?.startsWith(i.href) && !pathname?.includes('/nutrition-plans/')
                } else {
                  // Users: Active on nutrition pages OR when viewing nutrition plans (except builder)
                  if (pathname?.includes('/nutrition-plans/')) {
                    active = !pathname?.includes('/builder')
                  } else {
                    active = pathname?.startsWith(i.href)
                  }
                }
              } else {
                // Default behavior for other items
                active = pathname?.startsWith(i.href)
              }
              
              const Icon = i.icon as any
              return (
                <Link key={i.key} href={i.href} className="flex-shrink-0">
                  <div className={`flex flex-col items-center px-3 py-2 rounded-md min-w-[60px] relative ${active ? 'bg-black/5 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/10'}`}>
                    <div className="relative">
                      <Icon size={20} strokeWidth={1.75} className="text-accent mb-1" />
                      {/* Unread badge for inbox */}
                      {i.key === 'inbox' && totalUnreadCount > 0 && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                          {totalUnreadCount}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-900 dark:text-white text-center leading-tight">{i.label}</span>
                    {i.admin && <span className="text-xs opacity-60 text-center">(admin)</span>}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}


