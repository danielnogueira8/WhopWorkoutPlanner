import { LucideIcon } from 'lucide-react'
import { Button } from 'frosted-ui'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <Icon className="w-16 h-16 text-emerald-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        {description}
      </p>
      {action && (
        <Button onClick={action.onClick} className="!bg-accent hover:!bg-accent/90 !text-white">
          {action.label}
        </Button>
      )}
    </div>
  )
}
