"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const variants = {
  // Float up with a soft blur (text blocks, cards)
  bottom: {
    hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
    shown: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  // Slide in from the right; no blur so element filters (e.g. drop shadows) stay intact
  right: {
    hidden: { opacity: 0, x: 48 },
    shown: { opacity: 1, x: 0 },
  },
};

/**
 * Block-level entrance. `inView` plays it once when scrolled into view, otherwise it plays
 * on mount. Stagger siblings with ~80–100ms `delay` steps.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  inView = false,
  from = "bottom",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
  from?: keyof typeof variants;
}) {
  const { hidden, shown } = variants[from];
  const transition = {
    duration: from === "right" ? 0.7 : 0.5,
    ease: from === "right" ? ([0.2, 0, 0, 1] as const) : ("easeOut" as const),
    delay,
  };

  return inView ? (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div className={className} initial={hidden} animate={shown} transition={transition}>
      {children}
    </motion.div>
  );
}
