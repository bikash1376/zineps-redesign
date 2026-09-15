import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "dark" | "outline" | "ink";

const variants: Record<Variant, string> = {
  primary:
    "border border-sage bg-linear-to-b from-teal to-green text-white inset-shadow-glow hover:brightness-105",
  secondary:
    "border-[0.7px] border-line bg-linear-to-b from-white to-line-soft text-subtle hover:text-ink",
  dark: "border border-pine bg-linear-to-b from-green to-forest text-white hover:brightness-110",
  outline: "border border-forest/25 bg-white text-forest hover:border-forest/50",
  ink: "border border-ink bg-ink text-white hover:bg-[#333333]",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a
      className={`inline-flex h-[42px] items-center justify-center gap-2 rounded-xl px-6 text-base leading-4 font-medium whitespace-nowrap shadow-button transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
