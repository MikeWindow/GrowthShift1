'use client';

import { createContext, useContext, useState } from 'react';
import type { BusinessProfile, CampaignConfig } from '@/types';

interface WorkflowState {
  businessProfile: BusinessProfile | null;
  analyzedUrl: string;
  campaignConfig: CampaignConfig | null;
  setBusinessProfile: (profile: BusinessProfile) => void;
  setAnalyzedUrl: (url: string) => void;
  setCampaignConfig: (config: CampaignConfig) => void;
}

const WorkflowContext = createContext<WorkflowState | null>(null);

export function WorkflowProvider({ children }: { children: React.ReactNode }) {
  const [businessProfile, setBusinessProfile] = useState<BusinessProfile | null>(null);
  const [analyzedUrl, setAnalyzedUrl] = useState('');
  const [campaignConfig, setCampaignConfig] = useState<CampaignConfig | null>(null);

  return (
    <WorkflowContext.Provider
      value={{
        businessProfile,
        analyzedUrl,
        campaignConfig,
        setBusinessProfile,
        setAnalyzedUrl,
        setCampaignConfig,
      }}
    >
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflow() {
  const ctx = useContext(WorkflowContext);
  if (!ctx) throw new Error('useWorkflow must be used within WorkflowProvider');
  return ctx;
}
