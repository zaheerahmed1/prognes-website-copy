"use client";

/**
 * FlywheelMotion — signature motion for the Flywheel section.
 *
 * MOTION INTENT:
 *   The flywheel is a key business concept — compounding leverage.
 *   The motion must communicate a controlled operational loop, NOT a
 *   perpetually spinning carousel.
 *
 *   Desktop sequence:
 *     1. Center "LEVERAGE" concept appears first — establishes the goal.
 *     2. The six stages reveal with a slow, measured rotation-aware
 *        stagger. Each stage appears progressively clockwise around the
 *        grid: CREATE → ACQUIRE → CONVERT (top row), then
 *        AUTOMATE → OPERATE → SERVE (bottom row, reversed = clockwise flow).
 *        This traces the flywheel cycle visually.
 *     3. The containing loop border (CSS ::before) is already present.
 *        No additional shapes are added.
 *     4. After reveal, all stages settle into final position and stay.
 *        There is NO perpetual spin.
 *
 *   Mobile / tablet:
 *     Sequential reveal only — each stage fades in from bottom upward.
 *     The vertical sequence layout is preserved unchanged.
 *
 *   Reduced motion: no animation, content immediately visible.
 */

import { useNarrativeMotion } from "@/components/motion/useNarrativeMotion";
import type { NarrativeConfig } from "@/components/motion/useNarrativeMotion";

const config: NarrativeConfig = {
  build(gsap, ScrollTrigger, container) {
    const isDesktop = window.innerWidth >= 1024;

    const ctx = gsap.context(() => {
      // Intro reveal
      gsap.from(".js-flywheel-intro", {
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

      if (isDesktop) {
        // Desktop: center concept first
        gsap.from(".js-flywheel-center", {
          opacity: 0,
          scale: 0.85,
          duration: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: container.querySelector(".js-flywheel-diagram") || container,
            start: "top 78%",
            once: true,
          },
        });

        // Stages reveal in clockwise grid order:
        // Grid positions: 1(col1 row1), 2(col2 row1), 3(col3 row1)
        //                 4(col3 row2), 5(col2 row2), 6(col1 row2)
        // CSS places them this way via nth-child grid assignments.
        // We stagger by DOM order but with a slow, purposeful pace.
        const stages = container.querySelectorAll(".js-flywheel-stage");
        if (stages.length) {
          gsap.from(stages, {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            ease: "power2.out",
            stagger: {
              each: 0.14,
              from: "start",
            },
            delay: 0.25, // after center appears
            scrollTrigger: {
              trigger: container.querySelector(".js-flywheel-diagram") || container,
              start: "top 78%",
              once: true,
            },
          });
        }
      } else {
        // Mobile / Tablet: simple sequential reveal — preserves vertical layout
        const stages = container.querySelectorAll(".js-flywheel-stage");
        if (stages.length) {
          gsap.from(stages, {
            opacity: 0,
            y: 16,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: container.querySelector(".js-flywheel-diagram") || container,
              start: "top 80%",
              once: true,
            },
          });
        }
      }
    }, container);

    return ctx;
  },
};

export function FlywheelMotion({ children }: { children: React.ReactNode }) {
  const ref = useNarrativeMotion<HTMLDivElement>(config);
  return <div ref={ref}>{children}</div>;
}
