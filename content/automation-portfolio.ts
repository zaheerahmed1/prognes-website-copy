export interface AutomationProject {
  id: string;
  title: string;
  category:
    | "AI Agents"
    | "Voice Systems"
    | "CRM Automation"
    | "Support Systems"
    | "Workflow Automation";
  overview: string;
  capabilitiesDelivered: string[];
  videoDemoUrl?: string;
  posterImageUrl?: string;
}

export const automationPortfolioCopy = {
  eyebrow: "AI Systems & Automation",
  statusLabel: "PORTFOLIO IN DEVELOPMENT",
  headline: "Real Systems. Documented Here.",
  description:
    "We're preparing detailed demonstrations of the AI agents, automations, and operational systems we build. This portfolio will grow as projects are completed and approved for publication.",
  actionLabel: "Discuss an Automation Project",
} as const;

export const systemCategories = [
  {
    id: "lead-triage",
    title: "Autonomous Lead Triage",
    description:
      "Ingesting inbound webhooks and form submissions to evaluate intent and route qualified contacts directly to sales calendars.",
    capabilities: [
      "Webhook & form ingestion",
      "Custom qualification logic",
      "Instant CRM pipeline staging",
      "Automated calendar handoffs",
    ],
  },
  {
    id: "voice-agents",
    title: "Conversational AI Voice Agents",
    description:
      "Voice interfaces configured for automated customer outreach, inbound screening, and scheduled appointment confirmations.",
    capabilities: [
      "Natural conversational flow",
      "Calendar scheduling tool calls",
      "Structured call summaries",
      "Human operator escalation",
    ],
  },
  {
    id: "support-chatbots",
    title: "Knowledge Retrieval & Support Chatbots",
    description:
      "Customer and internal assistance layers grounded in company documentation, product catalogs, and standard operating procedures.",
    capabilities: [
      "Vector search documentation lookup",
      "Deterministic policy fences",
      "Structured ticket classification",
      "Multi-channel support integrations",
    ],
  },
  {
    id: "crm-automation",
    title: "CRM & Pipeline Automation",
    description:
      "Eliminating manual data updates by syncing communications, stage transitions, and follow-up reminders automatically.",
    capabilities: [
      "Automated contact enrichment",
      "Deal stage progression logic",
      "Task & reminder dispatch",
      "Bi-directional database sync",
    ],
  },
  {
    id: "workflow-automation",
    title: "Internal Workflow Automation",
    description:
      "Custom scripts and orchestrations that connect disparate internal tools to remove repetitive administrative tasks.",
    capabilities: [
      "Document parsing & extraction",
      "Multi-app data routing",
      "Automated team reporting",
      "Exception handling & alerts",
    ],
  },
] as const;

/**
 * Projects will be populated here as real implementations and video walkthroughs are completed.
 */
export const automationProjects: AutomationProject[] = [];

