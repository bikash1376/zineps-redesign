"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { CoverageNotifications } from "@/components/CoverageNotifications";
import { ShipmentsChart } from "@/components/ShipmentsChart";
import { ShipmentsPanel } from "@/components/ShipmentsPanel";

/* Shared, production-shaped content for every bento variant (copy from zineps.com). */

const integrations = [
  { file: "shopify", name: "Shopify" },
  { file: "woocommerce", name: "WooCommerce" },
  { file: "magento", name: "Magento" },
  { file: "bolcom", name: "bol.com" },
  { file: "amazon", name: "Amazon" },
  { file: "ebay", name: "eBay" },
  { file: "exact", name: "Exact" },
  { file: "picqer", name: "Picqer" },
  { file: "sap", name: "SAP" },
];

export function HubVisual() {
  return <ShipmentsPanel />;
}

export function IntegrationsVisual({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`grid w-full gap-2.5 ${compact ? "grid-cols-3" : "grid-cols-3 sm:grid-cols-3"}`}>
      {integrations.map((logo) => (
        <li
          key={logo.file}
          className="flex aspect-[4/3] items-center justify-center rounded-xl bg-white px-3 shadow-border transition-[background-color,box-shadow] duration-200 ease-out hover:bg-surface-soft hover:shadow-border-hover"
        >
          <span className="relative block h-6 w-full">
            <Image src={`/images/integrations/${logo.file}.png`} alt={logo.name} fill sizes="110px" className="object-contain" />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function AnalyticsVisual() {
  return (
    <div className="w-full rounded-xl bg-white p-4 shadow-border">
      <p className="text-sm text-muted">Shipments this month</p>
      <div className="mt-1 flex items-baseline gap-3">
        <span className="text-2xl font-medium text-ink tabular-nums">12,847</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-forest tabular-nums">
          <ArrowUpIcon size={14} weight="bold" aria-hidden />
          1,234
          <span className="font-normal text-muted">vs May</span>
        </span>
      </div>
      <div className="mt-4">
        <ShipmentsChart />
      </div>
    </div>
  );
}

export function CoverageVisual() {
  return <CoverageNotifications />;
}

export function UptimeVisual() {
  return (
    <div className="w-full rounded-xl bg-white p-4 shadow-border">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-2xl font-medium text-ink tabular-nums">99.9% Uptime</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest">
          <CheckCircleIcon size={16} weight="bold" aria-hidden />
          All systems operational
        </span>
      </div>
      <div className="mt-4 flex h-8 gap-[3px]" role="img" aria-label="Operational every day for the last 30 days">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="flex-1 rounded-[2px] bg-chart" />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted" aria-hidden>
        <span>30 days ago</span>
        <span>Today</span>
      </div>
    </div>
  );
}

export type Feature = {
  id: string;
  label: string;
  title: string;
  description: string;
  stat: { value: string; label: string };
  Visual: () => ReactNode;
};

export const features: Feature[] = [
  {
    id: "hub",
    label: "One platform for everything",
    title: "Manage all your shipments, returns and logistics from one central hub",
    description: "No hassle with multiple systems. Everything you need for successful shipping in one place.",
    stat: { value: "1 hub", label: "for shipments, returns & pickups" },
    Visual: HubVisual,
  },
  {
    id: "integrations",
    label: "Fast integrations",
    title: "Connect within minutes with your webshop, WMS or other systems",
    description: "Through our dashboard or extensive API, you can quickly and easily integrate with all popular platforms.",
    stat: { value: "100+", label: "integrations" },
    Visual: () => <IntegrationsVisual />,
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Real-time insights and data-driven decisions",
    description: "Track your shipping performance in real-time. Get deep insights to optimize your logistics and reduce costs.",
    stat: { value: "12,847", label: "shipments this month" },
    Visual: AnalyticsVisual,
  },
  {
    id: "coverage",
    label: "Global coverage",
    title: "Ship to more than 200+ countries worldwide",
    description: "You have access to all major carriers and local transporters worldwide.",
    stat: { value: "200+", label: "countries" },
    Visual: CoverageVisual,
  },
  {
    id: "uptime",
    label: "Scalability & Uptime",
    title: "Enterprise-grade reliability and 99.9% uptime guarantee",
    description: "Your platform automatically scales with your growth, regardless of volume.",
    stat: { value: "99.9%", label: "uptime guarantee" },
    Visual: UptimeVisual,
  },
];
