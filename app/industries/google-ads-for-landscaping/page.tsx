import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { landscapingData } from '@/config/industries/landscaping';

export const metadata: Metadata = {
  title: landscapingData.title,
  description: landscapingData.metaDescription,
  openGraph: {
    title: landscapingData.title,
    description: landscapingData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={landscapingData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
