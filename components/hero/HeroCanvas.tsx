"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { HeroScene } from "@/components/three/HeroScene";

type Props = {
  onReady: () => void;
};

/**
 * Isolated R3F Canvas wrapper.
 *
 * - Uses `failIfMajorPerformanceCaveat` to reject software renderers
 * - Catches WebGL context errors and hides itself
 * - Calls `onReady` only after a successful first frame
 */
export function HeroCanvas({ onReady }: Props) {
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCreated = useCallback(() => {
    requestAnimationFrame(() => {
      onReady();
    });
  }, [onReady]);

  /* Listen for WebGL context lost events on the container */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleContextLost = () => setHasError(true);

    const canvas = el.querySelector("canvas");
    canvas?.addEventListener("webglcontextlost", handleContextLost);

    return () => {
      canvas?.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, []);

  if (hasError) return null;

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0 }}
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: true,
        }}
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 1.5]}
        frameloop="always"
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
        }}
        onCreated={handleCreated}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
}
