import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { locksmithsData } from '@/config/industries/locksmiths';

export const metadata: Metadata = {
  title: locksmithsData.title,
  description: locksmithsData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-locksmiths',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-locksmiths',
    title: locksmithsData.title,
    description: locksmithsData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={locksmithsData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
