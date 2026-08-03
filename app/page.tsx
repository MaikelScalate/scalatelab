import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import CasesSection from "./components/sections/CasesSection";
import GrowthSection from "./components/sections/GrowthSection";
import CalculatorSection from "./components/sections/CalculatorSection";
import ImprovementsSection from "./components/sections/ImprovementsSection";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      {/* Glow azul */}
      <div className="absolute left-[-250px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue opacity-20 blur-[140px]" />

      {/* Glow morado */}
      <div className="absolute right-[-250px] top-[100px] h-[500px] w-[500px] rounded-full bg-purple opacity-20 blur-[140px]" />

      <Navbar />

      <Hero />
      <CasesSection />

      <GrowthSection/>
      <CalculatorSection />
      <ImprovementsSection />
    </main>
  );
}