"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import AnalysisAnimation from "./animations/AnalysisAnimation";
import StrategyAnimation from "./animations/StrategyAnimation";
import ImplementationAnimation from "./animations/ImplementationAnimation";
import ScalingAnimation from "./animations/ScalingAnimation";

type Props = {
  step: {
    number: string;
    icon: any;
    title: string;
    text: string;
    animation: string;
  };
  isLast: boolean;
};

export default function TimelineItem({
  step,
  isLast,
}: Props) {
  const Icon = step.icon;

  const mobileRef = useRef(null);
  const desktopRef = useRef(null);

  const mobileInView = useInView(mobileRef, {
    margin: "-20% 0px -20% 0px",
  });

  const desktopInView = useInView(desktopRef, {
    amount: 0.5,
  });

  return (
    <>
      {/* ========================================================= */}
      {/* ========================= MOBILE ======================= */}
      {/* ========================================================= */}

      <motion.div
        ref={mobileRef}
        className="
          relative
          mb-24
          flex
          flex-col
          items-center
          lg:hidden
        "
      >
        {/* ================= ICONO ================= */}

        <motion.div
          animate={{
            borderColor: mobileInView
              ? "rgba(125,38,205,.9)"
              : "rgba(255,255,255,.10)",

            background: mobileInView
              ? "linear-gradient(180deg, rgba(168,85,247,.14), rgba(125,38,205,.05))"
              : "rgba(255,255,255,.03)",

            boxShadow: mobileInView
              ? "0 0 35px rgba(125,38,205,.35)"
              : "0 0 0 rgba(0,0,0,0)",

            scale: mobileInView ? 1.08 : 1,

            rotate: mobileInView ? 0 : -8,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            relative
            -mt-6
            z-20
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            bg-white/[0.03]
            backdrop-blur-xl
          "
        >
          {/* Glow */}

          <motion.div
            animate={{
              opacity: mobileInView ? 1 : 0,
              scale: mobileInView ? 1.4 : 0.8,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              absolute
              inset-0
              z-0
              rounded-full
              bg-purple/20
              blur-xl
            "
          />

          {/* Icono */}

          <motion.div
            animate={{
              color: mobileInView
                ? "#A855F7"
                : "#8A8A8A",

              scale: mobileInView ? 1 : 0.8,
            }}
            className="relative z-10"
          >
            <Icon className="h-7 w-7" />
          </motion.div>
        </motion.div>

        {/* ===================================================== */}
        {/* FONDO NEGRO DETRÁS DEL NÚMERO + TÍTULO + TEXTO       */}
        {/* ===================================================== */}

        <div
          className="
            relative
            z-10
            w-full
            px-1
            py-2
          "
        >
          {/* ================= NÚMERO ================= */}

          <motion.span
            animate={{
              color: mobileInView
                ? "#A855F7"
                : "#5F5F66",

              opacity: mobileInView ? 1 : 0.45,

              y: mobileInView ? 0 : 12,
            }}
            transition={{
              duration: 0.45,
              delay: 0.05,
            }}
            className="
              mt-10
              block
              text-center
              text-4xl
              font-bold
            "
          >
            {step.number}
          </motion.span>

          {/* ================= TÍTULO ================= */}

          <motion.h3
            animate={{
              opacity: mobileInView ? 1 : 0.45,
              y: mobileInView ? 0 : 12,
            }}
            transition={{
              duration: 0.45,
              delay: 0.05,
            }}
            className="
              mt-4
              text-center
              text-2xl
              font-bold
              text-white
            "
          >
            {step.title}
          </motion.h3>

          {/* ================= TEXTO ================= */}

          <motion.p
            animate={{
              opacity: mobileInView ? 1 : 0.55,
              y: mobileInView ? 0 : 12,
            }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className="
              mt-5
              max-w-sm
              text-center
              text-base
              leading-8
              text-white/60
            "
          >
            {step.text}
          </motion.p>
        </div>

        {/* ================= ANIMACIÓN ================= */}

        <motion.div
          animate={{
            scale: mobileInView ? 1.02 : 0.98,

            borderColor: mobileInView
              ? "rgba(125,38,205,.55)"
              : "rgba(255,255,255,.08)",

            boxShadow: mobileInView
              ? "0 0 80px rgba(125,38,205,.30), 0 0 120px rgba(125,38,205,.15)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            relative
            z-30
            mt-16
            w-full
            overflow-hidden
            rounded-[28px]
            border
            bg-[#121212]
          "
        >
          {/* Glow de la animación */}

          <motion.div
            animate={{
              opacity: mobileInView ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              rounded-[28px]
              bg-purple/10
              blur-2xl
            "
          />

          {/* Scene correspondiente */}

          {step.number === "01" ? (
            <AnalysisAnimation play={mobileInView} />
          ) : step.number === "02" ? (
            <StrategyAnimation play={mobileInView} />
          ) : step.number === "03" ? (
            <ImplementationAnimation play={mobileInView} />
          ) : (
            <ScalingAnimation play={mobileInView} />
          )}
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* ========================= DESKTOP ====================== */}
      {/* ========================================================= */}

      <motion.div
        ref={desktopRef}
        className={`
          hidden
          lg:grid
          lg:grid-cols-[1fr_100px_1fr]
          gap-16
          items-center
          ${isLast ? "mb-10" : "mb-32"}
        `}
      >
        {/* ================= TEXTO ================= */}

        <div>
          {/* Número */}

          <motion.span
            animate={{
              color: desktopInView
                ? "#A855F7"
                : "#5F5F66",

              opacity: desktopInView ? 1 : 0.45,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              text-4xl
              font-bold
            "
          >
            {step.number}
          </motion.span>

          {/* Título */}

          <motion.h3
            animate={{
              opacity: desktopInView ? 1 : 0.45,

              y: desktopInView ? 0 : 18,
            }}
            transition={{
              duration: 0.45,
              delay: 0.05,
            }}
            className="
              mt-4
              text-4xl
              font-bold
              leading-tight
              text-white
            "
          >
            {step.title}
          </motion.h3>

          {/* Texto */}

          <motion.p
            animate={{
              opacity: desktopInView ? 1 : 0.55,

              y: desktopInView ? 0 : 12,
            }}
            transition={{
              duration: 0.45,
              delay: 0.05,
            }}
            className="
              mt-6
              text-xl
              leading-9
              text-white/60
            "
          >
            {step.text}
          </motion.p>
        </div>

        {/* ================= ICONO / LÍNEA ================= */}

        <div className="relative flex justify-center">
          <motion.div
            animate={{
              borderColor: desktopInView
                ? "rgba(125,38,205,.55)"
                : "rgba(255,255,255,.10)",

              boxShadow: desktopInView
                ? "0 0 45px rgba(125,38,205,.55)"
                : "0 0 0 rgba(0,0,0,0)",

              scale: desktopInView ? 1.08 : 1,

              rotate: desktopInView ? 0 : -8,
            }}
            transition={{
              duration: 0.55,
            }}
            className="
              relative
              z-10
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              bg-white/[0.03]
              backdrop-blur-xl
            "
          >
            <motion.div
              animate={{
                color: desktopInView
                  ? "#A855F7"
                  : "#8A8A8A",

                scale: desktopInView ? 1 : 0.8,
              }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>

        {/* ================= ANIMACIÓN ================= */}

        <motion.div
          animate={{
            scale: desktopInView ? 1.03 : 0.97,

            borderColor: desktopInView
              ? "rgba(125,38,205,.55)"
              : "rgba(255,255,255,.08)",

            boxShadow: desktopInView
              ? "0 0 80px rgba(125,38,205,.28)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            overflow-hidden
            rounded-[30px]
            border
            bg-[#121212]
          "
        >
          {/* Scene correspondiente */}

          {step.number === "01" ? (
            <AnalysisAnimation play={desktopInView} />
          ) : step.number === "02" ? (
            <StrategyAnimation play={desktopInView} />
          ) : step.number === "03" ? (
            <ImplementationAnimation play={desktopInView} />
          ) : (
            <ScalingAnimation play={desktopInView} />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}