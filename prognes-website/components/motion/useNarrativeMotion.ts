"use client";

/**
 * useNarrativeMotion — GSAP ScrollTrigger hook for signature sections.
 *
 * Dynamically loads GSAP so it never appears in the critical path.
 * Respects prefers-reduced-motion fully — does nothing when reduced.
 * Supports desktop / tablet / mobile capability tiers.
 *
 * Called from individual section client wrappers.
 * Each caller gets its own GSAP Context for clean unmount disposal.
 */

import { useEffect, useRef } from "react";
import { loadGSAP, allowsMotion } from "@/lib/motion";
import type { GSAPType, STType } from "@/lib/motion";

export type NarrativeTarget = {
  selector: string;
  vars: gsap.TweenVars;
  staggered?: boolean;
};

export type NarrativeConfig = {
  /**
   * A function that receives gsap + ScrollTrigger and the container element,
   * and returns a GSAP Context. The Context is killed on unmount.
   */
  build: (
    gsap: typeof GSAPType,
    ScrollTrigger: typeof STType,
    container: HTMLElement,
  ) => gsap.Context;

  /** If true, skips on mobile (< 768px). Default: false */
  desktopOnly?: boolean;
  /** If true, skips on mobile but runs on tablet+. Default: false */
  tabletUp?: boolean;
};

export function useNarrativeMotion<T extends HTMLElement>(
  config: NarrativeConfig,
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!allowsMotion()) return;

    const el = containerRef.current;
    if (!el) return;

    let isActive = true;
    let ctx: gsap.Context | null = null;

    loadGSAP().then(({ gsap, ScrollTrigger }) => {
      // Re-check after async — user might have navigated away or Strict Mode unmounted
      if (!isActive || !containerRef.current) return;

      if (config.desktopOnly && window.innerWidth < 1024) return;
      if (config.tabletUp && window.innerWidth < 768) return;

      ctx = config.build(gsap, ScrollTrigger, el);
    });

    return () => {
      isActive = false;
      ctx?.kill();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return containerRef;
}
