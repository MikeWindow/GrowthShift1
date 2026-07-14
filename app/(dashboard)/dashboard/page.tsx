import type { Metadata } from 'next';
import {
  BarChart3,
  FolderOpen,
  Wand2,
  MousePointerClick,
  Plus,
  ArrowRight,
  Clock,
  FileText,
  Sparkles,
  Activity,
  CheckCircle2,
  Circle,
} from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { StatCardComponent } from '@/components/shared/stat-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Project, ActivityItem } from '@/types';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const metadata: Metadata = { title: 'Dashboard' };

const stats = [
  {
    title: 'Total Projects',
    value: '12',
    change: '+2',
    changeType: 'positive' as const,
    description: 'from last month',
    icon: FolderOpen,
  },
  {
    title: 'Active Campaigns',
    value: '48',
    change: '+12%',
    changeType: 'positive' as const,
    description: 'vs. last period',
    icon: BarChart3,
  },
  {
    title: 'Total Spend',
    value: '$24,530',
    change: '+8.1%',
    changeType: 'negative' as const,
    description: 'vs. last month',
    icon: MousePointerClick,
  },
  {
    title: 'Campaigns Generated',
    value: '184',
    change: '+24',
    changeType: 'positive' as const,
    description: 'this month',
    icon: Wand2,
  },
];

const recentProjects: Project[] = [
  { id: '1', name: 'Summer Sale 2024', status: 'active', campaigns: 12, spend: '$8,420', updatedAt: '2 hours ago' },
  { id: '2', name: 'Brand Awareness Q4', status: 'active', campaigns: 8, spend: '$5,200', updatedAt: '5 hours ago' },
  { id: '3', name: 'Product Launch - Alpha', status: 'draft', campaigns: 3, spend: '$0', updatedAt: 'Yesterday' },
  { id: '4', name: 'Retargeting Campaign', status: 'paused', campaigns: 6, spend: '$3,100', updatedAt: '2 days ago' },
  { id: '5', name: 'Holiday Promotions', status: 'draft', campaigns: 0, spend: '$0', updatedAt: '3 days ago' },
];

const recentActivity: ActivityItem[] = [
  { id: '1', type: 'campaign_created', title: 'New campaign created', description: '"Holiday Sale" campaign added to Summer Sale 2024', timestamp: '10 min ago', user: 'You' },
  { id: '2', type: 'campaign_updated', title: 'Campaign updated', description: 'Budget updated for Brand Awareness Q4', timestamp: '1 hour ago', user: 'You' },
  { id: '3', type: 'template_used', title: 'Template applied', description: 'Search Ads Pro template used for Product Launch', timestamp: '3 hours ago', user: 'You' },
  { id: '4', type: 'project_created', title: 'Project created', description: 'Holiday Promotions project was created', timestamp: 'Yesterday', user: 'You' },
  { id: '5', type: 'campaign_created', title: 'New campaign created', description: '"Retargeting V2" campaign generated successfully', timestamp: '2 days ago', user: 'You' },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  paused: { label: 'Paused', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  draft: { label: 'Draft', className: 'bg-muted text-muted-foreground border-border' },
  archived: { label: 'Archived', className: 'bg-muted text-muted-foreground border-border' },
};

const activityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  campaign_created: CheckCircle2,
  campaign_updated: Activity,
  project_created: FolderOpen,
  template_used: FileText,
};

const quickActions = [
  { label: 'New Campaign', description: 'Generate a campaign with AI', icon: Wand2, href: '/campaign-builder', primary: true },
  { label: 'New Project', description: 'Organize your campaigns', icon: FolderOpen, href: '/projects', primary: false },
  { label: 'Browse Templates', description: 'Start from a template', icon: FileText, href: '/templates', primary: false },
  { label: 'View History', description: 'See past generations', icon: Clock, href: '/history', primary: false },
];

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 fade-in">
      {/* Header */}
      <PageHeader
        title="Dashboard"
        description="Overview of your campaigns, projects, and activity."
        actions={
          <Button size="sm" className="h-8 gap-1.5 text-xs" asChild>
            <Link href="/campaign-builder">
              <Plus className="h-3.5 w-3.5" />
              New Campaign
            </Link>
          </Button>
        }
      />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCardComponent key={stat.title} {...stat} />
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Recent Projects */}
        <div className="xl:col-span-2">
          <Card className="border-border shadow-none">
            <CardHeader className="flex flex-row items-center justify-between px-5 py-4">
              <CardTitle className="text-sm font-semibold">Recent Projects</CardTitle>
              <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs text-muted-foreground hover:text-foreground" asChild>
                <Link href="/projects">
                  View all <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </CardHeader>
            <Separator />
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {recentProjects.map((project) => {
                  const sc = statusConfig[project.status];
                  return (
                    <div
                      key={project.id}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted border border-border">
                        <FolderOpen className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground truncate">{project.name}</p>
                        <p className="text-[11px] text-muted-foreground">
                          {project.campaigns} campaign{project.campaigns !== 1 ? 's' : ''} · {project.spend}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className={cn('inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium', sc.className)}>
                          {sc.label}
                        </span>
                        <span className="hidden text-[11px] text-muted-foreground sm:block">{project.updatedAt}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card className="border-border shadow-none">
            <CardHeader className="flex flex-row items-center justify-between px-5 py-4">
              <CardTitle className="text-sm font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {recentActivity.map((item) => {
                  const Icon = activityIcons[item.type] ?? Circle;
                  return (
                    <div key={item.id} className="flex gap-3 px-5 py-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted mt-0.5">
                        <Icon className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0 space-y-0.5">
                        <p className="text-xs font-medium text-foreground leading-none">{item.title}</p>
                        <p className="text-[11px] text-muted-foreground leading-tight">{item.description}</p>
                        <p className="text-[10px] text-muted-foreground/70">{item.timestamp}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Quick Actions</span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.label} href={action.href}>
                <div
                  className={cn(
                    'group flex items-start gap-3 rounded-lg border p-4 transition-all hover:shadow-sm cursor-pointer',
                    action.primary
                      ? 'border-primary/30 bg-primary/10 hover:border-primary/50 hover:bg-primary/10'
                      : 'border-border bg-card hover:border-border/80 hover:bg-muted/40'
                  )}
                >
                  <div
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-md border',
                      action.primary
                        ? 'border-primary/30 bg-primary/10'
                        : 'border-border bg-muted/50'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-4 w-4',
                        action.primary ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground transition-colors'
                      )}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className={cn('text-xs font-semibold', action.primary ? 'text-primary' : 'text-foreground')}>
                      {action.label}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{action.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
