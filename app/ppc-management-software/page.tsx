import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { CommercialPage } from '@/components/marketing/commercial-page';
import { ppcManagementSoftwareData } from '@/config/commercial/ppc-management-software';

export const metadata: Metadata = {
  title: ppcManagementSoftwareData.title,
  description: ppcManagementSoftwareData.metaDescription,
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/ppc-management-software',
  },
  openGraph: {
    url: 'https://growthshiftapp.vercel.app/ppc-management-software',
    title: ppcManagementSoftwareData.title,
    description: ppcManagementSoftwareData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <CommercialPage data={ppcManagementSoftwareData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
