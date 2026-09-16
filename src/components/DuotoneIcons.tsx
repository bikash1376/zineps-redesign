/**
 * Static duotone "microbold" icons (footer and other small UI). Same recipe as the bento chip
 * icons in motion/BentoIcons: solid shapes on a 24px grid, primary forest, secondary neutral.
 */

import type { ReactNode } from "react";

const primary = "var(--icon-primary, #4A7469)";
const secondary = "var(--icon-secondary, #D5DCD9)";

type IconProps = { size?: number; className?: string };

function Svg({ size = 20, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      {children}
    </svg>
  );
}

export function LinkedinDuotoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill={secondary} />
      <circle cx="7.75" cy="7.5" r="1.75" fill={primary} />
      <rect x="6.25" y="10.5" width="3" height="7.5" rx="1" fill={primary} />
      <path
        d="M11.25 11.5a1 1 0 0 1 1-1h1a1 1 0 0 1 .95.7 3.25 3.25 0 0 1 5.05 2.7V17a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1.25 1.25 0 0 0-2.5 0v3a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1z"
        fill={primary}
      />
    </Svg>
  );
}

export function XDuotoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill={secondary} />
      <path d="M6.5 6.5h3.4l7.6 11h-3.4z" fill={primary} />
      <path
        d="m7 17.5 4.4-4.9M17 6.5l-4.1 4.5"
        stroke={primary}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function EnvelopeDuotoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2" y="4.5" width="20" height="15" rx="3" fill={secondary} />
      <path
        d="m5 8 7 5 7-5"
        fill="none"
        stroke={primary}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PhoneDuotoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5.5" y="1.75" width="13" height="20.5" rx="3.25" fill={secondary} />
      <rect x="9.5" y="4.25" width="5" height="1.75" rx=".875" fill={primary} />
      <circle cx="12" cy="18.5" r="1.5" fill={primary} />
    </Svg>
  );
}

export function MapPinDuotoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <ellipse cx="12" cy="20.5" rx="6" ry="2" fill={secondary} />
      <path
        d="M12 2a7 7 0 0 0-7 7c0 4.6 5.3 9.9 6.3 10.8a1 1 0 0 0 1.4 0C13.7 18.9 19 13.6 19 9a7 7 0 0 0-7-7z"
        fill={primary}
      />
      <circle cx="12" cy="9" r="2.5" fill={secondary} />
    </Svg>
  );
}
