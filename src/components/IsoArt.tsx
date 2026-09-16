"use client";

import { useId } from "react";

/**
 * Isometric clay illustrations for the “Why Zineps” bento.
 *
 * True 30° isometric projection computed from 3D box coordinates, one light source
 * (top face lightest → left face mid → right face darkest), subtle face gradients, a soft
 * blurred ground shadow and a thin highlight on top edges for the clay look. Neutral clay
 * greys with brand-green accents. Hover motion comes from the parent card (`.group`),
 * transform/opacity only.
 */

const COS30 = 0.8660254;

type Vec = [number, number];

/** Project a 3D point (x → right-down, y → left-down, z → up) to screen space. */
function iso(x: number, y: number, z: number, s: number): Vec {
  return [(x - y) * COS30 * s, (x + y) * 0.5 * s - z * s];
}

const pts = (list: Vec[]) => list.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(" ");

type Tone = { top: string; left: string; right: string; edge?: string };

const CLAY: Tone = { top: "#f1f4f3", left: "#dce2e0", right: "#c3ccc8", edge: "#ffffff" };
const CLAY_DARK: Tone = { top: "#e3e8e6", left: "#ccd4d1", right: "#b3bdb9", edge: "#f6f8f7" };
const GREEN: Tone = { top: "#8fd6c8", left: "#60948a", right: "#4a7469", edge: "#c9eee6" };
const MINT: Tone = { top: "#e6f5f1", left: "#c9e7df", right: "#afd6cc", edge: "#ffffff" };

function Box({
  x,
  y,
  z,
  w,
  d,
  h,
  s,
  tone = CLAY,
  gradId,
}: {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  s: number;
  tone?: Tone;
  gradId?: string;
}) {
  const top: Vec[] = [
    iso(x, y, z + h, s),
    iso(x + w, y, z + h, s),
    iso(x + w, y + d, z + h, s),
    iso(x, y + d, z + h, s),
  ];
  const left: Vec[] = [
    iso(x, y + d, z, s),
    iso(x + w, y + d, z, s),
    iso(x + w, y + d, z + h, s),
    iso(x, y + d, z + h, s),
  ];
  const right: Vec[] = [
    iso(x + w, y, z, s),
    iso(x + w, y + d, z, s),
    iso(x + w, y + d, z + h, s),
    iso(x + w, y, z + h, s),
  ];
  return (
    <g strokeLinejoin="round">
      <polygon points={pts(left)} fill={tone.left} />
      <polygon points={pts(right)} fill={tone.right} />
      <polygon points={pts(top)} fill={gradId ? `url(#${gradId})` : tone.top} />
      {tone.edge && (
        <polyline
          points={pts([top[3], top[0], top[1]])}
          fill="none"
          stroke={tone.edge}
          strokeWidth="1"
          strokeOpacity="0.9"
        />
      )}
    </g>
  );
}

/** Soft ambient shadow under an isometric footprint. */
function GroundShadow({
  x,
  y,
  w,
  d,
  s,
  filterId,
  spread = 0.6,
}: {
  x: number;
  y: number;
  w: number;
  d: number;
  s: number;
  filterId: string;
  spread?: number;
}) {
  const q: Vec[] = [
    iso(x - spread, y - spread, 0, s),
    iso(x + w + spread, y - spread, 0, s),
    iso(x + w + spread, y + d + spread, 0, s),
    iso(x - spread, y + d + spread, 0, s),
  ];
  return (
    <polygon
      points={pts(q)}
      fill="#2f4a42"
      opacity="0.16"
      filter={`url(#${filterId})`}
      transform="translate(0 6)"
    />
  );
}

function Defs({ uid, blur = 7 }: { uid: string; blur?: number }) {
  return (
    <defs>
      <filter id={`${uid}-soft`} x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation={blur} />
      </filter>
      <linearGradient id={`${uid}-clayTop`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f8faf9" />
        <stop offset="1" stopColor="#e7ecea" />
      </linearGradient>
      <linearGradient id={`${uid}-greenTop`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#a6e2d6" />
        <stop offset="1" stopColor="#7cc9b9" />
      </linearGradient>
    </defs>
  );
}

const useUid = () => useId().replace(/:/g, "");

/* ── 1. Network: voxel continent on a slab with hub pins and route arcs ───────────── */

export function IsoNetwork({ className = "" }: { className?: string }) {
  const uid = useUid();
  const s = 11;
  const N = 12;
  const cells: { i: number; j: number; h: number }[] = [];
  // 6×6 tiles of 2 units each; skip the corners so the land reads as an organic shape
  const skip = new Set(["0-0", "0-1", "1-0", "5-5", "4-5", "5-4", "0-5", "5-0", "3-5"]);
  const tall = new Set(["1-1", "4-1", "2-3", "4-4", "1-4"]);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (!skip.has(`${i}-${j}`))
        cells.push({ i, j, h: tall.has(`${i}-${j}`) ? 1.1 : 0.35 + ((i + j) % 2) * 0.2 });
    }
  }
  // painter's order: back (small x+y) to front
  cells.sort((a, b) => a.i + a.j - (b.i + b.j));

  const hubs = [
    { i: 1, j: 1 },
    { i: 4, j: 1 },
    { i: 2, j: 3 },
    { i: 4, j: 4 },
    { i: 1, j: 4 },
  ];
  const hubPoint = (i: number, j: number): Vec => {
    const c = cells.find((k) => k.i === i && k.j === j);
    return iso(i * 2 + 1, j * 2 + 1, 1 + (c?.h ?? 0.4), s);
  };
  const pinPts = hubs.map((h) => hubPoint(h.i, h.j));
  const routes: [number, number][] = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [1, 3],
  ];

  return (
    <svg viewBox="-135 -45 270 215" className={className} aria-hidden>
      <Defs uid={uid} blur={9} />
      <GroundShadow x={0} y={0} w={N} d={N} s={s} filterId={`${uid}-soft`} spread={1} />
      <Box x={0} y={0} z={0} w={N} d={N} h={1} s={s} tone={CLAY_DARK} gradId={`${uid}-clayTop`} />
      {cells.map((c) => (
        <Box
          key={`${c.i}-${c.j}`}
          x={c.i * 2 + 0.25}
          y={c.j * 2 + 0.25}
          z={1}
          w={1.5}
          d={1.5}
          h={c.h}
          s={s}
          tone={c.h > 1 ? MINT : CLAY}
          gradId={c.h > 1 ? undefined : `${uid}-clayTop`}
        />
      ))}

      {/* Route arcs between hubs */}
      {routes.map(([a, b], k) => {
        const [x1, y1] = pinPts[a];
        const [x2, y2] = pinPts[b];
        const mx = (x1 + x2) / 2;
        const my = Math.min(y1, y2) - 34;
        return (
          <path
            key={k}
            d={`M${x1} ${y1 - 14} Q${mx} ${my} ${x2} ${y2 - 14}`}
            fill="none"
            stroke="#4a7469"
            strokeWidth="1.6"
            strokeDasharray="3 4"
            strokeLinecap="round"
            opacity="0.55"
          />
        );
      })}

      {/* Hub pins (billboards), bobbing on hover */}
      {pinPts.map(([px, py], k) => (
        <g
          key={k}
          className="transition-transform duration-300 ease-out group-hover:-translate-y-1"
          style={{ transitionDelay: `${k * 50}ms` }}
        >
          <ellipse cx={px} cy={py} rx="5" ry="2.5" fill="#2f4a42" opacity="0.18" />
          <path d={`M${px} ${py - 2}c-5-6-8-9-8-13a8 8 0 0 1 16 0c0 4-3 7-8 13z`} fill="#4a7469" />
          <path
            d={`M${px - 6} ${py - 17}a6.5 6.5 0 0 1 9-4.5`}
            fill="none"
            stroke="#8fd6c8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx={px} cy={py - 15} r="3" fill="#f1f4f3" />
        </g>
      ))}
    </svg>
  );
}

/* ── 2. Connect: plug sliding into a socket block ────────────────────────────────── */

export function IsoPlug({ className = "" }: { className?: string }) {
  const uid = useUid();
  const s = 12;
  // screen delta for moving 1.4 units along −y (toward the socket)
  const [dx, dy] = iso(0, -1.4, 0, s);
  return (
    <svg viewBox="-115 -75 230 195" className={className} aria-hidden>
      <Defs uid={uid} />
      <GroundShadow x={0} y={0} w={6.5} d={9} s={s} filterId={`${uid}-soft`} spread={0.3} />

      {/* Socket block */}
      <Box x={0} y={0} z={0} w={6} d={3} h={5} s={s} tone={CLAY} gradId={`${uid}-clayTop`} />
      {/* Socket plate + slots on the visible front face (y = 3) */}
      <polygon
        points={pts([
          iso(1.4, 3.01, 1.2, s),
          iso(4.6, 3.01, 1.2, s),
          iso(4.6, 3.01, 3.8, s),
          iso(1.4, 3.01, 3.8, s),
        ])}
        fill="#eef2f1"
      />
      <polygon
        points={pts([
          iso(2.2, 3.02, 2.2, s),
          iso(2.6, 3.02, 2.2, s),
          iso(2.6, 3.02, 2.9, s),
          iso(2.2, 3.02, 2.9, s),
        ])}
        fill="#6f7c78"
      />
      <polygon
        points={pts([
          iso(3.4, 3.02, 2.2, s),
          iso(3.8, 3.02, 2.2, s),
          iso(3.8, 3.02, 2.9, s),
          iso(3.4, 3.02, 2.9, s),
        ])}
        fill="#6f7c78"
      />
      <circle
        cx={iso(5.2, 3.02, 4.2, s)[0]}
        cy={iso(5.2, 3.02, 4.2, s)[1]}
        r="3"
        fill="#339c84"
        className="opacity-40 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Plug + cable slide toward the socket on hover */}
      <g
        className="transition-transform duration-300 ease-out group-hover:translate-x-(--tx) group-hover:translate-y-(--ty)"
        style={{ ["--tx" as string]: `${dx}px`, ["--ty" as string]: `${dy}px` }}
      >
        <path
          d={`M${iso(3, 8.2, 2.2, s).join(" ")} C${iso(3, 11, 1, s).join(" ")} ${iso(0, 9.5, 0.3, s).join(" ")} ${iso(2, 11, 0.3, s).join(" ")}`}
          fill="none"
          stroke="#b3bdb9"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* prongs */}
        <Box
          x={2.2}
          y={4.4}
          z={2.2}
          w={0.4}
          d={1.4}
          h={0.6}
          s={s}
          tone={{ top: "#e3e8e6", left: "#9aa5a1", right: "#86918d" }}
        />
        <Box
          x={3.4}
          y={4.4}
          z={2.2}
          w={0.4}
          d={1.4}
          h={0.6}
          s={s}
          tone={{ top: "#e3e8e6", left: "#9aa5a1", right: "#86918d" }}
        />
        {/* body */}
        <Box
          x={1.4}
          y={5.8}
          z={1}
          w={3.2}
          d={2.6}
          h={3}
          s={s}
          tone={GREEN}
          gradId={`${uid}-greenTop`}
        />
      </g>
    </svg>
  );
}

/* ── 3. Hub: parcels stacked on a pallet ─────────────────────────────────────────── */

function Parcel({
  x,
  y,
  z,
  w,
  d,
  h,
  s,
  lift = false,
}: {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  s: number;
  lift?: boolean;
}) {
  const tapeTop: Vec[] = [
    iso(x + w / 2 - 0.35, y, z + h + 0.01, s),
    iso(x + w / 2 + 0.35, y, z + h + 0.01, s),
    iso(x + w / 2 + 0.35, y + d, z + h + 0.01, s),
    iso(x + w / 2 - 0.35, y + d, z + h + 0.01, s),
  ];
  const tapeFront: Vec[] = [
    iso(x + w / 2 - 0.35, y + d + 0.01, z + h, s),
    iso(x + w / 2 + 0.35, y + d + 0.01, z + h, s),
    iso(x + w / 2 + 0.35, y + d + 0.01, z + h - 1, s),
    iso(x + w / 2 - 0.35, y + d + 0.01, z + h - 1, s),
  ];
  return (
    <g
      className={
        lift ? "transition-transform duration-300 ease-out group-hover:-translate-y-2" : undefined
      }
    >
      <Box
        x={x}
        y={y}
        z={z}
        w={w}
        d={d}
        h={h}
        s={s}
        tone={{ top: "#f4efe6", left: "#e2d7c5", right: "#cfc1ab", edge: "#fffaf1" }}
      />
      <polygon points={pts(tapeTop)} fill="#8fd6c8" />
      <polygon points={pts(tapeFront)} fill="#60948a" />
    </g>
  );
}

export function IsoHub({ className = "" }: { className?: string }) {
  const uid = useUid();
  const s = 11;
  const [cx, cy] = iso(7.6, 1, 9.2, s);
  return (
    <svg viewBox="-100 -85 200 200" className={className} aria-hidden>
      <Defs uid={uid} />
      <GroundShadow x={0} y={0} w={8} d={8} s={s} filterId={`${uid}-soft`} />
      {/* Pallet: base boards + blocks */}
      <Box x={0} y={0} z={0} w={8} d={8} h={0.5} s={s} tone={CLAY_DARK} />
      <Box x={0} y={0} z={0.5} w={8} d={8} h={0.35} s={s} tone={CLAY} gradId={`${uid}-clayTop`} />
      {/* Parcels (back to front) */}
      <Parcel x={0.4} y={0.4} z={0.85} w={3.4} d={3.4} h={3} s={s} />
      <Parcel x={4.2} y={0.4} z={0.85} w={3.4} d={3.4} h={2.4} s={s} />
      <Parcel x={0.4} y={4.2} z={0.85} w={3.4} d={3.4} h={2.6} s={s} />
      <Parcel x={4.2} y={4.2} z={0.85} w={3.4} d={3.4} h={3.2} s={s} />
      <Parcel x={1.2} y={1.2} z={3.85} w={3} d={3} h={2.4} s={s} lift />

      {/* Delivered badge */}
      <g
        className="transition-transform duration-300 ease-out group-hover:scale-110"
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <circle
          cx={cx}
          cy={cy + 3}
          r="13"
          fill="#2f4a42"
          opacity="0.15"
          filter={`url(#${uid}-soft)`}
        />
        <circle cx={cx} cy={cy} r="13" fill="#339c84" />
        <path
          d={`M${cx - 5.5} ${cy}l3.8 3.8 7.2-7.6`}
          fill="none"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* ── 4. Insights: isometric bar columns on a slab with a trend line ──────────────── */

export function IsoChart({ className = "" }: { className?: string }) {
  const uid = useUid();
  const s = 11;
  const cols = [
    { x: 1, h: 2.2 },
    { x: 3.4, h: 3.6 },
    { x: 5.8, h: 2.9 },
    { x: 8.2, h: 5.6, accent: true },
  ];
  const tops = cols.map((c) => iso(c.x + 0.8, 1.8, 0.8 + c.h + 0.9, s));
  return (
    <svg viewBox="-60 -50 190 160" className={className} aria-hidden>
      <Defs uid={uid} />
      <GroundShadow x={0} y={0} w={11} d={4} s={s} filterId={`${uid}-soft`} />
      <Box x={0} y={0} z={0} w={11} d={4} h={0.8} s={s} tone={CLAY} gradId={`${uid}-clayTop`} />
      {cols.map((c, i) => {
        return (
          <g
            key={i}
            className="transition-transform duration-300 ease-out group-hover:scale-y-[1.12]"
            style={{
              transformOrigin: "bottom",
              transformBox: "fill-box",
              transitionDelay: `${i * 40}ms`,
            }}
          >
            <Box
              x={c.x}
              y={1}
              z={0.8}
              w={1.6}
              d={1.6}
              h={c.h}
              s={s}
              tone={c.accent ? GREEN : MINT}
              gradId={c.accent ? `${uid}-greenTop` : undefined}
            />
          </g>
        );
      })}
      <polyline
        points={pts(tops)}
        fill="none"
        stroke="#4a7469"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 5"
      />
      {tops.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === tops.length - 1 ? 4 : 2.6}
          fill={i === tops.length - 1 ? "#339c84" : "#4a7469"}
        />
      ))}
    </svg>
  );
}

/* ── 5. Always on: server stack with status lights and a shield badge ────────────── */

export function IsoServer({ className = "" }: { className?: string }) {
  const uid = useUid();
  const s = 11;
  const units = [0, 1.9, 3.8];
  const [bx, by] = iso(6.6, 0.4, 7.6, s);
  return (
    <svg viewBox="-75 -75 160 170" className={className} aria-hidden>
      <Defs uid={uid} />
      <GroundShadow x={0} y={0} w={6} d={6} s={s} filterId={`${uid}-soft`} />
      {units.map((z, u) => (
        <g key={u}>
          <Box
            x={0}
            y={0}
            z={z}
            w={6}
            d={6}
            h={1.6}
            s={s}
            tone={u === 2 ? MINT : CLAY}
            gradId={u === 2 ? undefined : `${uid}-clayTop`}
          />
          {/* vent line + LEDs on the front-left face (y = 6) */}
          <polyline
            points={pts([iso(0.6, 6.01, z + 0.8, s), iso(3.4, 6.01, z + 0.8, s)])}
            stroke="#b3bdb9"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {[4.3, 5.1].map((lx, k) => {
            const [x, y] = iso(lx, 6.01, z + 0.8, s);
            return (
              <circle
                key={k}
                cx={x}
                cy={y}
                r="2.2"
                fill={k === 0 ? "#339c84" : "#8fd6c8"}
                className="motion-safe:group-hover:animate-pulse"
                style={{ animationDelay: `${u * 150 + k * 90}ms` }}
              />
            );
          })}
        </g>
      ))}
      {/* Shield badge */}
      <g className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <path
          d={`M${bx} ${by - 16}l12 4.5v7c0 8-5.2 13-12 15.5-6.8-2.5-12-7.5-12-15.5v-7z`}
          fill="#4a7469"
        />
        <path
          d={`M${bx - 5} ${by - 1}l3.4 3.4 6.6-7`}
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* ── Shared helpers for flat faces and wheels ────────────────────────────────────── */

type P3 = [number, number, number];

function Face({ p, s, fill, opacity }: { p: P3[]; s: number; fill: string; opacity?: number }) {
  return (
    <polygon points={pts(p.map(([x, y, z]) => iso(x, y, z, s)))} fill={fill} opacity={opacity} />
  );
}

/** Wheel on a y-facing side (xz plane): tyre, hub, with a little depth offset. */
function Wheel({ cx, y, cz, r, s }: { cx: number; y: number; cz: number; r: number; s: number }) {
  const ring = (rad: number, yy: number) =>
    pts(
      Array.from({ length: 24 }, (_, i) => {
        const a = (i / 24) * Math.PI * 2;
        return iso(cx + Math.cos(a) * rad, yy, cz + Math.sin(a) * rad, s);
      }),
    );
  return (
    <g>
      <polygon points={ring(r, y - 0.35)} fill="#3d4744" />
      <polygon points={ring(r, y)} fill="#56615d" />
      <polygon points={ring(r * 0.45, y + 0.01)} fill="#d9dfdd" />
    </g>
  );
}

/* ── 6. Merchants: isometric storefront with awning and parcels ready to ship ────── */

export function IsoStorefront({ className = "" }: { className?: string }) {
  const uid = useUid();
  const s = 10;
  const W = 7;
  const D = 5;
  const H = 5.2;
  const stripes = 6;
  const PY = 0.8;
  return (
    <svg viewBox="-80 -75 160 185" className={className} aria-hidden>
      <Defs uid={uid} />
      <GroundShadow x={0} y={0} w={W + 3} d={D + 3} s={s} filterId={`${uid}-soft`} />
      {/* Building */}
      <Box x={0} y={0} z={0} w={W} d={D} h={H} s={s} tone={CLAY} gradId={`${uid}-clayTop`} />
      {/* Roof cap */}
      <Box x={-0.2} y={-0.2} z={H} w={W + 0.4} d={D + 0.4} h={0.5} s={s} tone={CLAY_DARK} />
      {/* Window + door on the front (y = D) face */}
      <Face
        s={s}
        fill="#e6f5f1"
        p={[
          [0.8, D + 0.01, 1],
          [3.6, D + 0.01, 1],
          [3.6, D + 0.01, 2.8],
          [0.8, D + 0.01, 2.8],
        ]}
      />
      <Face
        s={s}
        fill="#ffffff"
        opacity={0.7}
        p={[
          [1, D + 0.02, 2.2],
          [1.8, D + 0.02, 2.7],
          [1.4, D + 0.02, 2.7],
          [1, D + 0.02, 2.45],
        ]}
      />
      <Face
        s={s}
        fill="#4a7469"
        p={[
          [4.6, D + 0.01, 0],
          [6.2, D + 0.01, 0],
          [6.2, D + 0.01, 3.2],
          [4.6, D + 0.01, 3.2],
        ]}
      />
      {/* Awning: striped slope sticking out of the front face */}
      {Array.from({ length: stripes }, (_, i) => {
        const x0 = 0.3 + (i * (W - 0.6)) / stripes;
        const x1 = 0.3 + ((i + 1) * (W - 0.6)) / stripes;
        return (
          <g key={i}>
            <Face
              s={s}
              fill={i % 2 ? "#f1f4f3" : "#60948a"}
              p={[
                [x0, D, 4.7],
                [x1, D, 4.7],
                [x1, D + 1.4, 3.9],
                [x0, D + 1.4, 3.9],
              ]}
            />
            <Face
              s={s}
              fill={i % 2 ? "#dce2e0" : "#4a7469"}
              p={[
                [x0, D + 1.4, 3.9],
                [x1, D + 1.4, 3.9],
                [x1, D + 1.4, 3.5],
                [x0, D + 1.4, 3.5],
              ]}
            />
          </g>
        );
      })}
      {/* Parcels on the pavement, the top one lifts on hover */}
      <Box
        x={W + 0.6}
        y={PY}
        z={0}
        w={2}
        d={2}
        h={1.6}
        s={s}
        tone={{ top: "#f4efe6", left: "#e2d7c5", right: "#cfc1ab", edge: "#fffaf1" }}
      />
      <Face
        s={s}
        fill="#8fd6c8"
        p={[
          [W + 1.4, PY, 1.61],
          [W + 1.8, PY, 1.61],
          [W + 1.8, PY + 2, 1.61],
          [W + 1.4, PY + 2, 1.61],
        ]}
      />
      <g className="transition-transform duration-300 ease-out group-hover:-translate-y-2">
        <Box
          x={W + 0.9}
          y={PY + 0.3}
          z={1.6}
          w={1.4}
          d={1.4}
          h={1.2}
          s={s}
          tone={{ top: "#f4efe6", left: "#e2d7c5", right: "#cfc1ab", edge: "#fffaf1" }}
        />
        <Face
          s={s}
          fill="#60948a"
          p={[
            [W + 1.45, PY + 1.7, 2.8],
            [W + 1.75, PY + 1.7, 2.8],
            [W + 1.75, PY + 1.7, 2.1],
            [W + 1.45, PY + 1.7, 2.1],
          ]}
        />
      </g>
    </svg>
  );
}

/* ── 7. Logistics partners: isometric delivery truck ─────────────────────────────── */

export function IsoTruck({ className = "" }: { className?: string }) {
  const uid = useUid();
  const s = 10;
  const D = 3.6;
  return (
    <svg viewBox="-50 -65 165 160" className={className} aria-hidden>
      <Defs uid={uid} />
      <GroundShadow x={0} y={0} w={10.4} d={D} s={s} filterId={`${uid}-soft`} spread={0.4} />
      {/* Drives forward (+x) a touch on hover */}
      <g
        className="transition-transform duration-500 ease-out group-hover:translate-x-(--tx) group-hover:translate-y-(--ty)"
        style={{
          ["--tx" as string]: `${iso(1, 0, 0, s)[0]}px`,
          ["--ty" as string]: `${iso(1, 0, 0, s)[1]}px`,
        }}
      >
        {/* Chassis */}
        <Box
          x={0}
          y={0.2}
          z={0.6}
          w={10.2}
          d={D - 0.4}
          h={0.5}
          s={s}
          tone={{ top: "#8a9591", left: "#6f7b77", right: "#5c6763" }}
        />
        {/* Cargo box */}
        <Box x={0} y={0} z={1.1} w={7} d={D} h={4} s={s} tone={CLAY} gradId={`${uid}-clayTop`} />
        {/* Brand stripe on the side (y = D face) */}
        <Face
          s={s}
          fill="#70cab9"
          p={[
            [0.6, D + 0.01, 2.6],
            [6.4, D + 0.01, 2.6],
            [6.4, D + 0.01, 3.2],
            [0.6, D + 0.01, 3.2],
          ]}
        />
        <Face
          s={s}
          fill="#4a7469"
          p={[
            [0.6, D + 0.01, 2.1],
            [4.2, D + 0.01, 2.1],
            [4.2, D + 0.01, 2.4],
            [0.6, D + 0.01, 2.4],
          ]}
        />
        {/* Cab */}
        <Box
          x={7.2}
          y={0.1}
          z={1.1}
          w={2.8}
          d={D - 0.2}
          h={2.9}
          s={s}
          tone={GREEN}
          gradId={`${uid}-greenTop`}
        />
        {/* Side window + windscreen */}
        <Face
          s={s}
          fill="#e6f5f1"
          p={[
            [8, D - 0.09, 2.6],
            [9.6, D - 0.09, 2.6],
            [9.6, D - 0.09, 3.7],
            [8, D - 0.09, 3.7],
          ]}
        />
        <Face
          s={s}
          fill="#c9eee6"
          p={[
            [10.01, 0.5, 2.5],
            [10.01, D - 0.5, 2.5],
            [10.01, D - 0.5, 3.7],
            [10.01, 0.5, 3.7],
          ]}
        />
        {/* Wheels on the visible side */}
        <Wheel cx={1.8} y={D + 0.05} cz={0.7} r={0.8} s={s} />
        <Wheel cx={5.2} y={D + 0.05} cz={0.7} r={0.8} s={s} />
        <Wheel cx={8.6} y={D + 0.05} cz={0.7} r={0.8} s={s} />
      </g>
    </svg>
  );
}
