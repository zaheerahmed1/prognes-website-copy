import Link from "next/link";
import { cta } from "@/content/cta";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  const primaryHref = cta.primary.href;
  const secondaryCta = cta.secondary.find((s) => s.label === "Talk to an engineer");

  return (
    <Section id="cta" className={styles.section} spacing="large">
      <Container>
        <div className={styles.content}>
          <Eyebrow className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Take Action
          </Eyebrow>

          <Heading variant="h1" className={styles.headline}>
            Build your advantage.
          </Heading>

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

            {secondaryCta && (
              secondaryCta.href ? (
                <Link href={secondaryCta.href} className={styles.secondaryBtn}>
                  {secondaryCta.label}
                </Link>
              ) : (
                <div className={styles.secondaryBtnDisabled} aria-disabled="true">
                  {secondaryCta.label}
                </div>
              )
            )}
          </div>
          
          {(!primaryHref || (secondaryCta && !secondaryCta.href)) && (
            <p className={styles.missingConfigMsg}>
              Destination URLs are not configured. Please add URLs to content/cta.ts.
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
