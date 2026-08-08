import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { familyLawyersData } from '@/config/industries/family-lawyers';

export const metadata: Metadata = {
  title: familyLawyersData.title,
  description: familyLawyersData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-family-lawyers',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-family-lawyers',
    title: familyLawyersData.title,
    description: familyLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={familyLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
