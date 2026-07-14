import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { cleaningServicesData } from '@/config/industries/cleaning-services';

export const metadata: Metadata = {
  title: cleaningServicesData.title,
  description: cleaningServicesData.metaDescription,
  openGraph: {
    title: cleaningServicesData.title,
    description: cleaningServicesData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={cleaningServicesData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
