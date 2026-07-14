'use client';

import { useState, useMemo } from 'react';
import { Copy, Download, Trash2, CheckCircle2, Search, Ban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

type MatchType = 'broad' | 'phrase' | 'exact';

interface Category {
  name: string;
  icon: string;
  description: string;
  keywords: string[];
}

const CATEGORIES: Category[] = [
  { name: 'Free / No Cost', icon: 'Ban', description: 'Free, free trial, no cost searches', keywords: ['free', 'free trial', 'no cost', 'free sample', 'free download', 'gratis', 'complimentary', 'freebie', 'at no cost', 'free of charge'] },
  { name: 'Jobs & Careers', icon: 'Briefcase', description: 'Job, salary, career, hiring searches', keywords: ['jobs', 'job', 'careers', 'career', 'salary', 'salaries', 'hiring', 'employment', 'vacancies', 'job openings', 'work', 'apply', 'resume'] },
  { name: 'Education & DIY', icon: 'BookOpen', description: 'How to, tutorial, course, learn', keywords: ['how to', 'diy', 'tutorial', 'course', 'learn', 'class', 'training', 'certification', 'guide', 'lesson', 'workshop', 'seminar'] },
  { name: 'Cheap & Discounts', icon: 'Percent', description: 'Cheap, discount, coupon, deal', keywords: ['cheap', 'discount', 'coupon', 'deal', 'deals', 'bargain', 'lowest price', 'on sale', 'clearance', 'wholesale price', 'bulk discount'] },
  { name: 'Used / Rental', icon: 'Repeat', description: 'Used, rental, lease, second hand', keywords: ['used', 'rental', 'rent', 'lease', 'second hand', 'pre-owned', 'refurbished', 'borrow', 'for rent', 'rentals'] },
  { name: 'Reviews & Research', icon: 'Search', description: 'Review, compare, best, top', keywords: ['review', 'reviews', 'compare', 'comparison', 'best', 'top', 'top 10', 'rating', 'ratings', 'vs', 'versus', 'alternatives'] },
  { name: 'Images & Videos', icon: 'Eye', description: 'Image, photo, video, picture', keywords: ['image', 'images', 'photo', 'photos', 'picture', 'pictures', 'video', 'videos', 'pics', 'wallpaper'] },
  { name: 'Wholesale / B2B', icon: 'Warehouse', description: 'Wholesale, supplier, distributor', keywords: ['wholesale', 'supplier', 'distributor', 'bulk', 'b2b', 'manufacturer', 'factory', 'vendor', 'trade price'] },
  { name: 'Repair & How-To', icon: 'Wrench', description: 'Fix, repair, replace, install yourself', keywords: ['fix', 'repair', 'replace', 'install', 'assemble', 'troubleshoot', 'schematic', 'wiring diagram', 'manual'] },
  { name: 'Adult Content', icon: 'ShieldX', description: 'Inappropriate or adult content', keywords: ['xxx', 'adult', 'nsfw', 'porn', 'escort', 'dating', 'hookup', 'nude'] },
  { name: 'Login & Support', icon: 'Lock', description: 'Login, sign in, customer service', keywords: ['login', 'sign in', 'register', 'account', 'support', 'contact', 'help', 'customer service', 'phone number'] },
  { name: 'Cracks & Piracy', icon: 'ShieldX', description: 'Crack, torrent, pirate, warez', keywords: ['crack', 'cracked', 'torrent', 'pirate', 'pirated', 'warez', 'keygen', 'serial', 'nulled', 'hack'] },
  { name: 'Questions & Definitions', icon: 'HelpCircle', description: 'What is, definition, meaning', keywords: ['what is', 'definition', 'meaning', 'define', 'explained', 'wikipedia', 'wiki', 'dictionary', 'encyclopedia'] },
  { name: 'Legal & Complaints', icon: 'Scale', description: 'Lawsuit, complaint, legal action', keywords: ['lawsuit', 'complaint', 'sue', 'legal action', 'attorney general', 'bbb', 'fraud', 'scam', 'class action'] },
  { name: 'Samples & Templates', icon: 'FileText', description: 'Sample, template, example, form', keywords: ['sample', 'template', 'example', 'form', 'forms', 'download', 'pdf', 'document', 'worksheet', 'printable'] },
  { name: 'Coupons & Promo Codes', icon: 'Tag', description: 'Promo code, voucher, coupon code', keywords: ['promo code', 'coupon code', 'voucher', 'discount code', 'promo', 'promotion', 'offer code', 'deal code'] },
  { name: 'Downloads & PDF', icon: 'Download', description: 'Download, PDF, ebook, free file', keywords: ['download', 'pdf', 'ebook', 'free download', 'file', 'document download', 'pdf free', 'template download'] },
  { name: 'Forums & Communities', icon: 'MessageSquare', description: 'Forum, reddit, discussion, community', keywords: ['forum', 'forums', 'reddit', 'discussion', 'community', 'board', 'thread', 'q&a', 'quora'] },
  { name: 'Competitor Terms', icon: 'Building2', description: 'Competitor brand names', keywords: ['competitor1', 'competitor2', 'competitor3', 'other brand', 'alternative brand'] },
  { name: 'Student Searches', icon: 'GraduationCap', description: 'Student, school, college, project', keywords: ['student', 'school', 'college', 'university', 'project', 'assignment', 'thesis', 'research paper', 'study'] },
];

const MATCH_TYPES: { type: MatchType; label: string; example: string }[] = [
  { type: 'broad', label: 'Broad', example: 'free' },
  { type: 'phrase', label: 'Phrase', example: '"free"' },
  { type: 'exact', label: 'Exact', example: '[free]' },
];

function formatKeyword(kw: string, match: MatchType): string {
  if (match === 'phrase') return `"${kw}"`;
  if (match === 'exact') return `[${kw}]`;
  return kw;
}

export function NegativeKeywordGenerator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [matchType, setMatchType] = useState<MatchType>('broad');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);

  const filteredCategories = useMemo(() => {
    if (!search) return CATEGORIES;
    return CATEGORIES.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const generatedKeywords = useMemo(() => {
    const kws: string[] = [];
    for (const cat of CATEGORIES) {
      if (selected.has(cat.name)) {
        kws.push(...cat.keywords);
      }
    }
    return kws;
  }, [selected]);

  const formattedList = useMemo(() => {
    return generatedKeywords.map((kw) => formatKeyword(kw, matchType)).join('\n');
  }, [generatedKeywords, matchType]);

  const toggleCategory = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(CATEGORIES.map((c) => c.name)));
  const clearAll = () => setSelected(new Set());

  const handleCopy = async () => {
    await navigator.clipboard.writeText(formattedList);
    setCopied(true);
    toast.success('Negative keywords copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([formattedList], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'negative-keywords.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadCsv = () => {
    const csv = 'Keyword\n' + generatedKeywords.map((kw) => formatKeyword(kw, matchType)).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'negative-keywords.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="border-b border-border/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <Badge variant="secondary" className="mb-3 text-xs">Interactive Tool</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Generate Your Negative Keywords List
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Select categories, choose a match type, and instantly generate a formatted negative keywords list for your Google Ads campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: Categories */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">Categories</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="h-8 text-xs" onClick={selectAll}>Select All</Button>
                <Button size="sm" variant="outline" className="h-8 text-xs" onClick={clearAll}>Clear All</Button>
              </div>
            </div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="max-h-[400px] space-y-2 overflow-y-auto">
              {filteredCategories.map((cat) => {
                const isSelected = selected.has(cat.name);
                return (
                  <button
                    key={cat.name}
                    onClick={() => toggleCategory(cat.name)}
                    className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-colors ${isSelected ? 'border-primary/40 bg-primary/5' : 'border-border bg-background hover:bg-muted/30'}`}
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border">
                      {isSelected && <CheckCircle2 className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{cat.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{cat.description}</p>
                      <Badge variant="outline" className="mt-1 text-[10px]">{cat.keywords.length} keywords</Badge>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Match Type + Output */}
          <div className="space-y-4">
            {/* Match Type */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Match Type</h3>
              <div className="grid grid-cols-3 gap-3">
                {MATCH_TYPES.map((mt) => (
                  <button
                    key={mt.type}
                    onClick={() => setMatchType(mt.type)}
                    className={`rounded-xl border p-4 text-center transition-colors ${matchType === mt.type ? 'border-primary/40 bg-primary/5' : 'border-border bg-background hover:bg-muted/30'}`}
                  >
                    <p className="text-sm font-semibold text-foreground">{mt.label}</p>
                    <code className="mt-1 block text-xs text-muted-foreground">{mt.example}</code>
                  </button>
                ))}
              </div>
            </div>

            {/* Generated Keywords */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ban className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-semibold text-foreground">Generated Keywords</h3>
                </div>
                <Badge variant="secondary" className="text-[10px]">{generatedKeywords.length} Keywords</Badge>
              </div>
              <textarea
                readOnly
                value={formattedList}
                placeholder="Select categories to generate your negative keywords list..."
                className="h-48 w-full resize-none rounded-lg border border-border bg-muted/20 p-4 font-mono text-xs text-foreground focus:outline-none"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <Button size="sm" className="h-9 text-xs gap-1.5" onClick={handleCopy} disabled={generatedKeywords.length === 0}>
                  {copied ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </Button>
                <Button size="sm" variant="outline" className="h-9 text-xs gap-1.5" onClick={handleDownloadTxt} disabled={generatedKeywords.length === 0}>
                  <Download className="h-3.5 w-3.5" /> Download TXT
                </Button>
                <Button size="sm" variant="outline" className="h-9 text-xs gap-1.5" onClick={handleDownloadCsv} disabled={generatedKeywords.length === 0}>
                  <Download className="h-3.5 w-3.5" /> Download CSV
                </Button>
                <Button size="sm" variant="outline" className="h-9 text-xs gap-1.5" onClick={clearAll} disabled={generatedKeywords.length === 0}>
                  <Trash2 className="h-3.5 w-3.5" /> Clear
                </Button>
              </div>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-xl font-bold text-foreground">{generatedKeywords.length}</p>
                <p className="text-xs text-muted-foreground">Keywords Generated</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-xl font-bold text-foreground">{selected.size}</p>
                <p className="text-xs text-muted-foreground">Categories Selected</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-xl font-bold text-foreground">{generatedKeywords.length > 0 ? '$' + (generatedKeywords.length * 3).toLocaleString() : '$0'}</p>
                <p className="text-xs text-muted-foreground">Est. Budget Saved</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-xl font-bold text-foreground">{generatedKeywords.length * 12}</p>
                <p className="text-xs text-muted-foreground">Est. Clicks Prevented</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
