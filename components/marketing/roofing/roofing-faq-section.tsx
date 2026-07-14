'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    q: 'How does AI Google Ads for roofers work?',
    a: <>Paste your roofing website URL into GrowthShift and the AI extracts your services, service areas, trust signals, and contact information. It then generates a complete roofing Google Ads campaign — keywords, headlines, descriptions, extensions, and landing page recommendations — in under two minutes. You review everything before exporting to Google Ads. See our <Link href="/#ai-tools" className="text-primary underline-offset-4 hover:underline">AI Google Ads Builder</Link> for the full workflow.</>,
  },
  {
    q: 'What makes roofing PPC different from other industries?',
    a: 'Roofing PPC has some of the highest click costs in local search, often exceeding $20 per click for roof replacement keywords. The market is highly competitive, demand surges after storms, and leads require fast response times. Roofing PPC software needs to account for these dynamics with negative keywords, call extensions, and storm-activated ad groups.',
  },
  {
    q: 'How much should a roofing company spend on Google Ads?',
    a: 'Most roofing companies see results with a Google Ads budget between $50 and $150 per day per service area. Roof replacement campaigns typically need a higher budget than roof repair because the keyword CPC is higher. GrowthShift recommends a starting budget based on your service areas and the number of roofing services you offer, then helps you optimize spend over time.',
  },
  {
    q: 'What is a good cost per lead for roofing Google Ads?',
    a: 'Roofing cost per lead varies by service and market. Roof replacement leads typically cost $80–$200 per phone call lead, while roof repair leads range from $40–$100. Commercial roofing leads can be higher due to longer sales cycles. GrowthShift includes conversion tracking so you can measure your actual cost per lead and adjust bidding strategy toward target CPA.',
  },
  {
    q: 'Can GrowthShift write ads for roof replacement and roof repair separately?',
    a: 'Yes. GrowthShift creates separate ad groups for roof replacement ads and roof repair ads, each with its own keywords, headlines, and descriptions. This separation improves ad relevance and Quality Score because the ad copy matches the searcher\'s exact intent rather than a generic roofing pitch.',
  },
  {
    q: 'How does roofing lead generation with GrowthShift compare to an agency?',
    a: <>A roofing marketing agency typically charges $1,500–$3,000 per month in management fees and takes 2–4 weeks to launch a campaign. GrowthShift generates the same campaign components in minutes for a flat software price. You own the Google Ads account and can make changes instantly without waiting for an account manager.</>,
  },
  {
    q: 'Does GrowthShift include roofing advertising ideas for Facebook and other channels?',
    a: 'GrowthShift focuses on Google Ads Search campaigns, which capture homeowners actively searching for roofing services. While roofing ads on Facebook can build awareness, search ads generate higher-intent leads. The keyword strategy and ad copy can inform your roofing advertising creative across other channels.',
  },
  {
    q: 'How do you optimize a roofing Google Ads campaign over time?',
    a: <>Roofing campaign optimization involves reviewing search term reports weekly to add negative keywords, adjusting bids on high-converting roofing keyword groups, testing new headline combinations, and refining location targeting. GrowthShift provides an <Link href="/#ai-tools" className="text-primary underline-offset-4 hover:underline">AI Campaign Optimizer</Link> that surfaces these recommendations automatically so you can act on them in minutes.</>,
  },
  {
    q: 'What roofing keywords should I bid on?',
    a: <>Core roofing keywords include roof replacement, roof repair, metal roofing, storm damage roofing, roof leak repair, roof inspection, and roof installation. GrowthShift groups these by service type and adds location modifiers — for example, "roof replacement Florida" — to target local searches. Branded keywords using your company name should also be included. Learn more from our <Link href="/#ai-tools" className="text-primary underline-offset-4 hover:underline">AI Keyword Generator</Link>.</>,
  },
  {
    q: 'Can I use GrowthShift for roofing marketing beyond Google Ads?',
    a: 'GrowthShift generates roofing Google Ads campaigns, keyword lists, ad copy, and landing page recommendations that form the foundation of your roofing digital marketing strategy. The keyword research and messaging can be repurposed for SEO, email campaigns, and roofing marketing services across other channels.',
  },
  {
    q: 'How does GrowthShift handle roofing Google Ads campaign setup?',
    a: 'Roofing campaign setup starts with your website URL. GrowthShift extracts your services, locations, and trust signals, then builds the full campaign structure: campaign name, ad groups, keywords, headlines, descriptions, extensions, bidding strategy, budget, ad schedule, and conversion tracking. Everything is editable before you export to Google Ads — so the setup that normally takes weeks happens in minutes.',
  },
  {
    q: 'Is GrowthShift a roofing Google Ads software or a roofing PPC agency?',
    a: 'GrowthShift is roofing Google Ads software, not an agency. There are no management fees, no account managers, and no long-term contracts. You generate campaigns yourself using the roofing campaign builder, own the Google Ads account, and make changes instantly. This makes it the most cost-effective roofing PPC software available for companies that want control without agency overhead.',
  },
  {
    q: 'How should I structure my roofing Google Ads campaign?',
    a: 'A roofing search campaign should be structured with one ad group per service — roof replacement, roof repair, metal roofing, storm damage, commercial roofing, and emergency roofing. Each ad group gets its own roofing keyword groups, headlines, descriptions, and landing page. This structure maximizes Quality Score because every component shares a single tight theme.',
  },
  {
    q: 'What is the difference between phrase match and exact match for roofing keywords?',
    a: 'Roofing phrase match keywords capture variations that share your core meaning — "roof replacement near me", "best roof replacement company" — giving you reach with control. Roofing exact match keywords trigger only for precise searches, giving maximum control but less reach. GrowthShift uses phrase match as the default and adds exact match for your highest-converting branded and emergency terms.',
  },
  {
    q: 'What roofing negative keywords should I use?',
    a: 'Essential roofing negative keywords include "jobs", "careers", "DIY", "how to", "supplies", "materials wholesale", "training", and "classes". These block job seekers, DIY homeowners, and supply shoppers from clicking your ads. GrowthShift generates a starter negative keyword list at campaign setup and expands it weekly from your search term reports.',
  },
  {
    q: 'When should I switch from Maximize Clicks to Maximize Conversions?',
    a: 'Start new roofing campaigns with Maximize Clicks to gather conversion data quickly. Once you accumulate 15 or more conversions in a 30-day period, switch to Maximize Conversions so Google can optimize bidding for lead generation. For mature campaigns with stable cost per lead, Target CPA further refines bidding by setting a maximum cost per roofing phone call lead.',
  },
  {
    q: 'How does roofing conversion tracking work?',
    a: 'Roofing conversion tracking monitors phone calls and form submissions generated by your ads. Call tracking assigns a unique forwarding number to each campaign so you know which ads produce calls. GrowthShift configures conversion tracking as part of campaign setup — without it, you cannot measure roofing cost per lead or optimize bidding toward target CPA.',
  },
  {
    q: 'What is a good Quality Score for roofing Google Ads?',
    a: 'A Quality Score of 7 or above is considered good for roofing keywords. High Quality Score lowers your cost per click and improves ad position. It is achieved when your roofing keywords, ad headlines, and landing page all share the same theme. GrowthShift maximizes Quality Score by structuring each ad group around a single service with matching copy and landing pages.',
  },
  {
    q: 'Can GrowthShift help with roofing campaign management for multiple service areas?',
    a: 'Yes. GrowthShift generates separate campaigns or location-specific ad groups for each city or county you serve. This lets you set different budgets and bids per service area and measure roofing cost per lead by location. Campaign management becomes straightforward — you see exactly which areas produce leads and which need budget adjustments.',
  },
  {
    q: 'Does GrowthShift work for other industries besides roofing?',
    a: <>Yes. GrowthShift supports AI Google Ads builders for HVAC, plumbers, electricians, pest control, and other local service businesses. Each industry page includes vertical-specific keyword strategy, ad copy guidance, and campaign structure. Explore our <Link href="/#industries" className="text-primary underline-offset-4 hover:underline">industries section</Link> to see the full list.</>,
  },
];

export function RoofingFaqSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Common questions about using AI to build and optimize Google Ads campaigns for roofing companies.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-sm">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`} className={index === FAQS.length - 1 ? 'border-b-0' : ''}>
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
