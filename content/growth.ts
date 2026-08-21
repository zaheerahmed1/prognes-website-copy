import { routes } from "@/content/nav";

export const growthPage = {
  path: routes.growth,
  title: "AI Growth",
  capabilities: [
    { id: "ugc", label: "AI UGC" },
    { id: "photography", label: "AI product photography" },
    { id: "cgi", label: "CGI product advertising" },
    { id: "creative", label: "Creative production" },
    { id: "ads", label: "Paid advertising" },
    { id: "performance", label: "Performance marketing" },
  ],
  selector: [
    { 
      id: "ugc", 
      label: "AI UGC",
      desc: "AI-amplified user generated content. Rapidly scale creative output and iterate on high-performing ad variations."
    },
    { 
      id: "visuals", 
      label: "Product Visuals",
      desc: "High-fidelity product visualization leveraging AI for infinite variations and environments."
    },
    { 
      id: "cgi", 
      label: "CGI",
      desc: "CGI product advertising combined with AI pipelines for maximum creative leverage."
    },
    { 
      id: "creative", 
      label: "Creative",
      desc: "End-to-end creative production systems designed for volume and performance."
    },
    { 
      id: "ads", 
      label: "Ads",
      desc: "Paid advertising and performance marketing driven by AI-powered creative engines."
    },
  ],
  transformation: [
    "CREATIVE PRODUCTION",
    "AI-AMPLIFIED CREATIVE ENGINE",
    "MORE CREATIVE OUTPUT + FASTER ITERATION + BETTER GROWTH LEVERAGE"
  ]
} as const;
