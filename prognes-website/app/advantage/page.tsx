import { Metadata } from "next";
import {
  advantageHero,
  advantagePillars,
  advantageDeliverable,
  advantageSteps,
  advantagePage,
} from "@/content/advantage";
import { site } from "@/content/nav";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Body } from "@/components/primitives/Body/Body";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { AdvantageForm } from "@/components/advantage/AdvantageForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${advantagePage.title} — ${site.wordmark}`,
  description: advantagePage.description,
  alternates: { canonical: "/advantage" },
};

export default function AdvantagePage() {
  return (
    <main id="main">
      {/* ═══════════════════════════════════════════
          1. HERO
          ═══════════════════════════════════════════ */}
      <Section
        id="advantage-hero"
        spacing="hero"
        className={styles.heroSection}
      >
        <Container>
          <div className={styles.heroContent}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              {advantageHero.eyebrow}
            </Eyebrow>

            <Heading variant="h1" className={styles.heroHeadline}>
              {advantageHero.headline}
            </Heading>

            <Body variant="large" className={styles.heroSubtext}>
              {advantageHero.subtext}
            </Body>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════
          2. WHAT WE LOOK FOR
          ═══════════════════════════════════════════ */}
      <Section id="advantage-pillars" className={styles.pillarsSection}>
        <Container>
          <SectionReveal>
            <Eyebrow className={styles.sectionEyebrow}>
              What We Look For
            </Eyebrow>

            <div className={styles.pillarsGrid}>
              {advantagePillars.map((pillar) => (
                <div key={pillar.id} className={styles.pillarCard}>
                  <Heading
                    as="h3"
                    variant="h3"
                    className={styles.pillarTitle}
                  >
                    {pillar.label}
                  </Heading>
                  <Body className={styles.pillarDesc}>
                    {pillar.description}
                  </Body>
                </div>
              ))}
            </div>
          </SectionReveal>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════
          3. WHAT YOU GET
          ═══════════════════════════════════════════ */}
      <Section
        id="advantage-deliverable"
        className={styles.deliverableSection}
      >
        <Container>
          <SectionReveal>
            <Eyebrow className={styles.sectionEyebrow}>
              What You Get
            </Eyebrow>

            <div className={styles.deliverableContent}>
              <Heading variant="h2" className={styles.deliverableHeadline}>
                {advantageDeliverable.headline}
              </Heading>

              <Body variant="large" className={styles.deliverableCopy}>
                {advantageDeliverable.copy}
              </Body>

              <ul className={styles.differentiatorList}>
                {advantageDeliverable.differentiators.map((d) => (
                  <li key={d} className={styles.differentiatorItem}>
                    {d}
                  </li>
                ))}
              </ul>

              <Body variant="large" tone="primary" className={styles.deliverableClosing}>
                {advantageDeliverable.closing}
              </Body>
            </div>
          </SectionReveal>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════
          4. HOW IT WORKS
          ═══════════════════════════════════════════ */}
      <Section id="advantage-process" className={styles.processSection}>
        <Container>
          <SectionReveal>
            <Eyebrow className={styles.sectionEyebrow}>
              How It Works
            </Eyebrow>

            <div className={styles.stepsGrid}>
              {advantageSteps.map((step) => (
                <div key={step.number} className={styles.stepCard}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div className={styles.stepText}>
                    <Heading
                      as="h3"
                      variant="h3"
                      className={styles.stepTitle}
                    >
                      {step.title}
                    </Heading>
                    <Body className={styles.stepDesc}>
                      {step.description}
                    </Body>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════
          5 + 6. FORM + SUCCESS
          ═══════════════════════════════════════════ */}
      <Section
        id="advantage-form"
        spacing="large"
        className={styles.formSection}
      >
        <Container>
          <AdvantageForm />
        </Container>
      </Section>
    </main>
  );
}
