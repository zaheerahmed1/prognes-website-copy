import { flywheelData } from "@/content/story";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Flywheel } from "./Flywheel";
import { FlywheelMotion } from "./FlywheelMotion";
import styles from "./FlywheelSection.module.css";

export function FlywheelSection() {
  return (
    <Section id="flywheel" className={styles.section} spacing="large">
      <Container>
        <FlywheelMotion>
          <div className={`${styles.intro} js-flywheel-intro`}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              The Flywheel
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              {flywheelData.headline}
            </Heading>

            <p className={styles.supportingCopy}>
              {flywheelData.supportingCopy}
            </p>
          </div>

          <Flywheel />
        </FlywheelMotion>
      </Container>
    </Section>
  );
}
