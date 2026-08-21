"use client";

/**
 * ShiftMotion — narrative motion wrapper for the Shift section.
 *
 * MOTION INTENT:
 *   The Shift is the compositional pivot of the homepage narrative.
 *   The background architecture lines (already in the HTML) animate in
 *   as the section enters — communicating that structure is forming.
 *
 *   Then each transition row reveals sequentially: the "FROM" label first
 *   (slightly dim), the arrow second, the "TO" label last (bright/strong).
 *   This reinforces the directional shift from complexity to structure.
 *
 *   The arch lines animate with a clip-path grow — they "extend" into place
 *   suggesting infrastructure being drawn.
 *
 *   Desktop: full sequential stagger with arch-line animation.
 *   Tablet: sequential stagger, no arch-line anim.
 *   Mobile: CSS reveal only.
 *   Reduced motion: immediate visibility, no animation.
 */

import { useNarrativeMotion } from "@/components/motion/useNarrativeMotion";
import type { NarrativeConfig } from "@/components/motion/useNarrativeMotion";

const config: NarrativeConfig = {
  tabletUp: true,
  build(gsap, ScrollTrigger, container) {
    const isDesktop = window.innerWidth >= 1200;

    const ctx = gsap.context(() => {
      // Header block — single reveal
      gsap.from(".js-shift-header", {
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

      // Background architecture lines — grow from left (desktop only)
      if (isDesktop) {
        gsap.from(".js-arch-line-v", {
          scaleY: 0,
          transformOrigin: "top center",
          opacity: 0,
          duration: 1.0,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            once: true,
          },
        });
        gsap.from(".js-arch-line-h", {
          scaleX: 0,
          transformOrigin: "left center",
          opacity: 0,
          duration: 0.85,
          ease: "power2.out",
          stagger: 0.15,
          delay: 0.2,
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            once: true,
          },
        });
      }

      // Transform items — sequential stagger: each item reveals left → arrow → right
      const items = container.querySelectorAll(".js-transform-item");
      items.forEach((item, i) => {
        const from = item.querySelector(".js-transform-from");
        const arrow = item.querySelector(".js-transform-arrow");
        const to = item.querySelector(".js-transform-to");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            once: true,
          },
          delay: i * 0.12,
        });

        if (from) tl.from(from, { opacity: 0, x: -12, duration: 0.4, ease: "power2.out" });
        if (arrow) tl.from(arrow, { opacity: 0, scale: 0.7, duration: 0.3, ease: "back.out(1.5)" }, "-=0.1");
        if (to) tl.from(to, { opacity: 0, x: 12, duration: 0.5, ease: "power2.out" }, "-=0.1");
      });
    }, container);

    return ctx;
  },
};

export function ShiftMotion({ children }: { children: React.ReactNode }) {
  const ref = useNarrativeMotion<HTMLDivElement>(config);
  return <div ref={ref}>{children}</div>;
}
