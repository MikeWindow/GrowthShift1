import { MarketingHeader } from '@/components/marketing/marketing-header';
import { HeroSection } from '@/components/marketing/hero-section';
import { CampaignPreviewSection } from '@/components/marketing/campaign-preview-section';
import { IndustriesSection } from '@/components/marketing/industries-section';
import { AiToolsSection } from '@/components/marketing/ai-tools-section';
import { HowItWorksSection } from '@/components/marketing/how-it-works-section';
import { MarketingFooter } from '@/components/marketing/marketing-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
