import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { plumbersData } from '@/config/industries/plumbers';

export const metadata: Metadata = {
  title: plumbersData.title,
  description: plumbersData.metaDescription,
  openGraph: {
    title: plumbersData.title,
    description: plumbersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={plumbersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
