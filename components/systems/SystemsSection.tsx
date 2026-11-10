import { systemsPage } from "@/content/systems";
import { routes } from "@/content/nav";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Button } from "@/components/primitives/Button/Button";
import { SystemArchitecture } from "./SystemArchitecture";
import { SystemModule } from "./SystemModule";
import { SystemsMotion } from "./SystemsMotion";
import styles from "./SystemsSection.module.css";

export function SystemsSection() {
  return (
    <Section id="systems" className={styles.systems} spacing="large">
      <Container className={styles.content}>
        <SystemsMotion>
          <div className={`${styles.intro} js-systems-intro`}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              AI Systems
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              Transform fragmented operations into connected intelligent systems.
            </Heading>

            <div className={styles.narrativeSeq}>
              {systemsPage.narrative?.map((step, idx, arr) => (
                <span key={idx} style={{ display: "contents" }}>
                  <span className={styles.narrativeStep}>{step}</span>
                  {idx < arr.length - 1 && (
                    <span className={styles.arrow} aria-hidden="true">↓</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.systemsGrid}>
            <div className={`${styles.modules} js-systems-modules`}>
              {systemsPage.modules.map((mod) => (
                <SystemModule
                  key={mod.id}
                  number={mod.number}
                  title={mod.title}
                  items={mod.items}
                  className="js-system-module"
                />
              ))}
            </div>

            <div className={`${styles.architectureWrapper} js-systems-architecture`}>
              <SystemArchitecture />
            </div>
          </div>

          <div className={styles.footerAction}>
            <Button
              variant="secondary"
              href={routes.workAutomation}
              className={styles.exploreLink}
            >
              Explore AI Systems &amp; Architecture
              <span className={styles.actionArrow} aria-hidden="true">→</span>
            </Button>
          </div>
        </SystemsMotion>
      </Container>
    </Section>
  );
}
