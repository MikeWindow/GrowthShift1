import type { Metadata } from 'next';
import { Plus, Search, FolderOpen, Filter } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { EmptyState } from '@/components/shared/empty-state';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

export const metadata: Metadata = { title: 'Projects' };

const projects: Project[] = [
  { id: '1', name: 'Summer Sale 2024', status: 'active', campaigns: 12, spend: '$8,420', updatedAt: '2 hours ago' },
  { id: '2', name: 'Brand Awareness Q4', status: 'active', campaigns: 8, spend: '$5,200', updatedAt: '5 hours ago' },
  { id: '3', name: 'Product Launch - Alpha', status: 'draft', campaigns: 3, spend: '$0', updatedAt: 'Yesterday' },
  { id: '4', name: 'Retargeting Campaign', status: 'paused', campaigns: 6, spend: '$3,100', updatedAt: '2 days ago' },
  { id: '5', name: 'Holiday Promotions', status: 'draft', campaigns: 0, spend: '$0', updatedAt: '3 days ago' },
  { id: '6', name: 'Lead Gen — Healthcare', status: 'archived', campaigns: 15, spend: '$12,800', updatedAt: '1 week ago' },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  paused: { label: 'Paused', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  draft: { label: 'Draft', className: 'bg-muted text-muted-foreground border-border' },
  archived: { label: 'Archived', className: 'bg-muted text-muted-foreground border-border' },
};

export default function ProjectsPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 fade-in">
      <PageHeader
        title="Projects"
        description="Manage your advertising projects and campaigns."
        badge={String(projects.length)}
        actions={
          <Button size="sm" className="h-8 gap-1.5 text-xs">
            <Plus className="h-3.5 w-3.5" />
            New Project
          </Button>
        }
      />

      {/* Filters */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search projects..." className="pl-8 h-8 text-xs" />
        </div>
        <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
          <Filter className="h-3.5 w-3.5" />
          Filter
        </Button>
      </div>

      {/* Projects Table */}
      <Card className="border-border shadow-none">
        <CardHeader className="px-5 py-4">
          <CardTitle className="text-sm font-semibold">All Projects</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-0">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_80px_100px_120px_80px] gap-4 px-5 py-2.5 border-b border-border bg-muted/30">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Project</span>
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Status</span>
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Campaigns</span>
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Spend</span>
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Updated</span>
          </div>
          <div className="divide-y divide-border">
            {projects.map((project) => {
              const sc = statusConfig[project.status];
              return (
                <div
                  key={project.id}
                  className="grid grid-cols-[1fr_80px_100px_120px_80px] gap-4 items-center px-5 py-3.5 hover:bg-muted/20 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted border border-border">
                      <FolderOpen className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <span className="text-xs font-medium text-foreground truncate">{project.name}</span>
                  </div>
                  <span className={cn('inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-medium', sc.className)}>
                    {sc.label}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.campaigns}</span>
                  <span className="text-xs text-foreground font-medium">{project.spend}</span>
                  <span className="text-[11px] text-muted-foreground">{project.updatedAt}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
