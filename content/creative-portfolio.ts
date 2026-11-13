export type CreativeCategory =
  | "All Work"
  | "CGI Product Ads"
  | "AI UGC Ads"
  | "Commercial Films"
  | "Product Photography"
  | "Meta Ad Creatives"
  | "AI Influencer";

export interface CreativeProject {
  id: string;
  title: string;
  category: CreativeCategory;
  mediaType: "video" | "image";
  src: string;
  poster?: string;
  aspectRatio: "16/9" | "9/16" | "4/5" | "1/1";
  description: string;
  deliverables: string[];
}

export const creativeCategories: CreativeCategory[] = [
  "All Work",
  "CGI Product Ads",
  "AI UGC Ads",
  "Commercial Films",
  "Product Photography",
  "Meta Ad Creatives",
  "AI Influencer",
];

export const creativeProjects: CreativeProject[] = [
  // ── CGI Product Ads ──
  {
    id: "cgi-bottle-ad",
    title: "CGI Beverage Reveal",
    category: "CGI Product Ads",
    mediaType: "video",
    src: "/video/creative/cgi-bottle-ad.mp4",
    poster: "/images/creative/poster-cgi.jpg",
    aspectRatio: "16/9",
    description: "3D bottle animation featuring liquid particle simulation, dynamic lighting passes, and dramatic product reveal.",
    deliverables: ["16:9 3D Animation", "Lighting & Fluid Passes"],
  },
  {
    id: "cgi-floating-product",
    title: "CGI Floating Cosmetics",
    category: "CGI Product Ads",
    mediaType: "video",
    src: "/video/creative/cgi-floating-product.mp4",
    poster: "/images/creative/poster-cgi.jpg",
    aspectRatio: "16/9",
    description: "Zero-gravity product animation showcasing rotational angles and high-fidelity texture rendering.",
    deliverables: ["16:9 Motion Render", "Texture Detail Passes"],
  },
  {
    id: "cgi-particles",
    title: "CGI Kinetic Particle Flow",
    category: "CGI Product Ads",
    mediaType: "video",
    src: "/video/creative/cgi-particles.mp4",
    poster: "/images/creative/poster-cgi.jpg",
    aspectRatio: "16/9",
    description: "Particle simulation and abstract 3D environment composition for product feature highlights.",
    deliverables: ["16:9 Particle Render", "Environment Simulation"],
  },

  // ── AI UGC Ads ──
  {
    id: "ugc-creator-demo",
    title: "Vertical Creator Product Demo",
    category: "AI UGC Ads",
    mediaType: "video",
    src: "/video/creative/ugc-creator-demo.mp4",
    poster: "/images/creative/poster-ugc.jpg",
    aspectRatio: "9/16",
    description: "Vertical social ad format featuring natural presenter delivery and live product interaction.",
    deliverables: ["9:16 Vertical Video", "Presenter Demonstration"],
  },
  {
    id: "ugc-testimonial",
    title: "Creator Direct-Response Concept",
    category: "AI UGC Ads",
    mediaType: "video",
    src: "/video/creative/ugc-testimonial.mp4",
    poster: "/images/creative/poster-ugc.jpg",
    aspectRatio: "9/16",
    description: "Testimonial-style creator delivery framed for mobile social placements and direct engagement.",
    deliverables: ["9:16 Testimonial Cut", "Social Feed Framing"],
  },
  {
    id: "ugc-lifestyle",
    title: "Lifestyle Routine Integration",
    category: "AI UGC Ads",
    mediaType: "video",
    src: "/video/creative/ugc-lifestyle.mp4",
    poster: "/images/creative/poster-ugc.jpg",
    aspectRatio: "9/16",
    description: "Daily routine setting showcasing contextual product placement and creator narrative pacing.",
    deliverables: ["9:16 Lifestyle Format", "Contextual Product Demo"],
  },
  {
    id: "ugc-hook-test",
    title: "Multi-Hook Creator Ad",
    category: "AI UGC Ads",
    mediaType: "video",
    src: "/video/creative/ugc-hook-test.mp4",
    poster: "/images/creative/poster-ugc.jpg",
    aspectRatio: "9/16",
    description: "High-tempo creator demonstration engineered for short-form feed testing and retention.",
    deliverables: ["9:16 Fast-Paced Cut", "Dynamic Subtitles"],
  },
  {
    id: "ugc-social-cut",
    title: "Social Creative Cut",
    category: "AI UGC Ads",
    mediaType: "video",
    src: "/video/creative/ugc-social-cut.mp4",
    poster: "/images/creative/poster-ugc.jpg",
    aspectRatio: "9/16",
    description: "Mobile-first creator video formatted for paid social testing and audience engagement.",
    deliverables: ["9:16 Ad Creative", "Vertical Cut"],
  },

  // ── Commercial Films ──
  {
    id: "commercial-luxury-film",
    title: "Cinematic Luxury Commercial",
    category: "Commercial Films",
    mediaType: "video",
    src: "/video/creative/commercial-luxury-film.mp4",
    poster: "/images/creative/poster-commercial.jpg",
    aspectRatio: "16/9",
    description: "High-contrast cinematic commercial film with dramatic directional lighting and luxury art direction.",
    deliverables: ["16:9 Brand Film", "Cinematic Grade"],
  },
  {
    id: "commercial-brand-story",
    title: "Atmospheric Brand Film",
    category: "Commercial Films",
    mediaType: "video",
    src: "/video/creative/commercial-brand-story.mp4",
    poster: "/images/creative/poster-commercial.jpg",
    aspectRatio: "16/9",
    description: "Narrative brand visual exploring moody atmospheric lighting and deliberate visual pacing.",
    deliverables: ["16:9 Commercial Cut", "Lighting Composition"],
  },
  {
    id: "commercial-dynamic",
    title: "Dynamic Product Commercial",
    category: "Commercial Films",
    mediaType: "video",
    src: "/video/creative/commercial-dynamic.mp4",
    poster: "/images/creative/poster-commercial.jpg",
    aspectRatio: "16/9",
    description: "Rhythmically paced advertising edit combining close-up product geometry with motion transitions.",
    deliverables: ["16:9 Edit", "Motion Transitions"],
  },
  {
    id: "commercial-narrative",
    title: "Commercial Narrative Vignette",
    category: "Commercial Films",
    mediaType: "video",
    src: "/video/creative/commercial-narrative.mp4",
    poster: "/images/creative/poster-commercial.jpg",
    aspectRatio: "16/9",
    description: "Short cinematic vignette focusing on textural highlights, shallow depth of field, and framing.",
    deliverables: ["16:9 Vignette", "Macro Photography Passes"],
  },

  // ── Product Photography ──
  {
    id: "product-studio-01",
    title: "Studio Lighting Product Pass",
    category: "Product Photography",
    mediaType: "image",
    src: "/images/creative/product-studio-01.png",
    aspectRatio: "4/5",
    description: "Controlled multi-point studio lighting composition highlighting reflective surfaces and label typography.",
    deliverables: ["High-Res Studio Still", "Key & Rim Light Passes"],
  },
  {
    id: "product-studio-02",
    title: "Minimalist E-Commerce Hero",
    category: "Product Photography",
    mediaType: "image",
    src: "/images/creative/product-studio-02.png",
    aspectRatio: "4/5",
    description: "Clean geometric surface staging designed for digital storefront and catalog hero presentation.",
    deliverables: ["E-Commerce Hero Still", "Monochrome Staging"],
  },
  {
    id: "product-studio-03",
    title: "Textured Backdrop Composition",
    category: "Product Photography",
    mediaType: "image",
    src: "/images/creative/product-studio-03.png",
    aspectRatio: "4/5",
    description: "Tactile surface arrangement pairing warm stone textures with sharp specular highlights.",
    deliverables: ["Textured Product Still", "Depth Composition"],
  },

  // ── Meta Ad Creatives ──
  {
    id: "meta-ad-01",
    title: "Structured Value Offer Creative",
    category: "Meta Ad Creatives",
    mediaType: "image",
    src: "/images/creative/meta-ad-01.png",
    aspectRatio: "4/5",
    description: "Static visual layout combining high-contrast typography, offer framing, and product imagery for social feeds.",
    deliverables: ["4:5 Feed Static", "Headline Hierarchy"],
  },
  {
    id: "meta-ad-02",
    title: "Comparison Grid Creative",
    category: "Meta Ad Creatives",
    mediaType: "image",
    src: "/images/creative/meta-ad-02.png",
    aspectRatio: "4/5",
    description: "Modular comparison structure designed for clarity and scannability on mobile advertising feeds.",
    deliverables: ["4:5 Comparison Layout", "Visual Contrast Split"],
  },
  {
    id: "meta-ad-03",
    title: "Feature Callout Creative",
    category: "Meta Ad Creatives",
    mediaType: "image",
    src: "/images/creative/meta-ad-03.png",
    aspectRatio: "4/5",
    description: "Editorial layout pairing product silhouettes with structured secondary benefit annotations.",
    deliverables: ["4:5 Feature Matrix", "Annotation Graphic"],
  },
  {
    id: "meta-ad-04",
    title: "Minimalist Direct-Response Static",
    category: "Meta Ad Creatives",
    mediaType: "image",
    src: "/images/creative/meta-ad-04.png",
    aspectRatio: "4/5",
    description: "High-legibility advertising static utilizing bold typography and single focal-point product art.",
    deliverables: ["4:5 Social Static", "Single-Focus Composition"],
  },

  // ── AI Influencer ──
  {
    id: "influencer-01",
    title: "Virtual Muse — Editorial Portrait I",
    category: "AI Influencer",
    mediaType: "image",
    src: "/images/creative/influencer-01.png",
    aspectRatio: "4/5",
    description: "Consistent virtual character identity development featuring high-end editorial lighting and styling.",
    deliverables: ["Character Identity Sheet", "High-Fashion Editorial"],
  },
  {
    id: "influencer-02",
    title: "Virtual Muse — Editorial Portrait II",
    category: "AI Influencer",
    mediaType: "image",
    src: "/images/creative/influencer-02.png",
    aspectRatio: "4/5",
    description: "Fashion editorial scene testing directional rim light and fabric texture consistency.",
    deliverables: ["Lighting Variation", "Character Consistency"],
  },
  {
    id: "influencer-03",
    title: "Virtual Muse — Lifestyle Scene",
    category: "AI Influencer",
    mediaType: "image",
    src: "/images/creative/influencer-03.png",
    aspectRatio: "4/5",
    description: "Natural environmental setting demonstrating character coherence across varied lighting conditions.",
    deliverables: ["Contextual Environment", "Natural Light Pass"],
  },
  {
    id: "influencer-04",
    title: "Virtual Muse — Campaign Close-up",
    category: "AI Influencer",
    mediaType: "image",
    src: "/images/creative/influencer-04.png",
    aspectRatio: "4/5",
    description: "Macro beauty portrait exploring skin texture fidelity and cinematic color grading.",
    deliverables: ["Beauty Portrait", "Macro Detail Pass"],
  },
];

