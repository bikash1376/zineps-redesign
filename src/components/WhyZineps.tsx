import { Badge } from "./Badge";
import { ClayBento } from "./ClayBento";

/** “Why Zineps” — section heading + the Clay bento (promoted from /playground/bento). */
export function WhyZineps() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="flex flex-col items-center text-center">
        <Badge>Why Zineps</Badge>
        <h2 className="mt-5 text-3xl font-medium text-balance text-ink">
          Everything you need for <br className="hidden sm:block" />
          successful shipping
        </h2>
      </div>

      <div className="mx-auto mt-heading max-w-[1200px]">
        <ClayBento />
      </div>
    </section>
  );
}
