'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { WorkflowStepIndicator } from '@/components/shared/workflow-step-indicator';
import { BusinessSummaryCards } from '@/components/shared/business-summary-cards';
import { useWorkflow } from '@/contexts/workflow-context';
import type { BusinessProfile } from '@/types';

export default function BusinessReviewPage() {
  const router = useRouter();
  const { businessProfile: contextProfile, setBusinessProfile } = useWorkflow();

  const [profile, setProfile] = useState<BusinessProfile | null>(null);

  useEffect(() => {
    if (contextProfile) {
      setProfile(contextProfile);
    } else {
      router.replace('/analyze-business');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = (field: keyof BusinessProfile, value: string | string[]) => {
    if (!profile) return;
    const updated = { ...profile, [field]: value } as BusinessProfile;
    setProfile(updated);
    setBusinessProfile(updated);
  };

  const handleBack = () => {
    router.push('/analyze-business');
  };

  const handleContinue = () => {
    if (profile) setBusinessProfile(profile);
    router.push('/campaign-generation');
  };

  if (!profile) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-sm text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 space-y-6 fade-in">
      {/* Step indicator + page header */}
      <div className="space-y-3">
        <WorkflowStepIndicator currentStep={2} />
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-foreground">Business Review</h1>
          <p className="text-sm text-muted-foreground mt-0.5 max-w-xl">
            Review your business profile before generating your Google Ads campaign.
          </p>
        </div>
      </div>

      {/* Info banner */}
      <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3">
        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-semibold text-foreground">
            Confirm your business details
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Make any final edits below. These details will be used to generate your Google Ads campaign.
          </p>
        </div>
      </div>

      {/* Editable summary cards */}
      <BusinessSummaryCards profile={profile} onUpdate={handleUpdate} />

      {/* Centered action area */}
      <div className="flex flex-col items-center gap-4 py-6 pb-28">
        <Separator className="w-16" />
        <p className="text-xs text-muted-foreground text-center max-w-xs">
          Your business profile is confirmed. Click continue to proceed to campaign generation.
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
            Continue to Campaign Generation
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
