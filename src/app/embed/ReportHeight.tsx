"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Wraps an embedded section and tells the page framing it how tall the section is, so
// its iframe can fit it exactly. Measures the wrapper, not the document: the document
// is at least as tall as the frame, so it could grow the frame but never shrink it.
export function ReportHeight({ id, className, children }: { id: string; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.parent === window) return;
    const post = () =>
      window.parent.postMessage({ type: "embed-height", id, height: el.getBoundingClientRect().height }, "*");
    const ro = new ResizeObserver(post);
    ro.observe(el);
    post();
    return () => ro.disconnect();
  }, [id]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
