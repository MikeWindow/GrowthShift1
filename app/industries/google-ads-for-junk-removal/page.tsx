import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { junkRemovalData } from '@/config/industries/junk-removal';

export const metadata: Metadata = {
  title: junkRemovalData.title,
  description: junkRemovalData.metaDescription,
  openGraph: {
    title: junkRemovalData.title,
    description: junkRemovalData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={junkRemovalData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
