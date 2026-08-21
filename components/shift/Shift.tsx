import { home } from "@/content/home";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Body } from "@/components/primitives/Body/Body";
import styles from "./Shift.module.css";

const { shift } = home;

export function Shift() {
  return (
    <Section id="shift" className={styles.shift} spacing="large">
      {/* Subtle background architecture to represent structure */}
      <div className={styles.architecture} aria-hidden="true">
        <div className={styles.archLineV} style={{ left: "20%" }} />
        <div className={styles.archLineV} style={{ left: "50%" }} />
        <div className={styles.archLineV} style={{ left: "80%" }} />
        <div className={styles.archLineH} style={{ top: "33%" }} />
        <div className={styles.archLineH} style={{ top: "66%" }} />
      </div>

      <Container>
        <div className={styles.header}>
          <Eyebrow className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {shift.eyebrow}
          </Eyebrow>

          <Heading variant="h2" className={styles.headline}>
            {shift.headline}
          </Heading>

          <Body variant="large" className={styles.supportingCopy}>
            {shift.supportingCopy}
          </Body>
        </div>

        <div className={styles.transformList}>
          {shift.transitions.map((item, index) => (
            <div key={index} className={styles.transformItem}>
              <span className={styles.transformFrom}>{item.from}</span>
              <div className={styles.transformArrow} aria-hidden="true">
                →
              </div>
              <span className={styles.transformTo}>{item.to}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
