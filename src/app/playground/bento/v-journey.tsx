"use client";

import type { ReactNode } from "react";
import { ArrowUUpLeftIcon, ChartLineUpIcon, GlobeHemisphereWestIcon, PlugsConnectedIcon, PrinterIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/Badge";
import { Cell, Cells } from "./shared";

/**
 * Round 3 · Journey — axis: narrative. The five capabilities are laid out as the path a
 * shipment takes (connect → label → ship → track → return), joined by a dashed route.
 * Uses the site's framed mint cards so it reads as native Zineps.
 */

type Step = {
  n: string;
  label: string;
  title: string;
  body: string;
  Icon: typeof PrinterIcon;
  visual: ReactNode;
  className: string;
};

function Chip({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs text-soft shadow-border">{children}</span>;
}

const steps: Step[] = [
  {
    n: "01",
    label: "Connect",
    title: "Orders flow in from 100+ integrations",
    body: "Shopify, WooCommerce, bol.com, Exact and more, live in minutes.",
    Icon: PlugsConnectedIcon,
    visual: (
      <div className="flex flex-wrap gap-1.5">
        {["Shopify", "bol.com", "Amazon", "Exact", "+96"].map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
    ),
    className: "lg:col-span-4",
  },
  {
    n: "02",
    label: "Label",
    title: "The best carrier picked, the label printed",
    body: "Price and speed compared across partner rates and your own contracts.",
    Icon: PrinterIcon,
    visual: (
      <div className="flex items-center justify-between rounded-xl bg-white p-3 text-sm shadow-border">
        <span className="font-medium text-ink">DHL Parcel</span>
        <span className="text-muted tabular-nums">1–2 days</span>
        <span className="font-medium text-forest tabular-nums">€6.20</span>
      </div>
    ),
    className: "lg:col-span-4",
  },
  {
    n: "03",
    label: "Ship",
    title: "200+ countries, one workflow",
    body: "50+ logistics partners and 1000+ shipping methods behind a single hub.",
    Icon: GlobeHemisphereWestIcon,
    visual: (
      <div className="flex gap-2">
        <Chip>🇳🇱 → 🇩🇪</Chip>
        <Chip>🇳🇱 → 🇬🇧</Chip>
        <Chip>🇳🇱 → 🇺🇸</Chip>
      </div>
    ),
    className: "lg:col-span-4",
  },
  {
    n: "04",
    label: "Track",
    title: "Real-time insight on every parcel",
    body: "Live status, delivery performance and cost per label in one dashboard.",
    Icon: ChartLineUpIcon,
    visual: (
      <div className="flex h-14 items-end gap-1.5">
        {[30, 42, 38, 55, 48, 66, 72, 64, 80].map((h, i) => (
          <span key={i} className={`flex-1 rounded-t-[3px] ${i === 8 ? "bg-forest" : "bg-mint"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    ),
    className: "lg:col-span-6",
  },
  {
    n: "05",
    label: "Return",
    title: "Returns handled, customers kept",
    body: "Branded return portal and automatic return rules, with 99.9% uptime underneath.",
    Icon: ArrowUUpLeftIcon,
    visual: (
      <div className="flex items-center gap-2 text-sm">
        <Chip>Requested</Chip>
        <span className="h-px flex-1 border-t border-dashed border-green/40" />
        <Chip>Received</Chip>
        <span className="h-px flex-1 border-t border-dashed border-green/40" />
        <span className="inline-flex items-center rounded-full bg-forest px-2.5 py-1 text-xs text-white">Refunded</span>
      </div>
    ),
    className: "lg:col-span-6",
  },
];

export function Journey() {
  return (
    <div className="relative">
      {/* Route line connecting the steps (desktop) */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 hidden size-full lg:block" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M16 22 H84 M84 22 C 92 22 92 60 76 60 H24" fill="none" stroke="#60948a" strokeOpacity="0.35" strokeWidth="0.25" strokeDasharray="1 1.2" vectorEffect="non-scaling-stroke" />
      </svg>

      <Cells className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8">
        {steps.map((s) => (
          <Cell
            key={s.n}
            className={`group relative flex flex-col rounded-3xl border-[5px] border-white bg-mint-mist p-6 shadow-frame transition-transform duration-200 ease-out hover:-translate-y-0.5 ${s.className}`}
          >
            <div className="flex items-center justify-between">
              <Badge>
                <s.Icon size={14} weight="bold" aria-hidden />
                {s.label}
              </Badge>
              <span className="text-sm text-muted tabular-nums">{s.n}</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-balance text-ink">{s.title}</h3>
            <p className="mt-1.5 text-[15px] text-pretty text-body-mint">{s.body}</p>
            <div className="mt-6 flex flex-1 items-end">
              <div className="w-full">{s.visual}</div>
            </div>
          </Cell>
        ))}
      </Cells>
    </div>
  );
}
