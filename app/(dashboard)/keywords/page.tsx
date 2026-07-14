'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Search, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useWorkflow } from '@/contexts/workflow-context';

export default function KeywordsPage() {
  const router = useRouter();
  const { businessProfile, campaignConfig } = useWorkflow();

  useEffect(() => {
    if (!businessProfile) router.replace('/analyze-business');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!businessProfile || !campaignConfig) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-sm text-muted-foreground">Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 space-y-8 fade-in">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-lg font-semibold tracking-tight text-foreground">Keywords</h1>
        <p className="text-sm text-muted-foreground max-w-xl">
          AI-generated keyword lists for your Google Ads Search campaign.
        </p>
      </div>

      {/* Placeholder */}
      <Card className="border-border shadow-none">
        <CardContent className="py-16 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted border border-border">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-background border border-border">
              <Lock className="h-2.5 w-2.5 text-muted-foreground" />
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-sm font-semibold text-foreground">Keyword Generation</h2>
            <Badge variant="secondary" className="text-[10px] h-4">Coming Next</Badge>
          </div>
          <p className="text-xs text-muted-foreground max-w-sm leading-relaxed mb-1">
            This module will generate themed keyword groups for{' '}
            <span className="font-medium text-foreground">{campaignConfig.name}</span> including
            branded, service, and location-based terms.
          </p>
          <p className="text-[11px] text-muted-foreground/60 mt-1">
            Campaign configuration confirmed · Ready for keyword generation
          </p>
        </CardContent>
      </Card>

      {/* Campaign context summary */}
      <div className="rounded-lg border border-border bg-muted/20 px-5 py-4">
        <p className="text-xs font-semibold text-foreground mb-3">Campaign Context</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
          {[
            { label: 'Campaign', value: campaignConfig.name },
            { label: 'Goal', value: campaignConfig.goal },
            { label: 'Bidding', value: campaignConfig.biddingStrategy },
            { label: 'Locations', value: campaignConfig.locations },
            { label: 'Business', value: businessProfile.name },
            { label: 'Primary Service', value: businessProfile.primaryService },
          ].map((row) => (
            <div key={row.label}>
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                {row.label}
              </p>
              <p className="text-xs text-foreground mt-0.5 truncate">{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-4 py-6 pb-28">
        <Separator className="w-16" />
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="h-9 px-5 text-sm gap-1.5"
            onClick={() => router.push('/campaign-generation')}
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
          <Button className="h-9 px-6 text-sm gap-2" disabled>
            Generate Keywords
          </Button>
        </div>
        <p className="text-[11px] text-muted-foreground">Keyword generation coming in the next build.</p>
      </div>
    </div>
  );
}
