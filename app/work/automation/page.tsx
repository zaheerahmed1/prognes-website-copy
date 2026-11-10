import Link from "next/link";
import {
  automationPortfolioCopy,
  systemCategories,
  automationProjects,
} from "@/content/automation-portfolio";
import { routes } from "@/content/nav";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { FinalCTA } from "@/components/cta/FinalCTA";
import styles from "./page.module.css";

export default function AutomationWorkPage() {
  return (
    <main id="main">
      <Section id="automation-work" className={styles.section} spacing="large">
        <Container>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.navigationRow}>
              <Link href={routes.work} className={styles.backLink}>
                &larr; Back to Work Gateway
              </Link>
            </div>

            <div className={styles.statusBadgeRow}>
              <span className={styles.statusBadge}>
                {automationPortfolioCopy.statusLabel}
              </span>
            </div>

            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              {automationPortfolioCopy.eyebrow}
            </Eyebrow>

            <Heading variant="h1" className={styles.headline}>
              {automationPortfolioCopy.headline}
            </Heading>

            <p className={styles.subtext}>
              {automationPortfolioCopy.description}
            </p>
          </div>

          {/* Development Showcase State */}
          <div className={styles.stageFrame}>
            <div className={styles.stageCard}>
              <div className={styles.stageHeader}>
                <span className={styles.stageCode}>SYS-CORE // ACTIVE ROADMAP</span>
                <span className={styles.stageStatus}>IN ACTIVE DEVELOPMENT</span>
              </div>

              <div className={styles.categoriesGrid}>
                {systemCategories.map((category, idx) => (
                  <article key={category.id} className={styles.categoryCard}>
                    <div className={styles.categoryHeader}>
                      <span className={styles.categoryNumber}>0{idx + 1}</span>
                      <h2 className={styles.categoryTitle}>{category.title}</h2>
                    </div>

                    <p className={styles.categoryDesc}>{category.description}</p>

                    <div className={styles.capabilitiesList}>
                      {category.capabilities.map((cap) => (
                        <div key={cap} className={styles.capabilityRow}>
                          <span className={styles.capDot} aria-hidden="true" />
                          <span className={styles.capText}>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <footer className={styles.stageFooter}>
                <div className={styles.footerInfo}>
                  <h3 className={styles.footerTitle}>
                    Building custom operational systems?
                  </h3>
                  <p className={styles.footerDesc}>
                    We collaborate directly with business operators to architect, build, and deploy custom automation infrastructure.
                  </p>
                </div>

                <Link href={routes.advantage} className={styles.actionBtn}>
                  {automationPortfolioCopy.actionLabel} <span aria-hidden="true">&rarr;</span>
                </Link>
              </footer>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </main>
  );
}

