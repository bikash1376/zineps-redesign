"use client";

import { useState } from "react";

const data = [
  { month: "Jan", value: 7420 },
  { month: "Feb", value: 8150 },
  { month: "Mar", value: 9030 },
  { month: "Apr", value: 10280 },
  { month: "May", value: 11613 },
  { month: "Jun", value: 12847 },
];

const max = Math.max(...data.map((d) => d.value));
const format = (n: number) => n.toLocaleString("en-US");

/** Single-series bar chart: shipments per month. Hover or focus a column for its value. */
export function ShipmentsChart() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <figure className="relative">
      <div className="flex h-40 items-end gap-2 border-b border-line" onMouseLeave={() => setActive(null)}>
        {data.map((d, i) => {
          const isActive = active === i;
          return (
            <button
              key={d.month}
              type="button"
              aria-label={`${d.month}: ${format(d.value)} shipments`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              // Full-height column = hit target larger than the bar itself
              className="group relative flex h-full flex-1 items-end outline-none"
            >
              <span
                className={`block w-full rounded-t-[4px] bg-chart transition-opacity duration-150 ease-out ${
                  active !== null && !isActive ? "opacity-40" : "opacity-100"
                }`}
                style={{ height: `${(d.value / max) * 100}%` }}
              />
              {isActive && (
                <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-lg bg-white px-2.5 py-1.5 text-xs whitespace-nowrap text-ink shadow-border">
                  <span className="text-muted">{d.month}</span>{" "}
                  <span className="font-medium tabular-nums">{format(d.value)}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-2 flex gap-2" aria-hidden>
        {data.map((d) => (
          <span key={d.month} className="flex-1 text-center text-xs text-muted">
            {d.month}
          </span>
        ))}
      </div>

      {/* Table view for assistive tech */}
      <table className="sr-only">
        <caption>Shipments per month, January to June</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Shipments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.month}>
              <td>{d.month}</td>
              <td>{format(d.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
