"use client";

import { useState } from "react";
import { home } from "@/content/home";
import { Section } from "@/components/primitives/Section/Section";
import { Container } from "@/components/primitives/Grid/Grid";
import { Eyebrow } from "@/components/primitives/Eyebrow/Eyebrow";
import { Heading } from "@/components/primitives/Heading/Heading";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { SystemsDemoStage } from "./SystemsDemoStage";
import styles from "./DemosSection.module.css";

const { demos } = home;
const { creative } = demos;

export function DemosSection() {
  const [activeCreativeIndex, setActiveCreativeIndex] = useState(0);
  const activeCreativeItem = creative.items[activeCreativeIndex];

  return (
    <Section id="demos" className={styles.section} spacing="large">
      <Container>
        <SectionReveal>
          {/* Section Introduction */}
          <div className={styles.intro}>
            <Eyebrow className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              {demos.eyebrow}
            </Eyebrow>

            <Heading variant="h2" className={styles.headline}>
              {demos.headline}
            </Heading>

            <p className={styles.subtext}>{demos.subtext}</p>
          </div>

          {/* Demos Dual Showcase Grid */}
          <div className={styles.demosGrid}>
            {/* ── Area 1: Growth & Creative Video Showcase ── */}
            <div className={styles.creativeShowcase}>
              <header className={styles.showcaseHeader}>
                <h3 className={styles.showcaseTitle}>{creative.title}</h3>
                <p className={styles.showcaseDesc}>{creative.description}</p>

                {/* Video Selector Tabs */}
                <div className={styles.tabList} role="tablist" aria-label="Creative video demonstrations">
                  {creative.items.map((item, idx) => (
                    <button
                      key={item.id}
                      role="tab"
                      aria-selected={activeCreativeIndex === idx}
                      onClick={() => setActiveCreativeIndex(idx)}
                      className={`${styles.tabBtn} ${
                        activeCreativeIndex === idx ? styles.tabBtnActive : ""
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </header>

              {/* Active Video Player */}
              <div className={styles.playerWrapper}>
                <VideoPlayer
                  key={activeCreativeItem.id}
                  src={activeCreativeItem.videoSrc}
                  poster={activeCreativeItem.posterSrc}
                  aspectRatio={
                    activeCreativeItem.aspectRatio as "16/9" | "9/16" | "4/5" | "1/1"
                  }
                  title={activeCreativeItem.title}
                />
              </div>
            </div>

            {/* ── Area 2: AI Systems Demonstration Stage ── */}
            <div className={styles.systemsShowcase}>
              <SystemsDemoStage />
            </div>
          </div>
        </SectionReveal>
      </Container>
    </Section>
  );
}

