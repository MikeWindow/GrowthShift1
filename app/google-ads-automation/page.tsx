import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { CommercialPage } from '@/components/marketing/commercial-page';
import { googleAdsAutomationData } from '@/config/commercial/google-ads-automation';

export const metadata: Metadata = {
  title: googleAdsAutomationData.title,
  description: googleAdsAutomationData.metaDescription,
  openGraph: {
    title: googleAdsAutomationData.title,
    description: googleAdsAutomationData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <CommercialPage data={googleAdsAutomationData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
