'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button, IconButton, Tooltip, Sheet } from 'frosted-ui'
import { LayoutDashboard, MessageSquare, Users, BookOpen, Dumbbell, Apple, Utensils } from 'lucide-react'
import { useWhop } from '~/components/whop-context'

interface SidebarProps {
  experienceId: string
}

export function ExperienceSidebar({ experienceId }: SidebarProps) {
  const { access, user, experience } = useWhop()
  const isAdmin = (access as any).accessLevel === 'admin'
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

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
    { key: 'dashboard', label: 'Dashboard', href: `/experiences/${experienceId}/dashboard`, admin: true, icon: LayoutDashboard },
    { key: 'inbox', label: 'Inbox', href: `/experiences/${experienceId}/inbox`, admin: false, icon: MessageSquare },
    { key: 'clients', label: 'Clients', href: `/experiences/${experienceId}/clients`, admin: true, icon: Users },
    { key: 'my-workouts', label: 'My Workouts', href: `/experiences/${experienceId}/my-workouts`, admin: false, icon: Dumbbell },
    { key: 'workouts', label: 'Workout Plans', href: `/experiences/${experienceId}/workouts`, admin: true, icon: BookOpen },
    { key: 'nutrition', label: 'Nutrition', href: `/experiences/${experienceId}/nutrition`, admin: false, icon: Apple },
    { key: 'nutrition-plans', label: 'Nutrition Plans', href: `/experiences/${experienceId}/nutrition-plans`, admin: true, icon: Utensils },
  ] as const
  // Show appropriate items based on admin status
  const visible = items.filter((i) => {
    if (isAdmin) return true // Admins see everything
    return i.key === 'my-workouts' || i.key === 'inbox' || i.key === 'nutrition' // Users see My Workouts, Inbox, and Nutrition
  })

  const Nav = (
    <div className="h-full flex flex-col bg-accent-light">
      <div className="p-3 flex items-center justify-between">
        <div className="truncate">
          <div className="font-medium truncate text-gray-900">{experience.name}</div>
        </div>
        <IconButton aria-label="Toggle" onClick={toggleCollapse}>
          {collapsed ? '→' : '←'}
        </IconButton>
      </div>
      <nav className="p-2 space-y-1">
        {visible.map((i) => {
          // Special logic for workout plans: if user is not admin and viewing a workout plan,
          // it should be considered as "My Workouts" active, not "Workout Plans"
          let active = pathname?.startsWith(i.href)
          if (i.key === 'workouts' && !isAdmin && pathname?.includes('/workouts/')) {
            active = false // Don't highlight "Workout Plans" for non-admin users viewing plans
          }
          if (i.key === 'my-workouts' && !isAdmin && pathname?.includes('/workouts/')) {
            active = true // Highlight "My Workouts" for non-admin users viewing plans
          }
          const Icon = i.icon as any
          const content = (
            <div className={`px-3 py-2 rounded-md flex items-center gap-2 text-gray-900 ${active ? 'bg-black/5' : 'hover:bg-black/5'}`}>
                    <Icon size={18} strokeWidth={1.75} className="text-accent" />
              {!collapsed && (
                <div className="flex items-center gap-1">
                  <span>{i.label}</span>
                  {i.admin && <span className="text-xs opacity-60">(admin)</span>}
                </div>
              )}
            </div>
          )
          return (
            <Link key={i.key} href={i.href} onClick={() => setMobileOpen(false)}>
              {collapsed ? <Tooltip content={`${i.label}${i.admin ? ' (admin)' : ''}`}>{content}</Tooltip> : content}
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto p-3 text-xs text-gray-600">
        Signed in as {user.username}
      </div>
    </div>
  )

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <>
        <div className="hidden md:block border-r" style={{ width: 240 }}>
          <div className="h-full flex flex-col bg-accent-light">
            <div className="p-3 flex items-center justify-between">
              <div className="truncate">
                <div className="font-medium truncate text-gray-900">{experience.name}</div>
              </div>
              <IconButton aria-label="Toggle">
                ←
              </IconButton>
            </div>
            <nav className="p-2 space-y-1">
              {visible.map((i) => {
                // Special logic for workout plans: if user is not admin and viewing a workout plan,
                // it should be considered as "My Workouts" active, not "Workout Plans"
                let active = pathname?.startsWith(i.href)
                if (i.key === 'workouts' && !isAdmin && pathname?.includes('/workouts/')) {
                  active = false // Don't highlight "Workout Plans" for non-admin users viewing plans
                }
                if (i.key === 'my-workouts' && !isAdmin && pathname?.includes('/workouts/')) {
                  active = true // Highlight "My Workouts" for non-admin users viewing plans
                }
                const Icon = i.icon as any
                const content = (
                  <div className={`px-3 py-2 rounded-md flex items-center gap-2 text-gray-900 ${active ? 'bg-black/5' : 'hover:bg-black/5'}`}>
                    <Icon size={18} strokeWidth={1.75} className="text-accent" />
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
            <div className="mt-auto p-3 text-xs text-gray-600">
              Signed in as {user.username}
            </div>
          </div>
        </div>
        <div className="md:hidden p-2">
          <Button variant="soft">Menu</Button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="hidden md:block border-r" style={{ width: collapsed ? 72 : 240 }}>
        {Nav}
      </div>
      <div className="md:hidden p-2">
        <Button variant="soft" onClick={() => setMobileOpen(true)}>Menu</Button>
        <Sheet.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Sheet.Content>
            {Nav}
          </Sheet.Content>
        </Sheet.Root>
      </div>
    </>
  )
}


