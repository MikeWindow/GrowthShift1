import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

const INDUSTRY_LINKS = [
  { label: 'Roofing', href: '/industries/roofing' },
  { label: 'HVAC', href: '/industries/hvac' },
  { label: 'Plumbers', href: '/industries/plumbers' },
  { label: 'Electricians', href: '/industries/electricians' },
  { label: 'Appliance Repair', href: '/industries/appliance-repair' },
  { label: 'Pest Control', href: '/industries/google-ads-for-pest-control' },
  { label: 'Garage Door', href: '/industries/google-ads-for-garage-door' },
  { label: 'Junk Removal', href: '/industries/google-ads-for-junk-removal' },
  { label: 'Water Damage', href: '/industries/google-ads-for-water-damage-restoration' },
  { label: 'Cleaning Services', href: '/industries/google-ads-for-cleaning-services' },
  { label: 'Carpet Cleaning', href: '/industries/google-ads-for-carpet-cleaning' },
  { label: 'Window Cleaning', href: '/industries/google-ads-for-window-cleaning' },
  { label: 'Locksmiths', href: '/industries/google-ads-for-locksmiths' },
  { label: 'Flooring', href: '/industries/google-ads-for-flooring' },
  { label: 'Landscaping', href: '/industries/google-ads-for-landscaping' },
  { label: 'Lawyers', href: '/industries/google-ads-for-lawyers' },
  { label: 'Personal Injury', href: '/industries/google-ads-for-personal-injury-lawyers' },
  { label: 'Car Accident', href: '/industries/google-ads-for-car-accident-lawyers' },
  { label: 'DUI Lawyers', href: '/industries/google-ads-for-dui-lawyers' },
  { label: 'Criminal Defense', href: '/industries/google-ads-for-criminal-defense-lawyers' },
  { label: 'Divorce Lawyers', href: '/industries/google-ads-for-divorce-lawyers' },
  { label: 'Family Lawyers', href: '/industries/google-ads-for-family-lawyers' },
  { label: 'Bankruptcy Lawyers', href: '/industries/google-ads-for-bankruptcy-lawyers' },
  { label: 'Estate Planning', href: '/industries/google-ads-for-estate-planning-lawyers' },
  { label: 'Immigration Lawyers', href: '/industries/google-ads-for-immigration-lawyers' },
  { label: 'Employment Lawyers', href: '/industries/google-ads-for-employment-lawyers' },
  { label: 'Workers Comp', href: '/industries/google-ads-for-workers-compensation-lawyers' },
  { label: 'Medical Malpractice', href: '/industries/google-ads-for-medical-malpractice-lawyers' },
  { label: 'Disability Lawyers', href: '/industries/google-ads-for-social-security-disability-lawyers' },
  { label: 'Business Lawyers', href: '/industries/google-ads-for-business-lawyers' },
  { label: 'Real Estate Lawyers', href: '/industries/google-ads-for-real-estate-lawyers' },
  { label: 'Tax Lawyers', href: '/industries/google-ads-for-tax-lawyers' },
  { label: 'Probate Lawyers', href: '/industries/google-ads-for-probate-lawyers' },
];

const AI_TOOLS_LINKS = [
  { label: 'Google Ads Automation', href: '/google-ads-automation' },
  { label: 'AI Google Ads Management', href: '/ai-google-ads-management' },
  { label: 'Google Ads Optimization Software', href: '/google-ads-optimization-software' },
  { label: 'PPC Management Software', href: '/ppc-management-software' },
  { label: 'PPC Reporting Software', href: '/ppc-reporting-software' },
  { label: 'Google Ads AI Manager', href: '/google-ads-ai-manager' },
  { label: 'Google Ads Agency Alternative', href: '/google-ads-agency-alternative' },
];

const FREE_TOOLS_LINKS = [
  { label: 'Google Ads Audit', href: '/google-ads-audit' },
  { label: 'Negative Keyword Generator', href: '/tools/negative-keyword-generator' },
];

const COLUMNS = [
  {
    title: 'AI Tools',
    links: AI_TOOLS_LINKS,
  },
  {
    title: 'Free Tools',
    links: FREE_TOOLS_LINKS,
  },
  {
    title: 'Industries',
    links: INDUSTRY_LINKS,
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <TrendingUp className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight">GrowthShift</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI-powered Google Ads campaigns for local service businesses.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GrowthShift. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built for local service businesses.</p>
        </div>
      </div>
    </footer>
  );
}
