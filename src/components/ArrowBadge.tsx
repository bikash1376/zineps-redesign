import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

/**
 * White circle with an arrow tinted in the button's own color, used inside
 * solid CTAs ("Start free", "Read More"). Pass the button color as `className`.
 */
export function ArrowBadge({ className = "text-ink" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`flex size-6 shrink-0 items-center justify-center rounded-full bg-white ${className}`}
    >
      <ArrowRightIcon size={14} weight="bold" />
    </span>
  );
}
