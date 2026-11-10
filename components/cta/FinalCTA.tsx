import Link from "next/link";
import { cta } from "@/content/cta";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  const primaryHref = cta.primary.href;
  const secondaryCta =
    cta.secondary.find((s) => s.label === "Book a strategy call") ||
    cta.secondary.find((s) => s.label === "Talk to an engineer");

  return (
    <Section id="cta" className={styles.section} spacing="large">
      <Container>
        <SectionReveal>
          <div className={styles.content}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Take Action
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              Build your advantage.
            </Heading>

            {cta.subtext && (
              <p className={styles.subtext}>{cta.subtext}</p>
            )}

            <div className={styles.actions}>
              {primaryHref ? (
                <Link href={primaryHref} className={styles.primaryBtn}>
                  {cta.primary.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : (
                <div className={styles.primaryBtnDisabled} aria-disabled="true">
                  {cta.primary.label} <span aria-hidden="true">&rarr;</span>
                </div>
              )}

              {secondaryCta && secondaryCta.href && (
                <a
                  href={secondaryCta.href}
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {secondaryCta.label}
                  <span className={styles.externalArrow} aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            {cta.reassurance && (
              <p className={styles.reassurance}>{cta.reassurance}</p>
            )}
          </div>
        </SectionReveal>
      </Container>
    </Section>
  );
}
