"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CaretDownIcon, TranslateIcon } from "@phosphor-icons/react";

const languages = [
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "NL", label: "Nederlands", flag: "🇳🇱" },
];

// ease-out quad
const EASE_OUT_QUAD = [0.25, 0.46, 0.45, 0.94] as const;

/**
 * Showcase language switcher: the menu scales up from 0.97 at its top edge over 300ms.
 * Options highlight on hover; choosing one intentionally does nothing.
 */
export function LanguageMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative hidden sm:block">
      <button
        type="button"
        aria-label="Change language"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex h-[42px] items-center justify-center gap-1.5 rounded-xl border-[0.7px] border-line bg-linear-to-b from-white to-line-soft px-3.5 text-subtle shadow-nav transition-colors hover:text-ink"
      >
        <TranslateIcon size={25} className="block shrink-0" />
        <CaretDownIcon
          size={14}
          weight="bold"
          className={`block shrink-0 transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-label="Language"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: EASE_OUT_QUAD } }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.15, ease: EASE_OUT_QUAD } }}
            style={{ transformOrigin: "top" }}
            className="absolute top-full left-1/2 mt-2 w-44 -translate-x-1/2 rounded-xl border-[0.7px] border-black/8 bg-white p-1 shadow-nav"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                role="menuitem"
                // Showcase only: selecting a language does nothing
                className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2.5 text-left text-sm text-ink transition-colors duration-150 ease-out hover:bg-[#f4f5f5] focus-visible:bg-[#f4f5f5] focus-visible:outline-none"
              >
                <span aria-hidden className="text-base leading-none">
                  {lang.flag}
                </span>
                <span className="flex-1">{lang.label}</span>
                <span className="text-xs text-muted">{lang.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
