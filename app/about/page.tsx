import { Metadata } from "next";
import { aboutPage } from "@/content/about";
import { site } from "@/content/nav";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${aboutPage.title} — ${site.wordmark}`,
  description: "Learn more about our agency's philosophy and core brand positioning.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <Section id="about-intro" spacing="large" className={styles.aboutSection}>
        <Container>
          <div className={styles.intro}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Philosophy
            </Eyebrow>

            <Heading variant="h1" className={styles.headline}>
              {site.wordmark}
            </Heading>

            <div className={styles.emptyState}>
              <h3 className={styles.emptyTitle}>
                [About Content Pending]
              </h3>
              <p className={styles.emptyDesc}>
                The detailed agency narrative, philosophy, and positioning will populate here once approved. We do not invent biographies, mission claims, or statistics to fill space.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
