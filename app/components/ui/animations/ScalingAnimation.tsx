"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  play?: boolean;
};

const bars = [38, 52, 68, 84, 103, 122, 145];

/* ============================================================
   CONTADOR ANIMADO
   ============================================================ */

function AnimatedNumber({
  from,
  to,
  duration = 2.2,
  delay = 0,
}: {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
}) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let frame: number;
    let timeout: ReturnType<typeof setTimeout>;

    timeout = setTimeout(() => {
      const start = performance.now();

      const update = (now: number) => {
        const progress = Math.min(
          (now - start) / (duration * 1000),
          1
        );

        // Ease out
        const eased = 1 - Math.pow(1 - progress, 3);

        const next = Math.round(
          from + (to - from) * eased
        );

        setValue(next);

        if (progress < 1) {
          frame = requestAnimationFrame(update);
        }
      };

      frame = requestAnimationFrame(update);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [from, to, duration, delay]);

  return <>{value.toLocaleString("es-ES")}</>;
}

/* ============================================================
   PORCENTAJE ANIMADO
   ============================================================ */

function AnimatedPercentage({
  from,
  to,
  duration = 2.2,
  delay = 0,
}: {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
}) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let frame: number;
    let timeout: ReturnType<typeof setTimeout>;

    timeout = setTimeout(() => {
      const start = performance.now();

      const update = (now: number) => {
        const progress = Math.min(
          (now - start) / (duration * 1000),
          1
        );

        const eased = 1 - Math.pow(1 - progress, 3);

        const next =
          from + (to - from) * eased;

        setValue(next);

        if (progress < 1) {
          frame = requestAnimationFrame(update);
        }
      };

      frame = requestAnimationFrame(update);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [from, to, duration, delay]);

  return <>{value.toFixed(1)}%</>;
}

/* ============================================================
   COMPONENTE
   ============================================================ */

export default function ScalingAnimation({
  play = true,
}: Props) {
  const [cycle, setCycle] = useState(0);

  /*
  ============================================================
  CICLO

  0.0s   → entra título + panel
  0.6s   → empiezan las barras
  2.0s   → empieza la línea de crecimiento
  3.7s   → aparece crecimiento continuo
  4.0s   → empiezan las métricas
  4-15s   → TODO permanece visible
  15s    → desaparece todo
  15.5s  → comienza el siguiente ciclo
  ============================================================
  */

  useEffect(() => {
    if (!play) {
      return;
    }

    /*
      El ciclo completo dura 15 segundos.
      Esto permite que las métricas sigan creciendo
      durante prácticamente toda la escena.
    */
    const interval = setInterval(() => {
      setCycle((value) => value + 1);
    }, 8000);

    return () => clearInterval(interval);
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

      <motion.div
        animate={{
          opacity: [0.06, 0.13, 0.06],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[55%]
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/15
          blur-[100px]
        "
      />

      {/* ================================================= */}
      {/* CICLO */}
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
            }}
            className="absolute inset-0"
          >
            {/* ================================================= */}
            {/* TÍTULO */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 0.65,
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
                  shadow-[0_10px_40px_rgba(0,0,0,.35)]
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
                  04
                </div>

                <h2
                  className="
                    whitespace-nowrap
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  Analizamos y replaneamos
                </h2>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* PANEL PRINCIPAL */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -70,
                scale: 0.94,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-1/2
                top-[105px]
                z-20
                h-[225px]
                w-[86%]
                max-w-[470px]
                -translate-x-1/2
                rounded-[22px]
                border
                border-purple-500/20
                bg-[#101117]
                shadow-[0_25px_80px_rgba(0,0,0,.45)]
              "
            >
              {/* ================================================= */}
              {/* HEADER */}
              {/* ================================================= */}

              <div
                className="
                  flex
                  h-[43px]
                  items-center
                  gap-2
                  rounded-t-[22px]
                  border-b
                  border-white/[0.07]
                  bg-white/[0.015]
                  px-5
                "
              >
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />

                <div
                  className="
                    ml-4
                    flex
                    h-5
                    items-center
                    rounded-full
                    bg-white/[0.035]
                    px-3
                  "
                >
                  <span className="text-[9px] font-medium tracking-wide text-white/35">
                    TU MARCA
                  </span>
                </div>
              </div>

              {/* ================================================= */}
              {/* CONTENIDO */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  inset-x-5
                  bottom-5
                  top-[58px]
                "
              >
                {/* ================================================= */}
                {/* MÉTRICAS SUPERIORES */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.65,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    z-30
                  "
                >
                  <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/35">
                    Ventas
                  </p>

                  <div
                    className="
                      mt-1
                      flex
                      items-baseline
                      gap-2
                    "
                  >
                    <span
                      className="
                        text-[19px]
                        font-semibold
                        tracking-tight
                        text-white
                      "
                    >
                      <AnimatedNumber
  from={48200}
  to={57500}
  duration={5}
  delay={2.2}
/>
                      €
                    </span>

                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 2.2,
                      }}
                      className="
                        text-[10px]
                        font-semibold
                        text-purple-400
                      "
                    >
                      ↑ crecimiento
                    </motion.span>
                  </div>
                </motion.div>

                {/* ================================================= */}
                {/* TICKET MEDIO */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                  }}
                  className="
                    absolute
                    right-0
                    top-0
                    z-30
                    text-right
                  "
                >
                  <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/35">
                    Ticket medio
                  </p>

                  <div
                    className="
                      mt-1
                      flex
                      items-baseline
                      justify-end
                      gap-1
                    "
                  >
                    <span
                      className="
                        text-[19px]
                        font-semibold
                        text-purple-400
                      "
                    >
                      +
                      <AnimatedPercentage
  from={1.5}
  to={8.7}
  duration={5}
  delay={2.2}
/>
                    </span>
                  </div>
                </motion.div>

                {/* ================================================= */}
                {/* LÍNEAS HORIZONTALES */}
                {/* ================================================= */}

                <div className="absolute left-0 right-0 top-[36%] h-px bg-white/[0.035]" />

                <div className="absolute left-0 right-0 top-[58%] h-px bg-white/[0.035]" />

                <div className="absolute left-0 right-0 top-[80%] h-px bg-white/[0.035]" />

                {/* ================================================= */}
                {/* PEQUEÑAS LÍNEAS */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  className="
                    absolute
                    left-0
                    top-[42%]
                    h-[4px]
                    w-[45px]
                    rounded-full
                    bg-white/10
                  "
                />

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                  }}
                  className="
                    absolute
                    left-0
                    top-[55%]
                    h-[4px]
                    w-[28px]
                    rounded-full
                    bg-white/[0.08]
                  "
                />

                {/* ================================================= */}
                {/* BARRAS */}
                {/* ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-[50px]
                    right-[12px]
                    flex
                    h-[105px]
                    items-end
                    gap-[15px]
                  "
                >
                  {bars.map((height, index) => (
                    <motion.div
                      key={`${cycle}-${index}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: height * 0.72,
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: 0.55 + index * 0.16,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        relative
                        w-[23px]
                        overflow-hidden
                        rounded-t-[5px]
                        bg-gradient-to-t
                        from-[#32145f]
                        via-[#7134d0]
                        to-[#a56cff]
                        shadow-[0_0_20px_rgba(139,92,246,.25)]
                      "
                    >
                      <motion.div
                        animate={{
                          opacity: [0, 0.45, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.3 + index * 0.18,
                        }}
                        className="
                          absolute
                          inset-x-0
                          top-0
                          h-[35%]
                          bg-white/20
                          blur-sm
                        "
                      />
                    </motion.div>
                  ))}
                </div>

                {/* ================================================= */}
                {/* LÍNEA DE CRECIMIENTO */}
                {/* ================================================= */}

                <svg
                  viewBox="0 0 300 160"
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-[38px]
                    h-[120px]
                    w-[300px]
                    overflow-visible
                  "
                >
                  <motion.path
                    d="
                      M 0 145
                      C 35 142, 60 136, 88 126
                      C 120 116, 140 103, 165 90
                      C 190 77, 208 65, 225 50
                      C 245 35, 260 22, 282 4
                    "
                    fill="none"
                    stroke="#A855F7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                    }}
                    transition={{
                      pathLength: {
                        duration: 1.8,
                        delay: 2,
                        ease: "easeOut",
                      },
                      opacity: {
                        duration: 0.25,
                        delay: 2,
                      },
                    }}
                  />

                  {/* Punto final */}

                  <motion.circle
                    cx="282"
                    cy="4"
                    r="4"
                    fill="#A855F7"
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 3.65,
                    }}
                  />

                  {/* Flecha */}

                  <motion.path
                    d="
                      M 270 8
                      L 282 4
                      L 278 16
                    "
                    fill="none"
                    stroke="#A855F7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 3.65,
                    }}
                  />
                </svg>

                {/* ================================================= */}
                {/* TARJETA CRECIMIENTO */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 35,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 3.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    right-[-5px]
                    top-[48px]
                    z-50
                    rounded-xl
                    border
                    border-purple-400/20
                    bg-[#171522]/95
                    px-4
                    py-3
                    shadow-[0_0_35px_rgba(139,92,246,.25)]
                    backdrop-blur-xl
                  "
                >
                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        text-base
                        font-bold
                        text-purple-400
                      "
                    >
                      ↑
                    </motion.span>

                    <div>
                      <p className="whitespace-nowrap text-[13px] font-semibold text-purple-200">
                        Crecimiento
                      </p>

                      <p className="whitespace-nowrap text-[13px] font-semibold text-purple-300">
                        continuo
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* ================================================= */}
                {/* INDICADOR INFERIOR */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 3.9,
                  }}
                  className="
                    absolute
                    bottom-[-2px]
                    left-0
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-white/25
                  "
                >
                  rendimiento de tu marca
                </motion.div>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* GLOW FINAL */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.5, 1.3, 1.5],
              }}
              transition={{
                duration: 1.8,
                delay: 3.6,
              }}
              className="
                absolute
                left-[67%]
                top-[190px]
                z-10
                h-16
                w-16
                rounded-full
                bg-purple-500/20
                blur-2xl
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}