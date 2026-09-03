'use client';

import { useCallback } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_BASE = 'https://wa.me/message/6PBMERIVYTKFI1';

type CTAContext = {
  pageSlug: string;
  pageTitle: string;
  industry?: string;
};

function buildMessage({ pageSlug, pageTitle, industry }: CTAContext): string {
  const trimmedTitle = pageTitle.trim();
  const trimmedSlug = pageSlug.trim();

  if (trimmedSlug === '/' || trimmedSlug === '' || trimmedSlug === 'home') {
    return "Hi, I found GrowthShift on Google and I'd like a free Google Ads Audit Report.";
  }

  if (industry) {
    return `Hi, I found your AI Google Ads Builder for ${industry} page and I'd like a free Google Ads Audit Report.`;
  }

  if (trimmedSlug.startsWith('industries/')) {
    const industryName = trimmedTitle
      .replace(/^AI Google Ads Builder for\s+/i, '')
      .replace(/\s*\|.*$/, '')
      .replace(/\s+Companies\s*$/i, '')
      .replace(/\s+Services\s*$/i, '')
      .trim();
    return `Hi, I found your AI Google Ads Builder for ${industryName} page and I'd like a free Google Ads Audit Report.`;
  }

  const cleanTitle = trimmedTitle
    .replace(/\s*\|.*$/, '')
    .replace(/\s*—.*$/, '')
    .trim();
  return `Hi, I found your ${cleanTitle} page and I'd like a free Google Ads Audit Report.`;
}

function trackWhatsAppClick(ctx: CTAContext) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      page_slug: ctx.pageSlug,
      page_title: ctx.pageTitle,
      industry: ctx.industry || undefined,
      cta_position: 'hero',
    });
  }
}

type WhatsAppCtaProps = CTAContext & {
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

export function WhatsAppCta({
  pageSlug,
  pageTitle,
  industry,
  className = '',
  size = 'lg',
}: WhatsAppCtaProps) {
  const handleClick = useCallback(() => {
    trackWhatsAppClick({ pageSlug, pageTitle, industry });
  }, [pageSlug, pageTitle, industry]);

  const message = buildMessage({ pageSlug, pageTitle, industry });
  const href = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      size={size}
      onClick={handleClick}
      className={`bg-[#25D366] text-white hover:bg-[#1da851] shadow-lg shadow-[#25D366]/20 ${className}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-4 w-4" />
        Get Free Audit Report
      </a>
    </Button>
  );
}

export { buildMessage, WHATSAPP_BASE };
