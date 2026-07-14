import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, Ban, Copy, CheckCircle2, Key, DollarSign, Gauge, TrendingUp, Shield, Search, Briefcase, BookOpen, Percent, Warehouse, Lock, Eye, HelpCircle, FileText, Download, Tag, Settings, Layers, RefreshCw, Bot, BarChart3, Target, Building2, ShoppingCart, MousePointerClick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';
import { NegativeKeywordGenerator } from '@/components/marketing/negative-keyword-generator';
import { AiInsight } from '@/components/marketing/roofing/ai-insight';

export const metadata: Metadata = {
  title: 'Free Negative Keyword Generator for Google Ads | 250+ Ready-to-Use Keywords',
  description:
    'Generate a free Google Ads negative keywords list in seconds. Build broad, phrase, or exact match negative keywords by category, copy or download your list, and reduce wasted ad spend with our AI-powered negative keyword generator.',
  openGraph: {
    title: 'Free Negative Keyword Generator for Google Ads | 250+ Ready-to-Use Keywords',
    description:
      'Generate a free Google Ads negative keywords list in seconds. Build broad, phrase, or exact match negative keywords by category, copy or download your list, and reduce wasted ad spend with our AI-powered negative keyword generator.',
  },
};

const WHY_CARDS = [
  { icon: 'DollarSign', title: 'Reduce Wasted Spend', description: 'Stop paying for clicks from searchers who never intend to buy. Negative keywords filter out irrelevant traffic before it drains your budget.' },
  { icon: 'TrendingUp', title: 'Improve ROAS', description: 'By blocking low-intent searches, your budget goes toward high-intent clicks that actually convert, improving your return on ad spend.' },
  { icon: 'Gauge', title: 'Improve Quality Score', description: 'Higher click-through rates from relevant searches improve your Quality Score, which lowers your cost per click over time.' },
  { icon: 'MousePointerClick', title: 'Increase CTR', description: 'When your ads only show for relevant searches, more people click. Higher CTR means better ad positions at lower costs.' },
  { icon: 'Search', title: 'Better Search Intent', description: 'Negative keywords ensure your ads only appear for searches that match your actual business intent and service offerings.' },
  { icon: 'DollarSign', title: 'Lower CPA', description: 'Fewer wasted clicks means more budget for converting clicks, bringing your cost per acquisition down significantly.' },
];

const COMMON_CATEGORIES = [
  { icon: 'Ban', title: 'Free Seekers', description: 'free, no cost, complimentary, freebie, gratis' },
  { icon: 'Briefcase', title: 'Jobs', description: 'jobs, careers, salary, hiring, employment' },
  { icon: 'BookOpen', title: 'DIY', description: 'how to, diy, tutorial, guide, do it yourself' },
  { icon: 'Percent', title: 'Cheap', description: 'cheap, discount, bargain, lowest price' },
  { icon: 'Warehouse', title: 'Wholesale', description: 'wholesale, supplier, distributor, bulk' },
  { icon: 'Lock', title: 'Support', description: 'login, sign in, support, contact, help' },
  { icon: 'Eye', title: 'Images', description: 'image, photo, picture, wallpaper, pics' },
  { icon: 'Eye', title: 'Videos', description: 'video, youtube, tutorial video, watch' },
  { icon: 'HelpCircle', title: 'Questions', description: 'what is, how does, why, when to, definition' },
  { icon: 'BookOpen', title: 'Definitions', description: 'meaning, define, explained, wikipedia' },
  { icon: 'FileText', title: 'Templates', description: 'template, sample, example, form, printable' },
  { icon: 'Download', title: 'Downloads', description: 'download, pdf, ebook, free download, file' },
  { icon: 'Tag', title: 'Coupons', description: 'coupon, promo code, voucher, discount code' },
  { icon: 'Search', title: 'Reviews', description: 'review, compare, best, top 10, vs, alternatives' },
  { icon: 'Search', title: 'Research', description: 'research, study, analysis, report, statistics' },
];

const FIND_SOURCES = [
  { icon: 'Search', title: 'Search Terms Report', description: 'The Google Ads search terms report reveals exactly what people typed before clicking your ads. Review it weekly to find new negative keywords.' },
  { icon: 'Search', title: 'Keyword Planner', description: 'Google Keyword Planner suggests related keywords. Many of these are irrelevant to your business and should be added as negatives.' },
  { icon: 'Search', title: 'Search Console', description: 'Google Search Console shows organic search queries. Filter for irrelevant terms and add them as negative keywords.' },
  { icon: 'BarChart3', title: 'GA4', description: 'Google Analytics 4 reveals landing page data. Look for pages with high traffic but low engagement to find wasted clicks.' },
  { icon: 'Search', title: 'Internal Search', description: 'Your website search logs reveal what visitors look for. Irrelevant searches are prime negative keyword candidates.' },
  { icon: 'Sparkles', title: 'AI Recommendations', description: 'AI continuously analyzes your search terms and recommends negative keywords based on conversion data and intent analysis.' },
  { icon: 'Building2', title: 'Competitor Research', description: 'Review competitor keywords to identify terms you do not want to compete on, especially brand names and unrelated services.' },
  { icon: 'Search', title: 'Customer Intent', description: 'Think about what your customers actually search for. Anything outside that intent should be a negative keyword.' },
];

const MISTAKES = [
  { icon: 'Ban', title: 'Blocking Buyer Keywords', description: 'Adding negative keywords that are too broad can accidentally block high-converting searches. Always review before adding.' },
  { icon: 'Settings', title: 'Wrong Match Types', description: 'Using broad match when phrase or exact is needed can over-block. Understand how each match type filters searches.' },
  { icon: 'Search', title: 'Ignoring Search Terms', description: 'Failing to review the search terms report regularly means wasted spend accumulates silently over time.' },
  { icon: 'Layers', title: 'No Shared Lists', description: 'Not using shared negative keyword lists means you duplicate work across campaigns and miss inconsistencies.' },
  { icon: 'Ban', title: 'Overblocking', description: 'Adding too many negative keywords too fast can starve your campaigns of traffic. Add gradually and monitor.' },
  { icon: 'RefreshCw', title: 'Never Updating Negatives', description: 'Search behavior changes over time. Negatives that were correct six months ago may not cover new irrelevant queries today.' },
];

const FAQS = [
  { q: 'What is a negative keyword generator?', a: 'A negative keyword generator is a tool that helps you build a list of negative keywords for your Google Ads campaigns. Instead of manually brainstorming every possible irrelevant search term, a negative keyword generator provides pre-built categories of common negative keywords that waste ad spend across industries. You select categories, choose a match type, and the tool produces a formatted list you can copy directly into Google Ads. This saves hours of manual research and helps prevent wasted clicks from searchers who have no intention of hiring your services or buying your products.' },
  { q: 'How do I use a negative keywords list in Google Ads?', a: 'After generating your negative keywords list, log into your Google Ads account. Navigate to the campaign or ad group where you want to add negatives. Click on Negative Keywords in the Keywords section. Paste your generated list, making sure each negative keyword is on its own line. You can also create a shared negative keyword list at the account level and apply it across multiple campaigns. This ensures every campaign blocks the same irrelevant searches without duplicating effort.' },
  { q: 'What are negative keywords examples?', a: 'Common negative keywords examples include terms like "free," "jobs," "diy," "cheap," "salary," "how to," "tutorial," "template," "pdf," "download," "review," "wikipedia," and "coupon." These searches indicate informational or non-commercial intent rather than purchase intent. For a roofing company, negatives might include "roofing license," "roofing jobs," and "diy roof repair." For a lawyer, negatives might include "free legal advice," "law school," and "legal forms." The right negatives depend on your industry and services.' },
  { q: 'What is the best match type for negative keywords?', a: 'Broad match negative keywords block the widest range of searches. If you add "free" as a broad negative, it blocks any search containing the word "free." Phrase match negatives block searches that include the exact phrase in the same word order. Exact match negatives block only the precise term. Most advertisers start with broad match for obvious negatives like "jobs" and "salary," then use phrase or exact match for terms that need more precision. Testing different match types helps you find the right balance between blocking waste and preserving relevant traffic.' },
  { q: 'What is a shared negative keyword list?', a: 'A shared negative keyword list is a Google Ads feature that lets you create one list of negative keywords and apply it across multiple campaigns. Instead of adding the same negatives to each campaign individually, you create the list once at the account level and then attach it to any campaign. This saves time, ensures consistency, and makes updates easier. When you add a new negative keyword to the shared list, it automatically applies to every campaign using that list.' },
  { q: 'How does a negative keyword tool help reduce wasted ad spend?', a: 'A negative keyword tool identifies search terms that trigger your ads but have no commercial value. By adding these as negative keywords, you prevent your ads from showing for irrelevant searches. This means fewer wasted clicks, lower spend on non-converting traffic, and more budget available for high-intent searches that actually generate leads. Most accounts waste 15-30% of their budget on irrelevant clicks. A negative keyword generator helps you reclaim that wasted budget quickly.' },
  { q: 'Can I download my negative keywords as a CSV?', a: 'Yes. After selecting your categories and match type, click the Download CSV button. The file contains each negative keyword formatted with your chosen match type. You can import this file directly into Google Ads using the bulk upload feature or paste the contents into the negative keywords section of your campaign. The CSV format works with both campaign-level and shared list-level negative keyword uploads in Google Ads.' },
  { q: 'What is negative broad match?', a: 'Negative broad match is the default match type for negative keywords in Google Ads. When you add a keyword as a negative broad match, it blocks any search that includes all the words in your negative keyword, in any order. For example, if "free roof" is a negative broad match, it blocks "free roof inspection" and "roof estimate free" but not "free roofing estimate." Negative broad match is useful for blocking general categories of irrelevant searches without being overly restrictive.' },
  { q: 'What is negative phrase match?', a: 'Negative phrase match blocks searches that include the exact phrase in the same word order as your negative keyword. For example, if "free consultation" is a negative phrase match, it blocks "free consultation lawyer" and "lawyer free consultation" but not "consultation free lawyer." Negative phrase match gives you more precision than broad match while still covering a range of related searches. Use it when you want to block a specific concept but not every possible variation.' },
  { q: 'What is negative exact match?', a: 'Negative exact match blocks only the precise keyword with no additional words. If "free" is a negative exact match, it blocks only the search "free" but not "free estimate" or "free consultation." Negative exact match is the most restrictive match type and should be used when you want to block a very specific search term without affecting broader queries. It is useful for protecting high-value keywords that might be accidentally blocked by broader match types.' },
  { q: 'How often should I update my negative keywords?', a: 'You should review your search terms report and update negative keywords at least once a week. Search behavior changes constantly, and new irrelevant queries appear regularly. If you manage high-spend campaigns, daily review is even better. AI-powered google ads automation tools can monitor search terms continuously and recommend new negative keywords automatically, saving you from manual review. The faster you add negatives, the less budget you waste on irrelevant clicks.' },
  { q: 'What is the difference between the search terms report and negative keywords?', a: 'The search terms report shows what people actually typed into Google before clicking your ads. Negative keywords are the terms you add to prevent your ads from showing for specific searches. The search terms report is your source of data. Negative keywords are your action. You review the search terms report to find irrelevant queries, then add those queries as negative keywords to stop wasting budget on them. This cycle of reviewing and adding is one of the most effective ways to improve campaign performance.' },
  { q: 'Can negative keywords improve my Quality Score?', a: 'Yes. When you add negative keywords, your ads stop showing for irrelevant searches. This means your ads only appear for highly relevant queries, which typically leads to higher click-through rates. Higher CTR is a key component of Quality Score. As your Quality Score improves, your cost per click decreases and your ad positions improve. Negative keyword management is one of the fastest ways to improve Quality Score without changing your bids or ad copy.' },
  { q: 'Should I use negative keywords for all campaign types?', a: 'Negative keywords are most effective in Search campaigns, where you control which search queries trigger your ads. They also work in Shopping campaigns and Performance Max campaigns, though the process is slightly different. For Display and Video campaigns, negative keywords work differently and are less granular. Most advertisers focus negative keyword management on Search campaigns first, then expand to Shopping and Performance Max once Search campaigns are well-optimized.' },
  { q: 'How many negative keywords should I have?', a: 'Most well-optimized Google Ads accounts have between 100 and 500 negative keywords. The exact number depends on your industry, campaign size, and how long your campaigns have been running. Start with 50-100 negatives from common categories like free, jobs, and DIY. Then add more from your search terms report over time. Having too many negatives can restrict traffic, so focus on quality over quantity. Each negative should clearly identify a non-commercial search intent.' },
  { q: 'Can AI find negative keywords automatically?', a: 'Yes. AI-powered google ads automation tools continuously analyze your search terms report and identify patterns of wasted spend. AI can distinguish between searches that convert and searches that waste budget, then recommend negative keywords automatically. This saves hours of manual review and catches wasted spend faster than human monitoring. AI negative keyword discovery is one of the most impactful automation features for reducing wasted ad spend and improving campaign efficiency.' },
  { q: 'What happens if I add too many negative keywords?', a: 'Adding too many negative keywords can starve your campaigns of traffic by blocking searches that would have converted. This is called overblocking. Symptoms include sudden drops in impressions, clicks, and conversions. To avoid overblocking, add negatives gradually, use the right match types, and monitor performance after each batch. If you notice traffic drops after adding negatives, review your list and remove any that might be too restrictive.' },
  { q: 'Are negative keywords the same as excluded keywords?', a: 'In Google Ads, negative keywords and excluded keywords refer to the same concept. Negative keywords prevent your ads from showing for specific search terms. The term "negative keywords" is used in Search and Shopping campaigns. In Performance Max campaigns, Google uses "exclusions" which can include negative keywords, brand exclusions, and URL exclusions. The underlying principle is the same: preventing your ads from appearing for searches or placements that are not relevant to your business.' },
  { q: 'How do negative keywords work with Performance Max campaigns?', a: 'In Performance Max campaigns, negative keywords work at the account level through campaign-level exclusions. You can add negative keywords to a Performance Max campaign, but they apply more broadly than in Search campaigns. Google also offers brand exclusions and URL exclusions for Performance Max. Because Performance Max uses AI to optimize across all Google networks, negative keyword management is important but less granular than in Search campaigns. Review your search terms report regularly to identify new negatives for Performance Max.' },
  { q: 'Which businesses benefit most from negative keyword management?', a: 'All Google Ads advertisers benefit from negative keywords, but local service businesses benefit the most. Roofers, HVAC companies, plumbers, electricians, lawyers, dentists, and other local service providers face high CPCs and intense competition. Wasted clicks from DIY searchers, job seekers, and free-service searchers can drain 20-30% of their budget. A negative keyword generator helps these businesses reclaim that wasted budget quickly. Ecommerce businesses also benefit significantly, especially when blocking competitor brand names, coupon searches, and review queries that indicate research intent rather than purchase intent.' },
];

const RESOURCES = [
  { icon: 'Bot', title: 'Google Ads Automation', description: 'Automate Google Ads with AI-powered automation tools.', href: '/google-ads-automation' },
  { icon: 'Sparkles', title: 'AI Google Ads Management', description: 'Manage Google Ads with AI-powered campaign management.', href: '/ai-google-ads-management' },
  { icon: 'Gauge', title: 'Google Ads Optimization Software', description: 'Optimize Google Ads with AI-powered optimization software.', href: '/google-ads-optimization-software' },
  { icon: 'Settings', title: 'PPC Management Software', description: 'Manage PPC campaigns with AI-powered management software.', href: '/ppc-management-software' },
  { icon: 'BarChart3', title: 'PPC Reporting Software', description: 'Track PPC performance with AI-powered reporting software.', href: '/ppc-reporting-software' },
  { icon: 'Shield', title: 'Google Ads Audit', description: 'Run a free AI-powered Google Ads audit.', href: '/google-ads-audit' },
  { icon: 'Bot', title: 'Google Ads AI Manager', description: 'Meet your 24/7 AI Google Ads Manager.', href: '/google-ads-ai-manager' },
  { icon: 'Target', title: 'Google Ads Campaign Builder', description: 'Build Google Ads campaigns with AI.', href: '/google-ads-campaign-builder' },
  { icon: 'Shield', title: 'White Label PPC', description: 'White label PPC management for agencies.', href: '/white-label-ppc' },
  { icon: 'Building2', title: 'Google Ads Agency Alternative', description: 'Replace your agency with AI-powered management.', href: '/google-ads-agency-alternative' },
  { icon: 'ShoppingCart', title: 'Ecommerce Google Ads', description: 'Google Ads automation for ecommerce.', href: '/ecommerce-google-ads' },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">100% Free Google Ads Negative Keyword Generator</span>
              </div>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[52px]">
                Generate Smarter Google Ads Negative Keywords
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Build a complete Google Ads negative keywords list in seconds. Select categories, choose Broad, Phrase, or Exact match, instantly generate a formatted list, then copy or download it to reduce wasted clicks, improve search intent, and maximize your Google Ads performance.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-7 text-sm gap-2">
                  <Link href="#tool">Generate My List<ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-7 text-sm gap-2">
                  <Link href="#how-to-use"><Play className="h-4 w-4" />See Live Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tool */}
        <div id="tool">
          <NegativeKeywordGenerator />
        </div>

        {/* Why Negative Keywords Matter */}
        <section className="border-b border-border/60 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Why It Matters</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Negative Keywords Matter</h2>
              <p className="mt-3 text-base text-muted-foreground">Negative keywords are one of the fastest and most impactful ways to reduce wasted ad spend and improve campaign performance.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_CARDS.map((card) => {
                const Icon = card.icon === 'DollarSign' ? DollarSign : card.icon === 'TrendingUp' ? TrendingUp : card.icon === 'Gauge' ? Gauge : card.icon === 'MousePointerClick' ? MousePointerClick : card.icon === 'Search' ? Search : Ban;
                return (
                  <div key={card.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Common Categories */}
        <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Categories</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Most Common Negative Keyword Categories</h2>
              <p className="mt-3 text-base text-muted-foreground">These categories cover the majority of irrelevant searches across all industries.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {COMMON_CATEGORIES.map((cat) => {
                const Icon = cat.icon === 'Ban' ? Ban : cat.icon === 'Briefcase' ? Briefcase : cat.icon === 'BookOpen' ? BookOpen : cat.icon === 'Percent' ? Percent : cat.icon === 'Warehouse' ? Warehouse : cat.icon === 'Lock' ? Lock : cat.icon === 'Eye' ? Eye : cat.icon === 'HelpCircle' ? HelpCircle : cat.icon === 'FileText' ? FileText : cat.icon === 'Download' ? Download : cat.icon === 'Tag' ? Tag : cat.icon === 'Search' ? Search : Key;
                return (
                  <div key={cat.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Find New Negative Keywords */}
        <section className="border-b border-border/60 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Discovery</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Find New Negative Keywords</h2>
              <p className="mt-3 text-base text-muted-foreground">Beyond pre-built lists, here is where to find negative keywords specific to your account.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FIND_SOURCES.map((src) => {
                const Icon = src.icon === 'Search' ? Search : src.icon === 'BarChart3' ? BarChart3 : src.icon === 'Sparkles' ? Sparkles : src.icon === 'Building2' ? Building2 : Key;
                return (
                  <div key={src.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{src.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{src.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Mistakes</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Common Mistakes</h2>
              <p className="mt-3 text-base text-muted-foreground">Avoid these common negative keyword mistakes that can hurt your campaigns.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MISTAKES.map((m) => {
                const Icon = m.icon === 'Ban' ? Ban : m.icon === 'Settings' ? Settings : m.icon === 'Search' ? Search : m.icon === 'Layers' ? Layers : m.icon === 'RefreshCw' ? RefreshCw : Shield;
                return (
                  <div key={m.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Negative Keyword Discovery */}
        <section className="border-b border-border/60 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">AI Discovery</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">AI Negative Keyword Discovery</h2>
              <p className="mt-3 text-base text-muted-foreground">AI continuously finds new negative keywords from your real search terms data.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Low Intent Searches', description: 'AI identifies searches with no commercial intent and flags them for negative keyword addition.' },
                { title: 'Budget Leaks', description: 'AI detects search terms that consume budget without generating conversions.' },
                { title: 'Competitor Searches', description: 'AI finds competitor brand name searches that waste your budget on non-converting clicks.' },
                { title: 'Seasonal Waste', description: 'AI identifies seasonal search terms that become irrelevant outside their season.' },
                { title: 'Emerging Search Terms', description: 'AI catches new irrelevant search trends before they accumulate significant wasted spend.' },
                { title: 'Poor Converters', description: 'AI analyzes conversion data to find search terms that click but never convert.' },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 max-w-2xl"><AiInsight>AI negative keyword discovery typically finds 3-5x more wasted search terms than manual review, because AI analyzes every search term daily instead of weekly spot-checks.</AiInsight></div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Resources</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Related Resources</h2>
              <p className="mt-3 text-base text-muted-foreground">Explore more AI-powered Google Ads tools and resources.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {RESOURCES.map((res) => {
                const Icon = res.icon === 'Bot' ? Bot : res.icon === 'Sparkles' ? Sparkles : res.icon === 'Gauge' ? Gauge : res.icon === 'Settings' ? Settings : res.icon === 'BarChart3' ? BarChart3 : res.icon === 'Shield' ? Shield : res.icon === 'Target' ? Target : res.icon === 'Building2' ? Building2 : res.icon === 'ShoppingCart' ? ShoppingCart : Key;
                return (
                  <Link key={res.title} href={res.href} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-muted/30">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{res.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{res.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-border/60 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">FAQ</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-3 text-base text-muted-foreground">Everything you need to know about negative keywords and our free generator tool.</p>
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              {FAQS.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-border/60 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ready To Stop Paying For Irrelevant Clicks?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Generate your negative keywords list today, then let AI continuously discover and recommend new negative keywords from your real Google Ads search terms every day.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="h-12 px-8 text-sm gap-2">
                <Link href="#tool">Generate My List<ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-sm gap-2">
                <Link href="/google-ads-automation"><Play className="h-4 w-4" />Explore Google Ads Automation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
