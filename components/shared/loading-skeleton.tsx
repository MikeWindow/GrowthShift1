import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('rounded-md skeleton-shimmer', className)}
    />
  );
}

export function SkeletonStatCard() {
  return (
    <div className="rounded-lg border border-border bg-card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <Skeleton className="h-3.5 w-28" />
        <Skeleton className="h-7 w-7 rounded-md" />
      </div>
      <Skeleton className="h-7 w-24" />
      <Skeleton className="h-3 w-36" />
    </div>
  );
}

export function SkeletonTableRow() {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-border last:border-0">
      <Skeleton className="h-4 w-4 rounded" />
      <Skeleton className="h-3.5 flex-1" />
      <Skeleton className="h-5 w-16 rounded-full" />
      <Skeleton className="h-3.5 w-20" />
      <Skeleton className="h-3.5 w-14" />
    </div>
  );
}

export function SkeletonPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 fade-in">
      <div className="space-y-1.5">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-64" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonStatCard key={i} />
        ))}
      </div>
      <div className="rounded-lg border border-border bg-card p-5 space-y-4">
        <Skeleton className="h-4 w-32" />
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonTableRow key={i} />
        ))}
      </div>
    </div>
  );
}
