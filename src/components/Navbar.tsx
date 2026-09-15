"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CaretDownIcon, TranslateIcon } from "@phosphor-icons/react";
import { Button } from "./Button";

const links = ["Products", "Integrations", "Pricing", "Blogs", "Knowledge base"];

export function Navbar() {
  // The whole bar turns to frosted glass once the page scrolls beneath it
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Only the pill and actions catch clicks; the rest of the bar lets the page through
    <div className="pointer-events-none sticky top-0 z-50 w-full">
      {/* Frosted glass with no hard edge: blur + white wash fade out below the bar */}
      <div
        aria-hidden
        className={`absolute inset-x-0 top-0 h-[calc(100%+40px)] bg-linear-to-b from-white/75 via-white/45 to-white/0 [mask-image:linear-gradient(to_bottom,black_45%,transparent)] backdrop-blur-xl backdrop-saturate-150 transition-opacity duration-300 ease-out ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <header className="relative mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-3 md:px-10 lg:px-20 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-10">
        {/* Empty first column balances the actions so the pill stays centered */}
        <div className="hidden xl:block" />

        <nav
          className={`pointer-events-auto flex h-[54px] shrink-0 items-center gap-6 rounded-2xl border-[0.7px] pr-2.5 pl-5 transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
            scrolled ? "border-transparent bg-transparent shadow-none" : "border-black/8 bg-white shadow-nav"
          }`}
        >
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

        <div className="pointer-events-auto flex items-center justify-end gap-5">
          <button
            type="button"
            aria-label="Change language"
            className="hidden h-[42px] items-center justify-center gap-1.5 rounded-xl border-[0.7px] border-line bg-linear-to-b from-white to-line-soft px-3.5 text-subtle transition-colors hover:text-ink sm:flex"
          >
            <TranslateIcon size={25} className="block shrink-0" />
            <CaretDownIcon size={14} weight="bold" className="block shrink-0" />
          </button>
          <Button href="#" className="px-7 shadow-none">
            Sign up
          </Button>
        </div>
      </header>
    </div>
  );
}
