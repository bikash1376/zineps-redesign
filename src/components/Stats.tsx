import { CountUp } from "./motion/CountUp";

const stats = [
  { value: 20, label: "Shipping partners" },
  { value: 200, label: "Destination countries" },
  { value: 1000, label: "Shipping methods" },
  { value: 100, label: "Integrations" },
];

export function Stats() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-3xl font-medium text-balance text-ink">
          Shipping for businesses around the world
        </h2>
        <p className="mt-4 text-base text-pretty text-muted">
          One network of carriers, lanes and integrations that grows with you.
        </p>
      </div>

      <dl className="mt-heading grid grid-cols-2 gap-x-4 gap-y-10 rounded-[14px] bg-linear-to-b from-green to-forest px-4 py-12 text-center inset-shadow-glow sm:px-6 sm:py-14 lg:grid-cols-4 lg:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="mt-2 text-sm font-medium text-mint sm:text-base">{stat.label}</dt>
            <dd className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
              <CountUp value={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
