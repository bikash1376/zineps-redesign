import type { ComponentProps } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "dark"
  | "outline"
  | "ink"
  | "light"
  | "outline-light"
  | "pill";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-b from-teal to-green text-white shadow-nav inset-shadow-glow hover:brightness-105",
  secondary:
    "border-[0.7px] border-line bg-linear-to-b from-white to-line-soft text-subtle shadow-button hover:text-ink",
  dark: "bg-linear-to-b from-green to-forest text-white shadow-nav hover:brightness-110",
  outline: "border border-forest/25 bg-white text-forest shadow-button hover:border-forest/50",
  ink: "border border-ink bg-ink text-white shadow-button hover:bg-[#333333]",
  // For dark green surfaces (Get started banner)
  light: "border border-white bg-white text-forest hover:bg-mint-mist",
  "outline-light": "border border-white/40 bg-transparent text-white hover:border-white/70 hover:bg-white/10",
  // Soft borderless pill for quiet "learn more" links
  pill: "rounded-full! bg-surface text-ink hover:bg-line-soft",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a
      className={`group inline-flex h-[42px] items-center justify-center gap-2 rounded-xl px-6 text-base leading-4 font-medium whitespace-nowrap transition-[scale,filter,background-color,border-color,color,box-shadow] duration-150 ease-out active:scale-[0.96] ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
