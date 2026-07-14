import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { CommercialPage } from '@/components/marketing/commercial-page';
import { aiGoogleAdsManagementData } from '@/config/commercial/ai-google-ads-management';

export const metadata: Metadata = {
  title: aiGoogleAdsManagementData.title,
  description: aiGoogleAdsManagementData.metaDescription,
  openGraph: {
    title: aiGoogleAdsManagementData.title,
    description: aiGoogleAdsManagementData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <CommercialPage data={aiGoogleAdsManagementData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
