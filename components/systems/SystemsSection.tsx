import { systemsPage } from "@/content/systems";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { SystemArchitecture } from "./SystemArchitecture";
import { SystemModule } from "./SystemModule";
import styles from "./SystemsSection.module.css";

export function SystemsSection() {
  return (
    <Section id="systems" className={styles.systems} spacing="large">
      <Container className={styles.content}>
        <div className={styles.intro}>
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
          <div className={styles.modules}>
            {systemsPage.modules.map((mod) => (
              <SystemModule
                key={mod.id}
                number={mod.number}
                title={mod.title}
                items={mod.items}
              />
            ))}
          </div>

          <div className={styles.architectureWrapper}>
            <SystemArchitecture />
          </div>
        </div>
      </Container>
    </Section>
  );
}
