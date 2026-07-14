import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { divorceLawyersData } from '@/config/industries/divorce-lawyers';

export const metadata: Metadata = {
  title: divorceLawyersData.title,
  description: divorceLawyersData.metaDescription,
  openGraph: {
    title: divorceLawyersData.title,
    description: divorceLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={divorceLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
