import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "dark" | "outline" | "ink" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  primary:
    "border border-sage bg-linear-to-b from-teal to-green text-white inset-shadow-glow hover:brightness-105",
  secondary:
    "border-[0.7px] border-line bg-linear-to-b from-white to-line-soft text-subtle hover:text-ink",
  dark: "border border-pine bg-linear-to-b from-green to-forest text-white hover:brightness-110",
  outline: "border border-forest/25 bg-white text-forest hover:border-forest/50",
  ink: "border border-ink bg-ink text-white hover:bg-[#333333]",
  // For dark green surfaces (Get started banner)
  light: "border border-white bg-white text-forest hover:bg-mint-mist",
  "outline-light": "border border-white/40 bg-transparent text-white hover:border-white/70 hover:bg-white/10",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a
      className={`group inline-flex h-[42px] items-center justify-center gap-2 rounded-xl px-6 text-base leading-4 font-medium whitespace-nowrap shadow-button transition-[scale,filter,background-color,border-color,color,box-shadow] duration-150 ease-out active:scale-[0.96] ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
