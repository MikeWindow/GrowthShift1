import Link from 'next/link';
import {
  Building2,
  Settings2,
  Search,
  Type,
  FileText,
  Link2,
  LayoutTemplate,
  ArrowRight,
  CheckCircle2,
  Ban,
  Phone,
  MapPin,
  Gauge,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const KEYWORDS = [
  '"roof replacement"',
  '"roof repair"',
  '"storm damage roof repair"',
  '"metal roofing installation"',
  '"roof leak repair"',
  '"roof inspection"',
  '"commercial roofing"',
  '"emergency roof repair"',
  '"roof replacement florida"',
  '"roofing contractor near me"',
];

const NEGATIVE_KEYWORDS = ['DIY', 'Jobs', 'Supplies', 'Training', 'Wholesale'];

const HEADLINES = [
  'Expert Roof Replacement in Florida',
  'Licensed & Insured Roofing Contractors',
  'Free Roof Inspection — Call Today',
  'Storm Damage? We Respond Fast',
  'Trusted Florida Roofers Since 2008',
  'Same-Day Roof Leak Repair',
];

const DESCRIPTIONS = [
  'Family-owned roofing company serving Florida. Free estimates, licensed and insured. Call now for a same-day inspection.',
  'Storm damage? Our certified team works directly with your insurance. 24/7 emergency response across Florida.',
];

const ASSETS = [
  { label: 'Callouts', status: 'Ready' },
  { label: 'Sitelinks', status: 'Ready' },
  { label: 'Structured Snippets', status: 'Ready' },
  { label: 'Call Extension', status: 'Ready' },
  { label: 'Location Extension', status: 'Ready' },
];

const LANDING_CHECKLIST = [
  { label: 'Hero CTA', done: true },
  { label: 'Click To Call', done: true },
  { label: 'Trust Signals', done: true },
  { label: 'Fast Loading', done: true },
  { label: 'Conversion Form', done: true },
];

function MiniCard({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
          <Icon className="h-4 w-4 text-foreground" />
        </div>
        <h3 className="text-sm font-semibold text-foreground">{label}</h3>
      </div>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/50 py-2 last:border-b-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-xs font-medium text-foreground">{value}</span>
    </div>
  );
}

export function RoofingCampaignPreviewSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <Badge variant="secondary" className="mb-3 text-xs">Live AI Campaign Preview</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See exactly what GrowthShift generates
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            After analyzing a roofing business, GrowthShift builds a complete Google Ads Search campaign.
            Here is a realistic preview using dummy data for Kelly Roofing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Business Summary */}
          <MiniCard icon={Building2} label="Business Summary">
            <div className="space-y-2.5">
              <Row label="Business" value="Kelly Roofing" />
              <Row label="Industry" value="Roofing" />
              <Row label="Primary Service" value="Roof Replacement" />
              <Row label="Service Areas" value="Florida" />
              <div className="flex gap-2 pt-1">
                <Badge variant="outline" className="text-[10px]">Commercial</Badge>
                <Badge variant="outline" className="text-[10px]">Residential</Badge>
              </div>
            </div>
          </MiniCard>

          {/* Campaign Configuration */}
          <MiniCard icon={Settings2} label="Campaign Configuration">
            <div className="space-y-1">
              <Row label="Campaign Name" value="Kelly Roofing | Roof Replacement | Florida" />
              <Row label="Campaign Type" value="Search" />
              <Row label="Goal" value="Phone Calls" />
              <Row label="Network" value="Google Search" />
              <Row label="Budget" value="$100/day" />
              <Row label="Bid Strategy" value="Maximize Clicks" />
              <Row label="Language" value="English" />
              <Row label="Locations" value="Florida" />
            </div>
          </MiniCard>

          {/* Keywords */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
                  <Search className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Keywords</h3>
              </div>
              <Badge variant="secondary" className="text-[10px]">52 Keywords Generated</Badge>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-medium text-muted-foreground">Phrase Match Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {KEYWORDS.map((kw) => (
                    <code
                      key={kw}
                      className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-foreground"
                    >
                      {kw}
                    </code>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Ban className="h-3.5 w-3.5" /> Negative Keywords
                </p>
                <div className="flex flex-wrap gap-2">
                  {NEGATIVE_KEYWORDS.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground line-through"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Search Ads - Headlines */}
          <MiniCard icon={Type} label="Responsive Search Ads">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Headlines</span>
              <Badge variant="secondary" className="text-[10px]">15 Generated · Showing 6</Badge>
            </div>
            <div className="space-y-2">
              {HEADLINES.map((h, i) => (
                <div key={h} className="flex items-start gap-2 rounded-lg border border-border/50 bg-muted/20 px-3 py-2">
                  <span className="text-[10px] font-semibold text-muted-foreground">{i + 1}</span>
                  <span className="text-xs font-medium text-foreground">{h}</span>
                </div>
              ))}
            </div>
          </MiniCard>

          {/* Descriptions */}
          <MiniCard icon={FileText} label="Descriptions">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Descriptions</span>
              <Badge variant="secondary" className="text-[10px]">4 Generated · Showing 2</Badge>
            </div>
            <div className="space-y-2">
              {DESCRIPTIONS.map((d, i) => (
                <div key={i} className="rounded-lg border border-border/50 bg-muted/20 px-3 py-2.5">
                  <p className="text-xs leading-relaxed text-foreground">{d}</p>
                </div>
              ))}
            </div>
          </MiniCard>

          {/* Assets */}
          <MiniCard icon={Link2} label="Assets">
            <div className="space-y-2">
              {ASSETS.map((asset) => (
                <div key={asset.label} className="flex items-center justify-between border-b border-border/50 py-2 last:border-b-0">
                  <span className="text-xs font-medium text-foreground">{asset.label}</span>
                  <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10">
                    <CheckCircle2 className="mr-1 h-3 w-3" /> {asset.status}
                  </Badge>
                </div>
              ))}
            </div>
          </MiniCard>

          {/* Landing Page Review */}
          <MiniCard icon={LayoutTemplate} label="Landing Page Review">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
                <span className="text-lg font-bold text-primary">92</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Overall Score</p>
                <p className="text-sm font-semibold text-foreground">92/100</p>
              </div>
            </div>
            <div className="space-y-2">
              {LANDING_CHECKLIST.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </MiniCard>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-8 text-sm gap-2">
            <Link href="/analyze-business">
              Generate My Campaign
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-sm">
            <Link href="/campaign-generation">View Full Campaign</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
