import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { estatePlanningLawyersData } from '@/config/industries/estate-planning-lawyers';

export const metadata: Metadata = {
  title: estatePlanningLawyersData.title,
  description: estatePlanningLawyersData.metaDescription,
  openGraph: {
    title: estatePlanningLawyersData.title,
    description: estatePlanningLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={estatePlanningLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
