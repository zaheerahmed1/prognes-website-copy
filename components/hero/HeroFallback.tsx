import { home } from "@/content/home";
import styles from "./HeroFallback.module.css";

/**
 * Static fallback visual for the hero.
 *
 * Renders immediately (no JS needed) and occupies the same visual frame
 * as the 3D scene. Uses purely geometric/architectural CSS shapes to
 * communicate the "Intelligence → Infrastructure" concept.
 *
 * Displayed on:
 *   - Mobile devices (no WebGL)
 *   - prefers-reduced-motion
 *   - WebGL unavailable / failed
 *   - While WebGL is loading (LCP is never WebGL)
 */
export function HeroFallback() {
  return (
    <div className={styles.fallback}>
      {/* Architectural grid lines */}
      <div className={styles.grid}>
        <div className={`${styles.gridLine} ${styles.gridLineV}`} style={{ left: "25%" }} />
        <div className={`${styles.gridLine} ${styles.gridLineV}`} style={{ left: "50%" }} />
        <div className={`${styles.gridLine} ${styles.gridLineV}`} style={{ left: "75%" }} />
        <div className={`${styles.gridLine} ${styles.gridLineH}`} style={{ top: "33%" }} />
        <div className={`${styles.gridLine} ${styles.gridLineH}`} style={{ top: "66%" }} />
      </div>

      {/* Central geometric form */}
      <div className={styles.form}>
        <div className={styles.ring} />
        <div className={styles.ringInner} />
        <div className={styles.diamond}>
          <div className={styles.diamondInner} />
        </div>
        {/* Cardinal nodes */}
        <div className={`${styles.node} ${styles.nodeTop}`} />
        <div className={`${styles.node} ${styles.nodeRight}`} />
        <div className={`${styles.node} ${styles.nodeBottom}`} />
        <div className={`${styles.node} ${styles.nodeLeft}`} />
        {/* Center accent */}
        <div className={styles.center} />
      </div>

      {/* Concept badge */}
      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        <span className={styles.badgeLabel}>{home.hero.conceptBadge}</span>
      </div>

      {/* Radial fade into background */}
      <div className={styles.gradient} />
    </div>
  );
}
