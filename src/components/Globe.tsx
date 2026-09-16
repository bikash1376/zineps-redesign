"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "motion/react";

type LatLng = [number, number];

// A few small hubs only, so the dotted map stays the focus
const markers: { location: LatLng; size: number }[] = [
  { location: [52.3676, 4.9041], size: 0.035 }, // Amsterdam
  { location: [40.7128, -74.006], size: 0.03 }, // New York
  { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
];

const MOVEMENT_DAMPING = 1400;

/**
 * Magic UI's cobe globe, ported to cobe v2 (update() loop instead of onRender):
 * light grey dotted land, orange hubs, slow auto-rotation and spring-damped drag.
 */
export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerStart = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const rotation = useMotionValue(0);
  const rotationSpring = useSpring(rotation, { mass: 1, damping: 30, stiffness: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth;
    let phi = 0;
    let frame = 0;

    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 1, 1],
      markers,
      // cobe v2 lifts markers 0.05 off the surface by default, which reads as floating dots
      markerElevation: 0,
    });

    const tick = () => {
      if (pointerStart.current === null && !reduceMotion) phi += 0.005;
      globe.update({ phi: phi + rotationSpring.get(), width: width * 2, height: width * 2 });
      frame = requestAnimationFrame(tick);
    };

    // Only spin (and render) while the globe is on screen and the tab is visible
    let onScreen = false;
    const start = () => {
      if (!frame && onScreen && !document.hidden) frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) start();
        else stop();
      },
      { rootMargin: "100px" },
    );
    observer.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    // Draw one frame so the globe isn't blank before it first scrolls into view
    globe.update({ phi, width: width * 2, height: width * 2 });
    canvas.style.opacity = "1";

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [reduceMotion, rotationSpring]);

  const setDragging = (value: number | null) => {
    pointerStart.current = value;
    if (canvasRef.current) canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
  };

  return (
    <div className={`aspect-square w-full ${className}`}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Rotating globe with Zineps shipping hubs"
        className="size-full cursor-grab touch-pan-y opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        onPointerDown={(e) => setDragging(e.clientX)}
        onPointerUp={() => setDragging(null)}
        onPointerOut={() => setDragging(null)}
        onPointerMove={(e) => {
          if (pointerStart.current === null) return;
          const delta = e.clientX - pointerStart.current;
          pointerStart.current = e.clientX;
          rotation.set(rotation.get() + delta / (MOVEMENT_DAMPING / 10));
        }}
      />
    </div>
  );
}
