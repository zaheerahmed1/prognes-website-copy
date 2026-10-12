import { processData } from "@/content/story";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { ProcessMotion } from "./ProcessMotion";
import styles from "./ProcessSection.module.css";

export function ProcessSection() {
  return (
    <Section id="process" className={styles.section} spacing="large">
      <Container>
        <ProcessMotion>
          <div className={`${styles.intro} js-process-intro`}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Methodology
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              {processData.headline}
            </Heading>
          </div>

          <div className={`${styles.processFlow} js-process-flow`}>
            {processData.stages.map((stage, idx) => (
              <div key={stage.id} className={`${styles.stage} js-process-stage`}>
                <div className={styles.stageHeader}>
                  <span className={`${styles.stageIndex} js-process-index`}>0{idx + 1}</span>
                  <h3 className={styles.stageLabel}>{stage.label}</h3>
                </div>
                <p className={styles.stageDesc}>{stage.desc}</p>
              </div>
            ))}
          </div>
        </ProcessMotion>
      </Container>
    </Section>
  );
}
