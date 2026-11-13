import styles from "./HeroFallback.module.css";

/**
 * Static fallback visual for the hero.
 *
 * Renders immediately (no JS needed) and occupies the same visual frame
 * as the 3D scene. Uses cinematic CSS atmosphere and SVG geometry to
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
      {/* Deep atmospheric green radial — primary cinematic light source */}
      <div className={styles.atmosphere} aria-hidden="true" />

      {/* Ghost wordmark — compositional depth layer */}
      <span className={styles.ghostWordmark} aria-hidden="true">PROGNES</span>

      {/* Architectural grid lines */}
      <div className={styles.grid} aria-hidden="true">
        <div className={`${styles.gridLine} ${styles.gridLineV}`} style={{ left: "25%" }} />
        <div className={`${styles.gridLine} ${styles.gridLineV}`} style={{ left: "50%" }} />
        <div className={`${styles.gridLine} ${styles.gridLineV}`} style={{ left: "75%" }} />
        <div className={`${styles.gridLine} ${styles.gridLineH}`} style={{ top: "33%" }} />
        <div className={`${styles.gridLine} ${styles.gridLineH}`} style={{ top: "66%" }} />
      </div>

      {/* Central geometric form */}
      <div className={styles.form} aria-hidden="true">
        {/* Outer ring with accent arc */}
        <div className={styles.ring} />
        <div className={styles.ringMid} />
        <div className={styles.ringInner} />

        {/* SVG accent arc — rotating partial ring in accent colour */}
        <div className={styles.accentArc}>
          <svg
            viewBox="0 0 100 100"
            className={styles.accentArcSvg}
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="49"
              fill="none"
              stroke="#d6ff3f"
              strokeWidth="1.5"
              strokeDasharray="55 255"
              strokeLinecap="round"
              opacity="0.55"
              className={styles.accentArcTrack}
            />
            <circle
              cx="50"
              cy="50"
              r="49"
              fill="none"
              stroke="#d6ff3f"
              strokeWidth="0.75"
              strokeDasharray="20 290"
              strokeLinecap="round"
              opacity="0.25"
            />
          </svg>
        </div>

        {/* Diamond / structural form */}
        <div className={styles.diamond}>
          <div className={styles.diamondInner} />
        </div>

        {/* Cardinal nodes */}
        <div className={`${styles.node} ${styles.nodeTop}`} />
        <div className={`${styles.node} ${styles.nodeRight}`} />
        <div className={`${styles.node} ${styles.nodeBottom}`} />
        <div className={`${styles.node} ${styles.nodeLeft}`} />

        {/* Center pulse */}
        <div className={styles.center} />
      </div>

      {/* Radial edge fade — blends into background */}
      <div className={styles.gradient} aria-hidden="true" />

    </div>
  );
}
