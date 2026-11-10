import { Hero } from "@/components/hero/Hero";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { DemosSection } from "@/components/home/DemosSection";
import { WorkGatewaySection } from "@/components/home/WorkGatewaySection";
import { FinalCTA } from "@/components/cta/FinalCTA";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main" className={styles.main}>
      <Hero />
      <WhatWeDoSection />
      <DemosSection />
      <WorkGatewaySection />
      <FinalCTA />
    </main>
  );
}
