import type { Metadata } from "next";
import { ShippingAI } from "@/components/ShippingAI";
import { ShippingTabs } from "@/components/ShippingTabs";
import { Navbar } from "@/components/Navbar";
import { Harness } from "./Harness";
import { IllustrationLibrary } from "./illustrations";

// Prototype surface for bento variants and the illustration library. Not linked anywhere; nothing in production imports it.
export const metadata: Metadata = {
  title: "Bento variants — Zineps playground",
  robots: { index: false, follow: false },
};

export default function BentoPrototypes() {
  return (
    <main className="flex flex-1 flex-col pb-40">
      <Navbar />
      {/* Neighbours from the home page for realistic context */}
      <ShippingTabs />
      <Harness />
      <ShippingAI />
      {/* Illustration set with placement guidance for the rest of the site */}
      <IllustrationLibrary />
    </main>
  );
}
