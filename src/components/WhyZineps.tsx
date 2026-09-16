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
import { Badge } from "./Badge";
import { Reveal } from "./motion/Reveal";
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
  delay = 0,
  children,
}: {
  label: string;
  title: ReactNode;
  description: string;
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    // Grid span lives on the reveal wrapper so the float-up doesn't break the bento layout
    <Reveal inView delay={delay} className={className}>
      <article className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-mint-mist p-6 shadow-border transition-shadow duration-200 ease-out hover:shadow-border-hover">
        <Badge>{label}</Badge>
        <h3 className="mt-4 text-lg font-medium text-balance text-ink">{title}</h3>
        <p className="mt-1.5 max-w-[440px] text-[15px] text-pretty text-muted">{description}</p>
        <div className="relative mt-6 flex flex-1 items-end">{children}</div>
      </article>
    </Reveal>
  );
}

/** Fades a visual out toward the card's bottom edge, like the reference bento. */
function BottomFade() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-mint-mist/0 to-mint-mist"
    />
  );
}

export function WhyZineps() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="flex flex-col items-center text-center">
        <Badge>Why Zineps</Badge>
        <h2 className="mt-5 text-3xl font-medium text-balance text-ink">
          Everything you need for <br className="hidden sm:block" />
          successful shipping
        </h2>
      </div>

      <div className="mx-auto mt-heading grid max-w-[1200px] gap-4 lg:grid-cols-5">
        {/* 1 — wide */}
        <Card
          className="lg:col-span-3"
          label="One platform for everything"
          title="Manage all your shipments, returns and logistics from one central hub"
          description="No hassle with multiple systems. Everything you need for successful shipping in one place."
        >
          <div className="w-full translate-y-6 overflow-hidden rounded-t-xl bg-white shadow-border">
            <div className="flex gap-1 border-b border-line px-4 pt-2.5 text-sm">
              <span className="border-b-2 border-green px-2 pb-2 font-medium text-ink">Shipments</span>
              <span className="px-2 pb-2 text-muted">Returns</span>
              <span className="px-2 pb-2 text-muted">Logistics</span>
            </div>
            <ul className="divide-y divide-line">
              {shipments.map((s) => (
                <li key={s.id} className="flex items-center gap-3 px-4 py-2.5 text-sm sm:gap-4">
                  <span className="w-14 shrink-0 font-medium text-ink tabular-nums sm:w-16">{s.id}</span>
                  <span className="min-w-0 flex-1 truncate text-soft">{s.carrier}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-2.5 py-0.5 text-xs font-medium text-forest">
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
          delay={0.1}
          label="Fast integrations"
          title="Connect within minutes with your webshop, WMS or other systems"
          description="Through our dashboard or extensive API, you can quickly and easily integrate with all popular platforms."
        >
          <ul className="grid w-full grid-cols-3 gap-2.5">
            {integrations.map((logo) => (
              <li
                key={logo.file}
                className="flex aspect-[4/3] items-center justify-center rounded-xl bg-white px-3 shadow-border"
              >
                <span className="relative block h-6 w-full">
                  <Image
                    src={`/images/integrations/${logo.file}.png`}
                    alt={logo.name}
                    fill
                    sizes="110px"
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
          delay={0.1}
          label="Analytics"
          title="Real-time insights and data-driven decisions"
          description="Track your shipping performance in real-time. Get deep insights to optimize your logistics and reduce costs."
        >
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
        </Card>

        {/* 4 — wide */}
        <Card
          className="lg:col-span-3"
          delay={0.2}
          label="Global coverage"
          title="Ship to more than 200+ countries worldwide"
          description="You have access to all major carriers and local transporters worldwide."
        >
          <ul className="w-full space-y-2.5">
            {coverage.map((c, i) => (
              <li
                key={c.title}
                className="flex items-center gap-3.5 rounded-xl bg-white p-3.5 shadow-border max-sm:mx-0!"
                style={{ marginInline: `${i * 14}px` }}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-mint text-forest">
                  <c.icon size={18} aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="block text-[15px] font-medium text-ink">{c.title}</span>
                  <span className="block text-sm text-muted">{c.description}</span>
                </span>
                <span className="text-sm text-muted">{c.meta}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* 5 — full width */}
        <Reveal inView delay={0.1} className="lg:col-span-5">
        <article className="relative grid h-full gap-6 overflow-hidden rounded-[20px] bg-mint-mist p-6 shadow-border transition-shadow duration-200 ease-out hover:shadow-border-hover lg:grid-cols-2 lg:items-center">
          <div>
            <Badge>Scalability & Uptime</Badge>
            <h3 className="mt-4 text-lg font-medium text-balance text-ink">
              Enterprise-grade reliability and 99.9% uptime guarantee
            </h3>
            <p className="mt-1.5 max-w-[500px] text-[15px] text-pretty text-muted">
              Your platform automatically scales with your growth. With a 99.9% uptime guarantee, your
              shipping process always remains operational, regardless of volume.
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-border">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-2xl font-medium text-ink tabular-nums">99.9% Uptime</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest">
                <CheckCircleIcon size={16} weight="bold" aria-hidden />
                All systems operational
              </span>
            </div>
            <p className="mt-1 text-sm text-pretty text-muted">
              Enterprise-grade security and reliability for all your shipments
            </p>
            <div className="mt-4 flex h-8 gap-[3px]" role="img" aria-label="Operational every day for the last 60 days">
              {uptimeDays.map((_, i) => (
                // Phones show the last 30 days so bars stay readable
                <span key={i} className={`flex-1 rounded-[2px] bg-chart ${i < 30 ? "hidden sm:block" : ""}`} />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted" aria-hidden>
              <span>
                <span className="sm:hidden">30</span>
                <span className="hidden sm:inline">60</span> days ago
              </span>
              <span>Today</span>
            </div>
          </div>
        </article>
        </Reveal>
      </div>
    </section>
  );
}
