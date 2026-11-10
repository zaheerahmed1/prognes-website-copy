import { routes } from "@/content/nav";

/**
 * Showcase entries represent verified architectural blueprints and operational specifications.
 * Strictly adheres to rule: No invented client names, fake testimonials, or fabricated case studies.
 */
export interface SystemBlueprint {
  id: string;
  code: string;
  title: string;
  category: "AI Growth" | "AI Systems";
  summary: string;
  architecture: {
    inputs: string[];
    orchestration: string;
    outputs: string[];
  };
  specifications: {
    label: string;
    value: string;
  }[];
}

export const systemBlueprints: SystemBlueprint[] = [
  {
    id: "lead-qualification-triage",
    code: "SYS-ARCH-01",
    title: "Autonomous Lead Triage & Intelligence Pipeline",
    category: "AI Systems",
    summary:
      "A real-time inbound qualification engine that ingests, scores, and routes high-intent prospects within seconds, enriching context with intent telemetry.",
    architecture: {
      inputs: ["Inbound Webhooks", "Form Telemetry", "Domain Signals"],
      orchestration: "Multi-Agent Evaluation & Structured Schema Validation",
      outputs: ["Instant CRM Staging", "Enriched Alerts", "Calendly Auto-Prompt"],
    },
    specifications: [
      { label: "Trigger Latency", value: "< 450ms" },
      { label: "Routing Logic", value: "Deterministic Rule Tree" },
      { label: "Fallback", value: "Zero-Loss Queue" },
    ],
  },
  {
    id: "omnichannel-creative-engine",
    code: "SYS-ARCH-02",
    title: "Algorithmic Creative Generation & Testing Engine",
    category: "AI Growth",
    summary:
      "A modular asset production system synthesizing 80+ high-fidelity creative variations weekly, matching multi-channel distribution specs across Meta, TikTok, and YouTube.",
    architecture: {
      inputs: ["Raw Brand Assets", "Value Propositions", "Hook Variations"],
      orchestration: "Procedural Assembly & Automated Audio/Caption Alignment",
      outputs: ["Dynamic 9:16 / 1:1 Stacks", "Ad Account Auto-Ingest", "Performance Logging"],
    },
    specifications: [
      { label: "Asset Velocity", value: "80+ variants / cycle" },
      { label: "Format Adapters", value: "Meta / TikTok / YouTube" },
      { label: "Brand Compliance", value: "100% Token Enforced" },
    ],
  },
  {
    id: "autonomous-support-rag",
    code: "SYS-ARCH-03",
    title: "Agentic Support & Operations Infrastructure",
    category: "AI Systems",
    summary:
      "Context-aware resolution layer connected directly to live documentation, customer databases, and order management tools for instant first-contact resolution.",
    architecture: {
      inputs: ["Customer Queries", "Helpdesk Webhooks", "Internal Docs"],
      orchestration: "Hybrid Vector Search + Tool-Calling Execution Agent",
      outputs: ["Autonomous Resolution", "Structured Ticket Tagging", "Human Escalation"],
    },
    specifications: [
      { label: "Knowledge Source", value: "Live Vector Index" },
      { label: "Safety Bounds", value: "Strict Tool Scoping" },
      { label: "Resolution Speed", value: "Sub-second" },
    ],
  },
];

export const workPage = {
  path: routes.work,
  title: "Work",
  items: systemBlueprints,
} as const;

