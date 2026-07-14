import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { garageDoorData } from '@/config/industries/garage-door';

export const metadata: Metadata = {
  title: garageDoorData.title,
  description: garageDoorData.metaDescription,
  openGraph: {
    title: garageDoorData.title,
    description: garageDoorData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={garageDoorData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
