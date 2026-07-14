import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { garageDoorRepairData } from '@/config/industries/garage-door-repair';

export const metadata: Metadata = {
  title: garageDoorRepairData.title,
  description: garageDoorRepairData.metaDescription,
  openGraph: {
    title: garageDoorRepairData.title,
    description: garageDoorRepairData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={garageDoorRepairData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
