import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

/**
 * White circle with an arrow tinted in the button's own color, used inside
 * solid CTAs ("Start free", "Read More"). Pass the button color as `className`.
 * The arrow nudges right when the parent Button (a `group`) is hovered.
 */
export function ArrowBadge({ className = "text-ink" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`flex size-6 shrink-0 items-center justify-center rounded-full bg-white ${className}`}
    >
      <ArrowRightIcon
        size={14}
        weight="bold"
        className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
      />
    </span>
  );
}
