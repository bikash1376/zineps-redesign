const stats = [
  { value: "20+", label: "Shipping partners" },
  { value: "200+", label: "Destination countries" },
  { value: "1000+", label: "Shipping methods" },
];

export function Stats() {
  return (
    <section className="mx-auto mt-24 w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <h2 className="text-center text-3xl font-medium text-ink">
        Shipping for businesses around the world
      </h2>

      <dl className="mt-10 grid gap-10 rounded-[14px] bg-linear-to-b from-green to-forest px-6 py-12 text-center inset-shadow-glow sm:grid-cols-3 sm:gap-6 sm:py-14">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="mt-2 text-base font-medium text-mint">{stat.label}</dt>
            <dd className="text-5xl font-medium text-white sm:text-6xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
