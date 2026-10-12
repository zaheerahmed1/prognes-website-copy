"use client";

import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { HeroFallback } from "@/components/hero/HeroFallback";
import styles from "./HeroVisual.module.css";

/**
 * Lazy-load the 3D scene so the WebGL bundle is not in the critical path.
 * The fallback renders immediately (server-rendered or client-hydrated).
 */
const LazyCanvas = lazy(() =>
  import("./HeroCanvas").then((mod) => ({
    default: mod.HeroCanvas,
  })),
);

/**
 * Detects whether WebGL is available and the device is "capable enough"
 * to run a live 3D scene.
 */
function canUseWebGL(): boolean {
  if (typeof window === "undefined") return false;

  // Respect reduced-motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  // Mobile devices — serve fallback
  if (window.matchMedia("(max-width: 767px)").matches) return false;

  // Check WebGL support
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) return false;

    // Rough GPU capability check via renderer string
    const debugInfo = (gl as WebGLRenderingContext).getExtension(
      "WEBGL_debug_renderer_info",
    );
    if (debugInfo) {
      const renderer = (gl as WebGLRenderingContext).getParameter(
        debugInfo.UNMASKED_RENDERER_WEBGL,
      );
      // Block known low-end / software renderers
      if (/SwiftShader|llvmpipe|Software/i.test(renderer)) return false;
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * HeroVisual — client component that decides between
 * live WebGL (HeroScene via R3F Canvas) or the static HeroFallback.
 *
 * Capability ladder:
 *   Desktop + capable GPU → live WebGL
 *   Tablet → simplified (currently same R3F scene; can swap to video later)
 *   Mobile / reduced-motion / WebGL unavailable → static CSS fallback
 *
 * The fallback always renders first — the Canvas fades in on top.
 */
export function HeroVisual() {
  const [showWebGL, setShowWebGL] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowWebGL(canUseWebGL());
  }, []);

  const handleReady = useCallback(() => {
    setCanvasReady(true);
  }, []);

  return (
    <div className={styles.visualContainer}>
      {/* Fallback always present (LCP safe, no-JS safe) */}
      <HeroFallback />

      {/* WebGL canvas — layered on top, fades in when ready */}
      {showWebGL && (
        <div
          className={`${styles.canvas} ${canvasReady ? styles.canvasReady : ""}`}
        >
          <Suspense fallback={null}>
            <LazyCanvas onReady={handleReady} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
