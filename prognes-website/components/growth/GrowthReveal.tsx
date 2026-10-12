"use client";

/**
 * GrowthReveal — CSS-class-based Level 2 scroll reveal for the Growth section.
 * Sets data-revealed attribute that CSS uses to transition the intro block.
 */

import { useScrollReveal } from "@/components/motion/useScrollReveal";

export function GrowthReveal({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1, rootMargin: "0px 0px -80px 0px" });
  return (
    <div ref={ref} className="js-growth-reveal">
      {children}
    </div>
  );
}
