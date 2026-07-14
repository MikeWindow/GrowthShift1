'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IndustriesDropdown } from '@/components/marketing/industries-dropdown';
import { NavDropdown, type NavLinkItem } from '@/components/marketing/nav-dropdown';

const AI_TOOLS_LINKS: NavLinkItem[] = [
  { label: 'Google Ads Automation', href: '/google-ads-automation', description: 'Automate Google Ads with AI' },
  { label: 'AI Google Ads Management', href: '/ai-google-ads-management', description: 'AI-powered campaign management' },
  { label: 'Google Ads Optimization Software', href: '/google-ads-optimization-software', description: 'AI campaign optimization' },
  { label: 'PPC Management Software', href: '/ppc-management-software', description: 'AI PPC management platform' },
  { label: 'PPC Reporting Software', href: '/ppc-reporting-software', description: 'AI dashboards & reports' },
  { label: 'Google Ads AI Manager', href: '/google-ads-ai-manager', description: 'Your 24/7 AI agent' },
  { label: 'Google Ads Agency Alternative', href: '/google-ads-agency-alternative', description: 'Replace your agency with AI' },
];

const FREE_TOOLS_LINKS: NavLinkItem[] = [
  { label: 'Google Ads Audit', href: '/google-ads-audit', description: 'Free AI-powered audit tool' },
  { label: 'Negative Keyword Generator', href: '/tools/negative-keyword-generator', description: 'Free negative keyword tool' },
];

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">GrowthShift</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <NavDropdown label="AI Tools" links={AI_TOOLS_LINKS} />
            <IndustriesDropdown />
            <NavDropdown label="Free Tools" links={FREE_TOOLS_LINKS} />
            <Link href="/#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="/#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden h-9 text-sm sm:inline-flex" asChild>
            <Link href="/dashboard">Login</Link>
          </Button>
          <Button size="sm" className="hidden h-9 text-sm gap-1.5 sm:inline-flex" asChild>
            <Link href="/analyze-business">
              Start Building
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <NavDropdown label="AI Tools" links={AI_TOOLS_LINKS} />
            <IndustriesDropdown />
            <NavDropdown label="Free Tools" links={FREE_TOOLS_LINKS} />
            <Link
              href="/#features"
              className="py-2 text-sm font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="py-2 text-sm font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-border/60 pt-4">
            <Button variant="ghost" size="sm" className="h-10 justify-start text-sm" asChild>
              <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                Login
              </Link>
            </Button>
            <Button size="sm" className="h-10 justify-center text-sm gap-1.5" asChild>
              <Link href="/analyze-business" onClick={() => setMobileOpen(false)}>
                Start Building
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
