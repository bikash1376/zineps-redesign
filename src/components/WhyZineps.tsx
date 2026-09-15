import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowUpIcon,
  ArrowUUpLeftIcon,
  CheckCircleIcon,
  GlobeHemisphereWestIcon,
  HandshakeIcon,
  PackageIcon,
  TruckIcon,
} from "@phosphor-icons/react/ssr";
import { ShipmentsChart } from "./ShipmentsChart";

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

const shipments = [
  { id: "#10482", carrier: "DHL For You", status: "Delivered", icon: CheckCircleIcon },
  { id: "#10481", carrier: "PostNL", status: "In transit", icon: TruckIcon },
  { id: "#10480", carrier: "GLS", status: "Return received", icon: ArrowUUpLeftIcon },
  { id: "#10479", carrier: "DPD", status: "In transit", icon: TruckIcon },
];

const coverage = [
  { title: "Worldwide", description: "200+ countries", meta: "Active", icon: GlobeHemisphereWestIcon },
  { title: "Partners", description: "50+ logistics partners", meta: "Available", icon: HandshakeIcon },
  { title: "Shipments", description: "1000+ methods", meta: "Now", icon: PackageIcon },
];

// 60 days of status; every day operational
const uptimeDays = Array.from({ length: 60 });

function Card({
  label,
  title,
  description,
  className = "",
  children,
}: {
  label: string;
  title: ReactNode;
  description: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-[20px] bg-surface-soft p-7 shadow-border ${className}`}
    >
      <span className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-forest shadow-border">
        {label}
      </span>
      <h3 className="mt-5 text-xl font-medium text-balance text-ink">{title}</h3>
      <p className="mt-2 max-w-[460px] text-base text-pretty text-muted">{description}</p>
      <div className="relative mt-8 flex flex-1 items-end">{children}</div>
    </article>
  );
}

/** Fades a visual out toward the card's bottom edge, like the reference bento. */
function BottomFade() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-surface-soft/0 to-surface-soft"
    />
  );
}

export function WhyZineps() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 pt-24 md:px-10 lg:px-20 lg:pt-28">
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium tracking-wide text-forest uppercase shadow-border">
          Why Zineps
        </span>
        <h2 className="mt-5 text-3xl font-medium text-balance text-ink">
          Everything you need for <br className="hidden sm:block" />
          successful shipping
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-5">
        {/* 1 — wide */}
        <Card
          className="lg:col-span-3"
          label="One platform for everything"
          title="Manage all your shipments, returns and logistics from one central hub"
          description="No hassle with multiple systems. Everything you need for successful shipping in one place."
        >
          <div className="w-full translate-y-7 overflow-hidden rounded-t-xl bg-white shadow-border">
            <div className="flex gap-1 border-b border-line px-4 pt-3 text-sm">
              <span className="border-b-2 border-green px-2 pb-2.5 font-medium text-ink">Shipments</span>
              <span className="px-2 pb-2.5 text-muted">Returns</span>
              <span className="px-2 pb-2.5 text-muted">Logistics</span>
            </div>
            <ul className="divide-y divide-line">
              {shipments.map((s) => (
                <li key={s.id} className="flex items-center gap-4 px-4 py-3 text-sm">
                  <span className="w-16 font-medium text-ink tabular-nums">{s.id}</span>
                  <span className="flex-1 text-soft">{s.carrier}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-2.5 py-1 text-xs font-medium text-forest">
                    <s.icon size={14} weight="bold" aria-hidden />
                    {s.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <BottomFade />
        </Card>

        {/* 2 — narrow */}
        <Card
          className="lg:col-span-2"
          label="Fast integrations"
          title="Connect within minutes with your webshop, WMS or other systems"
          description="Through our dashboard or extensive API, you can quickly and easily integrate with all popular platforms."
        >
          <ul className="grid w-full grid-cols-3 gap-3">
            {integrations.map((logo) => (
              <li
                key={logo.file}
                className="flex aspect-[4/3] items-center justify-center rounded-xl bg-white px-3 shadow-border"
              >
                <span className="relative block h-7 w-full">
                  <Image
                    src={`/images/integrations/${logo.file}.png`}
                    alt={logo.name}
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </span>
              </li>
            ))}
          </ul>
          <BottomFade />
        </Card>

        {/* 3 — narrow */}
        <Card
          className="lg:col-span-2"
          label="Analytics"
          title="Real-time insights and data-driven decisions"
          description="Track your shipping performance in real-time. Get deep insights to optimize your logistics and reduce costs."
        >
          <div className="w-full rounded-xl bg-white p-5 shadow-border">
            <p className="text-sm text-muted">Shipments this month</p>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="text-3xl font-medium text-ink tabular-nums">12,847</span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-forest tabular-nums">
                <ArrowUpIcon size={14} weight="bold" aria-hidden />
                1,234
                <span className="font-normal text-muted">vs May</span>
              </span>
            </div>
            <div className="mt-6">
              <ShipmentsChart />
            </div>
          </div>
        </Card>

        {/* 4 — wide */}
        <Card
          className="lg:col-span-3"
          label="Global coverage"
          title="Ship to more than 200+ countries worldwide"
          description="You have access to all major carriers and local transporters worldwide."
        >
          <ul className="w-full space-y-3">
            {coverage.map((c, i) => (
              <li
                key={c.title}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-border"
                style={{ marginInline: `${i * 16}px` }}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-mint text-forest">
                  <c.icon size={20} aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="block text-base font-medium text-ink">{c.title}</span>
                  <span className="block text-sm text-muted">{c.description}</span>
                </span>
                <span className="text-sm text-muted">{c.meta}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* 5 — full width */}
        <article className="relative grid gap-8 overflow-hidden rounded-[20px] bg-surface-soft p-7 shadow-border lg:col-span-5 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-forest shadow-border">
              Scalability & Uptime
            </span>
            <h3 className="mt-5 text-xl font-medium text-balance text-ink">
              Enterprise-grade reliability and 99.9% uptime guarantee
            </h3>
            <p className="mt-2 max-w-[520px] text-base text-pretty text-muted">
              Your platform automatically scales with your growth. With a 99.9% uptime guarantee, your
              shipping process always remains operational, regardless of volume.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-border">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-3xl font-medium text-ink tabular-nums">99.9% Uptime</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest">
                <CheckCircleIcon size={16} weight="bold" aria-hidden />
                All systems operational
              </span>
            </div>
            <p className="mt-1 text-sm text-pretty text-muted">
              Enterprise-grade security and reliability for all your shipments
            </p>
            <div className="mt-5 flex h-9 gap-[3px]" role="img" aria-label="Operational every day for the last 60 days">
              {uptimeDays.map((_, i) => (
                <span key={i} className="flex-1 rounded-[2px] bg-chart" />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted" aria-hidden>
              <span>60 days ago</span>
              <span>Today</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
