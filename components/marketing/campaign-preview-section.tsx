import {
  Building2,
  Settings2,
  Search,
  Type,
  FileText,
  Link2,
  CheckCircle2,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PREVIEW_ITEMS = [
  {
    icon: Building2,
    label: 'Business Summary',
    value: 'Kelly Roofing · Florida',
    detail: 'Roof Replacement · Residential',
  },
  {
    icon: Settings2,
    label: 'Campaign Configuration',
    value: 'Search · Phone Call Leads',
    detail: '$100/day · Maximize Clicks',
  },
  {
    icon: Search,
    label: 'Keywords',
    value: '42 keywords',
    detail: 'Roof replacement · Storm damage · Metal roofing',
  },
  {
    icon: Type,
    label: 'Headlines',
    value: '15 headlines',
    detail: 'Expert Roof Replacement in Florida',
  },
  {
    icon: FileText,
    label: 'Descriptions',
    value: '4 descriptions',
    detail: 'Licensed & insured · Free estimates available',
  },
  {
    icon: Link2,
    label: 'Extensions',
    value: '8 extensions',
    detail: 'Call · Location · Sitelinks · Callouts',
  },
];

export function CampaignPreviewSection() {
  return (
    <section id="features" className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <Badge variant="secondary" className="mb-3 text-xs">Campaign Preview</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything generated from one URL
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From business analysis to final export — each card below is generated automatically
            from your website.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="border-border shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Ready for export
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
