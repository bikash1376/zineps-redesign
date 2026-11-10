"use client";

import { useEffect } from "react";

// Tells the page framing this one how tall the content is, so its iframe can fit it
// exactly instead of scrolling inside itself.
export function ReportHeight({ id }: { id: string }) {
  useEffect(() => {
    if (window.parent === window) return;
    const post = () =>
      window.parent.postMessage({ type: "embed-height", id, height: document.documentElement.scrollHeight }, "*");
    const ro = new ResizeObserver(post);
    ro.observe(document.body);
    post();
    return () => ro.disconnect();
  }, [id]);
  return null;
}
