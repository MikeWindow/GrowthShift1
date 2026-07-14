export interface CommercialStatCard {
  icon: string;
  value: string;
  label: string;
  description: string;
}

export interface CommercialCard {
  icon: string;
  title: string;
  description: string;
}

export interface CommercialTimelineStep {
  icon: string;
  title: string;
  description: string;
}

export interface CommercialComparisonColumn {
  title: string;
  highlight?: boolean;
}

export interface CommercialComparisonRow {
  label: string;
  values: string[];
}

export interface CommercialFaq {
  q: string;
  a: string;
}

export interface CommercialResource {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface CommercialInsight {
  title: string;
  description: string;
  impact: string;
}

export interface CommercialIndustryLink {
  icon: string;
  label: string;
  description: string;
  href: string;
}

export interface CommercialCampaignType {
  icon: string;
  name: string;
  capability: string;
  benefit: string;
}

export interface CommercialTrustBadge {
  icon: string;
  label: string;
}

export interface CommercialDashboardStat {
  label: string;
  value: string;
}

export interface CommercialData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroBadge: string;
  heroSubtitle: string;
  primaryCta: string;
  secondaryCta: string;
  dashboard: {
    business: string;
    stats: CommercialDashboardStat[];
    topItem: string;
  topItemLabel: string;
  buttons: { label: string; href: string }[];
  };
  statsSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialStatCard[];
    paragraph: string;
  };
  whatIsSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialCard[];
    insight: string;
  };
  whySwitchSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialCard[];
  };
  everythingAutomatesSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialCard[];
  };
  howItWorksSection: {
    label: string;
    title: string;
    intro: string;
    steps: CommercialTimelineStep[];
  };
  safetySection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialCard[];
    insight: string;
  };
  generatesSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialCard[];
  };
  featuresSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialCard[];
    insight: string;
  };
  vsManualSection: {
    label: string;
    title: string;
    intro: string;
    columns: CommercialComparisonColumn[];
    rows: CommercialComparisonRow[];
    insight: string;
  };
  vsSmartBiddingSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialCard[];
    insight: string;
  };
  vsAgencySection: {
    label: string;
    title: string;
    intro: string;
    columns: CommercialComparisonColumn[];
    rows: CommercialComparisonRow[];
  };
  campaignTypesSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialCampaignType[];
  };
  industriesSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialIndustryLink[];
  };
  insightsSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialInsight[];
  };
  resourcesSection: {
    label: string;
    title: string;
    intro: string;
    cards: CommercialResource[];
  };
  faqSection: {
    label: string;
    title: string;
    intro: string;
    faqs: CommercialFaq[];
  };
  finalCtaSection: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustBadges: CommercialTrustBadge[];
  newsletterSection: {
    title: string;
    subtitle: string;
  };
}
