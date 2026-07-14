import Link from 'next/link';
import { ArrowRight, Play, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AiInsight } from '@/components/marketing/roofing/ai-insight';
import { getIcon } from '@/lib/icon-map';
import type {
  CommercialData,
  CommercialStatCard,
  CommercialCard,
  CommercialTimelineStep,
  CommercialComparisonColumn,
  CommercialComparisonRow,
  CommercialCampaignType,
  CommercialInsight,
  CommercialResource,
  CommercialIndustryLink,
  CommercialTrustBadge,
  CommercialDashboardStat,
} from '@/types/commercial';

function SectionHeader({ label, title, intro }: { label: string; title: string; intro: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base text-muted-foreground">{intro}</p>
    </div>
  );
}

function CardGrid({ cards, cols = 'sm:grid-cols-2 lg:grid-cols-3' }: { cards: CommercialCard[]; cols?: string }) {
  return (
    <div className={`grid grid-cols-1 gap-4 ${cols}`}>
      {cards.map((card) => {
        const Icon = getIcon(card.icon);
        return (
          <div key={card.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
              <Icon className="h-5 w-5 text-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function StatCard({ card }: { card: CommercialStatCard }) {
  const Icon = getIcon(card.icon);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <p className="text-3xl font-bold tracking-tight text-foreground">{card.value}</p>
      <p className="mt-1 text-sm font-semibold text-foreground">{card.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{card.description}</p>
    </div>
  );
}

function Timeline({ steps }: { steps: CommercialTimelineStep[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => {
        const Icon = getIcon(step.icon);
        return (
          <div key={step.title} className="relative">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ComparisonTable({ columns, rows }: { columns: CommercialComparisonColumn[]; rows: CommercialComparisonRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground"></th>
            {columns.map((col) => (
              <th key={col.title} className={`px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider ${col.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i === rows.length - 1 ? '' : 'border-b border-border/50'}>
              <td className="px-4 py-3.5 text-xs font-semibold text-foreground">{row.label}</td>
              {row.values.map((val, j) => (
                <td key={j} className={`px-4 py-3.5 text-xs ${columns[j]?.highlight ? 'font-medium text-primary' : 'text-muted-foreground'}`}>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DashboardPreview({ data }: { data: CommercialData }) {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <Badge variant="secondary" className="mb-3 text-xs">Live AI Dashboard Preview</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See exactly what AI automation looks like
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A realistic preview of the AI dashboard using dummy data for {data.dashboard.business}.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{data.dashboard.business}</p>
                <p className="text-xs text-muted-foreground">AI Dashboard Preview</p>
              </div>
            </div>
            <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10">
              <CheckCircle2 className="mr-1 h-3 w-3" /> Live
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {data.dashboard.stats.map((stat: CommercialDashboardStat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-muted/20 p-4">
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">{data.dashboard.topItemLabel}</p>
                <p className="mt-0.5 text-sm text-foreground">{data.dashboard.topItem}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {data.dashboard.buttons.map((btn) => (
              <Button key={btn.label} asChild size="lg" className="h-12 px-8 text-sm gap-2">
                <Link href={btn.href}>{btn.label}<ArrowRight className="h-4 w-4" /></Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {faqs.map((faq) => (
        <div key={faq.q} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-base font-semibold text-foreground">{faq.q}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
        </div>
      ))}
    </div>
  );
}

export function CommercialPage({ data }: { data: CommercialData }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">{data.heroBadge}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[52px]">
              {data.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {data.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-7 text-sm gap-2">
                <Link href="/analyze-business">{data.primaryCta}<ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7 text-sm gap-2">
                <Link href="#how-it-works"><Play className="h-4 w-4" />{data.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live AI Dashboard Preview */}
      <DashboardPreview data={data} />

      {/* 1. Real Results */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.statsSection.label} title={data.statsSection.title} intro={data.statsSection.intro} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.statsSection.cards.map((card) => <StatCard key={card.label} card={card} />)}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">{data.statsSection.paragraph}</p>
        </div>
      </section>

      {/* 2. What Is */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.whatIsSection.label} title={data.whatIsSection.title} intro={data.whatIsSection.intro} />
          <CardGrid cards={data.whatIsSection.cards} />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.whatIsSection.insight}</AiInsight></div>
        </div>
      </section>

      {/* 3. Why Switch */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.whySwitchSection.label} title={data.whySwitchSection.title} intro={data.whySwitchSection.intro} />
          <CardGrid cards={data.whySwitchSection.cards} cols="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* 4. Everything AI Automates */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.everythingAutomatesSection.label} title={data.everythingAutomatesSection.title} intro={data.everythingAutomatesSection.intro} />
          <CardGrid cards={data.everythingAutomatesSection.cards} cols="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* 5. How It Works */}
      <section id="how-it-works" className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.howItWorksSection.label} title={data.howItWorksSection.title} intro={data.howItWorksSection.intro} />
          <Timeline steps={data.howItWorksSection.steps} />
        </div>
      </section>

      {/* 6. AI Safety System */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.safetySection.label} title={data.safetySection.title} intro={data.safetySection.intro} />
          <CardGrid cards={data.safetySection.cards} />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.safetySection.insight}</AiInsight></div>
        </div>
      </section>

      {/* 7. Everything AI Generates */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.generatesSection.label} title={data.generatesSection.title} intro={data.generatesSection.intro} />
          <CardGrid cards={data.generatesSection.cards} cols="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* 8. AI Features */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.featuresSection.label} title={data.featuresSection.title} intro={data.featuresSection.intro} />
          <CardGrid cards={data.featuresSection.cards} cols="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.featuresSection.insight}</AiInsight></div>
        </div>
      </section>

      {/* 9. AI vs Manual */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.vsManualSection.label} title={data.vsManualSection.title} intro={data.vsManualSection.intro} />
          <ComparisonTable columns={data.vsManualSection.columns} rows={data.vsManualSection.rows} />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.vsManualSection.insight}</AiInsight></div>
        </div>
      </section>

      {/* 10. vs Smart Bidding */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.vsSmartBiddingSection.label} title={data.vsSmartBiddingSection.title} intro={data.vsSmartBiddingSection.intro} />
          <CardGrid cards={data.vsSmartBiddingSection.cards} />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.vsSmartBiddingSection.insight}</AiInsight></div>
        </div>
      </section>

      {/* 11. vs Agency */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.vsAgencySection.label} title={data.vsAgencySection.title} intro={data.vsAgencySection.intro} />
          <ComparisonTable columns={data.vsAgencySection.columns} rows={data.vsAgencySection.rows} />
        </div>
      </section>

      {/* 12. Campaign Types */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.campaignTypesSection.label} title={data.campaignTypesSection.title} intro={data.campaignTypesSection.intro} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.campaignTypesSection.cards.map((card: CommercialCampaignType) => {
              const Icon = getIcon(card.icon);
              return (
                <div key={card.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{card.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.capability}</p>
                  <p className="mt-2 text-xs font-medium text-primary">{card.benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Industries */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.industriesSection.label} title={data.industriesSection.title} intro={data.industriesSection.intro} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.industriesSection.cards.map((card: CommercialIndustryLink) => {
              const Icon = getIcon(card.icon);
              return (
                <Link key={card.label} href={card.href} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-muted/30">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{card.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Learn more <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. Insights */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.insightsSection.label} title={data.insightsSection.title} intro={data.insightsSection.intro} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.insightsSection.cards.map((card: CommercialInsight) => (
              <div key={card.title} className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                <p className="mt-3 text-xs font-medium text-primary">{card.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Related Resources */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.resourcesSection.label} title={data.resourcesSection.title} intro={data.resourcesSection.intro} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.resourcesSection.cards.map((card: CommercialResource) => {
              const Icon = getIcon(card.icon);
              return (
                <Link key={card.title} href={card.href} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-muted/30">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Learn more <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. Open FAQ */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.faqSection.label} title={data.faqSection.title} intro={data.faqSection.intro} />
          <FaqList faqs={data.faqSection.faqs} />
        </div>
      </section>

      {/* 17. Final CTA */}
      <section className="border-b border-border/60 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{data.finalCtaSection.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">{data.finalCtaSection.subtitle}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="h-12 px-8 text-sm gap-2">
              <Link href="/analyze-business">{data.finalCtaSection.primaryCta}<ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-sm gap-2">
              <Link href="#how-it-works"><Play className="h-4 w-4" />{data.finalCtaSection.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 18. Trust Badges */}
      <section className="border-b border-border/60 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {data.trustBadges.map((badge: CommercialTrustBadge) => {
              const Icon = getIcon(badge.icon);
              return (
                <div key={badge.label} className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 19. Newsletter */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{data.newsletterSection.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{data.newsletterSection.subtitle}</p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary sm:max-w-xs"
            />
            <Button type="submit" size="lg" className="h-11 px-6 text-sm gap-2">
              Subscribe <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
