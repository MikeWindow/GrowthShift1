import { HardHat, Wrench, Layers, Building, Home, Siren, CloudRain, FileText, ClipboardCheck, Droplet, Hammer } from 'lucide-react';

const SERVICES = [
  { icon: HardHat, label: 'Roof Replacement', desc: 'Full tear-off and replacement campaigns targeting homeowners planning a new roof.' },
  { icon: Wrench, label: 'Roof Repair', desc: 'Targeted ads for leak fixes, shingle replacement, and minor roofing repairs.' },
  { icon: Layers, label: 'Metal Roofing', desc: 'Dedicated ad groups for metal roofing installation and replacement leads.' },
  { icon: Building, label: 'Commercial Roofing', desc: 'B2B campaigns for flat roofs, coating, and commercial roof maintenance contracts.' },
  { icon: Home, label: 'Residential Roofing', desc: 'Homeowner-focused ads with emotional triggers and financing messaging.' },
  { icon: Siren, label: 'Emergency Roofing', desc: 'Urgent ad copy and call-only formats for after-hours emergency roofing leads.' },
  { icon: CloudRain, label: 'Storm Damage Roofing', desc: 'Storm-activated campaigns triggered by weather events in your service areas.' },
  { icon: FileText, label: 'Insurance Claims', desc: 'Keywords and ad copy aligned with homeowners navigating the insurance process.' },
  { icon: ClipboardCheck, label: 'Roof Inspection', desc: 'Lead generation for free roof inspections and damage assessments.' },
  { icon: Droplet, label: 'Roof Leak Repair', desc: 'High-intent keywords for active leaks requiring immediate attention.' },
  { icon: Hammer, label: 'Roof Installation', desc: 'New construction and addition roofing campaigns for builders and homeowners.' },
];

export function RoofingServicesSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-20 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Built For Roofing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built Specifically For Roofing Companies
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            GrowthShift understands the roofing vertical. Every campaign is structured around the services
            roofers actually sell — not generic home improvement categories.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">{service.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
