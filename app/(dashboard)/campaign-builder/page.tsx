import type { Metadata } from 'next';
import { Wand2, ChevronRight, Target, Users, DollarSign, Type, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = { title: 'Campaign Builder' };

const steps = [
  { id: 1, label: 'Campaign Details', icon: Type, active: true },
  { id: 2, label: 'Targeting', icon: Target, active: false },
  { id: 3, label: 'Audience', icon: Users, active: false },
  { id: 4, label: 'Budget', icon: DollarSign, active: false },
  { id: 5, label: 'Generate', icon: Sparkles, active: false },
];

export default function CampaignBuilderPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 fade-in">
      <PageHeader
        title="Campaign Builder"
        description="Generate high-performing Google Ads campaigns using AI."
        badge="Beta"
      />

      {/* Progress Steps */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex items-center gap-1">
              <div
                className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  step.active
                    ? 'bg-primary/10 text-primary border border-primary/30'
                    : 'text-muted-foreground'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/40 shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 py-4">
              <CardTitle className="text-sm font-semibold">Campaign Details</CardTitle>
              <CardDescription className="text-xs">Define the basic information for your campaign.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="p-5 space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">Campaign Name</Label>
                <Input placeholder="e.g. Summer Sale — Search Ads" className="h-9 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium">Campaign Type</Label>
                  <Select>
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search</SelectItem>
                      <SelectItem value="display">Display</SelectItem>
                      <SelectItem value="shopping">Shopping</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="performance-max">Performance Max</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium">Assign to Project</Label>
                  <Select>
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Summer Sale 2024</SelectItem>
                      <SelectItem value="2">Brand Awareness Q4</SelectItem>
                      <SelectItem value="3">Product Launch - Alpha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">Campaign Goal</Label>
                <Select>
                  <SelectTrigger className="h-9 text-sm">
                    <SelectValue placeholder="Select campaign goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="leads">Leads</SelectItem>
                    <SelectItem value="traffic">Website Traffic</SelectItem>
                    <SelectItem value="awareness">Brand Awareness</SelectItem>
                    <SelectItem value="app">App Promotion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">Business Description</Label>
                <Textarea
                  placeholder="Describe your business, products, or services. The AI will use this to generate relevant ad copy..."
                  className="text-sm resize-none"
                  rows={4}
                />
                <p className="text-[11px] text-muted-foreground">The more detail you provide, the better the generated campaigns.</p>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">Landing Page URL</Label>
                <Input placeholder="https://example.com/landing-page" className="h-9 text-sm font-mono" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar info */}
        <div className="space-y-4">
          <Card className="border-border shadow-none">
            <CardHeader className="px-5 py-4">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                AI Generation
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-5 space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our AI will analyze your inputs and generate optimized campaigns including headlines, descriptions, keywords, and bidding strategies.
              </p>
              <div className="space-y-2">
                {['Ad Headlines & Descriptions', 'Keyword Suggestions', 'Audience Targeting', 'Budget Recommendations', 'Bid Strategies'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-xs text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-none">
            <CardHeader className="px-5 py-4">
              <CardTitle className="text-sm font-semibold">Templates</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-3 space-y-1.5">
              {['Search Ads Pro', 'E-commerce Basic', 'Lead Generation'].map((t) => (
                <button key={t} className="w-full flex items-center justify-between rounded-md px-3 py-2 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-left">
                  <span>{t}</span>
                  <Badge variant="outline" className="text-[10px] h-4">Use</Badge>
                </button>
              ))}
            </CardContent>
          </Card>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 h-9 text-xs">Save Draft</Button>
            <Button size="sm" className="flex-1 h-9 text-xs gap-1.5">
              <Wand2 className="h-3.5 w-3.5" />
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
