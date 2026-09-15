import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { Badge } from "./Badge";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 pt-16 md:px-10 md:pt-[78px] lg:px-20">
      {/* <p className="text-base font-medium text-green">
        For businesses that ship, and the logistics partners that move their goods
      </p> */}
      <a href="https://www.zineps.com/newsroom/late-seed" className="group inline-flex">
        <Badge className="transition-[box-shadow] duration-150 ease-out group-hover:shadow-border-hover">
          <span aria-hidden>🚀</span>
          Post-seed round closed
          <span className="text-forest/40" aria-hidden>
            ·
          </span>
          Read more
          <ArrowRightIcon
            size={14}
            weight="bold"
            aria-hidden
            className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
          />
        </Badge>
      </a>
      <h1 className="mt-5 max-w-[20ch] text-3xl font-medium text-ink">
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
      <div className="dashboard-backdrop relative mt-14 overflow-hidden -mx-2 rounded-[14px] px-6 py-3 sm:-mx-6 sm:px-16 sm:py-8 lg:-mx-12 lg:px-32 lg:py-14">
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
    </section>
  );
}
