import { Type, MapPin, Wrench, Gauge, Sparkles, Building, Siren, TestTube2, HardHat } from 'lucide-react';
import { AiInsight } from '@/components/marketing/roofing/ai-insight';

const HEADLINE_POINTS = [
  {
    icon: Type,
    title: '15 Headlines Per Ad Group',
    description:
      'Google responsive search ads allow up to 15 headlines. GrowthShift fills every slot with roofing-specific variations so Google can test and optimize combinations automatically.',
  },
  {
    icon: Sparkles,
    title: 'Keyword Insertion & Dynamic Headlines',
    description:
      'Dynamic keyword insertion matches the headline to the exact search term. A user searching "storm damage roof repair" sees that phrase in the headline, improving relevance and click-through rate. Dynamic headlines make each impression feel custom-written for the searcher.',
  },
  {
    icon: Gauge,
    title: 'High Quality Score',
    description:
      'Tight alignment between roofing keywords, ad headlines, and landing pages drives up Quality Score — lowering your cost per lead and improving ad position without raising bids. Every headline is written to match its ad group theme exactly.',
  },
  {
    icon: MapPin,
    title: 'Location Headlines',
    description:
      'Roofing ad headlines include city and region names so local searches see geographically relevant copy. "Roof Replacement in Florida" outperforms generic headlines in local markets because it signals proximity and availability.',
  },
  {
    icon: Wrench,
    title: 'Service Headlines',
    description:
      'Each ad group gets service-specific headlines — roof replacement, metal roofing, storm damage — so the ad matches the user\'s exact need rather than a generic roofing pitch.',
  },
  {
    icon: HardHat,
    title: 'Roof Replacement Headlines',
    description:
      'Roof replacement headlines emphasize trust, warranty, and financing: "Expert Roof Replacement — Free Estimate", "Licensed Roof Replacement Contractors". These target homeowners at the decision stage of a major investment.',
  },
  {
    icon: Wrench,
    title: 'Roof Repair Headlines',
    description:
      'Roof repair headlines lead with speed and urgency: "Fast Roof Leak Repair — Call Today", "Same-Day Roof Repair Service". Homeowners searching for repair need reassurance that help is immediate.',
  },
  {
    icon: Building,
    title: 'Commercial Roofing Headlines',
    description:
      'Commercial roofing headlines speak to property managers and business owners: "Commercial Roofing Contractors — 24/7 Service", "Flat Roof Maintenance & Repair". The tone is professional and reliability-focused.',
  },
  {
    icon: Siren,
    title: 'Emergency Roofing Headlines',
    description:
      'Emergency roofing headlines use urgency and availability as the primary hook: "24/7 Emergency Roof Repair", "Storm Damage? We Respond Fast". These run on call-only formats whenever possible.',
  },
  {
    icon: TestTube2,
    title: 'Headline Testing',
    description:
      'Responsive search ads automatically test headline combinations. GrowthShift writes variations with different angles — price, speed, trust, location — so Google\'s machine learning finds the best performers. Our AI Campaign Optimizer reviews results and suggests new variations over time.',
  },
];

export function RoofingHeadlinesSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Ad Headlines
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Google Ads Headlines Generated
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Roofing Google Ads headlines are the first thing homeowners see. GrowthShift writes 15 headlines
            per ad group for responsive search ads using proven direct-response principles, then tests
            combinations to find the highest-converting messaging.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HEADLINE_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 max-w-2xl">
          <AiInsight>
            Location headlines like "Roof Replacement in Florida" consistently outperform generic headlines in local roofing markets.
          </AiInsight>
        </div>
      </div>
    </section>
  );
}
