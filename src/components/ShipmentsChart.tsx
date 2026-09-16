"use client";

import { EvilBarChart } from "@/components/evilcharts/charts/recharts-bar-chart";
import type { ChartConfig } from "@/components/evilcharts/ui/recharts-chart";

const data = [
  { month: "Jan", shipments: 7420 },
  { month: "Feb", shipments: 8150 },
  { month: "Mar", shipments: 9030 },
  { month: "Apr", shipments: 10280 },
  { month: "May", shipments: 11613 },
  { month: "Jun", shipments: 12847 },
];

// Single series in the validated chart green (#339c84)
const config = {
  shipments: { label: "Shipments", colors: { light: ["#339c84"] } },
} satisfies ChartConfig;

const format = (n: number) => n.toLocaleString("en-US");

/** Shipments per month — Evil Charts bar chart with hover tooltip and a table view. */
export function ShipmentsChart() {
  return (
    // CSS hover muting (see .bar-hover-mute in globals.css) keeps transitions smooth across re-renders
    <figure className="bar-hover-mute">
      <EvilBarChart
        config={config}
        data={data}
        className="aspect-auto h-40"
        barRadius={4}
        barCategoryGap={12}
        animationType="left-to-right"
      >
        <EvilBarChart.XAxis dataKey="month" />
        <EvilBarChart.Tooltip roundness="lg" />
        <EvilBarChart.Bar dataKey="shipments" barProps={{ activeBar: false }} />
      </EvilBarChart>

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
              <td>{format(d.shipments)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
