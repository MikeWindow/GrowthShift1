import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { workersCompensationLawyersData } from '@/config/industries/workers-compensation-lawyers';

export const metadata: Metadata = {
  title: workersCompensationLawyersData.title,
  description: workersCompensationLawyersData.metaDescription,
  openGraph: {
    title: workersCompensationLawyersData.title,
    description: workersCompensationLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={workersCompensationLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
