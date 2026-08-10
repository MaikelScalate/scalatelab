"use client";

import Section from "../ui/Section";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";

export default function FinalCTASection() {
  return (
    <Section
      id="contacto"
      className="
        relative
        overflow-hidden
        pt-0
        pb-6
        sm:pt-10
        sm:pb-20
        lg:pt-12
        lg:pb-14
      "
    >
      <Container>
        {/* =====================================================
            PANEL PRINCIPAL
            ===================================================== */}

        <div
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[24px]
            border
            border-white/[0.10]
            bg-[#05070d]
            px-6
            py-10
sm:py-12
lg:py-16
            shadow-[0_0_100px_rgba(124,58,237,0.06)]
            sm:rounded-[28px]
            sm:px-10
            lg:px-16
          "
        >
          {/* =================================================
              HEX GRID
              MISMO HEXÁGONO DEL HERO
              PERO OCUPANDO TODO EL PANEL
              ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              opacity-40
            "
            style={{
              backgroundImage: "url('/backgrounds/hex-grid.svg')",
              backgroundRepeat: "repeat",
              backgroundSize: "100px",
            }}
          />

          {/* =================================================
              GLOW AZUL — IZQUIERDA / ZONA MEDIA
              ================================================= */}

          <div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    -left-[180px]
    -top-[180px]
    z-[1]
    h-[300px]
    w-[300px]
    rounded-full
    bg-blue-600/20
    blur-[90px]

    lg:-left-[350px]
    lg:-top-[400px]
    lg:h-[650px]
    lg:w-[650px]
    lg:bg-blue-600/20
    lg:blur-[170px]
  "
/>

          {/* =================================================
              GLOW MORADO — DERECHA / ZONA MEDIA
              ================================================= */}

          <div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    -right-[180px]
    -bottom-[180px]
    z-[1]
    h-[320px]
    w-[320px]
    rounded-full
    bg-purple-600/25
    blur-[95px]

    lg:-right-[260px]
    lg:-bottom-[800px]
    lg:h-[700px]
    lg:w-[700px]
    lg:-translate-y-1/2
    lg:bg-purple-600/20
    lg:blur-[180px]
  "
/>

          {/* =================================================
              OSCURECER EL CENTRO
              DEJA LA ZONA CENTRAL MÁS NEGRA
              ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-[2]
              bg-black/[0.34]
            "
          />

          {/* =================================================
              CONTENIDO
              ================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              max-w-5xl
              flex-col
              items-center
              text-center
            "
          >
            {/* =================================================
                TITLE
                ================================================= */}

            <Title
              className="
                w-full
                text-[1.8rem]
                font-semibold
                leading-[1.08]
                tracking-[-0.045em]

                sm:text-[2.3rem]

                lg:whitespace-nowrap
                lg:text-[2.8rem]

                xl:text-[2.5rem]
              "
            >
              Transformemos tu marca para escalar.
            </Title>

            {/* =================================================
                SUBTITLE
                ================================================= */}

            <Subtitle
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-white/55

                sm:text-base
                sm:leading-7

                lg:text-xl
              "
            >
              Sin invertir más en publi.
            </Subtitle>

            {/* =================================================
                CTA
                MISMO ESTILO QUE EL RESTO DE SECTIONS
                ================================================= */}

            <div className="mt-8 flex justify-center">
              <Button
                className="
                  px-6
                  py-3
                  text-2sm

                  sm:px-7
                  sm:py-3.5
                  sm:text-base

                  lg:px-8
                  lg:py-4
                  lg:text-2lg
                "
              >
                Escalemos juntos tu marca
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}