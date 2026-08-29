"use client";

import { useEffect, useRef, useState } from "react";

import GrowthProblemCard from "./GrowthProblemCard";

import BrowserProblem from "./problems/BrowserProblem";
import MobileProblem from "./problems/MobileProblem";
import TicketProblem from "./problems/TicketProblem";
import SpeedProblem from "./problems/SpeedProblem";
import FunnelProblem from "./problems/FunnelProblem";
import TrustProblem from "./problems/TrustProblem";

import { problems } from "@/app/data/problems";

const visuals = [
  BrowserProblem,
  MobileProblem,
  TicketProblem,
  SpeedProblem,
  FunnelProblem,
  TrustProblem,
];

export default function GrowthProblemsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * Guarda siempre el índice actual sin
   * necesidad de recrear los timers.
   */
  const activeIndexRef = useRef(0);

  /*
   * Timer principal del autoplay.
   */
  const autoplayTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /*
   * Timer que espera 5 segundos después
   * de que el usuario deje de interactuar.
   */
  const resumeTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /*
   * Indica si el usuario está interactuando
   * actualmente con el carrusel.
   */
  const isInteractingRef = useRef(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  /*
   * ==========================================
   * ACTUALIZAR CARD ACTIVA
   * ==========================================
   */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const updateActiveCard = () => {
      const cards =
        carousel.querySelectorAll<HTMLElement>(
          "[data-carousel-card]"
        );

      if (!cards.length) return;

      const carouselRect =
        carousel.getBoundingClientRect();

      const center =
        carouselRect.left +
        carouselRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect =
          card.getBoundingClientRect();

        const cardCenter =
          rect.left +
          rect.width / 2;

        const distance = Math.abs(
          cardCenter - center
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    /*
     * ==========================================
     * POSICIÓN INICIAL
     *
     * Mobile  → Card 1
     * Desktop → Card 3
     * ==========================================
     */

    requestAnimationFrame(() => {
      const isMobile = window.matchMedia(
        "(max-width: 767px)"
      ).matches;

      const initialIndex = isMobile ? 0 : 2;

      const initialCard =
        carousel.querySelector<HTMLElement>(
          `[data-index="${initialIndex}"]`
        );

      if (initialCard) {
        initialCard.scrollIntoView({
          behavior: "instant",
          block: "nearest",
          inline: "center",
        });
      }

      updateActiveCard();
    });

    carousel.addEventListener(
      "scroll",
      updateActiveCard,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateActiveCard
    );

    return () => {
      carousel.removeEventListener(
        "scroll",
        updateActiveCard
      );

      window.removeEventListener(
        "resize",
        updateActiveCard
      );
    };
  }, []);

  /*
   * ==========================================
   * IR A UNA CARD
   * ==========================================
   */

  const goToCard = (index: number) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card =
      carousel.querySelector<HTMLElement>(
        `[data-index="${index}"]`
      );

    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  /*
   * ==========================================
   * SIGUIENTE CARD
   * ==========================================
   */

  const goToNextCard = () => {
    const currentIndex =
      activeIndexRef.current;

    const nextIndex =
      currentIndex >= problems.length - 1
        ? 0
        : currentIndex + 1;

    goToCard(nextIndex);
  };

  /*
   * ==========================================
   * LIMPIAR AUTOPLAY
   * ==========================================
   */

  const clearAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearTimeout(
        autoplayTimerRef.current
      );

      autoplayTimerRef.current = null;
    }
  };

  /*
   * ==========================================
   * INICIAR AUTOPLAY
   *
   * Una vez iniciado:
   * → espera 7 segundos
   * → cambia de card
   * → vuelve a esperar 7 segundos
   * ==========================================
   */

  const startAutoplay = () => {
    clearAutoplayTimer();

    autoplayTimerRef.current =
      setTimeout(() => {
        if (
          !isInteractingRef.current
        ) {
          goToNextCard();

          startAutoplay();
        }
      }, 7000);
  };

  /*
   * ==========================================
   * USUARIO EMPIEZA A INTERACTUAR
   * ==========================================
   */

  const handleInteractionStart = () => {
    isInteractingRef.current = true;

    /*
     * Paramos inmediatamente el autoplay.
     */
    clearAutoplayTimer();

    /*
     * También cancelamos cualquier espera
     * anterior de 5 segundos.
     */
    if (resumeTimerRef.current) {
      clearTimeout(
        resumeTimerRef.current
      );

      resumeTimerRef.current = null;
    }
  };

  /*
   * ==========================================
   * USUARIO DEJA DE INTERACTUAR
   *
   * Esperamos 5 segundos y entonces
   * volvemos a activar el autoplay.
   * ==========================================
   */

  const handleInteractionEnd = () => {
    isInteractingRef.current = false;

    if (resumeTimerRef.current) {
      clearTimeout(
        resumeTimerRef.current
      );
    }

    resumeTimerRef.current =
      setTimeout(() => {
        /*
         * Después de 5 segundos sin interacción
         * volvemos a activar el autoplay.
         *
         * El primer cambio ocurrirá 7 segundos
         * después de reanudarlo.
         */
        startAutoplay();
      }, 5000);
  };

  /*
   * ==========================================
   * AUTOPLAY INICIAL
   * ==========================================
   */

  useEffect(() => {
    /*
     * Empieza a contar los 7 segundos
     * desde que se monta el componente.
     */
    startAutoplay();

    return () => {
      clearAutoplayTimer();

      if (resumeTimerRef.current) {
        clearTimeout(
          resumeTimerRef.current
        );
      }
    };
  }, []);

  /*
   * ==========================================
   * RENDER
   * ==========================================
   */

  return (
    <div className="relative mt-12 w-full">

      {/* =========================
          CARRUSEL
      ========================== */}

      <div
        ref={carouselRef}
        onPointerDown={handleInteractionStart}
        onPointerUp={handleInteractionEnd}
        onPointerCancel={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseLeave={() => {
          if (isInteractingRef.current) {
            handleInteractionEnd();
          }
        }}
        className="
          flex
          w-full
          gap-6
          overflow-x-auto
          overflow-y-visible
          snap-x
          snap-mandatory
          scroll-smooth
          py-12

          pl-4
          pr-4

          md:pl-[calc(50%_-_12rem)]
          md:pr-[calc(50%_-_12rem)]

          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {problems.map((problem, index) => {
          const Visual = visuals[index];

          const isActive =
            index === activeIndex;

          return (
            <div
              key={problem.title}
              data-carousel-card
              data-index={index}
              className="
                w-[calc((100vw-4rem)/1.08)]
                min-w-[calc((100vw-4rem)/1.08)]

                md:w-[24rem]
                md:min-w-[24rem]

                snap-center

                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
              "
              style={{
                transform: isActive
                  ? "scale(1.08)"
                  : "scale(0.88)",

                opacity: isActive
                  ? 1
                  : 0.55,
              }}
            >
              <GrowthProblemCard
                title={problem.title}
                description={problem.description}
              >
                <Visual />
              </GrowthProblemCard>
            </div>
          );
        })}
      </div>

      {/* =========================
          INDICADORES
      ========================== */}

      <div className="mt-3 flex justify-center gap-2">
        {problems.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ir a la card ${index + 1}`}
            onClick={() => {
              handleInteractionStart();

              goToCard(index);

              /*
               * Después de pulsar un indicador:
               * 5 segundos sin tocar → vuelve a arrancar
               */
              handleInteractionEnd();
            }}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300

              ${
                index === activeIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/30"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}