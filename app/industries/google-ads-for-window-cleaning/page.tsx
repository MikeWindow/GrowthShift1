import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { windowCleaningData } from '@/config/industries/window-cleaning';

export const metadata: Metadata = {
  title: windowCleaningData.title,
  description: windowCleaningData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/google-ads-for-window-cleaning',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/google-ads-for-window-cleaning',
    title: windowCleaningData.title,
    description: windowCleaningData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={windowCleaningData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
