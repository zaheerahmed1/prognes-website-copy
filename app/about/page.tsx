import { Metadata } from "next";
import { aboutPage } from "@/content/about";
import { site } from "@/content/nav";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Body } from "@/components/primitives/Body/Body";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${aboutPage.title} — ${site.wordmark}`,
  description:
    "PROGNES engineers systems that create operational leverage. AI Growth and AI Systems — built as one operating loop.",
  alternates: { canonical: "/about" },
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

            <Body variant="large" className={styles.statement}>
              We engineer systems that create operational leverage.
              Intelligent automation, AI&#x2011;powered growth systems, and
              agentic infrastructure — built as one continuous operating loop.
            </Body>

            <Body className={styles.coreIdea}>
              The core belief: growth and systems are not separate services.
              Growth creates opportunity. Systems capture, process, and scale it.
              Together they compound.
            </Body>
          </div>
        </Container>
      </Section>
    </main>
  );
}

