import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { CommercialPage } from '@/components/marketing/commercial-page';
import { googleAdsAiManagerData } from '@/config/commercial/google-ads-ai-manager';

export const metadata: Metadata = {
  title: googleAdsAiManagerData.title,
  description: googleAdsAiManagerData.metaDescription,
  openGraph: {
    title: googleAdsAiManagerData.title,
    description: googleAdsAiManagerData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <CommercialPage data={googleAdsAiManagerData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
