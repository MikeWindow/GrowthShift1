import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { realEstateLawyersData } from '@/config/industries/real-estate-lawyers';

export const metadata: Metadata = {
  title: realEstateLawyersData.title,
  description: realEstateLawyersData.metaDescription,
  openGraph: {
    title: realEstateLawyersData.title,
    description: realEstateLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={realEstateLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
