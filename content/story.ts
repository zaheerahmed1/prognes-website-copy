export const connectionData = {
  headline: "One Connected Operating Loop",
  supportingCopy:
    "Growth and Systems are not disconnected silos. AI Growth generates and captures market demand. AI Systems convert that demand into revenue and scale operations automatically.",
  framework: [
    {
      pillar: "AI GROWTH",
      tagline: "Demand & Creative Production",
      stages: [
        {
          id: "create",
          number: "01",
          label: "CREATE",
          desc: "AI-amplified creative production, CGI, and hyper-iterative visual assets.",
        },
        {
          id: "market",
          number: "02",
          label: "MARKET",
          desc: "Intelligent demand generation, algorithmic ad distribution, and audience capture.",
        },
      ],
    },
    {
      pillar: "AI SYSTEMS",
      tagline: "Automation & Agentic Infrastructure",
      stages: [
        {
          id: "convert",
          number: "03",
          label: "CONVERT",
          desc: "Automated qualification, AI sales triage, and CRM pipeline orchestration.",
        },
        {
          id: "operate",
          number: "04",
          label: "OPERATE",
          desc: "Agentic customer workflows, support automation, and continuous leverage.",
        },
      ],
    },
  ],
  steps: ["CREATE", "MARKET", "CONVERT", "OPERATE"],
} as const;

export const flywheelData = {
  headline: "Compounding Leverage",
  supportingCopy:
    "Intelligent systems create a compounding advantage where every operational cycle increases capacity, margins, and market velocity.",
  centerConcept: "LEVERAGE",
  stages: [
    {
      id: "create",
      number: "01",
      pillar: "AI GROWTH",
      label: "CREATE",
      desc: "AI-amplified creative production and hyper-rapid visual iteration",
    },
    {
      id: "market",
      number: "02",
      pillar: "AI GROWTH",
      label: "MARKET",
      desc: "Intelligent demand generation and performance ad distribution",
    },
    {
      id: "convert",
      number: "03",
      pillar: "AI SYSTEMS",
      label: "CONVERT",
      desc: "Automated qualification, AI sales triage and pipeline routing",
    },
    {
      id: "operate",
      number: "04",
      pillar: "AI SYSTEMS",
      label: "OPERATE",
      desc: "Agentic operations, connected workflows and compounding capacity",
    },
  ],
} as const;

export const processData = {
  headline: "How we build",
  stages: [
    {
      id: "diagnose",
      label: "DIAGNOSE",
      desc: "Analyze existing operations to identify manual bottlenecks and growth constraints.",
    },
    {
      id: "engineer",
      label: "ENGINEER",
      desc: "Design the intelligent infrastructure and connective tissue required for leverage.",
    },
    {
      id: "deploy",
      label: "DEPLOY",
      desc: "Implement the system into active production and measure the compound result.",
    },
  ],
} as const;


