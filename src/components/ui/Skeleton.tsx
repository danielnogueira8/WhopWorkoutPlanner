import { cn } from "frosted-ui"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",
        className
      )}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="p-4 md:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex-1">
          <Skeleton className="h-6 w-32 mb-2" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-4 w-48 mt-2" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-16" />
        </div>
      </div>
    </div>
  )
}

export function StatsSkeleton() {
  return (
    <div className="p-3 md:p-4">
      <div className="flex justify-between items-start mb-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
      </div>
      <Skeleton className="h-8 w-12" />
    </div>
  )
}
