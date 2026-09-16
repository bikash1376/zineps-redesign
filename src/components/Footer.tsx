import Image from "next/image";
import type { ComponentType } from "react";
import {
  EnvelopeDuotoneIcon,
  LinkedinDuotoneIcon,
  MapPinDuotoneIcon,
  PhoneDuotoneIcon,
  XDuotoneIcon,
} from "./DuotoneIcons";

type FooterLink = {
  label: string;
  href: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
};

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Shipping for e-commerce & SMEs", href: "#" },
      { label: "Platform for logistics providers", href: "#" },
      { label: "Shipping AI", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "https://www.zineps.com/blog" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms and conditions", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@zineps.com", href: "mailto:info@zineps.com", icon: EnvelopeDuotoneIcon },
      { label: "020 261 4474", href: "tel:+31202614474", icon: PhoneDuotoneIcon },
      {
        label: "Herikerbergweg 288, 1101CT Amsterdam",
        href: "https://maps.google.com/?q=Herikerbergweg+288+Amsterdam",
        icon: MapPinDuotoneIcon,
      },
    ],
  },
];

const socials = [
  { label: "Zineps on LinkedIn", href: "#", icon: LinkedinDuotoneIcon },
  { label: "Zineps on X", href: "#", icon: XDuotoneIcon },
];

/** Footer after the Figma footer-inspo: brand + socials left, link columns right, copyright row. */
export function Footer() {
  return (
    <footer className="mx-auto mt-section w-full max-w-[1600px] px-4 pb-10 md:px-10 lg:px-20">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-12 sm:pt-16 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))] lg:gap-12">
        {/* Brand spans the full row on phones/tablets; link columns pair up beneath it */}
        <div className="col-span-2 lg:col-span-1">
          <a href="#" aria-label="Zineps home" className="inline-block">
            <Image src="/images/zineps-logo.svg" alt="Zineps" width={100} height={22} />
          </a>
          <p className="mt-4 max-w-[280px] text-sm text-pretty text-muted">
            The intelligent layer for global logistics.
          </p>
          <ul className="mt-8 flex gap-1">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="group flex size-10 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-surface-soft"
                >
                  <social.icon
                    size={22}
                    className="transition-transform duration-150 ease-out group-hover:scale-110"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((column) => (
          <div
            key={column.title}
            className={column.title === "Contact" ? "col-span-2 lg:col-span-1" : undefined}
          >
            <h3 className="text-sm font-medium text-ink">{column.title}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-start gap-2 text-sm text-muted transition-colors duration-150 hover:text-ink"
                  >
                    {link.icon && (
                      <link.icon
                        size={16}
                        className="mt-0.5 shrink-0 transition-transform duration-150 ease-out group-hover:scale-110"
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© 2026 Zineps.</p>
        <p>Built for businesses that ship, and the partners that move their goods.</p>
      </div>
    </footer>
  );
}
