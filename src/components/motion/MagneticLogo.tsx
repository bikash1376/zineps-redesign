"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export type Logo = { file: string; name: string; ext?: "png" | "svg" };

const PULL = 0.35; // share of the cursor offset the tile follows

/** Logo tile that leans toward the cursor while hovered, then springs back. */
export function MagneticLogo({ logo }: { logo: Logo }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  return (
    <motion.li
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onPointerMove={(e) => {
        if (reduceMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * PULL);
        y.set((e.clientY - (rect.top + rect.height / 2)) * PULL);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="flex size-20 items-center justify-center rounded-2xl bg-white p-3.5 shadow-border transition-shadow duration-200 ease-out hover:shadow-border-hover xl:size-24"
    >
      <span className="relative block size-full">
        <Image
          src={`/images/integrations/${logo.file}.${logo.ext ?? "png"}`}
          alt={logo.name}
          fill
          sizes="96px"
          className="object-contain"
        />
      </span>
    </motion.li>
  );
}
