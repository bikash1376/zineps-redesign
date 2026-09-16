"use client";

import type { ReactNode } from "react";
import { Badge } from "@/components/Badge";
import { Cell, Cells } from "./shared";
import { DottedGlobeArt, HubArt, InsightArt, PlugArt, ShieldPulseArt } from "./illustrations";

/**
 * Round 3 · Framed — axis: system fidelity. Built only from patterns already on the site:
 * white-framed mint cards with the frame shadow (globe stats), the shared Badge, and line
 * illustrations drawn in the icon style (1.5px forest strokes, mint fills). Quiet, native.
 */

function Framed({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <Cell
      className={`group relative flex flex-col overflow-hidden rounded-[28px] border-[5px] border-white bg-mint-mist p-6 shadow-frame transition-shadow duration-200 ease-out ${className}`}
    >
      {children}
    </Cell>
  );
}

function Copy({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <>
      <Badge>{label}</Badge>
      <h3 className="mt-4 text-lg font-medium text-balance text-ink">{title}</h3>
      <p className="mt-1.5 text-[15px] text-pretty text-body-mint">{body}</p>
    </>
  );
}

export function Framed3() {
  return (
    <Cells className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
      <Framed>
        <div className="mb-6 flex h-40 items-center justify-center">
          <HubArt className="h-full w-auto" />
        </div>
        <Copy label="One platform" title="Shipments, returns and pickups in one hub" body="No more hopping between carrier portals and spreadsheets." />
      </Framed>

      <Framed className="md:row-span-2">
        <Copy label="Global coverage" title="Ship to 200+ countries" body="All major carriers and local transporters, 50+ logistics partners and 1000+ methods." />
        <div className="mt-8 flex flex-1 items-end justify-center">
          <DottedGlobeArt className="w-full max-w-[320px]" />
        </div>
      </Framed>

      <Framed>
        <div className="mb-6 flex h-40 items-center justify-center">
          <PlugArt className="h-full w-auto" />
        </div>
        <Copy label="Integrations" title="100+ integrations, live in minutes" body="Webshops, marketplaces, WMS and ERP, or build on our API." />
      </Framed>

      <Framed>
        <div className="mb-6 flex h-40 items-center justify-center">
          <InsightArt className="h-full w-auto" />
        </div>
        <Copy label="Analytics" title="Insights that lower your costs" body="Merchants save 40% on average with real-time performance data." />
      </Framed>

      <Framed>
        <div className="mb-6 flex h-40 items-center justify-center">
          <ShieldPulseArt className="h-full w-auto" />
        </div>
        <Copy label="Uptime" title="99.9% uptime, at any volume" body="Enterprise-grade reliability that scales with your growth." />
      </Framed>
    </Cells>
  );
}
