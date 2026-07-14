import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { motorcycleAccidentData } from '@/config/industries/motorcycle-accident-lawyers';

export const metadata: Metadata = {
  title: motorcycleAccidentData.title,
  description: motorcycleAccidentData.metaDescription,
  openGraph: {
    title: motorcycleAccidentData.title,
    description: motorcycleAccidentData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={motorcycleAccidentData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
