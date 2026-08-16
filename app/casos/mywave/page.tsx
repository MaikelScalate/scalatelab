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
    title: "Una Home optimizada a medida",
    intro:
      "Rediseñamos la página principal para ordenar mejor la web, dar más protagonismo al producto y construir un recorrido más claro hacia la compra. Usamos hero con variedad de fotos, productos por relevancia, categorías, FAQ's y apartados creativos.",
    before: "/mywave-home-before.png",
    after: "/mywave-home-after.png",
    changes: [
      "Nueva jerarquía de contenidos y categorías de producto.",
      "Navegación más clara para descubrir productos y colecciones.",
      "Mayor protagonismo para producto, categorías y llamadas a la acción.",
    ],
    reason:
      "La Home debía funcionar como punto de entrada a la marca y al catálogo. Por eso trabajamos para que cada bloque ayudara a descubrir MYWAVE, entender su propuesta y avanzar hacia el producto adecuado.",
  },
  {
    id: "look",
    label: "MyWaveGirls Looks",
    title: "Etiqueta a MyWave con uno de tus looks para formar parte",
    intro:
      "Creamos una experiencia de compra más directa para que la clienta pueda descubrir combinaciones de MYWAVE y pasar de la inspiración a la compra con menos fricción, aumentando las oportunidades de aumentar el ticket medio.",
    before: "/mywave-look-mobile.mp4",
    after: "/mywave-look-desktop.mp4",
    changes: [
      "Experiencia de compra adaptada a móvil y ordenador.",
      "Presentación más clara de los productos que componen cada look.",
      "Recorrido más directo desde la inspiración hasta la compra.",
    ],
    reason:
      "Facilitamos que la usuaria pase de descubrir una combinación a encontrar y comprar los productos que la componen.",
  },
  {
    id: "pdp",
    label: "Product Page",
    title: "Una Product Page creada para vender más",
    intro:
      "Optimizamos la ficha de producto para presentar mejor cada prenda y facilitar la decisión de compra, además de aumentar ticket medio. Para ello, usamos un sistema de cross-sells, añadimos los colores de su gama, guía de tallas y algún apartado creativo.",
    before: "/mywave-pdp-before.png",
    after: "/mywave-pdp-after.png",
    changes: [
      "Mejor organización de características, beneficios e información del producto.",
      "Jerarquía visual más clara para facilitar la decisión.",
      "Experiencia más directa alrededor de la elección y compra.",
    ],
    reason:
      "La ficha de producto concentra gran parte de la intención de compra. El objetivo fue que la usuaria encontrara antes la información necesaria para decidir.",
  },
    {
    id: "modal",
    label: "Modal",
    title: "Un modal pensado para aumentar el ticket medio",
    intro:
      "Creamos un modal a medida para añadir productos al carrito de forma rápida y sencilla, accesible tanto desde el botón de añadido rápido de los productos como desde el sistema de cross-sells.",
    before: "",
    after: "",
    changes: [
      "Modal desarrollado a medida para añadir productos sin abandonar la experiencia de compra.",
      "Acceso desde el añadido rápido de producto y desde los cross-sells.",
      "Experiencia adaptada a móvil y ordenador.",
    ],
    reason:
      "El objetivo es facilitar la incorporación de nuevos productos al carrito y aprovechar los momentos de intención de compra para aumentar el ticket medio.",
  },
  {
    id: "cart",
    label: "Cart",
    title: "Un carrito diseñado para vender más",
    intro:
      "Rediseñamos el carrito para simplificar el proceso de compra, mostrar prueba social e incitar a comprar otros productos, aumentando así el ticket medio. Para ello, usamos una barra de prueba social, una interactiva de envío gratis y el sistema de cross-sells.",
    before: "",
after: "",
    changes: [
      "Resumen del pedido más limpio y comprensible.",
      "Reducción de elementos innecesarios durante la revisión del pedido.",
      "Presentación más clara del pedido antes de finalizar la compra.",
    ],
    reason:
      "El carrito es el último gran punto de decisión antes del checkout. Una experiencia clara permite revisar el pedido y avanzar con menos fricción.",
  },
  {
    id: "about",
    label: "About Us Page",
    title: "Una About Page pensada para conectar",
    intro:
      "Rediseñamos la página About Us para trasladar la historia, personalidad y propuesta de valor de MYWAVE a una experiencia más visual, cercana y coherente con el resto del ecosistema digital.",
    before: "/mywave-about-before.png",
    after: "/mywave-about-after.png",
    changes: [
      "Una narrativa más clara alrededor de la marca.",
      "Mayor protagonismo para la historia y personalidad de MYWAVE.",
      "Una experiencia visual más coherente con el posicionamiento de la marca.",
    ],
    reason:
      "La About Us Page se plantea como una oportunidad para reforzar la conexión con MYWAVE y transmitir mejor todo lo que representa la marca.",
  },
  {
    id: "email",
    label: "Email Mkt",
    title: "Una estrategia de Email Marketing para convertir",
    intro:
      "Creamos una estrategia base de captación y comunicación para acompañar a la usuaria desde el primer contacto con MYWAVE hasta la compra, combinando pop-ups y diseños de emails alineados con la identidad de la marca.",
    before: "",
    after: "",
    changes: [
      "Pop-ups adaptados a diferentes momentos y campañas.",
      "Diseños de email alineados con la identidad de MYWAVE.",
      "Un ecosistema pensado para captar, convertir y fidelizar.",
    ],
    reason:
      "El objetivo es aprovechar el tráfico existente y convertirlo también en una relación directa con la marca.",
  },
  {
    id: "publi",
    label: "Publi & Content",
    title: "Contenido y Publi pensado para escalar",
    intro:
      "Analizamos cómo comunica MYWAVE y planteamos una estrategia de contenido y publicidad orientada a mejorar la percepción de marca, generar más impacto y convertir mejor la atención de su comunidad.",
    before: "",
    after: "",
    changes: [
      "Diseños de anuncios estáticos alineados con la identidad de MYWAVE.",
      "Mejoras sobre el contenido actual para aumentar su impacto.",
      "Una estructura de contenido pensada para escalar.",
    ],
    reason:
      "El objetivo es convertir la atención de la marca en un sistema de contenido y publicidad capaz de generar más oportunidades de crecimiento.",
  },
];

const challengePoints = [
  {
    number: "1.1",
    title: "Una web a medida",
    text: "Crear desde cero un diseño web en Shopify optimizado para reforzar la marca.",
  },
  {
    number: "1.2",
    title: "Un mejor proceso de compra",
    text: "Detectar y reducir fricciones que podían dificultar la decisión de compra.",
  },
  {
    number: "1.3",
    title: "Captación de clientes",
    text: "Construir una estrategia simple y efectiva para atraer nuevos clientes y fidelizarlos.",
  },
];

const strategyPoints = [
  {
    number: "2.1",
    title: "Auditoría/Diseño CRO",
    text: "De una web promedio en Wordpress a una web diseñada a código y a medida en Shopify. ",
  },
  {
    number: "2.2",
    title: "Estrategia Email Mkt",
    text: "Diseñamos mejores pop-ups y creamos una base sólida con los 11 flujos más importantes que toda marca debe tener.",
  },
  {
    number: "2.3",
    title: "Atracción de clientes",
    text: "Investigamos su competencia e implementamos una estrategia única de contenido orgánico.",
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
              lg:grid-cols-[0.7fr_1.3fr]
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
                MYWAVE es una marca de ropa de baño femenina focalizada en el surf y el beach lifestyle. Sin embargo, su tienda no estaba a la altura y su estrategia estaba desorganizada e incompleta. Tras hablar con su fundadora Iris, decidimos trabajar en una estrategia holística que explicamos a continuación.
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
    min-h-[340px]
    items-center
    justify-center
    lg:min-h-[500px]
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
    bg-[#D66A9A]/30
    blur-[190px]

    sm:h-[560px]
    sm:w-[1100px]
    sm:blur-[200px]

    lg:h-[620px]
    lg:w-[1250px]
    lg:blur-[210px]
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
    lg:w-[170%]
    lg:max-w-none
    lg:translate-x-[8%]

    sm:p-3

    [transform-style:preserve-3d]

    lg:[transform:scale(1.2)_rotateY(-10deg)_rotateX(6deg)]
    lg:[transform-origin:center_center]

    transition-transform
    duration-700
    ease-out
  "
>
  <div className="flex h-5 items-center gap-1.5 px-2 sm:h-6">
    <span className="h-1.5 w-1.5 rounded-full bg-white/65 sm:h-2 sm:w-2" />
    <span className="h-1.5 w-1.5 rounded-full bg-white/35 sm:h-2 sm:w-2" />
    <span className="h-1.5 w-1.5 rounded-full bg-white/15 sm:h-2 sm:w-2" />
  </div>

  <div className="lg:h-[350px] overflow-hidden rounded-lg bg-[#111]">
  <video
  src="/mywave-desktop.mp4"
  className="h-full w-full object-contain"
  autoPlay
  muted
  loop
  playsInline
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

    w-[29%]
    min-w-[125px]
    max-w-[195px]

    rounded-[1.4rem]
    border
    border-white/[0.08]
    bg-[#0b0b0d]
    p-1.5
    shadow-[0_30px_90px_rgba(0,0,0,0.70)]

    sm:bottom-0
    sm:right-[-4%]
    sm:w-[26%]
    sm:max-w-[205px]

    lg:right-[-10%]
  "
  style={{
    transform: "rotateY(-16deg) rotateX(8deg)",
    transformStyle: "preserve-3d",
  }}
>
  <div className="lg:h-[350px] overflow-hidden rounded-lg bg-[#111]">
  <video
  src="/mywave-mobile.mp4"
  className="h-full w-full object-contain"
  autoPlay
  muted
  loop
  playsInline
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
        <div className="mx-auto max-w-7xl">

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
                MYWAVE tenía una web en Wordpress con una buena propuesta de producto y una identidad reconocible. Sin embargo, el reto era trasladar ese valor al mercado, mejorar la experiencia de compra y construir un sistema de atracción de clientes para diferenciarse y comenzar a vender más. Iris aceptó sin ninguna duda y nos pusimos manos a la obra.
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

        <div className="relative z-10 mx-auto max-w-7xl">

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
              No solo creamos su web en Shopify, sino que aplicamos las siguientes tres claves:
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

        <div className="relative z-10 mx-auto max-w-7xl">

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
              La Transformación
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

          {/* =========================================================
    ACTIVE AREA — SHOWCASE
========================================================= */}

<div className="mt-12">

  {/* CABECERA DEL CASO */}

  <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

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
          mt-4
          text-3xl
          font-semibold
          tracking-[-0.035em]
          sm:text-4xl
        "
      >
        {active.title}
      </h3>
    </div>

    <p
      className="
        text-base
        leading-7
        text-white/45
        sm:text-lg
      "
    >
      {active.intro}
    </p>

  </div>


  {/* =======================================================
    WEB SHOWCASE — SCALATE
======================================================= */}

{active.id !== "email" && active.id !== "publi" && (
  <div className="relative mt-12 lg:mt-16">

  {/* GLOW SCALATE */}

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[420px]
      w-[850px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#7C3AED]/10
      blur-[150px]
    "
  />

  {/* DOS WEBS */}

  <div
  className={`
    relative
    z-10
    grid
    grid-cols-1
gap-10

    ${
      active.id === "pdp"
        ? "lg:grid-cols-[0.72fr_0.72fr_1.56fr] lg:gap-5 xl:gap-6"
        : active.id === "cart"
        ? "lg:grid-cols-2 lg:gap-8 xl:gap-10"
        : "lg:grid-cols-2 lg:gap-6 xl:gap-6"
    }
  `}
>
{/* ===================================================
    COMPRA EL LOOK & BUILDER MOCKUP — ORDENADOR
=================================================== */}
{/* ===================================================
    COMPRA EL LOOK / MODAL / CART — MOCKUPS
    COMPOSICIÓN EXACTA TIPO VICCA
=================================================== */}

{(active.id === "look" ||
  active.id === "modal" ||
  active.id === "cart") && (
  <div className="group hidden lg:col-span-2 lg:block">

    <div className="relative w-full overflow-visible">

      {/* =================================================
          ORDENADOR
      ================================================= */}

      <div
        className="
          relative
          z-10

          w-[80%]

          overflow-hidden
          rounded-[1.5rem]
          border
          border-[#7C3AED]/25
          bg-[#0A0A0C]
          p-2

          shadow-[0_30px_100px_rgba(124,58,237,0.12)]

          transition-all
          duration-500

          group-hover:border-[#A855F7]/40
        "
      >

        {/* BARRA DEL NAVEGADOR */}

        <div className="flex h-8 items-center gap-1.5 px-3">

          <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]/70" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/70" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#D946EF]/70" />

        </div>


        {/* PANTALLA */}

        <div className="overflow-hidden rounded-[1.05rem] bg-white">

          <video
            src={
              active.id === "look"
                ? "/mywave-look-desktop.mp4"
                : active.id === "modal"
                  ? "/mywave-modal-desktop.mp4"
                  : "/mywave-cart-desktop.mp4"
            }
            className="block h-auto w-full object-contain"
            muted
            loop
            autoPlay
            playsInline
          />

        </div>

      </div>


      {/* =================================================
          MÓVIL
      ================================================= */}

      <div
        className="
          absolute

          right-[-1%]
          top-1/2
          z-20

          w-[19%]

          -translate-y-1/2

          overflow-hidden
          rounded-[1.6rem]
          border
          border-[#7C3AED]/30
          bg-[#0A0A0C]
          p-1.5

          shadow-[0_30px_90px_rgba(0,0,0,0.70)]

          transition-transform
          duration-500

          group-hover:-translate-y-[52%]
        "
      >

        {/* PANTALLA DEL MÓVIL */}

        <div className="overflow-hidden rounded-[1.25rem] bg-white">

          <video
            src={
              active.id === "look"
                ? "/mywave-look-mobile.mp4"
                : active.id === "modal"
                  ? "/mywave-modal-mobile.mp4"
                  : "/mywave-cart-mobile.mp4"
            }
            className="block h-auto w-full object-contain"
            muted
            loop
            autoPlay
            playsInline
          />

        </div>

      </div>

    </div>

  </div>
)}
{/* ===================================================
    ABOUT US — MOCKUPS
    ORDENADOR + MÓVIL
=================================================== */}

{active.id === "about" && (
  <div className="group hidden lg:col-span-2 lg:block">

    <div className="relative w-full overflow-visible">

      {/* =================================================
          ORDENADOR
      ================================================= */}

      <div
        className="
          relative
          z-10
          w-[80%]
          overflow-visible
          rounded-[1.5rem]
          border
          border-[#7C3AED]/25
          bg-[#0A0A0C]
          p-2
          shadow-[0_30px_100px_rgba(124,58,237,0.12)]
          transition-all
          duration-500
          group-hover:border-[#A855F7]/40
        "
      >

        {/* BARRA DEL NAVEGADOR */}

        <div className="flex h-8 items-center gap-1.5 px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D946EF]/70" />
        </div>

        {/* PANTALLA CON ALTURA LIMITADA */}

        <div
          className="
            relative
            h-[500px]
            overflow-y-auto
            overflow-x-hidden
            rounded-[1.05rem]
            bg-white
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          <img
            src="/mywave-about-desktop.png"
            alt="About Us MYWAVE"
            className="block h-auto w-full"
          />

        </div>

        {/* DESLIZA — ORDENADOR */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            z-30
            -translate-x-1/2
            translate-y-1/2
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#17171C]/95
            px-6
            py-2
            text-sm
            font-medium
            text-white/85
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-md
            whitespace-nowrap
          "
        >
          <span className="mr-2 text-lg text-[#A855F7]">
            ↓
          </span>

          Desliza para explorar
        </div>

      </div>


      {/* =================================================
          MÓVIL
      ================================================= */}

      <div
        className="
          absolute
          right-[-1%]
          top-1/2
          z-20
          w-[19%]
          -translate-y-1/2
          overflow-visible
          rounded-[1.6rem]
          border
          border-[#7C3AED]/30
          bg-[#0A0A0C]
          p-1.5
          shadow-[0_30px_90px_rgba(0,0,0,0.70)]
          transition-transform
          duration-500
          group-hover:-translate-y-[52%]
        "
      >

        {/* PANTALLA DEL MÓVIL CON ALTURA LIMITADA */}

        <div
          className="
            relative
            h-[430px]
            overflow-y-auto
            overflow-x-hidden
            rounded-[1.25rem]
            bg-white
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          <img
            src="/mywave-about-mobile.png"
            alt="About Us MYWAVE móvil"
            className="block h-auto w-full"
          />

        </div>

        {/* DESLIZA — MÓVIL */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            z-30
            -translate-x-1/2
            translate-y-1/2
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#17171C]/95
            px-4
            py-2
            text-sm
            font-medium
            text-white/85
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-md
            whitespace-nowrap
          "
        >
          <span className="mr-2 text-lg text-[#A855F7]">
            ↓
          </span>

          Desliza para explorar
        </div>

      </div>

    </div>

  </div>
)}
{/* ===================================================
    ABOUT US — MOBILE
=================================================== */}

{active.id === "about" && (
  <div className="block lg:hidden">

    <div className="relative mx-auto w-full max-w-[500px]">

      <div
        className="
          relative
          overflow-hidden
          rounded-[1.6rem]
          border
          border-[#7C3AED]/30
          bg-[#0A0A0C]
          p-2
          shadow-[0_30px_90px_rgba(0,0,0,0.70)]
        "
      >

        <div
  className="
    relative
    h-[600px]
    overflow-y-auto
    overflow-x-hidden
    rounded-[1.25rem]
    bg-white
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
>
  <img
    src="/mywave-about-mobile.png"
    alt="About Us MYWAVE móvil"
    className="block h-auto w-full"
  />
</div>

      </div>


      {/* DESLIZA PARA EXPLORAR */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          z-30
          -translate-x-1/2
          translate-y-1/2
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#17171C]/95
          px-6
          py-2
          text-sm
          font-medium
          text-white/85
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          backdrop-blur-md
          whitespace-nowrap
        "
      >

        <span className="mr-2 text-lg text-[#A855F7]">
          ↓
        </span>

        Desliza para explorar

      </div>

    </div>

  </div>
)}
    {/* ===================================================
        ANTES
    =================================================== */}

    {active.id !== "look" &&
 active.id !== "modal" &&
 active.id !== "cart" && (
  active.id !== "about" &&
  <div className="group">

      {/* HEADER */}

      <div className="mb-4 flex items-center justify-between px-1">

        <div className="flex items-center gap-3">

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-white/30
            "
          />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-white/35
            "
          >
            Antes
          </span>

        </div>

      </div>


      {/* BROWSER */}

      <div
  className={`
    relative
    overflow-visible
    rounded-[1.5rem]
    border
    border-white/[0.08]
    bg-[#0A0A0C]
    p-2
    shadow-[0_30px_90px_rgba(0,0,0,0.45)]
    transition-all
    duration-500
    group-hover:border-white/[0.14]

    ${
  active.id === "pdp"
    ? "mx-auto w-[100%] sm:w-[100%] lg:w-[100%] xl:w-[100%]"
    : active.id === "cart"
  ? "w-[96%] sm:w-[86%] lg:ml-0 lg:mr-auto lg:w-[60%] xl:w-[56%]"
    : "w-full"
}
    }
  `}
>
  

        {/* TOP BAR */}

        <div
          className="
            flex
            h-8
            items-center
            gap-1.5
            px-3
          "
        >

          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />

        </div>


        {/* VIEWPORT */}

        <div
  className={`
  relative
rounded-[1.05rem]
bg-white
hide-scrollbar

  ${
    active.id === "cart"
      ? "h-auto overflow-hidden"
      : "h-[500px] sm:h-[450px] lg:h-[470px] xl:h-[500px] overflow-y-auto overflow-x-hidden"
  }
`}
>

          {active.before.endsWith(".mp4") ? (
            <video
              key={`${active.id}-before`}
              src={active.before}
              className="
  block
  h-auto
  w-full
  object-contain
"
              muted
              loop
              autoPlay
              playsInline
            />
            
          ) : (
            
            <img
              src={active.before}
              alt={`${active.label} antes`}
              className="
                block
                h-auto
                w-full
              "
            />
          )}

                </div>
{/* INDICADOR DE SCROLL — FIJO AL BROWSER */}
        {active.id !== "cart" &&
 active.id !== "modal" &&
 active.id !== "look" && (
  <div
    className="
      absolute
      bottom-0
      left-1/2
      z-30
      -translate-x-1/2
      translate-y-1/2
      rounded-2xl
      border
      border-black/60
      bg-[#A3A3A3]/70
      px-6
      py-2
      text-sm
      font-medium
      text-white
      shadow-[0_10px_35px_rgba(0,0,0,0.35)]
      backdrop-blur-md
      whitespace-nowrap
    "
  >
    <span className="mr-2 text-lg">↓</span>
    Desliza para explorar
  </div>
)}

      </div>

    </div>
  )}

    {/* ===================================================
        DESPUÉS
    =================================================== */}

    {active.id !== "look" &&
 active.id !== "modal" &&
 active.id !== "cart" && (
  active.id !== "about" &&
  <div className="group">

      {/* HEADER */}

      <div className="mb-4 flex items-center justify-between px-1">

        <div className="flex items-center gap-3">

          <span className="relative flex h-4 w-4 items-center justify-center">
  <span
    className="
      absolute
      h-4
      w-4
      rounded-full
      border
      border-[#A855F7]/30
      animate-ping
    "
  />

  <span
    className="
      absolute
      h-3
      w-3
      rounded-full
      border
      border-[#A855F7]/45
    "
  />

  <span
    className="
      relative
      h-1.5
      w-1.5
      rounded-full
      bg-[#A855F7]
      shadow-[0_0_12px_#A855F7]
    "
  />
</span>

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-white/70
            "
          >
            Después
          </span>

        </div>

      </div>


      {/* BROWSER */}

      <div
  className={`
    relative
    overflow-visible
    rounded-[1.5rem]
    border
    border-[#7C3AED]/25
    bg-[#0A0A0C]
    p-2
    shadow-[0_30px_100px_rgba(124,58,237,0.12)]
    transition-all
    duration-500
    group-hover:border-[#A855F7]/40

    ${
  active.id === "pdp"
    ? "mx-auto w-[100%] sm:w-[100%] lg:w-[100%] xl:w-[100%]"
    : active.id === "cart"
  ? "w-[96%] sm:w-[86%] lg:ml-0 lg:mr-auto lg:w-[60%] xl:w-[56%]"
    : "w-full"
}
    }
  `}
>

        {/* GRADIENT LINE */}

        <div
          className="
            pointer-events-none
            absolute
            left-[8%]
            right-[8%]
            top-0
            z-20
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#A855F7]
            to-transparent
            opacity-70
          "
        />


        {/* TOP BAR */}

        <div
          className="
            flex
            h-8
            items-center
            gap-1.5
            px-3
          "
        >

          <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D946EF]/70" />


        </div>


        {/* VIEWPORT */}

       <div
  className={`
  relative
rounded-[1.05rem]
bg-white
hide-scrollbar
  ${
    active.id === "cart"
      ? "h-auto overflow-hidden"
      : "h-[500px] sm:h-[450px] lg:h-[470px] xl:h-[500px] overflow-y-auto overflow-x-hidden"
  }
`}
>

          {active.after.endsWith(".mp4") ? (
            <video
              key={`${active.id}-after`}
              src={active.after}
              className="
  block
  h-auto
  w-full
  object-contain
"
              muted
              loop
              autoPlay
              playsInline
            />
          ) : (
            <img
              src={active.after}
              alt={`${active.label} después`}
              className="
                block
                h-auto
                w-full
              "
            />
          )}

                </div>

        {/* INDICADOR DE SCROLL — FIJO AL BROWSER */}
        {active.id !== "cart" &&
 active.id !== "modal" &&
 active.id !== "look" && (
  <div
    className="
      absolute
      bottom-0
      left-1/2
      z-30
      -translate-x-1/2
      translate-y-1/2
      rounded-2xl
      border
      border-[#7C3AED]/20
      bg-[#17171C]/95
      px-6
      py-2
      text-sm
      font-medium
      text-white/85
      shadow-[0_10px_40px_rgba(124,58,237,0.20)]
      backdrop-blur-md
      whitespace-nowrap
    "
  >
    <span className="mr-2 text-lg text-[#A855F7]">↓</span>
    Desliza para explorar
  </div>
)}

      </div>

    </div>
      )}
{/* ===================================================
    ORDENADOR — MOCKUP 3D
=================================================== */}

{active.id === "pdp" && (
  <div className="group">

    {/* HEADER */}

    <div className="mb-4 flex items-center justify-between px-1">

      <div className="flex items-center gap-3">

        <span className="relative flex h-4 w-4 items-center justify-center">

          <span
            className="
              absolute
              h-4
              w-4
              rounded-full
              border
              border-[#A855F7]/30
              animate-ping
            "
          />

          <span
            className="
              absolute
              h-3
              w-3
              rounded-full
              border
              border-[#A855F7]/45
            "
          />

          <span
            className="
              relative
              h-1.5
              w-1.5
              rounded-full
              bg-[#A855F7]
              shadow-[0_0_12px_#A855F7]
            "
          />

        </span>

        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-white/70
          "
        >
          STICKY ADD TO CART MEJORADO (FIJO)
        </span>

      </div>

    </div>


    {/* BROWSER */}

    <div
      className="
        relative
        overflow-visible
        rounded-[1.5rem]
        border
        border-[#7C3AED]/25
        bg-[#0A0A0C]
        p-2
        shadow-[0_30px_100px_rgba(124,58,237,0.12)]
        transition-all
        duration-500
        group-hover:border-[#A855F7]/40
      "
    >

      {/* GRADIENT LINE */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          right-[8%]
          top-0
          z-20
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#A855F7]
          to-transparent
          opacity-70
        "
      />

      {/* TOP BAR */}

      <div className="flex h-8 items-center gap-1.5 px-3">

        <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#D946EF]/70" />

      </div>


      {/* VIEWPORT */}

      <div
  className="
    relative
rounded-[1.05rem]
bg-white
hide-scrollbar
  "
>

              <video
                src="/mywave-pdp-desktop.mp4"
                className="block h-full w-full object-cover object-center"
                muted
                loop
                autoPlay
                playsInline
              />
</div>

    </div>

  </div>
    )}
  </div>
</div>
)}
{/* =======================================================
    EMAIL MARKETING — SHOWCASE
======================================================= */}

{active.id === "email" && (
  <div className="mt-12 lg:mt-16">

    {/* GLOW */}

    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        h-[700px]
        w-[1000px]
        -translate-x-1/2
        rounded-full
        bg-[#7C3AED]/10
        blur-[180px]
      "
    />

    {/* ===================================================
        POP-UPS + EMAILS
    =================================================== */}

    <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.90fr_0.775fr_0.775fr]">
      {/* ===================================================
          POP-UPS
      =================================================== */}

      <div className="lg:col-span-1">

        <div className="mb-6 flex items-center gap-3 px-1">

          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute h-4 w-4 animate-ping rounded-full border border-[#A855F7]/30" />
            <span className="absolute h-3 w-3 rounded-full border border-[#A855F7]/45" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#A855F7] shadow-[0_0_12px_#A855F7]" />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Pop-ups
          </span>

        </div>

        {/* MÓVIL */}

        <div className="lg:hidden">

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[500px]
              overflow-hidden
              rounded-[1.5rem]
              border
              border-[#7C3AED]/25
              bg-[#0A0A0C]
              p-2
              shadow-[0_30px_100px_rgba(124,58,237,0.12)]
            "
          >

            <div className="h-[570px] overflow-hidden rounded-[1.05rem] bg-white">

              <video
                src="/mywave-email-mobile.mp4"
                className="block h-full w-full object-cover object-center"
                muted
                loop
                autoPlay
                playsInline
              />

            </div>

          </div>

        </div>

        {/* ORDENADOR */}

        <div className="group hidden lg:block">

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[1400px]
              overflow-hidden
              rounded-[1.5rem]
              border
              border-[#7C3AED]/25
              bg-[#0A0A0C]
              p-2
              shadow-[0_30px_100px_rgba(124,58,237,0.12)]
              transition-all
              duration-500
              group-hover:border-[#A855F7]/40
            "
          >

            <div className="flex h-8 items-center gap-1.5 px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#D946EF]/70" />
            </div>

            <div className="h-[430px] overflow-hidden rounded-[1.05rem] bg-black">

              <video
                src="/mywave-email-desktop.mp4"
                className="block h-full w-full object-contain"
                muted
                loop
                autoPlay
                playsInline
              />

            </div>

          </div>

        </div>

      </div>


      {/* ===================================================
          EMAIL MARKETING
      =================================================== */}

      <div className="lg:col-span-2">

        <div className="mb-6 flex items-center gap-3 px-1">

          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute h-4 w-4 animate-ping rounded-full border border-[#A855F7]/30" />
            <span className="absolute h-3 w-3 rounded-full border border-[#A855F7]/45" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#A855F7] shadow-[0_0_12px_#A855F7]" />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
            DISEÑOS EMAIL
          </span>

        </div>


        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">

          {/* EMAIL 1 */}

          <div className="group">

            <div
              className="
                relative
                overflow-visible
                rounded-[1.5rem]
                border
                border-[#7C3AED]/25
                bg-[#0A0A0C]
                p-2
                shadow-[0_30px_100px_rgba(124,58,237,0.12)]
                transition-all
                duration-500
                group-hover:border-[#A855F7]/40
                group-hover:-translate-y-1
              "
            >

              <div className="flex h-8 items-center gap-1.5 px-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#D946EF]/70" />
              </div>

              <div className="relative h-[560px] overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[1.05rem] bg-white sm:h-[500px] lg:h-[430px]">

  <img
    src="/mywave-email-1.png"
    alt="Diseño de email marketing de MyWave"
    className="block h-auto w-full object-contain"
  />

</div>
<div
  className="
    pointer-events-none
    absolute
    bottom-0
    left-1/2
    z-30
    -translate-x-1/2
    translate-y-1/2
    rounded-2xl
    border
    border-[#7C3AED]/20
    bg-[#17171C]/95
    px-5
    py-2
    text-sm
    font-medium
    text-white/85
    shadow-[0_10px_40px_rgba(124,58,237,0.20)]
    backdrop-blur-md
    whitespace-nowrap
  "
>
  <span className="mr-2 text-lg text-[#A855F7]">↓</span>
  Desliza para explorar
</div>
            </div>

          </div>


          {/* EMAIL 2 */}

          <div className="group">

            <div
              className="
                relative
                overflow-visible
                rounded-[1.5rem]
                border
                border-[#7C3AED]/25
                bg-[#0A0A0C]
                p-2
                shadow-[0_30px_100px_rgba(124,58,237,0.12)]
                transition-all
                duration-500
                group-hover:border-[#A855F7]/40
                group-hover:-translate-y-1
              "
            >

              <div className="flex h-8 items-center gap-1.5 px-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#D946EF]/70" />
              </div>

              <div className="relative h-[560px] overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[1.05rem] bg-white sm:h-[500px] lg:h-[430px]">

  <img
    src="/mywave-email-2.png"
    alt="Segundo diseño de email marketing de MyWave"
    className="block h-auto w-full object-contain"
  />
</div>
<div
  className="
    pointer-events-none
    absolute
    bottom-0
    left-1/2
    z-30
    -translate-x-1/2
    translate-y-1/2
    rounded-2xl
    border
    border-[#7C3AED]/20
    bg-[#17171C]/95
    px-5
    py-2
    text-sm
    font-medium
    text-white/85
    shadow-[0_10px_40px_rgba(124,58,237,0.20)]
    backdrop-blur-md
    whitespace-nowrap
  "
>
  <span className="mr-2 text-lg text-[#A855F7]">↓</span>
  Desliza para explorar
</div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
)}
{/* =======================================================
    PUBLI & CONTENT — SHOWCASE
======================================================= */}

{active.id === "publi" && (
  <div className="mt-12 lg:mt-16">

    {/* GLOW */}

    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-[650px]
        w-[1000px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#7C3AED]/10
        blur-[180px]
      "
    />

    <div className="relative z-10">

      {/* ===================================================
          MÓVIL — UN SOLO MOCKUP
      =================================================== */}

      <div className="lg:hidden">

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[500px]
            overflow-visible
            rounded-[1.5rem]
            border
            border-[#7C3AED]/25
            bg-[#0A0A0C]
            p-2
            shadow-[0_30px_100px_rgba(124,58,237,0.12)]
          "
        >

          {/* TOP BAR */}

          <div className="flex h-8 items-center gap-1.5 px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D946EF]/70" />
          </div>

          {/* CONTENIDO */}

          <div
            className="
              relative
              h-[570px]
              overflow-y-auto
              overflow-x-hidden
              hide-scrollbar
              rounded-[1.05rem]
              bg-white
            "
          >

            <video
  src="/mywave-publi-content-mobile.mp4"
  className="block h-auto w-full object-contain"
  muted
  loop
  autoPlay
  playsInline
/>

          </div>

        </div>

      </div>


      {/* ===================================================
          ORDENADOR — UN SOLO MOCKUP
      =================================================== */}

      <div className="hidden lg:block">

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1400px]
            overflow-visible
            rounded-[1.5rem]
            border
            border-[#7C3AED]/25
            bg-[#0A0A0C]
            p-2
            shadow-[0_30px_100px_rgba(124,58,237,0.12)]
          "
        >

          {/* TOP BAR */}

          <div className="flex h-8 items-center gap-1.5 px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D946EF]/70" />
          </div>

          {/* CONTENIDO */}

          <div
            className="
              relative
              h-[520px]
              overflow-y-auto
              overflow-x-hidden
              hide-scrollbar
              rounded-[1.05rem]
              bg-white
            "
          >

           <video
  src="/mywave-publi-content-desktop.mp4"
  className="block h-auto w-full object-contain"
  muted
  loop
  autoPlay
  playsInline
/>

          </div>

        </div>

      </div>

    </div>

  </div>
)}
  {/* =======================================================
      CTA
  ======================================================= */}

 <div
  className="
    mt-20
    flex
    w-full
    justify-center
    sm:mt-20
    lg:mt-20
  "
>

    <Button
      href="/aplicar"
      className="
        mx-auto
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

        <div className="mx-auto max-w-7xl">

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
              No se trataba solo de pasar a Shopify, sino de crear una marca única para diferenciarse de la competencia y atraer más y mejores clientas.
            </p>

          </div>

          {/* BLOQUES DE IMPACTO */}

<div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

  {[
    {
      title: "Más oportunidades de compra",
      text: "De una navegación pasiva a un ecosistema pensado para vender.",
    },
    {
      title: "Mayor conversión",
      text: "Menos fricción entre descubrir un producto y decidir comprarlo.",
    },
    {
      title: "Mayor ticket medio y recurrencia",
      text: "Cada compra genera más ganancia económica para MyWave.",
    },
    {
      title: "Una marca preparada para crecer",
      text: "Un ecosistema digital construido para acompañar el crecimiento de la marca.",
    },
  ].map((item, index) => (
    <div
      key={item.title}
      className="
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
          mb-5
          flex
          h-11
          w-11
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

      <h3 className="text-base font-semibold">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/40">
        {item.text}
      </p>

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
    h-[320px]
    w-[360px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#7C3AED]/60
    blur-[105px]

    sm:top-[430px]
    sm:h-[400px]
    sm:w-[500px]
    sm:bg-[#7C3AED]/20
    sm:blur-[130px]

    lg:top-[550px]
    lg:h-[500px]
    lg:w-[750px]
    lg:bg-[#7C3AED]/20
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
              text-3xl
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
            Hablemos de cómo transformarla en una marca mucho más sólida.
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