import Image from "next/image";
import { ArrowBadge } from "./ArrowBadge";
import { Button } from "./Button";

type Logo = { file: string; name: string; ext?: "png" | "svg" };

// Logos from zineps.com/integrations, arranged in four floating columns
const columns: { logos: Logo[]; offset: string }[] = [
  {
    offset: "mt-0",
    logos: [
      { file: "shopify", name: "Shopify" },
      { file: "bolcom", name: "bol.com" },
      { file: "amazon", name: "Amazon" },
      { file: "exact", name: "Exact Online" },
      { file: "moneybird", name: "Moneybird", ext: "svg" },
    ],
  },
  {
    offset: "mt-14",
    logos: [
      { file: "woocommerce", name: "WooCommerce" },
      { file: "magento", name: "Magento" },
      { file: "picqer", name: "Picqer" },
      { file: "odoo", name: "Odoo" },
    ],
  },
  {
    offset: "mt-14",
    logos: [
      { file: "lightspeed", name: "Lightspeed" },
      { file: "kaufland", name: "Kaufland" },
      { file: "wix", name: "Wix" },
      { file: "snelstart", name: "SnelStart" },
    ],
  },
  {
    offset: "mt-0",
    logos: [
      { file: "temu", name: "Temu" },
      { file: "prestashop", name: "PrestaShop" },
      { file: "mirakl", name: "Mirakl" },
      { file: "dynamics", name: "Microsoft Dynamics" },
      { file: "ccvshop", name: "CCV Shop" },
    ],
  },
];

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <li className="flex size-20 items-center justify-center rounded-2xl bg-white p-3.5 shadow-border xl:size-24">
      <span className="relative block size-full">
        <Image
          src={`/images/integrations/${logo.file}.${logo.ext ?? "png"}`}
          alt={logo.name}
          fill
          sizes="96px"
          className="object-contain"
        />
      </span>
    </li>
  );
}

function Column({ logos, offset }: { logos: Logo[]; offset: string }) {
  return (
    <ul className={`flex flex-col gap-5 ${offset}`}>
      {logos.map((logo) => (
        <LogoTile key={logo.file} logo={logo} />
      ))}
    </ul>
  );
}

export function Integrations() {
  const [c1, c2, c3, c4] = columns;

  return (
    <section className="relative mx-auto mt-section w-full max-w-[1600px] overflow-hidden px-4 md:px-10 lg:px-20">
      <div className="grid items-center gap-12 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-10">
        {/* Left logo columns */}
        <div className="hidden gap-5 lg:flex" aria-hidden>
          <Column {...c1} />
          <Column {...c2} />
        </div>

        {/* Copy */}
        <div className="mx-auto flex max-w-[560px] flex-col items-center text-center">
          <h2 className="text-3xl font-medium text-balance text-ink">More than 100+ integrations</h2>
          <p className="mt-4 text-base text-pretty text-muted">
            Connect Zineps seamlessly with popular marketplaces, e-commerce platforms and logistics
            partners. Optimize your workflow, reduce your shipping costs and offer your customers a
            seamless shipping experience.
          </p>
          <Button href="#" variant="ink" className="mt-8 pr-2.5">
            View integrations
            <ArrowBadge className="text-ink" />
          </Button>

          {/* Compact logo grid on smaller screens */}
          <ul className="mt-10 flex flex-wrap justify-center gap-3 lg:hidden">
            {columns
              .flatMap((c) => c.logos)
              .slice(0, 12)
              .map((logo) => (
                <LogoTile key={logo.file} logo={logo} />
              ))}
          </ul>
        </div>

        {/* Right logo columns */}
        <div className="hidden gap-5 lg:flex" aria-hidden>
          <Column {...c3} />
          <Column {...c4} />
        </div>
      </div>
    </section>
  );
}
