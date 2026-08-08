import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { applianceRepairData } from '@/config/industries/appliance-repair';

export const metadata: Metadata = {
  title: applianceRepairData.title,
  description: applianceRepairData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/industries/appliance-repair',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/industries/appliance-repair',
    title: applianceRepairData.title,
    description: applianceRepairData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={applianceRepairData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
