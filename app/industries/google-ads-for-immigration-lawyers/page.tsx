import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { immigrationLawyersData } from '@/config/industries/immigration-lawyers';

export const metadata: Metadata = {
  title: immigrationLawyersData.title,
  description: immigrationLawyersData.metaDescription,
  openGraph: {
    title: immigrationLawyersData.title,
    description: immigrationLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={immigrationLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
