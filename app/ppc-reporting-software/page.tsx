import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { CommercialPage } from '@/components/marketing/commercial-page';
import { ppcReportingSoftwareData } from '@/config/commercial/ppc-reporting-software';

export const metadata: Metadata = {
  title: ppcReportingSoftwareData.title,
  description: ppcReportingSoftwareData.metaDescription,
  openGraph: {
    title: ppcReportingSoftwareData.title,
    description: ppcReportingSoftwareData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <CommercialPage data={ppcReportingSoftwareData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
