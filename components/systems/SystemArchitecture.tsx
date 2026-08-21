import { systemsPage } from "@/content/systems";
import styles from "./SystemArchitecture.module.css";

export function SystemArchitecture() {
  return (
    <div className={styles.architecture} aria-label="AI Systems Architecture">
      {systemsPage.architecture.map((node) => (
        <div key={node.id} className={`${styles.node} js-arch-node`}>
          <div className={styles.nodeHeader}>{node.label}</div>
          <div className={styles.nodeDesc}>{node.desc}</div>
        </div>
      ))}
    </div>
  );
}
