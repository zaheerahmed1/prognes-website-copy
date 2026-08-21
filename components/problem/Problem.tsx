import { home } from "@/content/home";
import { Section } from "@/components/primitives/Section/Section";
import { Container, Grid, GridItem } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Body } from "@/components/primitives/Body/Body";
import styles from "./Problem.module.css";

const { problem } = home;

export function Problem() {
  return (
    <Section id="problem" className={styles.problem} spacing="large">
      <Container>
        <Grid className={styles.grid}>
          {/* Left Column: Intro & Context */}
          <GridItem span={4} spanDesktop={5}>
            <div className={styles.introWrapper}>
              <div className={styles.intro}>
                <Eyebrow className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} aria-hidden="true" />
                  {problem.eyebrow}
                </Eyebrow>

                <Heading variant="h2" className={styles.headline}>
                  {problem.headline}
                </Heading>

                <Body variant="large" className={styles.supportingCopy}>
                  {problem.supportingCopy}
                </Body>
              </div>
            </div>
          </GridItem>

          {/* Right Column: Friction Points */}
          <GridItem span={4} spanDesktop={6} className={styles.frictionCol}>
            <div className={styles.frictionList}>
              {problem.frictionPoints.map((point, index) => (
                <div key={index} className={styles.frictionItem}>
                  {/* Abstract geometric icon representing friction/manual work */}
                  <div className={styles.frictionIcon} aria-hidden="true" />
                  <span className={styles.frictionText}>{point}</span>
                </div>
              ))}
            </div>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
}
