import { MarketingHeader } from '@/components/marketing/marketing-header';
import { HeroSection } from '@/components/marketing/hero-section';
import { CampaignPreviewSection } from '@/components/marketing/campaign-preview-section';
import { IndustriesSection } from '@/components/marketing/industries-section';
import { AiToolsSection } from '@/components/marketing/ai-tools-section';
import { HowItWorksSection } from '@/components/marketing/how-it-works-section';
import { MarketingFooter } from '@/components/marketing/marketing-footer';

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GrowthShift',
    url: 'https://growthshiftapp.vercel.app',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GrowthShift',
    url: 'https://growthshiftapp.vercel.app',
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <MarketingHeader />
      <main>
        <HeroSection />
        <CampaignPreviewSection />
        <IndustriesSection />
        <AiToolsSection />
        <HowItWorksSection />
      </main>
      <MarketingFooter />
    </div>
  );
}
