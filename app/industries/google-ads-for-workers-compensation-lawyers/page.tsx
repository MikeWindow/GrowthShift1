import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { workersCompensationLawyersData } from '@/config/industries/workers-compensation-lawyers';

export const metadata: Metadata = {
  title: workersCompensationLawyersData.title,
  description: workersCompensationLawyersData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-workers-compensation-lawyers',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-workers-compensation-lawyers',
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
