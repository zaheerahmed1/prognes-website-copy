import { cta } from "@/content/cta";
import { routes } from "@/content/nav";

export interface WorkCard {
  id: string;
  number: string;
  pillar: string;
  subtitle: string;
  description: string;
  badge?: string;
  ctaLabel: string;
  href: string;
  previewType: "systems" | "creative";
  previewImage?: string;
}

/**
 * Homepage content module.
 * Structured strictly around the 5 core sections:
 *   1. Hero
 *   2. What We Do (Dual Pillars: Growth & Creative vs AI Systems & Automation)
 *   3. Visual Demonstrations (Creative Video Showcase + Systems Demonstration Stage)
 *   4. Our Work (Two distinct portfolio gateway cards)
 *   5. Build Your Advantage (Final CTA)
 *
 * Retains legacy problem and shift definitions for component integrity.
 */
export const home = {
  hero: {
    /** Eyebrow — equal positioning label */
    eyebrow: "Growth × AI Systems",
    /** Concept badge for the visual */
    conceptBadge: "Intelligence → Infrastructure",
    /** Display headline */
    headline: "Grow Faster.\u00A0Operate\u00A0Smarter.",
    /** Supporting copy */
    supportingCopy:
      "We combine AI\u2011powered creative and growth systems with intelligent automation to help businesses capture more opportunities and eliminate operational friction.",
    /** Primary CTA */
    primaryCta: {
      label: "Build your advantage",
      arrow: "\u2192",
      href: cta.primary.href,
    },
    /** Service pathway CTAs */
    servicePathways: [
      { label: "Explore Growth", arrow: "\u2192", href: routes.workCreative },
      { label: "Explore AI Systems", arrow: "\u2192", href: routes.workAutomation },
    ],
    /** Metadata pillars */
    metadata: [
      { id: "01", label: "AI Growth", desc: "Creative & Demand Generation" },
      { id: "02", label: "AI Systems", desc: "Automation & Agentic Infrastructure" },
    ],
  },

  whatWeDo: {
    eyebrow: "What We Do",
    headline: "Two Core Pillars. One Connected Strategy.",
    supportingCopy:
      "PROGNES operates at the intersection of demand generation and operational execution. We build the creative engines that attract customers and the intelligent systems that serve them.",
    spine: {
      framework: ["CREATE", "MARKET", "CONVERT", "OPERATE"],
      tagline: "Sell outcomes, not tools.",
    },
    pillars: {
      growth: {
        id: "growth",
        number: "01",
        label: "Growth & Creative",
        tagline: "High-Velocity Creative & Performance Distribution",
        description:
          "Creative production and visual assets designed for multi-format social advertising, hook iteration, and brand presentation.",
        capabilities: [
          {
            title: "AI UGC Ads",
            desc: "Authentic-looking creator video ads designed to demonstrate products, communicate benefits, and engage audiences.",
          },
          {
            title: "CGI Product Ads",
            desc: "Cinematic 3D product animations featuring liquid simulations, particles, and dramatic reveals.",
          },
          {
            title: "AI Product Photography",
            desc: "Studio-grade product visuals created with custom lighting passes, rich textures, and editorial staging.",
          },
          {
            title: "Creative Production",
            desc: "Modular campaign assets formatted across 9:16 vertical, 4:5 feed, and 1:1 square placements.",
          },
          {
            title: "Paid Ads & Growth Marketing",
            desc: "Testing structures and creative variations designed for paid acquisition channels.",
          },
        ],
        cta: {
          label: "Explore Growth & Creative",
          href: routes.workCreative,
        },
      },
      systems: {
        id: "systems",
        number: "02",
        label: "AI Systems & Automation",
        tagline: "Autonomous Infrastructure & Process Automation",
        description:
          "Intelligent agentic infrastructure designed to eliminate operational friction and automate repetitive business workflows.",
        capabilities: [
          {
            title: "AI Agents & Digital Staff",
            desc: "Autonomous background agents designed to handle multi-step research, document analysis, and task routing.",
          },
          {
            title: "Conversational AI Voice Agents",
            desc: "Voice interfaces configured for automated customer outreach, inbound screening, and appointment scheduling.",
          },
          {
            title: "Knowledge Retrieval & Support Chatbots",
            desc: "Assistance layers grounded in company documentation, product catalogs, and standard operating procedures.",
          },
          {
            title: "CRM & Pipeline Automation",
            desc: "Eliminating manual data entry by updating deal stages, syncing notes, and logging communications automatically.",
          },
          {
            title: "Lead Qualification Systems",
            desc: "Real-time webhook ingestion and custom logic to score incoming prospects and route them to calendar bookings.",
          },
          {
            title: "Internal Workflow Automation",
            desc: "Custom scripts and orchestrations that connect disparate internal tools to eliminate repetitive admin tasks.",
          },
        ],
        cta: {
          label: "Explore AI Systems & Architecture",
          href: routes.workAutomation,
        },
      },
    },
  },

  demos: {
    eyebrow: "Visual Demonstrations",
    headline: "See What We Build.",
    subtext:
      "Explore tangible creative output alongside our intelligent automation architecture.",
    creative: {
      title: "Growth & Creative Showcase",
      description:
        "Select commercial films, CGI product reveals, and AI creator ads produced for testing visual hooks and product framing.",
      items: [
        {
          id: "cgi-bottle-ad",
          title: "CGI Beverage Reveal",
          category: "CGI Product Ads",
          videoSrc: "/video/creative/cgi-bottle-ad.mp4",
          posterSrc: "/images/creative/poster-cgi.jpg",
          aspectRatio: "16/9",
        },
        {
          id: "ugc-creator-demo",
          title: "Vertical Creator Product Demo",
          category: "AI UGC Ads",
          videoSrc: "/video/creative/ugc-creator-demo.mp4",
          posterSrc: "/images/creative/poster-ugc.jpg",
          aspectRatio: "9/16",
        },
        {
          id: "commercial-luxury-film",
          title: "Cinematic Luxury Commercial",
          category: "Commercial Films",
          videoSrc: "/video/creative/commercial-luxury-film.mp4",
          posterSrc: "/images/creative/poster-commercial.jpg",
          aspectRatio: "16/9",
        },
      ],
    },
    systems: {
      title: "AI Systems Demonstration Stage",
      badge: "SYSTEM DEMONSTRATION STAGE",
      headline: "Real Workflow Walkthroughs & Screen Recordings",
      description:
        "Real system demonstrations and workflow recordings will be added here as they are built and ready to showcase.",
      categories: [
        "Autonomous Lead Triage & Ingestion",
        "Conversational AI Voice Agents",
        "Grounded Knowledge Base & Support Chatbots",
        "Automated CRM & Pipeline Synchronization",
        "Internal Workflow & Back-Office Automation",
      ],
      action: {
        label: "Discuss an Automation Project",
        href: routes.advantage,
      },
    },
  },

  ourWork: {
    eyebrow: "Portfolio Gateway",
    headline: "OUR WORK.",
    supportingCopy:
      "Explore the systems we engineer and the creative campaigns we produce.",
    cards: [
      {
        id: "automation",
        number: "01",
        pillar: "AI Systems & Automation",
        subtitle: "Intelligent Systems & Operational Infrastructure",
        description:
          "Explore the intelligent systems, AI agents and business automation solutions we engineer.",
        ctaLabel: "EXPLORE AI WORK",
        href: routes.workAutomation,
        previewType: "systems",
      },
      {
        id: "creative",
        number: "02",
        pillar: "Growth & Creative",
        subtitle: "CGI, AI UGC & Commercial Campaigns",
        description:
          "Explore our creative campaigns, AI UGC, CGI advertisements and product visuals.",
        ctaLabel: "EXPLORE CREATIVE WORK",
        href: routes.workCreative,
        previewType: "creative",
        previewImage: "/images/creative/cover-product.jpg",
      },
    ] as WorkCard[],
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
};
