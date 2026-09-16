import { Badge } from "./Badge";
import { SubscribeForm } from "./SubscribeForm";

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
    </section>
  );
}
