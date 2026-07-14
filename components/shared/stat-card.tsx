import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { StatCard } from '@/types';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps extends StatCard {
  icon: LucideIcon;
  className?: string;
}

export function StatCardComponent({ title, value, change, changeType, description, icon: Icon, className }: StatCardProps) {
  const changeConfig = {
    positive: { icon: TrendingUp, className: 'text-emerald-600 bg-emerald-50' },
    negative: { icon: TrendingDown, className: 'text-red-600 bg-red-50' },
    neutral: { icon: Minus, className: 'text-muted-foreground bg-muted' },
  };

  const config = changeConfig[changeType];
  const ChangeIcon = config.icon;

  return (
    <Card className={cn('border-border shadow-none', className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-0.5">
            <p className="text-xs font-medium text-muted-foreground">{title}</p>
          </div>
          <div className="rounded-md border border-border bg-muted/50 p-1.5">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div className="mt-2.5 space-y-1">
          <p className="text-2xl font-semibold tracking-tight text-foreground">{value}</p>
          <div className="flex items-center gap-1.5">
            <span className={cn('flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[11px] font-medium', config.className)}>
              <ChangeIcon className="h-2.5 w-2.5" />
              {change}
            </span>
            <span className="text-[11px] text-muted-foreground">{description}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
