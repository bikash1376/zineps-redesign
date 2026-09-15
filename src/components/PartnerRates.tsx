import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { Button } from "./Button";

const stats = [
  { value: "20+", label: "Shipping partners" },
  { value: "200+", label: "Destination countries" },
  { value: "1000+", label: "Shipping methods" },
];

export function PartnerRates() {
  return (
    <section className="mx-auto mt-24 w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="relative grid overflow-hidden rounded-[14px] bg-mint lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {/* Copy, proof, action */}
        <div className="px-6 pt-10 pb-10 sm:px-12 sm:pt-14 lg:py-20 lg:pr-6 lg:pl-20">
          <span className="inline-flex items-center rounded-full border border-forest/15 bg-white/70 px-4 py-1.5 text-sm font-medium text-forest">
            Partner shipping rates
          </span>

          <h2 className="mt-5 text-3xl font-medium text-ink">
            Their buying power <br className="hidden sm:block" />
            becomes yours
          </h2>

          <p className="mt-4 max-w-[480px] text-base text-body-mint">
            Partners on Zineps already hold high-volume deals with DHL, PostNL and DPD. We match you
            to the one whose lanes fit your shop.
          </p>

          <dl className="mt-10 grid max-w-[520px] grid-cols-3 divide-x divide-forest/15">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 first:pl-0 sm:px-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-medium text-forest sm:text-4xl">{stat.value}</dd>
                <dd className="mt-1 text-sm text-body-mint">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#" variant="dark">
              Start free
              <ArrowRightIcon size={18} weight="bold" />
            </Button>
            <Button href="#" variant="outline">
              How partner rates work
            </Button>
          </div>
        </div>

        {/* Product mockup bleeding off the right and bottom edges */}
        <div className="relative pl-6 sm:pl-12 lg:pl-0">
          <div className="-mr-[20%] overflow-hidden rounded-tl-2xl border border-forest/10 bg-white shadow-raised lg:absolute lg:top-20 lg:left-0 lg:mr-0 lg:w-[125%]">
            <Image
              src="/images/carrier-broker.png"
              alt="Zineps partner dashboard for CarrierBroker B.V. with label totals, contracts and recent customers"
              width={2031}
              height={1380}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
