import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { IsoStorefront, IsoTruck } from "./IsoArt";
import { StorefrontPathIcon, TruckPathIcon } from "./motion/PathIcons";

const paths = [
  {
    title: "For businesses that ship",
    description:
      "Start shipping in minutes, including partner shipping rates, your own contracts, or both.",
    href: "#",
    icon: StorefrontPathIcon,
    Art: IsoStorefront,
  },
  {
    title: "For logistics partners",
    description:
      "Digitize your offering, serve the customers you already have, and bring them onto Zineps.",
    href: "#",
    icon: TruckPathIcon,
    Art: IsoTruck,
  },
];

export function StartWhereYouAre() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Badge>Software, network, and intelligence</Badge>
          <h2 className="mt-5 text-3xl font-medium text-balance text-ink">Start where you are</h2>
          <p className="mt-4 max-w-[480px] text-base text-pretty text-muted">
            Merchants start shipping in minutes, including partner rates. Logistics partners
            digitize their offering and bring their merchants with them.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-[23px]">
            <Button href="#" className="max-sm:h-10 max-sm:px-3.5 max-sm:text-sm">
              Start shipping
            </Button>
            <Button
              href="#"
              variant="secondary"
              className="max-sm:h-10 max-sm:px-3.5 max-sm:text-sm"
            >
              I’m a logistics partner
            </Button>
          </div>
        </div>

        <ul className="grid gap-4">
          {paths.map((path) => (
            <li key={path.title}>
              <a
                href={path.href}
                className="group relative flex items-start gap-4 overflow-hidden rounded-[20px] bg-mint-mist p-5 shadow-border transition-[box-shadow] duration-150 ease-out hover:shadow-border-hover sm:min-h-[168px] sm:gap-5 sm:p-6 sm:pr-48"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-forest shadow-border">
                  <path.icon size={22} />
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-2 text-lg font-medium text-ink">
                    {path.title}
                    <ArrowRightIcon
                      size={18}
                      aria-hidden
                      className="shrink-0 text-forest transition-transform duration-150 ease-out group-hover:translate-x-1"
                    />
                  </span>
                  <span className="mt-1 block text-[15px] text-pretty text-muted">
                    {path.description}
                  </span>
                </span>
                <path.Art className="pointer-events-none absolute -right-3 -bottom-5 hidden h-auto w-44 sm:block" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
