"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const format = (n: number) => n.toLocaleString("en-US");

/**
 * Rolls a number up from 0 the first time it scrolls into view. Server HTML carries the
 * final value (no-JS and crawlers see real numbers); tabular digits keep width stable.
 */
export function CountUp({ value, suffix = "+", duration = 1.4 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  // Reset to 0 before it becomes visible, so the roll-up starts from zero
  useEffect(() => {
    if (!reduceMotion && ref.current) ref.current.textContent = `0${suffix}`;
  }, [reduceMotion, suffix]);

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;
    if (reduceMotion) {
      node.textContent = `${format(value)}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${format(Math.round(latest))}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, suffix, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(value)}
      {suffix}
    </span>
  );
}
