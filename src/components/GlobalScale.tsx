import { Badge } from "./Badge";
import { Globe } from "./Globe";

const statistics = [
  {
    value: "100+ million",
    description: "of economic value is annually created by merchants who ship via Zineps.",
    // Positions over the globe on desktop, from ref/globe.png
    position: "lg:left-[10%] lg:top-[10%]",
  },
  {
    value: "300+ million",
    description: "goods are transported yearly nationally and internationally with the help of Zineps.",
    position: "lg:right-[3%] lg:top-[32%]",
  },
  {
    value: "12+ million",
    description: "parcels are processed efficiently annually with the help of our system.",
    position: "lg:left-[4%] lg:top-[68%]",
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
          One infrastructure for global logistics. A platform for businesses that ship, and a network of
          logistics service providers that move their goods.
        </p>
      </div>

      <div className="relative mt-heading flex flex-col overflow-hidden rounded-[14px] bg-linear-to-b from-[#FDFDFD] to-[#E9E9E9] px-4 pt-6 sm:px-8 lg:block lg:px-0 lg:pt-28">
        {/* Stats sit on top of the globe on desktop; they stack above it on smaller screens */}
        <dl className="relative z-10 grid gap-3 sm:grid-cols-3 lg:static lg:block">
          {statistics.map((stat) => (
            <div
              key={stat.value}
              className={`flex flex-col-reverse rounded-2xl border-4 border-white bg-mint-mist px-5 py-4 shadow-border lg:absolute lg:z-10 lg:w-[320px] ${stat.position}`}
            >
              <dt className="mt-1 text-sm text-pretty text-muted">{stat.description}</dt>
              <dd className="text-2xl font-medium text-forest">{stat.value}</dd>
            </div>
          ))}
        </dl>

        {/* Only the top half of the globe shows: a 2:1 window over a square canvas */}
        <div className="relative mx-auto mt-10 aspect-[2/1] w-full max-w-[760px] overflow-hidden lg:mt-0">
          <Globe className="absolute inset-x-0 top-0" />
        </div>
      </div>
    </section>
  );
}
