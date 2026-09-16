"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const hidden = { opacity: 0, y: 16, filter: "blur(4px)" };
const shown = { opacity: 1, y: 0, filter: "blur(0px)" };

/**
 * Block-level float-up entrance. `inView` plays it once when scrolled into view,
 * otherwise it plays on mount. Stagger siblings with ~100ms `delay` steps.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  inView = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
}) {
  const transition = { duration: 0.5, ease: "easeOut" as const, delay };

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
