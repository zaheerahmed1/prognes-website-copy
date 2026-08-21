/**
 * GSAP loader — dynamically imports GSAP + ScrollTrigger so they are
 * never part of the critical JS path.
 *
 * Usage:
 *   const { gsap, ScrollTrigger } = await loadGSAP();
 *
 * Calling this multiple times is safe — the Promise is cached on first call.
 */

import type { gsap as GSAPType } from "gsap";
import type { ScrollTrigger as STType } from "gsap/ScrollTrigger";

export type { GSAPType, STType };

type GSAPBundle = {
  gsap: typeof GSAPType;
  ScrollTrigger: typeof STType;
};

let _cache: Promise<GSAPBundle> | null = null;

export function loadGSAP(): Promise<GSAPBundle> {
  if (_cache) return _cache;

  _cache = (async () => {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]);

    // Register once — safe to call multiple times per GSAP docs
    gsap.registerPlugin(ScrollTrigger);

    // Default: only animate transform + opacity (compositor-only)
    gsap.defaults({
      ease: "power2.out",
      duration: 0.7,
    });

    return { gsap, ScrollTrigger };
  })();

  return _cache;
}

/**
 * Returns true when the user has NOT requested reduced motion.
 * Must only be called on the client.
 */
export function allowsMotion(): boolean {
  if (typeof window === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Returns true when the viewport is considered desktop-capable.
 * Used to gate complex timeline choreography on mobile.
 */
export function isDesktop(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(min-width: 1024px)").matches;
}

/**
 * Returns true when the viewport is tablet or above.
 */
export function isTabletOrAbove(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(min-width: 768px)").matches;
}
