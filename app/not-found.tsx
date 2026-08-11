import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b] text-white">

      {/* Fondo */}
      <div
        className="pointer-events-none fixed inset-0 opacity-35"
        style={{
          backgroundImage: "url('/backgrounds/hex-grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
        }}
      />

      {/* Glow azul */}
      <div
        className="
          pointer-events-none
          fixed
          left-[-300px]
          top-[10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-600/30
          blur-[180px]
        "
      />

      {/* Glow morado */}
      <div
        className="
          pointer-events-none
          fixed
          right-[-300px]
          top-[10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-purple-600/30
          blur-[180px]
        "
      />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <p
          className="
            bg-gradient-to-r
            from-[#3B82F6]
            via-[#7C3AED]
            to-[#D946EF]
            bg-clip-text
            text-7xl
            font-extrabold
            text-transparent
            sm:text-8xl
          "
        >
          404
        </p>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
          Parece que te has perdido.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
          Pero tranquilidad. Lo que buscas no es una página...
          <br />
          es tu siguiente nivel.
        </p>

        <Link
          href="/"
          className="
            mt-10
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-[#7C3AED]
            to-[#D946EF]
            px-8
            py-4
            font-semibold
            text-white
            shadow-[0_0_25px_rgba(217,70,239,0.25)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-[1.02]
            hover:shadow-[0_0_45px_rgba(217,70,239,0.45)]
            active:scale-95
          "
        >
          Volver a la web →
        </Link>

      </div>
    </main>
  );
}