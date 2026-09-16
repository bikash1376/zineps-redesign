import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CaretDownIcon, CheckCircleIcon, TranslateIcon } from "@phosphor-icons/react/ssr";
import { ArrowBadge } from "@/components/ArrowBadge";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Differentiation } from "@/components/Differentiation";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { GetStarted } from "@/components/GetStarted";
import { GlobalScale } from "@/components/GlobalScale";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { LogisticsPartners } from "@/components/LogisticsPartners";
import { CountUp } from "@/components/motion/CountUp";
import { MagneticLogo } from "@/components/motion/MagneticLogo";
import { Navbar } from "@/components/Navbar";
import { PartnerRates } from "@/components/PartnerRates";
import { RecentNews } from "@/components/RecentNews";
import { ShippingAI } from "@/components/ShippingAI";
import { ShippingTabs } from "@/components/ShippingTabs";
import { StartWhereYouAre } from "@/components/StartWhereYouAre";
import { Stats } from "@/components/Stats";
import { SubscribeForm } from "@/components/SubscribeForm";
import { WhyZineps } from "@/components/WhyZineps";
import { MarqueeLab } from "./MarqueeLab";

// Internal design-system reference. Not linked anywhere in the UI.
export const metadata: Metadata = {
  title: "Playground — Zineps design system",
  robots: { index: false, follow: false },
};

const colors = [
  { token: "ink", hex: "#424242", use: "Headings, dark text, ink button" },
  { token: "teal", hex: "#70cab9", use: "Primary button gradient top" },
  { token: "mint", hex: "#d7f0ea", use: "Partner + differentiation panels, active tab pill" },
  { token: "mint-soft", hex: "#e4f4f0", use: "Status pills, icon chips" },
  { token: "mint-mist", hex: "#eff7f4", use: "Bento cards, globe stats, news card frame, FAQ open row" },
  { token: "green", hex: "#60948a", use: "Primary gradient bottom, dark/email button top, stats band" },
  { token: "forest", hex: "#4a7469", use: "Dark/email button bottom, badge text, stat numbers" },
  { token: "pine", hex: "#3d5f56", use: "Deep green" },
  { token: "pine-deep", hex: "#2f4a42", use: "Deepest green" },
  { token: "chart", hex: "#339c84", use: "Bento bar chart + uptime bars (validated)" },
  { token: "body-mint", hex: "#4a5d58", use: "Body text on mint surfaces" },
  { token: "muted", hex: "#8a8a8a", use: "Body text on white" },
  { token: "subtle", hex: "#878787", use: "Secondary button + language button text" },
  { token: "soft", hex: "#6e6e6e", use: "Check icons, Shipping AI copy" },
  { token: "line", hex: "#e4e4e4", use: "Secondary button border, dividers" },
  { token: "line-soft", hex: "#ececec", use: "Secondary button gradient bottom" },
  { token: "surface", hex: "#f1f1f1", use: "Shipping AI panel" },
  { token: "surface-soft", hex: "#f7f7f7", use: "Section fade, AI note" },
  { token: "[#f4f5f5]", hex: "#f4f5f5", use: "Nav link hover pill" },
  { token: "[#f4f4f4]", hex: "#f4f4f4", use: "shadow-frame hairline" },
  { token: "[#a4a9b5]", hex: "#a4a9b5", use: "shadow-frame drop-shadow tint" },
];

const radii = [
  { size: "6px", cls: "rounded-md", role: "Inset control", where: "Email submit button (12px field − 6px inset)" },
  { size: "8px", cls: "rounded-lg", role: "Hover chips, rows", where: "Nav link hover pill, AI carrier rows" },
  { size: "12px", cls: "rounded-xl", role: "Controls & inner visuals", where: "Buttons, language/menu buttons, bento inner panels, logo tiles" },
  { size: "14px", cls: "rounded-[14px]", role: "Section containers", where: "Hero gradient, partner, Shipping AI, stats band, globe panel, differentiation, Get started" },
  { size: "16px", cls: "rounded-2xl", role: "Floating chrome", where: "Navbar pill, hero dashboard image, mobile menu, xl logo tiles" },
  { size: "20px", cls: "rounded-[20px]", role: "Cards", where: "Bento cards, news cards, recommendation card corner" },
  { size: "24px", cls: "rounded-3xl", role: "Framed stat cards, accordion", where: "Globe stat cards, FAQ rows" },
  { size: "9999px", cls: "rounded-full", role: "Pills & dots", where: "Badges, tab bar + tabs, arrow badge, blobs, carousel arrows" },
];

const shadows = [
  { token: "shadow-button", value: "0 2px 6px rgb(0 0 0 / .08)", where: "Secondary, outline, ink buttons", cls: "shadow-button" },
  { token: "shadow-nav", value: "0 2px 8px rgb(0 0 0 / .08)", where: "Navbar pill, green CTAs, language + menu buttons", cls: "shadow-nav" },
  { token: "shadow-card", value: "0 4px 8px rgb(0 0 0 / .05)", where: "Badges, shipping tab bar, Automate image", cls: "shadow-card" },
  { token: "shadow-raised", value: "0 6px 20px rgb(0 0 0 / .12)", where: "Partner + differentiation panels, mobile menu", cls: "shadow-raised" },
  { token: "shadow-border", value: "1px ring 6% + 0 1px 2px -1px 6% + 0 2px 4px 4%", where: "Bento cards, tiles, FAQ open row, news arrows, subscribe field", cls: "shadow-border" },
  { token: "shadow-frame", value: "0 0 0 1px #F4F4F4 + #A4A9B5 (0 1 1 12%, 0 4 12 10%, 0 2 4 10%)", where: "Globe stat cards, news cards", cls: "shadow-frame" },
  { token: "ring-[0.7px] ring-black/8", value: "0 0 0 .7px rgb(0 0 0 / .08)", where: "Navbar Sign up (matches pill hairline)", cls: "ring-[0.7px] ring-black/8" },
  { token: "drop-shadow-dashboard", value: "0 6px 6px rgb(0 0 0 / .08)", where: "Hero dashboard screenshot", cls: "drop-shadow-dashboard" },
  { token: "drop-shadow-mockup", value: "0 4px 4px rgb(0 0 0 / .08)", where: "CarrierBroker mockup", cls: "drop-shadow-mockup" },
  { token: "inset-shadow-glow", value: "inset 0 -4px 8px rgb(112 202 185 / .5)", where: "Primary buttons, stats band, Get started banner", cls: "inset-shadow-glow bg-linear-to-b from-teal to-green" },
];

const spacing = [
  { token: "mt-section", desktop: "164px", tablet: "124px", phone: "96px", where: "Gap between every section after the hero" },
  { token: "mt-heading", desktop: "64px", tablet: "52px", phone: "40px", where: "Section heading/subtitle → content (globe uses 40px)" },
];

const motion = [
  { name: "Hero float-up", value: "opacity + 16px rise + 4px blur, 0.5s easeOut, 100ms stagger, once on load", where: "Reveal" },
  { name: "Bento float-up", value: "Same, once when scrolled into view", where: "Reveal inView" },
  { name: "Stat roll-up", value: "0 → value, 1.4s expo-out, once in view, tabular digits", where: "CountUp" },
  { name: "Tab switch", value: "Slide 32px by direction + blur, 0.3s in / 0.15s out; pill glides (spring 0.35s, bounce 0)", where: "ShippingTabs" },
  { name: "CTA arrow", value: "arrow-shoot on hover, arrow-shoot-back on leave, 0.55s", where: "ShootingArrow (ArrowBadge, email button)" },
  { name: "Magnetic logos", value: "Follow cursor 35%, spring 260/18, scale 1.06", where: "MagneticLogo" },
  { name: "Nav hover", value: "::before scale 0.75 → 1 + fade, 100ms ease", where: "Navbar links" },
  { name: "Button press", value: "scale 0.96, 150ms ease-out", where: "Button, arrows, menu toggle" },
  { name: "FAQ", value: "grid-rows 0fr → 1fr + plus→minus, 300ms ease-out", where: "FAQ" },
  { name: "Marquee", value: "40s linear, hover playbackRate 0.25", where: "TrustedBy" },
  { name: "Globe", value: "cobe, phi += 0.005/frame, spring drag, paused off screen / hidden tab", where: "Globe" },
  { name: "Reduced motion", value: "MotionConfig reducedMotion=user; motion-safe arrows; marquee paused", where: "Global" },
];

const buttonVariants = [
  { v: "primary", label: "Start shipping", s: "teal → green, inset glow, shadow-nav, no border", u: "Hero, navbar Sign up, Start where you are", arrow: false },
  { v: "secondary", label: "I’m a logistics partner", s: "0.7px line border, white → line-soft, shadow-button", u: "Hero, Start where you are", arrow: false },
  { v: "dark", label: "Start free", s: "green → forest, shadow-nav, no border", u: "Partner rates", arrow: "text-forest" },
  { v: "outline", label: "How partner rates work", s: "forest/25 border, white, shadow-button", u: "Available", arrow: false },
  { v: "ink", label: "Read More", s: "ink bg + border, shadow-button", u: "Shipping tabs, Shipping AI, partners, integrations", arrow: "text-ink" },
] as const;

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line pt-12">
      <h2 className="text-2xl font-medium text-ink">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Table({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface-soft text-soft">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium whitespace-nowrap">
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
  const nav = ["Colors", "Typography", "Buttons", "Badges", "Radius", "Shadows", "Spacing", "Surfaces", "Elements", "Marquee", "Motion", "Sections"];

  return (
    <>
      <main className="bg-[#fcfcfc] pb-8">
        <div className="mx-auto max-w-[1200px] px-4 pt-16 pb-16 md:px-10">
          <p className="text-sm font-medium text-green">Internal · not linked in the UI</p>
          <h1 className="mt-2 text-4xl font-medium text-ink">Playground</h1>
          <p className="mt-3 max-w-[640px] text-pretty text-muted">
            Every token, component and interaction used on the Zineps redesign, with where each is applied.
          </p>
          <nav className="mt-6 flex flex-wrap gap-2">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="rounded-full bg-white px-3 py-1 text-sm text-soft shadow-border hover:text-ink"
              >
                {n}
              </a>
            ))}
          </nav>

          <div className="mt-12 space-y-16">
            <Section id="colors" title="Colors">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {colors.map((c) => (
                  <div key={c.token} className="overflow-hidden rounded-xl bg-white shadow-border">
                    <div className="h-20" style={{ background: c.hex }} />
                    <div className="p-3 text-xs">
                      <p className="font-medium text-ink">{c.token}</p>
                      <p className="text-muted uppercase">{c.hex}</p>
                      <p className="mt-1 text-pretty text-soft">{c.use}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-soft">
                Gradients: hero backdrop <Code>.dashboard-backdrop</Code> (#F7FAF9 → #3B5C53), globe panel{" "}
                <Code>#FDFDFD → #E9E9E9</Code>, stats band <Code>green → forest</Code>.
              </p>
            </Section>

            <Section id="typography" title="Typography">
              <p className="mb-6 text-sm text-soft">
                Inter 400 / 500, global tracking <Code>-0.0075em</Code>. Headings <Code>text-balance</Code>, body{" "}
                <Code>text-pretty</Code>, changing numbers <Code>tabular-nums</Code>.
              </p>
              <Table head={["Sample", "Classes", "Where"]}>
                {[
                  { s: <span className="text-3xl font-medium text-ink">The intelligent layer</span>, c: "text-3xl font-medium text-ink", w: "Hero h1, every section h2" },
                  { s: <span className="text-base text-muted">Brands and webshops that ship with Zineps.</span>, c: "text-base text-muted (mt-4)", w: "Section subtitles, hero copy" },
                  { s: <span className="text-6xl font-medium text-forest tabular-nums">1,000+</span>, c: "text-4xl sm:text-5xl lg:text-6xl", w: "Stats band numbers" },
                  { s: <span className="text-2xl font-medium text-forest">300+ million</span>, c: "text-2xl font-medium text-forest", w: "Globe stat cards" },
                  { s: <span className="text-lg font-medium text-ink">Real-time insights</span>, c: "text-lg font-medium text-ink", w: "Bento + card titles, FAQ questions" },
                  { s: <span className="text-[15px] text-muted">Track your shipping performance.</span>, c: "text-[15px] text-muted", w: "Card descriptions" },
                  { s: <span className="text-sm font-medium text-forest">Partner shipping rates</span>, c: "text-sm font-medium text-forest", w: "Badges, tabs" },
                ].map((r) => (
                  <tr key={r.c}>
                    <td className="px-4 py-4">{r.s}</td>
                    <td className="px-4 py-4"><Code>{r.c}</Code></td>
                    <td className="px-4 py-4 text-soft">{r.w}</td>
                  </tr>
                ))}
              </Table>
            </Section>

            <Section id="buttons" title="Buttons">
              <p className="mb-6 text-sm text-soft">
                <Code>{"<Button variant=… />"}</Code> base: <Code>h-[42px] rounded-xl px-6 font-medium active:scale-[0.96]</Code>. CTAs
                with <Code>{"<ArrowBadge />"}</Code> get the shooting arrow — hover and leave to see both directions.
              </p>
              <Table head={["Preview", "Variant", "Styles", "Used in"]}>
                {buttonVariants.map((b) => (
                  <tr key={b.v}>
                    <td className="px-4 py-4">
                      <Button href="#" variant={b.v} className={b.arrow ? "pr-2.5" : ""}>
                        {b.label}
                        {b.arrow && <ArrowBadge className={b.arrow} />}
                      </Button>
                    </td>
                    <td className="px-4 py-4"><Code>{b.v}</Code></td>
                    <td className="px-4 py-4 text-soft">{b.s}</td>
                    <td className="px-4 py-4 text-soft">{b.u}</td>
                  </tr>
                ))}
                <tr>
                  <td className="bg-linear-to-b from-green to-forest px-4 py-4">
                    <div className="flex flex-wrap gap-3">
                      <Button href="#" variant="light" className="pr-2.5">
                        Start your trial
                        <ArrowBadge className="bg-forest! text-white" />
                      </Button>
                      <Button href="#" variant="outline-light">Contact us</Button>
                    </div>
                  </td>
                  <td className="px-4 py-4"><Code>light</Code> / <Code>outline-light</Code></td>
                  <td className="px-4 py-4 text-soft">White / white-40 outline, for dark green surfaces</td>
                  <td className="px-4 py-4 text-soft">Get started banner</td>
                </tr>
              </Table>
            </Section>

            <Section id="badges" title="Badges & pills">
              <Table head={["Preview", "Name", "Classes", "Used in"]}>
                <tr>
                  <td className="px-4 py-5"><Badge>Partner shipping rates</Badge></td>
                  <td className="px-4 py-5 font-medium text-ink">Badge (shared)</td>
                  <td className="px-4 py-5"><Code>rounded-full border-forest/15 bg-white/70 px-4 py-1.5 text-sm text-forest shadow-card</Code></td>
                  <td className="px-4 py-5 text-soft">Every section eyebrow, bento card labels</td>
                </tr>
                <tr>
                  <td className="px-4 py-5">
                    <span className="inline-flex gap-1 rounded-full border border-black/5 bg-white p-1 shadow-card">
                      <span className="rounded-full bg-mint px-4 py-2 text-sm font-medium text-forest">Active</span>
                      <span className="rounded-full px-4 py-2 text-sm font-medium text-forest/70">Inactive</span>
                    </span>
                  </td>
                  <td className="px-4 py-5 font-medium text-ink">Tab bar</td>
                  <td className="px-4 py-5"><Code>bg-mint pill (layoutId glide), no dot</Code></td>
                  <td className="px-4 py-5 text-soft">Shipping tabs</td>
                </tr>
                <tr>
                  <td className="px-4 py-5">
                    <span className="inline-flex rounded-lg bg-[#f4f5f5] px-3 py-2 text-base font-medium text-ink">Pricing</span>
                  </td>
                  <td className="px-4 py-5 font-medium text-ink">Nav hover chip</td>
                  <td className="px-4 py-5"><Code>rounded-lg bg-[#f4f5f5] px-3 py-2</Code></td>
                  <td className="px-4 py-5 text-soft">Navbar links</td>
                </tr>
                <tr>
                  <td className="px-4 py-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-2.5 py-0.5 text-xs font-medium text-forest">
                      <CheckCircleIcon size={14} weight="bold" aria-hidden />
                      Delivered
                    </span>{" "}
                    <span className="ml-2 inline-flex rounded-full bg-forest px-2 py-0.5 text-[11px] font-medium text-white">Recommended</span>
                  </td>
                  <td className="px-4 py-5 font-medium text-ink">Status / Recommended</td>
                  <td className="px-4 py-5"><Code>bg-mint-soft text-forest</Code> · <Code>bg-forest text-white</Code></td>
                  <td className="px-4 py-5 text-soft">Bento shipments, Shipping AI card</td>
                </tr>
              </Table>
            </Section>

            <Section id="radius" title="Border radius">
              <div className="mb-6 rounded-xl bg-white p-5 text-sm text-soft shadow-border">
                <p className="font-medium text-ink">Formula</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Scale by role: 6 inset → 8 chips → 12 controls → 14 sections → 16 chrome → 20 cards → 24 framed → full pills.</li>
                  <li>Concentric nesting: <Code>outer = inner + inset</Code> (email field 12 − 6 → button 6; bento 20 with 24px+ padding → inner 12 chosen independently).</li>
                  <li>White frames use <Code>border-[5px] border-white</Code>, so the inner corner follows automatically.</li>
                  <li>Edges that bleed off a panel only round the visible corner (<Code>rounded-tl-[20px]</Code>).</li>
                </ul>
              </div>
              <Table head={["Preview", "Size", "Class", "Role", "Where"]}>
                {radii.map((r) => (
                  <tr key={r.size}>
                    <td className="px-4 py-4">
                      <div className={`h-12 w-20 bg-mint shadow-border ${r.cls}`} />
                    </td>
                    <td className="px-4 py-4 font-medium text-ink">{r.size}</td>
                    <td className="px-4 py-4"><Code>{r.cls}</Code></td>
                    <td className="px-4 py-4 text-soft">{r.role}</td>
                    <td className="px-4 py-4 text-soft">{r.where}</td>
                  </tr>
                ))}
              </Table>
            </Section>

            <Section id="shadows" title="Shadows">
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

            <Section id="spacing" title="Spacing rhythm">
              <Table head={["Token", "Desktop", "Tablet", "Phone", "Where"]}>
                {spacing.map((s) => (
                  <tr key={s.token}>
                    <td className="px-4 py-4"><Code>{s.token}</Code></td>
                    <td className="px-4 py-4 font-medium text-ink">{s.desktop}</td>
                    <td className="px-4 py-4 text-soft">{s.tablet}</td>
                    <td className="px-4 py-4 text-soft">{s.phone}</td>
                    <td className="px-4 py-4 text-soft">{s.where}</td>
                  </tr>
                ))}
              </Table>
            </Section>

            <Section id="surfaces" title="Surfaces">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <div className="dashboard-backdrop h-40 rounded-[14px]" />
                  <p className="mt-3 text-sm font-medium text-ink">Hero backdrop</p>
                  <p className="text-sm text-soft">13-stop mist → pine gradient.</p>
                </div>
                <div>
                  <div className="relative h-40 overflow-hidden rounded-[14px] border-6 border-white bg-mint shadow-raised">
                    <span className="absolute -top-16 left-6 size-32 rounded-full bg-white/50" />
                    <span className="absolute -right-10 -bottom-12 size-32 rounded-full bg-white/50" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-ink">Mint panel + blobs</p>
                  <p className="text-sm text-soft">Partner rates, differentiation.</p>
                </div>
                <div>
                  <div className="h-40 rounded-[14px] bg-linear-to-b from-green to-forest inset-shadow-glow" />
                  <p className="mt-3 text-sm font-medium text-ink">Green band</p>
                  <p className="text-sm text-soft">Stats, Get started.</p>
                </div>
                <div>
                  <div className="relative h-40 overflow-hidden rounded-[14px] bg-surface">
                    <div className="absolute -right-20 -bottom-20 size-64 rounded-full bg-mint/60 blur-3xl" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-ink">Grey + mint glow</p>
                  <p className="text-sm text-soft">Shipping AI.</p>
                </div>
                <div>
                  <div className="h-40 rounded-[14px] bg-linear-to-b from-[#FDFDFD] to-[#E9E9E9]" />
                  <p className="mt-3 text-sm font-medium text-ink">Globe panel</p>
                  <p className="text-sm text-soft">#FDFDFD → #E9E9E9.</p>
                </div>
                <div>
                  <div className="h-40 rounded-[14px] bg-linear-to-b from-white to-surface-soft shadow-border" />
                  <p className="mt-3 text-sm font-medium text-ink">Section fade</p>
                  <p className="text-sm text-soft">Shipping tabs, logistics partners.</p>
                </div>
              </div>
            </Section>

            <Section id="elements" title="Small elements">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-border">
                  <p className="mb-4 text-sm text-soft">Framed stat card (border-[5px] white, mint-mist, shadow-frame)</p>
                  <div className="flex flex-col-reverse rounded-3xl border-[5px] border-white bg-mint-mist px-5 py-4 shadow-frame">
                    <p className="mt-1 text-sm text-muted">goods are transported yearly with the help of Zineps.</p>
                    <p className="text-2xl font-medium text-forest">300+ million</p>
                  </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-border">
                  <p className="mb-4 text-sm text-soft">CountUp (scroll away and reload to replay)</p>
                  <p className="text-5xl font-medium text-forest">
                    <CountUp value={1000} />
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-border">
                  <p className="mb-4 text-sm text-soft">Magnetic logo tiles (hover)</p>
                  <ul className="flex gap-4">
                    <MagneticLogo logo={{ file: "shopify", name: "Shopify" }} />
                    <MagneticLogo logo={{ file: "woocommerce", name: "WooCommerce" }} />
                    <MagneticLogo logo={{ file: "moneybird", name: "Moneybird", ext: "svg" }} />
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-border">
                  <p className="mb-4 text-sm text-soft">Language button + checklist item</p>
                  <div className="flex flex-wrap items-center gap-6">
                    <span className="inline-flex h-[42px] items-center gap-1.5 rounded-xl border-[0.7px] border-line bg-linear-to-b from-white to-line-soft px-3.5 text-subtle shadow-nav">
                      <TranslateIcon size={25} aria-hidden />
                      <CaretDownIcon size={14} weight="bold" aria-hidden />
                    </span>
                    <span className="flex items-center gap-3 text-base text-muted">
                      <CheckCircleIcon size={20} className="text-soft" aria-hidden />
                      Label generation
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-mint p-6 md:col-span-2">
                  <p className="mb-2 text-sm text-body-mint">Subscribe field (shadow-border, 6px inset button, shooting arrow)</p>
                  <SubscribeForm />
                </div>
              </div>
            </Section>

            <Section id="marquee" title="Marquee">
              <MarqueeLab />
            </Section>

            <Section id="motion" title="Motion">
              <Table head={["Name", "Value", "Where"]}>
                {motion.map((m) => (
                  <tr key={m.name}>
                    <td className="px-4 py-4 font-medium whitespace-nowrap text-ink">{m.name}</td>
                    <td className="px-4 py-4 text-soft">{m.value}</td>
                    <td className="px-4 py-4"><Code>{m.where}</Code></td>
                  </tr>
                ))}
              </Table>
            </Section>

            <Section id="sections" title="Sections (live)">
              <p className="text-sm text-soft">
                Every section in home-page order, rendered with the real components and spacing.
              </p>
            </Section>
          </div>
        </div>

        <div className="bg-white">
          <Navbar />
          <Hero />
          <PartnerRates />
          <Stats />
          <ShippingTabs />
          <WhyZineps />
          <ShippingAI />
          <LogisticsPartners />
          <Integrations />
          <GlobalScale />
          <Differentiation />
          <FAQ />
          <StartWhereYouAre />
          <RecentNews />
          <GetStarted />
        </div>
      </main>
      <Footer />
    </>
  );
}
