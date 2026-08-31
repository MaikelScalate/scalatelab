import PreCallVSL from "../components/sections/PreCallVSL";
import CasesSection from "../components/sections/CasesSection";
import ImprovementsSection from "../components/sections/ImprovementsSection";
import MethodSection from "../components/sections/MethodSection";
import UniqueWebSection from "../components/sections/UniqueWebSection";
import FAQSection from "../components/sections/FAQSection";
import Footer from "../components/sections/Footer";

export default function PreCallPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">

      {/* Glow azul */}
      <div className="pointer-events-none absolute left-[-250px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue opacity-20 blur-[140px]" />

      {/* Glow morado */}
      <div className="pointer-events-none absolute right-[-250px] top-[100px] h-[500px] w-[500px] rounded-full bg-purple opacity-20 blur-[140px]" />

      {/* Logo */}
      <header className="relative flex justify-center px-6 pt-4 sm:pt-6">
  <img
    src="/logo-scalate.png"
    alt="Scalate"
    className="h-auto w-[85px] object-contain sm:w-[100px]"
  />
</header>

      {/* VSL */}
      <PreCallVSL />

      {/* Sections */}
      <CasesSection />
      <ImprovementsSection />
      <MethodSection />
      <UniqueWebSection />
      <FAQSection />
      <Footer />

    </main>
  );
}