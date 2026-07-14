import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { CommercialPage } from '@/components/marketing/commercial-page';
import { googleAdsAgencyAlternativeData } from '@/config/commercial/google-ads-agency-alternative';

export const metadata: Metadata = {
  title: googleAdsAgencyAlternativeData.title,
  description: googleAdsAgencyAlternativeData.metaDescription,
  openGraph: {
    title: googleAdsAgencyAlternativeData.title,
    description: googleAdsAgencyAlternativeData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <CommercialPage data={googleAdsAgencyAlternativeData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
