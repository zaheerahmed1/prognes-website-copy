import styles from "./SystemArchitecture.module.css";

interface ArchitecturePhase {
  number: string;
  phaseTitle: string;
  role: string;
  nodes: {
    label: string;
    description: string;
    tag: string;
  }[];
}

const SYSTEM_WORKFLOW: ArchitecturePhase[] = [
  {
    number: "01",
    phaseTitle: "SIGNAL INGESTION",
    role: "Gateway & Event Capture",
    nodes: [
      {
        label: "Inbound Telemetry",
        description: "Form triggers, webhook signals, and inquiry events captured at the perimeter.",
        tag: "Event Gateway",
      },
      {
        label: "Context Enrichment",
        description: "Extracting structured parameters and interaction history from metadata.",
        tag: "Payload Ingest",
      },
    ],
  },
  {
    number: "02",
    phaseTitle: "EVALUATION & FENCING",
    role: "Deterministic Validation",
    nodes: [
      {
        label: "Schema Validation",
        description: "Enforcing strict JSON rules and validation fences prior to model inference.",
        tag: "Rule Fencing",
      },
      {
        label: "Intent Classification",
        description: "Categorizing inquiry scope, urgency, and requirement parameters.",
        tag: "Structured Evaluation",
      },
    ],
  },
  {
    number: "03",
    phaseTitle: "DECISION & ROUTING",
    role: "Multi-Path Orchestration",
    nodes: [
      {
        label: "Priority Pathway",
        description: "Direct routing for high-intent requests to instant scheduling and rapid engagement.",
        tag: "Priority Branch",
      },
      {
        label: "Contextual Nurture",
        description: "Structured routing for early inquiries through educational resources and follow-up.",
        tag: "Nurture Branch",
      },
      {
        label: "Knowledge Retrieval",
        description: "Querying structured documentation to generate accurate, scoped resolutions.",
        tag: "Knowledge Layer",
      },
    ],
  },
  {
    number: "04",
    phaseTitle: "EXECUTION & STORAGE",
    role: "Operational Persistence",
    nodes: [
      {
        label: "CRM Synchronization",
        description: "Bi-directional record updating, lead tagging, and pipeline stage advancement.",
        tag: "State Mutation",
      },
      {
        label: "Operational Telemetry",
        description: "Notification dispatch to designated channels and complete audit trail persistence.",
        tag: "Audit Logging",
      },
    ],
  },
];

export function SystemArchitecture() {
  return (
    <div
      className={styles.blueprintContainer}
      aria-label="Illustrative AI Systems operational architecture blueprint"
    >
      {/* Blueprint Top Bar */}
      <div className={styles.blueprintHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.blueprintBadge}>ILLUSTRATIVE SYSTEM BLUEPRINT</span>
          <span className={styles.blueprintId}>SPEC // WORKFLOW-ORCHESTRATION</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.blueprintNotice}>REPRESENTATIVE ARCHITECTURE SPECIFICATION</span>
        </div>
      </div>

      {/* Main Workflow Pipeline */}
      <div className={styles.workflowGrid}>
        {SYSTEM_WORKFLOW.map((phase, idx) => (
          <div key={phase.number} className={styles.phaseColumn}>
            {/* Phase Header */}
            <div className={styles.phaseHeader}>
              <div className={styles.phaseTitleRow}>
                <span className={styles.phaseNumber}>{phase.number}</span>
                <span className={styles.phaseTitle}>{phase.phaseTitle}</span>
              </div>
              <span className={styles.phaseRole}>{phase.role}</span>
            </div>

            {/* Pipeline Stage Nodes */}
            <div className={styles.nodeStack}>
              {phase.nodes.map((node, nIdx) => (
                <div key={nIdx} className={styles.workflowCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.nodeTag}>{node.tag}</span>
                    <span className={styles.nodeConnectorDot} aria-hidden="true" />
                  </div>
                  <h4 className={styles.nodeLabel}>{node.label}</h4>
                  <p className={styles.nodeDescription}>{node.description}</p>
                </div>
              ))}
            </div>

            {/* Directional Step Indicator for Desktop */}
            {idx < SYSTEM_WORKFLOW.length - 1 && (
              <div className={styles.columnDivider} aria-hidden="true">
                <span className={styles.stepArrow}>&rarr;</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Blueprint Legend / Governance Note */}
      <div className={styles.blueprintFooter}>
        <div className={styles.footerNote}>
          <span className={styles.dotAccent} aria-hidden="true" />
          <span>
            Deterministic rules govern execution &bull; Probabilistic models are bound within verified schemas &bull; Complete auditability
          </span>
        </div>
      </div>
    </div>
  );
}
