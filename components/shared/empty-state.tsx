import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
  size = 'md',
}: EmptyStateProps) {
  const sizes = {
    sm: { wrapper: 'py-8', icon: 'h-8 w-8 p-2', title: 'text-sm', desc: 'text-xs' },
    md: { wrapper: 'py-12', icon: 'h-10 w-10 p-2.5', title: 'text-sm font-semibold', desc: 'text-sm' },
    lg: { wrapper: 'py-16', icon: 'h-12 w-12 p-3', title: 'text-base font-semibold', desc: 'text-sm' },
  };

  const s = sizes[size];

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        s.wrapper,
        className
      )}
    >
      <div className={cn('mb-3 rounded-lg border border-border bg-muted/50', s.icon)}>
        <Icon className="h-full w-full text-muted-foreground" />
      </div>
      <p className={cn('text-foreground', s.title)}>{title}</p>
      <p className={cn('mt-1 max-w-xs text-muted-foreground', s.desc)}>{description}</p>
      {action && (
        <Button
          onClick={action.onClick}
          size="sm"
          className="mt-4 text-xs"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}
