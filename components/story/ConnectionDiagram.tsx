import { connectionData } from "@/content/story";
import styles from "./ConnectionDiagram.module.css";

export function ConnectionDiagram() {
  const growthGroup = connectionData.framework[0];
  const systemsGroup = connectionData.framework[1];

  return (
    <div
      className={`${styles.diagramWrapper} js-connection-diagram`}
      aria-label="AI Growth and AI Systems connected operating loop"
    >
      {/* Framework Pipeline Container */}
      <div className={styles.pipelineContainer}>
        {/* Pillar 1: AI GROWTH (CREATE -> MARKET) */}
        <div className={`${styles.pillarGrowth} js-pillar-left`}>
          <div className={styles.pillarHeader}>
            <div className={styles.pillarTitleRow}>
              <span className={styles.pillarTag}>PILLAR 01</span>
              <span className={styles.pillarPillar}>{growthGroup.pillar}</span>
            </div>
            <span className={styles.pillarTagline}>{growthGroup.tagline}</span>
          </div>

          <div className={styles.stageGrid}>
            {growthGroup.stages.map((stage, idx) => (
              <div
                key={stage.id}
                className={`${styles.stageCard} js-connection-step`}
              >
                <div className={styles.stageTop}>
                  <span className={styles.stageNum}>{stage.number}</span>
                  <span className={styles.stageName}>{stage.label}</span>
                </div>
                <p className={styles.stageDesc}>{stage.desc}</p>
                {idx === 0 && (
                  <div className={styles.stageArrow} aria-hidden="true">&rarr;</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Central Forward Bridge (MARKET -> CONVERT) */}
        <div className={styles.centralBridge} aria-hidden="true">
          <div className={styles.bridgeConduit}>
            <span className={styles.bridgeLine} />
            <span className={styles.bridgePill}>DEMAND HANDOFF</span>
            <span className={styles.bridgeArrow}>&rarr;</span>
          </div>
        </div>

        {/* Pillar 2: AI SYSTEMS (CONVERT -> OPERATE) */}
        <div className={`${styles.pillarSystems} js-pillar-right`}>
          <div className={styles.pillarHeader}>
            <div className={styles.pillarTitleRow}>
              <span className={styles.pillarTag}>PILLAR 02</span>
              <span className={styles.pillarPillar}>{systemsGroup.pillar}</span>
            </div>
            <span className={styles.pillarTagline}>{systemsGroup.tagline}</span>
          </div>

          <div className={styles.stageGrid}>
            {systemsGroup.stages.map((stage, idx) => (
              <div
                key={stage.id}
                className={`${styles.stageCard} js-connection-step`}
              >
                <div className={styles.stageTop}>
                  <span className={styles.stageNum}>{stage.number}</span>
                  <span className={styles.stageName}>{stage.label}</span>
                </div>
                <p className={styles.stageDesc}>{stage.desc}</p>
                {idx === 0 && (
                  <div className={styles.stageArrow} aria-hidden="true">&rarr;</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Restrained Return Feedback Conduit (OPERATE -> CREATE) */}
      <div className={styles.feedbackConduit} aria-label="Restrained feedback loop from Operations to Creative">
        <div className={styles.conduitRail}>
          <div className={styles.conduitTrack} />
          <div className={styles.conduitMarkerStart}>&uarr;</div>
          <div className={styles.conduitPill}>
            <span className={styles.conduitDot} aria-hidden="true" />
            <span className={styles.conduitText}>
              CONTINUOUS FEEDBACK LOOP // Operational &amp; Conversion Telemetry Refeeds Creative Direction
            </span>
          </div>
          <div className={styles.conduitMarkerEnd}>&rarr;</div>
        </div>
      </div>
    </div>
  );
}
