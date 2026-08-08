import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { businessLawyersData } from '@/config/industries/business-lawyers';

export const metadata: Metadata = {
  title: businessLawyersData.title,
  description: businessLawyersData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-business-lawyers',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-business-lawyers',
    title: businessLawyersData.title,
    description: businessLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={businessLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
