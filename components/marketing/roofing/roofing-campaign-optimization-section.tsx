import { Search, Ban, TrendingUp, DollarSign, Gauge, Type, LayoutTemplate, Target, Phone, Activity, Bot } from 'lucide-react';
import { AiInsight } from '@/components/marketing/roofing/ai-insight';

const OPTIMIZATION = [
  {
    icon: Search,
    title: 'Search Term Reports',
    description:
      'The search term report shows exactly what users typed before clicking your ad. GrowthShift reviews this report weekly to identify irrelevant queries that should be added as negative keywords and new high-intent terms worth adding as exact match keywords.',
  },
  {
    icon: Ban,
    title: 'Negative Keyword Expansion',
    description:
      'Roofing negative keyword lists grow over time. GrowthShift automatically surfaces wasteful search terms — "roofing jobs", "DIY roof repair", "roofing materials for sale" — and adds them to your negative keyword list to prevent future clicks.',
  },
  {
    icon: TrendingUp,
    title: 'Bid Optimization',
    description:
      'Roofing keyword groups perform differently. Bid optimization raises bids on high-converting groups like roof replacement and lowers bids on underperforming groups. GrowthShift recommends bid adjustments based on cost per lead by ad group.',
  },
  {
    icon: DollarSign,
    title: 'Budget Optimization',
    description:
      'Budget optimization shifts daily spend toward campaigns and ad groups generating the cheapest roofing phone call leads. GrowthShift identifies where each dollar produces the most leads and recommends reallocation.',
  },
  {
    icon: Gauge,
    title: 'Quality Score Optimization',
    description:
      'Quality Score impacts both cost and position. GrowthShift diagnoses low-Quality-Score roofing keyword groups — typically caused by ad copy or landing page mismatch — and recommends specific fixes to improve relevance.',
  },
  {
    icon: Type,
    title: 'Headline Testing',
    description:
      'Responsive search ads test headline combinations automatically, but GrowthShift goes further by identifying low-performing headlines and suggesting new variations. Headline testing is continuous — the best roofing ad copy evolves with your data.',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Page Testing',
    description:
      'Landing page testing compares different layouts, CTAs, and form lengths. GrowthShift flags pages with high bounce rates and recommends A/B tests to improve conversion rate on your roofing company landing page.',
  },
  {
    icon: Target,
    title: 'Conversion Rate Optimization',
    description:
      'Conversion rate optimization focuses on turning more clicks into roofing leads. GrowthShift analyzes the path from ad click to phone call and removes friction — fewer form fields, more prominent phone numbers, faster pages.',
  },
  {
    icon: Phone,
    title: 'Call Tracking',
    description:
      'Call tracking assigns unique phone numbers to each campaign so you know which roofing ads generate calls. GrowthShift integrates call data into optimization decisions — pausing ads that generate clicks but not calls.',
  },
  {
    icon: Activity,
    title: 'Performance Monitoring',
    description:
      'Roofing campaign optimization requires constant performance monitoring. GrowthShift tracks cost per lead, click-through rate, conversion rate, and Quality Score across every ad group and alerts you when metrics drift.',
  },
  {
    icon: Bot,
    title: 'AI Recommendations',
    description:
      'GrowthShift functions as an AI campaign optimizer, turning weeks of manual analysis into instant recommendations. Instead of reviewing spreadsheets, you receive a prioritized list of actions — add these negatives, raise this bid, test this headline.',
  },
];

export function RoofingCampaignOptimizationSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Optimization
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Campaign Optimization
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Google Ads optimization is not a one-time setup. Roofing campaign optimization requires weekly
            attention to search terms, bids, budgets, and ad copy. GrowthShift automates this process with
            AI recommendations so your roofing Google Ads campaign improves over time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OPTIMIZATION.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 max-w-2xl">
          <AiInsight>
            Search term reports are the single most valuable optimization tool — weekly review prevents most wasted spend in roofing campaigns.
          </AiInsight>
        </div>
      </div>
    </section>
  );
}
