"use client";

import { useState } from "react";
import { HOVER_RATE, TrustedBy } from "@/components/TrustedBy";

export function MarqueeLab() {
  const [duration, setDuration] = useState(40);
  const [hoverRate, setHoverRate] = useState(HOVER_RATE);

  return (
    <div>
      <div className="flex flex-wrap gap-8 rounded-xl border border-line bg-white p-5 text-sm">
        <label className="flex flex-col gap-2">
          <span className="text-soft">
            Loop duration: <b className="text-ink">{duration}s</b>{" "}
            <code className="text-muted">(--animate-marquee: 40s)</code>
          </span>
          <input
            type="range"
            min={10}
            max={90}
            step={5}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-64 accent-green"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-soft">
            Hover speed: <b className="text-ink">{Math.round(hoverRate * 100)}%</b>{" "}
            <code className="text-muted">(HOVER_RATE: {HOVER_RATE})</code>
          </span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={hoverRate}
            onChange={(e) => setHoverRate(Number(e.target.value))}
            className="w-64 accent-green"
          />
        </label>
      </div>

      {/* Re-mount on duration change so the new speed applies immediately */}
      <div className="-mx-4 -mt-16 md:-mx-10 lg:-mx-20">
        <TrustedBy key={duration} duration={duration} hoverRate={hoverRate} />
      </div>
    </div>
  );
}
