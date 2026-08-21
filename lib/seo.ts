import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { getSiteUrl } from "@/lib/site";

export function createRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: siteUrl,
    title: {
      default: seo.defaultTitle,
      template: seo.titleTemplate,
    },
    description: seo.description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      title: seo.defaultTitle,
      description: seo.description,
      siteName: seo.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.defaultTitle,
      description: seo.description,
    },
    alternates: {
      canonical: "/",
    },
  };
}
