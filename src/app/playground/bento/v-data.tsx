"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  ArrowUUpLeftIcon,
  MapPinIcon,
  PrinterIcon,
  TagIcon,
  TruckIcon,
} from "@phosphor-icons/react";
import { Cell, Cells } from "./shared";

/* ── Data-forward cards with fading charts (bento4 style) ───────────────────────────── */

function CardShell({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <Cell className={`group relative flex flex-col overflow-hidden rounded-[24px] bg-white shadow-frame ${className}`}>
      {children}
    </Cell>
  );
}

function Caption({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative px-6 pb-6">
      <h3 className="text-lg font-medium text-ink">{title}</h3>
      <p className="mt-1 text-[15px] text-pretty text-muted">{body}</p>
    </div>
  );
}

/** Two series of the same measure (hours of manual work per week), directly labelled. */
function ComparisonChart() {
  return (
    <div className="relative h-56 px-6 pt-6">
      <svg viewBox="0 0 400 180" className="size-full overflow-visible" role="img" aria-label="Hours of manual shipping work per week: other tools rise to 15+, Zineps stays under 2">
        {[40, 90, 140].map((y) => (
          <line key={y} x1="40" x2="400" y1={y} y2={y} stroke="#e4e4e4" strokeDasharray="4 6" />
        ))}
        {["15h", "10h", "5h"].map((t, i) => (
          <text key={t} x="0" y={44 + i * 50} className="fill-muted text-[11px]">
            {t}
          </text>
        ))}
        <path d="M40 150 C120 140 170 120 230 92 S320 30 360 22" fill="none" stroke="#424242" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M40 158 C140 156 220 152 300 146 S360 140 380 138" fill="none" stroke="#339c84" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="360" cy="22" r="5" fill="#424242" />
        <circle cx="380" cy="138" r="5" fill="#339c84" className="transition-transform duration-300 ease-out group-hover:scale-150" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      </svg>
      <span className="absolute top-3 right-24 rounded-md bg-white px-2 py-1 text-xs text-ink shadow-border">Manual work</span>
      <span className="absolute right-6 bottom-12 rounded-md bg-white px-2 py-1 text-xs font-medium text-forest shadow-[0_0_0_1.5px_#70cab9]">
        With Zineps
      </span>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-white/0 to-white" />
    </div>
  );
}

function SavingsBars() {
  const months = [
    { m: "Jan", v: 42 },
    { m: "Feb", v: 58 },
    { m: "Mar", v: 36 },
    { m: "Apr", v: 64 },
    { m: "May", v: 50 },
    { m: "Jun", v: 78 },
    { m: "Jul", v: 88 },
  ];
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="relative px-6 pt-6">
      <p className="text-lg font-medium text-ink">Shipping costs saved, Jan–Jul 2026</p>
      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-mint-mist px-2.5 py-1 text-xs text-forest">
        <span className="size-1.5 rounded-full bg-chart" /> € saved per month
      </span>
      <div className="relative mt-4 flex h-40 items-end gap-3" onMouseLeave={() => setHover(null)}>
        <span className="absolute top-0 left-0 text-xs text-muted">€30k</span>
        {months.map((d, i) => (
          <button
            key={d.m}
            type="button"
            aria-label={`${d.m}: €${Math.round(d.v * 0.34)}k saved`}
            onMouseEnter={() => setHover(i)}
            onFocus={() => setHover(i)}
            className="relative flex h-full flex-1 items-end outline-none"
          >
            <span
              className={`block w-full rounded-t-[6px] bg-linear-to-b from-chart to-chart/0 transition-opacity duration-150 ${
                hover !== null && hover !== i ? "opacity-40" : "opacity-100"
              }`}
              style={{ height: `${d.v}%` }}
            />
            {hover === i && (
              <span className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 rounded-md bg-white px-2 py-1 text-xs whitespace-nowrap text-ink shadow-border tabular-nums">
                €{Math.round(d.v * 0.34)}k
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function ToolbarPill() {
  const tools = [
    { label: "Labels", Icon: PrinterIcon },
    { label: "Returns", Icon: ArrowUUpLeftIcon },
    { label: "Pickups", Icon: TruckIcon },
    { label: "Tracking", Icon: MapPinIcon },
  ];
  return (
    <div className="relative h-48 overflow-hidden">
      {/* faded dashboard lines + mint glow behind */}
      <div className="absolute inset-x-10 top-4 h-40 rounded-t-xl bg-surface-soft" />
      <div className="absolute inset-x-16 top-10 space-y-3 opacity-60">
        {[70, 90, 55, 80].map((w, i) => (
          <span key={i} className="block h-2 rounded-full bg-line" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="absolute -inset-x-10 top-16 h-24 bg-linear-to-r from-teal/25 via-transparent to-teal/25 blur-2xl" />
      <div className="absolute inset-x-0 top-24 flex justify-center px-4">
        <div className="flex items-center gap-1 rounded-2xl bg-white p-2 shadow-frame">
          {tools.map(({ label, Icon }, i) => (
            <span
              key={label}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors duration-150 ${
                i === 0 ? "bg-mint-mist text-forest" : "text-ink hover:bg-surface-soft"
              }`}
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{label}</span>
            </span>
          ))}
          <span className="mx-1 h-6 w-px bg-line" />
          <span className="flex items-center gap-1.5 px-2 text-sm font-medium text-forest">
            <TagIcon size={18} weight="fill" /> 24
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-b from-white/0 to-white" />
    </div>
  );
}

function IntegrationPicker() {
  const items = [
    { file: "shopify", name: "Shopify" },
    { file: "woocommerce", name: "WooCommerce" },
    { file: "bolcom", name: "bol.com" },
    { file: "amazon", name: "Amazon" },
    { file: "exact", name: "Exact" },
    { file: "picqer", name: "Picqer" },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-3 gap-2 px-6 pt-6">
      {items.map((it, i) => (
        <button
          key={it.file}
          type="button"
          onClick={() => setActive(i)}
          aria-pressed={active === i}
          className={`flex flex-col items-center gap-2 rounded-xl p-3 transition-[box-shadow,background-color] duration-150 ${
            active === i ? "bg-white shadow-[0_0_0_1.5px_#70cab9,0_4px_12px_rgb(112_202_185/0.25)]" : "bg-surface-soft hover:bg-surface"
          }`}
        >
          <span className="relative block h-6 w-full">
            <Image src={`/images/integrations/${it.file}.png`} alt="" fill sizes="80px" className="object-contain" />
          </span>
          <span className="text-xs text-soft">{it.name}</span>
        </button>
      ))}
    </div>
  );
}

function UptimeStrip() {
  return (
    <div className="flex h-10 flex-1 items-end gap-[3px]" role="img" aria-label="99.9% uptime over the last 90 days">
      {Array.from({ length: 90 }).map((_, i) => (
        <span
          key={i}
          className={`flex-1 rounded-[2px] ${i === 61 ? "h-3/5 bg-[#f2b98b]" : "h-full bg-chart/80"} ${i % 3 ? "hidden sm:block" : ""}`}
        />
      ))}
    </div>
  );
}

/** Variant 4 — Data: neutral canvas, white cards, fading charts, interactive data bits. */
export function Data() {
  return (
    <div className="rounded-[32px] bg-[#f1f3f2] p-3 sm:p-5">
      <Cells className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-12">
        <CardShell className="lg:col-span-6">
          <ComparisonChart />
          <Caption title="Up to 10x faster" body="Merchants save 15+ hours a week on manual shipping work." />
        </CardShell>

        <CardShell className="lg:col-span-6">
          <SavingsBars />
          <Caption title="Costs down, clarity up" body="Real-time analytics show where every euro goes. Merchants save 40% on average." />
        </CardShell>

        <CardShell className="md:col-span-2 lg:col-span-8">
          <ToolbarPill />
          <Caption title="Every workflow in one hub" body="Labels, returns, pickups and tracking, one click apart. No more switching between systems." />
        </CardShell>

        <CardShell className="md:col-span-2 lg:col-span-4">
          <IntegrationPicker />
          <Caption title="Remarkably easy to connect" body="100+ integrations, live in minutes." />
        </CardShell>

        <CardShell className="md:col-span-2 lg:col-span-12">
          <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="lg:w-80">
              <h3 className="text-lg font-medium text-ink">200+ countries, 99.9% uptime</h3>
              <p className="mt-1 text-[15px] text-pretty text-muted">Global coverage that stays online as you scale.</p>
            </div>
            <UptimeStrip />
          </div>
        </CardShell>
      </Cells>
    </div>
  );
}
