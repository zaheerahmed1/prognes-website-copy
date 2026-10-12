"use client";

/**
 * ProcessMotion — narrative motion for the Process section.
 *
 * MOTION INTENT:
 *   The three process stages (DIAGNOSE → ENGINEER → DEPLOY) must feel
 *   like a sequential progression rather than three unrelated cards.
 *
 *   The connecting line (CSS ::before on .processFlow) is structural —
 *   it appears as part of the container. Then each stage reveals in
 *   order: 01, 02, 03.
 *
 *   The index number appears first (slight scale bounce),
 *   then the label + description together.
 *   This communicates deliberate phased execution.
 *
 *   Desktop: left-to-right staged reveal with slight translate from below.
 *   Mobile: top-to-bottom sequential reveal — vertical layout preserved.
 *   Reduced motion: no animation.
 */

import { useNarrativeMotion } from "@/components/motion/useNarrativeMotion";
import type { NarrativeConfig } from "@/components/motion/useNarrativeMotion";

const config: NarrativeConfig = {
  build(gsap, ScrollTrigger, container) {
    const ctx = gsap.context(() => {
      // Intro
      gsap.from(".js-process-intro", {
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

      // Process stages — sequential stagger (the connecting line is already there via CSS)
      const stages = container.querySelectorAll(".js-process-stage");
      if (stages.length) {
        gsap.from(stages, {
          opacity: 0,
          y: 20,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container.querySelector(".js-process-flow") || container,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Index circles — slight bounce to highlight the sequence
      const indices = container.querySelectorAll(".js-process-index");
      if (indices.length) {
        gsap.from(indices, {
          scale: 0.6,
          opacity: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container.querySelector(".js-process-flow") || container,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, container);

    return ctx;
  },
};

export function ProcessMotion({ children }: { children: React.ReactNode }) {
  const ref = useNarrativeMotion<HTMLDivElement>(config);
  return <div ref={ref}>{children}</div>;
}
