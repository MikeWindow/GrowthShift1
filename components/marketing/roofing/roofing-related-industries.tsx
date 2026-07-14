import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const RELATED = [
  { label: 'HVAC', href: '#', desc: 'Heating and cooling service campaigns' },
  { label: 'Plumbers', href: '#', desc: 'Emergency and scheduled plumbing ads' },
  { label: 'Electricians', href: '#', desc: 'Residential and commercial electrical' },
  { label: 'Garage Door', href: '#', desc: 'Repair and installation campaigns' },
  { label: 'Window Cleaning', href: '#', desc: 'Residential and commercial cleaning' },
  { label: 'Pest Control', href: '#', desc: 'Recurring service lead generation' },
  { label: 'Cleaning Services', href: '#', desc: 'Home and office cleaning ads' },
  { label: 'Construction', href: '#', desc: 'Remodeling and contractor campaigns' },
];

export function RoofingRelatedIndustries() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Related Industries
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore other industries
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            GrowthShift supports AI Google ads builders for every local service vertical.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {RELATED.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-muted/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
