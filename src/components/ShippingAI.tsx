import Image from "next/image";
import {
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  PackageIcon,
  SparkleIcon,
  WarningIcon,
} from "@phosphor-icons/react/ssr";
import { ArrowBadge } from "./ArrowBadge";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Reveal } from "./motion/Reveal";

const options = [
  {
    carrier: "DHL Parcel",
    logo: "/images/integrations/carrier-dhl.png",
    price: "€6.20",
    eta: "1–2 days",
    onTime: "97% on time",
    risk: "low" as const,
    recommended: true,
  },
  {
    carrier: "PostNL",
    logo: "/images/integrations/carrier-postnl.png",
    price: "€5.85",
    eta: "2–3 days",
    onTime: "88% on time",
    risk: "medium" as const,
  },
  {
    carrier: "DPD",
    logo: "/images/integrations/carrier-dpd.png",
    price: "€7.40",
    eta: "1 day",
    onTime: "95% on time",
    risk: "low" as const,
  },
];

function Risk({ level }: { level: "low" | "medium" }) {
  return level === "low" ? (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-forest">
      <CheckCircleIcon size={14} weight="bold" aria-hidden />
      Low delay risk
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#9a5b00]">
      <WarningIcon size={14} weight="bold" aria-hidden />
      Delay risk
    </span>
  );
}

/**
 * Shipping AI: same layout as the partner rates panel. Copy fills the left half, and the
 * recommendation card sits on the right, cropped by the panel's right and bottom edges.
 */
export function ShippingAI() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="relative overflow-hidden rounded-[14px] bg-surface">
        {/* Soft mint glow behind the product card */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -bottom-40 size-[560px] rounded-full bg-mint/60 blur-3xl"
        />

        {/* Copy and action */}
        <div className="relative px-6 pt-10 pb-10 sm:px-12 sm:pt-14 lg:w-1/2 lg:py-20 lg:pr-10 lg:pl-20">
          {/* Copy reveals block by block as the panel scrolls into view */}
          <Reveal inView>
            <Badge>Shipping AI</Badge>
          </Reveal>
          <Reveal inView delay={0.08}>
            <h2 className="mt-5 text-3xl font-medium text-balance text-ink">
              Predict delays. Pick better routes. Spend less.
            </h2>
          </Reveal>
          <Reveal inView delay={0.16}>
            <p className="mt-4 max-w-[460px] text-base text-pretty text-soft">
              Shipping AI is the intelligence in the layer. It recommends the better carrier, route, and
              rate for every shipment.
            </p>
          </Reveal>
          <Reveal inView delay={0.24} className="mt-10">
            <Button href="#" variant="ink" className="pr-2.5">
              Explore Shipping AI
              <ArrowBadge className="text-ink" />
            </Button>
          </Reveal>
        </div>

        {/* Recommendation card, cropped by the panel's right and bottom edges */}
        <Reveal
          inView
          from="right"
          delay={0.15}
          className="relative pl-6 sm:pl-12 lg:absolute lg:top-[18%] lg:left-[54%] lg:w-[64%] lg:pl-0"
        >
          <div className="-mr-[20%] rounded-tl-[20px] bg-white/70 p-2 pr-0 pb-0 shadow-border backdrop-blur lg:mr-0">
            <div className="rounded-tl-xl bg-white p-5 pr-[30%] pb-20 shadow-border lg:pr-[38%] lg:pb-40">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-mint-soft text-forest">
                    <PackageIcon size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink tabular-nums">Order #20931 · 2.4 kg</p>
                    <p className="flex items-center gap-1 text-xs text-muted">
                      <MapPinIcon size={12} aria-hidden />
                      Amsterdam → Berlin
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                  <ClockIcon size={14} aria-hidden />
                  Promise: deliver by Thu
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {options.map((option) => (
                  <li
                    key={option.carrier}
                    className={`relative flex items-center gap-4 rounded-lg p-3 ${
                      option.recommended ? "bg-mint-mist shadow-[inset_0_0_0_1px_rgb(96_148_138/0.35)]" : ""
                    }`}
                  >
                    <span className="relative block h-7 w-14 shrink-0">
                      <Image src={option.logo} alt={option.carrier} fill sizes="56px" className="object-contain" />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-2 text-sm font-medium text-ink">
                        {option.carrier}
                        {option.recommended && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-forest px-2 py-0.5 text-[11px] font-medium text-white">
                            <SparkleIcon size={11} weight="fill" aria-hidden />
                            Recommended
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted">
                        <span className="tabular-nums">{option.eta}</span>
                        <span className="tabular-nums">{option.onTime}</span>
                        <Risk level={option.risk} />
                      </span>
                    </span>
                    <span className="text-base font-medium text-ink tabular-nums">{option.price}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 flex items-start gap-2 rounded-lg bg-surface-soft p-3 text-xs text-pretty text-soft">
                <SparkleIcon size={14} weight="fill" className="mt-px shrink-0 text-green" aria-hidden />
                DHL Parcel meets Thursday&apos;s promise with the lowest delay risk. PostNL is €0.35 cheaper
                but misses it on 12% of this lane.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
