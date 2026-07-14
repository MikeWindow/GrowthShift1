import type { CommercialData } from '@/types/commercial';

export const googleAdsAuditData: CommercialData = {
  slug: 'google-ads-audit',
  title: 'Free Google Ads Audit Tool Powered by AI',
  metaDescription:
    'Run a free AI-powered Google Ads audit to uncover wasted ad spend, tracking issues, keyword problems, Quality Score opportunities, campaign structure mistakes, and optimization recommendations in minutes.',
  h1: 'Google Ads Audit That Finds Hidden Wasted Spend',
  heroBadge: '100% AI-Powered Google Ads Audits',
  heroSubtitle:
    'Audit your Google Ads account with AI and uncover wasted spend, conversion tracking issues, Quality Score problems, search term waste, bidding mistakes, campaign structure issues, and missed optimization opportunities. Get prioritized recommendations and start improving campaign performance in minutes.',
  primaryCta: 'Run Free Audit',
  secondaryCta: 'See Live Demo',

  dashboard: {
    business: 'Elite Roofing',
    stats: [
      { label: 'Audit Score', value: '78/100' },
      { label: 'Critical Issues', value: '6' },
      { label: 'Warnings', value: '14' },
      { label: 'Optimization Opportunities', value: '39' },
      { label: 'Potential Budget Savings', value: '$3,420' },
      { label: 'Negative Keywords Missing', value: '327' },
      { label: 'Broken Tracking', value: '2 Events' },
      { label: 'Top Finding', value: 'Search terms wasting 18% of budget' },
    ],
    topItemLabel: 'Top Finding',
    topItem: 'Search terms wasting 18% of budget',
    buttons: [
      { label: 'Run Free Audit', href: '/analyze-business' },
      { label: 'See Live Demo', href: '/campaign-generation' },
    ],
  },

  statsSection: {
    label: 'Audit Results',
    title: 'Audit Results From Real Google Ads Accounts',
    intro:
      'A Google Ads audit surfaces measurable improvements within minutes. These are real results from accounts audited with AI-powered Google Ads audit software.',
    cards: [
      {
        icon: 'Wallet',
        value: '$3,420',
        label: 'Budget Saved',
        description: 'Monthly budget recovered by pausing wasteful search terms and adding negatives.',
      },
      {
        icon: 'Gauge',
        value: '78/100',
        label: 'Audit Score',
        description: 'Overall account health score after the audit identified 6 critical issues and 14 warnings.',
      },
      {
        icon: 'TrendingDown',
        value: '43%',
        label: 'CPA Reduction',
        description: 'Average decrease in cost per acquisition after acting on audit recommendations.',
      },
      {
        icon: 'TrendingUp',
        value: '+34%',
        label: 'ROAS Improvement',
        description: 'Average increase in return on ad spend within 90 days of applying audit fixes.',
      },
      {
        icon: 'CheckCircle2',
        value: '20',
        label: 'Issues Fixed',
        description: 'Total issues resolved across tracking, structure, keywords, and bidding.',
      },
      {
        icon: 'Sparkles',
        value: '39',
        label: 'Optimization Opportunities',
        description: 'Prioritized opportunities the audit uncovered for future campaign improvement.',
      },
    ],
    paragraph:
      'A Google Ads audit is the fastest way to find wasted spend and missed opportunities in your account. Most accounts quietly lose 10-20% of their budget to irrelevant search terms, broken conversion tracking, and poor campaign structure. An AI-powered audit reviews every campaign, ad group, keyword, search term, bid, budget, and tracking event in minutes, then ranks the issues by financial impact. Acting on the top findings usually recovers more budget than any bid change could. The accounts above improved because the audit exposed problems that weekly manual reviews had missed for months.',
  },

  whatIsSection: {
    label: 'What Is A Google Ads Audit?',
    title: 'What Is A Google Ads Audit?',
    intro:
      'A Google Ads audit comes in several forms, from a manual checklist review to a full AI-powered account audit. Understanding the differences helps you choose the right audit for your business.',
    cards: [
      {
        icon: 'Settings2',
        title: 'Manual Audit',
        description:
          'A person reviews the account by hand using a Google Ads audit checklist, examining campaigns, keywords, search terms, bids, budgets, and tracking. Thorough but slow and limited by human attention.',
      },
      {
        icon: 'Bot',
        title: 'AI Audit',
        description:
          'AI-powered audit software analyzes every campaign, keyword, and search term in minutes, ranks issues by financial impact, and generates prioritized recommendations with confidence scores.',
      },
      {
        icon: 'BarChart3',
        title: 'PPC Audit',
        description:
          'A broader pay-per-click audit that covers Google Ads and other PPC platforms, reviewing account structure, keywords, ads, bids, budgets, and conversion tracking for efficiency.',
      },
      {
        icon: 'Search',
        title: 'Google Ads Account Audit',
        description:
          'A full review of a single Google Ads account, covering campaigns, ad groups, keywords, search terms, ads, extensions, bidding, budgets, devices, locations, and conversion tracking.',
      },
      {
        icon: 'ListChecks',
        title: 'Audit Checklist',
        description:
          'A structured list of items every Google Ads audit should cover, from search term waste and negative keywords to Quality Score, campaign structure, and conversion tracking.',
      },
      {
        icon: 'CheckCircle2',
        title: 'Benefits',
        description:
          'An audit finds wasted spend, catches tracking errors, improves Quality Score, lowers CPA, lifts ROAS, and gives you a prioritized roadmap for campaign improvement.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Limitations',
        description:
          'A one-time manual audit is a snapshot. It finds today\u2019s issues but cannot catch tomorrow\u2019s waste before it happens. Continuous AI auditing solves this.',
      },
      {
        icon: 'Target',
        title: 'Best Practices',
        description:
          'Run an audit at least monthly, prioritize fixes by financial impact, fix tracking first, review search terms weekly, and combine one-time audits with continuous monitoring.',
      },
    ],
    insight: 'An AI audit finds in minutes what a manual audit takes days to uncover.',
  },

  whySwitchSection: {
    label: 'Why Every Account Needs Audits',
    title: 'Why Every Google Ads Account Needs Regular Audits',
    intro:
      'Google Ads accounts drift toward waste over time. Regular audits catch the issues that quietly drain budget and hurt performance before they compound.',
    cards: [
      {
        icon: 'Wallet',
        title: 'Find Wasted Spend',
        description:
          'Audits uncover search terms, keywords, and campaigns that spend budget without converting, often recovering 10-20% of monthly spend immediately.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Catch Tracking Errors',
        description:
          'Broken conversion tracking silently ruins Smart Bidding. An audit finds missing or duplicate conversion events before they distort automated bidding decisions.',
      },
      {
        icon: 'Gauge',
        title: 'Improve Quality Score',
        description:
          'Audits identify low Quality Score keywords and recommend ad relevance, CTR, and landing page fixes that lower CPC and improve ad rank over time.',
      },
      {
        icon: 'TrendingUp',
        title: 'Better ROAS',
        description:
          'By pausing waste and reallocating budget to top performers, an audit lifts return on ad spend without increasing total spend.',
      },
      {
        icon: 'TrendingDown',
        title: 'Lower CPA',
        description:
          'Audits surface the inefficiencies that inflate cost per acquisition, from broad match waste to poor campaign structure, so you pay less for each conversion.',
      },
      {
        icon: 'Shield',
        title: 'Prevent Budget Waste',
        description:
          'Regular audits stop waste before it compounds. A monthly audit catches new wasteful search terms and structure issues before they drain next month\u2019s budget.',
      },
    ],
  },

  everythingAutomatesSection: {
    label: 'Everything Your Audit Checks',
    title: 'Everything Your Google Ads Audit Checks',
    intro:
      'A complete Google Ads audit reviews every layer of your account, from high-level campaign structure down to individual search terms, ads, and tracking events.',
    cards: [
      { icon: 'FileText', title: 'Search Terms', description: 'Reviews real search terms triggering your ads and flags wasteful or irrelevant queries.' },
      { icon: 'Ban', title: 'Negative Keywords', description: 'Identifies missing negative keywords that let irrelevant searches drain your budget.' },
      { icon: 'Type', title: 'Keyword Match Types', description: 'Checks match type usage and flags broad match waste and overly restrictive exact match.' },
      { icon: 'Settings2', title: 'Campaign Structure', description: 'Audits campaign and ad group organization for relevance, control, and scalability.' },
      { icon: 'LayoutTemplate', title: 'Ad Groups', description: 'Reviews ad group themes, size, and keyword-to-ad alignment for relevance and Quality Score.' },
      { icon: 'Wallet', title: 'Budgets', description: 'Checks budget allocation, capped campaigns, and underspending or overspending campaigns.' },
      { icon: 'Gauge', title: 'Bid Strategies', description: 'Evaluates bidding strategy alignment with goals and flags mismatched or outdated strategies.' },
      { icon: 'Smartphone', title: 'Devices', description: 'Reviews device performance and recommends device bid adjustments based on conversions.' },
      { icon: 'MapPin', title: 'Locations', description: 'Audits geographic targeting and flags locations wasting spend or missing opportunities.' },
      { icon: 'Clock', title: 'Ad Schedule', description: 'Reviews dayparting and recommends schedule adjustments based on conversion data.' },
      { icon: 'Target', title: 'Conversion Tracking', description: 'Validates conversion tracking setup and flags broken, duplicate, or missing events.' },
      { icon: 'Gauge', title: 'Quality Score', description: 'Analyzes Quality Score components and recommends ad relevance, CTR, and landing page fixes.' },
      { icon: 'Type', title: 'Responsive Search Ads', description: 'Reviews RSA assets, ad strength, and pinning for performance and coverage.' },
      { icon: 'Link2', title: 'Extensions', description: 'Audits sitelink, callout, structured snippet, and other extension coverage and relevance.' },
      { icon: 'LayoutTemplate', title: 'Landing Pages', description: 'Reviews landing page relevance, load speed, and alignment with ad and keyword intent.' },
      { icon: 'ShoppingCart', title: 'Shopping', description: 'Audits Shopping campaigns, product feed quality, and bid performance.' },
      { icon: 'Sparkles', title: 'Performance Max', description: 'Reviews Performance Max asset groups, budgets, audience signals, and cannibalization.' },
      { icon: 'Image', title: 'Display', description: 'Audits Display campaigns for placements, audiences, and wasted spend.' },
      { icon: 'Video', title: 'Video', description: 'Reviews YouTube video campaigns for targeting, bidding, and engagement efficiency.' },
      { icon: 'Phone', title: 'Call Campaigns', description: 'Audits call-only and call-focused campaigns for tracking and bid performance.' },
    ],
  },

  howItWorksSection: {
    label: 'How The AI Audit Works',
    title: 'How The AI Google Ads Audit Works',
    intro:
      'Running an AI-powered Google Ads audit takes minutes. Connect your account and the audit engine analyzes every campaign, identifies problems, and prioritizes recommendations.',
    steps: [
      {
        icon: 'Link2',
        title: 'Connect Google Ads',
        description: 'Securely link your Google Ads account so the audit engine can access campaigns, keywords, search terms, ads, budgets, and conversion data.',
      },
      {
        icon: 'Search',
        title: 'Analyze Every Campaign',
        description: 'The AI reviews every campaign, ad group, keyword, search term, bid, budget, ad, extension, and tracking event for waste and opportunity.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Identify Problems',
        description: 'The audit flags wasted spend, broken tracking, poor Quality Score, broad match waste, budget misallocation, and structural issues with clear explanations.',
      },
      {
        icon: 'ListChecks',
        title: 'Prioritize Recommendations',
        description: 'Every finding is ranked by financial impact and confidence score so you know exactly which fixes will recover the most budget first.',
      },
      {
        icon: 'CheckCircle2',
        title: 'Fix Automatically or Review First',
        description: 'Apply high-confidence fixes automatically within your safety limits, or review every recommendation manually before anything changes.',
      },
      {
        icon: 'RefreshCw',
        title: 'Monitor Daily',
        description: 'The audit engine runs daily, catching new waste before it compounds and keeping your account healthy as campaigns change over time.',
      },
    ],
  },

  safetySection: {
    label: 'Interactive Audit Checklist',
    title: 'Interactive Google Ads Audit Checklist',
    intro:
      'Use this interactive checklist to understand what a complete Google Ads audit covers. Each section represents a core area the AI audit reviews automatically.',
    cards: [
      { icon: 'Wallet', title: 'Wasted Spend', description: 'Review search terms, add negative keywords, pause non-converting keywords, and remove duplicate keywords to stop budget leaks.' },
      { icon: 'Settings2', title: 'Campaign Structure', description: 'Review campaign goals, check ad groups, match types, and budget allocation for relevance and control.' },
      { icon: 'Type', title: 'Ads & Assets', description: 'Review RSA quality, headlines, descriptions, extensions, and assets for coverage and performance.' },
      { icon: 'Target', title: 'Tracking', description: 'Check conversion tracking, GA4, GTM, Enhanced Conversions, and call tracking for accuracy and completeness.' },
      { icon: 'Gauge', title: 'Optimization', description: 'Review Quality Score, Smart Bidding, target CPA, ROAS, and impression share for ongoing improvement.' },
      { icon: 'RefreshCw', title: 'Continuous Auditing', description: 'A one-time checklist finds today\u2019s issues. Continuous AI auditing runs daily to catch tomorrow\u2019s waste before it compounds.' },
    ],
    insight: 'A checklist is a starting point. Continuous AI auditing is what keeps your account healthy.',
  },

  generatesSection: {
    label: 'Most Common Audit Findings',
    title: 'Most Common Google Ads Audit Findings',
    intro:
      'These are the issues a Google Ads audit uncovers most often. Each one silently drains budget or hurts performance until it is found and fixed.',
    cards: [
      { icon: 'Ban', title: 'Missing Negative Keywords', description: 'Irrelevant search terms trigger ads because negative keyword lists are thin or outdated, wasting budget daily.' },
      { icon: 'AlertTriangle', title: 'Broken Conversion Tracking', description: 'Missing, duplicate, or misconfigured conversion events feed bad data to Smart Bidding and distort optimization.' },
      { icon: 'Gauge', title: 'Poor Quality Score', description: 'Low ad relevance, weak CTR, and poor landing page experience raise CPC and lower ad rank across keywords.' },
      { icon: 'Search', title: 'Broad Match Waste', description: 'Broad match keywords trigger irrelevant searches that spend budget without converting.' },
      { icon: 'Wallet', title: 'Budget Misallocation', description: 'Top campaigns are budget-capped while underperformers spend freely, limiting total conversions.' },
      { icon: 'Activity', title: 'Low CTR', description: 'Weak ad copy and poor extensions produce low click-through rates that hurt Quality Score and waste impressions.' },
      { icon: 'LayoutTemplate', title: 'Weak Landing Pages', description: 'Landing pages that do not match ad intent reduce conversion rates and waste paid clicks.' },
      { icon: 'Settings2', title: 'Poor Campaign Structure', description: 'Overloaded ad groups and tangled campaigns make optimization harder and reduce relevance.' },
      { icon: 'Copy', title: 'Duplicate Keywords', description: 'The same keyword in multiple ad groups competes with itself and inflates CPC.' },
      { icon: 'Gauge', title: 'Wrong Bidding Strategy', description: 'Bidding strategies misaligned with goals waste budget on the wrong outcomes.' },
    ],
  },

  featuresSection: {
    label: 'AI Audit Features',
    title: 'AI Google Ads Audit Features',
    intro:
      'A complete AI audit toolkit works together to analyze, diagnose, prioritize, and report on every part of your Google Ads account.',
    cards: [
      { icon: 'LayoutDashboard', title: 'Audit Dashboard', description: 'A central dashboard showing audit score, critical issues, warnings, opportunities, and potential savings.' },
      { icon: 'Bot', title: 'AI Diagnostics', description: 'AI analyzes every campaign, keyword, and search term to diagnose issues humans miss in manual reviews.' },
      { icon: 'Gauge', title: 'Confidence Scores', description: 'Every finding includes a confidence score so you know how certain the AI is before acting.' },
      { icon: 'ListChecks', title: 'Priority Ranking', description: 'Findings are ranked by financial impact so you fix the most expensive problems first.' },
      { icon: 'RefreshCw', title: 'Daily Monitoring', description: 'The audit runs daily, catching new waste before it compounds into expensive problems.' },
      { icon: 'Sparkles', title: 'Auto Recommendations', description: 'High-confidence fixes can be applied automatically within your safety limits.' },
      { icon: 'Wallet', title: 'Budget Leak Detection', description: 'Identifies exactly where budget is leaking across campaigns, keywords, and search terms.' },
      { icon: 'FileText', title: 'Search Terms Analyzer', description: 'Reviews real search terms and flags wasteful or irrelevant queries instantly.' },
      { icon: 'Gauge', title: 'Quality Score Monitor', description: 'Tracks Quality Score components and recommends ad relevance, CTR, and landing page improvements.' },
      { icon: 'Target', title: 'Conversion Tracking Checker', description: 'Validates conversion tracking, GA4, GTM, and Enhanced Conversions for accuracy.' },
      { icon: 'LayoutTemplate', title: 'Landing Page Analyzer', description: 'Reviews landing page relevance and alignment with ad and keyword intent.' },
      { icon: 'FileText', title: 'Audit Reports', description: 'Generates clear, shareable audit reports for stakeholders and clients.' },
    ],
    insight: 'AI audit features work together, so every finding makes the next optimization more accurate.',
  },

  vsManualSection: {
    label: 'AI Audit vs Manual Audit',
    title: 'AI Audit vs Manual Audit vs Agency',
    intro:
      'See how an AI-powered Google Ads audit compares to a manual audit and a traditional agency audit across the factors that matter most.',
    columns: [
      { title: 'Manual' },
      { title: 'Agency' },
      { title: 'AI Audit', highlight: true },
    ],
    rows: [
      { label: 'Time Required', values: ['8-20 hours', '4-10 hours', 'Minutes'] },
      { label: 'Audit Frequency', values: ['Quarterly', 'Monthly', 'Daily'] },
      { label: 'Coverage', values: ['Limited', 'Broad', 'Complete'] },
      { label: 'Speed', values: ['Slow', 'Moderate', 'Instant'] },
      { label: 'Accuracy', values: ['Inconsistent', 'Variable', 'Data-driven'] },
      { label: 'Data Processing', values: ['Limited', 'Moderate', 'Massive'] },
      { label: 'Prioritization', values: ['Manual', 'Subjective', 'By financial impact'] },
      { label: 'Cost', values: ['Time-heavy', 'High retainer', 'Predictable, lower'] },
      { label: 'Recommendations', values: ['Generic', 'Variable', 'Specific, ranked'] },
      { label: 'Reporting', values: ['Manual', 'Monthly', 'Real-time'] },
      { label: 'Consistency', values: ['Inconsistent', 'Variable', 'Consistent'] },
      { label: 'Availability', values: ['Business hours', 'Business hours', '24/7'] },
    ],
    insight: 'An AI audit combines the thoroughness of a senior PPC strategist with the speed of automation.',
  },

  vsSmartBiddingSection: {
    label: 'One-Time vs Continuous Auditing',
    title: 'One-Time Audit vs Continuous AI Auditing',
    intro:
      'A one-time audit shows you today\u2019s issues. Continuous AI auditing finds tomorrow\u2019s issues before they waste budget. Understanding the difference helps you choose the right approach.',
    cards: [
      {
        icon: 'ClipboardCheck',
        title: 'One-Time Audit',
        description:
          'A one-time Google Ads audit is a snapshot. It finds the waste, tracking issues, and structural problems that exist today and gives you a prioritized fix list. It is valuable for getting a struggling account back on track, but it does not catch the new search terms, bid shifts, and tracking breaks that appear next week.',
      },
      {
        icon: 'RefreshCw',
        title: 'Continuous AI Auditing',
        description:
          'Continuous AI auditing runs every day, reviewing new search terms, tracking status, Quality Score, budgets, and bids as they change. It catches waste the moment it appears instead of letting it compound for a month. This is how accounts stay healthy over time instead of slowly drifting back toward inefficiency.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Why Accounts Drift Back',
        description:
          'After a one-time audit, accounts slowly drift back toward waste. New search terms appear, competitors change bids, budgets run out, and tracking breaks. Within weeks, new inefficiencies replace the ones you just fixed. A one-time audit is a reset, not a maintenance plan.',
      },
      {
        icon: 'Sparkles',
        title: 'Why Continuous Wins',
        description:
          'Continuous AI auditing compounds. Each day\u2019s small fixes prevent tomorrow\u2019s expensive problems. Over months, accounts that audit continuously stay far healthier than accounts that audit once and stop. The result is lower CPA, higher ROAS, and less wasted budget over the long term.',
      },
    ],
    insight:
      'A one-time audit finds today\u2019s waste. Continuous AI auditing prevents tomorrow\u2019s waste before it happens.',
  },

  vsAgencySection: {
    label: 'AI Audit vs PPC Audit Services',
    title: 'AI Audit vs Agency Audit vs Freelancer vs Manual',
    intro:
      'Compare an AI-powered Google Ads audit against every common way businesses audit their accounts, from agency PPC audit services to manual checklist reviews.',
    columns: [
      { title: 'Agency Audit' },
      { title: 'Freelancer' },
      { title: 'Manual' },
      { title: 'AI Audit', highlight: true },
    ],
    rows: [
      { label: 'Cost', values: ['$500-$2,500', '$200-$1,000', 'Time only', 'Free or low'] },
      { label: 'Turnaround', values: ['1-2 weeks', '3-7 days', 'Days', 'Minutes'] },
      { label: 'Audit Frequency', values: ['Quarterly', 'Monthly', 'Rarely', 'Daily'] },
      { label: 'Coverage Depth', values: ['Broad', 'Variable', 'Limited', 'Complete'] },
      { label: 'Data Volume Analyzed', values: ['Moderate', 'Limited', 'Limited', 'Massive'] },
      { label: 'Prioritization', values: ['Subjective', 'Variable', 'Manual', 'By financial impact'] },
      { label: 'Recommendations', values: ['Generic', 'Variable', 'Generic', 'Specific, ranked'] },
      { label: 'Confidence Scores', values: ['No', 'No', 'No', 'Yes'] },
      { label: 'Search Term Review', values: ['Sampled', 'Sampled', 'Rare', 'Every term'] },
      { label: 'Tracking Validation', values: ['Manual', 'Manual', 'Manual', 'Automated'] },
      { label: 'Reporting', values: ['PDF', 'Inconsistent', 'Manual', 'Real-time dashboard'] },
      { label: 'Follow-up Monitoring', values: ['Extra cost', 'Rare', 'Never', 'Continuous'] },
      { label: 'Response Speed', values: ['Slow', 'Variable', 'Slow', 'Instant'] },
      { label: 'Consistency', values: ['Variable', 'Inconsistent', 'Inconsistent', 'Consistent'] },
      { label: 'Transparency', values: ['Low', 'Variable', 'High', 'Full'] },
    ],
  },

  campaignTypesSection: {
    label: 'Campaign Types',
    title: 'Campaign Types The Audit Reviews',
    intro:
      'A complete Google Ads audit reviews every campaign type, so your entire account is covered from a single audit.',
    cards: [
      { icon: 'Search', name: 'Search', capability: 'Keyword, search term, and Quality Score audit', benefit: 'Lower CPA and less wasted spend' },
      { icon: 'ShoppingCart', name: 'Shopping', capability: 'Product feed and bid audit', benefit: 'More profitable product sales' },
      { icon: 'Sparkles', name: 'Performance Max', capability: 'Asset group, budget, and audience audit', benefit: 'Maximized conversions across channels' },
      { icon: 'Image', name: 'Display', capability: 'Placement and audience audit', benefit: 'Efficient awareness and retargeting' },
      { icon: 'Video', name: 'Video', capability: 'YouTube targeting and bidding audit', benefit: 'Cost-effective video engagement' },
      { icon: 'Megaphone', name: 'Demand Gen', capability: 'YouTube and Discover campaign audit', benefit: 'Demand generation at scale' },
      { icon: 'MapPin', name: 'Local', capability: 'Local targeting and location audit', benefit: 'More store visits and calls' },
      { icon: 'Phone', name: 'Call Campaigns', capability: 'Call tracking and bid audit', benefit: 'More qualified phone leads' },
    ],
  },

  industriesSection: {
    label: 'Industries',
    title: 'Industries That Benefit from a Google Ads Audit',
    intro:
      'A Google Ads audit adapts to the unique demands of each industry, with tailored findings for local, service, and professional businesses.',
    cards: [
      { icon: 'Home', label: 'Roofing', description: 'Audit roofing campaigns for wasted spend and call tracking.', href: '/industries/roofing' },
      { icon: 'Wrench', label: 'HVAC', description: 'Audit HVAC Google Ads for seasonal waste and lead quality.', href: '/industries/hvac' },
      { icon: 'Wrench', label: 'Plumbers', description: 'Audit plumber campaigns for emergency service efficiency.', href: '/industries/plumbers' },
      { icon: 'Zap', label: 'Electricians', description: 'Audit electrician Google Ads for local lead waste.', href: '/industries/electricians' },
      { icon: 'Scale', label: 'Lawyers', description: 'Audit law firm campaigns for qualified case leads.', href: '/industries/google-ads-for-lawyers' },
      { icon: 'Leaf', label: 'Landscaping', description: 'Audit landscaping Google Ads for seasonal efficiency.', href: '/industries/google-ads-for-landscaping' },
      { icon: 'Sparkles', label: 'Cleaning Services', description: 'Audit cleaning campaigns for recurring booking waste.', href: '/industries/google-ads-for-cleaning-services' },
      { icon: 'SprayCan', label: 'Pest Control', description: 'Audit pest control Google Ads for seasonal demand.', href: '/industries/google-ads-for-pest-control' },
      { icon: 'Gavel', label: 'Personal Injury', description: 'Audit personal injury campaigns for high-value case waste.', href: '/industries/google-ads-for-personal-injury-lawyers' },
      { icon: 'Gavel', label: 'DUI Lawyers', description: 'Audit DUI lawyer Google Ads for urgent case leads.', href: '/industries/google-ads-for-dui-lawyers' },
      { icon: 'Gavel', label: 'Criminal Defense', description: 'Audit criminal defense campaigns for qualified leads.', href: '/industries/google-ads-for-criminal-defense-lawyers' },
      { icon: 'Sparkles', label: 'Carpet Cleaning', description: 'Audit carpet cleaning Google Ads for local bookings.', href: '/industries/google-ads-for-carpet-cleaning' },
    ],
  },

  insightsSection: {
    label: 'Audit Insights',
    title: 'Insights From Auditing Google Ads Accounts',
    intro:
      'These are the patterns we see again and again when businesses run AI-powered Google Ads audits on their accounts.',
    cards: [
      {
        title: 'Most Accounts Waste Budget on Search Terms, Not Bids',
        description:
          'The biggest budget leaks are almost always wasteful search terms, not bid levels. Audits that review every search term recover more budget than any bid adjustment could.',
        impact: '10-20% budget recovered in first month',
      },
      {
        title: 'Broken Conversion Tracking Ruins Smart Bidding',
        description:
          'When conversion tracking breaks, Smart Bidding optimizes toward bad data. Audits catch tracking issues before they distort weeks of automated bidding decisions.',
        impact: 'Prevents wasted Smart Bidding spend',
      },
      {
        title: 'Quality Score Improvements Reduce CPC Over Time',
        description:
          'Audits that fix ad relevance, expected CTR, and landing page experience raise Quality Score, lowering CPC and improving ad rank month over month.',
        impact: '15-25% lower CPC',
      },
      {
        title: 'Budget Allocation Often Beats Increasing Spend',
        description:
          'Moving budget from underperforming to top campaigns improves results without spending more. Audits show where reallocation beats simply increasing budgets.',
        impact: 'More conversions, same spend',
      },
      {
        title: 'Campaign Structure Issues Affect Every Optimization Layer',
        description:
          'Poor structure makes every other optimization less effective. Audits that fix structure first unlock better bidding, targeting, and ad performance downstream.',
        impact: 'Better results from every optimization',
      },
      {
        title: 'Continuous Auditing Catches Issues Before They Become Expensive',
        description:
          'A daily audit catches new waste the moment it appears, preventing small issues from compounding into expensive problems over weeks and months.',
        impact: 'Zero off-hours waste',
      },
      {
        title: 'Negative Keywords Are the Fastest Efficiency Lever',
        description:
          'Adding negatives stops waste immediately, while increasing budgets often amplifies existing inefficiencies. Audits prioritize negatives for instant savings.',
        impact: 'Faster ROAS improvement',
      },
      {
        title: 'Most Accounts Have Not Been Audited Recently',
        description:
          'Accounts that have not been audited in 90 days almost always have significant waste. Regular audits keep accounts healthy instead of letting drift accumulate.',
        impact: 'Compounding savings over time',
      },
    ],
  },

  resourcesSection: {
    label: 'Related Resources',
    title: 'Related Google Ads Resources',
    intro:
      'Explore related tools and guides that work alongside a Google Ads audit to help you get more from your account.',
    cards: [
      { icon: 'Zap', title: 'Google Ads Automation', description: 'Automate every part of your Google Ads account with AI.', href: '/google-ads-automation' },
      { icon: 'Bot', title: 'AI Google Ads Management', description: 'Full AI management for every layer of your account.', href: '/ai-google-ads-management' },
      { icon: 'Gauge', title: 'Google Ads Optimization Software', description: 'Continuously optimize campaigns with AI software.', href: '/google-ads-optimization-software' },
      { icon: 'BarChart3', title: 'PPC Management Software', description: 'Manage PPC accounts from one dashboard.', href: '/ppc-management-software' },
      { icon: 'FileText', title: 'PPC Reporting Software', description: 'Automated reporting for PPC campaigns and clients.', href: '/ppc-reporting-software' },
      { icon: 'Bot', title: 'Google Ads AI Manager', description: 'An AI manager that runs your account day to day.', href: '/google-ads-ai-manager' },
      { icon: 'Target', title: 'Google Ads Campaign Builder', description: 'Build complete campaigns from a business description.', href: '/google-ads-campaign-builder' },
      { icon: 'Ban', title: 'Negative Keyword Generator', description: 'Generate negative keywords to block wasted spend.', href: '/tools/negative-keyword-generator' },
      { icon: 'Award', title: 'White Label PPC', description: 'White label PPC for agencies and resellers.', href: '/white-label-ppc' },
      { icon: 'ShoppingCart', title: 'Ecommerce Google Ads', description: 'Google Ads optimization built for ecommerce stores.', href: '/ecommerce-google-ads' },
      { icon: 'Building2', title: 'Google Ads Agency Alternative', description: 'A smarter alternative to traditional agencies.', href: '/google-ads-agency-alternative' },
    ],
  },

  faqSection: {
    label: 'FAQ',
    title: 'Google Ads Audit FAQ',
    intro: 'Answers to the most common questions about running an AI-powered Google Ads audit to find wasted spend and improve campaign performance.',
    faqs: [
      {
        q: 'What is a Google Ads audit?',
        a: 'A Google Ads audit is a comprehensive review of your Google Ads account that uncovers wasted spend, tracking issues, keyword problems, Quality Score opportunities, campaign structure mistakes, and optimization recommendations. A thorough audit examines every campaign, ad group, keyword, search term, bid, budget, ad, extension, and conversion tracking event to find inefficiencies that quietly drain budget. The most effective audits use AI to analyze the entire account in minutes, rank findings by financial impact, and generate prioritized recommendations with confidence scores. Unlike a quick glance at performance metrics, a real audit reviews the actual search terms triggering your ads, validates that conversion tracking is firing correctly, and checks that campaign structure supports efficient optimization. The goal is to give you a clear, prioritized roadmap for improving CPA, ROAS, and conversion volume without increasing total spend.',
      },
      {
        q: 'How does an AI Google Ads audit work?',
        a: 'An AI Google Ads audit works by connecting to your account, importing campaign data, and analyzing every layer of the account automatically. The AI reviews campaigns, ad groups, keywords, search terms, bids, budgets, ads, extensions, landing pages, and conversion tracking to find waste and opportunity. For each issue it finds, the audit generates a recommendation with a confidence score and projected financial impact. You can review each recommendation manually or enable auto-apply for high-confidence fixes within your safety limits. The entire process takes minutes instead of the days a manual audit requires. After the initial audit, the AI can run daily to catch new waste before it compounds, turning a one-time audit into continuous account monitoring. This continuous approach keeps your account healthy over time instead of letting inefficiencies drift back after a single review.',
      },
      {
        q: 'What is a PPC audit?',
        a: 'A PPC audit is a review of your pay-per-click advertising accounts that covers Google Ads and other PPC platforms. It examines account structure, keywords, search terms, ads, bids, budgets, conversion tracking, and campaign performance to find wasted spend and missed opportunities. A PPC audit can be manual, where a person works through a checklist, or AI-powered, where software analyzes the entire account automatically. The best PPC audits prioritize findings by financial impact so you know exactly which fixes will recover the most budget first. PPC audits are valuable because most accounts slowly accumulate waste over time through new search terms, bid changes, and tracking breaks that weekly management misses. A regular PPC audit catches these issues before they compound into expensive problems and gives you a clear roadmap for improving ROAS and lowering CPA across your paid search program.',
      },
      {
        q: 'What is included in a Google Ads audit checklist?',
        a: 'A complete Google Ads audit checklist covers search terms, negative keywords, keyword match types, campaign structure, ad groups, budgets, bid strategies, devices, locations, ad schedule, conversion tracking, Quality Score, responsive search ads, extensions, landing pages, Shopping campaigns, Performance Max, Display, Video, and call campaigns. For each area, the checklist reviews performance data, flags waste, and recommends specific fixes. A strong checklist also validates conversion tracking, checks for duplicate keywords, reviews broad match waste, and examines budget allocation across campaigns. The checklist is valuable because it ensures no part of the account is overlooked. AI-powered audits automate the entire checklist, running every item in minutes and prioritizing findings by financial impact. This turns a manual process that takes days into an automated review that runs continuously, catching new issues before they waste budget.',
      },
      {
        q: 'How often should I audit my Google Ads account?',
        a: 'You should audit your Google Ads account at least once a month, and ideally continuously with AI-powered audit software. Accounts drift toward waste over time as new search terms appear, competitors change bids, budgets run out, and tracking breaks. A monthly audit catches these issues before they compound, but a daily audit catches them the moment they appear. The difference between a monthly and a daily audit is significant: a monthly audit might let waste accumulate for weeks before it is found, while a daily audit stops it immediately. For businesses spending more than a few thousand dollars per month, continuous AI auditing is the best approach because it prevents waste instead of just finding it after the fact. If you only audit once, do it now, but plan to audit regularly to keep your account healthy over time.',
      },
      {
        q: 'What is the difference between a manual audit and an AI audit?',
        a: 'A manual audit is performed by a person working through a checklist, reviewing campaigns, keywords, search terms, bids, and tracking by hand. It is thorough but slow, taking hours or days, and is limited by human attention span. An AI audit uses software to analyze the entire account in minutes, reviewing every campaign, keyword, and search term automatically. The AI ranks findings by financial impact, generates prioritized recommendations with confidence scores, and can run daily to catch new waste before it compounds. A manual audit is a snapshot of today\u2019s issues; an AI audit can be continuous, preventing tomorrow\u2019s issues. For most businesses, an AI audit is faster, more thorough, and more cost-effective than a manual audit, while still allowing human review of every recommendation before changes are applied. The two approaches are complementary, but AI auditing scales where manual auditing cannot.',
      },
      {
        q: 'How much does a Google Ads audit cost?',
        a: 'A Google Ads audit can range from free to thousands of dollars depending on who performs it. Agency PPC audit services typically charge $500 to $2,500 for a one-time audit with a turnaround of one to two weeks. Freelancers charge $200 to $1,000 but vary widely in quality and depth. A manual self-audit costs only your time but takes days and may miss issues. An AI-powered audit is often free or low-cost, runs in minutes, and can be continuous. When comparing costs, consider the value of what the audit finds: most accounts waste 10-20% of budget on inefficient search terms and tracking issues, so an audit that recovers that waste pays for itself many times over. The best audits prioritize findings by financial impact so you can act on the highest-value fixes first, regardless of what you paid for the audit.',
      },
      {
        q: 'What are PPC audit services?',
        a: 'PPC audit services are professional offerings where an agency or consultant reviews your pay-per-click accounts to find wasted spend, tracking issues, and optimization opportunities. These services typically produce a report with findings and recommendations, and may include a follow-up call to discuss results. Agency PPC audit services vary in depth, turnaround, and cost, with most charging $500 to $2,500 per audit. The limitation of traditional PPC audit services is that they are one-time snapshots, require scheduling, and depend on the individual auditor\u2019s experience. AI-powered audit services offer a faster, more consistent alternative that runs in minutes, can be repeated daily, and prioritizes findings by financial impact automatically. For businesses that want ongoing account health rather than a periodic review, continuous AI auditing delivers more value than a one-time agency audit at a lower cost.',
      },
      {
        q: 'How long does a Google Ads audit take?',
        a: 'A manual Google Ads audit can take anywhere from a few hours to a few weeks depending on account size and the auditor\u2019s availability. An AI-powered audit analyzes the entire account in minutes, regardless of size. The speed difference matters because accounts change every day, and a slow audit may reflect issues that have already shifted by the time the report is delivered. AI audits also run continuously, so you do not need to wait for a scheduled review. For businesses that want fast answers about where their budget is leaking, an AI audit delivers a prioritized fix list immediately. For deeper strategic reviews, a manual audit by an experienced PPC professional adds value, but it should complement, not replace, the speed and coverage of an automated audit that runs daily.',
      },
      {
        q: 'What is a PPC account audit?',
        a: 'A PPC account audit is a detailed review of a single pay-per-click account, such as a Google Ads account, that examines campaigns, ad groups, keywords, search terms, ads, extensions, bids, budgets, devices, locations, and conversion tracking. The goal is to find wasted spend, structural issues, and optimization opportunities that are hurting performance. A PPC account audit differs from a campaign-level review because it looks at the entire account holistically, including how campaigns interact, whether budgets are allocated efficiently, and whether tracking is accurate across all conversion events. The best PPC account audits prioritize findings by financial impact and provide specific, actionable recommendations. AI-powered account audits automate this process, running in minutes and continuously monitoring for new issues as the account changes over time.',
      },
      {
        q: 'What is an AdWords audit?',
        a: 'An AdWords audit is the same as a Google Ads audit, since Google rebranded AdWords to Google Ads in 2018. An AdWords audit reviews your Google Ads account for wasted spend, tracking issues, keyword problems, Quality Score opportunities, and campaign structure mistakes. Businesses still search for AdWords audit because the term remains common, but the process and platform are identical to a Google Ads audit. Whether you call it an AdWords audit or a Google Ads audit, the goal is the same: uncover inefficiencies, prioritize fixes by financial impact, and improve CPA, ROAS, and conversion volume. AI-powered audits work the same way regardless of what you call the platform, analyzing every campaign and search term in minutes and running continuously to keep your account healthy.',
      },
      {
        q: 'Can an audit find wasted ad spend?',
        a: 'Yes. Finding wasted ad spend is the primary purpose of a Google Ads audit. The audit reviews every search term triggering your ads, identifies irrelevant or low-intent queries that spend budget without converting, and recommends negative keywords to block them. It also flags broad match waste, duplicate keywords, budget misallocation, and underperforming campaigns that drain budget. Most accounts waste 10-20% of their budget on issues an audit can find, and acting on the top findings usually recovers more budget than any bid change could. An AI-powered audit reviews every search term automatically, which is something manual weekly management rarely has time to do thoroughly. This is why audits consistently uncover waste that has been quietly draining budget for months.',
      },
      {
        q: 'How does an audit check conversion tracking?',
        a: 'A Google Ads audit checks conversion tracking by validating that every conversion event is firing correctly, that there are no duplicate or missing events, and that the data feeding Smart Bidding is accurate. The audit reviews primary conversions, GA4 imports, GTM tags, Enhanced Conversions, and call tracking to ensure nothing is broken or misconfigured. Broken conversion tracking is one of the most damaging issues an audit can find because it silently feeds bad data to Smart Bidding, which then optimizes toward the wrong outcomes. An AI-powered audit validates tracking automatically and flags issues with clear explanations and fix recommendations. Because tracking issues can develop at any time, continuous auditing is the best way to catch breaks before they distort weeks of automated bidding decisions and waste budget on poorly optimized campaigns.',
      },
      {
        q: 'What is a Google Ads audit tool?',
        a: 'A Google Ads audit tool is software that analyzes your Google Ads account automatically to find wasted spend, tracking issues, keyword problems, Quality Score opportunities, and campaign structure mistakes. Unlike a manual audit, which requires a person to review the account by hand, an audit tool runs in minutes and can operate continuously. The best audit tools use AI to review every campaign, keyword, and search term, rank findings by financial impact, and generate prioritized recommendations with confidence scores. They also provide a dashboard showing audit score, critical issues, warnings, and potential savings. A good audit tool does not just list problems; it tells you exactly what to fix, why, and what impact to expect, so you can act with confidence and recover budget quickly.',
      },
      {
        q: 'What are the most common Google Ads audit findings?',
        a: 'The most common Google Ads audit findings are missing negative keywords, broken conversion tracking, poor Quality Score, broad match waste, budget misallocation, low CTR, weak landing pages, poor campaign structure, duplicate keywords, and wrong bidding strategy. These issues appear repeatedly across accounts because they develop over time as new search terms enter accounts, competitors change bids, and tracking breaks. Missing negative keywords and broad match waste are usually the biggest budget leaks, while broken conversion tracking is the most damaging because it distorts Smart Bidding. An audit prioritizes these findings by financial impact so you can fix the most expensive problems first. Most accounts have several of these issues simultaneously, which is why a single audit often uncovers enough waste to fund months of optimization work.',
      },
      {
        q: 'Should I use a free Google Ads audit tool?',
        a: 'Yes, a free Google Ads audit tool is a great starting point for finding wasted spend and tracking issues quickly. A good free audit tool connects to your account, analyzes campaigns and search terms, and provides a prioritized list of findings without requiring a paid engagement. The key is to choose a tool that reviews the full account, not just surface metrics, and that prioritizes findings by financial impact. Free audit tools are especially valuable for small businesses that cannot afford agency audit services but still need to know where their budget is leaking. After a free audit, you can decide whether to fix issues manually, upgrade to continuous AI auditing, or engage a professional for deeper strategic work. The value of any audit, free or paid, is measured by the budget it helps you recover.',
      },
      {
        q: 'How does an audit improve Quality Score?',
        a: 'A Google Ads audit improves Quality Score by identifying low-scoring keywords and recommending fixes for the three components Google measures: ad relevance, expected CTR, and landing page experience. The audit flags keywords with poor ad relevance and suggests tighter ad group themes and better-aligned ad copy. It identifies low expected CTR and recommends RSA headline and description improvements. It reviews landing page relevance and recommends changes that align page content with ad and keyword intent. As these fixes compound, Quality Score rises, which lowers your cost per click and improves ad rank. Over time, higher Quality Score means you pay less for better positions than competitors with lower scores, making it one of the most sustainable improvements an audit can deliver.',
      },
      {
        q: 'Can an audit improve ROAS?',
        a: 'Yes. A Google Ads audit improves ROAS by finding and fixing the issues that waste budget and reduce return on ad spend. The audit pauses wasteful search terms, adds negative keywords, reallocates budget from underperforming campaigns to top performers, fixes broken conversion tracking, and improves Quality Score to lower CPC. Each of these fixes moves spend toward what converts and away from what wastes budget, lifting ROAS without increasing total spend. Businesses that act on audit findings typically see ROAS improve by 20-40% within 90 days because the audit exposes inefficiencies that weekly manual management consistently misses. The key is prioritizing fixes by financial impact so the highest-value changes are applied first, delivering the fastest ROAS improvement.',
      },
      {
        q: 'What is the difference between a one-time audit and continuous auditing?',
        a: 'A one-time audit is a snapshot that finds the issues in your account today and gives you a prioritized fix list. It is valuable for getting a struggling account back on track, but it does not catch the new search terms, bid shifts, and tracking breaks that appear next week. Continuous AI auditing runs every day, reviewing new search terms, tracking status, Quality Score, budgets, and bids as they change. It catches waste the moment it appears instead of letting it compound for a month. After a one-time audit, accounts slowly drift back toward waste unless they are monitored continuously. Continuous auditing prevents that drift, keeping accounts healthy over time. For businesses spending meaningful budgets on Google Ads, continuous auditing delivers far more value than a one-time audit because it prevents waste instead of just finding it after the fact.',
      },
      {
        q: 'Does a Google Ads audit work for small businesses?',
        a: 'Yes. A Google Ads audit is especially valuable for small businesses because it provides the level of account review that would normally require an expensive agency or full-time PPC manager. Small businesses often lack the time and expertise to review search terms, validate tracking, and check campaign structure regularly, which leads to wasted spend and missed opportunities. An AI-powered audit handles this work in minutes, finds the highest-impact fixes, and lets small business owners act with confidence without needing deep PPC expertise. Because the audit prioritizes findings by financial impact, small businesses can focus on the fixes that recover the most budget first. This makes a Google Ads audit one of the most accessible ways for small businesses to improve campaign performance and compete profitably on Google Ads.',
      },
    ],
  },

  finalCtaSection: {
    title: 'Ready to Discover What\u2019s Hurting Your Google Ads Performance?',
    subtitle:
      'Run a free AI-powered Google Ads audit to uncover wasted spend, broken tracking, Quality Score problems, search term waste, bidding mistakes, and campaign structure issues. Get prioritized recommendations and start improving campaign performance in minutes.',
    primaryCta: 'Run Free Audit',
    secondaryCta: 'See Live Demo',
  },

  trustBadges: [
    { icon: 'Award', label: 'Google Ads Expertise' },
    { icon: 'Bot', label: 'AI Powered' },
    { icon: 'Shield', label: 'Secure Platform' },
    { icon: 'Building2', label: 'Enterprise Ready' },
    { icon: 'Clock', label: 'Daily Auditing' },
    { icon: 'Shield', label: 'Audit Safety Controls' },
  ],

  newsletterSection: {
    title: 'Get Google Ads Audit Tips',
    subtitle:
      'Receive weekly audit insights, AI-powered findings from real accounts, and proven tactics to find wasted spend, fix tracking issues, and improve campaign performance straight to your inbox.',
  },
};
