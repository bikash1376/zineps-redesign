"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Badge } from "@/components/Badge";
import { AnalyticsVisual, CoverageVisual, HubVisual, IntegrationsVisual, features } from "./features";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

// Staggered float-in shared by grid cells / rows (entrance: ease-out, < 300ms each)
const container = { hidden: {}, shown: { transition: { staggerChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 12 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE_OUT } },
};

/* ── 1. Spotlight — interaction model: one big stage driven by a feature list ───────── */

export function Spotlight() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const feature = features[active];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="shown"
      className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
    >
      <motion.div variants={item} role="tablist" aria-orientation="vertical" aria-label="Features" className="flex flex-col gap-1">
        {features.map((f, i) => {
          const selected = i === active;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-stage`}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="relative rounded-[20px] px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-green/40"
            >
              {selected && (
                <motion.span
                  layoutId={`${baseId}-active`}
                  className="absolute inset-0 rounded-[20px] bg-mint-mist shadow-border"
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                />
              )}
              <span className="relative block">
                <span className={`block text-sm font-medium transition-colors duration-150 ${selected ? "text-forest" : "text-muted"}`}>
                  {f.label}
                </span>
                <span className={`mt-1 block text-lg font-medium text-balance transition-colors duration-150 ${selected ? "text-ink" : "text-soft"}`}>
                  {f.title}
                </span>
              </span>
            </button>
          );
        })}
      </motion.div>

      <motion.div
        variants={item}
        id={`${baseId}-stage`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="relative flex min-h-[460px] flex-col overflow-hidden rounded-[20px] bg-mint-mist p-6 shadow-border"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE_OUT } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="flex flex-1 flex-col"
          >
            <Badge>{feature.label}</Badge>
            <p className="mt-4 max-w-[440px] text-[15px] text-pretty text-muted">{feature.description}</p>
            <div className="mt-6 flex flex-1 items-end">
              <feature.Visual />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ── 2. Mosaic — layout & density: number-first cells in an asymmetric 3-column grid ─ */

function StatCell({ value, label, children, className = "" }: { value: string; label: string; children?: ReactNode; className?: string }) {
  return (
    <motion.article
      variants={item}
      className={`relative flex flex-col overflow-hidden rounded-[20px] bg-mint-mist p-6 shadow-border transition-shadow duration-200 ease-out hover:shadow-border-hover ${className}`}
    >
      <p className="text-4xl font-medium text-forest tabular-nums">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
      {children && <div className="mt-6 flex flex-1 items-end">{children}</div>}
    </motion.article>
  );
}

export function Mosaic() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="shown"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]"
    >
      <motion.article
        variants={item}
        className="relative flex flex-col overflow-hidden rounded-[20px] bg-mint-mist p-6 shadow-border md:col-span-2 lg:row-span-2"
      >
        <Badge>One platform for everything</Badge>
        <h3 className="mt-4 max-w-[520px] text-2xl font-medium text-balance text-ink">
          Shipments, returns and logistics in one central hub
        </h3>
        <p className="mt-2 max-w-[440px] text-[15px] text-pretty text-muted">
          No hassle with multiple systems. Everything you need for successful shipping in one place.
        </p>
        <div className="mt-8 -mb-6 flex flex-1 items-end">
          <HubVisual />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-mint-mist/0 to-mint-mist" />
      </motion.article>

      <StatCell value="99.9%" label="uptime guarantee, enterprise-grade reliability">
        <div className="flex h-8 w-full gap-[3px]" aria-hidden>
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="flex-1 rounded-[2px] bg-chart" />
          ))}
        </div>
      </StatCell>

      <StatCell value="100+" label="integrations with webshops, marketplaces and ERPs">
        <IntegrationsVisual compact />
      </StatCell>

      <motion.article variants={item} className="rounded-[20px] bg-mint-mist p-6 shadow-border md:col-span-2 lg:col-span-2">
        <AnalyticsVisual />
      </motion.article>

      <StatCell value="200+" label="countries through all major carriers">
        <CoverageVisual />
      </StatCell>
    </motion.div>
  );
}

/* ── 3. Editorial — personality: big numbered rows that open to show their visual ──── */

export function Editorial() {
  const baseId = useId();
  const [open, setOpen] = useState(0);

  return (
    <motion.ol variants={container} initial="hidden" animate="shown" className="divide-y divide-line border-y border-line">
      {features.map((f, i) => {
        const isOpen = open === i;
        return (
          <motion.li key={f.id} variants={item}>
            <button
              type="button"
              id={`${baseId}-row-${i}`}
              aria-expanded={isOpen}
              aria-controls={`${baseId}-panel-${i}`}
              onClick={() => setOpen(i)}
              className="grid w-full grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-x-4 py-7 text-left outline-none focus-visible:bg-mint-mist sm:grid-cols-[4rem_minmax(0,1fr)_minmax(0,0.9fr)]"
            >
              <span className={`text-sm tabular-nums transition-colors duration-150 ${isOpen ? "text-forest" : "text-muted"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`text-2xl font-medium text-balance transition-colors duration-150 sm:text-3xl ${isOpen ? "text-ink" : "text-soft"}`}>
                {f.label}
              </span>
              <span className="col-start-2 mt-2 text-[15px] text-pretty text-muted sm:col-start-3 sm:mt-0">{f.title}</span>
            </button>
            <div
              id={`${baseId}-panel-${i}`}
              role="region"
              aria-labelledby={`${baseId}-row-${i}`}
              className={`grid transition-[grid-template-rows] duration-250 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div
                  className={`grid gap-6 pb-8 transition-opacity duration-200 ease-out sm:grid-cols-[4rem_minmax(0,1fr)_minmax(0,0.9fr)] ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="hidden sm:block" />
                  <p className="text-[15px] text-pretty text-muted">{f.description}</p>
                  <div className="rounded-[20px] bg-mint-mist p-5 shadow-border">
                    <f.Visual />
                  </div>
                </div>
              </div>
            </div>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}

