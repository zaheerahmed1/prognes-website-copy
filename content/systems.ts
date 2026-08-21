import { routes } from "@/content/nav";

export const systemsPage = {
  path: routes.systems,
  title: "AI Systems",
  modules: [
    {
      id: "revenue",
      number: "01",
      title: "REVENUE",
      items: ["Lead qualification", "AI sales", "CRM", "Follow-up"],
    },
    {
      id: "support",
      number: "02",
      title: "SUPPORT",
      items: ["Customer support", "Knowledge / RAG", "AI chatbots"],
    },
    {
      id: "operations",
      number: "03",
      title: "OPERATIONS",
      items: ["Internal automation", "Agentic workflows", "Data pipelines"],
    }
  ],
  architecture: [
    { id: "goal", label: "Business Goal", desc: "Define the operational objective." },
    { id: "intelligence", label: "Intelligence", desc: "LLMs and reasoning models." },
    { id: "orchestration", label: "Orchestration", desc: "Agentic routing and logic." },
    { id: "data", label: "Data + Tools", desc: "Integrations and active memory." },
    { id: "execution", label: "Execution", desc: "Automated business actions." },
    { id: "outcome", label: "Outcome", desc: "Measurable operational leverage." },
  ],
  narrative: [
    "FRAGMENTED OPERATIONS",
    "CONNECTED INTELLIGENT SYSTEMS",
    "AUTOMATION + AGENTS + DATA + WORKFLOWS",
    "OPERATIONAL LEVERAGE"
  ]
} as const;
