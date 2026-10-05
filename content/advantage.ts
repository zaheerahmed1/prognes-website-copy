/**
 * PROGNES Advantage Audit — page content.
 * All copy is taken verbatim from the approved specification.
 */

export const advantagePage = {
  title: "Advantage Audit",
  description:
    "Discover where your business is losing leads, wasting time, or leaving growth on the table.",
} as const;

export const advantageHero = {
  eyebrow: "Advantage Audit",
  headline: "Find your unfair advantage.",
  subtext:
    "Discover where your business is losing leads, wasting time, or leaving growth on the table.",
} as const;

export const advantagePillars = [
  {
    id: "lead-leakage",
    label: "Lead Leakage",
    description: "Where potential customers are being lost.",
  },
  {
    id: "manual-friction",
    label: "Manual Friction",
    description: "Where repetitive work is consuming valuable time.",
  },
  {
    id: "ai-opportunities",
    label: "AI Opportunities",
    description:
      "Where AI agents or automation can realistically create leverage.",
  },
  {
    id: "growth-creative",
    label: "Growth & Creative",
    description:
      "Where better creative or growth execution could unlock opportunities.",
  },
] as const;

export const advantageDeliverable = {
  headline: "A clearer picture of where your business can gain leverage.",
  copy: "The Advantage Audit identifies 3–5 actionable opportunities specific to the business.",
  differentiators: [
    "Not a generic AI report.",
    "Not a sales pitch disguised as an audit.",
  ],
  closing:
    "A practical look at where PROGNES believes the biggest opportunities are.",
} as const;

export const advantageSteps = [
  {
    number: "01",
    title: "Tell us about your business",
    description: "Complete the short assessment.",
  },
  {
    number: "02",
    title: "We find the leverage",
    description:
      "PROGNES reviews the information and identifies the highest-impact opportunities.",
  },
  {
    number: "03",
    title: "Reveal your advantage",
    description:
      "You receive the key findings and, where appropriate, an opportunity to discuss implementation with PROGNES.",
  },
] as const;

export const advantageForm = {
  headline: "Find your unfair advantage.",
  subheadline:
    "Tell us where your business is getting stuck. We'll identify where you can recover lost opportunities, eliminate unnecessary work, and put AI to work.",
  fields: {
    name: { label: "Your Name", placeholder: "Full name", required: true },
    email: {
      label: "Business Email",
      placeholder: "you@company.com",
      required: true,
    },
    businessName: {
      label: "Business Name",
      placeholder: "Company name",
      required: true,
    },
    website: {
      label: "Business Website",
      placeholder: "https://example.com",
      required: true,
    },
    phone: {
      label: "Phone Number",
      placeholder: "+1 (555) 000-0000",
      required: false,
    },
  },
  challengeLabel: "Main Challenge",
  challengeOptions: [
    "Losing leads or opportunities",
    "Too much manual work",
    "Want to integrate AI agents",
    "Sales or follow-up is inefficient",
    "Need more creative / growth",
    "Something else",
  ],
  cta: "Reveal my advantage",
  supportingText:
    "No obligation. Just a clear look at where your business can improve.",
} as const;

export const advantageSuccess = {
  headline: "Your advantage audit is in motion.",
  copy: "We'll review your information and identify where PROGNES believes your business can create the greatest leverage.",
  cta: "Book a strategy call",
} as const;
