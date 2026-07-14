'use client';

import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const INDUSTRIES = [
  'Roofing',
  'HVAC',
  'Plumbers',
  'Electricians',
  'Lawyers',
  'Dentists',
  'Cleaning Services',
  'Pest Control',
];

const GOALS = [
  'Phone Call Leads',
  'Form Submissions',
  'Website Traffic',
  'Store Visits',
];

const BUDGETS = ['$50–100/day', '$100–250/day', '$250–500/day', '$500+/day'];

const LOADING_MESSAGES = [
  'Analyzing website...',
  'Finding services...',
  'Extracting locations...',
  'Building campaign...',
  'Almost done...',
];

export function HeroAnalyzer() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [industry, setIndustry] = useState('');
  const [budget, setBudget] = useState('');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const ready = url.trim() && industry && budget && goal;

  const handleAnalyze = () => {
    if (!ready) return;
    setLoading(true);
    setMessageIndex(0);
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < LOADING_MESSAGES.length) {
        setMessageIndex(current);
      } else {
        clearInterval(interval);
        setTimeout(() => router.push('/analyze-business'), 400);
      }
    }, 600);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAnalyze();
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2 border-b border-border/60 pb-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Analyze Business</p>
          <p className="text-[11px] text-muted-foreground">Step 1 of 3 · Website Analysis</p>
        </div>
      </div>

      <div className="space-y-3.5">
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Website URL</Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="https://example.com"
              className="pl-9 h-11 text-sm font-mono"
              disabled={loading}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Industry</Label>
            <Select value={industry} onValueChange={setIndustry} disabled={loading}>
              <SelectTrigger className="h-11 text-sm">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {INDUSTRIES.map((ind) => (
                  <SelectItem key={ind} value={ind}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Monthly Budget</Label>
            <Select value={budget} onValueChange={setBudget} disabled={loading}>
              <SelectTrigger className="h-11 text-sm">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {BUDGETS.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Primary Goal</Label>
          <Select value={goal} onValueChange={setGoal} disabled={loading}>
            <SelectTrigger className="h-11 text-sm">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {GOALS.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/30 py-5">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <p className="text-xs font-medium text-foreground">{LOADING_MESSAGES[messageIndex]}</p>
            <div className="flex gap-1">
              {LOADING_MESSAGES.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-1 rounded-full ${
                    i <= messageIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <Button
            onClick={handleAnalyze}
            disabled={!ready}
            className="h-11 w-full text-sm gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Analyze Website
          </Button>
        )}
      </div>
    </div>
  );
}
