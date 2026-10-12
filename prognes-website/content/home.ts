import { cta } from "@/content/cta";
import { routes } from "@/content/nav";

/**
 * Homepage content module.
 * Section order matches the approved narrative.
 *
 * Hero copy is derived strictly from AI_AGENCY_WEBSITE_MASTER_SPEC.md:
 *   - Core brand idea: "Unfair Operational Leverage" (§01)
 *   - Agency positioning: "AI Systems + AI Growth" (§02)
 *   - Value proposition: "We engineer systems that create operational leverage" (§05)
 *   - Hero concept: "Intelligence → Infrastructure" (§11)
 *   - Primary CTA: "Build your advantage →" (§26)
 *   - Secondary CTA: "Explore our systems" (§27)
 *   - Two pillars: AI Growth + AI Systems (§02–§04)
 *
 * Do not invent replacement copy.
 */
export const home = {
  sections: [
    { id: "hero", label: "Hero" },
    { id: "problem", label: "Problem" },
    { id: "shift", label: "The shift" },
    { id: "growth", label: "AI Growth" },
    { id: "systems", label: "AI Systems" },
    { id: "connection", label: "Growth and Systems" },
    { id: "flywheel", label: "Flywheel" },
    { id: "process", label: "How we build" },
    { id: "showcase", label: "System showcase" },
    { id: "proof", label: "Proof" },
    { id: "cta", label: "Final CTA" },
  ],
  hero: {
    /** Eyebrow — agency positioning label (§02) */
    eyebrow: "AI Systems + AI Growth Agency",
    /** Concept badge for the visual — the 3D concept (§11) */
    conceptBadge: "Intelligence → Infrastructure",
    /** Display headline — core brand idea (§01) */
    headline: "Unfair Operational\u00A0Leverage",
    /** Supporting copy — value proposition (§05) + operating loop (§02) */
    supportingCopy:
      "We engineer systems that create operational leverage. Intelligent automation, AI\u2011powered growth systems, and agentic infrastructure — built as one continuous operating loop.",
    /** Primary CTA (§26) */
    primaryCta: {
      label: "Build your advantage",
      arrow: "\u2192",
      href: cta.primary.href,
    },
    /** Secondary CTA (§27) */
    secondaryCta: {
      label: "Explore our systems",
      href: routes.systems,
    },
    /** Metadata pillars — the two connected capabilities (§02–§04) */
    metadata: [
      { id: "01", label: "AI Growth", desc: "Demand & Creative Production" },
      { id: "02", label: "AI Systems", desc: "Agentic & Workflow Infrastructure" },
    ],
  },
  problem: {
    eyebrow: "Current Reality",
    headline: "Manual Growth vs.\nAutomated Intelligence",
    supportingCopy:
      "Businesses lose leverage when growth is constrained by manual operations. Without intelligent systems, scaling creates operational friction.",
    frictionPoints: [
      "Manual processes",
      "Fragmented tools",
      "Slow execution",
      "Repetitive work",
      "Poor follow-up",
      "Disconnected marketing and operations",
    ],
  },
  shift: {
    eyebrow: "The Shift",
    headline: "From Complexity\nto Structure",
    supportingCopy:
      "A fundamental shift from manual operations to intelligent systems. The transition turns fragmented complexity into structured operational leverage.",
    transitions: [
      { from: "Fragmentation", to: "Connected Intelligence" },
      { from: "Complexity", to: "Systems" },
      { from: "Manual Work", to: "Leverage" },
    ],
  },
} as const;
