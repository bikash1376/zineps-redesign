import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PartnerRates } from "@/components/PartnerRates";
import { ShippingTabs } from "@/components/ShippingTabs";
import { Stats } from "@/components/Stats";
import { TrustedBy } from "@/components/TrustedBy";
import { WhyZineps } from "@/components/WhyZineps";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-24">
      <Navbar />
      <Hero />
      <TrustedBy />
      <PartnerRates />
      <Stats />
      <ShippingTabs />
      <WhyZineps />
    </main>
  );
}
