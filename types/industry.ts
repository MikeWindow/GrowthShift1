import type { LucideIcon } from 'lucide-react';

export interface IndustryCard {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryService {
  icon: string;
  label: string;
  desc: string;
}

export interface IndustryComparison {
  icon: string;
  title: string;
  points: string[];
}

export interface IndustryFaq {
  q: string;
  a: string;
}

export interface IndustryRelated {
  label: string;
  href: string;
  desc: string;
}

export interface IndustryData {
  slug: string;
  industry: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroBadge: string;
  heroSubtitle: string;
  whyLabel: string;
  whyTitle: string;
  whyIntro: string;
  whyCards: IndustryCard[];
  whyInsight: string;
  generatesIntro: string;
  generatesCards: IndustryCard[];
  servicesLabel: string;
  servicesTitle: string;
  servicesIntro: string;
  services: IndustryService[];
  keywordsLabel: string;
  keywordsTitle: string;
  keywordsIntro: string;
  keywordsCards: IndustryCard[];
  keywordsInsight: string;
  settingsLabel: string;
  settingsTitle: string;
  settingsIntro: string;
  settingsCards: IndustryCard[];
  settingsInsight: string;
  headlinesLabel: string;
  headlinesTitle: string;
  headlinesIntro: string;
  headlinesCards: IndustryCard[];
  headlinesInsight: string;
  descriptionsLabel: string;
  descriptionsTitle: string;
  descriptionsIntro: string;
  descriptionsCards: IndustryCard[];
  descriptionsInsight: string;
  landingPageLabel: string;
  landingPageTitle: string;
  landingPageIntro: string;
  landingPageCards: IndustryCard[];
  landingPageInsight: string;
  comparisonTitle: string;
  comparisonIntro: string;
  comparison: IndustryComparison[];
  optimizationLabel: string;
  optimizationTitle: string;
  optimizationIntro: string;
  optimizationCards: IndustryCard[];
  optimizationInsight: string;
  faqIntro: string;
  faqs: IndustryFaq[];
  relatedTitle: string;
  relatedIntro: string;
  related: IndustryRelated[];
  finalCtaTitle: string;
  finalCtaSubtitle: string;
  preview: {
    business: string;
    industry: string;
    primaryService: string;
    serviceAreas: string;
    campaignName: string;
    campaignGoal: string;
    campaignType: string;
    budget: string;
    bidStrategy: string;
    keywordsGenerated: number;
    keywords: string[];
    negativeKeywords: string[];
    headlines: string[];
    descriptions: string[];
    landingScore: number;
  };
}
