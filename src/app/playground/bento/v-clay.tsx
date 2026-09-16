"use client";

import type { ReactNode } from "react";
import { ChartBarIcon, GlobeHemisphereWestIcon, PackageIcon, PlugsConnectedIcon, ShieldCheckIcon } from "@phosphor-icons/react";
import { Cell, Cells } from "./shared";

/* ── Soft grey "clay" illustrations with green accents (bento2 style) ─────────────── */

const clay = { base: "#d9dfdd", mid: "#c7cfcc", dark: "#aeb8b4", light: "#eef1f0" };
const accent = "#339c84";

function MapArt() {
  // Simplified Europe silhouette as rounded regions + shipment hubs
  const hubs = [
    [62, 70], [96, 58], [128, 82], [84, 110], [150, 118], [118, 140], [178, 90], [196, 140], [60, 150], [140, 176], [212, 60], [230, 110],
  ];
  return (
    <svg viewBox="0 0 280 260" className="h-auto w-full" aria-hidden>
      <path d="M20 90c20-40 60-60 100-54s60-26 96-10 50 50 40 86 10 60-20 90-80 40-120 24-60 10-84-24-32-72-12-112z" fill={clay.base} />
      <path d="M60 60c30 10 40 40 70 38s40-30 70-20M40 140c30-10 60 10 90 0s50-30 80-20M70 200c20-14 50-6 70-20" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      {hubs.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" fill={accent} opacity="0.18" className="motion-safe:animate-ping" style={{ animationDuration: `${2 + (i % 4) * 0.4}s`, transformBox: "fill-box", transformOrigin: "center" }} />
          <circle cx={x} cy={y} r="4" fill={accent} />
        </g>
      ))}
    </svg>
  );
}

function PlugArt() {
  return (
    <svg viewBox="0 0 180 150" className="h-auto w-full" aria-hidden>
      <path d="M-10 118c40 0 50-30 80-30" fill="none" stroke={clay.dark} strokeWidth="10" strokeLinecap="round" />
      <g className="transition-transform duration-300 ease-out group-hover:translate-x-2">
        <rect x="64" y="66" width="56" height="46" rx="12" fill={clay.base} />
        <rect x="64" y="66" width="56" height="16" rx="8" fill={clay.light} />
        <rect x="118" y="74" width="24" height="7" rx="3.5" fill={clay.dark} />
        <rect x="118" y="96" width="24" height="7" rx="3.5" fill={clay.dark} />
      </g>
      <rect x="152" y="54" width="46" height="72" rx="14" fill={clay.mid} />
      <circle cx="168" cy="90" r="5" fill={accent} />
    </svg>
  );
}

function ParcelArt() {
  return (
    <svg viewBox="0 0 180 160" className="h-auto w-full" aria-hidden>
      <g className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
        <path d="M40 60 100 34l62 26-62 28z" fill={clay.light} />
        <path d="M40 60v66l60 28V88z" fill={clay.base} />
        <path d="M100 88v66l62-28V60z" fill={clay.mid} />
        <path d="m68 48 62 26v22l-14 6V80L54 54z" fill={clay.dark} opacity="0.6" />
      </g>
      <circle cx="150" cy="40" r="14" fill={accent} />
      <path d="m143 40 5 5 9-10" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MonitorArt() {
  return (
    <svg viewBox="0 0 260 170" className="h-auto w-full" aria-hidden>
      <rect x="30" y="20" width="220" height="130" rx="16" fill={clay.base} />
      <rect x="44" y="34" width="192" height="102" rx="8" fill="#fff" />
      {[40, 62, 50, 78, 70, 92].map((h, i) => (
        <rect key={i} x={62 + i * 28} y={124 - h} width="14" height={h} rx="4" fill={i === 5 ? accent : clay.mid} className="origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-110" style={{ transformBox: "fill-box", transitionDelay: `${i * 30}ms` }} />
      ))}
      <rect x="120" y="150" width="40" height="14" fill={clay.mid} />
    </svg>
  );
}

function ClockArt() {
  return (
    <svg viewBox="0 0 170 170" className="h-auto w-full" aria-hidden>
      <circle cx="100" cy="100" r="74" fill={clay.mid} />
      <circle cx="100" cy="100" r="62" fill="#fff" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return <line key={i} x1={100 + Math.sin(a) * 52} y1={100 - Math.cos(a) * 52} x2={100 + Math.sin(a) * 56} y2={100 - Math.cos(a) * 56} stroke={clay.dark} strokeWidth="2" />;
      })}
      <line x1="100" y1="100" x2="100" y2="62" stroke="#5c6664" strokeWidth="4" strokeLinecap="round" />
      <line x1="100" y1="100" x2="132" y2="112" stroke="#5c6664" strokeWidth="4" strokeLinecap="round" />
      {/* seconds hand sweeps on hover */}
      <line x1="100" y1="100" x2="100" y2="48" stroke={accent} strokeWidth="2" strokeLinecap="round" className="origin-[100px_100px] transition-transform duration-700 ease-out group-hover:rotate-[300deg]" />
      <circle cx="100" cy="100" r="5" fill={accent} />
    </svg>
  );
}

function Card({
  icon,
  title,
  description,
  art,
  artClass,
  className = "",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  art: ReactNode;
  artClass: string;
  className?: string;
}) {
  return (
    <Cell className={`group relative overflow-hidden rounded-[22px] bg-[#fafbfb] p-6 shadow-[0_1px_2px_rgb(0_0_0/0.04)] ${className}`}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-white text-green shadow-border">{icon}</span>
      <h3 className="mt-4 text-lg font-medium text-ink">{title}</h3>
      <p className="mt-1.5 max-w-[340px] text-sm text-pretty text-muted">{description}</p>
      <div aria-hidden className={`pointer-events-none ${artClass}`}>
        {art}
      </div>
    </Cell>
  );
}

/** Variant 2 — Clay: cool grey-green canvas, near-white cards, icon chips, clay art bleeding off. */
export function Clay() {
  return (
    <div className="rounded-[32px] bg-[#e6ebe9] p-3 sm:p-6">
      <Cells className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[260px_260px]">
        <Card
          className="min-h-[420px] md:row-span-2 lg:col-span-4"
          icon={<GlobeHemisphereWestIcon size={18} weight="fill" />}
          title="Access a wide network"
          description="Ship to 200+ countries with all major carriers and local transporters."
          art={<MapArt />}
          artClass="absolute -right-10 -bottom-6 w-[115%]"
        />
        <Card
          className="min-h-[240px] lg:col-span-3"
          icon={<PlugsConnectedIcon size={18} weight="fill" />}
          title="Connect in minutes"
          description="Webshop, WMS or ERP. 100+ ready integrations."
          art={<PlugArt />}
          artClass="absolute -right-6 -bottom-8 w-44"
        />
        <Card
          className="min-h-[240px] lg:col-span-5"
          icon={<PackageIcon size={18} weight="fill" />}
          title="One hub for every shipment"
          description="Labels, returns and pickups managed in one place, without the tab-switching."
          art={<ParcelArt />}
          artClass="absolute -right-4 -bottom-6 w-40"
        />
        <Card
          className="min-h-[240px] lg:col-span-5"
          icon={<ChartBarIcon size={18} weight="fill" />}
          title="Insights in real time"
          description="Follow performance live and spot savings before they slip away."
          art={<MonitorArt />}
          artClass="absolute -right-8 -bottom-10 w-60"
        />
        <Card
          className="min-h-[240px] lg:col-span-3"
          icon={<ShieldCheckIcon size={18} weight="fill" />}
          title="Always on"
          description="99.9% uptime that scales with your volume."
          art={<ClockArt />}
          artClass="absolute -right-10 -bottom-12 w-40"
        />
      </Cells>
    </div>
  );
}
