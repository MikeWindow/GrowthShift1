import { HeroAnalyzer } from '@/components/marketing/hero-analyzer';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_1fr] lg:py-16">
          {/* Left — copy */}
          <div className="max-w-xl fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                AI-powered Google Ads for local services
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
              Launch Google Ads
              <br />
              campaigns in minutes
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Paste your website. Our AI extracts your services, locations, and trust signals —
              then builds a complete Search campaign ready to export.
            </p>
            <div className="mt-7 flex items-center gap-5">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                No credit card needed
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                3-step workflow
              </div>
            </div>
          </div>

          {/* Right — working AI tool */}
          <div className="fade-in lg:pl-4">
            <HeroAnalyzer />
          </div>
        </div>
      </div>
    </section>
  );
}
