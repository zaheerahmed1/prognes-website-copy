"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { growthPage } from "@/content/growth";
import { allowsMotion } from "@/lib/motion";
import { GrowthMediaCard } from "./GrowthMediaCard";
import styles from "./GrowthSelector.module.css";

type Capability = typeof growthPage.selector[number];

/**
 * Architectural capability card representation for the selected capability.
 */
function GrowthMedia({ item }: { item: Capability }) {
  return <GrowthMediaCard capabilityId={item.id} />;
}

/**
 * GrowthSelector — interactive capability selector with controlled transitions.
 *
 * MOTION:
 *   When the active tab changes, the panel content (description + media)
 *   animates with a brief opacity + slight vertical transition.
 *   This is pure CSS — driven by the data-transitioning attribute.
 *   GSAP is NOT needed for this micro-interaction; CSS is sufficient and
 *   compositable without layout shift.
 *
 *   Reduced motion: the transition-duration is already suppressed by
 *   globals.css prefers-reduced-motion rule, so the panel simply snaps.
 */
export function GrowthSelector() {
  const [activeId, setActiveId] = useState<string>(growthPage.selector[0].id);
  const [transitioning, setTransitioning] = useState(false);
  const pendingIdRef = useRef<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeItem =
    growthPage.selector.find((i) => i.id === activeId) || growthPage.selector[0];

  const handleSelect = useCallback((id: string) => {
    if (id === activeId) return;

    if (!allowsMotion()) {
      setActiveId(id);
      return;
    }

    // Start exit transition, then swap content
    pendingIdRef.current = id;
    setTransitioning(true);

    timerRef.current = setTimeout(() => {
      if (pendingIdRef.current) {
        setActiveId(pendingIdRef.current);
        pendingIdRef.current = null;
      }
      setTransitioning(false);
    }, 200); // matches CSS transition duration
  }, [activeId]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

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
                onClick={() => handleSelect(item.id)}
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
                onClick={() => handleSelect(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          className={styles.tabPanel}
          role="tabpanel"
          data-transitioning={transitioning}
        >
          <p className={styles.tabDesc}>{activeItem.desc}</p>
          <GrowthMedia item={activeItem} />
        </div>
      </div>
    </>
  );
}
