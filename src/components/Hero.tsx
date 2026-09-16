import Image from "next/image";
import { Button } from "./Button";
import { Reveal } from "./motion/Reveal";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 pt-8 md:px-10 md:pt-12 lg:px-20">
      <p className="text-base font-medium text-green">
        For businesses that ship, and the logistics partners that move their goods
      </p>

      {/* Block-level float-up, staggered ~100ms: title → copy → actions → dashboard */}
      <Reveal>
        <h1 className="max-w-[20ch] text-3xl font-medium text-ink">
          The intelligent layer <br className="hidden sm:block" />
          for global logistics
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-[574px] text-base text-pretty text-muted">
          One dashboard and API for shipping. Access competitive rates through our logistics partner
          network, your own carrier contracts, or both.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-8 flex flex-wrap gap-[23px]">
          <Button href="#">Start Shipping</Button>
          <Button href="#" variant="secondary">
            I’m a logistics partner
          </Button>
        </div>
      </Reveal>

      {/* Dashboard showcase */}
      <Reveal delay={0.3}>
        <div className="dashboard-backdrop relative -mx-2 mt-14 overflow-hidden rounded-[14px] px-6 py-3 sm:-mx-6 sm:px-16 sm:py-8 lg:-mx-12 lg:px-32 lg:py-14">
          <div className="relative overflow-hidden rounded-2xl bg-white drop-shadow-dashboard">
            <Image
              src="/images/dashboard.png"
              alt="Zineps dashboard showing open orders, updates and recent shipments"
              width={1104}
              height={756}
              className="h-auto w-full"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/0 from-60% to-white to-[115%]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
