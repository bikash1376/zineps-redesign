import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false } };

// Single sections, made to be framed by another site: no navbar or footer.
export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-1 flex-col bg-white">{children}</main>;
}
