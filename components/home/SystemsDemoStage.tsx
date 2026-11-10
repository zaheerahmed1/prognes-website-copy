import Link from "next/link";
import { home } from "@/content/home";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import styles from "./SystemsDemoStage.module.css";

interface SystemsDemoStageProps {
  videoSrc?: string;
  poster?: string;
}

const { systems } = home.demos;

export function SystemsDemoStage({ videoSrc, poster }: SystemsDemoStageProps) {
  return (
    <div className={styles.stageCard}>
      <header className={styles.stageHeader}>
        <div className={styles.badgeRow}>
          <span className={styles.statusBadge}>{systems.badge}</span>
        </div>
        <h3 className={styles.stageTitle}>{systems.headline}</h3>
        <p className={styles.stageDesc}>{systems.description}</p>
      </header>

      {/* Extensible Viewport */}
      <div className={styles.viewport}>
        {videoSrc ? (
          <VideoPlayer
            src={videoSrc}
            poster={poster}
            aspectRatio="16/9"
            title="System Walkthrough Demo"
            category="AI Systems"
          />
        ) : (
          <div className={styles.presentationScreen}>
            <div className={styles.screenInner}>
              <div className={styles.screenGridHeader}>
                <span className={styles.screenBadge}>CAPABILITY TAXONOMY</span>
                <span className={styles.screenIndicator}>
                  <span className={styles.dot} /> PRODUCTION BENCH
                </span>
              </div>

              <div className={styles.categoriesList}>
                {systems.categories.map((cat, idx) => (
                  <div key={cat} className={styles.categoryRow}>
                    <span className={styles.categoryIndex}>0{idx + 1}</span>
                    <span className={styles.categoryName}>{cat}</span>
                    <span className={styles.categoryStatus}>Architecture Active</span>
                  </div>
                ))}
              </div>

              <div className={styles.screenFooter}>
                <p className={styles.screenNote}>
                  Live recordings and walkthroughs will embed directly into this viewport.
                </p>
                <Link href={systems.action.href} className={styles.screenAction}>
                  {systems.action.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

