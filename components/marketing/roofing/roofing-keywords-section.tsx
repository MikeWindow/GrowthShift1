import Link from 'next/link';
import { Search, MapPin, Wrench, Tag, Ban, Building, Layers, Target, GitBranch, Filter } from 'lucide-react';
import { AiInsight } from '@/components/marketing/roofing/ai-insight';

const STRATEGIES = [
  {
    icon: GitBranch,
    title: 'Roofing Google Ads Campaign Structure',
    description:
      'A well-structured roofing Google Ads campaign separates services into distinct ad groups — roof replacement, roof repair, metal roofing, storm damage, and commercial roofing. This roofing campaign structure improves Quality Score because each ad group\'s keywords, headlines, and landing page share a single tight theme. GrowthShift acts as your roofing campaign builder, creating this hierarchy automatically from your website.',
  },
  {
    icon: Search,
    title: 'Roofing Phrase Match Keywords',
    description:
      'Roofing Google Ads keywords use phrase match to balance reach and relevance. Phrase match captures variations like "roof replacement near me" and "best roof replacement company" without the waste of broad match. GrowthShift generates roofing phrase match keywords for every ad group so your ads show only for searches that share your core meaning.',
  },
  {
    icon: Target,
    title: 'Roofing Exact Match Keywords',
    description:
      'For your highest-converting roofing PPC keywords — typically branded terms and specific high-intent services like "emergency roof leak repair" — GrowthShift includes roofing exact match keywords. Exact match gives you the most control over when your ads appear and protects your budget from tangential queries.',
  },
  {
    icon: Tag,
    title: 'Commercial Intent Targeting',
    description:
      'Every roofing keyword group prioritizes commercial intent — searches where the homeowner is ready to hire, not just researching. Terms like "roof replacement cost" and "roof leak repair now" signal buying readiness. GrowthShift filters informational queries out of your roofing PPC keywords automatically.',
  },
  {
    icon: MapPin,
    title: 'Location Modifiers',
    description:
      'Roofing local leads depend on geographic targeting. GrowthShift appends city and county modifiers to core keywords — "roof replacement Tampa", "roof leak repair Orlando" — so ads appear for local searches that match your actual service areas.',
  },
  {
    icon: Wrench,
    title: 'Service Modifiers',
    description:
      'Each roofing service gets its own roofing keyword group: roof replacement keywords, roof repair keywords, metal roofing keywords, commercial roofing keywords, and emergency roofing keywords — each with tailored ad copy and a dedicated landing page.',
  },
  {
    icon: Building,
    title: 'Branded Terms',
    description:
      'Your company name is a high-converting keyword. GrowthShift generates branded roofing Google Ads keywords and ad copy that protect your brand from competitors bidding on your name — one of the cheapest sources of roofing leads.',
  },
  {
    icon: Filter,
    title: 'Roofing Negative Keywords',
    description:
      'A roofing negative keywords list filters out DIY searches, job seekers, and supply shoppers. Terms like "roofing jobs", "roofing materials wholesale", "how to fix a roof", and "roofing supplies" are excluded automatically so your budget goes to homeowners ready to hire.',
  },
  {
    icon: Layers,
    title: 'Roofing Keyword Groups',
    description:
      'GrowthShift organizes roofing PPC keywords into themed roofing keyword groups rather than a single flat list. Each group shares a service type and intent level, which is the foundation of a high-Quality-Score roofing search campaign. Read more about our AI Keyword Generator for the full grouping methodology.',
  },
];

export function RoofingKeywordsSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Keyword Strategy
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Keywords Generated
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            GrowthShift acts as a roofing campaign builder, generating themed roofing keyword groups using a
            phrase match strategy that targets commercial intent while filtering out irrelevant traffic. The
            roofing campaign setup process organizes keywords into ad groups that mirror your actual services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STRATEGIES.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <div key={strategy.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{strategy.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{strategy.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 max-w-2xl">
          <AiInsight>
            Phrase Match provides the best balance between reach and lead quality for most roofing companies.
          </AiInsight>
        </div>
      </div>
    </section>
  );
}
