import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { IndustryPage } from '@/components/marketing/industry-page';
import { socialSecurityDisabilityLawyersData } from '@/config/industries/social-security-disability-lawyers';

export const metadata: Metadata = {
  title: socialSecurityDisabilityLawyersData.title,
  description: socialSecurityDisabilityLawyersData.metaDescription,
  openGraph: {
    title: socialSecurityDisabilityLawyersData.title,
    description: socialSecurityDisabilityLawyersData.metaDescription,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <IndustryPage data={socialSecurityDisabilityLawyersData} />
      </main>
      <MarketingFooter />
    </div>
  );
}
