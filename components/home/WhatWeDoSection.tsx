import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./WhatWeDoSection.module.css";

const { whatWeDo } = home;
const { pillars, spine } = whatWeDo;

export function WhatWeDoSection() {
  return (
    <Section id="what-we-do" className={styles.section} spacing="large">
      <Container>
        <SectionReveal>
          {/* Section Introduction */}
          <div className={styles.intro}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              {whatWeDo.eyebrow}
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              {whatWeDo.headline}
            </Heading>

            <p className={styles.supportingCopy}>
              {whatWeDo.supportingCopy}
            </p>
          </div>

          {/* Central Connecting Framework Spine */}
          <div className={styles.spineWrapper}>
            <div className={styles.spineTrack}>
              {spine.framework.map((step, idx) => (
                <div key={step} className={styles.spineNode}>
                  <span className={styles.spineStepNumber}>0{idx + 1}</span>
                  <span className={styles.spineStepText}>{step}</span>
                  {idx < spine.framework.length - 1 && (
                    <span className={styles.spineArrow} aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>
            <span className={styles.spineTagline}>{spine.tagline}</span>
          </div>

          {/* Dual Pillars Grid (50 / 50 Equal Split) */}
          <div className={styles.pillarsGrid}>
            {/* ── Pillar 1: Growth & Creative ── */}
            <article className={styles.pillarCard}>
              <header className={styles.pillarHeader}>
                <div className={styles.pillarIdent}>
                  <span className={styles.pillarNumber}>{pillars.growth.number} // PILLAR</span>
                  <h3 className={styles.pillarTitle}>{pillars.growth.label}</h3>
                </div>
                <span className={styles.pillarTagline}>{pillars.growth.tagline}</span>
              </header>

              <p className={styles.pillarDesc}>{pillars.growth.description}</p>

              {/* Real Creative Thumbnail Frame */}
              <div className={styles.previewMediaFrame}>
                <div className={styles.previewImageWrap}>
                  <Image
                    src="/images/creative/product-studio-01.png"
                    alt="Creative Studio Staging Pass"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className={styles.previewImage}
                  />
                </div>
              </div>

              {/* Capabilities List */}
              <div className={styles.capabilityList}>
                {pillars.growth.capabilities.map((cap) => (
                  <div key={cap.title} className={styles.capabilityItem}>
                    <div className={styles.capHeader}>
                      <span className={styles.capBullet} aria-hidden="true" />
                      <h4 className={styles.capTitle}>{cap.title}</h4>
                    </div>
                    <p className={styles.capDesc}>{cap.desc}</p>
                  </div>
                ))}
              </div>

              <footer className={styles.pillarFooter}>
                <Link href={pillars.growth.cta.href} className={styles.pillarLink}>
                  {pillars.growth.cta.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              </footer>
            </article>

            {/* ── Pillar 2: AI Systems & Automation ── */}
            <article className={styles.pillarCard}>
              <header className={styles.pillarHeader}>
                <div className={styles.pillarIdent}>
                  <span className={styles.pillarNumber}>{pillars.systems.number} // PILLAR</span>
                  <h3 className={styles.pillarTitle}>{pillars.systems.label}</h3>
                </div>
                <span className={styles.pillarTagline}>{pillars.systems.tagline}</span>
              </header>

              <p className={styles.pillarDesc}>{pillars.systems.description}</p>

              {/* Systems Schematic Visualization Frame */}
              <div className={styles.previewMediaFrame}>
                <div className={styles.schematicCanvas}>
                  <div className={styles.schematicStep}>
                    <span className={styles.schematicLabel}>INPUT</span>
                    <span className={styles.schematicValue}>Inbound Webhook / Voice Call</span>
                  </div>
                  <div className={styles.schematicDivider} aria-hidden="true">&rarr;</div>
                  <div className={styles.schematicStepHighlight}>
                    <span className={styles.schematicLabelHighlight}>AGENT CORE</span>
                    <span className={styles.schematicValue}>Deterministic Logic &amp; RAG</span>
                  </div>
                  <div className={styles.schematicDivider} aria-hidden="true">&rarr;</div>
                  <div className={styles.schematicStep}>
                    <span className={styles.schematicLabel}>OUTPUT</span>
                    <span className={styles.schematicValue}>CRM Staging / Action Dispatch</span>
                  </div>
                </div>
              </div>

              {/* Capabilities List */}
              <div className={styles.capabilityList}>
                {pillars.systems.capabilities.map((cap) => (
                  <div key={cap.title} className={styles.capabilityItem}>
                    <div className={styles.capHeader}>
                      <span className={styles.capBullet} aria-hidden="true" />
                      <h4 className={styles.capTitle}>{cap.title}</h4>
                    </div>
                    <p className={styles.capDesc}>{cap.desc}</p>
                  </div>
                ))}
              </div>

              <footer className={styles.pillarFooter}>
                <Link href={pillars.systems.cta.href} className={styles.pillarLink}>
                  {pillars.systems.cta.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              </footer>
            </article>
          </div>
        </SectionReveal>
      </Container>
    </Section>
  );
}

