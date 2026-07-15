import { MetadataRoute } from "next";

const BASE_URL = "https://growthshiftapp.vercel.app";

const pages = [
  "/",

  // Commercial Pages
  "/google-ads-automation",
  "/ai-google-ads-management",
  "/google-ads-optimization-software",
  "/ppc-management-software",
  "/ppc-reporting-software",
  "/google-ads-ai-manager",
  "/google-ads-agency-alternative",
  "/google-ads-audit",

  // Free Tool
  "/tools/negative-keyword-generator",

  // Industry Pages
  "/industries/roofing",
  "/industries/hvac",
  "/industries/plumbers",
  "/industries/electricians",
  "/industries/appliance-repair",
  "/industries/google-ads-for-pest-control",
  "/industries/google-ads-for-garage-door",
  "/industries/google-ads-for-garage-door-repair",
  "/industries/google-ads-for-junk-removal",
  "/industries/google-ads-for-water-damage-restoration",
  "/industries/google-ads-for-cleaning-services",
  "/industries/google-ads-for-carpet-cleaning",
  "/industries/google-ads-for-window-cleaning",
  "/industries/google-ads-for-locksmiths",
  "/industries/google-ads-for-flooring",
  "/industries/google-ads-for-landscaping",
  "/industries/google-ads-for-lawyers",
  "/industries/google-ads-for-personal-injury-lawyers",
  "/industries/google-ads-for-car-accident-lawyers",
  "/industries/google-ads-for-truck-accident-lawyers",
  "/industries/google-ads-for-motorcycle-accident-lawyers",
  "/industries/google-ads-for-dui-lawyers",
  "/industries/google-ads-for-criminal-defense-lawyers",
  "/industries/google-ads-for-divorce-lawyers",
  "/industries/google-ads-for-family-lawyers",
  "/industries/google-ads-for-bankruptcy-lawyers",
  "/industries/google-ads-for-estate-planning-lawyers",
  "/industries/google-ads-for-immigration-lawyers",
  "/industries/google-ads-for-medical-malpractice-lawyers",
  "/industries/google-ads-for-employment-lawyers",
  "/industries/google-ads-for-workers-compensation-lawyers",
  "/industries/google-ads-for-social-security-disability-lawyers",
  "/industries/google-ads-for-business-lawyers",
  "/industries/google-ads-for-real-estate-lawyers",
  "/industries/google-ads-for-tax-lawyers",
  "/industries/google-ads-for-probate-lawyers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-15");

  return pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: now,

    changeFrequency:
      page === "/"
        ? "daily"
        : "weekly",

    priority:
      page === "/"
        ? 1.0
        : page === "/google-ads-automation"
        ? 0.9
        : page.startsWith("/industries/")
        ? 0.7
        : 0.8,
  }));
}
