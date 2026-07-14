import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { pestControlData } from '@/config/industries/pest-control';

export const metadata: Metadata = {
  title: pestControlData.title,
  description: pestControlData.metaDescription,
  openGraph: {
    title: pestControlData.title,
    description: pestControlData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={pestControlData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
