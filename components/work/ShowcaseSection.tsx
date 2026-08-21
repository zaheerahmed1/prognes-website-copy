import { workPage } from "@/content/work";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import styles from "./ShowcaseSection.module.css";

export function ShowcaseSection() {
  const hasItems = workPage.items && workPage.items.length > 0;

  return (
    <Section id="showcase" className={styles.section} spacing="large">
      <Container>
        <div className={styles.intro}>
          <Eyebrow className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Selected Systems
          </Eyebrow>

          <Heading variant="h2" className={styles.headline}>
            Operational leverage in production.
          </Heading>
        </div>

        {hasItems ? (
          <div className={styles.showcaseGrid}>
            {/* Real items will go here when available */}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyMediaFrame}>
              <span className={styles.emptyLabel}>SYSTEM SHOWCASE // INCOMING</span>
            </div>
            <div className={styles.emptyDetails}>
              <h3 className={styles.emptyTitle}>Production Systems</h3>
              <p className={styles.emptyDesc}>
                Real systems and capabilities will be showcased here. We do not use placeholder client logos or fabricated results.
              </p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
