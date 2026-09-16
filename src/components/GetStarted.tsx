import { ArrowBadge } from "./ArrowBadge";
import { Button } from "./Button";
import { ParallaxBlobs } from "./motion/ParallaxBlobs";

/** Closing banner on the same green gradient + glow as the stats band. */
export function GetStarted() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="relative overflow-hidden rounded-[14px] bg-linear-to-b from-green to-forest px-6 py-16 text-center inset-shadow-glow sm:px-12 lg:py-20">
        <ParallaxBlobs
          blobs={[
            { className: "-top-24 -left-16 size-72 bg-white/5", depth: 1 },
            { className: "-right-20 -bottom-28 size-80 bg-white/5", depth: 1.5 },
          ]}
        />

        <div className="relative mx-auto max-w-[600px]">
          <h2 className="text-3xl font-medium text-balance text-white">Get started right away?</h2>
          <p className="mt-4 text-base text-pretty text-mint">
            Create an account to get started or contact us for a customized solution for your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="#" variant="light" className="pr-2.5">
              Start your trial
              <ArrowBadge className="bg-forest! text-white" />
            </Button>
            <Button href="#" variant="outline-light">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
