import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";

// Duotone icon set preview. Not linked anywhere in the UI.
export const metadata: Metadata = {
  title: "Duotone icons — Zineps playground",
  robots: { index: false, follow: false },
};

const surfaces = [
  { name: "White", className: "bg-white shadow-border" },
  { name: "Mint mist", className: "bg-mint-mist" },
  { name: "Surface", className: "bg-surface" },
];

export default function IconsPlayground() {
  const dir = path.join(process.cwd(), "public", "icons", "duotone");
  const names: string[] = JSON.parse(fs.readFileSync(path.join(dir, "manifest.json"), "utf8"));

  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-16 md:px-10">
      <p className="text-sm font-medium text-green">Internal · not linked in the UI</p>
      <h1 className="mt-2 text-4xl font-medium text-ink">Duotone icons</h1>
      <p className="mt-3 max-w-[680px] text-pretty text-muted">
        {names.length} icons on a 24px grid with rounded 2px strokes. Primary is forest{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-[13px] text-ink">#4A7469</code>, secondary is a neutral light{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-[13px] text-ink">#DDE3E1</code>. Files live in{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-[13px] text-ink">public/icons/duotone</code>; when inlined, recolour
        with <code className="rounded bg-surface px-1.5 py-0.5 text-[13px] text-ink">--icon-primary</code> and{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-[13px] text-ink">--icon-secondary</code>.
      </p>

      {surfaces.map((surface) => (
        <section key={surface.name} className="mt-12">
          <h2 className="text-lg font-medium text-ink">On {surface.name.toLowerCase()}</h2>
          <ul className={`mt-4 grid grid-cols-3 gap-2 rounded-[20px] p-4 sm:grid-cols-5 lg:grid-cols-8 ${surface.className}`}>
            {names.map((name) => (
              <li key={name} className="flex flex-col items-center gap-2 rounded-xl py-4 transition-colors duration-150 hover:bg-black/[0.03]">
                <Image src={`/icons/duotone/${name}.svg`} alt="" width={32} height={32} unoptimized />
                <span className="text-xs text-soft">{name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mt-12">
        <h2 className="text-lg font-medium text-ink">Sizes</h2>
        <div className="mt-4 flex flex-wrap items-end gap-8 rounded-[20px] bg-white p-6 shadow-border">
          {[16, 20, 24, 32, 48].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Image src="/icons/duotone/package.svg" alt="" width={size} height={size} unoptimized />
              <span className="text-xs text-muted tabular-nums">{size}px</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
