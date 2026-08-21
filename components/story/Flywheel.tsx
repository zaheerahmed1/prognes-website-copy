import { flywheelData } from "@/content/story";
import styles from "./Flywheel.module.css";

export function Flywheel() {
  return (
    <div className={styles.flywheelWrapper} aria-label="Compounding leverage flywheel diagram">
      <div className={styles.centerConcept}>
        {flywheelData.centerConcept}
      </div>
      
      <div className={styles.stagesGrid}>
        {flywheelData.stages.map((stage, idx) => (
          <div key={stage.id} className={styles.stage}>
            <div className={styles.stageLabel}>
              <span className={styles.stageIndex}>0{idx + 1}</span>
              {stage.label}
            </div>
            <div className={styles.stageDesc}>{stage.desc}</div>
            
            {/* Arrow connecting to the next stage (hidden on desktop in favor of grid lines, or styled differently) */}
            <div className={styles.mobileArrow} aria-hidden="true">&darr;</div>
          </div>
        ))}
      </div>
    </div>
  );
}
