"use client";

/**
 * SystemsMotion — narrative motion wrapper for the AI Systems section.
 *
 * MOTION INTENT:
 *   Systems should feel like a system resolving into organized structure.
 *   Sequence:
 *     1. Intro + narrative sequence reveal (stable, grounding)
 *     2. System modules appear one-by-one (left → center → right)
 *        — communicates distinct operating domains
 *     3. Architecture nodes cascade top → bottom
 *        — communicates the intelligence → execution flow
 *
 *   No fake data streams, no random lines. The existing architecture
 *   diagram connectors (CSS ::before pseudo-elements) are structural —
 *   they don't animate independently, they appear as part of their nodes.
 *
 *   Desktop: full three-phase sequence.
 *   Tablet: intro + modules (no architecture stagger).
 *   Mobile: CSS reveal only.
 *   Reduced motion: no animation.
 */

import { useNarrativeMotion } from "@/components/motion/useNarrativeMotion";
import type { NarrativeConfig } from "@/components/motion/useNarrativeMotion";

const config: NarrativeConfig = {
  tabletUp: true,
  build(gsap, ScrollTrigger, container) {
    const isDesktop = window.innerWidth >= 1024;

    const ctx = gsap.context(() => {
      // Phase 1 — Intro block
      gsap.from(".js-systems-intro", {
        opacity: 0,
        y: 20,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 82%",
          once: true,
        },
      });

      // Phase 2 — System modules
      const modules = container.querySelectorAll(".js-system-module");
      if (modules.length) {
        gsap.from(modules, {
          opacity: 0,
          y: 28,
          duration: 0.6,
          ease: "power2.out",
          stagger: isDesktop ? 0.12 : 0.08,
          scrollTrigger: {
            trigger: container.querySelector(".js-systems-modules") || container,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Phase 3 — Architecture nodes (desktop only — visual cascade shows resolution)
      if (isDesktop) {
        const nodes = container.querySelectorAll(".js-arch-node");
        if (nodes.length) {
          gsap.from(nodes, {
            opacity: 0,
            scale: 0.92,
            y: 16,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: container.querySelector(".js-systems-architecture") || container,
              start: "top 78%",
              once: true,
            },
          });
        }
      }
    }, container);

    return ctx;
  },
};

export function SystemsMotion({ children }: { children: React.ReactNode }) {
  const ref = useNarrativeMotion<HTMLDivElement>(config);
  return <div ref={ref}>{children}</div>;
}
