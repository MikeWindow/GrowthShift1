import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { duiLawyersData } from '@/config/industries/dui-lawyers';

export const metadata: Metadata = {
  title: duiLawyersData.title,
  description: duiLawyersData.metaDescription,
  openGraph: {
    title: duiLawyersData.title,
    description: duiLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={duiLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
