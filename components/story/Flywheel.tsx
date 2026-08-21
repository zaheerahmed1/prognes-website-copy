import { flywheelData } from "@/content/story";
import styles from "./Flywheel.module.css";

export function Flywheel() {
  return (
    <div
      className={`${styles.flywheelWrapper} js-flywheel-diagram`}
      aria-label="Compounding leverage flywheel diagram"
    >
      <div className={`${styles.centerConcept} js-flywheel-center`}>
        {flywheelData.centerConcept}
      </div>
      
      <div className={styles.stagesGrid}>
        {flywheelData.stages.map((stage, idx) => (
          <div key={stage.id} className={`${styles.stage} js-flywheel-stage`}>
            <div className={styles.stageLabel}>
              <span className={styles.stageIndex}>0{idx + 1}</span>
              {stage.label}
            </div>
            <div className={styles.stageDesc}>{stage.desc}</div>
            
            {/* Arrow connecting to the next stage (mobile vertical layout) */}
            <div className={styles.mobileArrow} aria-hidden="true">&darr;</div>
          </div>
        ))}
      </div>
    </div>
  );
}
