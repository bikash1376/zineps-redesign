import { Badge } from "./Badge";
import { ParallaxBlobs } from "./motion/ParallaxBlobs";
import { SubscribeForm } from "./SubscribeForm";

// Same decorative circles as the partner rates panel (Figma Desktop - 4)
const blobs = [
  { left: "-9.3%", top: "62%", depth: 1.2 },
  { left: "15.2%", top: "-34%", depth: 0.8 },
  { left: "80%", top: "-30%", depth: 1 },
  { left: "90%", top: "-22%", depth: 1.6 },
  { left: "72%", top: "86%", depth: 0.7 },
  { left: "86.5%", top: "76%", depth: 1.3 },
];

export function Differentiation() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="relative overflow-hidden rounded-[14px] border-4 border-white bg-mint sm:border-6 px-5 py-16 text-center shadow-raised sm:px-6 sm:py-24">
        <ParallaxBlobs blobs={blobs} />

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
