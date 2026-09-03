import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { MarketingHeader } from '@/components/marketing/marketing-header';
import { MarketingFooter } from '@/components/marketing/marketing-footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | GrowthShift',
  description:
    'Terms and Conditions for GrowthShift AI Google Ads automation platform. Acceptable use, user responsibilities, intellectual property, limitation of liability, and termination.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://growthshiftapp.vercel.app/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | GrowthShift',
    description:
      'Terms and Conditions for GrowthShift AI Google Ads automation platform. Acceptable use, user responsibilities, intellectual property, limitation of liability, and termination.',
    url: 'https://growthshiftapp.vercel.app/terms-and-conditions',
  },
};

const LAST_UPDATED = 'September 3, 2026';

export default function TermsAndConditionsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Terms &amp; Conditions</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last Updated: {LAST_UPDATED}</p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
              <div>
                <p>
                  These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of GrowthShift, an AI-powered Google Ads automation, PPC management, reporting, and marketing software platform operated by GrowthShift (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using our website and services, you agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">1. Acceptable Use</h2>
                <p className="mt-3">
                  You agree to use GrowthShift only for lawful purposes. You must not:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>Use the service to violate any law or regulation</li>
                  <li>Attempt to access, alter, or damage any part of the service without authorization</li>
                  <li>Use automated tools to scrape, data-mine, or overload our servers</li>
                  <li>Upload or generate content that is illegal, harmful, or infringes on others&rsquo; rights</li>
                  <li>Resell, sublicense, or redistribute our services without permission</li>
                  <li>Use the service for fraudulent advertising or to violate any advertising platform&rsquo;s policies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">2. User Responsibilities</h2>
                <p className="mt-3">
                  You are responsible for the accuracy of all information you provide to GrowthShift, including business details, website URLs, and campaign preferences. You are responsible for reviewing all AI-generated content before publishing it to any advertising platform. You are responsible for complying with all applicable advertising policies and regulations.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">3. Intellectual Property</h2>
                <p className="mt-3">
                  All content on GrowthShift, including text, graphics, logos, software, and design, is the property of GrowthShift or its licensors and is protected by intellectual property laws. You may not copy, reproduce, or distribute our content without written permission. AI-generated campaign content you create using GrowthShift belongs to you, subject to these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">4. Account Usage</h2>
                <p className="mt-3">
                  If you create an account, you are responsible for maintaining the security of your credentials and for all activities under your account. You must notify us immediately of any unauthorized use. We may suspend or terminate accounts that violate these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">5. Third-Party Services</h2>
                <p className="mt-3">
                  GrowthShift references and integrates with third-party services such as Google Ads, Google Analytics, and WhatsApp. We are not responsible for the availability, accuracy, or policies of these services. Your use of third-party services is subject to their respective terms and policies.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
                <p className="mt-3">
                  GrowthShift is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of or inability to use our services. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">7. Termination</h2>
                <p className="mt-3">
                  We may terminate or suspend your access to GrowthShift at any time, with or without cause, and without notice. Upon termination, all licenses granted to you will end. You may stop using the service at any time.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">8. Governing Terms</h2>
                <p className="mt-3">
                  These Terms are governed by applicable laws. Any disputes arising from these Terms shall be resolved through good-faith negotiation first, and if unresolved, through binding arbitration.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">9. Changes to These Terms</h2>
                <p className="mt-3">
                  We may update these Terms from time to time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Continued use of GrowthShift after changes constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">10. Contact</h2>
                <p className="mt-3">
                  If you have questions about these Terms, please contact us via WhatsApp or email.
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
