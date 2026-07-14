import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { locksmithsData } from '@/config/industries/locksmiths';

export const metadata: Metadata = {
  title: locksmithsData.title,
  description: locksmithsData.metaDescription,
  openGraph: {
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
