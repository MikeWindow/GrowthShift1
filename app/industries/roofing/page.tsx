import type { Metadata } from 'next';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { HowItWorksSection } from '@/components/marketing/how-it-works-section';
import { RoofingHero } from '@/components/marketing/roofing/roofing-hero';
import { RoofingCampaignPreviewSection } from '@/components/marketing/roofing/roofing-campaign-preview-section';
import { RoofingWhySection } from '@/components/marketing/roofing/roofing-why-section';
import { RoofingGeneratesSection } from '@/components/marketing/roofing/roofing-generates-section';
import { RoofingServicesSection } from '@/components/marketing/roofing/roofing-services-section';
import { RoofingKeywordsSection } from '@/components/marketing/roofing/roofing-keywords-section';
import { RoofingCampaignSettingsSection } from '@/components/marketing/roofing/roofing-campaign-settings-section';
import { RoofingHeadlinesSection } from '@/components/marketing/roofing/roofing-headlines-section';
import { RoofingDescriptionsSection } from '@/components/marketing/roofing/roofing-descriptions-section';
import { RoofingLandingPageSection } from '@/components/marketing/roofing/roofing-landing-page-section';
import { RoofingComparisonSection } from '@/components/marketing/roofing/roofing-comparison-section';
import { RoofingCampaignOptimizationSection } from '@/components/marketing/roofing/roofing-campaign-optimization-section';
import { RoofingFaqSection } from '@/components/marketing/roofing/roofing-faq-section';
import { RoofingRelatedIndustries } from '@/components/marketing/roofing/roofing-related-industries';
import { RoofingFinalCta } from '@/components/marketing/roofing/roofing-final-cta';

export const metadata: Metadata = {
  title: 'AI Google Ads Builder for Roofing Companies | Generate Roofing Search Campaigns',
  description:
    'Build high-converting Google Ads campaigns for roofing companies using AI. Generate keywords, headlines, descriptions, campaign settings and landing page recommendations in minutes.',
  openGraph: {
    title: 'AI Google Ads Builder for Roofing Companies | Generate Roofing Search Campaigns',
    description:
      'Build high-converting Google Ads campaigns for roofing companies using AI. Generate keywords, headlines, descriptions, campaign settings and landing page recommendations in minutes.',
  },
};

export default function RoofingPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <RoofingHero />
        <RoofingCampaignPreviewSection />
        <RoofingWhySection />
        <RoofingGeneratesSection />
        <RoofingServicesSection />
        <RoofingKeywordsSection />
        <RoofingCampaignSettingsSection />
        <RoofingHeadlinesSection />
        <RoofingDescriptionsSection />
        <RoofingLandingPageSection />
        <RoofingComparisonSection />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <RoofingCampaignOptimizationSection />
        <RoofingFaqSection />
        <RoofingRelatedIndustries />
        <RoofingFinalCta />
      </main>
      <MarketingFooter />
    </div>
  );
}
