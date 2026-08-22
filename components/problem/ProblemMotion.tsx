"use client";

/**
 * ProblemMotion — narrative motion wrapper for the Problem section.
 *
 * MOTION INTENT:
 *   The Problem section should feel "stable" — a clear editorial statement
 *   of the current reality. The intro content reveals as a unified group
 *   (not item-by-item). The friction list items stagger in with a slight
 *   left-to-right clip reveal to communicate "density" (the complexity
 *   that accumulates in manual operations).
 *
 *   On desktop: stagger the friction list items with a clip-path reveal.
 *   On tablet:  same, lighter stagger.
 *   On mobile:  simple opacity reveal via CSS (no GSAP).
 *   Reduced motion: no animation — CSS handles immediate visibility.
 */

import { useNarrativeMotion } from "@/components/motion/useNarrativeMotion";
import type { NarrativeConfig } from "@/components/motion/useNarrativeMotion";

const config: NarrativeConfig = {
  build(gsap, ScrollTrigger, container) {
    const ctx = gsap.context(() => {
      // Intro block — single coordinated reveal
      gsap.from(".js-problem-intro", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      });

      // Friction items — stagger with clip reveal (communicates density/accumulation)
      const items = container.querySelectorAll(".js-friction-item");
      if (items.length) {
        gsap.from(items, {
          opacity: 0,
          x: -16,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: container.querySelector(".js-friction-list") || container,
            start: "top 78%",
            once: true,
          },
        });
      }
    }, container);

    return ctx;
  },
};

export function ProblemMotion({ children }: { children: React.ReactNode }) {
  const ref = useNarrativeMotion<HTMLDivElement>(config);
  return <div ref={ref}>{children}</div>;
}
