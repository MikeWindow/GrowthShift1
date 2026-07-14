import { Sparkles } from 'lucide-react';

interface AiInsightProps {
  children: React.ReactNode;
  className?: string;
}

export function AiInsight({ children, className }: AiInsightProps) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 ${className ?? ''}`}
    >
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">AI Insight</p>
        <p className="mt-0.5 text-sm leading-relaxed text-foreground">{children}</p>
      </div>
    </div>
  );
}
