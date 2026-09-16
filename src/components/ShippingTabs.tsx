"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { ArrowBadge } from "./ArrowBadge";
import { Button } from "./Button";

const tabs = [
  {
    id: "automate",
    label: "Automate Shipping Process",
    title: ["Smart shipping", "from label to return."],
    description:
      "Less manual work, lower shipping costs, faster fulfillment, faster return processing and more customer satisfaction.",
    features: [
      "Automatic carrier selection based on price and speed",
      "Label generation",
      "Pickup & return management",
      "Dynamic checkout integrations",
      "Use own contracts or partner network",
      "Branded tracking, packing slips and return portal.",
    ],
    image: {
      src: "/images/send-your-business-shipments2.png",
      alt: "Order list with a selected product and carrier options DHL, Bpost, PostNL, GLS and FedEx",
      width: 1315,
      height: 800,
      // This screenshot has no frame of its own
      className: "rounded-xl shadow-card",
    },
  },
  {
    id: "transport",
    label: "Transport Management & B2B shipping",
    title: ["Send your business", "shipments"],
    description:
      "More revenue per vehicle, less planning & administration. New customers, better utilization of transport network and less support overhead.",
    features: [
      "Offer business shipping via Zineps",
      "Manage load orders, shipments and pick-ups",
      "Connect own ERP systems or use our APIs",
      "Address validation engine",
      "Tracking & trace and performance dashboards",
    ],
    image: {
      src: "/images/send-your-business-shipments.png",
      alt: "B2B shipment form with address fields, DB Schenker, parcel dimensions and a create label button",
      width: 685,
      height: 449,
      className: "",
    },
  },
];

// Content slides in from the side of the tab you moved toward; exits are shorter and softer
const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 32, filter: "blur(4px)" }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir * -20,
    filter: "blur(4px)",
    transition: { duration: 0.15, ease: "easeOut" as const },
  }),
};

export function ShippingTabs() {
  const [[active, direction], setState] = useState<[number, number]>([0, 0]);
  const baseId = useId();
  const tab = tabs[active];

  const select = (i: number) => {
    if (i !== active) setState([i, i > active ? 1 : -1]);
  };

  return (
    // Band starts white, so no top padding: the visible gap above stays exactly mt-section
    <section className="mt-section w-full bg-linear-to-b from-white to-surface-soft">
      <div className="mx-auto grid w-full max-w-[1600px] items-start gap-10 px-4 pb-16 sm:gap-12 sm:pb-20 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-20 lg:pb-24">
        {/* Copy */}
        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
          className="order-2 lg:order-1"
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={tab.id}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h2 className="text-3xl font-medium text-ink">
                {tab.title[0]} <br className="hidden sm:block" />
                {tab.title[1]}
              </h2>
              <p className="mt-5 max-w-[480px] text-base text-pretty text-muted">
                {tab.description}
              </p>

              <ul className="mt-8 space-y-3">
                {tab.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[15px] text-muted sm:text-base"
                  >
                    <CheckCircleIcon
                      size={20}
                      className="mt-px shrink-0 text-soft sm:mt-0.5"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button href="#" variant="ink" className="mt-10 pr-2.5">
                Read More
                <ArrowBadge className="text-ink" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tabs (aligned with the title's first line) + product image */}
        <div className="order-1 flex flex-col items-center gap-8 sm:gap-10 lg:order-2 lg:-mt-1.5">
          <div
            role="tablist"
            aria-label="Shipping solutions"
            className="flex w-full max-w-full justify-center gap-1 rounded-[20px] border border-black/5 bg-white p-1 shadow-card sm:w-auto sm:rounded-full"
          >
            {tabs.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  onClick={() => select(i)}
                  className={`relative flex-1 rounded-2xl px-3 py-2 text-[13px] leading-tight font-medium text-balance transition-colors duration-150 sm:flex-none sm:rounded-full sm:px-4 sm:text-sm sm:leading-normal sm:whitespace-nowrap ${
                    selected ? "text-forest" : "text-forest/70 hover:text-forest"
                  }`}
                >
                  {/* Active pill glides between tabs */}
                  {selected && (
                    <motion.span
                      layoutId={`${baseId}-active-pill`}
                      className="absolute inset-0 rounded-2xl bg-mint sm:rounded-full"
                      transition={{ type: "spring", duration: 0.35, bounce: 0 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              );
            })}
          </div>

          <div className="w-full max-w-[640px]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={tab.image.src}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <Image
                  src={tab.image.src}
                  alt={tab.image.alt}
                  width={tab.image.width}
                  height={tab.image.height}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`h-auto w-full ${tab.image.className}`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
