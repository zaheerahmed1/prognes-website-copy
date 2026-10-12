import { Hero } from "@/components/hero/Hero";
import { Problem } from "@/components/problem/Problem";
import { Shift } from "@/components/shift/Shift";
import { GrowthSection } from "@/components/growth/GrowthSection";
import { SystemsSection } from "@/components/systems/SystemsSection";
import { ConnectionSection } from "@/components/story/ConnectionSection";
import { FlywheelSection } from "@/components/story/FlywheelSection";
import { ProcessSection } from "@/components/story/ProcessSection";
import { ShowcaseSection } from "@/components/work/ShowcaseSection";
import { ProofSection } from "@/components/proof/ProofSection";
import { FinalCTA } from "@/components/cta/FinalCTA";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main" className={styles.main}>
      <Hero />
      <Problem />
      <Shift />
      <GrowthSection />
      <SystemsSection />
      <ConnectionSection />
      <FlywheelSection />
      <ProcessSection />
      <ShowcaseSection />
      <ProofSection />
      <FinalCTA />
    </main>
  );
}
