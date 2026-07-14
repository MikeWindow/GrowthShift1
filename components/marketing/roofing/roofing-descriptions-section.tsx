import { FileText, ShieldCheck, Zap, Phone, Building, Home, HardHat, CloudRain } from 'lucide-react';
import { AiInsight } from '@/components/marketing/roofing/ai-insight';

const DESC_POINTS = [
  {
    icon: FileText,
    title: '4 Descriptions Per Ad Group',
    description:
      'Responsive search ads support four descriptions. GrowthShift writes each one with a different angle — speed, trust, value, and urgency — so Google can rotate the most effective combination across the 15 headlines.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust Signals',
    description:
      'Roofing ad copy includes trust signals like licensed and insured, family-owned, warranty available, and BBB accreditation. These reduce friction for homeowners comparing multiple roofers and improve conversion rate.',
  },
  {
    icon: Zap,
    title: 'Benefits First',
    description:
      'Descriptions lead with the homeowner\'s outcome — a leak-free roof, fast storm response, free inspection — not the contractor\'s process. Benefit-driven copy outperforms feature lists in roofing advertising across every ad group.',
  },
  {
    icon: Phone,
    title: 'Strong Call To Action',
    description:
      'Every description ends with a clear CTA: "Call now for a free roof inspection", "Schedule your estimate today". Roofing phone call leads convert at a higher rate than form submissions because urgency drives action.',
  },
  {
    icon: Home,
    title: 'Residential Roofing Descriptions',
    description:
      'Residential roofing descriptions speak directly to homeowners — emotional reassurance, family safety, curb appeal, and financing options. The tone is approachable and trust-building, not technical.',
  },
  {
    icon: Building,
    title: 'Commercial Roofing Descriptions',
    description:
      'Commercial roofing descriptions target property managers and business owners with a professional tone — uptime guarantees, maintenance contracts, minimal disruption, and compliance with building codes.',
  },
  {
    icon: HardHat,
    title: 'Roof Replacement Descriptions',
    description:
      'Roof replacement descriptions emphasize lifetime value, warranty coverage, and financing. Because roof replacement is a major investment, the copy addresses price concerns by focusing on longevity and protection.',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Roofing Descriptions',
    description:
      'Storm damage roofing descriptions lead with speed and insurance expertise: "Fast storm response — we work with your insurance", "Emergency tarping and inspection available 24/7". These target homeowners in urgent need after weather events.',
  },
];

export function RoofingDescriptionsSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Ad Copy
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Descriptions Generated
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Roofing Google Ads descriptions carry the details that headlines cannot. GrowthShift writes four
            descriptions per ad group for responsive search ads, each structured for maximum relevance with
            trust signals, benefits, and a strong call to action.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DESC_POINTS.map((point) => {
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

        <div className="mt-6 max-w-2xl">
          <AiInsight>
            Phone call campaigns perform better for emergency roofing services — homeowners in urgent need prefer calling over filling forms.
          </AiInsight>
        </div>
      </div>
    </section>
  );
}
