export const connectionData = {
  headline: "One Operating Model",
  supportingCopy: "Growth and Systems are not unrelated services. Growth creates opportunities. Systems capture, process, and scale them.",
  steps: [
    "CAMPAIGN",
    "LEAD",
    "INTELLIGENCE",
    "SALES",
    "CRM",
    "CUSTOMER",
    "OPERATIONS",
    "AUTOMATION"
  ]
} as const;

export const flywheelData = {
  headline: "Compounding Leverage",
  supportingCopy: "Intelligent systems create a compounding advantage where every cycle increases capacity and output.",
  centerConcept: "LEVERAGE",
  stages: [
    { id: "create", label: "CREATE", desc: "AI-accelerated production" },
    { id: "acquire", label: "ACQUIRE", desc: "Intelligent demand generation" },
    { id: "convert", label: "CONVERT", desc: "Automated qualification and sales" },
    { id: "serve", label: "SERVE", desc: "Agentic customer support" },
    { id: "operate", label: "OPERATE", desc: "Connected business operations" },
    { id: "automate", label: "AUTOMATE", desc: "Workflow orchestration" }
  ]
} as const;

export const processData = {
  headline: "How we build",
  stages: [
    {
      id: "diagnose",
      label: "DIAGNOSE",
      desc: "Analyze existing operations to identify manual bottlenecks and growth constraints."
    },
    {
      id: "engineer",
      label: "ENGINEER",
      desc: "Design the intelligent infrastructure and connective tissue required for leverage."
    },
    {
      id: "deploy",
      label: "DEPLOY",
      desc: "Implement the system into active production and measure the compound result."
    }
  ]
} as const;

