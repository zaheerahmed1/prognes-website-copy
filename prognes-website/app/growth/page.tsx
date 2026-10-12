import { Metadata } from "next";
import { growthPage } from "@/content/growth";
import { site } from "@/content/nav";
import { GrowthSection } from "@/components/growth/GrowthSection";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Heading } from "@/components/primitives/Heading/Heading";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${growthPage.title} — ${site.wordmark}`,
  description: "Creative production and AI-amplified growth leverage.",
};

export default function GrowthPage() {
  return (
    <main id="main">
      <Section id="growth-intro" spacing="large" className={styles.growthIntro}>
        <Container>
          <Heading variant="h1" className={styles.headline}>
            More creative output + faster iteration + better growth leverage.
          </Heading>
        </Container>
      </Section>

      <GrowthSection />
      
      <FinalCTA />
    </main>
  );
}
