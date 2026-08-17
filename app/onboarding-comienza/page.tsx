"use client";

import Link from "next/link";

export default function OnboardingComienza() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b] text-white">
      <Background />

      {/* =====================================================
          LOGO
          ===================================================== */}

      <header
        className="
          relative
          z-20
          flex
          w-full
          justify-center
          px-5
          pt-6
          sm:pt-8
          lg:pt-10
        "
      >
        <Link
          href="/"
          aria-label="Volver a Scalate"
          className="
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <img
            src="/icon.png"
            alt="Scalate"
            className="
              h-16
              w-16
              object-contain
              sm:h-16
              sm:w-16
            "
          />
        </Link>
      </header>

      {/* =====================================================
          CONTENIDO PRINCIPAL
          ===================================================== */}

      <section
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-88px)]
          items-center
          justify-center
          px-5
          pb-8
          pt-5
          sm:px-8
          sm:pb-12
          sm:pt-8
        "
      >
        <div
  className="
    mx-auto
    w-full
    max-w-4xl
    -translate-y-30
    text-center
    sm:-translate-y-10
  "
>

          {/* =================================================
              ETIQUETA ONBOARDING
              ================================================= */}

          <div className="flex justify-center">
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.10]
                bg-[#05060b]/80
                px-5
                py-2.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/70
                shadow-[0_0_30px_rgba(124,58,237,0.05)]
                backdrop-blur-sm
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              {/* PUNTO ANIMADO */}

              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span
                  className="
                    absolute
                    h-3
                    w-3
                    animate-ping
                    rounded-full
                    bg-purple-400/50
                  "
                />

                <span
                  className="
                    relative
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-gradient-to-r
                    from-[#3B82F6]
                    to-[#D946EF]
                    shadow-[0_0_12px_rgba(217,70,239,0.9)]
                  "
                />
              </span>

              <span>ONBOARDING</span>
            </div>
          </div>

          {/* =================================================
              TÍTULO
              ================================================= */}

          <h1
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-[2.25rem]
              font-semibold
              leading-[1.04]
              tracking-[-0.055em]
              sm:mt-8
              sm:text-[3.5rem]
              lg:text-[3.8rem]
            "
          >
            BIENVENIDO/A AL
            <br />
            PROCESO DE ONBOARDING.
          </h1>

          {/* =================================================
              TEXTO
              ================================================= */}

          <div
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-white/50
              sm:mt-7
              sm:text-lg
              sm:leading-8
            "
          >
            <p>
              Este proceso es imprescindible para
              comprender tu marca a fondo y prepararnos para
              conseguir grandes resultados.
            </p>

            <p className="mt-3">
              <span className="font-semibold text-white">
                No te saltes ningún paso.
              </span>
            </p>
          </div>

          {/* =================================================
              PREGUNTA + BOTÓN
              ================================================= */}

          <div className="mt-8 sm:mt-10">
            <h2
              className="
                text-lg
                font-semibold
                tracking-[-0.02em]
                sm:text-xl
              "
            >
              ¿ESTÁS LISTO/A?
            </h2>

            {/* =================================================
                BOTÓN
                ================================================= */}

            <Link
              href="/onboarding"
              className="
                mt-5
                inline-flex
                h-14
                w-full
                max-w-[380px]
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-[#7C3AED]
                to-[#D946EF]
                px-6
                text-sm
                font-semibold
                text-white
                shadow-[0_0_25px_rgba(217,70,239,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-[0_0_45px_rgba(217,70,239,0.45)]
                active:scale-[0.98]
                sm:h-14
                sm:max-w-[400px]
                sm:text-base
              "
            >
              ¡SÍ, VAMOS A ESCALAR MI MARCA!
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}


/* ===========================================================
   FONDO GLOBAL SCALATE
   =========================================================== */

function Background() {
  return (
    <>
      {/* =====================================================
          BASE
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          bg-[#05060b]
        "
      />

      {/* =====================================================
          HEXÁGONOS
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          opacity-35
        "
        style={{
          backgroundImage: "url('/backgrounds/hex-grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
        }}
      />

      {/* =====================================================
          GLOW AZUL — IZQUIERDA
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-[-420px]
          top-[20px]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-600/30
          blur-[180px]

          sm:left-[-580px]
          sm:top-[-20px]
          sm:h-[800px]
          sm:w-[800px]

          lg:left-[-800px]
          lg:top-[-80px]
          lg:h-[900px]
          lg:w-[900px]
          lg:bg-blue-600/25
          lg:blur-[210px]
        "
      />

      {/* =====================================================
          GLOW MORADO — DERECHA
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          right-[-420px]
          top-[80px]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-purple-600/35
          blur-[180px]

          sm:right-[-580px]
          sm:top-[20px]
          sm:h-[800px]
          sm:w-[800px]

          lg:right-[-850px]
          lg:top-[-60px]
          lg:h-[900px]
          lg:w-[900px]
          lg:bg-purple-600/28
          lg:blur-[210px]
        "
      />

      {/* =====================================================
          GLOW CENTRAL
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-1/2
          top-1/2
          z-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/[0.04]
          blur-[140px]
        "
      />
    </>
  );
}