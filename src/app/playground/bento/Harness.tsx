"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Badge } from "@/components/Badge";
import { Clay } from "./v-clay";
import { Command } from "./v-command";
import { Data } from "./v-data";
import { Framed3 } from "./v-framed";
import { Journey } from "./v-journey";
import { Pastel } from "./v-pastel";
import { SoftUI } from "./v-softui";
import { Editorial, Mosaic, Spotlight } from "./variants";

// Round 1: interaction/layout explorations · Round 2: ref/bento1–4 styles · Round 3: product-native
const variants = [
  { name: "Spotlight", Component: Spotlight },
  { name: "Mosaic", Component: Mosaic },
  { name: "Editorial", Component: Editorial },
  { name: "Pastel", Component: Pastel },
  { name: "Clay", Component: Clay },
  { name: "Soft UI", Component: SoftUI },
  { name: "Data", Component: Data },
  { name: "Journey", Component: Journey },
  { name: "Command", Component: Command },
  { name: "Framed", Component: Framed3 },
];

// Picker styles — verbatim from .agents/skills/prototype/PICKER.md (harness chrome, not a design decision)
const pickerCss = `
.proto-picker { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 2147483647; display: flex; align-items: center; gap: 2px; padding: 4px; border-radius: 999px; background: rgba(10, 10, 10, 0.82); -webkit-backdrop-filter: blur(12px) saturate(1.4); backdrop-filter: blur(12px) saturate(1.4); box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08) inset, 0 8px 24px rgba(0, 0, 0, 0.24), 0 2px 6px rgba(0, 0, 0, 0.12); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; line-height: 1; -webkit-font-smoothing: antialiased; user-select: none; -webkit-user-select: none; }
.proto-picker-highlight { position: absolute; top: 4px; left: 0; height: 28px; border-radius: 999px; background: rgba(255, 255, 255, 0.12); will-change: transform; }
.proto-picker[data-ready] .proto-picker-highlight { transition: transform 250ms cubic-bezier(0.23, 1, 0.32, 1), width 250ms cubic-bezier(0.23, 1, 0.32, 1); }
@media (prefers-reduced-motion: reduce) { .proto-picker[data-ready] .proto-picker-highlight { transition: none; } }
.proto-picker-item { position: relative; display: flex; align-items: center; height: 28px; padding: 0 12px; border: 0; border-radius: 999px; background: transparent; color: rgba(255, 255, 255, 0.55); font: inherit; cursor: pointer; transition: color 150ms ease-out; }
.proto-picker-item:hover { color: rgba(255, 255, 255, 0.85); }
.proto-picker-item:active { transform: scale(0.97); }
.proto-picker-item:focus-visible { outline: 2px solid rgba(255, 255, 255, 0.4); outline-offset: 2px; }
.proto-picker-item[data-active] { color: #fff; }
.proto-picker-divider { width: 1px; height: 16px; margin: 0 4px; background: rgba(255, 255, 255, 0.12); }
.proto-picker-replay { padding: 0 10px; font-size: 14px; }
.proto-picker[data-position="top"] { bottom: auto; top: 24px; }
`;

export function Harness() {
  const [current, setCurrent] = useState(0);
  const [mountKey, setMountKey] = useState(0);
  const [ready, setReady] = useState(false);
  const pickerRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const moveHighlight = useCallback(() => {
    const el = itemRefs.current[current];
    const hl = highlightRef.current;
    if (!el || !hl) return;
    hl.style.width = `${el.offsetWidth}px`;
    hl.style.transform = `translateX(${el.offsetLeft}px)`;
  }, [current]);

  const setActive = useCallback((i: number) => {
    if (i < 0 || i >= variants.length) return;
    setCurrent(i);
    setMountKey((k) => k + 1); // re-mount so entrance animations re-run
    const url = new URL(window.location.href);
    url.searchParams.set("v", String(i + 1));
    window.history.replaceState(null, "", url);
  }, []);

  // Initial selection from ?v=, then enable the highlight slide after first paint
  useEffect(() => {
    const v = parseInt(new URLSearchParams(window.location.search).get("v") ?? "", 10);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync from URL once on mount
    if (v >= 1 && v <= variants.length) setCurrent(v - 1);
    requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
  }, []);

  useLayoutEffect(() => {
    moveHighlight();
    window.addEventListener("resize", moveHighlight);
    return () => window.removeEventListener("resize", moveHighlight);
  }, [moveHighlight]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      // 1–9 select directly; 0 selects the 10th variant
      const num = e.key === "0" ? 10 : parseInt(e.key, 10);
      if (num >= 1 && num <= variants.length) setActive(num - 1);
      else if (e.key === "ArrowRight") setActive((current + 1) % variants.length);
      else if (e.key === "ArrowLeft") setActive((current - 1 + variants.length) % variants.length);
      else if (e.key === "r" || e.key === "R") setMountKey((k) => k + 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [current, setActive]);

  const Variant = variants[current].Component;

  return (
    <>
      <style>{pickerCss}</style>

      {/* Realistic context: the section exactly as it sits on the home page */}
      <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center">
          <Badge>Why Zineps</Badge>
          <h2 className="mt-5 text-3xl font-medium text-balance text-ink">
            Everything you need for <br className="hidden sm:block" />
            successful shipping
          </h2>
        </div>
        <div className="mx-auto mt-heading max-w-[1200px]">
          <Variant key={mountKey} />
        </div>
      </section>

      <nav ref={pickerRef} className="proto-picker" aria-label="Prototype variants" data-ready={ready ? "" : undefined}>
        <span ref={highlightRef} className="proto-picker-highlight" aria-hidden="true" />
        {variants.map((v, i) => (
          <button
            key={v.name}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="proto-picker-item"
            data-active={i === current ? "" : undefined}
            aria-current={i === current ? "true" : undefined}
            onClick={() => setActive(i)}
          >
            {v.name}
          </button>
        ))}
        <span className="proto-picker-divider" aria-hidden="true" />
        <button className="proto-picker-item proto-picker-replay" aria-label="Replay animation (R)" onClick={() => setMountKey((k) => k + 1)}>
          ↻
        </button>
      </nav>
    </>
  );
}
