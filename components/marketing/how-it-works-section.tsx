import { Globe, ClipboardCheck, Wand2, Download } from 'lucide-react';

const STEPS = [
  {
    icon: Globe,
    title: 'Analyze Website',
    description: 'Paste your URL. AI extracts services, locations, and trust signals.',
  },
  {
    icon: ClipboardCheck,
    title: 'Review Business',
    description: 'Confirm or edit the extracted profile before campaign generation.',
  },
  {
    icon: Wand2,
    title: 'Generate Campaign',
    description: 'AI builds keywords, headlines, descriptions, and extensions.',
  },
  {
    icon: Download,
    title: 'Export',
    description: 'Download or push your campaign directly to Google Ads.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From URL to campaign in 4 steps
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-border lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
