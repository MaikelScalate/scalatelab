import Image from "next/image";
import Link from "next/link";

export default function TreePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b] text-white">
      {/* FONDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[#05060b]"
      />

      {/* GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/hex-grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
        }}
      />

      {/* GLOW AZUL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-[-320px]
          top-[-290px]
          z-0
          h-[620px]
          w-[620px]
          rounded-full
          bg-blue-600/25
          blur-[180px]
          sm:left-[-350px]
          sm:top-[-100px]
          sm:h-[700px]
          sm:w-[700px]
        "
      />

      {/* GLOW MORADO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          right-[-320px]
          top-[-230px]
          z-0
          h-[620px]
          w-[620px]
          rounded-full
          bg-purple-600/30
          blur-[180px]
          sm:right-[-350px]
          sm:top-[100px]
          sm:h-[700px]
          sm:w-[700px]
        "
      />

      {/* CONTENIDO */}
      <section
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-xl
          flex-col
          items-center
          px-6
          pb-10
          pt-10
          sm:px-8
          sm:pt-14
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Scalate"
          className="transition-all duration-300 hover:scale-[1.03]"
        >
          <Image
            src="/logo-scalate.png"
            alt="Scalate"
            width={220}
            height={80}
            priority
            className="h-auto w-[125px] object-contain sm:w-[145px]"
          />
        </Link>

        {/* DESCRIPCIÓN */}
        <div className="mt-6 text-center sm:mt-7">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-white/40
            "
          >
            E-commerce Growth Company
          </p>

          <h1
            className="
              mt-4
              text-2xl
              font-semibold
              tracking-[-0.045em]
              sm:text-3xl
            "
          >
            LLEVA TU MARCA E-COMMERCE AL SIGUIENTE NIVEL
          </h1>

          <p
            className="
              mx-auto
              mt-3
              max-w-md
              text-sm
              leading-6
              text-white/45
            "
          >
            Análisis, estrategia y crecimiento para marcas que quieren escalar.
          </p>
        </div>

        {/* LINKS */}
        <div className="mt-9 w-full space-y-4 sm:mt-10">
          {/* WEB */}
          <Link
            href="/"
            className="
              group
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              border
              border-white/[0.10]
              bg-white/[0.035]
              px-5
              py-4
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-purple-400/30
              hover:bg-white/[0.06]
              hover:shadow-[0_0_35px_rgba(124,58,237,0.12)]
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-purple-400/20
                  bg-purple-500/10
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path
                    d="M3 10.5 12 3l9 7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 9.5V21h13V9.5M9 21v-7h6v7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Conoce Scalate (Web)
                </p>

                <p className="mt-0.5 text-xs text-white/35">
                  Descubre cómo ayudamos a founders a crecer sus marcas
                </p>
              </div>
            </div>

            <span
              className="
                text-lg
                text-white/30
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-purple-300
              "
            >
              →
            </span>
          </Link>

          {/* YOUTUBE */}
          <a
            href="https://www.youtube.com/@maikelgudinecom"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              border
              border-white/[0.10]
              bg-white/[0.035]
              px-5
              py-4
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-purple-400/30
              hover:bg-white/[0.06]
              hover:shadow-[0_0_35px_rgba(124,58,237,0.12)]
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-purple-400/20
                  bg-purple-500/10
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-purple-300"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.6 3.9-6.6 3.9Z" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  YouTube
                </p>

                <p className="mt-0.5 text-xs text-white/35">
                  Obtén mucho valor y descubre cómo escalamos marcas.
                </p>
              </div>
            </div>

            <span
              className="
                text-lg
                text-white/30
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-purple-300
              "
            >
              →
            </span>
          </a>

          {/* APLICAR */}
          <Link
            href="/aplicar"
            className="
              group
              mt-6
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              border
              border-purple-400/25
              bg-gradient-to-r
              from-purple-500/10
              to-fuchsia-500/10
              px-5
              py-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-purple-400/45
              hover:shadow-[0_0_40px_rgba(168,85,247,0.16)]
            "
          >
            <div>
              <p className="text-sm font-semibold text-white">
                ¿Quieres escalar tu marca ahora?
              </p>

              <p className="mt-0.5 text-xs text-white/40">
                Permítenos conocer tu marca para ayudarte.
              </p>
            </div>

            <span
              className="
                text-lg
                text-white/30
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-purple-300
              "
            >
              →
            </span>
          </Link>
        </div>

        {/* FOOTER */}
        <div className="mt-auto pt-12 text-center sm:pt-14">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/20">
            © {new Date().getFullYear()} Scalate
          </p>
        </div>
      </section>
    </main>
  );
}