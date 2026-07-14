import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { electriciansData } from '@/config/industries/electricians';

export const metadata: Metadata = {
  title: electriciansData.title,
  description: electriciansData.metaDescription,
  openGraph: {
    title: electriciansData.title,
    description: electriciansData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={electriciansData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
