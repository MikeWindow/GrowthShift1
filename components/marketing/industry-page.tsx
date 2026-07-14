import Link from 'next/link';
import { ArrowRight, Play, Sparkles, CheckCircle2, Ban, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AiInsight } from '@/components/marketing/roofing/ai-insight';
import { getIcon } from '@/lib/icon-map';
import type { IndustryData } from '@/types/industry';

function SectionHeader({ label, title, intro }: { label: string; title: string; intro: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base text-muted-foreground">{intro}</p>
    </div>
  );
}

function CardGrid({ cards, cols = 'sm:grid-cols-2 lg:grid-cols-3' }: { cards: IndustryData['whyCards']; cols?: string }) {
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

function MiniCard({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  const Icon = getIcon(icon);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
          <Icon className="h-4 w-4 text-foreground" />
        </div>
        <h3 className="text-sm font-semibold text-foreground">{label}</h3>
      </div>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/50 py-2 last:border-b-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-xs font-medium text-foreground">{value}</span>
    </div>
  );
}

export function IndustryPage({ data }: { data: IndustryData }) {
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
                <Link href="/analyze-business">Start Building<ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7 text-sm gap-2">
                <Link href="#how-it-works"><Play className="h-4 w-4" />See Live Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live AI Campaign Preview */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <Badge variant="secondary" className="mb-3 text-xs">Live AI Campaign Preview</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              See exactly what GrowthShift generates
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              After analyzing a {data.industry.toLowerCase()} business, GrowthShift builds a complete Google Ads Search campaign. Here is a realistic preview using dummy data for {data.preview.business}.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <MiniCard icon="Building2" label="Business Summary">
              <div className="space-y-2.5">
                <Row label="Business" value={data.preview.business} />
                <Row label="Industry" value={data.preview.industry} />
                <Row label="Primary Service" value={data.preview.primaryService} />
                <Row label="Service Areas" value={data.preview.serviceAreas} />
                <div className="flex gap-2 pt-1">
                  <Badge variant="outline" className="text-[10px]">Commercial</Badge>
                  <Badge variant="outline" className="text-[10px]">Residential</Badge>
                </div>
              </div>
            </MiniCard>
            <MiniCard icon="Settings2" label="Campaign Configuration">
              <div className="space-y-1">
                <Row label="Campaign Name" value={data.preview.campaignName} />
                <Row label="Campaign Type" value={data.preview.campaignType} />
                <Row label="Goal" value={data.preview.campaignGoal} />
                <Row label="Network" value="Google Search" />
                <Row label="Budget" value={data.preview.budget} />
                <Row label="Bid Strategy" value={data.preview.bidStrategy} />
                <Row label="Language" value="English" />
                <Row label="Locations" value={data.preview.serviceAreas} />
              </div>
            </MiniCard>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
                    <Search className="h-4 w-4 text-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">Keywords</h3>
                </div>
                <Badge variant="secondary" className="text-[10px]">{data.preview.keywordsGenerated} Keywords Generated</Badge>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-3 text-xs font-medium text-muted-foreground">Phrase Match Keywords</p>
                  <div className="flex flex-wrap gap-2">
                    {data.preview.keywords.map((kw) => (
                      <code key={kw} className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-foreground">{kw}</code>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Ban className="h-3.5 w-3.5" /> Negative Keywords
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.preview.negativeKeywords.map((kw) => (
                      <span key={kw} className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground line-through">{kw}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <MiniCard icon="Type" label="Responsive Search Ads">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Headlines</span>
                <Badge variant="secondary" className="text-[10px]">15 Generated · Showing {data.preview.headlines.length}</Badge>
              </div>
              <div className="space-y-2">
                {data.preview.headlines.map((h, i) => (
                  <div key={h} className="flex items-start gap-2 rounded-lg border border-border/50 bg-muted/20 px-3 py-2">
                    <span className="text-[10px] font-semibold text-muted-foreground">{i + 1}</span>
                    <span className="text-xs font-medium text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </MiniCard>
            <MiniCard icon="FileText" label="Descriptions">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Descriptions</span>
                <Badge variant="secondary" className="text-[10px]">4 Generated · Showing {data.preview.descriptions.length}</Badge>
              </div>
              <div className="space-y-2">
                {data.preview.descriptions.map((d, i) => (
                  <div key={i} className="rounded-lg border border-border/50 bg-muted/20 px-3 py-2.5">
                    <p className="text-xs leading-relaxed text-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </MiniCard>
            <MiniCard icon="Link2" label="Assets">
              <div className="space-y-2">
                {['Callouts', 'Sitelinks', 'Structured Snippets', 'Call Extension', 'Location Extension'].map((asset) => (
                  <div key={asset} className="flex items-center justify-between border-b border-border/50 py-2 last:border-b-0">
                    <span className="text-xs font-medium text-foreground">{asset}</span>
                    <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10">
                      <CheckCircle2 className="mr-1 h-3 w-3" /> Ready
                    </Badge>
                  </div>
                ))}
              </div>
            </MiniCard>
            <MiniCard icon="LayoutTemplate" label="Landing Page Review">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
                  <span className="text-lg font-bold text-primary">{data.preview.landingScore}</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Overall Score</p>
                  <p className="text-sm font-semibold text-foreground">{data.preview.landingScore}/100</p>
                </div>
              </div>
              <div className="space-y-2">
                {['Hero CTA', 'Click To Call', 'Trust Signals', 'Fast Loading', 'Conversion Form'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </MiniCard>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-sm gap-2">
              <Link href="/analyze-business">Generate My Campaign<ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-sm">
              <Link href="/campaign-generation">View Full Campaign</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.whyLabel} title={data.whyTitle} intro={data.whyIntro} />
          <CardGrid cards={data.whyCards} cols="sm:grid-cols-2 lg:grid-cols-4" />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.whyInsight}</AiInsight></div>
        </div>
      </section>

      {/* What We Generate */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label="What We Generate" title="What GrowthShift Generates" intro={data.generatesIntro} />
          <CardGrid cards={data.generatesCards} cols="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.servicesLabel} title={data.servicesTitle} intro={data.servicesIntro} />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.services.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <div key={service.label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">{service.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.keywordsLabel} title={data.keywordsTitle} intro={data.keywordsIntro} />
          <CardGrid cards={data.keywordsCards} />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.keywordsInsight}</AiInsight></div>
        </div>
      </section>

      {/* Campaign Settings */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.settingsLabel} title={data.settingsTitle} intro={data.settingsIntro} />
          <CardGrid cards={data.settingsCards} />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.settingsInsight}</AiInsight></div>
        </div>
      </section>

      {/* Headlines */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.headlinesLabel} title={data.headlinesTitle} intro={data.headlinesIntro} />
          <CardGrid cards={data.headlinesCards} />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.headlinesInsight}</AiInsight></div>
        </div>
      </section>

      {/* Descriptions */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.descriptionsLabel} title={data.descriptionsTitle} intro={data.descriptionsIntro} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.descriptionsCards.map((card) => {
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
          <div className="mt-6 max-w-2xl"><AiInsight>{data.descriptionsInsight}</AiInsight></div>
        </div>
      </section>

      {/* Landing Page */}
      <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.landingPageLabel} title={data.landingPageTitle} intro={data.landingPageIntro} />
          <CardGrid cards={data.landingPageCards} />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.landingPageInsight}</AiInsight></div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label="Comparison" title={data.comparisonTitle} intro={data.comparisonIntro} />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {data.comparison.map((col) => {
              const Icon = getIcon(col.icon);
              const isAlpha = col.title === 'GrowthShift';
              return (
                <div key={col.title} className={`rounded-2xl border p-7 shadow-sm ${isAlpha ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'}`}>
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${isAlpha ? 'border-primary/30 bg-primary/10' : 'border-border bg-muted'}`}>
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

      {/* How It Works */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      {/* Campaign Optimization */}
      <section className="border-b border-border/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label={data.optimizationLabel} title={data.optimizationTitle} intro={data.optimizationIntro} />
          <CardGrid cards={data.optimizationCards} />
          <div className="mt-6 max-w-2xl"><AiInsight>{data.optimizationInsight}</AiInsight></div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection data={data} />

      {/* Related Industries */}
      <RelatedIndustries data={data} />

      {/* Final CTA */}
      <section className="border-b border-border/60 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{data.finalCtaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">{data.finalCtaSubtitle}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="h-12 px-8 text-sm gap-2">
              <Link href="/analyze-business">Start Building<ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { HowItWorksSection } from '@/components/marketing/how-it-works-section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

function FaqSection({ data }: { data: IndustryData }) {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-base text-muted-foreground">{data.faqIntro}</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-sm">
            {data.faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`} className={index === data.faqs.length - 1 ? 'border-b-0' : ''}>
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function RelatedIndustries({ data }: { data: IndustryData }) {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Related Industries</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{data.relatedTitle}</h2>
          <p className="mt-3 text-base text-muted-foreground">{data.relatedIntro}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {data.related.map((item) => (
            <Link key={item.label} href={item.href} className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-muted/30">
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
