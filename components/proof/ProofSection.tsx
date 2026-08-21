import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ProofSection.module.css";

// Proof data should come from verified content in a real scenario
const proofItems: any[] = []; // Currently no verified proof data

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
            <div className={styles.emptyState}>
              <div className={styles.structuralFramework}>
                <div className={styles.emptyMetric}>
                  <span className={styles.emptyLabel}>VERIFIED METRIC</span>
                  <span className={styles.emptyValue}>--</span>
                </div>
                <div className={styles.emptyMetric}>
                  <span className={styles.emptyLabel}>VERIFIED METRIC</span>
                  <span className={styles.emptyValue}>--</span>
                </div>
                <div className={styles.emptyMetric}>
                  <span className={styles.emptyLabel}>VERIFIED METRIC</span>
                  <span className={styles.emptyValue}>--</span>
                </div>
              </div>
              <p className={styles.emptyDisclaimer}>
                Verified results, case studies, and partner logic will populate here. We do not invent numbers to fill space.
              </p>
            </div>
          )}
        </SectionReveal>
      </Container>
    </Section>
  );
}
