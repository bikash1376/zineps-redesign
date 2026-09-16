/**
 * Duotone "microbold" icons for the "Why Zineps" bento chips: solid shapes on a 24px grid,
 * primary in forest green, secondary in a soft neutral (same tokens as public/icons/duotone).
 * Parts are split into groups so hovering the card (`.group`) can animate them; the motion
 * lives in globals.css under `.path-icon`.
 */

const primary = "var(--icon-primary, #4A7469)";
const secondary = "var(--icon-secondary, #D5DCD9)";

type IconProps = { size?: number };

function Svg({ size, children }: { size: number; children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="path-icon" aria-hidden>
      {children}
    </svg>
  );
}

/** Globe: the meridian turns like the globe is spinning, a parcel dot slides across. */
export function GlobePathIcon({ size = 20 }: IconProps) {
  return (
    <Svg size={size}>
      <circle cx="12" cy="12" r="9.5" fill={secondary} />
      <rect x="2.5" y="11" width="19" height="2" rx="1" fill={primary} opacity="0.35" />
      <ellipse className="globe-meridian" cx="12" cy="12" rx="3.75" ry="9.5" fill={primary} />
      <circle className="globe-dot" cx="12" cy="12" r="1.75" fill={primary} />
    </Svg>
  );
}

/** Plug: the plug slides into the socket and a spark flashes at the joint. */
export function PlugPathIcon({ size = 20 }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="14" y="4.5" width="8" height="15" rx="3" fill={secondary} />
      <g className="plug-body">
        <rect x="1.5" y="7" width="8.5" height="10" rx="3" fill={primary} />
        <rect x="9" y="8.75" width="3.5" height="2" rx="1" fill={primary} />
        <rect x="9" y="13.25" width="3.5" height="2" rx="1" fill={primary} />
      </g>
      <path
        className="plug-spark"
        pathLength={1}
        d="M12.5 3.5 13 5.5M15.5 2.5 15 4.5"
        fill="none"
        stroke={primary}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/** Package: the lid pops up with a little bounce, then settles. */
export function PackagePathIcon({ size = 20 }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="3.5" y="9.5" width="17" height="11" rx="2" fill={secondary} />
      <rect x="9.5" y="12.5" width="5" height="2" rx="1" fill={primary} />
      <g className="package-lid">
        <rect x="2" y="4" width="20" height="5.5" rx="2" fill={primary} />
      </g>
    </Svg>
  );
}

/** Chart: bars grow one after another. */
export function ChartPathIcon({ size = 20 }: IconProps) {
  return (
    <Svg size={size}>
      <rect
        className="chart-bar chart-bar-1"
        x="3"
        y="12"
        width="5"
        height="9"
        rx="1.5"
        fill={secondary}
      />
      <rect
        className="chart-bar chart-bar-2"
        x="9.5"
        y="3"
        width="5"
        height="18"
        rx="1.5"
        fill={primary}
      />
      <rect
        className="chart-bar chart-bar-3"
        x="16"
        y="8"
        width="5"
        height="13"
        rx="1.5"
        fill={secondary}
      />
    </Svg>
  );
}

/** Shield: the check redraws and a soft pulse ripples out. */
export function ShieldPathIcon({ size = 20 }: IconProps) {
  const shield = "M12 2.25 20.25 5.5v5.75c0 5.5-3.6 9.1-8.25 10.5-4.65-1.4-8.25-5-8.25-10.5V5.5z";
  return (
    <Svg size={size}>
      <path className="shield-pulse" d={shield} fill={secondary} />
      <path d={shield} fill={secondary} />
      <path
        className="shield-check"
        pathLength={1}
        d="m8.25 12 2.5 2.5 5-5.25"
        fill="none"
        stroke={primary}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
