import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { personalInjuryData } from '@/config/industries/personal-injury-lawyers';

export const metadata: Metadata = {
  title: personalInjuryData.title,
  description: personalInjuryData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-personal-injury-lawyers',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-personal-injury-lawyers',
    title: personalInjuryData.title,
    description: personalInjuryData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={personalInjuryData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
