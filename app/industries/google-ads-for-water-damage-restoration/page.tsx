import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { waterDamageData } from '@/config/industries/water-damage-restoration';

export const metadata: Metadata = {
  title: waterDamageData.title,
  description: waterDamageData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-water-damage-restoration',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-water-damage-restoration',
    title: waterDamageData.title,
    description: waterDamageData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={waterDamageData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
