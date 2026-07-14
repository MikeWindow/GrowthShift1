import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { hvacData } from '@/config/industries/hvac';

export const metadata: Metadata = {
  title: hvacData.title,
  description: hvacData.metaDescription,
  openGraph: {
    title: hvacData.title,
    description: hvacData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={hvacData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
