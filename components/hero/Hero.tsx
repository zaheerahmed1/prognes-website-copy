import { home } from "@/content/home";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Body } from "@/components/primitives/Body/Body";
import { Button } from "@/components/primitives/Button/Button";
import { HeroVisual } from "@/components/hero/HeroVisual";
import styles from "./Hero.module.css";

const { hero } = home;

/**
 * Homepage hero section.
 *
 * Server component — the 3D visual is loaded via the client-side
 * HeroVisual wrapper which handles capability detection and fallback.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className={styles.hero}
      aria-label="Hero"
    >
      {/* ── Text content ── */}
      <div className={styles.inner}>
        <div className={styles.content}>
          {/* Eyebrow */}
          <Eyebrow className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {hero.eyebrow}
          </Eyebrow>

          {/* Display headline */}
          <Heading variant="display" className={styles.headline}>
            {hero.headline}
          </Heading>

          {/* Supporting copy */}
          <Body variant="large" className={styles.supportingCopy}>
            {hero.supportingCopy}
          </Body>

          {/* CTAs */}
          <div className={styles.actions}>
            <Button
              variant="primary"
              className={styles.primaryCta}
              {...(hero.primaryCta.href
                ? { href: hero.primaryCta.href }
                : {})}
            >
              {hero.primaryCta.label}{" "}
              <span className={styles.arrow} aria-hidden="true">
                {hero.primaryCta.arrow}
              </span>
            </Button>

            <div className={styles.pathways}>
              {hero.servicePathways.map((path) => (
                <Button
                  key={path.href}
                  variant="secondary"
                  href={path.href}
                  className={styles.pathwayBtn}
                >
                  {path.label}{" "}
                  <span className={styles.arrow} aria-hidden="true">
                    {path.arrow}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Metadata pillars — visible on tablet+ */}
          <div className={styles.metaStrip} aria-label="Agency capabilities">
            {hero.metadata.map((m) => (
              <div key={m.id} className={styles.metaItem}>
                <span className={styles.metaId}>{m.id}</span>
                <span className={styles.metaLabel}>{m.label}</span>
                <span className={styles.metaDesc}>{m.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3D / fallback visual ── */}
      <div className={styles.visualWrap} aria-hidden="true">
        <HeroVisual />
      </div>
    </section>
  );
}
