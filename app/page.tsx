import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      {/* Glow azul */}
      <div className="absolute left-[-250px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue opacity-20 blur-[140px]" />

      {/* Glow morado */}
      <div className="absolute right-[-250px] top-[100px] h-[500px] w-[500px] rounded-full bg-purple opacity-20 blur-[140px]" />

      <Navbar />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="font-heading text-7xl font-bold">
          Scalate
        </h1>
      </section>
    </main>
  );
}