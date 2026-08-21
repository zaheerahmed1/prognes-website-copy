/**
 * Copy and IA labels taken from the master specification only.
 * Homepage narrative copy is not in this repo yet — do not invent it.
 */

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
    /**
     * Destination is not in the spec (no contact route).
     * Rendered as a button until a URL is approved.
     */
    href: null as string | null,
  },
} as const;

export const footer = {
  navLabel: "Footer",
} as const;
