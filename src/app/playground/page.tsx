import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRightIcon, CaretDownIcon, CheckCircleIcon, TranslateIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PartnerRates } from "@/components/PartnerRates";
import { ShippingTabs } from "@/components/ShippingTabs";
import { Stats } from "@/components/Stats";
import { MarqueeLab } from "./MarqueeLab";

// Internal design-system reference. Not linked anywhere in the UI.
export const metadata: Metadata = {
  title: "Playground — Zineps design system",
  robots: { index: false, follow: false },
};

const colors = [
  { group: "Brand", token: "ink", hex: "#424242", use: "Headings, dark text, ink button" },
  { group: "Brand", token: "teal", hex: "#70cab9", use: "Primary button gradient top" },
  { group: "Brand", token: "mint", hex: "#d7f0ea", use: "Partner panel bg, active tab" },
  { group: "Brand", token: "mint-soft", hex: "#e4f4f0", use: "Soft mint surface" },
  { group: "Brand", token: "sage", hex: "#71b2a1", use: "Primary button border" },
  { group: "Brand", token: "green", hex: "#60948a", use: "Primary gradient bottom, stats band top, tab dot" },
  { group: "Brand", token: "forest", hex: "#4a7469", use: "Dark button, stats band bottom, pill text" },
  { group: "Brand", token: "pine", hex: "#3d5f56", use: "Dark button border" },
  { group: "Brand", token: "pine-deep", hex: "#2f4a42", use: "Deepest green" },
  { group: "Text", token: "body-mint", hex: "#4a5d58", use: "Body text on mint surfaces" },
  { group: "Neutral", token: "muted", hex: "#8a8a8a", use: "Body text on white" },
  { group: "Neutral", token: "subtle", hex: "#878787", use: "Secondary button text, language button" },
  { group: "Neutral", token: "soft", hex: "#6e6e6e", use: "Check icons, playground labels" },
  { group: "Neutral", token: "line", hex: "#e4e4e4", use: "Secondary button border" },
  { group: "Neutral", token: "line-soft", hex: "#ececec", use: "Secondary button gradient bottom" },
  { group: "Neutral", token: "surface", hex: "#f1f1f1", use: "Light grey surface" },
  { group: "Neutral", token: "surface-soft", hex: "#f7f7f7", use: "Shipping tabs section fade" },
  { group: "One-off", token: "[#eef0f1]", hex: "#eef0f1", use: "Nav link hover pill" },
];

const radii = [
  { size: "8px", cls: "rounded-lg", role: "Hover chips", where: "Nav link hover pill" },
  { size: "12px", cls: "rounded-xl", role: "Controls & flat media", where: "All buttons, language button, Automate tab image" },
  { size: "14px", cls: "rounded-[14px]", role: "Section containers", where: "Hero gradient box, partner panel, stats band" },
  { size: "16px", cls: "rounded-2xl / rounded-tl-2xl", role: "Floating chrome & framed screenshots", where: "Navbar pill, hero dashboard image, CarrierBroker mockup corner" },
  { size: "24px", cls: "rounded-[24px]", role: "Wrapped pill group", where: "Tab bar on mobile (when tabs wrap)" },
  { size: "9999px", cls: "rounded-full", role: "Pills & dots", where: "Tag pill, tab bar (≥sm), tabs, active dot, blobs" },
];

const shadows = [
  { token: "shadow-button", value: "0 2px 6px 0 rgb(0 0 0 / 0.08)", where: "Base of every Button (Figma: Start Shipping, secondary CTAs)", cls: "shadow-button" },
  { token: "shadow-nav", value: "0 2px 8px 0 rgb(0 0 0 / 0.08)", where: "Navbar pill (softened from Figma's 0.4)", cls: "shadow-nav" },
  { token: "shadow-card", value: "0 4px 8px 0 rgb(0 0 0 / 0.05)", where: "Partner tag pill, shipping tab bar, Automate tab image", cls: "shadow-card" },
  { token: "shadow-raised", value: "0 6px 20px 0 rgb(0 0 0 / 0.12)", where: "Partner shipping rates panel", cls: "shadow-raised" },
  { token: "drop-shadow-dashboard", value: "0 6px 6px rgb(0 0 0 / 0.08)", where: "Hero dashboard screenshot", cls: "drop-shadow-dashboard" },
  { token: "drop-shadow-mockup", value: "0 4px 4px rgb(0 0 0 / 0.08)", where: "CarrierBroker mockup", cls: "drop-shadow-mockup" },
  { token: "inset-shadow-glow", value: "inset 0 -4px 8px 0 rgb(112 202 185 / 0.5)", where: "Primary button, stats band", cls: "inset-shadow-glow bg-linear-to-b from-teal to-green" },
];

const motion = [
  { name: "Marquee loop", value: "40s linear infinite (--animate-marquee)", where: "Trusted by" },
  { name: "Marquee hover", value: "playbackRate 0.25 (no position jump)", where: "Trusted by" },
  { name: "Tab switch", value: "fade-in 0.35s ease-out, 6px rise (--animate-fade-in)", where: "Shipping tabs copy + image" },
  { name: "Nav hover", value: "::before scale 0.75 → 1 + opacity, 100ms ease", where: "Navbar links" },
  { name: "Reduced motion", value: "marquee paused", where: "prefers-reduced-motion" },
];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-line pt-12">
      <h2 className="text-2xl font-medium text-ink">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Table({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface-soft text-soft">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">{children}</tbody>
      </table>
    </div>
  );
}

function Code({ children }: { children: ReactNode }) {
  return <code className="rounded bg-surface px-1.5 py-0.5 text-[13px] text-ink">{children}</code>;
}

export default function Playground() {
  const nav = ["Colors", "Typography", "Buttons", "Badges", "Radius", "Shadows", "Surfaces", "Elements", "Marquee", "Motion", "Sections"];

  return (
    <main className="bg-[#fcfcfc] pb-32">
      <div className="mx-auto max-w-[1200px] px-4 pt-16 md:px-10">
        <p className="text-sm font-medium text-green">Internal · not linked in the UI</p>
        <h1 className="mt-2 text-4xl font-medium text-ink">Playground</h1>
        <p className="mt-3 max-w-[640px] text-muted">
          Every token and component used on the Zineps redesign, with where each value is applied.
        </p>
        <nav className="mt-6 flex flex-wrap gap-2">
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="rounded-full border border-line bg-white px-3 py-1 text-sm text-soft hover:text-ink"
            >
              {n}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-16">
          {/* Colors */}
          <Section id="colors" title="Colors">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {colors.map((c) => (
                <div key={c.token} className="overflow-hidden rounded-xl border border-line bg-white">
                  <div className="h-20" style={{ background: c.hex }} />
                  <div className="p-3 text-xs">
                    <p className="font-medium text-ink">{c.token}</p>
                    <p className="text-muted uppercase">{c.hex}</p>
                    <p className="mt-1 text-soft">{c.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Typography */}
          <Section id="typography" title="Typography">
            <p className="mb-6 text-sm text-soft">
              Inter (next/font), weights 400 / 500. Global tracking <Code>-0.0075em</Code> (Figma: −0.12px at 16px, −0.225px at 30px).
            </p>
            <Table head={["Sample", "Classes", "Where"]}>
              {[
                { s: <span className="text-3xl font-medium text-ink">The intelligent layer</span>, c: "text-3xl font-medium text-ink", w: "Hero h1, all section h2" },
                { s: <span className="text-6xl font-medium text-forest">1000+</span>, c: "text-5xl sm:text-6xl font-medium", w: "Stats numbers (white on band)" },
                { s: <span className="text-base text-muted">One dashboard and API for shipping.</span>, c: "text-base text-muted", w: "Hero + shipping tabs body" },
                { s: <span className="text-base text-body-mint">Partners already hold deals.</span>, c: "text-base text-body-mint", w: "Body on mint panel" },
                { s: <span className="text-base font-medium text-ink">Products</span>, c: "text-base font-medium text-ink", w: "Nav links, buttons" },
                { s: <span className="text-sm font-medium text-forest">Partner shipping rates</span>, c: "text-sm font-medium text-forest", w: "Tag pill, tabs" },
              ].map((r) => (
                <tr key={r.c}>
                  <td className="px-4 py-4">{r.s}</td>
                  <td className="px-4 py-4"><Code>{r.c}</Code></td>
                  <td className="px-4 py-4 text-soft">{r.w}</td>
                </tr>
              ))}
            </Table>
          </Section>

          {/* Buttons */}
          <Section id="buttons" title="Buttons">
            <p className="mb-6 text-sm text-soft">
              <Code>{"<Button variant=… />"}</Code> — base: <Code>h-[42px] rounded-xl px-6 text-base font-medium shadow-button</Code>
            </p>
            <Table head={["Preview", "Variant", "Styles", "Used in"]}>
              {[
                { v: "primary", label: "Start Shipping", s: "border-sage, gradient teal → green, inset-shadow-glow", u: "Hero, navbar Sign up (shadow-none)" },
                { v: "secondary", label: "I’m a logistics partner", s: "border-line 0.7px, gradient white → line-soft, text-subtle", u: "Hero" },
                { v: "dark", label: "Start free", s: "border-pine, gradient green → forest", u: "Partner rates", icon: true },
                { v: "outline", label: "How partner rates work", s: "border-forest/25, white, text-forest", u: "Available (removed from partner rates)" },
                { v: "ink", label: "Read More", s: "border-ink, bg-ink", u: "Shipping tabs", icon: true },
              ].map((b) => (
                <tr key={b.v}>
                  <td className="px-4 py-4">
                    <Button href="#" variant={b.v as "primary"}>
                      {b.label}
                      {b.icon && <ArrowRightIcon size={18} weight="bold" />}
                    </Button>
                  </td>
                  <td className="px-4 py-4"><Code>{b.v}</Code></td>
                  <td className="px-4 py-4 text-soft">{b.s}</td>
                  <td className="px-4 py-4 text-soft">{b.u}</td>
                </tr>
              ))}
            </Table>
          </Section>

          {/* Badges */}
          <Section id="badges" title="Badges & pills">
            <Table head={["Preview", "Name", "Classes", "Used in"]}>
              <tr>
                <td className="px-4 py-5">
                  <span className="inline-flex items-center rounded-full border border-forest/15 bg-white/70 px-4 py-1.5 text-sm font-medium text-forest shadow-card">
                    Partner shipping rates
                  </span>
                </td>
                <td className="px-4 py-5 font-medium text-ink">Section tag</td>
                <td className="px-4 py-5"><Code>rounded-full border-forest/15 bg-white/70 px-4 py-1.5 text-sm font-medium text-forest shadow-card</Code></td>
                <td className="px-4 py-5 text-soft">Partner rates (on mint)</td>
              </tr>
              <tr>
                <td className="px-4 py-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-medium text-forest">
                    <span className="size-1.5 rounded-full bg-green" />
                    Automate Shipping Process
                  </span>
                </td>
                <td className="px-4 py-5 font-medium text-ink">Tab — active</td>
                <td className="px-4 py-5"><Code>rounded-full bg-mint px-4 py-2 text-sm text-forest</Code> + 6px <Code>bg-green</Code> dot</td>
                <td className="px-4 py-5 text-soft">Shipping tabs</td>
              </tr>
              <tr>
                <td className="px-4 py-5">
                  <span className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-forest/80">
                    Transport Management & B2B shipping
                  </span>
                </td>
                <td className="px-4 py-5 font-medium text-ink">Tab — inactive</td>
                <td className="px-4 py-5"><Code>rounded-full px-4 py-2 text-sm text-forest/80 hover:text-forest</Code></td>
                <td className="px-4 py-5 text-soft">Shipping tabs</td>
              </tr>
              <tr>
                <td className="px-4 py-5">
                  <span className="inline-flex gap-1 rounded-full border border-black/5 bg-white p-1 shadow-card">
                    <span className="rounded-full bg-mint px-3 py-1.5 text-sm font-medium text-forest">One</span>
                    <span className="rounded-full px-3 py-1.5 text-sm font-medium text-forest/80">Two</span>
                  </span>
                </td>
                <td className="px-4 py-5 font-medium text-ink">Tab bar (group)</td>
                <td className="px-4 py-5"><Code>rounded-full sm / rounded-[24px] wrapped, border-black/5 bg-white p-1 shadow-card</Code></td>
                <td className="px-4 py-5 text-soft">Shipping tabs</td>
              </tr>
              <tr>
                <td className="px-4 py-5">
                  <span className="inline-flex rounded-lg bg-[#eef0f1] px-3 py-2 text-base font-medium text-ink">Pricing</span>
                </td>
                <td className="px-4 py-5 font-medium text-ink">Hover chip</td>
                <td className="px-4 py-5"><Code>rounded-lg bg-[#eef0f1] px-3 py-2</Code> (scale 0.75 → 1, 100ms)</td>
                <td className="px-4 py-5 text-soft">Navbar links on hover</td>
              </tr>
              <tr>
                <td className="px-4 py-5">
                  <span className="inline-flex items-center gap-1.5 text-base font-medium text-muted">
                    <span className="size-1.5 rounded-full bg-green" />
                    Status dot
                  </span>
                </td>
                <td className="px-4 py-5 font-medium text-ink">Dot indicator</td>
                <td className="px-4 py-5"><Code>size-1.5 rounded-full bg-green</Code></td>
                <td className="px-4 py-5 text-soft">Active tab marker</td>
              </tr>
            </Table>
          </Section>

          {/* Radius */}
          <Section id="radius" title="Border radius">
            <div className="mb-6 rounded-xl border border-line bg-white p-5 text-sm text-soft">
              <p className="font-medium text-ink">Formula</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Scale by role: <b>chips 8</b> → <b>controls 12</b> → <b>containers 14</b> → <b>floating chrome / screenshots 16</b> → <b>pills full</b>.</li>
                <li>Nested corners: <Code>inner = outer − inset</Code>. Partner panel 14px with a 6px white border → content corner ≈ 8px. Tab bar (full) with p-1 → tabs stay full.</li>
                <li>Screenshots that bleed off an edge only round the visible corner (<Code>rounded-tl-2xl</Code>).</li>
                <li>Defined but currently unused: <Code>rounded-section</Code> (20px), <Code>rounded-panel</Code> (36px).</li>
              </ul>
            </div>
            <Table head={["Preview", "Size", "Class", "Role", "Where"]}>
              {radii.map((r) => (
                <tr key={r.size}>
                  <td className="px-4 py-4">
                    <div className={`h-12 w-20 border border-forest/30 bg-mint ${r.cls.split(" ")[0]}`} />
                  </td>
                  <td className="px-4 py-4 font-medium text-ink">{r.size}</td>
                  <td className="px-4 py-4"><Code>{r.cls}</Code></td>
                  <td className="px-4 py-4 text-soft">{r.role}</td>
                  <td className="px-4 py-4 text-soft">{r.where}</td>
                </tr>
              ))}
            </Table>
          </Section>

          {/* Shadows */}
          <Section id="shadows" title="Shadows (from Figma Desktop - 5)">
            <Table head={["Preview", "Token", "Value", "Where"]}>
              {shadows.map((s) => (
                <tr key={s.token}>
                  <td className="px-4 py-6">
                    <div className={`h-14 w-24 rounded-xl ${s.token.startsWith("inset") ? "" : "bg-white"} ${s.cls}`} />
                  </td>
                  <td className="px-4 py-6"><Code>{s.token}</Code></td>
                  <td className="px-4 py-6 font-mono text-xs text-soft">{s.value}</td>
                  <td className="px-4 py-6 text-soft">{s.where}</td>
                </tr>
              ))}
            </Table>
          </Section>

          {/* Surfaces */}
          <Section id="surfaces" title="Surfaces & gradients">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="dashboard-backdrop h-48 rounded-[14px]" />
                <p className="mt-3 text-sm font-medium text-ink">Dashboard backdrop</p>
                <p className="text-sm text-soft"><Code>.dashboard-backdrop</Code> — #F7FAF9 → #3B5C53, 13 stops. Hero.</p>
              </div>
              <div>
                <div className="relative h-48 overflow-hidden rounded-[14px] border-6 border-white bg-mint shadow-raised">
                  <span className="absolute -top-16 left-6 size-32 rounded-full bg-white/50" />
                  <span className="absolute -right-10 -bottom-12 size-32 rounded-full bg-white/50" />
                </div>
                <p className="mt-3 text-sm font-medium text-ink">Mint panel</p>
                <p className="text-sm text-soft">bg-mint, 6px white border, shadow-raised, white/50 blobs (192px). Partner rates.</p>
              </div>
              <div>
                <div className="h-48 rounded-[14px] bg-linear-to-b from-green to-forest inset-shadow-glow" />
                <p className="mt-3 text-sm font-medium text-ink">Stats band</p>
                <p className="text-sm text-soft">Gradient green → forest + inset-shadow-glow. Stats.</p>
              </div>
              <div className="md:col-span-3">
                <div className="h-24 rounded-[14px] border border-line bg-linear-to-b from-white to-surface-soft" />
                <p className="mt-3 text-sm font-medium text-ink">Section fade</p>
                <p className="text-sm text-soft">white → surface-soft, full width. Shipping tabs.</p>
              </div>
            </div>
          </Section>

          {/* Elements */}
          <Section id="elements" title="Small elements">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-line bg-white p-6">
                <p className="mb-4 text-sm text-soft">Language button (navbar) — Translate 25px + CaretDown 14px bold</p>
                <span className="inline-flex h-[42px] items-center justify-center gap-1.5 rounded-xl border-[0.7px] border-line bg-linear-to-b from-white to-line-soft px-3.5 text-subtle">
                  <TranslateIcon size={25} className="block shrink-0" />
                  <CaretDownIcon size={14} weight="bold" className="block shrink-0" />
                </span>
              </div>
              <div className="rounded-xl border border-line bg-white p-6">
                <p className="mb-4 text-sm text-soft">Checklist item (Phosphor CheckCircle 20px, text-soft)</p>
                <p className="flex items-center gap-3 text-base text-muted">
                  <CheckCircleIcon size={20} className="shrink-0 text-soft" />
                  Label generation
                </p>
              </div>
              <div className="rounded-xl border border-line bg-white p-6">
                <p className="mb-4 text-sm text-soft">Stat (dl / dd)</p>
                <div className="inline-flex flex-col rounded-xl bg-linear-to-b from-green to-forest px-8 py-5 text-center">
                  <span className="text-4xl font-medium text-white">200+</span>
                  <span className="mt-1 text-sm font-medium text-mint">Destination countries</span>
                </div>
              </div>
            </div>
          </Section>

          {/* Marquee */}
          <Section id="marquee" title="Marquee">
            <MarqueeLab />
          </Section>

          {/* Motion */}
          <Section id="motion" title="Motion">
            <Table head={["Name", "Value", "Where"]}>
              {motion.map((m) => (
                <tr key={m.name}>
                  <td className="px-4 py-4 font-medium text-ink">{m.name}</td>
                  <td className="px-4 py-4"><Code>{m.value}</Code></td>
                  <td className="px-4 py-4 text-soft">{m.where}</td>
                </tr>
              ))}
            </Table>
          </Section>

          <Section id="sections" title="Sections (live)">
            <p className="text-sm text-soft">Full components as rendered on the home page. Hover the nav links to see the hover pill.</p>
          </Section>
        </div>
      </div>

      <div className="mt-8 space-y-4 bg-white pb-8">
        <Navbar />
        <Hero />
        <PartnerRates />
        <Stats />
        <ShippingTabs />
      </div>
    </main>
  );
}
