import type { MetadataRoute } from "next";
import { routes } from "@/content/nav";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;

  return Object.values(routes).map((path) => ({
    url: new URL(path, base).toString(),
    changeFrequency: "monthly" as const,
    priority: path === routes.home ? 1 : 0.7,
  }));
}
