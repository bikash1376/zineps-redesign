import Image from "next/image";
import { ArrowBadge } from "./ArrowBadge";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { ParallaxBlobs } from "./motion/ParallaxBlobs";
import { Reveal } from "./motion/Reveal";

// Decorative circles from Figma (Desktop - 4), positioned relative to the 1240×598 frame.
const blobs = [
  { left: "-9.3%", top: "75.4%", depth: 1.2 },
  { left: "15.2%", top: "-28.8%", depth: 0.8 },
  { left: "83.6%", top: "-25%", depth: 1 },
  { left: "91.4%", top: "-20.6%", depth: 1.6 },
  { left: "74.5%", top: "94.5%", depth: 0.7 },
  { left: "86.5%", top: "88%", depth: 1.3 },
];

export function PartnerRates() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="relative overflow-hidden rounded-[14px] border-4 border-white bg-mint sm:border-6 shadow-raised">
        <ParallaxBlobs blobs={blobs} />

        {/* Copy and action */}
        <div className="relative px-5 pt-10 pb-10 sm:px-12 sm:pt-14 lg:w-1/2 lg:py-28 lg:pr-10 lg:pl-20">
          {/* Copy reveals block by block as the panel scrolls into view */}
          <Reveal inView>
            <Badge>Partner shipping rates</Badge>
          </Reveal>
          <Reveal inView delay={0.08}>
            <h2 className="mt-5 text-3xl font-medium text-ink">
              Their buying power <br className="hidden sm:block" />
              becomes yours
            </h2>
          </Reveal>
          <Reveal inView delay={0.16}>
            <p className="mt-4 max-w-[480px] text-base text-body-mint">
              Partners on Zineps already hold high-volume deals with DHL, PostNL and DPD. We match you
              to the one whose lanes fit your shop.
            </p>
          </Reveal>
          <Reveal inView delay={0.24} className="mt-10">
            <Button href="#" variant="dark" className="pr-2.5">
              Start free
              <ArrowBadge className="text-forest" />
            </Button>
          </Reveal>
        </div>

        {/* Product mockup, cropped by the panel's right and bottom edges */}
        <Reveal
          inView
          from="right"
          delay={0.15}
          className="relative pl-5 drop-shadow-mockup sm:pl-12 lg:absolute lg:top-[18%] lg:left-[54%] lg:w-[64%] lg:pl-0"
        >
          <div className="-mr-[20%] overflow-hidden rounded-tl-2xl border border-forest/10 bg-white lg:mr-0">
            <Image
              src="/images/carrier-broker.png"
              alt="Zineps partner dashboard for CarrierBroker B.V. with label totals, contracts and recent customers"
              width={2031}
              height={1380}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
