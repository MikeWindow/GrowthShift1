import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';

export const metadata: Metadata = {
  title: 'Disclaimer | GrowthShift',
  description:
    'Disclaimer for GrowthShift AI Google Ads automation platform. Educational and informational use, no guarantee of advertising performance.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | GrowthShift',
    description:
      'Disclaimer for GrowthShift AI Google Ads automation platform. Educational and informational use, no guarantee of advertising performance.',
    url: 'https://growthshiftapp.vercel.app/disclaimer',
  },
};

const LAST_UPDATED = 'September 3, 2026';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <section className="border-b border-border/60 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mb-6 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <TrendingUp className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-[15px] font-semibold tracking-tight">GrowthShift</span>
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Disclaimer</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last Updated: {LAST_UPDATED}</p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="text-lg font-semibold text-foreground">1. Educational and Informational Use</h2>
                <p className="mt-3">
                  GrowthShift is an AI-powered Google Ads automation, PPC management, reporting, and marketing software platform. All content, tools, recommendations, and outputs provided by GrowthShift are for educational and informational purposes only. They do not constitute professional advice of any kind.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">2. Results May Vary</h2>
                <p className="mt-3">
                  Advertising performance depends on many factors outside our control, including your industry, competition, budget, targeting, landing page quality, geographic location, seasonality, and market conditions. Any examples, case studies, or performance figures shown on this website are illustrative and not a guarantee of future results. Your actual results may differ significantly.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">3. No Guarantee of Advertising Performance</h2>
                <p className="mt-3">
                  GrowthShift does not guarantee any specific advertising outcome, including but not limited to click-through rates, conversion rates, cost per click, cost per acquisition, return on ad spend, lead volume, or revenue. Google Ads and other advertising platforms use proprietary algorithms that we cannot control or predict.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">4. User Responsibility</h2>
                <p className="mt-3">
                  You remain solely responsible for all campaign decisions, including budget allocation, keyword selection, bid strategies, targeting choices, ad copy approval, and landing page selection. You must review all AI-generated content before publishing it to any advertising platform. GrowthShift is a tool to assist your decision-making, not a replacement for it.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">5. Third-Party Platforms</h2>
                <p className="mt-3">
                  Google, Google Ads, Google Analytics, and other third-party platforms and services mentioned on this website are independent services owned by their respective companies. GrowthShift is not affiliated with, endorsed by, or sponsored by Google or any other advertising platform unless explicitly stated. All trademarks belong to their respective owners.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">6. No Legal, Financial, or Professional Advice</h2>
                <p className="mt-3">
                  Nothing on this website constitutes legal, financial, tax, accounting, or professional advice of any kind. You should consult qualified professionals before making decisions based on information from this website.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">7. AI-Generated Content</h2>
                <p className="mt-3">
                  GrowthShift uses artificial intelligence to generate campaign components such as keywords, headlines, descriptions, and recommendations. AI-generated content may contain errors or produce unexpected results. You must independently verify all AI-generated content before use.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">8. Contact</h2>
                <p className="mt-3">
                  If you have questions about this disclaimer, please contact us via WhatsApp or email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
