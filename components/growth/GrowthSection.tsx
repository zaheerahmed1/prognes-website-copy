import { growthPage } from "@/content/growth";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { GrowthSelector } from "./GrowthSelector";
import styles from "./GrowthSection.module.css";

export function GrowthSection() {
  return (
    <Section id="growth" className={styles.growth} spacing="large">
      <Container>
        <div className={styles.intro}>
          <Eyebrow className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            AI Growth
          </Eyebrow>

          <Heading variant="h2" className={styles.headline}>
            Amplify your creative output and iterate on high-performing ad variations.
          </Heading>
          
          <div className={styles.transformSeq}>
            {growthPage.transformation?.map((step, idx, arr) => (
              <span key={idx} style={{ display: "contents" }}>
                <span className={styles.transformStep}>{step}</span>
                {idx < arr.length - 1 && (
                  <span className={styles.arrow} aria-hidden="true">→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.layout}>
          <GrowthSelector />
        </div>
      </Container>
    </Section>
  );
}
