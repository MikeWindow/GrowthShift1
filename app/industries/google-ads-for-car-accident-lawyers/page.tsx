import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { carAccidentData } from '@/config/industries/car-accident-lawyers';

export const metadata: Metadata = {
  title: carAccidentData.title,
  description: carAccidentData.metaDescription,
  openGraph: {
    title: carAccidentData.title,
    description: carAccidentData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={carAccidentData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
