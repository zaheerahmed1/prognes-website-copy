import { routes } from "@/content/nav";

/**
 * About copy is not supplied in the spec beyond complementary capabilities.
 * Page title matches approved IA. Do not invent a biography.
 */
export const aboutPage = {
  path: routes.about,
  title: "About",
} as const;
