import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { bankruptcyLawyersData } from '@/config/industries/bankruptcy-lawyers';

export const metadata: Metadata = {
  title: bankruptcyLawyersData.title,
  description: bankruptcyLawyersData.metaDescription,
  openGraph: {
    title: bankruptcyLawyersData.title,
    description: bankruptcyLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={bankruptcyLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
