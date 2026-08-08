import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { lawyersData } from '@/config/industries/lawyers';

export const metadata: Metadata = {
  title: lawyersData.title,
  description: lawyersData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-lawyers',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-lawyers',
    title: lawyersData.title,
    description: lawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={lawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
