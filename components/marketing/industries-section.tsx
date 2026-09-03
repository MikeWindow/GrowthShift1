import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const INDUSTRIES = [
  { label: 'Roofing', href: '/industries/roofing' },
  { label: 'HVAC', href: '/industries/hvac' },
  { label: 'Plumbers', href: '/industries/plumbers' },
  { label: 'Electricians', href: '/industries/electricians' },
  { label: 'Lawyers', href: '/industries/google-ads-for-lawyers' },
  { label: 'Cleaning Services', href: '/industries/google-ads-for-cleaning-services' },
  { label: 'Pest Control', href: '/industries/google-ads-for-pest-control' },
  { label: 'Appliance Repair', href: '/industries/appliance-repair' },
  { label: 'Garage Door', href: '/industries/google-ads-for-garage-door' },
  { label: 'Junk Removal', href: '/industries/google-ads-for-junk-removal' },
  { label: 'Flooring', href: '/industries/google-ads-for-flooring' },
  { label: 'Landscaping', href: '/industries/google-ads-for-landscaping' },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Industries
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for local service businesses
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Pre-trained AI models for the industries that rely on Google Ads the most.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.label}
              href={industry.href}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40 hover:bg-muted/30"
            >
              <span className="text-sm font-medium text-foreground">{industry.label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" className="h-11 px-6 text-sm gap-1.5">
            <Link href="/industries/roofing">
              View All Industries
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
