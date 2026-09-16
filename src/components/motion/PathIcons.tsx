/**
 * Line icons for the "Start where you are" cards, drawn on Phosphor's 24px grid and 1.5 stroke
 * so they sit with the rest of the icon set. Parts are split into groups so hovering the card
 * (`.group`) can animate them; the motion lives in globals.css under `.path-icon`.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Storefront: the awning flutters and the door swings open. */
export function StorefrontPathIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="path-icon" aria-hidden {...stroke}>
      <path d="M4.5 12v7.5h15V12" />
      <path className="store-door" d="M9.75 19.5V15h4.5v4.5" />
      <g className="store-awning">
        <path d="M3 9 4.5 4.5h15L21 9" />
        <path d="M9 9l.75-4.5M15 9l-.75-4.5" />
        <path d="M3 9a3 2 0 0 0 6 0 3 2 0 0 0 6 0 3 2 0 0 0 6 0" />
      </g>
    </svg>
  );
}

/** Truck: rolls forward with a bobbing body, spinning wheels and trailing speed lines. */
export function TruckPathIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="path-icon" aria-hidden {...stroke}>
      <path className="truck-speed" pathLength={1} d="M1 9.75h-3" />
      <path className="truck-speed truck-speed-late" pathLength={1} d="M1 13.5h-2.25" />
      <g className="truck-drive">
        <g className="truck-chassis">
          <path d="M3 6h9.75a.75.75 0 0 1 .75.75v9.75H2.25V6.75A.75.75 0 0 1 3 6Z" />
          <path d="M13.5 9.75H18l2.25 3.75v3H13.5M13.5 13.5h6.75" />
        </g>
        {[6.75, 16.5].map((cx) => (
          <g key={cx} className="truck-wheel">
            <circle cx={cx} cy={16.5} r={1.875} fill="white" />
            <path d="M0 -0.75v1.5" transform={`translate(${cx} 16.5)`} />
          </g>
        ))}
      </g>
    </svg>
  );
}
