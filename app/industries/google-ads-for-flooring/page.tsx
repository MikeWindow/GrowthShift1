import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { flooringData } from '@/config/industries/flooring';

export const metadata: Metadata = {
  title: flooringData.title,
  description: flooringData.metaDescription,
  openGraph: {
    title: flooringData.title,
    description: flooringData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={flooringData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
