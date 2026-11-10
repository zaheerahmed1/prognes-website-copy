import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./WorkGatewaySection.module.css";

const { ourWork } = home;

export function WorkGatewaySection() {
  return (
    <Section id="work" className={styles.section} spacing="large">
      <Container>
        <SectionReveal>
          {/* Section Introduction */}
          <div className={styles.intro}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              {ourWork.eyebrow}
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              {ourWork.headline}
            </Heading>

            <p className={styles.supportingCopy}>
              {ourWork.supportingCopy}
            </p>
          </div>

          {/* Dual Portfolio Cards */}
          <div className={styles.cardsGrid}>
            {ourWork.cards.map((card) => (
              <article key={card.id} className={styles.portfolioCard}>
                <header className={styles.cardHeader}>
                  <div className={styles.cardIdent}>
                    <span className={styles.cardNumber}>{card.number} // PORTFOLIO</span>
                    <h3 className={styles.cardTitle}>{card.pillar}</h3>
                  </div>
                  {card.badge && (
                    <span className={styles.cardBadge}>{card.badge}</span>
                  )}
                </header>

                <p className={styles.cardSubtitle}>{card.subtitle}</p>
                <p className={styles.cardDesc}>{card.description}</p>

                {/* Preview Frame */}
                <div className={styles.previewFrame}>
                  {card.previewType === "creative" && card.previewImage ? (
                    <div className={styles.imageWrap}>
                      <Image
                        src={card.previewImage}
                        alt="Creative portfolio preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.cardImg}
                      />
                      <div className={styles.imageOverlay} />
                      <span className={styles.mediaTag}>12 Videos · 16 Stills</span>
                    </div>
                  ) : (
                    <div className={styles.schematicWrap}>
                      <div className={styles.schematicGrid}>
                        <div className={styles.schematicNode}>
                          <span className={styles.nodeLabel}>ORCHESTRATION</span>
                          <span className={styles.nodeTitle}>Autonomous Lead Triage</span>
                        </div>
                        <div className={styles.schematicNode}>
                          <span className={styles.nodeLabel}>VOICE</span>
                          <span className={styles.nodeTitle}>Conversational Agents</span>
                        </div>
                        <div className={styles.schematicNode}>
                          <span className={styles.nodeLabel}>KNOWLEDGE</span>
                          <span className={styles.nodeTitle}>Deterministic RAG</span>
                        </div>
                        <div className={styles.schematicNode}>
                          <span className={styles.nodeLabel}>PIPELINE</span>
                          <span className={styles.nodeTitle}>CRM Synchronization</span>
                        </div>
                      </div>
                      <span className={styles.mediaTag}>Engineering Framework</span>
                    </div>
                  )}
                </div>

                <footer className={styles.cardFooter}>
                  <Link href={card.href} className={styles.cardLink}>
                    {card.ctaLabel} <span aria-hidden="true">&rarr;</span>
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

