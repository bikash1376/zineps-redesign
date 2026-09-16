"use client";

import type { ReactNode } from "react";
import {
  ChartBarIcon,
  GlobeHemisphereWestIcon,
  PackageIcon,
  PlugsConnectedIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import { IsoChart, IsoHub, IsoNetwork, IsoPlug, IsoServer } from "./IsoArt";
import { Reveal } from "./motion/Reveal";

function Card({
  icon,
  title,
  description,
  art,
  artClass,
  className = "",
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  art: ReactNode;
  artClass: string;
  className?: string;
  delay?: number;
}) {
  return (
    // Grid placement lives on the reveal wrapper so the float-in doesn't break the layout
    <Reveal inView delay={delay} className={className}>
      <article className="group relative h-full overflow-hidden rounded-[22px] bg-[#fafbfb] p-6 shadow-[0_1px_2px_rgb(0_0_0/0.04)]">
        <span className="flex size-9 items-center justify-center rounded-xl bg-white text-green shadow-border">
          {icon}
        </span>
        <h3 className="mt-4 text-lg font-medium text-ink">{title}</h3>
        <p className="mt-1.5 max-w-[340px] text-sm text-pretty text-muted">{description}</p>
        <div aria-hidden className={`pointer-events-none ${artClass}`}>
          {art}
        </div>
      </article>
    </Reveal>
  );
}

/** Clay bento: cool grey-green canvas, near-white cards, icon chips, clay art bleeding off the edges. */
export function ClayBento() {
  return (
    <div className="rounded-[32px] bg-[#e6ebe9] p-3 sm:p-6">
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[260px_260px]">
        <Card
          className="min-h-[420px] md:row-span-2 lg:col-span-4"
          icon={<GlobeHemisphereWestIcon size={18} weight="fill" />}
          title="Access a wide network"
          description="Ship to 200+ countries with all major carriers and local transporters."
          art={<IsoNetwork className="h-auto w-full" />}
          artClass="absolute -right-4 -bottom-2 w-[108%]"
        />
        <Card
          className="min-h-[240px] lg:col-span-3"
          icon={<PlugsConnectedIcon size={18} weight="fill" />}
          delay={0.06}
          title="Connect in minutes"
          description="Webshop, WMS or ERP. 100+ ready integrations."
          art={<IsoPlug className="h-auto w-full" />}
          artClass="absolute -right-8 -bottom-6 w-52"
        />
        <Card
          className="min-h-[240px] lg:col-span-5"
          icon={<PackageIcon size={18} weight="fill" />}
          delay={0.12}
          title="One hub for every shipment"
          description="Labels, returns and pickups managed in one place, without the tab-switching."
          art={<IsoHub className="h-auto w-full" />}
          artClass="absolute -right-2 -bottom-4 w-48"
        />
        <Card
          className="min-h-[240px] lg:col-span-5"
          icon={<ChartBarIcon size={18} weight="fill" />}
          delay={0.18}
          title="Insights in real time"
          description="Follow performance live and spot savings before they slip away."
          art={<IsoChart className="h-auto w-full" />}
          artClass="absolute -right-4 -bottom-6 w-60"
        />
        <Card
          className="min-h-[240px] lg:col-span-3"
          icon={<ShieldCheckIcon size={18} weight="fill" />}
          delay={0.24}
          title="Always on"
          description="99.9% uptime that scales with your volume."
          art={<IsoServer className="h-auto w-full" />}
          artClass="absolute -right-6 -bottom-8 w-40"
        />
      </div>
    </div>
  );
}
