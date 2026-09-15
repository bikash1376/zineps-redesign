import { ChatsCircleIcon, CpuIcon, HandshakeIcon, UsersThreeIcon } from "@phosphor-icons/react/ssr";
import { Badge } from "./Badge";
import { SubscribeForm } from "./SubscribeForm";

const tiles = [
  {
    title: "Building together",
    description: "We build together with our customers and continuously improve based on their feedback.",
    icon: UsersThreeIcon,
  },
  {
    title: "Personal contact",
    description:
      "At Zineps, we stay close to our customers. We listen, think along, and provide tailored support, so no one is left alone.",
    icon: ChatsCircleIcon,
  },
  {
    title: "Strong partnerships",
    description:
      "Together with our partners, we offer competitive rates, smart workflows, and valuable advice for both online stores and logistics providers.",
    icon: HandshakeIcon,
  },
  {
    title: "Focus on technology",
    description: "We build tools that make e-commerce and logistics faster and easier.",
    icon: CpuIcon,
  },
];

// Same decorative circles as the partner rates panel (Figma Desktop - 4)
const blobs = [
  { left: "-9.3%", top: "62%" },
  { left: "15.2%", top: "-34%" },
  { left: "80%", top: "-30%" },
  { left: "90%", top: "-22%" },
  { left: "72%", top: "86%" },
  { left: "86.5%", top: "76%" },
];

export function Differentiation() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="relative overflow-hidden rounded-[14px] border-6 border-white bg-mint px-6 py-20 text-center shadow-raised sm:py-24">
        {blobs.map((blob, i) => (
          <span
            key={i}
            aria-hidden
            className="pointer-events-none absolute size-48 rounded-full bg-white/50"
            style={{ left: blob.left, top: blob.top }}
          />
        ))}

        <div className="relative mx-auto max-w-[560px]">
          <Badge>This makes us different</Badge>
          <h2 className="mt-5 text-3xl font-medium text-balance text-ink">
            An approach that goes beyond the standard
          </h2>
          <p className="mt-4 text-base text-pretty text-body-mint">
            We set a new standard in shipping technology. With a focus on innovation, collaboration, and
            customer-centricity, we help e-commerce and logistics operate smarter and future-proof. Stay
            updated.
          </p>
          <SubscribeForm />
        </div>
      </div>

      <ul className="mt-heading grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <li key={tile.title} className="rounded-[20px] bg-mint-mist p-6 shadow-border">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white text-forest shadow-border">
              <tile.icon size={20} aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-medium text-ink">{tile.title}</h3>
            <p className="mt-1.5 text-[15px] text-pretty text-muted">{tile.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
