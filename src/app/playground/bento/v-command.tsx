"use client";

import type { ReactNode } from "react";
import { ArrowUpRightIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { CountUp } from "@/components/motion/CountUp";
import { Cell, Cells } from "./shared";

/**
 * Round 3 · Command — axis: contrast. The bento sits on the brand's green gradient (same
 * surface as the stats band and Get started banner) with translucent glass cards, white type
 * and mint numbers, so it works as a dark "control room" moment mid-page.
 */

function Glass({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <Cell
      className={`group relative flex flex-col overflow-hidden rounded-[20px] bg-white/[0.07] p-6 ring-1 ring-white/12 backdrop-blur-sm transition-colors duration-200 ease-out ring-inset hover:bg-white/10 ${className}`}
    >
      {children}
    </Cell>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-mint uppercase">
      {children}
    </span>
  );
}

function LiveDot() {
  return (
    <span className="relative flex size-2">
      <span className="absolute inset-0 rounded-full bg-teal opacity-60 motion-safe:animate-ping" />
      <span className="relative size-2 rounded-full bg-teal" />
    </span>
  );
}

const feed = [
  { id: "#10486", lane: "Amsterdam → Berlin", carrier: "DHL", status: "Label printed" },
  { id: "#10485", lane: "Utrecht → Antwerp", carrier: "bpost", status: "Picked up" },
  { id: "#10484", lane: "Rotterdam → Paris", carrier: "DPD", status: "In transit" },
  { id: "#10483", lane: "Eindhoven → London", carrier: "GLS", status: "Delivered" },
];

export function Command() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-linear-to-b from-green to-pine p-3 inset-shadow-glow sm:p-5">
      <span aria-hidden className="pointer-events-none absolute -top-40 -right-32 size-[420px] rounded-full bg-teal/20 blur-3xl" />

      <Cells className="relative grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-12">
        <Glass className="md:col-span-2 lg:col-span-7 lg:row-span-2">
          <div className="flex items-center justify-between">
            <Label>
              <LiveDot /> One hub, live
            </Label>
            <span className="text-xs text-mint/80">Updated just now</span>
          </div>
          <h3 className="mt-5 max-w-[440px] text-2xl font-medium text-balance text-white">
            Every shipment, return and pickup in one control room
          </h3>
          <ul className="mt-8 divide-y divide-white/10 rounded-xl bg-white/[0.06] ring-1 ring-white/10">
            {feed.map((f) => (
              <li key={f.id} className="flex items-center gap-3 px-4 py-3 text-sm">
                <span className="w-16 font-medium text-white tabular-nums">{f.id}</span>
                <span className="min-w-0 flex-1 truncate text-mint/80">{f.lane}</span>
                <span className="hidden text-mint/60 sm:inline">{f.carrier}</span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white">{f.status}</span>
              </li>
            ))}
          </ul>
        </Glass>

        <Glass className="lg:col-span-5">
          <Label>Global coverage</Label>
          <p className="mt-5 text-5xl font-medium text-white">
            <CountUp value={200} />
          </p>
          <p className="mt-1 text-sm text-mint/80">countries, through 50+ logistics partners</p>
        </Glass>

        <Glass className="lg:col-span-5">
          <Label>Analytics</Label>
          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-5xl font-medium text-white">
                −<CountUp value={40} suffix="%" />
              </p>
              <p className="mt-1 text-sm text-mint/80">average shipping costs</p>
            </div>
            <svg viewBox="0 0 120 50" className="h-12 w-28" aria-hidden>
              <path d="M2 8 C 30 10 40 26 60 28 S 96 44 118 46" fill="none" stroke="#70cab9" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </Glass>

        <Glass className="lg:col-span-6">
          <Label>Integrations</Label>
          <h3 className="mt-5 text-lg font-medium text-white">100+ connections, live in minutes</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Shopify", "WooCommerce", "Magento", "bol.com", "Amazon", "Exact", "Picqer"].map((n) => (
              <span key={n} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white">
                {n}
              </span>
            ))}
          </div>
          <a href="#" className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-teal">
            View integrations
            <ArrowUpRightIcon size={14} weight="bold" className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Glass>

        <Glass className="lg:col-span-6">
          <Label>Uptime</Label>
          <div className="mt-5 flex items-baseline justify-between gap-3">
            <p className="text-3xl font-medium text-white tabular-nums">99.9%</p>
            <span className="inline-flex items-center gap-1.5 text-sm text-mint">
              <CheckCircleIcon size={16} weight="bold" /> All systems operational
            </span>
          </div>
          <div className="mt-5 flex h-8 gap-[3px]" aria-hidden>
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i} className={`flex-1 rounded-[2px] ${i === 27 ? "bg-[#f2b98b]" : "bg-teal/80"} ${i < 20 ? "hidden sm:block" : ""}`} />
            ))}
          </div>
        </Glass>
      </Cells>
    </div>
  );
}
