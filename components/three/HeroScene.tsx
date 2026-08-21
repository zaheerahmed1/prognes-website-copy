"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Procedural hero 3D scene — "Intelligence → Infrastructure"
 *
 * Concept: An abstract architectural structure of interconnected geometric
 * forms — an icosahedron wireframe (intelligence) contained within a
 * precise octahedron frame (infrastructure). Subtle slow rotation
 * communicates aliveness without distraction.
 *
 * Lightweight procedural geometry only — no models, no textures,
 * no postprocessing, no particles, no physics.
 */

const ACCENT = new THREE.Color("#d6ff3f");
const BORDER_COLOR = new THREE.Color("#ffffff");

/* Edge material — fine architectural wireframe lines */
function createLineMaterial(color: THREE.Color, opacity: number) {
  return new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
  });
}

/** Converts a BufferGeometry's edges into a LineSegments object */
function WireframeEdges({
  geometry,
  color,
  opacity,
}: {
  geometry: THREE.BufferGeometry;
  color: THREE.Color;
  opacity: number;
}) {
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry, 15), [geometry]);
  const mat = useMemo(() => createLineMaterial(color, opacity), [color, opacity]);

  return <lineSegments geometry={edges} material={mat} />;
}

/**
 * A ring rendered using a Three.js Line object via <primitive>.
 * We use <primitive> to avoid the SVG <line> JSX conflict.
 */
function WireRing({
  radius,
  opacity,
  rotationX = 0,
}: {
  radius: number;
  opacity: number;
  rotationX?: number;
}) {
  const lineObj = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 96;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(pts);
    const material = createLineMaterial(BORDER_COLOR, opacity);
    const line = new THREE.Line(geometry, material);
    line.rotation.x = rotationX;
    return line;
  }, [radius, opacity, rotationX]);

  return <primitive object={lineObj} />;
}

/** Small accent dot at a given position */
function NodeDot({ position }: { position: [number, number, number] }) {
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: ACCENT,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
      }),
    [],
  );
  const geo = useMemo(() => new THREE.SphereGeometry(0.03, 8, 8), []);

  return <mesh geometry={geo} material={mat} position={position} />;
}

export function HeroScene() {
  const groupRef = useRef<THREE.Group>(null!);
  const frameRef = useRef(0);

  /* Procedural geometries — created once */
  const icosaGeo = useMemo(() => new THREE.IcosahedronGeometry(1.2, 1), []);
  const octaGeo = useMemo(() => new THREE.OctahedronGeometry(1.8, 0), []);
  const innerOctaGeo = useMemo(() => new THREE.OctahedronGeometry(0.6, 0), []);

  /* Node positions at icosahedron vertices */
  const nodePositions: [number, number, number][] = useMemo(() => {
    const positions = icosaGeo.getAttribute("position");
    const unique = new Map<string, [number, number, number]>();
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      const key = `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
      if (!unique.has(key)) {
        unique.set(key, [x, y, z]);
      }
    }
    // Take a subset of unique positions for accent dots (max 6)
    return Array.from(unique.values()).slice(0, 6);
  }, [icosaGeo]);

  /* Slow rotation — alive, not busy */
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    frameRef.current += delta;
    groupRef.current.rotation.y = frameRef.current * 0.06;
    groupRef.current.rotation.x = Math.sin(frameRef.current * 0.03) * 0.1;
  });

  return (
    <>
      {/* Soft ambient + directional for subtle depth */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />

      <group ref={groupRef}>
        {/* Outer octahedron — infrastructure frame */}
        <WireframeEdges geometry={octaGeo} color={BORDER_COLOR} opacity={0.12} />

        {/* Icosahedron — intelligence network */}
        <WireframeEdges geometry={icosaGeo} color={BORDER_COLOR} opacity={0.22} />

        {/* Inner octahedron — core system */}
        <WireframeEdges geometry={innerOctaGeo} color={ACCENT} opacity={0.12} />

        {/* Orbital rings — architectural precision */}
        <WireRing radius={1.5} opacity={0.06} />
        <WireRing radius={1.5} opacity={0.06} rotationX={Math.PI / 2} />
        <WireRing radius={1.0} opacity={0.04} rotationX={Math.PI / 3} />

        {/* Accent nodes at key vertices */}
        {nodePositions.map((pos, i) => (
          <NodeDot key={i} position={pos} />
        ))}
      </group>
    </>
  );
}
