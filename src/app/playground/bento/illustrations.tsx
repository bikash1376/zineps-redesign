/**
 * Zineps illustration set — drawn to match the product's icon language (Phosphor-like 2px
 * rounded strokes at this scale), filled with the brand mints and one teal accent.
 * Strokes use `currentColor` so every piece recolours for dark surfaces (e.g. the green
 * Get started banner). Hover motion is driven by a parent `.group`, transform/opacity only.
 */

import type { ReactNode } from "react";

type ArtProps = { className?: string; dark?: boolean };

const INK = "currentColor";

function palette(dark?: boolean) {
  return dark
    ? { fill: "rgb(255 255 255 / 0.08)", soft: "rgb(255 255 255 / 0.14)", accent: "#70cab9", paper: "rgb(255 255 255 / 0.12)" }
    : { fill: "#eff7f4", soft: "#d7f0ea", accent: "#70cab9", paper: "#ffffff" };
}

const line = { stroke: INK, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/* ── Product capabilities ─────────────────────────────────────────────────────────── */

export function HubArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <ellipse cx="100" cy="138" rx="78" ry="6" fill={c.soft} />
      <g className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <rect x="56" y="40" width="88" height="70" rx="10" fill={c.paper} {...line} />
        <path d="M56 58h88" {...line} />
        <circle cx="66" cy="49" r="2" fill={INK} />
        <circle cx="74" cy="49" r="2" fill={INK} />
        <rect x="66" y="68" width="30" height="8" rx="4" fill={c.soft} />
        <rect x="66" y="84" width="56" height="6" rx="3" fill={c.fill} />
        <rect x="66" y="95" width="42" height="6" rx="3" fill={c.fill} />
      </g>
      {/* satellites: parcel, return, truck */}
      <g className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
        <rect x="14" y="30" width="30" height="26" rx="5" fill={c.soft} {...line} />
        <path d="M29 30v26" {...line} />
      </g>
      <g className="transition-transform duration-300 ease-out group-hover:translate-x-1">
        <circle cx="170" cy="44" r="16" fill={c.fill} {...line} />
        <path d="M164 44a6 6 0 1 0 6-6h-4m0 0 3-3m-3 3 3 3" {...line} />
      </g>
      <g className="transition-transform delay-75 duration-300 ease-out group-hover:translate-x-1">
        <path d="M150 104h22l10 10v10h-32z" fill={c.soft} {...line} />
        <circle cx="158" cy="126" r="4" fill={c.paper} {...line} />
        <circle cx="176" cy="126" r="4" fill={c.paper} {...line} />
      </g>
      <path d="M44 44h12M144 52h10M144 104h6" {...line} strokeDasharray="2 4" />
    </svg>
  );
}

export function PlugArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <rect x="10" y="44" width="62" height="62" rx="12" fill={c.paper} {...line} />
      <path d="M22 60h38M22 72h26M22 84h32" {...line} />
      <rect x="128" y="44" width="62" height="62" rx="12" fill={c.soft} {...line} />
      <path d="M144 88l14-24 16 24z" fill={c.paper} {...line} />
      {/* plug halves meet on hover */}
      <g className="transition-transform duration-300 ease-out group-hover:translate-x-2">
        <path d="M72 75h14" {...line} />
        <rect x="86" y="64" width="16" height="22" rx="4" fill={c.accent} {...line} />
        <path d="M102 70h5M102 80h5" {...line} />
      </g>
      <g className="transition-transform duration-300 ease-out group-hover:-translate-x-2">
        <rect x="110" y="64" width="10" height="22" rx="3" fill={c.paper} {...line} />
        <path d="M120 75h8" {...line} />
      </g>
      <circle cx="100" cy="32" r="3" fill={c.accent} className="opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" />
      <path d="M100 18v6M88 24l4 4M112 24l-4 4" {...line} className="opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" />
    </svg>
  );
}

export function InsightArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  const bars = [34, 52, 44, 68, 84];
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <rect x="24" y="16" width="152" height="118" rx="14" fill={c.paper} {...line} />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={46 + i * 24}
          y={116 - h}
          width="14"
          height={h}
          rx="4"
          fill={i === 4 ? c.accent : c.soft}
          className="origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-110"
          style={{ transformBox: "fill-box", transitionDelay: `${i * 30}ms` }}
        />
      ))}
      <path d="M46 72l24-14 24 8 24-22 26-14" {...line} fill="none" />
      <circle cx="144" cy="30" r="5" fill={c.paper} {...line} />
    </svg>
  );
}

export function ShieldPulseArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <path d="M10 92h44l10-22 14 44 12-30 8 8h92" {...line} fill="none" opacity="0.35" />
      <g className="origin-center transition-transform duration-300 ease-out group-hover:scale-105" style={{ transformBox: "fill-box" }}>
        <path d="M100 14 138 28v32c0 30-18 50-38 58-20-8-38-28-38-58V28z" fill={c.soft} {...line} />
        <path d="m84 64 11 11 22-24" {...line} fill="none" strokeWidth="3" />
      </g>
    </svg>
  );
}

export function DottedGlobeArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  // Dotted hemisphere: dots inside a circle, denser toward the middle rows
  const dots: [number, number][] = [];
  for (let y = 40; y <= 170; y += 10) {
    for (let x = 30; x <= 250; x += 10) {
      const dx = x - 140;
      const dy = y - 140;
      if (dx * dx + dy * dy < 108 * 108 && Math.sin(x * 0.07) + Math.cos(y * 0.09) > -0.2) dots.push([x, y]);
    }
  }
  return (
    <svg viewBox="0 0 280 180" className={`text-forest ${className}`} aria-hidden>
      <path d="M32 180a108 108 0 0 1 216 0" fill={c.fill} {...line} />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.8" fill={INK} opacity="0.45" />
      ))}
      <path d="M70 118C110 60 170 56 214 96" {...line} fill="none" strokeDasharray="3 5" />
      <circle cx="70" cy="118" r="5" fill={c.accent} />
      <circle cx="214" cy="96" r="5" fill={c.accent} className="origin-center motion-safe:animate-pulse" style={{ transformBox: "fill-box" }} />
    </svg>
  );
}

/* ── Section illustrations ────────────────────────────────────────────────────────── */

export function RouteArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <path d="M26 118C60 118 50 70 92 70s38-36 82-36" {...line} fill="none" strokeDasharray="4 6" opacity="0.4" />
      <path d="M26 118C70 118 80 96 110 96s40-40 64-62" {...line} fill="none" strokeWidth="3" />
      {/* parcel travels the chosen route on hover */}
      <circle cx="26" cy="118" r="4" fill={c.accent} className="transition-transform duration-500 ease-out group-hover:translate-x-[84px] group-hover:-translate-y-[22px]" />
      <circle cx="26" cy="118" r="8" fill={c.paper} {...line} />
      <path d="M170 18c-9 0-14 6-14 12 0 9 14 20 14 20s14-11 14-20c0-6-5-12-14-12z" fill={c.accent} {...line} />
      <circle cx="170" cy="30" r="4" fill={c.paper} />
      <path d="M100 46l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={c.soft} {...line} strokeWidth="1.5" className="origin-center transition-transform duration-300 ease-out group-hover:rotate-45" style={{ transformBox: "fill-box" }} />
    </svg>
  );
}

export function WarehouseArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <ellipse cx="100" cy="136" rx="86" ry="6" fill={c.soft} />
      <path d="M22 64 90 30l68 34v68H22z" fill={c.paper} {...line} />
      <rect x="48" y="84" width="50" height="48" rx="3" fill={c.fill} {...line} />
      <path d="M48 100h50M48 116h50" {...line} />
      <rect x="112" y="98" width="22" height="18" rx="3" fill={c.soft} {...line} />
      <g className="transition-transform duration-500 ease-out group-hover:translate-x-3">
        <path d="M140 106h26l12 12v14h-38z" fill={c.accent} {...line} />
        <circle cx="150" cy="134" r="5" fill={c.paper} {...line} />
        <circle cx="170" cy="134" r="5" fill={c.paper} {...line} />
      </g>
    </svg>
  );
}

export function EnvelopeArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <path d="M40 58h120v72H40z" fill={c.paper} {...line} />
      <g className="transition-transform duration-300 ease-out group-hover:-translate-y-4">
        <rect x="56" y="30" width="88" height="62" rx="6" fill={c.fill} {...line} />
        <path d="M70 48h40M70 60h60M70 72h30" {...line} />
      </g>
      <path d="M40 58l60 42 60-42" fill={c.soft} {...line} />
      <path d="M40 130l48-34M160 130l-48-34" {...line} />
      <circle cx="160" cy="58" r="10" fill={c.accent} {...line} />
      <path d="m156 58 3 3 5-6" {...line} stroke="#fff" />
    </svg>
  );
}

export function QuestionArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <g className="transition-transform duration-300 ease-out group-hover:-rotate-3">
        <path d="M22 30h96a10 10 0 0 1 10 10v44a10 10 0 0 1-10 10H60l-20 18V94H22a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10z" fill={c.paper} {...line} />
        <path d="M58 52a12 12 0 1 1 18 10c-4 2-6 4-6 8" {...line} fill="none" />
        <circle cx="70" cy="80" r="2.5" fill={INK} />
      </g>
      <g className="transition-transform duration-300 ease-out group-hover:rotate-3">
        <path d="M110 62h70a8 8 0 0 1 8 8v34a8 8 0 0 1-8 8h-12v16l-16-16h-42a8 8 0 0 1-8-8V70a8 8 0 0 1 8-8z" fill={c.soft} {...line} />
        <path d="M128 86h40M128 98h26" {...line} />
      </g>
    </svg>
  );
}

export function RocketParcelArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`${dark ? "text-white" : "text-forest"} ${className}`} aria-hidden>
      <path d="M40 132c20-4 30-18 34-34M60 138c14-6 22-16 24-28" {...line} opacity="0.35" className="transition-opacity duration-300 group-hover:opacity-70" />
      <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2">
        <path d="M84 102 66 84l54-54c14-14 36-16 44-16 0 8-2 30-16 44z" fill={c.paper} {...line} />
        <rect x="104" y="46" width="30" height="26" rx="4" fill={c.soft} {...line} transform="rotate(-45 119 59)" />
        <path d="M66 84 50 80l18-22 22 2M84 102l4 16 22-18-2-22" fill={c.fill} {...line} />
        <path d="M72 108c-6 6-18 8-18 8s2-12 8-18" fill={c.accent} {...line} />
      </g>
    </svg>
  );
}

export function NewsArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <rect x="54" y="22" width="112" height="112" rx="10" fill={c.fill} {...line} className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
      <rect x="34" y="34" width="112" height="104" rx="10" fill={c.paper} {...line} />
      <rect x="48" y="50" width="44" height="34" rx="4" fill={c.soft} />
      <path d="M102 54h30M102 66h30M102 78h20M48 98h84M48 110h84M48 122h56" {...line} />
    </svg>
  );
}

export function LostParcelArt({ className = "", dark }: ArtProps) {
  const c = palette(dark);
  return (
    <svg viewBox="0 0 200 150" className={`text-forest ${className}`} aria-hidden>
      <ellipse cx="100" cy="136" rx="60" ry="6" fill={c.soft} />
      <g className="origin-bottom transition-transform duration-300 ease-out group-hover:-rotate-6" style={{ transformBox: "fill-box" }}>
        <path d="M60 60 100 40l40 20v50l-40 20-40-20z" fill={c.paper} {...line} />
        <path d="M60 60l40 20 40-20M100 80v50" {...line} />
        <path d="M80 50l40 20v14" {...line} />
      </g>
      <path d="M142 26a12 12 0 1 1 18 10c-4 2-6 4-6 8" {...line} fill="none" />
      <circle cx="154" cy="54" r="2.5" fill={INK} />
    </svg>
  );
}

/* ── Library with placement guidance ──────────────────────────────────────────────── */

type Entry = {
  name: string;
  Art: (p: ArtProps) => ReactNode;
  surface: "mint" | "white" | "grey" | "green";
  useIn: string;
  why: string;
  avoid: string;
};

const entries: Entry[] = [
  {
    name: "Envelope",
    Art: EnvelopeArt,
    surface: "mint",
    useIn: "“An approach that goes beyond the standard” — above the badge, 96px tall",
    why: "The centred panel is all type; a small focal point signals “subscribe” before reading.",
    avoid: "Anywhere with a product mockup next to it — competes for attention.",
  },
  {
    name: "Question bubbles",
    Art: QuestionArt,
    surface: "white",
    useIn: "FAQ — beside the heading on desktop, above it on phones",
    why: "Softens a text-heavy block and makes the section recognisable while scrolling.",
    avoid: "Inside accordion rows — keep answers clean.",
  },
  {
    name: "Rocket parcel (dark)",
    Art: RocketParcelArt,
    surface: "green",
    useIn: "“Get started right away?” banner — right side on desktop, white strokes",
    why: "The banner is the final CTA; a launch metaphor adds energy without extra copy.",
    avoid: "Hero — the dashboard already carries the promise.",
  },
  {
    name: "Plug",
    Art: PlugArt,
    surface: "white",
    useIn: "Integrations — phones and tablets only, above the heading",
    why: "Floating logo columns are hidden below 1024px; this keeps the section visual.",
    avoid: "Desktop, where the magnetic logo columns already illustrate it.",
  },
  {
    name: "Dotted globe",
    Art: DottedGlobeArt,
    surface: "grey",
    useIn: "Global scale — fallback when WebGL is unavailable or reduced motion is on",
    why: "Same half-globe silhouette as the cobe globe, zero runtime cost.",
    avoid: "As a second globe next to the live one.",
  },
  {
    name: "Route",
    Art: RouteArt,
    surface: "grey",
    useIn: "Shipping AI — phones, replacing the wide recommendation card",
    why: "The card is cramped under 640px; the route + sparkle tells the same story.",
    avoid: "Desktop, where the recommendation card shows real product UI.",
  },
  {
    name: "Warehouse",
    Art: WarehouseArt,
    surface: "white",
    useIn: "Logistics partners — “Become a partner” page hero or partner sign-up",
    why: "Speaks to carriers/3PLs rather than merchants.",
    avoid: "Merchant-facing sections (partner rates, shipping tabs).",
  },
  {
    name: "Hub",
    Art: HubArt,
    surface: "mint",
    useIn: "Bento “One platform” card or an empty dashboard state",
    why: "Shows parcels, returns and trucks orbiting one screen — the hub idea at a glance.",
    avoid: "Hero or next to screenshots of the real dashboard.",
  },
  {
    name: "Insight",
    Art: InsightArt,
    surface: "mint",
    useIn: "Bento “Analytics” card when a live chart would be too heavy",
    why: "Reads as analytics instantly, lighter than a Recharts instance.",
    avoid: "Stats band — the numbers are the illustration there.",
  },
  {
    name: "Shield pulse",
    Art: ShieldPulseArt,
    surface: "mint",
    useIn: "Bento “Uptime” card, security or status pages",
    why: "Reliability without jargon.",
    avoid: "Footer — adds noise to a navigational area.",
  },
  {
    name: "Newspaper",
    Art: NewsArt,
    surface: "white",
    useIn: "Recent news — empty or loading state of the carousel",
    why: "Keeps the section from collapsing if the CMS returns nothing.",
    avoid: "As a card image for real articles.",
  },
  {
    name: "Lost parcel",
    Art: LostParcelArt,
    surface: "white",
    useIn: "404 page and “no shipments found” empty states",
    why: "On-brand humour for dead ends.",
    avoid: "Marketing sections — negative connotation next to delivery promises.",
  },
];

const surfaces = {
  mint: "bg-mint-mist",
  white: "bg-white shadow-border",
  grey: "bg-linear-to-b from-[#FDFDFD] to-[#E9E9E9]",
  green: "bg-linear-to-b from-green to-forest inset-shadow-glow",
};

export function IllustrationLibrary() {
  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[640px] text-center">
        <h2 className="text-3xl font-medium text-balance text-ink">Illustration library</h2>
        <p className="mt-4 text-base text-pretty text-muted">
          Brand-style line illustrations with where each belongs on the site — and where it shouldn&apos;t go. Hover a
          card to see its motion.
        </p>
      </div>
      <ul className="mx-auto mt-heading grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(({ name, Art, surface, useIn, why, avoid }) => (
          <li key={name} className="group flex flex-col rounded-[20px] bg-white p-3 shadow-border">
            <div className={`flex h-48 items-center justify-center rounded-xl ${surfaces[surface]}`}>
              <Art className="h-36 w-auto" dark={surface === "green"} />
            </div>
            <div className="p-3">
              <h3 className="text-base font-medium text-ink">{name}</h3>
              <dl className="mt-2 space-y-2 text-sm">
                <div>
                  <dt className="font-medium text-forest">Use in</dt>
                  <dd className="text-pretty text-soft">{useIn}</dd>
                </div>
                <div>
                  <dt className="font-medium text-forest">Why</dt>
                  <dd className="text-pretty text-soft">{why}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[#9a5b00]">Avoid</dt>
                  <dd className="text-pretty text-soft">{avoid}</dd>
                </div>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
