import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Body } from "@/components/primitives/Body/Body";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ProofSection.module.css";

// Proof data should come from verified content in a real scenario
const proofItems: unknown[] = []; // Currently no verified proof data

export function ProofSection() {
  const hasProof = proofItems && proofItems.length > 0;

  return (
    <Section id="proof" className={styles.section} spacing="large">
      <Container>
        <SectionReveal>
          <div className={styles.intro}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Verification
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              Credibility through execution.
            </Heading>
          </div>

          {hasProof ? (
            <div className={styles.proofGrid}>
              {/* Real verified metrics/testimonials will go here */}
            </div>
          ) : (
            <Body className={styles.emptyDisclaimer}>
              Verified results, case studies, and outcomes will be published
              here as production systems are delivered.
            </Body>
          )}
        </SectionReveal>
      </Container>
    </Section>
  );
}
