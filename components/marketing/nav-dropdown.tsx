'use client';

import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  label: string;
  links: NavLinkItem[];
}

export function NavDropdown({ label, links }: NavDropdownProps) {
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
          {label}
          <ChevronDown
            className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          />
        </button>

        <div
          className={cn(
            'absolute left-0 top-full pt-3 transition-all duration-200 ease-out',
            open
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-1 opacity-0'
          )}
        >
          <div className="w-64 rounded-2xl border border-border bg-popover p-2 shadow-lg">
            <div className="px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  <p className="text-sm font-medium text-foreground">{link.label}</p>
                  {link.description && (
                    <p className="mt-0.5 text-xs text-muted-foreground">{link.description}</p>
                  )}
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
          {label}
          <ChevronDown
            className={cn('h-4 w-4 transition-transform duration-200', mobileExpanded && 'rotate-180')}
          />
        </button>
        {mobileExpanded && (
          <div className="space-y-1 pb-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                onClick={() => setMobileExpanded(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
