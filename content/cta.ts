import { CALENDLY_URL } from "@/lib/advantage";

export const cta = {
  primary: {
    label: "Build your advantage",
    href: "/advantage",
  },
  secondary: [
    { label: "Explore our systems", href: "/work/automation" },
    { label: "Explore AI Growth", href: "/work/creative" },
    { label: "Book a strategy call", href: CALENDLY_URL, external: true },
    { label: "Talk to an engineer", href: CALENDLY_URL, external: true },
    { label: "View system", href: "/work" },
  ],
  subtext:
    "Choose your path: Submit an Advantage Audit to receive an architectural blueprint, or book a direct technical briefing with an engineer.",
  reassurance:
    "Direct engineering evaluation · 30-minute scope assessment · Zero sales friction",
} as const;

