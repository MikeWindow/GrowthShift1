import { Bot, Building2, Clock, DollarSign, RefreshCw, Target } from 'lucide-react';

const COMPARISON = [
  {
    icon: Bot,
    title: 'GrowthShift',
    points: [
      'Full campaign generated in minutes',
      'Flat monthly software pricing',
      'Instant keyword and ad copy updates',
      'You own and control every campaign',
      'Roofing-specific AI trained on the vertical',
      'No long-term contracts',
    ],
  },
  {
    icon: Building2,
    title: 'Traditional Agency',
    points: [
      '2–4 week campaign setup process',
      '$1,500–$3,000 monthly management fee',
      'Changes require account manager turnaround',
      'Agency owns the Google Ads account',
      'Generalist knowledge across industries',
      '6–12 month contracts common',
    ],
  },
];

export function RoofingComparisonSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Comparison
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why GrowthShift Instead of a Traditional Agency
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Roofing marketing agencies charge premium fees for work that AI can now do faster and more
            consistently. Here is how GrowthShift compares.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {COMPARISON.map((col) => {
            const Icon = col.icon;
            const isAlpha = col.title === 'GrowthShift';
            return (
              <div
                key={col.title}
                className={`rounded-2xl border p-7 shadow-sm ${
                  isAlpha ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'
                }`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                      isAlpha ? 'border-primary/30 bg-primary/10' : 'border-border bg-muted'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isAlpha ? 'text-primary' : 'text-foreground'}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{col.title}</h3>
                </div>
                <ul className="space-y-3">
                  {col.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      {isAlpha ? (
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        </div>
                      ) : (
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted border border-border">
                          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                        </div>
                      )}
                      <span className="text-sm text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
