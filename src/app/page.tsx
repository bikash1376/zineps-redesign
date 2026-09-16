import { Differentiation } from "@/components/Differentiation";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { GetStarted } from "@/components/GetStarted";
import { GlobalScale } from "@/components/GlobalScale";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { LogisticsPartners } from "@/components/LogisticsPartners";
import { Navbar } from "@/components/Navbar";
import { PartnerRates } from "@/components/PartnerRates";
import { RecentNews } from "@/components/RecentNews";
import { ShippingAI } from "@/components/ShippingAI";
import { ShippingTabs } from "@/components/ShippingTabs";
import { StartWhereYouAre } from "@/components/StartWhereYouAre";
import { Stats } from "@/components/Stats";
import { TrustedBy } from "@/components/TrustedBy";
import { WhyZineps } from "@/components/WhyZineps";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Navbar />
        <Hero />
        {/* After the hero every section sits `mt-section` (164px) below the previous one */}
        <TrustedBy />
        <PartnerRates />
        <Stats />
        <ShippingTabs />
        <WhyZineps />
        <ShippingAI />
        <LogisticsPartners />
        <Integrations />
        <GlobalScale />
        <Differentiation />
        <FAQ />
        <StartWhereYouAre />
        <RecentNews />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
