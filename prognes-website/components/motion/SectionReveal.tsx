"use client";

/**
 * SectionReveal — generic CSS-class-based scroll reveal wrapper.
 *
 * For LEVEL 2 reveals on sections that don't need GSAP narrative choreography.
 * Adds data-revealed="true" when the element enters the viewport.
 * The CSS transition is defined in globals.css via the section-reveal class.
 *
 * Usage:
 *   <SectionReveal>
 *     <div>...</div>
 *   </SectionReveal>
 */

import { useScrollReveal } from "@/components/motion/useScrollReveal";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export function SectionReveal({ children, className, threshold = 0.12 }: SectionRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold, rootMargin: "0px 0px -80px 0px" });
  return (
    <div ref={ref} className={`section-reveal${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
