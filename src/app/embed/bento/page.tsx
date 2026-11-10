import { WhyZineps } from "@/components/WhyZineps";
import { ReportHeight } from "../ReportHeight";

export default function EmbedBento() {
  return (
    // the section's own top margin spaces it from the one above on the site; not needed here
    <div className="py-12 [&>section]:mt-0">
      <ReportHeight id="zineps-bento" />
      <WhyZineps />
    </div>
  );
}
