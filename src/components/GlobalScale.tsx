import { Badge } from "./Badge";
import { Globe } from "./Globe";

const statistics = [
  {
    value: "100+ million",
    description: "of economic value is annually created by merchants who ship via Zineps.",
  },
  {
    value: "300+ million",
    description: "goods are transported yearly nationally and internationally with the help of Zineps.",
  },
  {
    value: "12+ million",
    description: "parcels are processed efficiently annually with the help of our system.",
  },
];

export function GlobalScale() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <Badge>Global scale</Badge>
        <h2 className="mt-5 text-3xl font-medium text-balance text-ink">
          The intelligent layer behind global logistics
        </h2>
        <p className="mt-4 text-base text-pretty text-muted">
          One infrastructure for global logistics. A platform for businesses that ship, and a network
          of logistics service providers that move their goods. Our intelligent matching engine
          connects you with partners at competitive shipping rates, your own contracts, or both.
        </p>
      </div>

      <div className="mx-auto mt-heading grid max-w-[1200px] items-center gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <dl className="grid gap-4">
          {statistics.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col-reverse rounded-[20px] bg-mint-mist p-6 shadow-border"
            >
              <dt className="mt-1.5 text-[15px] text-pretty text-muted">{stat.description}</dt>
              <dd className="text-3xl font-medium text-forest">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="relative overflow-hidden rounded-[20px] bg-linear-to-b from-mint-mist to-white shadow-border">
          <Globe className="mx-auto max-w-[620px] translate-y-[8%] px-6" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-white/0 to-white"
          />
        </div>
      </div>
    </section>
  );
}
