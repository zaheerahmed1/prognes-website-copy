import { Metadata } from "next";
import { systemsPage } from "@/content/systems";
import { site } from "@/content/nav";
import { SystemsSection } from "@/components/systems/SystemsSection";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${systemsPage.title} — ${site.wordmark}`,
  description: "Connected intelligent systems, automation, and operational leverage.",
  alternates: { canonical: "/systems" },
};

export default function SystemsPage() {
  return (
    <main id="main">
      <Section id="systems-intro" spacing="large" className={styles.systemsIntro}>
        <Container>
          <div className={styles.introContent}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Connected Intelligence
            </Eyebrow>

            <Heading variant="h1" className={styles.headline}>
              {systemsPage.narrative.join(" → ")}
            </Heading>
          </div>
        </Container>
      </Section>

      <SystemsSection />
      
      <FinalCTA />
    </main>
  );
}
