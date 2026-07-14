'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  Settings2,
  Target,
  CheckCircle2,
  LayoutGrid,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { WorkflowStepIndicator } from '@/components/shared/workflow-step-indicator';
import { EditableRow } from '@/components/shared/editable-field';
import { useWorkflow } from '@/contexts/workflow-context';
import type { BusinessProfile, CampaignConfig } from '@/types';

// ── Helpers ────────────────────────────────────────────────────────────────

function buildDefaultConfig(profile: BusinessProfile): CampaignConfig {
  const primaryArea = profile.serviceAreas[0] ?? 'Local';
  return {
    name: `${profile.name} | ${profile.primaryService} | ${primaryArea}`,
    type: 'Search',
    goal: 'Phone Call Leads',
    conversionType: 'Calls',
    network: 'Google Search Only',
    language: 'English',
    locations: profile.serviceAreas.join(', '),
    budget: '$100 / day',
    biddingStrategy: 'Maximize Clicks',
    customerAcquisition: 'Existing + New Customers',
    adSchedule: 'Mon – Sun · 6 AM – 10 PM',
    startDate: 'Today',
  };
}

const CAMPAIGN_SETTINGS_CHIPS = [
  'Search Network',
  'Phrase Match Keywords',
  'Call Extensions',
  'Location Extensions',
  'Lead Form',
  'Call Reporting',
  'Ad Rotation',
  'Manual Locations',
];

// ── Section Header ─────────────────────────────────────────────────────────

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
        {label}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

// ── Read-only Row (Business Summary) ──────────────────────────────────────

function ReadonlyRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide w-36 shrink-0 pt-0.5">
        {label}
      </span>
      <span className="text-sm text-foreground flex-1 min-w-0">{value}</span>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function CampaignGenerationPage() {
  const router = useRouter();
  const {
    businessProfile,
    campaignConfig: contextConfig,
    setCampaignConfig,
  } = useWorkflow();

  // Lazy-initialize from context or derive from profile
  const [config, setConfig] = useState<CampaignConfig>(() => {
    if (contextConfig) return contextConfig;
    if (businessProfile) return buildDefaultConfig(businessProfile);
    return buildDefaultConfig({
      name: 'Your Business',
      industry: '',
      primaryService: 'Service',
      secondaryServices: [],
      targetCustomers: [],
      serviceAreas: ['Local'],
      trustSignals: [],
      primaryCta: '',
      phone: '',
      landingPage: '',
    });
  });

  useEffect(() => {
    if (!businessProfile) router.replace('/analyze-business');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!businessProfile) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-sm text-muted-foreground">Redirecting...</p>
      </div>
    );
  }

  const handleUpdate = (field: keyof CampaignConfig, value: string) => {
    const updated = { ...config, [field]: value };
    setConfig(updated);
    setCampaignConfig(updated);
  };

  const handleBack = () => router.push('/business-review');

  const handleContinue = () => {
    setCampaignConfig(config);
    router.push('/keywords');
  };

  return (
    <div className="p-6 lg:p-8 space-y-8 fade-in">
      {/* Step indicator + header */}
      <div className="space-y-3">
        <WorkflowStepIndicator currentStep={3} />
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            Campaign Generation
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5 max-w-xl">
            Review the Google Ads campaign settings generated from your business profile before
            generating keywords and ads.
          </p>
        </div>
      </div>

      {/* ── Section 1: Campaign Overview ── */}
      <div className="space-y-4">
        <SectionHeader label="Campaign Overview" />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Campaign Basics */}
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 pt-4 pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted border border-border">
                  <Settings2 className="h-3 w-3 text-muted-foreground" />
                </div>
                <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Campaign Basics
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-5 py-0 divide-y divide-border pb-1">
              <EditableRow
                label="Campaign Name"
                value={config.name}
                onSave={(v) => handleUpdate('name', v)}
              />
              <EditableRow
                label="Campaign Type"
                value={config.type}
                onSave={(v) => handleUpdate('type', v)}
              />
              <EditableRow
                label="Campaign Goal"
                value={config.goal}
                onSave={(v) => handleUpdate('goal', v)}
              />
              <EditableRow
                label="Conversion Type"
                value={config.conversionType}
                onSave={(v) => handleUpdate('conversionType', v)}
              />
              <EditableRow
                label="Network"
                value={config.network}
                onSave={(v) => handleUpdate('network', v)}
              />
              <EditableRow
                label="Language"
                value={config.language}
                onSave={(v) => handleUpdate('language', v)}
              />
            </CardContent>
          </Card>

          {/* Targeting & Budget */}
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 pt-4 pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted border border-border">
                  <Target className="h-3 w-3 text-muted-foreground" />
                </div>
                <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Targeting &amp; Budget
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-5 py-0 divide-y divide-border pb-1">
              <EditableRow
                label="Locations"
                value={config.locations}
                onSave={(v) => handleUpdate('locations', v)}
              />
              <EditableRow
                label="Budget"
                value={config.budget}
                onSave={(v) => handleUpdate('budget', v)}
              />
              <EditableRow
                label="Bidding Strategy"
                value={config.biddingStrategy}
                onSave={(v) => handleUpdate('biddingStrategy', v)}
              />
              <EditableRow
                label="Customer Acquisition"
                value={config.customerAcquisition}
                onSave={(v) => handleUpdate('customerAcquisition', v)}
              />
              <EditableRow
                label="Ad Schedule"
                value={config.adSchedule}
                onSave={(v) => handleUpdate('adSchedule', v)}
              />
              <EditableRow
                label="Start Date"
                value={config.startDate}
                onSave={(v) => handleUpdate('startDate', v)}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ── Section 2 + 3: Settings & Business Summary ── */}
      <div className="space-y-4">
        <SectionHeader label="Campaign Settings &amp; Business Profile" />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Campaign Settings Summary */}
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 pt-4 pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted border border-border">
                  <LayoutGrid className="h-3 w-3 text-muted-foreground" />
                </div>
                <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Active Settings
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-5 pt-3">
              <div className="flex flex-wrap gap-2">
                {CAMPAIGN_SETTINGS_CHIPS.map((setting) => (
                  <span
                    key={setting}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                    {setting}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Business Profile Summary */}
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 pt-4 pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted border border-border">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                </div>
                <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Business Summary
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-5 py-0 divide-y divide-border pb-1">
              <ReadonlyRow label="Business" value={businessProfile.name} />
              <ReadonlyRow label="Industry" value={businessProfile.industry} />
              <ReadonlyRow label="Primary Service" value={businessProfile.primaryService} />
              <ReadonlyRow
                label="Target Customers"
                value={businessProfile.targetCustomers.join(', ')}
              />
              <ReadonlyRow
                label="Service Areas"
                value={businessProfile.serviceAreas.join(', ')}
              />
              <ReadonlyRow label="Primary CTA" value={businessProfile.primaryCta} />
              <ReadonlyRow label="Phone" value={businessProfile.phone} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ── Bottom Action Area ── */}
      <div className="flex flex-col items-center gap-4 py-6 pb-28">
        <Separator className="w-16" />
        <p className="text-xs text-muted-foreground text-center">
          Campaign configuration complete · Next step generates keywords and ad copy.
        </p>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="h-9 px-5 text-sm gap-1.5"
            onClick={handleBack}
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
          <Button onClick={handleContinue} className="h-9 px-6 text-sm gap-2">
            Continue to Keywords
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
