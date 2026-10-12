import { site } from "@/content/nav";

/**
 * SEO strings use approved positioning language only.
 * A legal organization name is not specified — siteName matches the core brand idea.
 */
export const seo = {
  siteName: site.wordmark,
  defaultTitle: site.wordmark,
  titleTemplate: `%s · ${site.wordmark}`,
  description:
    "We engineer systems that create operational leverage. AI Growth and AI Systems as one operating loop.",
} as const;
