import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { criminalDefenseData } from '@/config/industries/criminal-defense-lawyers';

export const metadata: Metadata = {
  title: criminalDefenseData.title,
  description: criminalDefenseData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-criminal-defense-lawyers',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-criminal-defense-lawyers',
    title: criminalDefenseData.title,
    description: criminalDefenseData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={criminalDefenseData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
