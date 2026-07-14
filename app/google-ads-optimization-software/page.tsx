import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { CommercialPage } from '@/components/marketing/commercial-page';
import { googleAdsOptimizationSoftwareData } from '@/config/commercial/google-ads-optimization-software';

export const metadata: Metadata = {
  title: googleAdsOptimizationSoftwareData.title,
  description: googleAdsOptimizationSoftwareData.metaDescription,
  openGraph: {
    title: googleAdsOptimizationSoftwareData.title,
    description: googleAdsOptimizationSoftwareData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <CommercialPage data={googleAdsOptimizationSoftwareData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
