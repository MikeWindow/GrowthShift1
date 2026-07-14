import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { CommercialPage } from '@/components/marketing/commercial-page';
import { googleAdsAuditData } from '@/config/commercial/google-ads-audit';

export const metadata: Metadata = {
  title: googleAdsAuditData.title,
  description: googleAdsAuditData.metaDescription,
  openGraph: {
    title: googleAdsAuditData.title,
    description: googleAdsAuditData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <CommercialPage data={googleAdsAuditData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
