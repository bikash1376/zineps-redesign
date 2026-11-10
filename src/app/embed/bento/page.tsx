import { ClayBento } from "@/components/ClayBento";
import { ReportHeight } from "../ReportHeight";

// Just the cards from "Why Zineps", without the section heading.
export default function EmbedBento() {
  return (
    <ReportHeight id="zineps-bento" className="mx-auto w-full max-w-[1280px] px-10 py-10">
      <ClayBento />
    </ReportHeight>
  );
}
