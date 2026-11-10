import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ReportHeight } from "../ReportHeight";

export default function EmbedHero() {
  return (
    <ReportHeight id="zineps-hero" className="pb-10">
      <Navbar />
      <Hero />
    </ReportHeight>
  );
}
