import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 pt-16 md:px-10 md:pt-[78px] lg:px-20">
      <p className="text-base font-medium text-green">
        For businesses that ship, and the logistics partners that move their goods
      </p>
      <h1 className="mt-2.5 max-w-[20ch] text-3xl font-medium text-ink">
        The intelligent layer <br className="hidden sm:block" />
        for global logistics
      </h1>
      <p className="mt-5 max-w-[574px] text-base text-muted">
        One dashboard and API for shipping. Access competitive rates through our logistics partner
        network, your own carrier contracts, or both.
      </p>
      <div className="mt-8 flex flex-wrap gap-[23px]">
        <Button href="#">Start Shipping</Button>
        <Button href="#" variant="secondary">
          I’m a logistics partner
        </Button>
      </div>

      {/* Dashboard showcase */}
      <div className="dashboard-backdrop relative mt-14 overflow-hidden rounded-[14px] p-4 sm:p-10 lg:p-20">
        <div className="relative overflow-hidden rounded-2xl bg-white">
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
    </section>
  );
}
