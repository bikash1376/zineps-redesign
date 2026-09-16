"use client";

import { motion, type Variants } from "motion/react";

const EASE = [0.2, 0, 0, 1] as const;

/* ── Animatable icons (hand-drawn SVGs so each part can move on hover) ─────────────── */

/** Globe: meridians sweep across like the globe is turning. */
function GlobeIcon() {
  const sweep: Variants = {
    rest: { rx: 3.5, opacity: 1 },
    hover: { rx: [3.5, 0.6, 3.5], transition: { duration: 0.7, ease: "easeInOut" } },
  };
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="9" cy="9" r="7.25" />
      <path d="M1.75 9h14.5" strokeLinecap="round" />
      <motion.ellipse cx="9" cy="9" ry="7.25" variants={sweep} />
    </svg>
  );
}

/** Handshake: the clasped hands give a quick shake. */
function HandshakeIcon() {
  const shake: Variants = {
    rest: { rotate: 0, y: 0 },
    hover: { rotate: [0, -10, 8, -5, 0], y: [0, 1, -1, 0.5, 0], transition: { duration: 0.6, ease: "easeInOut" } },
  };
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* Sleeves stay put */}
      <path d="M1.5 6.5 4 5.5M16.5 6.5 14 5.5" />
      <motion.g variants={shake} style={{ originX: "50%", originY: "55%" }}>
        {/* Left hand */}
        <path d="M4 5.5 7.25 4.25a1.5 1.5 0 0 1 1.3.1L9.75 5" />
        <path d="M4 5.5v5.25l3.5 3a1.25 1.25 0 0 0 1.75-.1" />
        {/* Right hand wrapping over */}
        <path d="M14 5.5 11.5 4.6a1.5 1.5 0 0 0-1.2.05L7.9 6a1 1 0 0 0 .95 1.75l1.9-.85L14 9.9v.85l-3.25 2.75" />
        <path d="M9.25 13.65 10 13M10.75 12.9l.75-.65" />
      </motion.g>
    </svg>
  );
}

/** Package: the lid pops open and settles while the box gives a small hop. */
function PackageIcon() {
  const lid: Variants = {
    rest: { y: 0, rotate: 0 },
    hover: { y: [0, -2.5, 0], rotate: [0, -10, 0], transition: { duration: 0.55, ease: EASE } },
  };
  const box: Variants = {
    rest: { y: 0 },
    hover: { y: [0, 0.8, 0], transition: { duration: 0.55, ease: EASE } },
  };
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <motion.g variants={box}>
        <path d="M3 7.25v7a1.25 1.25 0 0 0 1.25 1.25h9.5A1.25 1.25 0 0 0 15 14.25v-7" />
        <path d="M7.25 10.25h3.5" />
      </motion.g>
      <motion.g variants={lid} style={{ originX: "15%", originY: "100%" }}>
        <rect x="2" y="3.5" width="14" height="3.75" rx="1" />
      </motion.g>
    </svg>
  );
}

/* ── Notifications ─────────────────────────────────────────────────────────────────── */

const items = [
  { title: "Worldwide", description: "200+ countries", meta: "Active", Icon: GlobeIcon },
  { title: "Partners", description: "50+ logistics partners", meta: "Available", Icon: HandshakeIcon },
  { title: "Shipments", description: "1000+ methods", meta: "Now", Icon: PackageIcon },
];

const stack: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

// Pop in like a notification: from smaller, lower, faded and slightly blurred
const notification: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.92, filter: "blur(4px)" },
  shown: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.5, bounce: 0 },
  },
};

/**
 * Bento card 4: three coverage "notifications" that arrive one after another (top first)
 * when the card scrolls into view. Hovering a notification animates its icon.
 */
export function CoverageNotifications() {
  return (
    <motion.ul
      className="w-full space-y-2.5"
      variants={stack}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
    >
      {items.map(({ title, description, meta, Icon }, i) => (
        <motion.li
          key={title}
          variants={notification}
          className="max-sm:mx-0!"
          style={{ marginInline: `${i * 14}px` }}
        >
          {/* Hover variants cascade from here into the icon's animated parts */}
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="flex items-center gap-3.5 rounded-xl bg-white p-3.5 shadow-border transition-shadow duration-200 ease-out hover:shadow-border-hover"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-mint text-forest">
              <Icon />
            </span>
            <span className="flex-1">
              <span className="block text-[15px] font-medium text-ink">{title}</span>
              <span className="block text-sm text-muted">{description}</span>
            </span>
            <span className="text-sm text-muted">{meta}</span>
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
