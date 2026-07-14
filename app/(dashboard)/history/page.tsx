import type { Metadata } from 'next';
import { Filter, Search, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { HistoryEntry } from '@/types';

export const metadata: Metadata = { title: 'History' };

const historyEntries: HistoryEntry[] = [
  { id: '1', type: 'Campaign Generated', title: 'Holiday Sale Search Campaign', details: 'Generated 15 ad groups with 45 headlines', status: 'success', timestamp: 'Today, 10:24 AM' },
  { id: '2', type: 'Campaign Generated', title: 'Brand Awareness Display', details: 'Generated 8 ad groups with responsive ads', status: 'success', timestamp: 'Today, 9:15 AM' },
  { id: '3', type: 'Template Applied', title: 'Search Ads Pro → Product Launch', details: 'Template applied to Product Launch - Alpha', status: 'success', timestamp: 'Yesterday, 4:30 PM' },
  { id: '4', type: 'Campaign Generated', title: 'Q4 Shopping Campaign', details: 'Generation failed — invalid product feed', status: 'failed', timestamp: 'Yesterday, 2:10 PM' },
  { id: '5', type: 'Campaign Generated', title: 'Retargeting V2', details: 'Generated 5 ad groups with remarketing lists', status: 'success', timestamp: 'Dec 18, 11:00 AM' },
  { id: '6', type: 'Export', title: 'Q3 Campaign Export', details: 'Exporting to Google Ads format...', status: 'pending', timestamp: 'Dec 18, 10:45 AM' },
  { id: '7', type: 'Campaign Generated', title: 'Healthcare Lead Gen', details: 'Generated 20 ad groups with HIPAA-safe copy', status: 'success', timestamp: 'Dec 17, 3:20 PM' },
];

const statusConfig = {
  success: { icon: CheckCircle2, className: 'text-emerald-600', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', label: 'Success' },
  failed: { icon: XCircle, className: 'text-red-500', bg: 'bg-red-50 text-red-700 border-red-200', label: 'Failed' },
  pending: { icon: Clock, className: 'text-amber-500', bg: 'bg-amber-50 text-amber-700 border-amber-200', label: 'Pending' },
};

export default function HistoryPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 fade-in">
      <PageHeader
        title="History"
        description="A full log of your campaign generation and export activity."
      />

      {/* Filters */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search history..." className="pl-8 h-8 text-xs" />
        </div>
        <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
          <Filter className="h-3.5 w-3.5" />
          Filter
        </Button>
      </div>

      {/* History Table */}
      <Card className="border-border shadow-none">
        <CardHeader className="px-5 py-4">
          <CardTitle className="text-sm font-semibold">Activity Log</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-0">
          <div className="hidden grid-cols-[1fr_120px_120px_100px] gap-4 px-5 py-2.5 border-b border-border bg-muted/30 sm:grid">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Action</span>
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Type</span>
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Date</span>
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Status</span>
          </div>
          <div className="divide-y divide-border">
            {historyEntries.map((entry) => {
              const sc = statusConfig[entry.status];
              const StatusIcon = sc.icon;
              return (
                <div
                  key={entry.id}
                  className="grid grid-cols-1 gap-2 px-5 py-3.5 hover:bg-muted/20 transition-colors sm:grid-cols-[1fr_120px_120px_100px] sm:items-center sm:gap-4"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <StatusIcon className={cn('h-4 w-4 shrink-0 mt-0.5', sc.className)} />
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-foreground truncate">{entry.title}</p>
                      <p className="text-[11px] text-muted-foreground">{entry.details}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground pl-7 sm:pl-0">{entry.type}</span>
                  <span className="text-[11px] text-muted-foreground pl-7 sm:pl-0">{entry.timestamp}</span>
                  <span className={cn('inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ml-7 sm:ml-0', sc.bg)}>
                    {sc.label}
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
