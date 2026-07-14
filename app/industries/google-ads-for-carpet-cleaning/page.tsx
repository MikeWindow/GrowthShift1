import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { carpetCleaningData } from '@/config/industries/carpet-cleaning';

export const metadata: Metadata = {
  title: carpetCleaningData.title,
  description: carpetCleaningData.metaDescription,
  openGraph: {
    title: carpetCleaningData.title,
    description: carpetCleaningData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={carpetCleaningData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
