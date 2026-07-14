import { TrendingUp, Zap, CloudRain, ShieldCheck, Home, Building, MapPin, Users } from 'lucide-react';
import { AiInsight } from '@/components/marketing/roofing/ai-insight';

const REASONS = [
  {
    icon: TrendingUp,
    title: 'High CPC Market',
    description:
      'Roofing Google Ads operate in one of the most competitive local PPC markets. Roof replacement keywords often exceed $20 per click, making every wasted impression costly. GrowthShift targets high-intent phrases and applies negative keywords to protect your budget.',
  },
  {
    icon: Users,
    title: 'Intense Local Competition',
    description:
      'Multiple roofing companies bid on the same storm damage and roof repair keywords in every city. Our AI structures your roofing Google Ads campaign to differentiate on service area, trust signals, and ad relevance rather than pure bids.',
  },
  {
    icon: CloudRain,
    title: 'Storm Season Demand Surges',
    description:
      'Storm damage roofing keywords spike dramatically after weather events. Roofing PPC automation lets you activate emergency roofing ads and adjust budgets within minutes so you capture leads while demand is highest.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Job Opportunities',
    description:
      'Insurance claims drive a large share of roof replacement leads. GrowthShift generates keywords and ad copy that align with how homeowners search after filing or considering an insurance claim.',
  },
  {
    icon: Home,
    title: 'Residential Roofing Leads',
    description:
      'Homeowners searching for roof leak repair, roof inspection, or roof installation need fast responses. Our roofing lead generation software produces phone call leads through call extensions and conversion-optimized landing pages.',
  },
  {
    icon: Building,
    title: 'Commercial Roofing Pipeline',
    description:
      'Commercial roofing ads target property managers and business owners with longer sales cycles. GrowthShift separates commercial roofing keywords from residential so your ad copy and bidding match the audience.',
  },
  {
    icon: Zap,
    title: 'Fast Lead Response Required',
    description:
      'Roofing leads go to the first contractor who answers. Call extensions, call reporting, and call-only ad formats ensure every roofing phone call lead reaches your team instantly.',
  },
  {
    icon: MapPin,
    title: 'Multiple Service Areas',
    description:
      'Roofers often serve several cities or counties. Location extensions and manual location targeting ensure your roofing Google Ads campaign shows only where you actually operate.',
  },
];

export function RoofingWhySection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Why Roofing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Roofing Companies Need AI Google Ads
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Roofing is one of the most demanding verticals for Google Ads. High click costs, seasonal spikes,
            and fierce local competition make manual campaign management expensive and slow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 max-w-2xl">
          <AiInsight>
            Roof replacement keywords usually convert better than generic roofing keywords because they capture homeowners ready to hire.
          </AiInsight>
        </div>
      </div>
    </section>
  );
}
