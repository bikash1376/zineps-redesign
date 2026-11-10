import { Hero } from "@/components/Hero";
import { ReportHeight } from "../ReportHeight";

export default function EmbedHero() {
  return (
    <div className="pb-10">
      <ReportHeight id="zineps-hero" />
      <Hero />
    </div>
  );
}
