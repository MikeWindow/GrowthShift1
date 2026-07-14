'use client';

import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import Link from 'next/link';
import { ChevronDown, Home } from 'lucide-react';
import { INDUSTRIES, type IndustryLink } from '@/config/industries';
import { cn } from '@/lib/utils';

interface IndustriesDropdownProps {
  industries?: IndustryLink[];
}

export function IndustriesDropdown({ industries = INDUSTRIES }: IndustriesDropdownProps) {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
    if (e.key === 'Escape') setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Desktop hover trigger */}
      <div
        className="relative hidden md:block"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <button
          onKeyDown={handleKeyDown}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            'flex items-center gap-1 text-sm transition-colors hover:text-foreground',
            open ? 'text-foreground' : 'text-muted-foreground'
          )}
          aria-expanded={open}
          aria-haspopup="true"
        >
          Industries
          <ChevronDown
            className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          />
        </button>

        {/* Dropdown panel */}
        <div
          className={cn(
            'absolute left-0 top-full pt-3 transition-all duration-200 ease-out',
            open
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-1 opacity-0'
          )}
        >
          <div className="w-80 rounded-2xl border border-border bg-popover p-2 shadow-lg">
            <div className="px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Industries
              </p>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {industries.map((industry) => (
                <Link
                  key={industry.label}
                  href={industry.href}
                  className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                    <Home className="h-4 w-4 text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">{industry.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{industry.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile expand/collapse */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileExpanded((prev) => !prev)}
          className="flex w-full items-center justify-between py-2 text-sm font-medium text-foreground"
          aria-expanded={mobileExpanded}
        >
          Industries
          <ChevronDown
            className={cn('h-4 w-4 transition-transform duration-200', mobileExpanded && 'rotate-180')}
          />
        </button>
        {mobileExpanded && (
          <div className="space-y-1 pb-2">
            {industries.map((industry) => (
              <Link
                key={industry.label}
                href={industry.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted"
                onClick={() => setMobileExpanded(false)}
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                  <Home className="h-3.5 w-3.5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{industry.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{industry.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
