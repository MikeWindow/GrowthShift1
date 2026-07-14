import { LayoutTemplate, FileText, CheckCircle2, Globe, Gauge, Phone, FormInput, MousePointerClick, ArrowUpToLine } from 'lucide-react';
import { AiInsight } from '@/components/marketing/roofing/ai-insight';

const LANDING_POINTS = [
  {
    icon: LayoutTemplate,
    title: 'Roofing Landing Page Template',
    description:
      'GrowthShift recommends a roofing landing page template proven for phone call leads — hero with phone number, trust badges, service list, and a single CTA above the fold.',
  },
  {
    icon: FileText,
    title: 'Roofing Landing Page Examples',
    description:
      'See roofing landing page examples tailored to each ad group. Roof replacement pages differ from storm damage pages, which differ from commercial roofing pages — message match matters for conversion rate.',
  },
  {
    icon: CheckCircle2,
    title: 'High Converting Roofing Landing Page',
    description:
      'A high converting roofing landing page reduces form fields, uses click-to-call buttons, and loads in under two seconds. GrowthShift flags missing elements on your existing pages through the AI Google Ads Audit.',
  },
  {
    icon: Globe,
    title: 'Roofing Website Landing Page',
    description:
      'Your roofing website landing page should match the ad\'s promise exactly. If the ad says "storm damage roof repair", the landing page headline must say the same — not "general roofing services".',
  },
  {
    icon: LayoutTemplate,
    title: 'Roofing Landing Page Builder & Design',
    description:
      'GrowthShift includes a roofing landing page builder with design templates optimized for conversion. Roofing landing page design follows a proven structure: urgency headline, trust signals, service details, and a prominent phone number.',
  },
  {
    icon: ArrowUpToLine,
    title: 'Above The Fold CTA',
    description:
      'Every roofing company landing page needs a call to action above the fold — before the user scrolls. Phone number and "Get Free Estimate" buttons must be visible immediately on both desktop and mobile.',
  },
  {
    icon: Gauge,
    title: 'Landing Page Speed',
    description:
      'Landing page speed directly affects both conversion rate and Quality Score. GrowthShift flags pages that load slower than two seconds and recommends image compression, lazy loading, and minimal scripts.',
  },
  {
    icon: Phone,
    title: 'Click To Call & Call Tracking',
    description:
      'Click-to-call buttons are essential on mobile — most roofing searches happen on phones. Call tracking assigns a unique forwarding number to each campaign so you know exactly which ads generate calls.',
  },
  {
    icon: FormInput,
    title: 'Lead Forms',
    description:
      'Roofing lead forms should request minimal information — name, phone, and service type. Every additional field reduces submission rate. GrowthShift recommends a two-step form or click-to-call as the primary conversion path.',
  },
];

export function RoofingLandingPageSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Landing Pages
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Landing Page Recommendations
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Great roofing ads fail if the landing page underperforms. GrowthShift reviews your roofing
            landing page and provides specific recommendations to increase conversion rate — from page speed
            to call tracking to above-the-fold CTAs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LANDING_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
