import { connectionData } from "@/content/story";
import styles from "./ConnectionDiagram.module.css";

export function ConnectionDiagram() {
  return (
    <div
      className={`${styles.diagramWrapper} js-connection-diagram`}
      aria-label="AI Growth and Systems connection flow"
    >
      <div className={styles.pillars}>
        <div className={`${styles.pillar} js-pillar-left`}>AI GROWTH</div>
        <div className={styles.pillarSeparator}>&rarr;</div>
        <div className={`${styles.pillar} js-pillar-right`}>AI SYSTEMS</div>
      </div>
      <div className={`${styles.flow} js-connection-flow`}>
        {connectionData.steps.map((step, idx) => (
          <div key={step} className={`${styles.stepWrapper} js-connection-step`}>
            <div className={styles.step}>{step}</div>
            {idx < connectionData.steps.length - 1 && (
              <div className={styles.arrow} aria-hidden="true">&darr;</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
