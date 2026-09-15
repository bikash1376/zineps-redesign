"use client";

import Image from "next/image";
import { useId, useState } from "react";
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

export function ShippingTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tab = tabs[active];

  return (
    // Band starts white, so no top padding: the visible gap above stays exactly mt-section
    <section className="mt-section w-full bg-linear-to-b from-white to-surface-soft">
      <div className="mx-auto grid w-full max-w-[1600px] items-start gap-12 px-4 pb-20 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-20 lg:pb-24">
        {/* Copy */}
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
          className="order-2 animate-fade-in lg:order-1"
        >
          <h2 className="text-3xl font-medium text-ink">
            {tab.title[0]} <br className="hidden sm:block" />
            {tab.title[1]}
          </h2>
          <p className="mt-5 max-w-[480px] text-base text-muted">{tab.description}</p>

          <ul className="mt-8 space-y-3">
            {tab.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-base text-muted">
                <CheckCircleIcon size={20} className="shrink-0 text-soft" />
                {feature}
              </li>
            ))}
          </ul>

          <Button href="#" variant="ink" className="mt-10 pr-2.5">
            Read More
            <ArrowBadge className="text-ink" />
          </Button>
        </div>

        {/* Tabs (aligned with the title's first line) + product image */}
        <div className="order-1 flex flex-col items-center gap-10 lg:order-2 lg:-mt-1.5">
          <div
            role="tablist"
            aria-label="Shipping solutions"
            className="flex max-w-full flex-wrap justify-center gap-1 rounded-[24px] border border-black/5 bg-white p-1 shadow-card sm:flex-nowrap sm:rounded-full"
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
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    selected ? "bg-mint text-forest" : "text-forest/80 hover:text-forest"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <Image
            key={tab.image.src}
            src={tab.image.src}
            alt={tab.image.alt}
            width={tab.image.width}
            height={tab.image.height}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`h-auto w-full max-w-[640px] animate-fade-in ${tab.image.className}`}
          />
        </div>
      </div>
    </section>
  );
}
