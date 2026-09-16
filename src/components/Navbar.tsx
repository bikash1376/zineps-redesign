"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { CaretDownIcon, ListIcon, TranslateIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "./Button";

const links = ["Products", "Integrations", "Pricing", "Blogs", "Knowledge base"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Language + Sign up scroll away with the page (only the pill stays pinned)
  const { scrollY } = useScroll();
  const actionsY = useTransform(scrollY, (v) => -Math.min(v, 160));

  // Close the mobile menu on Escape or when resizing up to desktop
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    // Only the pill and actions catch clicks; the rest of the bar lets the page through
    <div className="pointer-events-none sticky top-0 z-50 w-full">
      <header className="relative mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-3 md:px-10 lg:px-20 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-10">
        {/* Empty first column balances the actions so the pill stays centered */}
        <div className="hidden xl:block" />

        {/* Floating white pill that stays identical while scrolling (like diabrowser.com) */}
        <nav className="pointer-events-auto flex h-[54px] shrink-0 items-center gap-6 rounded-2xl border-[0.7px] border-black/8 bg-white pr-2.5 pl-5 shadow-nav">
          <a href="#" aria-label="Zineps home" className="shrink-0">
            <Image src="/images/zineps-logo.svg" alt="Zineps" width={100} height={22} priority />
          </a>
          <ul className="-mx-1 hidden items-center gap-1 text-base font-medium whitespace-nowrap text-ink lg:flex">
            {links.map((link) => (
              <li key={link}>
                {/* Pill grows from 75% and fades in behind the item on hover (after nucleoapp.com) */}
                <a
                  href="#"
                  className="relative block rounded-lg px-3 py-2 outline-none before:absolute before:inset-0 before:scale-75 before:rounded-[inherit] before:bg-[#f4f5f5] before:opacity-0 before:transition before:duration-100 before:ease-[ease] hover:before:scale-100 hover:before:opacity-100 focus-visible:before:scale-100 focus-visible:before:opacity-100"
                >
                  <span className="relative">{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pointer-events-auto flex items-center justify-end gap-3 sm:gap-5">
          <motion.div style={{ y: actionsY }} className="hidden items-center gap-5 sm:flex">
            <button
              type="button"
              aria-label="Change language"
              className="hidden h-[42px] items-center justify-center gap-1.5 rounded-xl border-[0.7px] border-line bg-linear-to-b from-white to-line-soft px-3.5 text-subtle shadow-nav transition-colors hover:text-ink sm:flex"
            >
              <TranslateIcon size={25} className="block shrink-0" />
              <CaretDownIcon size={14} weight="bold" className="block shrink-0" />
            </button>
            <Button href="#" className="hidden px-7 ring-[0.7px] ring-black/8 sm:inline-flex">
              Sign up
            </Button>
          </motion.div>

          {/* Mobile / tablet menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex size-11 items-center justify-center rounded-xl border-[0.7px] border-line bg-white text-ink shadow-nav transition-[scale] duration-150 ease-out active:scale-[0.96] lg:hidden"
          >
            <ListIcon
              size={22}
              aria-hidden
              className={`absolute transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                menuOpen ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"
              }`}
            />
            <XIcon
              size={22}
              aria-hidden
              className={`absolute transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                menuOpen ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: -8,
                scale: 0.98,
                transition: { duration: 0.15 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto absolute inset-x-4 top-full origin-top rounded-2xl bg-white p-2 shadow-raised md:inset-x-10 lg:hidden"
            >
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="flex h-12 items-center rounded-xl px-4 text-base font-medium text-ink transition-colors duration-150 hover:bg-mint-mist"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex items-center gap-2 border-t border-line px-2 pt-3 pb-1">
                <button
                  type="button"
                  aria-label="Change language"
                  className="flex h-[42px] items-center gap-1.5 rounded-xl border-[0.7px] border-line bg-linear-to-b from-white to-line-soft px-3.5 text-subtle sm:hidden"
                >
                  <TranslateIcon size={22} aria-hidden />
                  <CaretDownIcon size={14} weight="bold" aria-hidden />
                </button>
                <Button href="#" className="flex-1 sm:hidden">
                  Sign up
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
