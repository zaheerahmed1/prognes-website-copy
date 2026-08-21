import { connectionData } from "@/content/story";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { ConnectionDiagram } from "./ConnectionDiagram";
import styles from "./ConnectionSection.module.css";

export function ConnectionSection() {
  return (
    <Section id="connection" className={styles.connection} spacing="large">
      <Container>
        <div className={styles.intro}>
          <Eyebrow className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Growth + Systems
          </Eyebrow>

          <Heading variant="h2" className={styles.headline}>
            {connectionData.headline}
          </Heading>

          <p className={styles.supportingCopy}>
            {connectionData.supportingCopy}
          </p>
        </div>

        <ConnectionDiagram />
      </Container>
    </Section>
  );
}
