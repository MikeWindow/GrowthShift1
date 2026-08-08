import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { taxLawyersData } from '@/config/industries/tax-lawyers';

export const metadata: Metadata = {
  title: taxLawyersData.title,
  description: taxLawyersData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-tax-lawyers',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-tax-lawyers',
    title: taxLawyersData.title,
    description: taxLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={taxLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
