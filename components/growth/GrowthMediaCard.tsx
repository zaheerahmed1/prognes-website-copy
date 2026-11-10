import styles from "./GrowthMediaCard.module.css";

interface GrowthMediaCardProps {
  capabilityId: string;
}

/**
 * 1. AI UGC Composition: Creative Operations Brief & Iterative Testing Architecture
 * Replaces fake phone wireframes with an authentic editorial creative operations dashboard.
 */
function UgcShowcase() {
  return (
    <div className={styles.showcaseWrap}>
      <div className={styles.specHeader}>
        <div className={styles.headerIdent}>
          <span className={styles.specBadge}>CONCEPTUAL DEMONSTRATION</span>
          <span className={styles.specId}>SPEC // UGC-CREATIVE-OPERATIONS</span>
        </div>
        <span className={styles.specContext}>9:16 VERTICAL ASSET PIPELINE</span>
      </div>

      <div className={styles.ugcGrid}>
        {/* Left: Creative Strategy & Variant Briefing */}
        <div className={styles.briefPanel}>
          <div className={styles.panelHeading}>
            <span className={styles.panelCategory}>01 // SYSTEMATIC HOOK VARIATION</span>
            <span className={styles.panelStatus}>DYNAMIC GENERATION</span>
          </div>

          <div className={styles.hookStack}>
            <div className={`${styles.hookCard} ${styles.hookCardActive}`}>
              <div className={styles.hookMeta}>
                <span className={styles.hookTag}>ANGLE A // PROBLEM CALLOUT</span>
                <span className={styles.hookBadgeActive}>IN PRODUCTION</span>
              </div>
              <p className={styles.hookText}>
                &ldquo;Why scaling companies lose operational leverage when creative velocity plateaus.&rdquo;
              </p>
              <div className={styles.hookMetrics}>
                <span>Target: 3s Retention &gt; 42%</span>
                <span className={styles.accentMetric}>High Hold Rate</span>
              </div>
            </div>

            <div className={styles.hookCard}>
              <div className={styles.hookMeta}>
                <span className={styles.hookTag}>ANGLE B // CONTRAST NARRATIVE</span>
                <span className={styles.hookBadgeMuted}>TEST QUEUE</span>
              </div>
              <p className={styles.hookText}>
                &ldquo;Manual campaign production vs. autonomous AI growth systems: A direct audit.&rdquo;
              </p>
              <div className={styles.hookMetrics}>
                <span>Target: Qualification Rate</span>
                <span>Cohort B</span>
              </div>
            </div>

            <div className={styles.hookCard}>
              <div className={styles.hookMeta}>
                <span className={styles.hookTag}>ANGLE C // QUANTITATIVE LEVERAGE</span>
                <span className={styles.hookBadgeMuted}>SCHEDULED</span>
              </div>
              <p className={styles.hookText}>
                &ldquo;How engineered creative loops replace fragile agency execution cycles.&rdquo;
              </p>
              <div className={styles.hookMetrics}>
                <span>Target: Cost Per Acquisition</span>
                <span>Cohort C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Retention & Drop-off Modeling */}
        <div className={styles.analyticsPanel}>
          <div className={styles.panelHeading}>
            <span className={styles.panelCategory}>02 // RETENTION DECAY MODELING</span>
            <span className={styles.panelStatus}>TELEMETRY SIMULATION</span>
          </div>

          <div className={styles.retentionContainer}>
            <div className={styles.retentionHeader}>
              <div>
                <span className={styles.retentionStat}>+38.4%</span>
                <span className={styles.retentionLabel}>Average Hold Rate Lift vs. Static Creative</span>
              </div>
              <div className={styles.legend}>
                <span className={styles.legendDotAccent} />
                <span>Optimized Variant</span>
                <span className={styles.legendDotMuted} />
                <span>Industry Baseline</span>
              </div>
            </div>

            <div className={styles.svgWrapper}>
              <svg viewBox="0 0 460 140" className={styles.curveSvg} aria-hidden="true">
                <defs>
                  <linearGradient id="ugcCurveGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D6FF3F" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#D6FF3F" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Baseline reference */}
                <path
                  d="M 10,25 Q 110,65 230,105 T 450,125"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />
                {/* Area fill */}
                <path
                  d="M 10,20 Q 90,30 200,50 T 450,75 L 450,135 L 10,135 Z"
                  fill="url(#ugcCurveGlow)"
                />
                {/* Optimized curve */}
                <path
                  d="M 10,20 Q 90,30 200,50 T 450,75"
                  fill="none"
                  stroke="#D6FF3F"
                  strokeWidth="2.5"
                />
                <circle cx="200" cy="50" r="4" fill="#D6FF3F" />
                <circle cx="450" cy="75" r="4" fill="#D6FF3F" />
              </svg>
            </div>

            <div className={styles.telemetryFooter}>
              <div className={styles.telemetryBlock}>
                <span className={styles.telemetryVal}>3.2s</span>
                <span className={styles.telemetryKey}>Hook Capture Window</span>
              </div>
              <div className={styles.telemetryBlock}>
                <span className={styles.telemetryVal}>12+</span>
                <span className={styles.telemetryKey}>Variations Per Cycle</span>
              </div>
              <div className={styles.telemetryBlock}>
                <span className={styles.telemetryVal}>Zero</span>
                <span className={styles.telemetryKey}>Creative Production Lag</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Product Visuals Composition: Virtual Lightbox Staging Grid
 * Ready for client product photography with multi-pass technical inspection.
 */
function VisualsShowcase() {
  return (
    <div className={styles.showcaseWrap}>
      <div className={styles.specHeader}>
        <div className={styles.headerIdent}>
          <span className={styles.specBadge}>CONCEPTUAL DEMONSTRATION</span>
          <span className={styles.specId}>SPEC // VIRTUAL-STUDIO-STAGING</span>
        </div>
        <span className={styles.specContext}>PBR RENDER &amp; LIGHTING MATRIX</span>
      </div>

      <div className={styles.studioGrid}>
        {/* Pass 01: Key Lighting & Direction */}
        <div className={styles.stageCard}>
          <div className={styles.stageVisualFrame}>
            <div className={styles.viewfinderGrid} />
            <div className={styles.specFocusBox}>
              <div className={styles.focusCornerTL} />
              <div className={styles.focusCornerTR} />
              <div className={styles.focusCornerBL} />
              <div className={styles.focusCornerBR} />
              <div className={styles.specDiagramRing} />
            </div>
            <span className={styles.frameBadge}>PASS 01 // DIRECTIONAL LUX</span>
          </div>
          <div className={styles.stageMeta}>
            <span className={styles.stageTitle}>Key Light Rig</span>
            <span className={styles.stageDetail}>5000K Diffused Key &bull; Shadow Softening 12%</span>
          </div>
        </div>

        {/* Pass 02: PBR Material Shading */}
        <div className={styles.stageCard}>
          <div className={styles.stageVisualFrame}>
            <div className={styles.viewfinderGrid} />
            <div className={styles.pbrReflectionSweep} />
            <div className={styles.specFocusBox}>
              <div className={styles.focusCornerTL} />
              <div className={styles.focusCornerTR} />
              <div className={styles.focusCornerBL} />
              <div className={styles.focusCornerBR} />
              <div className={styles.specHexMesh} />
            </div>
            <span className={styles.frameBadge}>PASS 02 // PBR SURFACING</span>
          </div>
          <div className={styles.stageMeta}>
            <span className={styles.stageTitle}>Micro-Texture Detail</span>
            <span className={styles.stageDetail}>Subsurface Scattering &bull; Roughness Specular Map</span>
          </div>
        </div>

        {/* Pass 03: Composite Lightbox Output */}
        <div className={styles.stageCard}>
          <div className={styles.stageVisualFrame}>
            <div className={styles.viewfinderGrid} />
            <div className={styles.compositeAtmosphere} />
            <div className={styles.specFocusBox}>
              <div className={styles.focusCornerTL} />
              <div className={styles.focusCornerTR} />
              <div className={styles.focusCornerBL} />
              <div className={styles.focusCornerBR} />
              <div className={styles.specCheckCircle} />
            </div>
            <span className={styles.frameBadgeActive}>PASS 03 // MASTER COMPOSITE</span>
          </div>
          <div className={styles.stageMeta}>
            <span className={styles.stageTitle}>Infinite Studio Staging</span>
            <span className={styles.stageDetail}>ACEScg Color Pipeline &bull; Full Resolution Ready</span>
          </div>
        </div>
      </div>

      <div className={styles.studioBanner}>
        <span className={styles.bannerTag}>PRODUCT ASSET ARCHITECTURE</span>
        <span className={styles.bannerNote}>
          Architectured for genuine client CAD models and high-resolution commercial asset ingestion &bull; Zero stock filler
        </span>
      </div>
    </div>
  );
}

/**
 * 3. CGI Composition: Kinematic Motion & Procedural Simulation Schematic
 */
function CgiShowcase() {
  return (
    <div className={styles.showcaseWrap}>
      <div className={styles.specHeader}>
        <div className={styles.headerIdent}>
          <span className={styles.specBadge}>CONCEPTUAL DEMONSTRATION</span>
          <span className={styles.specId}>SPEC // CGI-PROCEDURAL-SIMULATION</span>
        </div>
        <span className={styles.specContext}>RAYTRACED VOLUMETRIC ENVIRONMENT</span>
      </div>

      <div className={styles.cgiContainer}>
        {/* Left: Simulation Mesh Schematic */}
        <div className={styles.cgiMeshPanel}>
          <div className={styles.panelHeading}>
            <span className={styles.panelCategory}>01 // GEOMETRIC TOPOLOGY &amp; RIGID BODY</span>
            <span className={styles.panelStatus}>ACTIVE NODE GRAPH</span>
          </div>

          <div className={styles.meshVisualCanvas}>
            <div className={styles.schematicGrid} />
            <svg viewBox="0 0 320 200" className={styles.schematicSvg} aria-hidden="true">
              {/* Outer structural polygon */}
              <polygon
                points="160,20 270,70 270,150 160,190 50,150 50,70"
                fill="none"
                stroke="rgba(214, 255, 63, 0.45)"
                strokeWidth="1.5"
              />
              {/* Inner tension lines */}
              <line x1="160" y1="20" x2="160" y2="190" stroke="rgba(214, 255, 63, 0.25)" strokeWidth="1" />
              <line x1="50" y1="70" x2="270" y2="150" stroke="rgba(214, 255, 63, 0.25)" strokeWidth="1" />
              <line x1="50" y1="150" x2="270" y2="70" stroke="rgba(214, 255, 63, 0.25)" strokeWidth="1" />
              {/* Secondary offset frame */}
              <polygon
                points="160,50 230,85 230,135 160,165 90,135 90,85"
                fill="none"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* Kinematic vertices */}
              <circle cx="160" cy="20" r="3.5" fill="#D6FF3F" />
              <circle cx="270" cy="70" r="3.5" fill="#D6FF3F" />
              <circle cx="270" cy="150" r="3.5" fill="#D6FF3F" />
              <circle cx="160" cy="190" r="3.5" fill="#D6FF3F" />
              <circle cx="50" cy="150" r="3.5" fill="#D6FF3F" />
              <circle cx="50" cy="70" r="3.5" fill="#D6FF3F" />
              <circle cx="160" cy="105" r="5" fill="#D6FF3F" />
            </svg>
            <div className={styles.meshTelemetry}>
              <span>Vertices: 48,200</span>
              <span>Subdivision: Catmull-Clark</span>
              <span>Colliders: Convex Hull</span>
            </div>
          </div>
        </div>

        {/* Right: Lighting & Pipeline Controls */}
        <div className={styles.cgiPipelinePanel}>
          <div className={styles.panelHeading}>
            <span className={styles.panelCategory}>02 // CINEMATIC COLOR &amp; DEPTH PASS</span>
            <span className={styles.panelStatus}>LINEAR ACEScg</span>
          </div>

          <div className={styles.pipelineStack}>
            <div className={styles.pipelineItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemIndex}>01</span>
                <span className={styles.itemTitle}>Volumetric Light Scattering</span>
              </div>
              <p className={styles.itemDesc}>
                Atmospheric density calculation with true directional ray-marching for cinematic light shafts.
              </p>
            </div>

            <div className={styles.pipelineItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemIndex}>02</span>
                <span className={styles.itemTitle}>Camera Motion Choreography</span>
              </div>
              <p className={styles.itemDesc}>
                Spline-based camera paths simulating high-speed macro optics and dynamic perspective shifts.
              </p>
            </div>

            <div className={styles.pipelineItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemIndex}>03</span>
                <span className={styles.itemTitle}>Multi-Channel EXR Composite</span>
              </div>
              <p className={styles.itemDesc}>
                Granular post-render isolation of diffuse, specular, normal, and depth buffers for ad variations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Creative Production Composition: Modular Block Assembly Matrix
 */
function CreativeShowcase() {
  return (
    <div className={styles.showcaseWrap}>
      <div className={styles.specHeader}>
        <div className={styles.headerIdent}>
          <span className={styles.specBadge}>CONCEPTUAL DEMONSTRATION</span>
          <span className={styles.specId}>SPEC // MODULAR-CREATIVE-SYSTEM</span>
        </div>
        <span className={styles.specContext}>DYNAMIC AD COMPONENT ASSEMBLY</span>
      </div>

      <div className={styles.creativeMatrix}>
        {/* Source Modular Blocks */}
        <div className={styles.blocksColumn}>
          <span className={styles.columnLabel}>01 // DECONSTRUCTED ASSET BLOCKS</span>
          <div className={styles.moduleStack}>
            <div className={styles.moduleBlock}>
              <div className={styles.blockTop}>
                <span className={styles.moduleBadge}>HOOK MODULE</span>
                <span className={styles.moduleCount}>3 VARIANTS</span>
              </div>
              <span className={styles.moduleName}>High-Retention Problem Framing</span>
            </div>

            <div className={styles.moduleBlock}>
              <div className={styles.blockTop}>
                <span className={styles.moduleBadge}>PROOF MODULE</span>
                <span className={styles.moduleCount}>4 VARIANTS</span>
              </div>
              <span className={styles.moduleName}>Engineered Architecture &amp; Metrics</span>
            </div>

            <div className={styles.moduleBlock}>
              <div className={styles.blockTop}>
                <span className={styles.moduleBadge}>DEMO MODULE</span>
                <span className={styles.moduleCount}>2 VARIANTS</span>
              </div>
              <span className={styles.moduleName}>Interactive System Walkthrough</span>
            </div>

            <div className={styles.moduleBlock}>
              <div className={styles.blockTop}>
                <span className={styles.moduleBadge}>ACTION MODULE</span>
                <span className={styles.moduleCount}>3 VARIANTS</span>
              </div>
              <span className={styles.moduleName}>High-Urgency Conversion Trigger</span>
            </div>
          </div>
        </div>

        {/* Central Conduit Arrow */}
        <div className={styles.matrixConnector}>
          <div className={styles.connectorRail}>
            <span className={styles.connectorArrow}>&rarr;</span>
            <span className={styles.connectorPill}>COMBINATORIAL ENGINE</span>
            <span className={styles.connectorArrow}>&rarr;</span>
          </div>
        </div>

        {/* Multi-Format Output Matrix */}
        <div className={styles.formatsColumn}>
          <span className={styles.columnLabel}>02 // MULTI-RATIO PRODUCTION OUTPUT</span>
          <div className={styles.formatCards}>
            <div className={styles.formatCard}>
              <div className={styles.formatHeader}>
                <span className={styles.formatRatio}>9:16 VERTICAL</span>
                <span className={styles.formatChannels}>Reels &bull; TikTok &bull; Shorts</span>
              </div>
              <p className={styles.formatNote}>Dynamic typography, mobile-native pacing, immediate hook.</p>
            </div>

            <div className={styles.formatCard}>
              <div className={styles.formatHeader}>
                <span className={styles.formatRatio}>1:1 SQUARE</span>
                <span className={styles.formatChannels}>Feed &bull; LinkedIn &bull; Meta</span>
              </div>
              <p className={styles.formatNote}>Balanced editorial presentation, high-contrast headline focus.</p>
            </div>

            <div className={styles.formatCard}>
              <div className={styles.formatHeader}>
                <span className={styles.formatRatio}>16:9 WIDESCREEN</span>
                <span className={styles.formatChannels}>YouTube &bull; Programmatic &bull; CTV</span>
              </div>
              <p className={styles.formatNote}>Cinematic visual weight, depth composition, enterprise storytelling.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Paid Ads Composition: Performance Tracking & Fatigue Handoff Engine
 */
function AdsShowcase() {
  return (
    <div className={styles.showcaseWrap}>
      <div className={styles.specHeader}>
        <div className={styles.headerIdent}>
          <span className={styles.specBadge}>CONCEPTUAL DEMONSTRATION</span>
          <span className={styles.specId}>SPEC // PERFORMANCE-AD-TELEMETRY</span>
        </div>
        <span className={styles.specContext}>AUTOMATED FATIGUE DEFENSE ENGINE</span>
      </div>

      <div className={styles.adsCockpit}>
        {/* Left: Active Cluster Rotation */}
        <div className={styles.adsLifecycle}>
          <span className={styles.panelCategory}>01 // CREATIVE CLUSTER ROTATION</span>
          <div className={styles.clusterList}>
            <div className={`${styles.clusterItem} ${styles.clusterWinning}`}>
              <div className={styles.clusterHeader}>
                <span className={styles.clusterId}>CLUSTER_ALPHA_01</span>
                <span className={styles.clusterStatus}>SCALING // ACTIVE</span>
              </div>
              <div className={styles.clusterMetricRow}>
                <span>3s Hold Rate: 44.8%</span>
                <span className={styles.accentText}>+18% Over Target</span>
              </div>
            </div>

            <div className={`${styles.clusterItem} ${styles.clusterFatigued}`}>
              <div className={styles.clusterHeader}>
                <span className={styles.clusterId}>CLUSTER_BETA_02</span>
                <span className={styles.clusterStatusFatigued}>FATIGUE THRESHOLD REACHED</span>
              </div>
              <div className={styles.clusterMetricRow}>
                <span>Hold Decay: -12.4%</span>
                <span>Auto-Retire Scheduled</span>
              </div>
            </div>

            <div className={styles.clusterItem}>
              <div className={styles.clusterHeader}>
                <span className={styles.clusterId}>CLUSTER_GAMMA_03</span>
                <span className={styles.clusterStatusQueued}>STAGED FOR REPLACEMENT</span>
              </div>
              <div className={styles.clusterMetricRow}>
                <span>New Hook Variable</span>
                <span>Ready For Zero-Lag Handoff</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Decision Logic Schematic */}
        <div className={styles.adsLogic}>
          <span className={styles.panelCategory}>02 // CLOSED-LOOP ROTATION LOGIC</span>
          <div className={styles.logicBox}>
            <div className={styles.logicStep}>
              <span className={styles.logicIndex}>01</span>
              <div>
                <span className={styles.logicTitle}>Real-Time Retention Auditing</span>
                <p className={styles.logicDesc}>
                  Calculates rolling hold-rate decay curves across active spend channels every 6 hours.
                </p>
              </div>
            </div>

            <div className={styles.logicDivider} />

            <div className={styles.logicStep}>
              <span className={styles.logicIndex}>02</span>
              <div>
                <span className={styles.logicTitle}>Predictive Degradation Triggers</span>
                <p className={styles.logicDesc}>
                  Flags creative fatigue before cost-per-acquisition spikes, eliminating wasted ad spend.
                </p>
              </div>
            </div>

            <div className={styles.logicDivider} />

            <div className={styles.logicStep}>
              <span className={styles.logicIndex}>03</span>
              <div>
                <span className={styles.logicTitle}>Autonomous Replenishment</span>
                <p className={styles.logicDesc}>
                  Feeds operational telemetry back into the Creative Engine to generate validated successor assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GrowthMediaCard({ capabilityId }: GrowthMediaCardProps) {
  switch (capabilityId) {
    case "ugc":
      return <UgcShowcase />;
    case "visuals":
      return <VisualsShowcase />;
    case "cgi":
      return <CgiShowcase />;
    case "creative":
      return <CreativeShowcase />;
    case "ads":
      return <AdsShowcase />;
    default:
      return <UgcShowcase />;
  }
}
