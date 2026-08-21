"use client";

import { useState } from "react";
import { growthPage } from "@/content/growth";
import sectionStyles from "./GrowthSection.module.css";
import styles from "./GrowthSelector.module.css";

type Capability = typeof growthPage.selector[number];

/**
 * Visual media placeholder representing the specific capability.
 * Instead of WebGL, it uses structural CSS representing AI systems.
 */
function GrowthMedia({ item }: { item: Capability }) {
  return (
    <div className={sectionStyles.mediaWrap}>
      <div className={sectionStyles.mediaLines} aria-hidden="true" />
      <div className={sectionStyles.mediaCenter}>
        {/* Placeholder structural icon */}
        <div className={sectionStyles.mediaIcon}>+</div>
        <span className={sectionStyles.mediaLabel}>{item.label} Visual</span>
      </div>
    </div>
  );
}

export function GrowthSelector() {
  const [activeId, setActiveId] = useState<string>(growthPage.selector[0].id);

  const activeItem = growthPage.selector.find((i) => i.id === activeId) || growthPage.selector[0];

  return (
    <>
      {/* ─── MOBILE ACCORDION ─── */}
      <div className={styles.mobileSelector} role="tablist">
        {growthPage.selector.map((item) => {
          const isActive = item.id === activeId;
          return (
            <div key={item.id} className={styles.accordionItem}>
              <button
                type="button"
                className={styles.accordionButton}
                role="tab"
                aria-selected={isActive}
                aria-expanded={isActive}
                onClick={() => setActiveId(item.id)}
              >
                <span>{item.label}</span>
                <span className={styles.iconPlus} aria-hidden="true">+</span>
              </button>
              
              <div 
                className={styles.accordionContent}
                data-active={isActive}
                role="tabpanel"
                aria-hidden={!isActive}
              >
                <div className={styles.accordionContentInner}>
                  <p className={styles.desc}>{item.desc}</p>
                  {isActive && <GrowthMedia item={item} />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── DESKTOP HORIZONTAL TABS ─── */}
      <div className={styles.desktopSelector}>
        <div className={styles.tabList} role="tablist" aria-label="Growth Capabilities">
          {growthPage.selector.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={styles.tabButton}
                onClick={() => setActiveId(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className={styles.tabPanel} role="tabpanel">
          <p className={styles.tabDesc}>{activeItem.desc}</p>
          <GrowthMedia item={activeItem} />
        </div>
      </div>
    </>
  );
}
