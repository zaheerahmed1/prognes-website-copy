import { flywheelData } from "@/content/story";
import styles from "./Flywheel.module.css";

export function Flywheel() {
  return (
    <div
      className={`${styles.flywheelWrapper} js-flywheel-diagram`}
      aria-label="Compounding leverage flywheel diagram"
    >
      {/* Background Orbital Track for Desktop */}
      <div className={styles.orbitalRing} aria-hidden="true">
        <svg viewBox="0 0 500 500" className={styles.orbitalSvg}>
          <circle
            cx="250"
            cy="250"
            r="190"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <circle
            cx="250"
            cy="250"
            r="190"
            fill="none"
            stroke="#D6FF3F"
            strokeWidth="2"
            strokeDasharray="40 340"
            className={styles.pulsingArc}
          />
        </svg>
      </div>

      {/* Central Core Concept */}
      <div className={`${styles.centerConcept} js-flywheel-center`}>
        <div className={styles.centerGlow} aria-hidden="true" />
        <span className={styles.centerTag}>COMPOUNDING</span>
        <span className={styles.centerText}>{flywheelData.centerConcept}</span>
      </div>

      {/* 4 Quadrant Stages */}
      <div className={styles.stagesGrid}>
        {flywheelData.stages.map((stage) => (
          <div
            key={stage.id}
            className={`${styles.stage} ${styles[`stage_${stage.id}`]} js-flywheel-stage`}
          >
            <div className={styles.stageHeader}>
              <span className={styles.stagePillar}>{stage.pillar}</span>
              <span className={styles.stageIndex}>{stage.number}</span>
            </div>

            <h3 className={styles.stageLabel}>{stage.label}</h3>
            <p className={styles.stageDesc}>{stage.desc}</p>

            {/* Mobile Vertical Flow Arrow */}
            <div className={styles.mobileArrow} aria-hidden="true">
              &darr;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
