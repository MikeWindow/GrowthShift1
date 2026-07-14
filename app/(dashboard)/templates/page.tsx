import type { Metadata } from 'next';
import { Plus, Search, Star, FileText } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Template } from '@/types';

export const metadata: Metadata = { title: 'Templates' };

const templates: Template[] = [
  { id: '1', name: 'Search Ads Pro', description: 'High-converting search campaign structure with SKAG methodology and negative keyword lists.', category: 'Search', usageCount: 342, tags: ['Search', 'SKAG', 'High-intent'] },
  { id: '2', name: 'E-commerce Basic', description: 'Shopping campaign structure optimized for product listing ads and dynamic remarketing.', category: 'Shopping', usageCount: 218, tags: ['Shopping', 'E-commerce', 'DPA'] },
  { id: '3', name: 'Lead Generation', description: 'B2B lead gen structure with call extensions, sitelinks, and lead form extensions.', category: 'Search', usageCount: 195, tags: ['Lead Gen', 'B2B', 'Extensions'] },
  { id: '4', name: 'Brand Awareness', description: 'Display and YouTube campaign structure for brand awareness and reach objectives.', category: 'Display', usageCount: 164, tags: ['Display', 'Brand', 'Awareness'] },
  { id: '5', name: 'Retargeting Suite', description: 'Full remarketing funnel with audience segmentation by funnel stage and recency.', category: 'Display', usageCount: 128, tags: ['Retargeting', 'Funnel', 'Audiences'] },
  { id: '6', name: 'Performance Max', description: 'Asset-optimized PMax campaign with all conversion goals and audience signals configured.', category: 'Performance Max', usageCount: 97, tags: ['PMax', 'Automation', 'All channels'] },
  { id: '7', name: 'Local Business', description: 'Local campaign structure with location extensions, call ads, and geo-targeting.', category: 'Search', usageCount: 89, tags: ['Local', 'Geo', 'Call ads'] },
  { id: '8', name: 'App Promotion', description: 'App install and engagement campaign structure for iOS and Android promotion.', category: 'App', usageCount: 54, tags: ['App', 'Mobile', 'Install'] },
];

const categories = ['All', 'Search', 'Shopping', 'Display', 'Performance Max', 'App'];

export default function TemplatesPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 fade-in">
      <PageHeader
        title="Templates"
        description="Pre-built campaign structures to accelerate your workflow."
        badge={String(templates.length)}
        actions={
          <Button size="sm" className="h-8 gap-1.5 text-xs">
            <Plus className="h-3.5 w-3.5" />
            Create Template
          </Button>
        }
      />

      {/* Search + Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search templates..." className="pl-8 h-8 text-xs" />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          {categories.map((cat, i) => (
            <Button
              key={cat}
              variant={i === 0 ? 'secondary' : 'ghost'}
              size="sm"
              className="h-7 text-xs shrink-0 px-3"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {templates.map((template) => (
          <Card key={template.id} className="border-border shadow-none hover:shadow-sm transition-all hover:border-border/80 group">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted border border-border">
                  <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <Badge variant="outline" className="text-[10px] h-4 shrink-0">{template.category}</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-foreground">{template.name}</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{template.description}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {template.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[10px] h-4 px-1.5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="px-5 py-3 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Star className="h-3 w-3" />
                {template.usageCount} uses
              </div>
              <Button size="sm" variant="outline" className="h-6 text-[10px] px-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Use Template
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
