import { home } from "@/content/home";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Body } from "@/components/primitives/Body/Body";
import { ShiftMotion } from "./ShiftMotion";
import styles from "./Shift.module.css";

const { shift } = home;

export function Shift() {
  return (
    <Section id="shift" className={styles.shift} spacing="large">
      <Container>
        {/*
          ShiftMotion wraps the entire visible content block including the
          arch lines, so GSAP context can reach .js-arch-line-* selectors.
          The arch lines are absolutely positioned to the Section via CSS.
        */}
        <ShiftMotion>
          {/* Background architecture lines — positioned absolute to .shift section via CSS */}
          <div className={styles.architecture} aria-hidden="true">
            <div className={`${styles.archLineV} js-arch-line-v`} style={{ left: "20%" }} />
            <div className={`${styles.archLineV} js-arch-line-v`} style={{ left: "50%" }} />
            <div className={`${styles.archLineV} js-arch-line-v`} style={{ left: "80%" }} />
            <div className={`${styles.archLineH} js-arch-line-h`} style={{ top: "33%" }} />
            <div className={`${styles.archLineH} js-arch-line-h`} style={{ top: "66%" }} />
          </div>

          <div className={`${styles.header} js-shift-header`}>
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
              <div key={index} className={`${styles.transformItem} js-transform-item`}>
                <span className={`${styles.transformFrom} js-transform-from`}>{item.from}</span>
                <div className={`${styles.transformArrow} js-transform-arrow`} aria-hidden="true">
                  →
                </div>
                <span className={`${styles.transformTo} js-transform-to`}>{item.to}</span>
              </div>
            ))}
          </div>
        </ShiftMotion>
      </Container>
    </Section>
  );
}
