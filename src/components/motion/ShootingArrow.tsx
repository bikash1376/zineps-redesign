"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

const IN = "motion-safe:animate-arrow-shoot";
const OUT = "motion-safe:animate-arrow-shoot-back";

/**
 * Arrow that shoots out to the right and re-enters from the left when its button is hovered,
 * and plays the reverse when the pointer leaves. Listens on the closest link/button, so the
 * whole CTA is the trigger; nothing plays on page load. Parent must clip (overflow-hidden).
 */
export function ShootingArrow({ size = 14 }: { size?: number }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const icon = ref.current;
    const trigger = icon?.closest("a, button");
    if (!icon || !trigger) return;

    const play = (add: string, remove: string) => {
      icon.classList.remove(add, remove);
      // Force a reflow so the same animation can restart on repeated hovers
      void icon.getBoundingClientRect();
      icon.classList.add(add);
    };
    const onEnter = () => play(IN, OUT);
    const onLeave = () => play(OUT, IN);

    trigger.addEventListener("pointerenter", onEnter);
    trigger.addEventListener("pointerleave", onLeave);
    return () => {
      trigger.removeEventListener("pointerenter", onEnter);
      trigger.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <ArrowRightIcon ref={ref} size={size} weight="bold" aria-hidden />;
}
