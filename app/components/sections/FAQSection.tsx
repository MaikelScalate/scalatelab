"use client";

import { useState } from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "¿Os basáis en mejorar solo mi tienda Shopify?",
    answer:
"No. Nuestro enfoque principal es optimizar tu tienda online, ya que da igual cuánto tráfico generes: si tu web no está preparada para convertir, estarás perdiendo dinero. Una vez optimizada, podemos trabajar otras áreas para seguir creciendo.",  },
  {
    question: "¿Y si mi web ya está bien diseñada?",
    answer:
      "Que una web se vea bien no significa que esté convirtiendo todo lo que podría. En Scalate, analizamos cómo interactúan los usuarios con tu tienda para potenciar lo que ya funciona y mejorar lo que frena mejores resultados.",
  },
  {
    question: "¿Cómo sabéis qué mejorar en mi tienda?",
    answer:
      "No hacemos cambios basándonos únicamente en gustos o intuiciones. Analizamos tu marca, tu tienda, el recorrido de compra y las métricas relevantes para identificar dónde existen oportunidades reales de mejora. Después priorizamos según su impacto potencial.",
  },
  {
    question: "¿Qué hacéis exactamente para analizarla?",
    answer:
      "Realizamos un análisis exhaustivo de tu E-commerce mediante diversas plataformas (Shopify, GA4, GSC, Clarity y más) para detectar fricciones, cuellos de botella y oportunidades de mejora. Una vez realizada la auditoría, te presentamos un plan de acción claro y detallado para optimizar tu tienda.",
  },
  {
    question: "¿Qué métricas mejoráis en mi E-commerce?",
    answer:
      "Trabajamos principalmente sobre métricas relacionadas con el crecimiento y la rentabilidad de tu marca, como son la tasa de conversión, el ticket medio y la recurrencia. Dependiendo de cada marca, también podemos identificar otras métricas relevantes.",
  },
  {
    question: "¿Dependeré de desarrolladores o deberé modificar código?",
    answer:
      "No. En la parte de diseño, creamos una web estructurada que puedas modificar y adaptar a las necesidades de tu marca sin tocar código. Una vez creada, podrás cambiarla a tu gusto.",
  },
  {
    question: "¿Cuánto dura el análisis y optimización?",
    answer:
"El tiempo depende del punto de partida de cada marca y de las mejoras que necesite. Normalmente, un proceso completo y bien ejecutado se desarrolla en un plazo de entre 30 y 60 días.",
  },
{
    question: "¿Cómo es trabajar con vosotros?",
    answer:
"Trabajamos de forma cercana, con comunicación directa y constante. Analizamos tu marca, aportamos recomendaciones estratégicas y te acompañamos en cada mejora para hacer crecer tu E-commerce.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <Section
      id="faq"
      className="
        relative
        overflow-hidden
        pt-20
        pb-24
        sm:pt-24
        sm:pb-28
        lg:pt-24
        lg:pb-32
      "
    >
      {/* =========================================================
    FONDO / GLOWS
    ========================================================= */}

{/* Glow morado superior derecho */}
<div
  className="
    pointer-events-none
    absolute
    -right-[400px]
    -top-[-180px]
    h-[600px]
    w-[600px]
    rounded-full
    bg-blue-600/15
    blur-[150px]
  "
/>

{/* Glow azul/morado central */}
<div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-[35%]
    h-[500px]
    w-[700px]
    -translate-x-1/2
    rounded-full
    bg-violet-500/[0.055]
    blur-[170px]
  "
/>

{/* Glow morado inferior izquierdo */}
<div
  className="
    pointer-events-none
    absolute
    -left-[300px]
    -bottom-[160px]
    h-[600px]
    w-[600px]
    rounded-full
    bg-purple-700/15
    blur-[150px]
  "
/>

      <Container>
        {/* =======================================================
            HEADER
            ======================================================= */}

        <div className="relative z-10 mx-auto mb-6 max-w-4xl text-center sm:mb-8 lg:mb-6">
          <div
            className="
              mb-4
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-purple-400
              sm:text-xs
            "
          >
            FAQ's
          </div>

          <Title
            className="
              text-4xl
              font-semibold
              tracking-[-0.04em]
              sm:text-5xl
              lg:text-5xl
            "
          >
            Preguntas frecuentes
          </Title>

          <Subtitle
  className="
    mx-auto
    mt-5
    max-w-full
    text-sm
    leading-6
    text-white/50
    sm:text-base
    sm:leading-7
    lg:whitespace-nowrap
    lg:text-lg
  "
>
  Resolvemos las dudas más comunes antes de empezar a escalar tu E-commerce.
</Subtitle>
        </div>

        {/* =======================================================
            FAQ PANEL
            ======================================================= */}

        <div
  className="
    faq-panel
    relative
    z-10
    mx-auto
    max-w-6xl
    scale-[0.91]
    overflow-hidden
    rounded-2xl
    border
    border-white/[0.10]
    bg-[#050507]/90
    shadow-[0_0_80px_rgba(124,58,237,0.06)]
    backdrop-blur-xl
    lg:rounded-3xl
  "
>
    
          {/* TOP BAR */}

          <div
            className="
              flex
              h-12
              items-center
              justify-between
              border-b
              border-white/[0.07]
              px-5
              sm:px-7
              lg:h-14
              lg:px-8
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/[0.06]" />
            </div>

            <div
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-white/25
                sm:text-[10px]
              "
            >
              Scalate FAQ's
            </div>
          </div>

          {/* =====================================================
              DESKTOP
              ===================================================== */}

          <div className="hidden lg:grid lg:grid-cols-[0.95fr_1.25fr]">
            {/* QUESTIONS */}

            <div className="border-r border-white/[0.07]">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => handleToggle(index)}
                    className={`
                      group
                      relative
                      flex
                      min-h-[86px]
                      w-full
                      items-center
                      gap-5
                      border-b
                      border-white/[0.07]
                      px-6
                      text-left
                      transition-all
                      duration-300
                      last:border-b-0
                      xl:px-8
                      ${
                        isOpen
                          ? "bg-purple-500/[0.07]"
                          : "hover:bg-white/[0.025]"
                      }
                    `}
                  >
                    {/* ACTIVE LINE */}

                    <span
                      className={`
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[2px]
                        bg-purple-500
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "scale-y-100 opacity-100"
                            : "scale-y-0 opacity-0"
                        }
                      `}
                    />

                    {/* NUMBER */}

                    <span
                      className={`
                        w-10
                        shrink-0
                        text-2xl
                        font-light
                        tracking-[-0.04em]
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "text-purple-400"
                            : "text-white/25 group-hover:text-white/45"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* QUESTION */}

                    <span
                      className={`
                        flex-1
                        pr-2
                        text-sm
                        font-medium
                        leading-5
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "text-white"
                            : "text-white/70 group-hover:text-white"
                        }
                      `}
                    >
                      {item.question}
                    </span>

                    {/* ICON */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-45 border-purple-400/60 text-purple-300"
                            : "border-white/15 text-white/55 group-hover:border-white/30 group-hover:text-white"
                        }
                      `}
                    >
                      <span className="text-lg font-light leading-none">
                        +
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ANSWER */}

            <div className="relative min-h-[688px]">
              <div className="absolute inset-0">
                {faqItems.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={item.question}
                      className={`
                        absolute
                        inset-0
                        flex
                        flex-col
                        justify-center
                        px-10
                        py-12
                        xl:px-14
                        ${
                          isOpen
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                        }
                        transition-opacity
                        duration-300
                      `}
                    >
                      <div
                        className={`
                          max-w-2xl
                          transform
                          transition-all
                          duration-500
                          ${
                            isOpen
                              ? "translate-y-0"
                              : "translate-y-3"
                          }
                        `}
                      >
                        {/* NUMBER */}

                        <div
                          className="
                            mb-5
                            text-sm
                            font-medium
                            tracking-[0.18em]
                            text-purple-400
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* QUESTION */}

                        <h3
                          className="
                            max-w-xl
                            text-2xl
                            font-medium
                            leading-tight
                            tracking-[-0.03em]
                            text-white
                            xl:text-3xl
                          "
                        >
                          {item.question}
                        </h3>

                        {/* LINE */}

                        <div
                          className="
                            my-7
                            h-px
                            w-14
                            bg-purple-500
                          "
                        />

                        {/* ANSWER */}

                        <p
                          className="
                            max-w-2xl
                            text-sm
                            leading-7
                            text-white/55
                            xl:text-base
                            xl:leading-8
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =====================================================
              MOBILE / TABLET
              ===================================================== */}

          <div className="lg:hidden">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="
                    border-b
                    border-white/[0.07]
                    last:border-b-0
                  "
                >
                  {/* QUESTION */}

                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className={`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-4
                      px-5
                      py-5
                      text-left
                      transition-colors
                      duration-300
                      sm:px-7
                      ${
                        isOpen
                          ? "bg-purple-500/[0.06]"
                          : "hover:bg-white/[0.025]"
                      }
                    `}
                  >
                    <span
                      className={`
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[2px]
                        bg-purple-500
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "scale-y-100 opacity-100"
                            : "scale-y-0 opacity-0"
                        }
                      `}
                    />

                    <span
                      className={`
                        shrink-0
                        text-xl
                        font-light
                        tracking-[-0.04em]
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "text-purple-400"
                            : "text-white/25"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`
                        flex-1
                        pr-2
                        text-sm
                        font-medium
                        leading-5
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "text-white"
                            : "text-white/70"
                        }
                      `}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-45 border-purple-400/60 text-purple-300"
                            : "border-white/15 text-white/50"
                        }
                      `}
                    >
                      <span className="text-base font-light leading-none">
                        +
                      </span>
                    </span>
                  </button>

                  {/* ANSWER */}

                  <div
                    className={`
                      grid
                      transition-[grid-template-rows]
                      duration-500
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`
                          px-5
                          pb-6
                          pl-[4.5rem]
                          pr-6
                          sm:px-7
                          sm:pl-[5.5rem]
                          sm:pr-10
                          ${
                            isOpen
                              ? "translate-y-0 opacity-100"
                              : "-translate-y-2 opacity-0"
                          }
                          transition-all
                          duration-500
                        `}
                      >
                        <div className="mb-4 h-px w-10 bg-purple-500" />

                        <p
                          className="
                            text-sm
                            leading-6
                            text-white/50
                            sm:text-base
                            sm:leading-7
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}