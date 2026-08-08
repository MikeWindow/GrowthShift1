import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { truckAccidentData } from '@/config/industries/truck-accident-lawyers';

export const metadata: Metadata = {
  title: truckAccidentData.title,
  description: truckAccidentData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-truck-accident-lawyers',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-truck-accident-lawyers',
    title: truckAccidentData.title,
    description: truckAccidentData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={truckAccidentData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
