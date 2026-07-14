import {
  Settings2,
  Search,
  Type,
  FileText,
  Link2,
  Ban,
  Users,
  LayoutTemplate,
} from 'lucide-react';

const GENERATES = [
  {
    icon: Settings2,
    title: 'Campaign Settings',
    description:
      'Complete roofing Google Ads campaign configuration including bidding strategy, budget, locations, ad schedule, and conversion tracking for phone call leads.',
  },
  {
    icon: Search,
    title: 'Keyword Groups',
    description:
      'Themed roofing keyword groups organized by service type, location, and intent — from roof replacement keywords to storm damage roofing keywords.',
  },
  {
    icon: Type,
    title: 'Google Ads Headlines',
    description:
      '15 roofing ad headlines per ad group using keyword insertion, location modifiers, and strong CTAs designed for high Quality Score and click-through rate.',
  },
  {
    icon: FileText,
    title: 'Descriptions',
    description:
      'Four descriptions per ad group blending benefits, trust signals, and calls to action — optimized for responsive search ads in the roofing vertical.',
  },
  {
    icon: Link2,
    title: 'Extensions',
    description:
      'Call extensions, location extensions, sitelinks, callouts, and structured snippets pre-filled with roofing company details and service offerings.',
  },
  {
    icon: Ban,
    title: 'Negative Keywords',
    description:
      'A roofing negative keywords list that blocks irrelevant searches — DIY, jobs, careers, supplies, and competitor terms — to reduce wasted spend.',
  },
  {
    icon: Users,
    title: 'Audience Suggestions',
    description:
      'In-market and affinity audiences tailored to roofing, including homeowners, home improvement researchers, and storm-affected geographic segments.',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Page Recommendations',
    description:
      'High converting roofing landing page templates with layout guidance, trust elements, and call-to-action placement based on your campaign goals.',
  },
];

export function RoofingGeneratesSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            What We Generate
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What GrowthShift Generates
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Every roofing Google Ads campaign built by GrowthShift includes eight complete components —
            no partial outputs, no manual stitching.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GENERATES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
