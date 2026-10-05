/**
 * Copy and IA labels taken from the master specification only.
 * Homepage narrative copy is not in this repo yet — do not invent it.
 */

import { CALENDLY_URL } from "@/lib/advantage";

export const site = {
  /**
   * A legal company name is not specified. The wordmark uses the approved
   * core brand idea until a name is provided.
   */
  wordmark: "Unfair Operational Leverage",
  lang: "en",
} as const;

export const routes = {
  home: "/",
  systems: "/systems",
  growth: "/growth",
  work: "/work",
  about: "/about",
  advantage: "/advantage",
} as const;

export const nav = {
  items: [
    { href: routes.systems, label: "Systems" },
    { href: routes.growth, label: "Growth" },
    { href: routes.work, label: "Work" },
    { href: routes.about, label: "About" },
  ],
  menuLabel: "Menu",
  closeLabel: "Close",
  primaryCta: {
    label: "Build your advantage",
    href: routes.advantage,
  },
  secondaryCta: {
    label: "Book a strategy call",
    href: CALENDLY_URL,
    external: true,
  },
} as const;

export const footer = {
  navLabel: "Footer",
} as const;

