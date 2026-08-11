"use client";

import { useState } from "react";

type Improvement = {
  id: string;
  label: string;
  title: string;
  description: string;
  before: string;
  after: string;
};

const improvements: Improvement[] = [
  {
    id: "home",
    label: "Home",
    title: "Mejora web → Home",
    description:
      "Rediseño y optimización de la página principal para mejorar la propuesta de valor, la navegación y la capacidad de convertir visitas en oportunidades de compra.",
    before: "/videos/vicca-home-before.mp4",
    after: "/videos/vicca-home-after.mp4",
  },
  {
    id: "pdp",
    label: "Product Page",
    title: "Mejora web → Product Page",
    description:
      "Optimización de la página de producto para presentar mejor el producto, reducir fricción y facilitar la decisión de compra.",
    before: "/videos/vicca-pdp-before.mp4",
    after: "/videos/vicca-pdp-after.mp4",
  },
  {
    id: "cart",
    label: "Cart",
    title: "Mejora web → Cart",
    description:
      "Rediseño del carrito para simplificar el proceso de compra y eliminar elementos que podían generar fricción antes del checkout.",
    before: "/videos/vicca-cart-before.mp4",
    after: "/videos/vicca-cart-after.mp4",
  },
  {
    id: "creative",
    label: "Apartado creativo",
    title: "Mejora web → Apartado creativo",
    description:
      "Creación de una experiencia visual orientada a reforzar la propuesta de marca y aumentar el valor percibido de la experiencia de compra.",
    before: "/videos/vicca-creative-before.mp4",
    after: "/videos/vicca-creative-after.mp4",
  },
];

const technologies = [
  {
    name: "Shopify",
    description: "E-commerce",
  },
  {
    name: "CRO",
    description: "Conversion Rate Optimization",
  },
  {
    name: "Analytics",
    description: "Data & análisis",
  },
  {
    name: "UX / UI",
    description: "Experiencia digital",
  },
];

export default function ViccaCaseStudy() {
  const [activeImprovement, setActiveImprovement] = useState("home");

  const active =
    improvements.find((item) => item.id === activeImprovement) ??
    improvements[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden">
        {/* =====================================================
            HEX GRID
        ===================================================== */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.42]"
          style={{
            backgroundImage: "url('/backgrounds/hex-grid.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "80px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
          }}
        />

        {/* =====================================================
            BLUE GLOW
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-30%]
            top-[-18%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#2563EB]/20
            blur-[170px]
          "
        />

        {/* =====================================================
            PURPLE GLOW
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-600px]
            top-[-40%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#7C3AED]/40
            blur-[180px]
          "
        />

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <header
          className="
            relative
            z-30
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            justify-between
            px-6
            py-6
            sm:px-8
            lg:px-10
          "
        >
          {/* SCALATE × VICCA */}

          <div className="flex items-center gap-3 sm:gap-4">
            <span
              className="
                bg-gradient-to-r
                from-[#3B82F6]
                via-[#7C3AED]
                to-[#D946EF]
                bg-clip-text
                text-2xl
                font-black
                tracking-[-0.055em]
                text-transparent
                sm:text-2xl
                lg:text-4xl
              "
            >
              SCALATE
            </span>

            <span className="text-sm text-white/35 sm:text-base">
              ×
            </span>

            <img
              src="/images/vicca-logo.png"
              alt="Vicca"
              className="h-6 w-auto object-contain sm:h-7 lg:h-8"
            />
          </div>

          {/* VOLVER */}

          <a
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              px-4
              py-2
              text-xs
              font-semibold
              text-white
              backdrop-blur-xl
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-white/20
              hover:bg-white/[0.09]
              sm:px-5
              sm:py-2.5
              sm:text-sm
            "
          >
            Volver a la web →
          </a>
        </header>

        {/* =====================================================
            HERO CONTENT
            DESKTOP: TEXTO IZQUIERDA + DISPOSITIVOS DERECHA
            MOBILE: TODO EN COLUMNA
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100vh-90px)]
            w-full
            max-w-7xl
            items-center
            px-6
            pb-24
            pt-16
            sm:px-8
            sm:pt-20
            lg:px-10
            lg:pt-10
          "
        >
          <div
            className="
              grid
              w-full
              items-center
              gap-16
              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-10
              xl:grid-cols-[0.8fr_1.2fr]
            "
          >
            {/* =================================================
                LEFT — HERO TEXT
            ================================================= */}

            <div
              className="
                flex
                flex-col
                items-center
                text-center
                lg:items-start
                lg:text-left
              "
            >
              {/* CASE STUDY BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-4
                  py-2
                  backdrop-blur-xl
                "
              >
                <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full border border-[#A855F7]/30" />

                  <span className="absolute h-2.5 w-2.5 rounded-full border border-[#A855F7]/30" />

                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#A855F7] shadow-[0_0_12px_#A855F7]" />
                </span>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-white/60
                    sm:text-xs
                  "
                >
                  Caso de estudio
                </span>
              </div>

              {/* CATEGORY */}

              <p
                className="
                  mt-7
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.42em]
                  text-white/35
                  sm:text-xs
                "
              >
                E-COMMERCE GROWTH
              </p>

              {/* TITLE */}

              <h1
                className="
                  mt-4
                  text-6xl
                  font-bold
                  tracking-[-0.065em]
                  text-white
                  sm:text-7xl
                  lg:text-7xl
                  xl:text-8xl
                "
              >
                VICCA
              </h1>

              {/* RESULT */}

              <div className="mt-6 flex flex-col">
                <span className="text-lg text-white/40 sm:text-xl">
                  De 2.300 €/mes
                </span>

                <span className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                  a 18.400 €/mes
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT — DEVICE SHOWCASE
            ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[360px]
                items-center
                justify-center
                lg:min-h-[500px]
              "
            >
              {/* DEVICE BACK GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[350px]
                  w-[600px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#7C3AED]/15
                  blur-[140px]
                  sm:h-[450px]
                  sm:w-[750px]
                "
              />

              {/* =================================================
                  DESKTOP / LAPTOP
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  w-[88%]
                  max-w-3xl
                  overflow-hidden
                  rounded-[1.15rem]
                  border
                  border-white/10
                  bg-[#0b0b0d]
                  p-2
                  shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                  sm:p-3
                "
              >
                {/* Browser bar */}

                <div className="flex h-5 items-center gap-1.5 px-2 sm:h-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/15 sm:h-2 sm:w-2" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/15 sm:h-2 sm:w-2" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/15 sm:h-2 sm:w-2" />
                </div>

                <div className="aspect-video overflow-hidden rounded-lg bg-[#111]">
                  <img
                    src="/images/vicca-desktop.png"
                    alt="VICCA E-commerce"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* =================================================
                  MOBILE
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-[-30px]
                  right-[2%]
                  z-20
                  w-[22%]
                  min-w-[95px]
                  max-w-[150px]
                  rounded-[1.4rem]
                  border
                  border-white/15
                  bg-[#0b0b0d]
                  p-1.5
                  shadow-[0_25px_70px_rgba(0,0,0,0.65)]
                  sm:bottom-[-35px]
                  sm:w-[20%]
                  sm:max-w-[165px]
                "
              >
                <div className="aspect-[9/19] overflow-hidden rounded-[1.1rem] bg-[#111]">
                  <img
                    src="/images/vicca-mobile.png"
                    alt="VICCA Mobile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          01 — RETO
      ========================================================= */}

      <section className="relative border-t border-white/[0.07] px-6 py-28 sm:px-8 sm:py-36 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-semibold text-[#A855F7]">
            01
          </span>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            El problema / reto
          </h2>

          <div className="mt-10 max-w-3xl">
            <p className="text-lg leading-8 text-white/55 sm:text-xl sm:leading-9">
              Aquí explicaremos cuál era la situación inicial de VICCA,
              qué estaba frenando el crecimiento y cuáles eran los
              principales problemas que detectamos.
            </p>
          </div>

          {/* HIGHLIGHTS */}

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              "Experiencia de compra",
              "Conversión",
              "Escalabilidad",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-6
                  transition
                  hover:border-white/15
                  hover:bg-white/[0.04]
                "
              >
                <span className="text-sm text-white/50">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — QUÉ HICIMOS
      ========================================================= */}

      <section className="relative overflow-hidden px-6 py-28 sm:px-8 sm:py-36 lg:px-10">
        <div
          className="
            pointer-events-none
            absolute
            right-[-15%]
            top-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#3B82F6]/10
            blur-[150px]
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <span className="text-sm font-semibold text-[#A855F7]">
            02
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Qué hicimos
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55 sm:text-xl">
            Aquí explicaremos la estrategia que desarrollamos para
            transformar la experiencia de E-commerce de VICCA.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Diseño & UX",
                text: "Mejoramos la estructura, jerarquía visual y experiencia de navegación.",
              },
              {
                number: "02",
                title: "CRO",
                text: "Identificamos y reducimos puntos de fricción dentro del funnel.",
              },
              {
                number: "03",
                title: "E-commerce 360º",
                text: "Trabajamos el ecosistema completo para crear una experiencia coherente.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="
                  rounded-[2rem]
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-8
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/15
                  hover:bg-white/[0.04]
                "
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-[#A855F7]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — CRONOLOGÍA
      ========================================================= */}

      <section className="border-t border-white/[0.07] px-6 py-28 sm:px-8 sm:py-36 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-semibold text-[#A855F7]">
            03
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            El proceso
          </h2>

          <div className="mt-16">
            {[
              {
                number: "01",
                title: "Análisis",
                text: "Analizamos el ecosistema actual de VICCA y detectamos las principales oportunidades de crecimiento.",
              },
              {
                number: "02",
                title: "Estrategia",
                text: "Definimos una estrategia enfocada en mejorar la experiencia y el rendimiento del E-commerce.",
              },
              {
                number: "03",
                title: "Implementación",
                text: "Convertimos la estrategia en cambios concretos dentro del ecosistema digital.",
              },
              {
                number: "04",
                title: "Optimización",
                text: "Medimos, analizamos y optimizamos las diferentes partes del funnel.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`relative border-l border-white/10 pl-8 ${
                  index !== 3 ? "pb-16" : ""
                }`}
              >
                <span
                  className="
                    absolute
                    -left-[5px]
                    top-1
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#7C3AED]
                    shadow-[0_0_12px_rgba(124,58,237,0.7)]
                  "
                />

                <span className="text-xs font-semibold tracking-[0.2em] text-white/30">
                  {item.number}
                </span>

                <h3 className="mt-3 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — ANTES / DESPUÉS
      ========================================================= */}

      <section className="relative overflow-hidden px-6 py-28 sm:px-8 sm:py-36 lg:px-10">
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[20%]
            h-[600px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-[#7C3AED]/10
            blur-[170px]
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <span className="text-sm font-semibold text-[#A855F7]">
            04
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Antes / Después
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            Una selección de las principales áreas que trabajamos para
            transformar la experiencia de compra de VICCA.
          </p>

          {/* =====================================================
              TABS
          ===================================================== */}

          <div className="mt-14 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] p-1.5">
              {improvements.map((item) => {
                const isActive = item.id === activeImprovement;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveImprovement(item.id)}
                    className={`
                      rounded-full
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      transition
                      duration-300
                      ${
                        isActive
                          ? "bg-white text-black shadow-lg"
                          : "text-white/45 hover:bg-white/[0.05] hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              ACTIVE AREA
          ===================================================== */}

          <div className="mt-14">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              {active.title}
            </h3>

            <p className="mt-4 max-w-3xl text-base leading-7 text-white/45 sm:text-lg">
              {active.description}
            </p>

            {/* VIDEOS */}

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {/* BEFORE */}

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                    Antes
                  </span>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0b0d] shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
                  <video
                    key={`${active.id}-before`}
                    className="aspect-video w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src={active.before}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              {/* AFTER */}

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A855F7]">
                    Después
                  </span>
                </div>

                <div
                  className="
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-[#7C3AED]/25
                    bg-[#0b0b0d]
                    shadow-[0_20px_80px_rgba(124,58,237,0.12)]
                  "
                >
                  <video
                    key={`${active.id}-after`}
                    className="aspect-video w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src={active.after}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            {/* DESCRIPTION CARD */}

            <div
              className="
                mt-8
                rounded-[1.5rem]
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                sm:p-8
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A855F7]">
                Qué cambiamos
              </p>

              <p className="mt-4 max-w-4xl leading-7 text-white/50">
                Aquí añadiremos la explicación detallada de las mejoras
                realizadas en esta parte del E-commerce y por qué se
                tomaron estas decisiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — TECNOLOGÍAS
      ========================================================= */}

      <section className="relative border-t border-white/[0.07] px-6 py-28 sm:px-8 sm:py-36 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-semibold text-[#A855F7]">
            05
          </span>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Tecnologías
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            Las herramientas, plataformas y metodologías utilizadas para
            construir y optimizar el ecosistema digital de VICCA.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="
                  group
                  rounded-[1.75rem]
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/15
                  hover:bg-white/[0.04]
                "
              >
                {/* LOGO / PLACEHOLDER */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  {technology.name.charAt(0)}
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {technology.name}
                </h3>

                <p className="mt-2 text-sm text-white/35">
                  {technology.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — CTA FINAL
      ========================================================= */}

      <section className="relative overflow-hidden px-6 py-36 sm:px-8 sm:py-44 lg:px-10">
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[750px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#7C3AED]/20
            blur-[170px]
          "
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/35">
            SCALATE
          </p>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-6xl
            "
          >
            ¿Quieres llevar tu marca
            <br />
            al siguiente nivel?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/50">
            Hablemos de cómo podemos hacer crecer tu E-commerce.
          </p>

          <a
            href="/aplicar"
            className="
              mt-10
              inline-flex
              items-center
              rounded-full
              bg-gradient-to-r
              from-[#7C3AED]
              to-[#D946EF]
              px-8
              py-4
              font-semibold
              text-white
              shadow-[0_0_40px_rgba(124,58,237,0.25)]
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_60px_rgba(217,70,239,0.3)]
            "
          >
            Escalemos tu marca →
          </a>
        </div>
      </section>
    </main>
  );
}