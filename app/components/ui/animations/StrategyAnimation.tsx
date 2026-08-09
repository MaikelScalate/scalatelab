"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  BarChart3,
  ShoppingCart,
  Users,
  Sparkles,
} from "lucide-react";

type Props = {
  play: boolean;
};

export default function StrategyAnimation({
  play,
}: Props) {
  const [cycle, setCycle] = useState(0);

  /*
  ============================================================
  CICLO

  0.0s  → entra el título
  1.0s  → línea izquierda
  1.3s  → datos
  1.6s  → estrategia central
  2.2s  → línea Quick Wins
  2.5s  → línea Conversión
  2.8s  → línea Recurrencia
  3.0s  → Quick Wins
  3.3s  → Conversión
  3.6s  → Recurrencia

  La escena permanece visible unos segundos
  y después vuelve a empezar.
  ============================================================
  */

  useEffect(() => {
    if (!play) {
      setCycle(0);
      return;
    }

    const interval = setInterval(() => {
      setCycle((value) => value + 1);
    }, 10200);

    return () => {
      clearInterval(interval);
    };
  }, [play]);

  return (
    <div
      className="
        relative
        h-[380px]
        w-full
        overflow-hidden
        rounded-[30px]
        bg-[#0b0c11]
      "
    >
      {/* ================================================= */}
      {/* FONDO */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[#0b0c11]" />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(124,58,237,.10),transparent_65%)]
        "
      />

      <motion.div
        animate={{
          opacity: [0.10, 0.22, 0.10],
          scale: [0.9, 1.08, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/10
          blur-[110px]
        "
      />

      {/* ================================================= */}
      {/* ESCENA COMPLETA */}
      {/* ================================================= */}

      <AnimatePresence mode="wait">
        {play && (
          <motion.div
            key={cycle}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-0
              z-20
            "
          >
            {/* ================================================= */}
            {/* TÍTULO */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                absolute
                left-1/2
                top-5
                z-[80]
                -translate-x-1/2
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/45
                  px-6
                  py-3
                  shadow-[0_10px_40px_rgba(0,0,0,.25)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-purple-500/15
                    text-lg
                    font-bold
                    text-purple-400
                  "
                >
                  02
                </div>

                <h2
                  className="
                    whitespace-nowrap
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  Pasamos el plan a objetivos
                </h2>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* LÍNEA IZQUIERDA */}
            {/* ================================================= */}

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeOut",
              }}
              className="
  absolute
  left-[18%]
  top-[57%]
  z-10
  hidden
  h-px
  w-[17%]
  origin-left
  bg-gradient-to-r
  from-transparent
  via-purple-500/40
  to-purple-400

  lg:block
"
            />

            {/* ================================================= */}
            {/* LÍNEA QUICK WINS */}
            {/* ================================================= */}

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 2.2,
                ease: "easeOut",
              }}
              className="
  absolute
  left-[calc(30%+40px)]
  top-[43%]
  z-10
  h-px
  w-[calc(63%-88px)]
  origin-left
  bg-gradient-to-r
  from-purple-400
  to-purple-400/20

  lg:left-[62%]
  lg:w-[13%]
"
            />

            {/* ================================================= */}
            {/* LÍNEA CONVERSIÓN */}
            {/* ================================================= */}

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 2.5,
                ease: "easeOut",
              }}
              className="
  absolute
  left-[calc(30%+40px)]
  top-[57%]
  z-10
  h-px
  w-[calc(63%-88px)]
  origin-left
  bg-gradient-to-r
  from-purple-400
  to-purple-400/20

  lg:left-[62%]
  lg:w-[13%]
"
            />

            {/* ================================================= */}
            {/* LÍNEA RECURRENCIA */}
            {/* ================================================= */}

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 2.8,
                ease: "easeOut",
              }}
              className="
  absolute
  left-[calc(30%+40px)]
  top-[71%]
  z-10
  h-px
  w-[calc(63%-88px)]
  origin-left
  bg-gradient-to-r
  from-purple-400
  to-purple-400/20

  lg:left-[62%]
  lg:w-[13%]
"
            />

            {/* ================================================= */}
            {/* DATOS */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1.3,
                type: "spring",
                stiffness: 90,
              }}
              className="
  absolute
  left-[7%]
  top-[43%]
  z-20
  hidden
  h-[82px]
  w-[92px]
  items-center
  justify-center
  rounded-2xl
  border
  border-white/10
  bg-white/[0.04]
  backdrop-blur-xl

  lg:flex
"
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-purple-500/10
                  blur-xl
                "
              />

              <BarChart3
                className="
                  relative
                  z-10
                  h-10
                  w-10
                  text-purple-400
                "
              />
            </motion.div>

            {/* ================================================= */}
            {/* ESTRATEGIA CENTRAL */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 1.6,
                type: "spring",
                stiffness: 90,
              }}
              className="
  absolute
  left-[30%]
  top-[57%]
  z-30
  flex
  h-[120px]
  w-[120px]
  -translate-x-1/2
  -translate-y-1/2
  flex-col
  items-center
  justify-center
  rounded-[16px]
  border
  border-purple-400/30
  bg-gradient-to-br
  from-purple-500/20
  via-[#171426]
  to-[#0f1017]
  shadow-[0_0_40px_rgba(139,92,246,.25)]

  lg:left-1/2
  lg:h-[120px]
  lg:w-[120px]
  lg:rounded-[20px]
  lg:shadow-[0_0_55px_rgba(139,92,246,.25)]
"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(168,85,247,.15)",
                    "0 0 35px rgba(168,85,247,.35)",
                    "0 0 15px rgba(168,85,247,.15)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-purple-500/15
                "
              >
                <ShoppingCart
                  className="
                    h-8
                    w-8
                    text-purple-400
                  "
                />
              </motion.div>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white/60
                "
              >
                Estrategia
              </p>
            </motion.div>

            {/* ================================================= */}
            {/* QUICK WINS */}
            {/* ================================================= */}

            <StrategyCard
              icon={
                <Sparkles
                  className="h-5 w-5 text-purple-400"
                />
              }
              title="Quick Wins"
              subtitle="Alto impacto"
              top="36%"
              delay={3}
            />

            {/* ================================================= */}
            {/* CONVERSIÓN */}
            {/* ================================================= */}

            <StrategyCard
              icon={
                <span
                  className="
                    text-lg
                    font-bold
                    leading-none
                    text-purple-400
                  "
                >
                  %
                </span>
              }
              title="Conversión"
              subtitle="Prioridad alta"
              top="52%"
              delay={3.3}
            />

            {/* ================================================= */}
            {/* RECURRENCIA */}
            {/* ================================================= */}

            <StrategyCard
              icon={
                <Users
                  className="h-5 w-5 text-purple-400"
                />
              }
              title="Recurrencia"
              subtitle="Fidelización"
              top="68%"
              delay={3.6}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ========================================================= */
/* CARD DE ESTRATEGIA */
/* ========================================================= */

function StrategyCard({
  icon,
  title,
  subtitle,
  top,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  top: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      style={{
        top,
      }}
      className="
        absolute
        right-[7%]
        z-20
        flex
        h-[54px]
        w-[105px]
        items-center
        gap-2
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        px-3
        backdrop-blur-xl
      "
    >
      {icon}

      <div>
        <p
          className="
            text-[10px]
            font-semibold
            text-white
          "
        >
          {title}
        </p>

        <p
          className="
            text-[8px]
            text-white/40
          "
        >
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}