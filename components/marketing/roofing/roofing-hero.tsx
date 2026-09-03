import { Sparkles } from 'lucide-react';
import { WhatsAppCta } from '@/components/marketing/whatsapp-cta';

export function RoofingHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Roofing Industry · AI Google Ads Software
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[52px]">
            AI Google Ads Builder for Roofing Companies
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Generate complete Google Ads Search campaigns for roofing companies in minutes. Paste your roofing
            website and GrowthShift automatically builds campaign settings, keywords, headlines, descriptions,
            extensions and landing page recommendations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppCta
              pageSlug="/industries/roofing"
              pageTitle="AI Google Ads Builder for Roofing Companies"
              industry="Roofing Companies"
            />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Get a personalized Google Ads Audit Report with actionable recommendations delivered on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
