"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

type LatLng = [number, number];

const AMSTERDAM: LatLng = [52.3676, 4.9041];

// Hubs Zineps ships to, with lanes drawn from Amsterdam
const hubs: LatLng[] = [
  [51.5072, -0.1276], // London
  [52.52, 13.405], // Berlin
  [40.4168, -3.7038], // Madrid
  [40.7128, -74.006], // New York
  [-23.5505, -46.6333], // São Paulo
  [25.2048, 55.2708], // Dubai
  [1.3521, 103.8198], // Singapore
  [35.6762, 139.6503], // Tokyo
  [-33.8688, 151.2093], // Sydney
  [-26.2041, 28.0473], // Johannesburg
];

/**
 * Interactive WebGL globe (cobe) in the Zineps palette: mint land dots, green hubs and
 * forest-green shipping lanes out of Amsterdam. Drag to spin; auto-rotation stops when
 * the OS asks for reduced motion.
 */
export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragStart = useRef<{ x: number; offset: number } | null>(null);
  const dragOffset = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let size = canvas.offsetWidth * dpr;
    let phi = 0.2;
    let frame = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size,
      height: size,
      phi,
      theta: 0.28,
      dark: 0,
      diffuse: 1.25,
      mapSamples: 16000,
      mapBrightness: 5.5,
      baseColor: [0.86, 0.94, 0.92],
      markerColor: [0.2, 0.61, 0.52],
      glowColor: [0.93, 0.97, 0.96],
      markers: [
        { location: AMSTERDAM, size: 0.08 },
        ...hubs.map((location) => ({ location, size: 0.045 })),
      ],
      arcs: hubs.map((to) => ({ from: AMSTERDAM, to })),
      arcColor: [0.29, 0.45, 0.41],
      arcWidth: 0.6,
      arcHeight: 0.28,
      markerElevation: 0.01,
    });

    const onResize = () => {
      size = canvas.offsetWidth * dpr;
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      if (!dragStart.current && !reduceMotion) phi += 0.0025;
      globe.update({ phi: phi + dragOffset.current, width: size, height: size });
      frame = requestAnimationFrame(tick);
    };
    tick();
    canvas.style.opacity = "1";

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Globe showing Zineps shipping lanes from Amsterdam to hubs worldwide"
        className="size-full cursor-grab touch-pan-y opacity-0 transition-opacity duration-700 ease-out active:cursor-grabbing"
        onPointerDown={(e) => {
          dragStart.current = { x: e.clientX, offset: dragOffset.current };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!dragStart.current) return;
          dragOffset.current = dragStart.current.offset + (e.clientX - dragStart.current.x) / 180;
        }}
        onPointerUp={() => {
          dragStart.current = null;
        }}
        onPointerCancel={() => {
          dragStart.current = null;
        }}
      />
    </div>
  );
}
