import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | GrowthShift',
  description:
    'Privacy Policy for GrowthShift AI Google Ads automation platform. Information about data collection, cookies, analytics, third-party services, and user rights.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | GrowthShift',
    description:
      'Privacy Policy for GrowthShift AI Google Ads automation platform. Information about data collection, cookies, analytics, third-party services, and user rights.',
    url: 'https://growthshiftapp.vercel.app/privacy-policy',
  },
};

const LAST_UPDATED = 'September 3, 2026';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main>
        <section className="border-b border-border/60 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mb-6 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <TrendingUp className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-[15px] font-semibold tracking-tight">GrowthShift</span>
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last Updated: {LAST_UPDATED}</p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
              <div>
                <p>
                  This Privacy Policy explains how GrowthShift (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and protects your information when you use our website and services. By using GrowthShift, you agree to the practices described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">1. Information We Collect</h2>
                <p className="mt-3">
                  We collect the following types of information:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li><strong className="text-foreground">Account Information:</strong> Email address and password when you create an account.</li>
                  <li><strong className="text-foreground">Business Information:</strong> Website URL, business name, industry, service areas, and other details you provide when using our tools.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Pages visited, features used, time spent, IP address, browser type, and device information.</li>
                  <li><strong className="text-foreground">Communication Data:</strong> Information you provide when contacting us via WhatsApp, email, or forms.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">2. Cookies</h2>
                <p className="mt-3">
                  We use cookies and similar technologies to improve your experience, analyze traffic, and remember your preferences. Cookies are small text files stored on your device. You can disable cookies in your browser settings, but some features may not function properly.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">3. Analytics</h2>
                <p className="mt-3">
                  We use Google Analytics 4 (GA4) to collect anonymous usage data such as page views, session duration, and traffic sources. This data helps us understand how visitors use our website so we can improve it. GA4 collects IP addresses but processes them to anonymize and aggregate the data.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">4. Contact Forms and WhatsApp</h2>
                <p className="mt-3">
                  When you contact us through a form or via WhatsApp, we use the information you provide to respond to your inquiry and provide our services. WhatsApp communications are subject to WhatsApp&rsquo;s own privacy policy.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">5. Third-Party Services</h2>
                <p className="mt-3">
                  Our platform integrates with or references the following third-party services:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>Google Ads and Google Analytics for advertising and analytics</li>
                  <li>WhatsApp for customer communication</li>
                  <li>Vercel for website hosting</li>
                  <li>Supabase for data storage</li>
                </ul>
                <p className="mt-3">
                  Each third-party service has its own privacy policy. We are not responsible for how third parties handle your data.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">6. Data Retention</h2>
                <p className="mt-3">
                  We retain your data for as long as your account is active or as needed to provide our services. Usage data is retained for up to 26 months. You may request deletion of your data at any time by contacting us.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">7. Your Rights</h2>
                <p className="mt-3">
                  You have the right to:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of analytics tracking</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, contact us via WhatsApp or email.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">8. Data Security</h2>
                <p className="mt-3">
                  We use industry-standard security measures including encryption, secure hosting, and access controls to protect your data. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">9. Children&rsquo;s Privacy</h2>
                <p className="mt-3">
                  GrowthShift is not intended for users under 18 years of age. We do not knowingly collect data from children.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">10. Changes to This Policy</h2>
                <p className="mt-3">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">11. Contact</h2>
                <p className="mt-3">
                  If you have questions about this Privacy Policy, please contact us via WhatsApp or email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
