import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ProofSection.module.css";

const VERIFICATION_PRINCIPLES = [
  {
    id: "deterministic",
    code: "01 // DETERMINISTIC",
    title: "Strict Schema & Rule Fencing",
    desc: "Probabilistic models are enclosed within deterministic JSON schemas and rule validation fences. Business-critical workflows never trigger actions from unverified model outputs.",
    tag: "100% Schema Validated",
  },
  {
    id: "sovereignty",
    code: "02 // DATA INTEGRITY",
    title: "Zero-Training Enterprise Bounds",
    desc: "Strict runtime memory isolation and API perimeter boundaries. Zero client data, creative assets, or customer telemetry are ever retained or used to train third-party foundation models.",
    tag: "Isolated Runtime Memory",
  },
  {
    id: "observability",
    code: "03 // OBSERVABILITY",
    title: "End-to-End Execution Tracing",
    desc: "Granular telemetry across every agent step, model inference, and database mutation. Full operational auditability with automated anomaly alerts and real-time state introspection.",
    tag: "Distributed Trace Coverage",
  },
  {
    id: "failsafe",
    code: "04 // FAILSAFE",
    title: "Graceful Fallback & Human Handoff",
    desc: "Immediate failure detection with zero-loss dead-letter queues and seamless human-in-the-loop escalation paths for high-stakes operational edge cases.",
    tag: "Zero-Loss Queue Guarantee",
  },
];

export function ProofSection() {
  return (
    <Section id="proof" className={styles.section} spacing="large">
      <Container>
        <SectionReveal>
          <div className={styles.intro}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Verification Standards
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              Engineering standards built for enterprise reliability.
            </Heading>

            <p className={styles.subtext}>
              Every system we engineer is subject to strict deterministic controls, verifiable data isolation, and continuous operational observability.
            </p>
          </div>

          <div className={styles.proofGrid}>
            {VERIFICATION_PRINCIPLES.map((principle) => (
              <div key={principle.id} className={styles.principleCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.principleCode}>{principle.code}</span>
                  <span className={styles.principleTag}>{principle.tag}</span>
                </div>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDesc}>{principle.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </Section>
  );
}
