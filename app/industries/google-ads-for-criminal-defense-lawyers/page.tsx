import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { criminalDefenseData } from '@/config/industries/criminal-defense-lawyers';

export const metadata: Metadata = {
  title: criminalDefenseData.title,
  description: criminalDefenseData.metaDescription,
  openGraph: {
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
