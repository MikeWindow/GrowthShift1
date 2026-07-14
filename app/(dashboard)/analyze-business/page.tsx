'use client';

import { useState, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, Loader2, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { WorkflowStepIndicator } from '@/components/shared/workflow-step-indicator';
import { BusinessSummaryCards } from '@/components/shared/business-summary-cards';
import { useWorkflow } from '@/contexts/workflow-context';
import { cn } from '@/lib/utils';
import type { BusinessProfile } from '@/types';

// ── Constants ──────────────────────────────────────────────────────────────

type PageState = 'idle' | 'loading' | 'done';

const LOADING_MESSAGES = [
  'Analyzing website...',
  'Identifying business...',
  'Finding services...',
  'Finding locations...',
  'Extracting trust signals...',
  'Reading landing pages...',
  'Building business profile...',
  'Almost done...',
] as const;

const LOADING_STEPS = [
  'Connecting to website',
  'Reading content',
  'Extracting services',
  'Finding locations',
  'Analyzing trust signals',
  'Reading landing pages',
  'Building profile',
  'Finalizing',
];

const MOCK_PROFILE: BusinessProfile = {
  name: 'Kelly Roofing',
  industry: 'Roofing',
  primaryService: 'Roof Replacement',
  secondaryServices: ['Roof Repair', 'Storm Damage Repair', 'Metal Roofing'],
  targetCustomers: ['Residential', 'Commercial'],
  serviceAreas: ['Florida', 'Tampa', 'Orlando'],
  trustSignals: ['Licensed', 'Insured', 'Family Owned', 'Free Estimate', 'Emergency Service', 'Warranty Available'],
  primaryCta: 'Get Free Roof Inspection',
  phone: '(555) 123-4567',
  landingPage: 'Homepage',
};

// ── Loading Card ───────────────────────────────────────────────────────────

function LoadingCard({ message, messageIndex, url }: { message: string; messageIndex: number; url: string }) {
  const progress = Math.round(((messageIndex + 1) / LOADING_MESSAGES.length) * 100);

  return (
    <Card className="border-border shadow-none fade-in">
      <CardContent className="py-14 flex flex-col items-center">
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute h-28 w-28 rounded-full border border-primary/10 animate-pulse" />
          <div className="absolute h-20 w-20 rounded-full border border-primary/20" />
          <div className="relative h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Globe className="h-7 w-7 text-primary animate-pulse" />
          </div>
        </div>

        <p className="text-base font-semibold text-foreground mb-1 min-h-[1.5rem] transition-all duration-300">
          {message}
        </p>
        <p className="text-xs text-muted-foreground mb-8">
          Analyzing: <span className="font-mono text-foreground/60">{url}</span>
        </p>

        <div className="w-full max-w-xs h-0.5 bg-muted rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full max-w-xs space-y-2.5">
          {LOADING_STEPS.map((step, index) => {
            const isDone = index < messageIndex;
            const isCurrent = index === messageIndex;
            return (
              <div key={step} className="flex items-center gap-2.5">
                {isDone ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="h-3.5 w-3.5 text-primary shrink-0 animate-spin" />
                ) : (
                  <div className="h-3.5 w-3.5 rounded-full border border-muted-foreground/30 shrink-0" />
                )}
                <span
                  className={cn(
                    'text-xs transition-colors duration-200',
                    isDone ? 'text-muted-foreground' : isCurrent ? 'text-foreground font-medium' : 'text-muted-foreground/40'
                  )}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function AnalyzeBusinessPage() {
  const router = useRouter();
  const { businessProfile: contextProfile, analyzedUrl: contextUrl, setBusinessProfile, setAnalyzedUrl } = useWorkflow();

  const [url, setUrl] = useState('');
  const [pageState, setPageState] = useState<PageState>('idle');
  const [messageIndex, setMessageIndex] = useState(0);
  const [profile, setProfile] = useState<BusinessProfile>(MOCK_PROFILE);

  // Restore state if returning from step 2
  useEffect(() => {
    if (contextProfile && contextUrl) {
      setUrl(contextUrl);
      setProfile(contextProfile);
      setPageState('done');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loading simulation
  useEffect(() => {
    if (pageState !== 'loading') return;

    setMessageIndex(0);
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      if (current < LOADING_MESSAGES.length) {
        setMessageIndex(current);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setProfile(MOCK_PROFILE);
          setBusinessProfile(MOCK_PROFILE);
          setAnalyzedUrl(url);
          setPageState('done');
        }, 400);
      }
    }, 550);

    return () => clearInterval(interval);
  }, [pageState]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAnalyze = () => {
    if (!url.trim()) return;
    setPageState('loading');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAnalyze();
  };

  const handleUpdate = (field: keyof BusinessProfile, value: string | string[]) => {
    const updated = { ...profile, [field]: value } as BusinessProfile;
    setProfile(updated);
    setBusinessProfile(updated);
  };

  const handleContinue = () => {
    setBusinessProfile(profile);
    setAnalyzedUrl(url);
    router.push('/business-review');
  };

  return (
    <div className="p-6 lg:p-8 space-y-6 fade-in">
      {/* Step indicator + page header */}
      <div className="space-y-3">
        <WorkflowStepIndicator currentStep={1} />
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-foreground">Analyze Business</h1>
          <p className="text-sm text-muted-foreground mt-0.5 max-w-xl">
            Paste your business website and let AI understand your business before creating your Google Ads campaign.
          </p>
        </div>
      </div>

      {/* URL Input */}
      <Card className="border-border shadow-none">
        <CardContent className="p-5 space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Website URL</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="https://example.com"
                  className="pl-9 h-10 text-sm font-mono"
                  disabled={pageState === 'loading'}
                />
              </div>
              <Button
                onClick={handleAnalyze}
                disabled={!url.trim() || pageState === 'loading'}
                className="h-10 px-5 text-sm gap-2 shrink-0"
              >
                {pageState === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Analyze Website
                  </>
                )}
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            AI extracts services, trust signals, locations and business context automatically. You can review everything before campaign generation.
          </p>
        </CardContent>
      </Card>

      {/* Loading simulation */}
      {pageState === 'loading' && (
        <LoadingCard message={LOADING_MESSAGES[messageIndex]} messageIndex={messageIndex} url={url} />
      )}

      {/* Business summary + action */}
      {pageState === 'done' && (
        <>
          {/* Success banner */}
          <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-emerald-800">Website analyzed successfully</p>
              <p className="text-xs text-emerald-700 mt-0.5">
                Review and edit the extracted information below before continuing to campaign generation.
              </p>
            </div>
          </div>

          <BusinessSummaryCards profile={profile} onUpdate={handleUpdate} />

          {/* Centered action area */}
          <div className="flex flex-col items-center gap-4 py-6 pb-28">
            <Separator className="w-16" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span>
                Step 1 complete · Business profile ready for{' '}
                <span className="font-medium text-foreground">{profile.name}</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="h-9 px-5 text-sm" disabled>
                Back
              </Button>
              <Button onClick={handleContinue} className="h-9 px-6 text-sm gap-2">
                Continue to Business Review
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
