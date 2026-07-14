import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { probateLawyersData } from '@/config/industries/probate-lawyers';

export const metadata: Metadata = {
  title: probateLawyersData.title,
  description: probateLawyersData.metaDescription,
  openGraph: {
    title: probateLawyersData.title,
    description: probateLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={probateLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
