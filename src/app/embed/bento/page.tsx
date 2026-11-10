import { WhyZineps } from "@/components/WhyZineps";
import { ReportHeight } from "../ReportHeight";

export default function EmbedBento() {
  return (
    // the section's own top margin spaces it from the one above on the site; not needed here
    <ReportHeight id="zineps-bento" className="py-12 [&>section]:mt-0">
      <WhyZineps />
    </ReportHeight>
  );
}
