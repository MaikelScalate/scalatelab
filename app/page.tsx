import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      {/* Glow azul */}
      <div className="absolute left-[-250px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue opacity-20 blur-[140px]" />

      {/* Glow morado */}
      <div className="absolute right-[-250px] top-[100px] h-[500px] w-[500px] rounded-full bg-purple opacity-20 blur-[140px]" />

      <Navbar />

      <Hero />
    </main>
  );
}