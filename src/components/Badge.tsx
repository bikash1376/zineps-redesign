import type { ReactNode } from "react";

/** Section tag pill — the one badge style used across the site. */
export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full border border-forest/15 bg-white/70 px-4 py-1.5 text-sm font-medium text-forest shadow-card ${className}`}
    >
      {children}
    </span>
  );
}
