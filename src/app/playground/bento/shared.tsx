"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/** Grid wrapper that staggers its `Cell` children in (ease-out, under 300ms each). */
export function Cells({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="shown"
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.06 } } }}
    >
      {children}
    </motion.div>
  );
}

export function Cell({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <motion.article
      className={className}
      variants={{
        hidden: { opacity: 0, y: 12 },
        shown: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE_OUT } },
      }}
    >
      {children}
    </motion.article>
  );
}
