import Link from "next/link";
import { workPage, type SystemBlueprint } from "@/content/work";
import { routes } from "@/content/nav";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ShowcaseSection.module.css";

export function ShowcaseSection() {
  const items = workPage.items;

  return (
    <Section id="showcase" className={styles.section} spacing="large">
      <Container>
        <SectionReveal>
          <div className={styles.intro}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              System Architecture
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              Operational leverage in production.
            </Heading>

            <p className={styles.subtext}>
              Real architectural blueprints engineered for growth acceleration and operational automation. No fabricated case studies.
            </p>
          </div>

          <div className={styles.showcaseGrid}>
            {items.map((blueprint: SystemBlueprint) => (
              <article key={blueprint.id} className={styles.blueprintCard}>
                <header className={styles.cardHeader}>
                  <div className={styles.cardIdent}>
                    <span className={styles.cardCode}>{blueprint.code}</span>
                    <span className={styles.cardCategory}>{blueprint.category}</span>
                  </div>
                  <span className={styles.cardStatus}>VERIFIED SPEC</span>
                </header>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{blueprint.title}</h3>
                  <p className={styles.cardSummary}>{blueprint.summary}</p>

                  <div className={styles.pipeline}>
                    <div className={styles.pipelineNode}>
                      <span className={styles.nodeRole}>INPUTS</span>
                      <ul className={styles.nodeList}>
                        {blueprint.architecture.inputs.map((inp, idx) => (
                          <li key={idx}>{inp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.pipelineArrow} aria-hidden="true">&rarr;</div>

                    <div className={styles.pipelineNodeCenter}>
                      <span className={styles.nodeRole}>ORCHESTRATION</span>
                      <span className={styles.orchestrationText}>
                        {blueprint.architecture.orchestration}
                      </span>
                    </div>

                    <div className={styles.pipelineArrow} aria-hidden="true">&rarr;</div>

                    <div className={styles.pipelineNode}>
                      <span className={styles.nodeRole}>OUTPUTS</span>
                      <ul className={styles.nodeList}>
                        {blueprint.architecture.outputs.map((out, idx) => (
                          <li key={idx}>{out}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <footer className={styles.cardFooter}>
                  <div className={styles.specs}>
                    {blueprint.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className={styles.specItem}>
                        <span className={styles.specLabel}>{spec.label}:</span>
                        <span className={styles.specValue}>{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={routes.work} className={styles.cardLink}>
                    Explore Architecture <span aria-hidden="true">&rarr;</span>
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </Section>
  );
}
