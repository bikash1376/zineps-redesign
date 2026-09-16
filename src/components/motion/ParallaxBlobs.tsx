"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

export type BlobDef = {
  /** Percent/px position when not set via className */
  left?: string;
  top?: string;
  /** Size, color and/or position classes; defaults to the 192px white/50 cloud */
  className?: string;
  /** Parallax strength: higher drifts further while scrolling (0 = static) */
  depth?: number;
};

function Blob({
  blob,
  index,
  progress,
  reduceMotion,
}: {
  blob: BlobDef;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const range = (blob.depth ?? 1) * 48;
  const y = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [range, -range]);

  return (
    <motion.span
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${blob.className ?? "size-48 bg-white/50"}`}
      style={{ left: blob.left, top: blob.top, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", duration: 0.9, bounce: 0, delay: index * 0.08 }}
    />
  );
}

/**
 * Soft "cloud" circles for mint/green panels: they scale up one by one when the panel
 * enters the viewport, then drift at different speeds while scrolling (parallax).
 * Render as the first child of a `relative overflow-hidden` panel.
 */
export function ParallaxBlobs({ blobs }: { blobs: BlobDef[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0">
      {blobs.map((blob, i) => (
        <Blob key={i} blob={blob} index={i} progress={scrollYProgress} reduceMotion={reduceMotion} />
      ))}
    </div>
  );
}
