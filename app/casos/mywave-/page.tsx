"use client";

import { useEffect, useState } from "react";
import Footer from "./../../components/sections/Footer";
import Button from "./../../components/ui/Button";

type Improvement = {
  id: string;
  label: string;
  title: string;
  intro: string;
  before: string;
  after: string;
  changes: string[];
  reason: string;
};

const improvements: Improvement[] = [
  {
    id: "home",
    label: "Home",
    title: "Una Home pensada para convertir",
    intro:
      "Rediseñamos la página principal para ordenar mejor la propuesta de la marca, dar más protagonismo al producto y construir un recorrido más claro desde el descubrimiento hasta la compra.",
    before: "/videos/mywave-home-before.mp4",
    after: "/videos/mywave-home-after.mp4",
    changes: [
      "Nueva jerarquía de contenidos y categorías de producto.",
      "Navegación más clara para descubrir productos y categorías.",
      "Mayor protagonismo para producto, categorías y llamadas a la acción.",
    ],
    reason:
      "La Home debía funcionar como punto de entrada a un catálogo amplio. Por eso trabajamos para que cada bloque ayudara a descubrir la marca, entender su propuesta y avanzar hacia el producto adecuado.",
  },
  {
    id: "pdp",
    label: "Product Page",
    title: "Una Product Page con menos fricción",
    intro:
      "Optimizamos la ficha de producto para presentar mejor cada electrodoméstico, ordenar la información y facilitar la decisión de compra.",
    before: "/videos/mywave-pdp-before.mp4",
    after: "/videos/mywave-pdp-after.mp4",
    changes: [
      "Mejor organización de características, beneficios e información del producto.",
      "Jerarquía visual más clara para facilitar la decisión.",
      "Experiencia más directa alrededor de la elección y compra.",
    ],
    reason:
      "La ficha de producto concentra la información necesaria para decidir. El objetivo fue hacerla más clara, visual y fácil de recorrer.",
  },
  {
    id: "cart",
    label: "Cart",
    title: "Un carrito diseñado para reducir fricción",
    intro:
      "Rediseñamos el carrito para simplificar el proceso de compra y hacer más claro el resumen del pedido antes del checkout.",
    before: "/videos/mywave-cart-before.mp4",
    after: "/videos/mywave-cart-after.mp4",
    changes: [
      "Resumen del pedido más limpio y comprensible.",
      "Reducción de elementos innecesarios durante la revisión del pedido.",
      "Presentación más clara del pedido antes de finalizar la compra.",
    ],
    reason:
      "El carrito es un punto clave antes del checkout. Una experiencia clara permite revisar el pedido y avanzar con menos fricción.",
  },
  {
    id: "creative",
    label: "Experiencia creativa",
    title: "Una experiencia visual a la altura de la marca",
    intro:
      "Creamos una experiencia visual más coherente con el carácter funcional, cercano e innovador de la marca.",
    before: "/videos/mywave-creative-before.mp4",
    after: "/videos/mywave-creative-after.mp4",
    changes: [
      "Mayor coherencia entre marca, producto y experiencia digital.",
      "Uso del diseño para comunicar mejor producto y propuesta.",
      "Una experiencia visual más clara, reconocible y consistente.",
    ],
    reason:
      "No queríamos que el rediseño se limitara a ordenar elementos. La experiencia debía conectar mejor producto, marca y compra.",
  },
];

const challengePoints = [
  {
    number: "1.1",
    title: "Experiencia de compra",
    text: "Replantear los principales puntos de contacto para crear una navegación más clara.",
  },
  {
    number: "1.2",
    title: "Conversión",
    text: "Detectar y reducir fricciones que podían dificultar la decisión de compra.",
  },
  {
    number: "1.3",
    title: "Escalabilidad",
    text: "Construir una experiencia preparada para acompañar el crecimiento del e-commerce.",
  },
];

const strategyPoints = [
  {
    number: "2.1",
    title: "Diseño & UX",
    text: "Mejoramos la estructura, jerarquía visual y experiencia de navegación.",
  },
  {
    number: "2.2",
    title: "CRO",
    text: "Identificamos oportunidades para reducir fricción dentro del funnel.",
  },
  {
    number: "2.3",
    title: "E-commerce 360º",
    text: "Trabajamos el ecosistema completo para crear una experiencia coherente.",
  },
];

export default function MyWaveCaseStudy() {
  const [activeImprovement, setActiveImprovement] = useState("home");
  const [hideNavbar, setHideNavbar] = useState(false);

  const active =
    improvements.find((item) => item.id === activeImprovement) ??
    improvements[0];

  /*
   * ============================================================
   * NAVBAR
   *
   * Se mantiene arriba durante la navegación.
   * Cuando el CTA final entra aproximadamente en la mitad
   * de la pantalla, desaparece.
   * ============================================================
   */

  useEffect(() => {
    const handleScroll = () => {
      const finalCTA = document.getElementById("contacto");

      if (!finalCTA) return;

      const rect = finalCTA.getBoundingClientRect();

      const isFinalCTAVisible =
        rect.top < window.innerHeight * 0.5;

      setHideNavbar(isFinalCTAVisible);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#050505] text-white">

      {/* =========================================================
          HEXÁGONOS — PARTE SUPERIOR
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-0
          h-[360px]
          opacity-[0.35]
        "
        style={{
          backgroundImage: "url('/backgrounds/hex-grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "80px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      {/* =========================================================
          HEXÁGONOS — PARTE INFERIOR
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          h-[700px]
          lg:h-[1000px]
          opacity-[0.35]
        "
        style={{
          backgroundImage: "url('/backgrounds/hex-grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "80px",
          maskImage:
            "linear-gradient(to top, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 55%, transparent 100%)",
        }}
      />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-visible">

        {/* Glow azul */}

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

        {/* Glow morado */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-600px]
            top-[-40%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#7C3AED]/35
            blur-[180px]
          "
        />

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <header
          className={`
            fixed
            left-1/2
            z-50
            w-[85%]
            sm:w-[92%]
            lg:w-[90%]
            max-w-5xl
            -translate-x-1/2
            transition-all
            duration-700
            ease-in-out

            ${
              hideNavbar
                ? "pointer-events-none translate-y-24 opacity-0"
                : "top-6 bottom-auto translate-y-0 opacity-100"
            }
          `}
        >
          <nav
            className="
              flex
              h-14
              items-center
              justify-between
              rounded-full
              border
              border-white/10
              bg-[#111111]/80
              px-4
              backdrop-blur-2xl
              transition-all
              duration-300
            "
          >

            {/* LOGO */}

            <a
              href="/"
              className="
                bg-gradient-to-r
                from-[#3B82F6]
                via-[#7C3AED]
                to-[#D946EF]
                bg-clip-text
                text-2xl
                font-extrabold
                uppercase
                tracking-tight
                text-transparent
                transition-all
                duration-300
                hover:scale-105
                sm:text-3xl
                lg:text-1xl
              "
            >
              SCALATE
            </a>

            {/* MENÚ */}

            <div className="hidden items-center gap-8 lg:flex xl:gap-10">

              <a
                href="#reto"
                className="
                  text-base
                  font-medium
                  text-white/70
                  transition
                  hover:text-white
                "
              >
                Reto
              </a>

              <a
                href="#estrategia"
                className="
                  text-base
                  font-medium
                  text-white/70
                  transition
                  hover:text-white
                "
              >
                Estrategia
              </a>

              <a
                href="#transformacion"
                className="
                  text-base
                  font-medium
                  text-white/70
                  transition
                  hover:text-white
                "
              >
                Transformación
              </a>

              <a
                href="#impacto"
                className="
                  text-base
                  font-medium
                  text-white/70
                  transition
                  hover:text-white
                "
              >
                Impacto
              </a>

            </div>

            {/* BOTÓN */}

            <a
              href="/aplicar"
              className="
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                rounded-full
                bg-gradient-to-r
                from-[#7C3AED]
                to-[#D946EF]
                px-3
                py-1.5
                text-sm
                font-semibold
                text-white
                shadow-[0_0_25px_rgba(217,70,239,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:scale-[1.02]
                hover:shadow-[0_0_40px_rgba(217,70,239,0.35)]
                lg:px-6
                lg:py-2
                lg:text-base
              "
            >
              Escalemos tu marca
            </a>

          </nav>
        </header>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            px-6
            pb-20
            pt-28
            sm:px-8
            sm:pb-24
            sm:pt-32
            lg:px-10
            lg:pb-8
            lg:pt-40
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

            {/* HERO TEXT */}

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

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/[0.08]
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
                SWIMWEAR BRAND
              </p>

              <h1
                className="
                  mt-4
                  text-6xl
                  font-bold
                  tracking-[-0.065em]
                  text-white
                  sm:text-7xl
                  lg:text-7xl
                  xl:text-7xl
                "
              >
                MYWAVE
              </h1>

              <p
                className="
                  mt-7
                  max-w-xl
                  text-base
                  leading-7
                  text-white/45
                  sm:text-lg
                "
              >
                De la experiencia en RRSS de Victoria Caro nace Vicca.
                Nosotros desarrollamos una propuesta 360º de optimización
                CRO, diseño y experiencia de compra para llevar la marca
                al siguiente nivel.
              </p>

              <div
                className="
                  mt-8
                  flex
                  justify-center
                  lg:justify-start
                "
              >
                <Button
                  href="/aplicar"
                  className="
                    px-6
                    py-3
                    text-sm
                    sm:px-7
                    sm:py-3.5
                    sm:text-base
                  "
                >
                  Quiero aplicarlo a mi marca
                </Button>
              </div>

            </div>

            {/* HERO MOCKUPS */}
<div
  className="
    relative
    flex
    min-h-[380px]
    items-center
    justify-center
    lg:min-h-[560px]
  "
  style={{
    perspective: "1800px",
  }}
>

              <div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    h-[450px]
    w-[1000px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#7C3AED]/20
    blur-[170px]

    sm:h-[560px]
    sm:w-[1100px]
    sm:blur-[190px]

    lg:h-[600px]
    lg:w-[1200px]
    lg:blur-[200px]
  "
/>

{/* =====================================================
    DESKTOP — MOCKUP 3D
===================================================== */}

<div
  className="
    relative
    z-10
    mx-auto
    w-[108%]
    max-w-4xl
    overflow-hidden
    rounded-[1.15rem]
    border
    border-white/[0.08]
    bg-[#0b0b0d]
    p-2
    shadow-[0_40px_120px_rgba(0,0,0,0.60)]

    sm:w-[112%]

    lg:ml-auto
    lg:mr-0
    lg:w-[125%]
    lg:max-w-none
    lg:translate-x-[7%]

    sm:p-3

    [transform-style:preserve-3d]

    lg:[transform:rotateY(-12deg)_rotateX(4deg)]
    lg:[transform-origin:center_center]

    transition-transform
    duration-700
    ease-out
"
>
  <div className="flex h-5 items-center gap-1.5 px-2 sm:h-6">
    <span className="h-1.5 w-1.5 rounded-full bg-white/15 sm:h-2 sm:w-2" />
    <span className="h-1.5 w-1.5 rounded-full bg-white/15 sm:h-2 sm:w-2" />
    <span className="h-1.5 w-1.5 rounded-full bg-white/15 sm:h-2 sm:w-2" />
  </div>

  <div className="aspect-video overflow-hidden rounded-lg bg-[#111]">
    <img
      src="/mywave-desktop.png"
      alt="MYWAVE E-commerce"
      className="h-full w-full object-cover"
    />
                </div>
              </div>

              {/* =====================================================
    MOBILE — MOCKUP 3D
===================================================== */}

<div
  className="
    absolute
    bottom-[5px]
    right-[-4%]
    z-20
    w-[25%]
    min-w-[110px]
    max-w-[170px]
    rounded-[1.4rem]
    border
    border-white/[0.08]
    bg-[#0b0b0d]
    p-1.5
    shadow-[0_35px_100px_rgba(0,0,0,0.72)]

    sm:bottom-0
    sm:right-[-4%]
    sm:w-[23%]
    sm:max-w-[185px]
  "
  style={{
    transform: "rotateY(-9deg) rotateX(4deg)",
    transformStyle: "preserve-3d",
    transformOrigin: "center center",
  }}
>
  <div className="aspect-[9/19] overflow-hidden rounded-[1.1rem] bg-[#111]">
    <img
      src="/mywave-mobile.png"
      alt="MYWAVE Mobile"
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

      <section
        id="reto"
        className="
          relative
          scroll-mt-0
          px-6
          py-20
          sm:px-8
          sm:py-28
          lg:px-10
          lg:py-32 
        "
      >
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <div>
              <span className="text-base font-semibold text-[#A855F7]">
                01
              </span>

              <h2
                className="
                  mt-4
                  max-w-xl
                  text-4xl
                  font-bold
                  tracking-[-0.045em]
                  sm:text-5xl
                  lg:text-5xl
                "
              >
                El reto
              </h2>

              <p
                className="
                  mt-7
                  max-w-xl
                  text-lg
                  leading-8
                  text-white/50
                  sm:text-l
                  sm:leading-9
                "
              >
                MYWAVE es una marca construida alrededor de una figura
                fundadora con una comunidad propia y una propuesta que conecta
                belleza, moda y lifestyle. El reto era trasladar esa identidad
                al e-commerce y convertirla en una experiencia digital capaz
                de acompañar el crecimiento de la marca.
              </p>
            </div>

            {/* En ordenador: una tarjeta debajo de otra.
                En móvil/tablet: se mantiene la distribución anterior. */}

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:pt-12">
              {challengePoints.map((item) => (
                <div
                  key={item.number}
                  className="
                    group
                    rounded-[1.75rem]
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    p-6
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 text-sm font-semibold tracking-[0.16em] text-[#A855F7]">
                      {item.number}
                    </span>

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          02 — ESTRATEGIA
      ========================================================= */}

      <section
        id="estrategia"
        className="
          relative
          scroll-mt-24
          overflow-visible
          px-6
          pt-20
          pb-20
          sm:px-8
          sm:pt-28
          sm:pb-28
          lg:px-10
          lg:pt-10
          lg:pb-32
        "
      >

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

          <div className="max-w-4xl">

            <span className="text-base font-semibold text-[#A855F7]">
              02
            </span>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-5xl
              "
            >
              La estrategia
            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-8
                text-white/50
                sm:text-l
              "
            >
              No nos limitamos a rediseñar la interfaz. Trabajamos sobre los
              principales puntos de contacto de la experiencia de compra para
              mejorar la claridad del catálogo, facilitar el descubrimiento
              de producto y construir una experiencia más coherente.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {strategyPoints.map((item) => (
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
                  hover:bg-white/[0.04]
                "
              >

                <div className="flex items-center gap-3">

                  <span className="shrink-0 text-sm font-semibold tracking-[0.16em] text-[#A855F7]">
                    {item.number}
                  </span>

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                </div>

                <p className="mt-4 leading-7 text-white/45">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-9">
            <Button
              href="/aplicar"
              className="
                px-6
                py-3
                text-sm
                sm:px-7
                sm:py-3.5
                sm:text-base
              "
            >
              Quiero una estrategia así para mi tienda
            </Button>
          </div>

        </div>
      </section>

      {/* =========================================================
          03 — TRANSFORMACIÓN
      ========================================================= */}

      <section
        id="transformacion"
        className="
          relative
          scroll-mt-24
          overflow-visible
          px-6
          py-20
          sm:px-8
          sm:py-28
          lg:px-10
          lg:py-10
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[15%]
            h-[650px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#7C3AED]/10
            blur-[180px]
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="max-w-4xl">

            <span className="text-base font-semibold text-[#A855F7]">
              03
            </span>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-5xl
              "
            >
              Lo que transformamos
            </h2>

          </div>

          {/* TABS */}

          <div className="mt-14 overflow-x-auto pb-2">

            <div
              className="
                flex
                min-w-max
                gap-2
                rounded-full
                border
                border-white/[0.06]
                bg-white/[0.025]
                p-1.5
              "
            >

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

          {/* ACTIVE AREA */}

          <div className="mt-12">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

              <div>

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#A855F7]
                  "
                >
                  {active.label}
                </span>

                <h3
                  className="
                    mt-5
                    text-3xl
                    font-semibold
                    tracking-[-0.035em]
                    sm:text-4xl
                  "
                >
                  {active.title}
                </h3>

              </div>

              <p className="text-base leading-7 text-white/45 sm:text-lg">
                {active.intro}
              </p>

            </div>

            {/* VIDEOS */}

            <div className="mt-12 grid gap-5 lg:grid-cols-2">

              {/* Antes */}

              <div>

                <div className="mb-3 px-1">

                  <span
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white/30
                    "
                  >
                    Antes
                  </span>

                </div>

                <div
                  className="
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-white/[0.08]
                    bg-[#0b0b0d]
                    shadow-[0_20px_70px_rgba(0,0,0,0.3)]
                  "
                >
                  <video
                    key={`${active.id}-before`}
                    className="aspect-video w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={active.before} type="video/mp4" />
                  </video>
                </div>

              </div>

              {/* Después */}

              <div>

                <div className="mb-3 px-1">

                  <span
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#A855F7]
                    "
                  >
                    Después
                  </span>

                </div>

                <div
                  className="
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-white/[0.08]
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
                    <source src={active.after} type="video/mp4" />
                  </video>
                </div>

              </div>

            </div>

            <div className="mt-10 flex justify-center">

              <Button
                href="/aplicar"
                className="
                  px-6
                  py-3
                  text-sm
                  sm:px-7
                  sm:py-3.5
                  sm:text-base
                "
              >
                Quiero una transformación así
              </Button>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          04 — IMPACTO
          
          AHORA OCUPA EL LUGAR QUE ANTES TENÍA STACK.
          
          Ordenador:
          - Número + título a la izquierda.
          - Descripción a la derecha.
          - Cuatro bloques horizontales debajo.

          Móvil:
          - Título y descripción pasan a vertical.
          - Bloques pasan a 1 columna.
      ========================================================= */}

      <section
        id="impacto"
        className="
          relative
          scroll-mt-24
          px-6
pt-20
pb-8

sm:px-8
sm:pt-28
sm:pb-10

lg:px-0
lg:pt-32
lg:pb-15
        "
      >

        <div className="mx-auto max-w-6xl">

          {/* CABECERA */}

          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            <div>

              <span className="text-base font-semibold text-[#A855F7]">
                04
              </span>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-bold
                  tracking-[-0.045em]
                  sm:text-5xl
                "
              >
                El impacto
              </h2>

            </div>

            <p className="max-w-xl text-base leading-7 text-white/40">
              El trabajo se planteó para que la mejora visual estuviera
              acompañada de una experiencia de compra más clara y coherente.
            </p>

          </div>

          {/* BLOQUES DE IMPACTO */}

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Experiencia más clara",
              "Menor fricción",
              "Mayor valor percibido",
              "Marca escalable",
            ].map((title, index) => (
              <div
                key={title}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.04]
                "
              >

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
                    border-white/[0.08]
                    bg-white/[0.04]
                    text-sm
                    font-bold
                    text-[#A855F7]
                  "
                >
                  4.{index + 1}
                </div>

                <div>

                  <h3 className="text-sm font-semibold">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs text-white/30">
                    Impacto en la experiencia digital
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA FINAL
      ========================================================= */}

      <section
        id="contacto"
        className="
          relative
          scroll-mt-24
          overflow-visible
          px-6
          pt-20
          pb-20
          sm:px-8
          sm:pt-32
          sm:pb-24
          lg:px-10
          lg:pt-44
          lg:pb-10
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[330px]
            h-[300px]
            w-[330px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#7C3AED]/20
            blur-[100px]
            sm:top-[430px]
            sm:h-[400px]
            sm:w-[500px]
            sm:blur-[130px]
            lg:top-[550px]
            lg:h-[500px]
            lg:w-[750px]
            lg:blur-[170px]
          "
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            FUNDADOR/A
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
            ¿Quieres llevar tu tienda
            <br />
            al siguiente nivel?
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-white/50
            "
          >
            Hablemos de cómo transformar tu e-commerce en una experiencia mucho más sólida.
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
            Mejoremos tu marca →
          </a>

        </div>
      </section>

      {/* =========================================================
          FOOTER — MISMO FOOTER QUE LA WEB
      ========================================================= */}

      <div className="hidden lg:block">
        <Footer />
      </div>

    </main>
  );
}