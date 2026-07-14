import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { employmentLawyersData } from '@/config/industries/employment-lawyers';

export const metadata: Metadata = {
  title: employmentLawyersData.title,
  description: employmentLawyersData.metaDescription,
  openGraph: {
    title: employmentLawyersData.title,
    description: employmentLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={employmentLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
