"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  aspectRatio?: "16/9" | "9/16" | "4/5" | "1/1";
  title?: string;
  badge?: string;
  className?: string;
  category?: string;
}

export function VideoPlayer({
  src,
  poster,
  aspectRatio = "16/9",
  title,
  badge,
  className,
  category,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Ensure continuous playback on mount and whenever the source changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    setIsMuted(true);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // In case the browser requires user interaction first
          setIsPlaying(false);
        });
    }
  }, [src]);

  const handleToggleSound = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const newMuted = !video.muted;
    video.muted = newMuted;
    setIsMuted(newMuted);

    // Keep it running continuously
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  const handleTogglePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const aspectClass =
    aspectRatio === "9/16"
      ? styles.aspect9x16
      : aspectRatio === "4/5"
      ? styles.aspect4x5
      : aspectRatio === "1/1"
      ? styles.aspect1x1
      : styles.aspect16x9;

  return (
    <div
      className={`${styles.container} ${aspectClass}${className ? ` ${className}` : ""}`}
      onClick={handleTogglePlayback}
      role="region"
      aria-label={title || "Video demonstration"}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.video}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        aria-label={title || "Continuous video playback"}
      />

      {/* Top Badges */}
      <div className={styles.topBadges}>
        {badge && <span className={styles.badge}>{badge}</span>}
        {category && <span className={styles.categoryBadge}>{category}</span>}
      </div>

      {/* Ambient gradient overlay */}
      <div className={styles.bottomGradient} aria-hidden="true" />

      {/* Bottom Controls & Title Bar */}
      <div className={styles.controlsBar}>
        {title && <span className={styles.captionTitle}>{title}</span>}

        <div className={styles.actionsGroup}>
          {!isPlaying && (
            <span className={styles.pausedIndicator} aria-hidden="true">
              PAUSED
            </span>
          )}

          <button
            type="button"
            onClick={handleToggleSound}
            className={styles.soundButton}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            <span className={styles.soundIcon} aria-hidden="true">
              {isMuted ? "🔇" : "🔊"}
            </span>
            <span className={styles.soundLabel}>
              {isMuted ? "MUTED" : "SOUND ON"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
