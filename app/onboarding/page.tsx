"use client";

import { useState } from "react";
import Link from "next/link";

export default function Onboarding() {
  const [completed, setCompleted] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05060b] text-white">
      <Background />

      <div
        className="
          relative z-10
          mx-auto
          w-full
          max-w-[1340px]
          px-4
          pb-10
          sm:px-6
          lg:px-0
        "
      >
        {/* =====================================================
            LOGO
            ===================================================== */}

        <header className="flex justify-center pt-6 sm:pt-7 lg:pt-8">
          <Link
            href="/"
            aria-label="Volver a Scalate"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/icon.png"
              alt="Scalate"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
            />
          </Link>
        </header>

        {/* =====================================================
            CABECERA CENTRADA
            ===================================================== */}

        <section className="mx-auto mt-6 max-w-4xl text-center sm:mt-7 lg:mt-8">
          <div className="flex justify-center">
            <div
              className="
                inline-flex items-center gap-3 rounded-full
                border border-white/[0.10]
                bg-[#05060b]/80
                px-5 py-2.5
                text-[11px] font-semibold uppercase
                tracking-[0.14em]
                text-white/70
                shadow-[0_0_30px_rgba(124,58,237,0.08)]
                backdrop-blur-sm
                sm:px-6 sm:py-3 sm:text-xs
              "
            >
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-purple-400/40" />

                <span
                  className="
                    relative h-1.5 w-1.5 rounded-full
                    bg-gradient-to-r from-[#3B82F6] to-[#D946EF]
                    shadow-[0_0_12px_rgba(217,70,239,0.9)]
                  "
                />
              </span>

              <span>ONBOARDING</span>
            </div>
          </div>

          <h1
            className="
              mt-7
              text-[2rem]
              font-semibold
              leading-[1.03]
              tracking-[-0.055em]
              sm:mt-8
              sm:text-[3rem]
              lg:text-[3.4rem]
            "
          >
            Completa tu onboarding
          </h1>

          <p
  className="
    mx-auto mt-2
    text-sm leading-6 text-white/45
    sm:mt-3 sm:text-base sm:leading-7
    lg:whitespace-nowrap
  "
>
  Sigue los pasos para que podamos conocer tu marca a fondo y ayudarte a escalar.
</p>
        </section>

        {/* =====================================================
            LAYOUT
            ===================================================== */}

        <div
          className="
            mt-8
            grid
            items-stretch
            gap-5
            lg:mt-9
            lg:grid-cols-[300px_minmax(0,700px)]
lg:justify-center
            lg:gap-6
            lg:items-stretch
          "
        >
          {/* ===================================================
              SIDEBAR
              =================================================== */}

          <aside
            className="
              hidden
              self-stretch
              rounded-[20px]
              border
              border-white/[0.09]
              bg-black
              p-5
              shadow-[0_20px_70px_rgba(0,0,0,0.26)]
              backdrop-blur-xl
              lg:block
            "
          >
            {/* PROGRESO */}

            <div>
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-white/40
                "
              >
                Tu progreso
              </p>

              <div className="mt-3">
                <span className="text-2xl font-semibold tracking-[-0.04em]">
                  {completed ? "25%" : "0%"}
                </span>
              </div>

              <p className="mt-1 text-[11px] text-white/40">
                {completed
                  ? "1 de 4 pasos completados"
                  : "0 de 4 pasos completados"}
              </p>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="
                    h-full rounded-full
                    bg-gradient-to-r
                    from-[#7C3AED]
                    to-[#D946EF]
                    transition-all duration-700
                  "
                  style={{
                    width: completed ? "25%" : "0%",
                  }}
                />
              </div>
            </div>

            <div className="my-5 h-px bg-white/[0.08]" />

            {/* PASOS */}

            <div className="space-y-6">
              <ProgressStep
                number="01"
                label="Tu marca"
                active={!completed}
                completed={completed}
                first
              />

              <ProgressStep
                number="02"
                label="Plataformas"
                active={false}
                completed={false}
              />

              <ProgressStep
                number="03"
                label="Publicidad"
                active={false}
                completed={false}
              />

              <ProgressStep
                number="04"
                label="Email marketing"
                active={false}
                completed={false}
              />
            </div>

            {/* MENSAJE */}

            <div
              className="
                mt-7
                rounded-xl
                border border-white/[0.07]
                bg-white/[0.02]
                p-3.5
              "
            >
              <div className="flex gap-3">
                <div
                  className="
                    flex h-7 w-7 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-purple-500/[0.08]
                    text-sm
                    text-purple-300
                  "
                >
                  ✦
                </div>

                <p className="text-xs leading-5 text-white/45">
                  Completa todos los pasos para que podamos
                  analizar tu marca y crear el mejor plan de
                  acción posible.
                </p>
              </div>
            </div>
          </aside>

          {/* ===================================================
              CONTENIDO
              =================================================== */}

          <section className="min-w-0">
            {/* PROGRESO MÓVIL */}

            <div className="mb-5 lg:hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                  Tu progreso
                </span>

                <span className="text-xs font-semibold text-white/60">
                  {completed ? "25%" : "0%"}
                </span>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="
                    h-full rounded-full
                    bg-gradient-to-r
                    from-[#7C3AED]
                    to-[#D946EF]
                    transition-all duration-700
                  "
                  style={{
                    width: completed ? "25%" : "0%",
                  }}
                />
              </div>

              <div className="mt-2.5 grid grid-cols-4 gap-2">
                <ProgressStepMobile
                  number="01"
                  label="Tu marca"
                  active={!completed}
                  completed={completed}
                />

                <ProgressStepMobile
                  number="02"
                  label="Plataformas"
                  active={false}
                  completed={false}
                />

                <ProgressStepMobile
                  number="03"
                  label="Publicidad"
                  active={false}
                  completed={false}
                />

                <ProgressStepMobile
                  number="04"
                  label="Email"
                  active={false}
                  completed={false}
                />
              </div>
            </div>

            {/* =================================================
                TARJETA PRINCIPAL
                ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-[20px]
                border border-white/[0.09]
                bg-black
                shadow-[0_25px_100px_rgba(0,0,0,0.32)]
                backdrop-blur-xl
                lg:rounded-[22px]
              "
            >
              <div className="p-4 sm:p-6 lg:p-6">
                {/* =================================================
                    01. VIDEO
                    ================================================= */}

                <div>
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-purple-400/40
                        bg-purple-500/[0.06]
                        text-purple-300
                      "
                    >
                      ▶
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-purple-400">
                        01. Antes de continuar
                      </p>

                      <h3 className="mt-1 text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                        Vídeo de onboarding
                      </h3>

                      <p className="mt-2 max-w-3xl text-sm leading-6 text-white/45">
                        Visualiza este vídeo antes de continuar. Te ayudará a entender
                        cómo funciona el proceso y qué esperamos de esta primera fase.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      relative mt-4
                      aspect-video
                      overflow-hidden
                      rounded-2xl
                      border border-white/[0.10]
                      bg-black
                      shadow-[0_15px_60px_rgba(0,0,0,0.4)]
                    "
                  >
                    {videoStarted ? (
                      <iframe
                        src="https://drive.google.com/file/d/1huv13APZDsr5kvwKIJYehSgkPtlP52CL/preview?autoplay=1"
                        className="absolute inset-0 h-full w-full border-0"
                        allow="autoplay"
                        allowFullScreen
                        title="Vídeo de onboarding Scalate"
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setVideoStarted(true)}
                        aria-label="Reproducir vídeo de onboarding"
                        className="
                          absolute inset-0
                          h-full w-full
                          cursor-pointer
                          border-0
                          bg-transparent
                          p-0
                        "
                      >
                        <img
                          src="/onboarding-video-cover.png"
                          alt="Vídeo de onboarding Scalate"
                          className="h-full w-full object-cover"
                        />

                        {/* Botón Play de Google Drive, recreado sobre la portada */}
                        <span
                          aria-hidden="true"
                          className="
                            absolute left-1/2 top-1/2
                            flex h-16 w-16
                            -translate-x-1/2 -translate-y-1/2
                            items-center justify-center
                            rounded-full
                            bg-black/75
                            text-white
                            shadow-[0_0_30px_rgba(0,0,0,0.45)]
                            backdrop-blur-sm
                            transition-transform duration-300
                            hover:scale-105
                            sm:h-20 sm:w-20
                          "
                        >
                          <span className="ml-1 text-2xl sm:text-3xl">▶</span>
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                {/* =================================================
                    02. CUESTIONARIO
                    ================================================= */}

                <div className="mt-6 border-t border-white/[0.07] pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-purple-400/40
                        bg-purple-500/[0.06]
                        text-lg text-purple-300
                      "
                    >
                      ▣
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/35">
                        02. Primer paso
                      </p>

                      <h3 className="mt-1 text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                        Cuestionario inicial
                      </h3>

                      <p className="mt-2 max-w-3xl text-sm leading-6 text-white/45">
                        Responde el siguiente cuestionario con la mayor cantidad de
                        información posible. Cuanto mejor conozcamos tu marca, mejor
                        podremos trabajar sobre ella.
                      </p>

                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScQ8awNtuz400Ni4NpLB7bmHq1ac5aayLH2Z5AIC4uU4TRasA/viewform?usp=send_form"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-5
                          inline-flex
                          w-full
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-r
                          from-[#7C3AED]
                          to-[#D946EF]
                          px-5
                          py-3.5
                          text-sm
                          font-semibold
                          text-white
                          shadow-[0_0_25px_rgba(217,70,239,0.18)]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:shadow-[0_0_35px_rgba(217,70,239,0.35)]
                          sm:w-auto
                        "
                      >
                        COMPLETAR CUESTIONARIO
                        <span className="ml-2">↗</span>
                      </a>

                      <p className="mt-2 text-xs text-white/25">
                        Se abrirá en una nueva pestaña
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    03. PLANTILLAS
                    ================================================= */}

                <div className="mt-6 border-t border-white/[0.07] pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-white/[0.08]
                        bg-white/[0.025]
                        text-lg
                        text-purple-300
                      "
                    >
                      ✦
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-purple-300/65">
                        03. Recurso extra
                      </p>

                      <h3 className="mt-1 text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                        Plantillas de onboarding
                      </h3>

                      <p className="mt-2 max-w-3xl text-sm leading-6 text-white/45">
                        Estas plantillas son ejemplos que pueden ayudarte a entender
                        mejor cómo trabajamos.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
                    <ReferenceImage
                      src="/plantilla-1.png"
                      alt="Plantilla de onboarding 1"
                    />

                    <ReferenceImage
                      src="/plantilla-2.png"
                      alt="Plantilla de onboarding 2"
                    />

                    <ReferenceImage
                      src="/plantilla-3.png"
                      alt="Plantilla de onboarding 3"
                    />
                  </div>
                </div>

                {/* =================================================
                    COMPLETAR PASO
                    ================================================= */}

                <div
                  className="
                    mt-8
                    rounded-2xl
                    border border-white/[0.07]
                    bg-white/[0.015]
                    p-5
                    sm:p-6
                  "
                >
                  <div className="flex gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-purple-400/50
                        bg-purple-500/[0.05]
                        text-lg
                        text-purple-300
                      "
                    >
                      ✓
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        ¿Has completado este paso?
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-white/40">
                        Marca este paso como completado para continuar con el siguiente.
                      </p>
                    </div>
                  </div>

                  {!completed ? (
                    <button
                      type="button"
                      onClick={() => setCompleted(true)}
                      className="
                        mt-5
                        flex
                        w-full
                        items-center
                        justify-center
                        rounded-xl
                        border border-purple-500/60
                        bg-transparent
                        px-5
                        py-3.5
                        text-sm
                        font-semibold
                        text-purple-300
                        transition-all
                        duration-300
                        hover:bg-purple-500/[0.08]
                        hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]
                      "
                    >
                      ✓ HE COMPLETADO ESTE PASO
                    </button>
                  ) : (
                    <div className="mt-5">
                      <div
                        className="
                          rounded-xl
                          border border-purple-400/20
                          bg-purple-500/[0.04]
                          px-4
                          py-3
                          text-center
                          text-sm
                          font-semibold
                          text-purple-300
                        "
                      >
                        ✓ PASO 01 COMPLETADO
                      </div>

                      <Link
                        href="#accesos-plataformas"
                        className="
                          mt-3
                          flex
                          w-full
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-r
                          from-[#7C3AED]
                          to-[#D946EF]
                          px-5
                          py-3.5
                          text-sm
                          font-semibold
                          text-white
                          shadow-[0_0_25px_rgba(217,70,239,0.18)]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:shadow-[0_0_35px_rgba(217,70,239,0.35)]
                        "
                      >
                        CONTINUAR
                        <span className="ml-2">→</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* MENSAJE */}

                <div
                  className="
                    mt-5
                    rounded-xl
                    border border-white/[0.06]
                    bg-white/[0.015]
                    px-4
                    py-3
                  "
                >
                  <p className="text-xs leading-5 text-white/35">
                    <span className="mr-2 text-purple-300">ⓘ</span>
                    Tómate tu tiempo y responde con detalle. Esta información será la
                    base de nuestra estrategia.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}


/* ===========================================================
   PROGRESS STEP — DESKTOP
   =========================================================== */

function ProgressStep({
  number,
  label,
  active,
  completed,
  first = false,
}: {
  number: string;
  label: string;
  active: boolean;
  completed: boolean;
  first?: boolean;
}) {
  return (
    <div className="relative flex items-center gap-4">
      {!first && (
        <div
          className="
            absolute
            left-[15px]
            top-[-26px]
            h-[26px]
            border-l
            border-dashed
            border-white/[0.16]
          "
        />
      )}

      <div
        className={`
          relative
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          text-xs
          font-semibold
          transition-all
          duration-300

          ${
            completed
              ? "border-purple-400 bg-gradient-to-br from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_20px_rgba(217,70,239,0.35)]"
              : active
              ? "border-purple-400 bg-gradient-to-br from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_25px_rgba(217,70,239,0.35)]"
              : "border-white/[0.18] bg-white/[0.02] text-white/45"
          }
        `}
      >
        {completed ? "✓" : number}
      </div>

      <div>
        <p
          className={`
            text-sm
            font-medium
            ${
              active || completed
                ? "text-white"
                : "text-white/55"
            }
          `}
        >
          {label}
        </p>

        <p
          className={`
            mt-0.5
            text-xs
            ${
              completed
                ? "text-purple-300"
                : active
                ? "text-purple-400"
                : "text-white/30"
            }
          `}
        >
          {completed
            ? "Completado"
            : active
            ? "En progreso"
            : "Pendiente"}
        </p>
      </div>
    </div>
  );
}


/* ===========================================================
   PROGRESS STEP — MOBILE
   =========================================================== */

function ProgressStepMobile({
  number,
  label,
  active,
  completed,
}: {
  number: string;
  label: string;
  active: boolean;
  completed: boolean;
}) {
  return (
    <div className="text-center">
      <div
        className={`
          text-[10px]
          font-semibold
          ${
            completed
              ? "text-purple-300"
              : active
              ? "text-white"
              : "text-white/25"
          }
        `}
      >
        {completed ? "✓" : number}
      </div>

      <div
        className={`
          mt-1
          truncate
          text-[9px]
          uppercase
          tracking-[0.06em]
          ${
            completed
              ? "text-purple-300/70"
              : active
              ? "text-white/65"
              : "text-white/20"
          }
        `}
      >
        {label}
      </div>
    </div>
  );
}


/* ===========================================================
   REFERENCE IMAGE
   =========================================================== */

function ReferenceImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      className="
        group
        aspect-[4/3]
        overflow-hidden
        rounded-xl
        border border-white/[0.09]
        bg-white/[0.025]
        transition-all
        duration-300
        hover:border-purple-400/30
        hover:shadow-[0_0_25px_rgba(124,58,237,0.10)]
      "
    >
      <img
        src={src}
        alt={alt}
        className="
          block
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-[1.03]
        "
      />
    </div>
  );
}


/* ===========================================================
   BACKGROUND
   =========================================================== */

function Background() {
  return (
    <>
      {/* BASE */}

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

      {/* HEXÁGONOS */}

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

      {/* GLOW AZUL */}

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

      {/* GLOW MORADO */}

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

      {/* GLOW CENTRAL */}

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