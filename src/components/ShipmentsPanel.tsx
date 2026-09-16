"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import {
  ArrowUUpLeftIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyEurIcon,
  PackageIcon,
  TagIcon,
  TruckIcon,
  WarehouseIcon,
} from "@phosphor-icons/react";

const tabs = [
  {
    id: "shipments",
    label: "Shipments",
    rows: [
      { id: "#10482", detail: "DHL For You", status: "Delivered", icon: CheckCircleIcon },
      { id: "#10481", detail: "PostNL", status: "In transit", icon: TruckIcon },
      { id: "#10480", detail: "GLS", status: "Label created", icon: TagIcon },
      { id: "#10479", detail: "DPD", status: "In transit", icon: TruckIcon },
    ],
  },
  {
    id: "returns",
    label: "Returns",
    rows: [
      { id: "#R-2041", detail: "bol.com · Wrong size", status: "Received", icon: ArrowUUpLeftIcon },
      { id: "#R-2040", detail: "DHL For You", status: "On its way", icon: TruckIcon },
      { id: "#R-2039", detail: "PostNL · Damaged", status: "Refunded", icon: CurrencyEurIcon },
      { id: "#R-2038", detail: "GLS", status: "Label created", icon: TagIcon },
    ],
  },
  {
    id: "logistics",
    label: "Logistics",
    rows: [
      { id: "PU-318", detail: "Pickup · DHL", status: "Today 14:00", icon: ClockIcon },
      { id: "LO-077", detail: "Pallets · DB Schenker", status: "Loading", icon: WarehouseIcon },
      { id: "PU-317", detail: "Pickup · PostNL", status: "Completed", icon: CheckCircleIcon },
      { id: "LO-076", detail: "Parcels · DPD", status: "Sorted", icon: PackageIcon },
    ],
  },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const row = {
  hidden: { opacity: 0, y: 6, filter: "blur(2px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.3, ease: "easeOut" as const } },
};

/**
 * Bento card 1: selectable Shipments / Returns / Logistics tabs with a gliding underline.
 * Rows stagger in the first time the card is on screen and again whenever the tab changes.
 */
export function ShipmentsPanel() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const tab = tabs[active];

  return (
    <div ref={ref} className="w-full overflow-hidden rounded-t-xl bg-white shadow-border">
      <div role="tablist" aria-label="Shipping hub views" className="flex gap-1 overflow-x-auto border-b border-line px-2 text-sm [scrollbar-width:none] sm:px-3">
        {tabs.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              onClick={() => setActive(i)}
              className={`relative shrink-0 px-2.5 pt-3 pb-2.5 transition-colors duration-150 ${
                selected ? "font-medium text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {t.label}
              {selected && (
                <motion.span
                  layoutId={`${baseId}-underline`}
                  className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-green"
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={tab.id}
            variants={list}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            className="divide-y divide-line"
          >
            {tab.rows.map((r) => (
              <motion.li key={r.id} variants={row} className="flex items-center gap-3 px-3 py-2.5 text-sm sm:gap-4 sm:px-4">
                <span className="w-14 shrink-0 font-medium text-ink tabular-nums sm:w-16">{r.id}</span>
                <span className="min-w-0 flex-1 truncate text-soft">{r.detail}</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mint-soft px-2.5 py-0.5 text-xs font-medium text-forest">
                  <r.icon size={14} weight="bold" aria-hidden />
                  {r.status}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
