import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-24">
      <Navbar />
      <Hero />
    </main>
  );
}
