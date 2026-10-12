"use client";

/**
 * useScrollReveal — lightweight IntersectionObserver-based reveal hook.
 *
 * Adds the CSS class `data-revealed="true"` to a ref'd element when it
 * enters the viewport. Sections then animate via pure CSS transitions
 * defined in their module files.
 *
 * This is used for LEVEL 2 section reveals (non-signature sections).
 * LEVEL 3 signature sections use GSAP via useNarrativeMotion instead.
 *
 * Respects prefers-reduced-motion — the attribute is still set so
 * content is immediately visible, but CSS handles no-animation state.
 */

import { useEffect, useRef } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  /** If true, only fires once and disconnects after reveal */
  once?: boolean;
};

export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.setAttribute("data-revealed", "true");
            if (once) observer.disconnect();
          } else if (!once) {
            el.removeAttribute("data-revealed");
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
