import { site } from "@/content/nav";

/**
 * SEO strings use PROGNES brand name + approved positioning language.
 */
export const seo = {
  siteName: site.wordmark,
  defaultTitle: `${site.wordmark} — ${site.tagline}`,
  titleTemplate: `%s · ${site.wordmark}`,
  description:
    "PROGNES combines AI-powered creative and growth systems with intelligent automation to help businesses capture more opportunities and eliminate operational friction.",
} as const;
