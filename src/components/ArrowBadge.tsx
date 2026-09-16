import { ShootingArrow } from "./motion/ShootingArrow";

/**
 * White circle with an arrow tinted in the button's own color, used inside
 * solid CTAs ("Start free", "Read More"). Pass the button color as `className`.
 * The arrow shoots through the circle on hover, and back the other way on leave.
 */
export function ArrowBadge({ className = "text-ink" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ${className}`}
    >
      <ShootingArrow size={14} />
    </span>
  );
}
