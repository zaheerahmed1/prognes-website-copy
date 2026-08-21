"use client";

/**
 * ConnectionMotion — narrative motion for the Growth ↔ Systems section.
 *
 * MOTION INTENT:
 *   The connection must feel intentional — not decorative.
 *   The two pillar labels (AI GROWTH / AI SYSTEMS) reveal from opposite
 *   sides to emphasize their bilateral relationship.
 *   The flow steps then cascade downward, communicating the operational
 *   pipeline that connects the two pillars.
 *
 *   No perpetual animation. One-shot reveal on scroll.
 *   Desktop: full bilateral pillar reveal + step cascade.
 *   Tablet: same.
 *   Mobile: simple opacity reveal via CSS (IntersectionObserver).
 *   Reduced motion: no animation.
 */

import { useNarrativeMotion } from "@/components/motion/useNarrativeMotion";
import type { NarrativeConfig } from "@/components/motion/useNarrativeMotion";

const config: NarrativeConfig = {
  tabletUp: true,
  build(gsap, ScrollTrigger, container) {
    const ctx = gsap.context(() => {
      // Intro header
      gsap.from(".js-connection-intro", {
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

      // Two pillars reveal from opposite sides — bilateral relationship
      const leftPillar = container.querySelector(".js-pillar-left");
      const rightPillar = container.querySelector(".js-pillar-right");
      if (leftPillar && rightPillar) {
        gsap.from(leftPillar, {
          opacity: 0,
          x: -24,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.querySelector(".js-connection-diagram") || container,
            start: "top 80%",
            once: true,
          },
        });
        gsap.from(rightPillar, {
          opacity: 0,
          x: 24,
          duration: 0.65,
          ease: "power2.out",
          delay: 0.08,
          scrollTrigger: {
            trigger: container.querySelector(".js-connection-diagram") || container,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Flow steps — cascade downward
      const steps = container.querySelectorAll(".js-connection-step");
      if (steps.length) {
        gsap.from(steps, {
          opacity: 0,
          y: 12,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: container.querySelector(".js-connection-flow") || container,
            start: "top 78%",
            once: true,
          },
        });
      }
    }, container);

    return ctx;
  },
};

export function ConnectionMotion({ children }: { children: React.ReactNode }) {
  const ref = useNarrativeMotion<HTMLDivElement>(config);
  return <div ref={ref}>{children}</div>;
}
