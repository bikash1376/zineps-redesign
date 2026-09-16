"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRightIcon,
  FingerprintIcon,
  LightningIcon,
  PlusIcon,
  ScanIcon,
  StorefrontIcon,
  TruckIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { Cell, Cells } from "./shared";

/* ── Real product fragments on white cards over a mint canvas (bento3 style) ─────── */

function CardShell({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <Cell className={`group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-border ${className}`}>
      {children}
    </Cell>
  );
}

function Heading({ title, body }: { title: string; body: ReactNode }) {
  return (
    <>
      <h3 className="text-lg font-medium text-ink">{title}</h3>
      <p className="mt-1.5 text-[15px] text-pretty text-muted">{body}</p>
    </>
  );
}

function PickupSnippet() {
  return (
    <div className="relative mt-8">
      {/* soft ghost cards behind */}
      <div className="absolute inset-x-6 -top-3 h-10 rounded-xl bg-surface-soft" />
      <div className="relative rounded-xl bg-white shadow-frame">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-ink">
              Pickup · <span className="text-forest">DHL Parcel</span>
            </p>
            <span className="text-xs text-muted">Tue 16</span>
          </div>
          <p className="mt-1 text-xs text-muted tabular-nums">09:00 – 12:00 · 24 parcels · 1 pallet</p>
          <span className="mt-3 inline-flex rounded-md bg-surface px-2 py-0.5 text-xs text-soft">Warehouse A</span>
        </div>
        <div className="flex items-center gap-3 border-t border-line p-3">
          <span className="h-8 flex-1 rounded-lg bg-surface-soft shadow-[inset_0_1px_2px_rgb(0_0_0/0.06)]" />
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-mint-soft px-3 py-1.5 text-sm font-medium text-forest">
            Schedule
            <ArrowRightIcon size={14} weight="bold" className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function AlertStack() {
  return (
    <div className="relative mb-5 h-[92px]">
      <div className="absolute inset-x-10 top-0 h-16 rounded-xl bg-surface-soft shadow-border transition-transform duration-300 ease-out group-hover:-translate-y-1" />
      <div className="absolute inset-x-5 top-2.5 h-16 rounded-xl bg-white shadow-border transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
      <div className="absolute inset-x-0 top-5 flex items-center gap-3 rounded-xl bg-white p-3 shadow-frame">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#fbe9e1] text-[#c2622a]">
          <WarningIcon size={18} weight="bold" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-ink">Delay predicted</span>
          <span className="block truncate text-xs text-muted">#10481 · PostNL · rerouted via DPD</span>
        </span>
        <span className="text-xs text-muted">2m</span>
      </div>
    </div>
  );
}

const orbit = [
  { src: "/images/integrations/carrier-dhl.png", alt: "DHL", pos: "left-[14%] top-[20%]" },
  { src: "/images/integrations/carrier-postnl.png", alt: "PostNL", pos: "right-[12%] top-[8%]" },
  { src: "/images/integrations/carrier-dpd.png", alt: "DPD", pos: "right-[20%] top-[46%]" },
  { src: "/images/integrations/carrier-bpost.png", alt: "bpost", pos: "left-[40%] top-[36%]" },
];

function CarrierOrbit() {
  return (
    <div className="relative h-52">
      {[160, 240, 320].map((size) => (
        <span
          key={size}
          className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line"
          style={{ width: size, height: size }}
        />
      ))}
      {orbit.map((c, i) => (
        <span
          key={c.alt}
          className={`absolute flex size-12 items-center justify-center rounded-full bg-white p-2 shadow-frame transition-transform duration-300 ease-out group-hover:-translate-y-1 ${c.pos}`}
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          <span className="relative block size-full">
            <Image src={c.src} alt={c.alt} fill sizes="48px" className="object-contain" />
          </span>
        </span>
      ))}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between rounded-xl bg-white/90 p-2 pl-3 shadow-border backdrop-blur">
        <span className="text-sm text-soft">
          <b className="font-medium text-ink">50+</b> partners · <b className="font-medium text-ink">200+</b> countries
        </span>
        <span className="inline-flex items-center gap-1 rounded-lg bg-surface-soft px-2.5 py-1 text-xs font-medium text-ink">
          <PlusIcon size={12} weight="bold" /> Carrier
        </span>
      </div>
    </div>
  );
}

function DashboardSnippet() {
  const bars = [24, 38, 30, 46, 58, 42, 64, 52, 70];
  return (
    <div className="mt-6 rounded-t-xl bg-white shadow-frame">
      <div className="flex gap-1.5 px-4 pt-3">
        {["#f2b98b", "#f5d58a", "#70cab9"].map((c) => (
          <span key={c} className="size-2.5 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className="grid gap-4 p-4 pb-6 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-medium text-ink">Shipments per week</p>
          <div className="relative mt-4 flex h-32 items-end gap-2 border-b border-line">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`flex-1 origin-bottom rounded-t-[4px] transition-colors duration-200 ${i === 6 ? "bg-forest" : "bg-mint group-hover:bg-[#c5e8df]"}`}
                style={{ height: `${h + 20}%` }}
              />
            ))}
            <span className="absolute -top-2 left-[64%] rounded-md bg-white px-2 py-1 text-xs text-ink shadow-frame tabular-nums">
              1,284 <span className="text-muted">wk 7</span>
            </span>
          </div>
        </div>
        <div className="rounded-lg bg-mint-mist p-3">
          <p className="text-xs text-muted">Cost per label</p>
          <p className="mt-1 text-xl font-medium text-forest tabular-nums">−18%</p>
          <p className="mt-2 text-xs text-pretty text-soft">Rate shopping moved 312 labels to cheaper lanes this month.</p>
        </div>
      </div>
    </div>
  );
}

function RuleChips() {
  const rules = [
    { when: "Weight > 20 kg", then: "DB Schenker", on: true },
    { when: "Country = DE", then: "DPD Classic", on: true },
    { when: "Order > €150", then: "Signature", on: false },
  ];
  return (
    <ul className="mt-5 space-y-2">
      {rules.map((r) => (
        <li key={r.when} className="flex items-center gap-2 rounded-lg bg-surface-soft px-3 py-2 text-xs">
          <LightningIcon size={14} weight="fill" className="text-green" />
          <span className="text-soft">{r.when}</span>
          <ArrowRightIcon size={12} className="text-muted" />
          <span className="font-medium text-ink">{r.then}</span>
          <span className={`ml-auto h-4 w-7 rounded-full p-0.5 transition-colors ${r.on ? "bg-green" : "bg-line"}`}>
            <span className={`block size-3 rounded-full bg-white transition-transform ${r.on ? "translate-x-3" : ""}`} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Variant 3 — Soft UI: mint canvas, white cards, live-looking product fragments. */
export function SoftUI() {
  return (
    <div className="rounded-[32px] bg-[#e7f3ef] p-3 sm:p-5">
      <Cells className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-12">
        <CardShell className="lg:col-span-4 lg:row-span-2">
          <Heading title="Book pickups in seconds" body="Schedule pickups, print labels and manage returns from one hub. Your team always knows what leaves when." />
          <PickupSnippet />
        </CardShell>

        <CardShell className="lg:col-span-4">
          <AlertStack />
          <Heading title="Alerts before delays happen" body="Shipping AI flags risky lanes and reroutes automatically." />
        </CardShell>

        <CardShell className="md:row-span-2 lg:col-span-4">
          <CarrierOrbit />
          <div className="mt-6">
            <Heading title="A network that goes everywhere" body="All major carriers and local transporters, ready without extra contracts." />
          </div>
        </CardShell>

        <CardShell className="lg:col-span-4">
          <p className="text-[15px] leading-relaxed text-pretty text-soft">
            Connect <StorefrontIcon size={18} className="inline -translate-y-0.5 text-forest" /> <b className="font-medium text-ink">Shopify</b>, <b className="font-medium text-ink">bol.com</b> and your{" "}
            <ScanIcon size={18} className="inline -translate-y-0.5 text-forest" /> <b className="font-medium text-ink">WMS</b> in minutes, with 100+ integrations or our API.
          </p>
        </CardShell>

        <CardShell className="pb-0 md:col-span-2 lg:col-span-7">
          <Heading title="Dashboards that pay for themselves" body="Clear, real-time reports on volume, delivery performance and cost per label." />
          <DashboardSnippet />
        </CardShell>

        <CardShell className="flex items-center gap-6 lg:col-span-5">
          <div className="flex-1">
            <Heading title="99.9% uptime, secure by default" body="Enterprise-grade reliability with SSO for your whole team." />
          </div>
          <span className="relative flex size-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-frame">
            <span className="absolute inset-[-10px] rounded-[26px] border border-line transition-[inset] duration-300 ease-out group-hover:inset-[-16px]" />
            <FingerprintIcon size={36} className="text-forest" />
          </span>
        </CardShell>

        <CardShell className="lg:col-span-5 lg:col-start-8">
          <div className="flex items-center gap-2 text-sm font-medium text-ink">
            <TruckIcon size={18} className="text-forest" /> Shipping rules
          </div>
          <RuleChips />
        </CardShell>
      </Cells>
    </div>
  );
}
