import Image from "next/image";
import { CheckCircleIcon } from "@phosphor-icons/react/ssr";
import { ArrowBadge } from "./ArrowBadge";
import { Badge } from "./Badge";
import { Button } from "./Button";

const features = [
  "Publish rates and conditions",
  "Manage contracts, customer groups and margins",
  "Invoice automatically per customer or shipment",
  "Onboard existing merchants onto Zineps",
  "Keep the commercial relationship",
];

/** Same content styling as the shipping tabs section, without the tabs. */
export function LogisticsPartners() {
  return (
    // Band starts white, so no top padding: the visible gap above stays exactly mt-section
    <section className="mt-section w-full bg-linear-to-b from-white to-surface-soft">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 px-4 pb-16 sm:gap-12 sm:pb-20 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-20 lg:pb-24">
        <div>
          <Badge>For logistics partners</Badge>
          <h2 className="mt-5 text-3xl font-medium text-balance text-ink">
            The operating system <br className="hidden sm:block" />
            for logistics providers
          </h2>
          <p className="mt-5 max-w-[520px] text-base text-pretty text-muted">
            Publish rates, manage contracts and margins, invoice, handle support, and onboard the
            merchants you already serve. They ship in Zineps. You keep the commercial relationship.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[15px] text-muted sm:text-base">
                <CheckCircleIcon size={20} className="mt-px shrink-0 text-soft sm:mt-0.5" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>

          <Button href="#" variant="ink" className="mt-10 pr-2.5">
            Become a partner
            <ArrowBadge className="text-ink" />
          </Button>
        </div>

        <Image
          src="/images/zineps-partnerpanel.svg"
          alt="Zineps partner panel with invoicing, customers, contracts, support and monthly shipment and revenue charts"
          width={1742}
          height={1156}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
