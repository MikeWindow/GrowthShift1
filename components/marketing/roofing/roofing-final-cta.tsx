import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RoofingFinalCta() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to Generate Your Roofing Google Ads Campaign?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Paste your roofing website and get a complete Search campaign — keywords, headlines, descriptions,
          extensions, and landing page recommendations — in under two minutes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="h-12 px-8 text-sm gap-2">
            <Link href="/analyze-business">
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
