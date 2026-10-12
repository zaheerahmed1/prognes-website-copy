import { routes } from "@/content/nav";

/**
 * Showcase entries must be real systems only.
 * Do not invent clients, metrics, testimonials, or case studies.
 */
export const workPage = {
  path: routes.work,
  title: "Work",
  items: [] as const,
} as const;
