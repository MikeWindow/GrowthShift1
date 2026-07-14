import Link from 'next/link';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            <Button asChild size="lg" className="h-12 px-7 text-sm gap-2">
              <Link href="/analyze-business">
                Start Building
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-7 text-sm gap-2">
              <Link href="#how-it-works">
                <Play className="h-4 w-4" />
                See Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
