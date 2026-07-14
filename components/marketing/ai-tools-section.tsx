import {
  Wand2,
  Search,
  ScanSearch,
  LayoutTemplate,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const TOOLS = [
  {
    icon: Wand2,
    title: 'AI Google Ads Builder',
    description: 'Generate complete Search campaigns from your website in one click.',
  },
  {
    icon: Search,
    title: 'AI Keyword Generator',
    description: 'Branded, service, and location keywords grouped by intent.',
  },
  {
    icon: ScanSearch,
    title: 'AI Google Ads Audit',
    description: 'Identify wasted spend, missing extensions, and weak ad copy.',
  },
  {
    icon: LayoutTemplate,
    title: 'AI Landing Page Builder',
    description: 'Conversion-optimized landing pages tailored to each ad group.',
  },
  {
    icon: TrendingUp,
    title: 'AI Campaign Optimizer',
    description: 'Continuous bid and budget recommendations based on performance.',
  },
];

export function AiToolsSection() {
  return (
    <section id="ai-tools" className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            AI Tools
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A full toolkit for Google Ads
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Five AI tools that take you from analysis to optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.title} className="border-border shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{tool.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
