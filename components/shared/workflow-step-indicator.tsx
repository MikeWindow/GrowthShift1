import { CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const STEPS = [
  { id: 1, label: 'Website Analysis' },
  { id: 2, label: 'Business Review' },
  { id: 3, label: 'Campaign Generation' },
];

interface WorkflowStepIndicatorProps {
  currentStep: 1 | 2 | 3;
}

export function WorkflowStepIndicator({ currentStep }: WorkflowStepIndicatorProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-medium text-muted-foreground">
        Step {currentStep} of {STEPS.length}
      </span>
      <span className="text-muted-foreground/40 text-xs select-none">·</span>
      {STEPS.map((step, index) => {
        const isDone = step.id < currentStep;
        const isActive = step.id === currentStep;
        return (
          <div key={step.id} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight className="h-3 w-3 text-muted-foreground/30 shrink-0" />
            )}
            <div
              className={cn(
                'flex items-center gap-1.5 text-xs font-medium',
                isDone
                  ? 'text-emerald-600'
                  : isActive
                  ? 'text-primary'
                  : 'text-muted-foreground/50'
              )}
            >
              {isDone ? (
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              ) : isActive ? (
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              ) : (
                <div className="h-1.5 w-1.5 rounded-full border border-muted-foreground/30 shrink-0" />
              )}
              <span className="hidden sm:inline">{step.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
