"use client";

import type { ReactNode } from "react";
import { Cell, Cells } from "./shared";

/* ── Flat illustrations in brand greens + warm accents (bento1 style) ─────────────── */

function ParcelsArt() {
  return (
    <svg viewBox="0 0 240 190" className="h-auto w-full max-w-[260px] transition-transform duration-300 ease-out group-hover:-translate-y-1" aria-hidden>
      <ellipse cx="120" cy="176" rx="96" ry="9" fill="#4a7469" opacity="0.12" />
      {/* back box */}
      <rect x="112" y="40" width="92" height="74" rx="6" fill="#70cab9" />
      <rect x="150" y="40" width="16" height="74" fill="#d7f0ea" />
      {/* front left box */}
      <rect x="30" y="86" width="104" height="86" rx="6" fill="#60948a" />
      <rect x="74" y="86" width="16" height="86" fill="#a9d9cf" />
      <rect x="42" y="148" width="26" height="12" rx="2" fill="#eff7f4" />
      {/* front right small box */}
      <rect x="140" y="118" width="70" height="54" rx="6" fill="#f2b98b" />
      <rect x="168" y="118" width="14" height="54" fill="#fbe0c8" />
      {/* return arrow */}
      <path d="M58 60c10-26 44-34 64-18" fill="none" stroke="#4a7469" strokeWidth="4" strokeLinecap="round" />
      <path d="m118 30 6 13-14 2" fill="none" stroke="#4a7469" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlugsArt() {
  return (
    <svg viewBox="0 0 260 130" className="h-auto w-full max-w-[280px]" aria-hidden>
      {/* shop */}
      <rect x="8" y="30" width="78" height="70" rx="10" fill="#fff" />
      <path d="M8 48h78" stroke="#dbe7e4" strokeWidth="3" />
      <path d="M20 30l6-14h42l6 14" fill="#70cab9" />
      <rect x="32" y="62" width="30" height="38" rx="4" fill="#d7f0ea" />
      {/* cable with moving pulse */}
      <path d="M86 65c30 0 30 0 44 0s18 0 44 0" fill="none" stroke="#60948a" strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" />
      <circle r="6" fill="#f2b98b">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M86 65c30 0 30 0 44 0s18 0 44 0" />
      </circle>
      {/* warehouse */}
      <path d="M174 60l38-26 40 26v40h-78z" fill="#fff" />
      <rect x="196" y="72" width="34" height="28" rx="3" fill="#4a7469" />
      <path d="M196 81h34M196 90h34" stroke="#70cab9" strokeWidth="2" />
    </svg>
  );
}

function ChartArt() {
  return (
    <svg viewBox="0 0 160 120" className="h-auto w-full max-w-[170px]" aria-hidden>
      <rect x="4" y="10" width="152" height="104" rx="12" fill="#fff" />
      {[34, 54, 44, 72, 86].map((h, i) => (
        <rect key={i} x={20 + i * 26} y={100 - h} width="16" height={h} rx="4" fill={i === 4 ? "#339c84" : "#bfe3da"} className="origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-105" style={{ transformBox: "fill-box" }} />
      ))}
      <path d="M20 58 50 44l26 10 30-26 30-12" fill="none" stroke="#e98a4a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldArt() {
  return (
    <svg viewBox="0 0 150 120" className="h-auto w-28 shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-6 sm:w-32" aria-hidden>
      <path d="M75 8 122 24v34c0 30-20 48-47 56C48 106 28 88 28 58V24z" fill="#60948a" />
      <path d="M75 22 108 34v24c0 21-14 34-33 40-19-6-33-19-33-40V34z" fill="#d7f0ea" />
      <path d="m58 60 12 12 24-26" fill="none" stroke="#4a7469" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeArt() {
  return (
    <svg viewBox="0 0 320 200" className="h-auto w-full max-w-[360px]" aria-hidden>
      <ellipse cx="170" cy="188" rx="120" ry="8" fill="#4a7469" opacity="0.12" />
      <circle cx="170" cy="100" r="78" fill="#70cab9" />
      <path d="M118 70c20 6 22 26 44 24s12-30 34-32 26 18 40 12M110 118c22-6 34 14 58 8s30-24 52-18" fill="none" stroke="#d7f0ea" strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="170" cy="100" rx="78" ry="28" fill="none" stroke="#4a7469" strokeWidth="2" opacity="0.4" />
      <ellipse cx="170" cy="100" rx="30" ry="78" fill="none" stroke="#4a7469" strokeWidth="2" opacity="0.4" />
      {/* flight path + plane */}
      <path d="M40 150C80 40 250 10 300 70" fill="none" stroke="#e98a4a" strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round" />
      <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-1">
        <path d="m288 56 18 8-18 8 4-8z" fill="#e98a4a" />
      </g>
      {/* pin */}
      <path d="M150 44c0-12 18-12 18 0 0 10-9 20-9 20s-9-10-9-20z" fill="#fff" />
      <circle cx="159" cy="44" r="4" fill="#4a7469" />
    </svg>
  );
}

const tint = {
  mint: "bg-[#e4f4f0]",
  sky: "bg-[#e7f0f6]",
  sand: "bg-[#fbf2df]",
  peach: "bg-[#fbe9e1]",
  lilac: "bg-[#eeebf8]",
};

function Title({ children }: { children: ReactNode }) {
  return <h3 className="text-[28px] leading-tight font-semibold tracking-tight text-balance text-ink">{children}</h3>;
}

/** Variant 1 — Pastel: white frame, differently tinted cards, bold titles, flat art. */
export function Pastel() {
  return (
    <div className="rounded-[32px] bg-white p-3 shadow-frame sm:p-4">
      <Cells className="grid gap-3 sm:gap-4 md:grid-cols-6 lg:grid-cols-12">
        <Cell className={`group flex flex-col justify-between rounded-[24px] p-7 md:col-span-3 lg:col-span-4 lg:row-span-2 ${tint.mint}`}>
          <Title>One hub for everything</Title>
          <div className="my-8 flex justify-center">
            <ParcelsArt />
          </div>
          <p className="text-[15px] text-pretty text-body-mint">
            Shipments, returns and pickups in one place. No more switching between systems.
          </p>
        </Cell>

        <Cell className={`group flex flex-col gap-6 overflow-hidden rounded-[24px] p-7 sm:flex-row sm:items-center md:col-span-3 lg:col-span-8 ${tint.sky}`}>
          <div className="sm:w-1/2">
            <Title>Plug in your stack</Title>
            <p className="mt-3 text-[15px] text-pretty text-soft">
              Connect your webshop, WMS or ERP in minutes through the dashboard or our API.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <PlugsArt />
          </div>
        </Cell>

        <Cell className={`group flex flex-col rounded-[24px] p-7 md:col-span-3 lg:col-span-4 ${tint.sand}`}>
          <Title>Live insights</Title>
          <p className="mt-3 text-[15px] text-pretty text-soft">Track performance and cut costs with real-time data.</p>
          <div className="mt-6 flex flex-1 items-end justify-end">
            <ChartArt />
          </div>
        </Cell>

        <Cell className={`group flex flex-col rounded-[24px] p-7 md:col-span-3 lg:col-span-4 ${tint.lilac}`}>
          <div className="flex items-start justify-between gap-4">
            <Title>99.9% uptime</Title>
            <ShieldArt />
          </div>
          <p className="mt-auto pt-6 text-[15px] text-pretty text-soft">
            Scales with your volume. Enterprise-grade reliability, guaranteed.
          </p>
        </Cell>

        <Cell className={`group flex flex-col items-center gap-6 overflow-hidden rounded-[24px] p-7 md:col-span-6 lg:col-span-12 lg:flex-row lg:gap-12 lg:px-12 ${tint.peach}`}>
          <div className="lg:w-2/5">
            <Title>Ship to 200+ countries</Title>
            <p className="mt-3 text-[15px] text-pretty text-soft">
              All major carriers and local transporters, 50+ logistics partners and 1000+ shipping methods.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <GlobeArt />
          </div>
        </Cell>
      </Cells>
    </div>
  );
}
