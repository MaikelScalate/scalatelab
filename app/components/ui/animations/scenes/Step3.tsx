"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  MousePointer2,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

export default function Step3() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-[30px]
        bg-[#0D0D0F]
      "
    >

      {/* ================================================= */}
      {/* FONDO */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[#0D0D0F]" />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,.08),transparent_65%)]
        "
      />

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
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
          bg-blue-500/20
          blur-[110px]
        "
      />

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
        transition={{
          duration: 0.6,
        }}
        className="
          absolute
          left-1/2
          top-6
          z-50
          -translate-x-1/2
        "
      >
        <div
          className="
            flex
            items-center
            gap-5
            whitespace-nowrap
            rounded-2xl
            border
            border-white/10
            bg-black/40
            px-7
            py-4
            backdrop-blur-xl
          "
        >

          <div
            className="
              flex
              h-8
              w-11
              items-center
              justify-center
              rounded-xl
              bg-purple-500/15
              text-xl
              font-bold
              text-purple-400
            "
          >
            1.3
          </div>

          <h2 className="text-lg font-semibold text-white">
            Te explicamos la estrategia
          </h2>

        </div>
      </motion.div>

      {/* ================================================= */}
      {/* PRESENTACIÓN */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.88,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.35,
          type: "spring",
          stiffness: 70,
        }}
        className="
          absolute
          left-1/2
          top-[28%]
          z-30
          w-[390px]
          max-w-[82%]
          -translate-x-1/2
        "
      >

        <div
          className="
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-white/10
            bg-[#17181C]
            shadow-[0_30px_100px_rgba(0,0,0,.55)]
          "
        >

          {/* Barra superior */}

          <div
            className="
              flex
              h-10
              items-center
              justify-between
              border-b
              border-white/5
              bg-white/[0.025]
              px-4
            "
          >

            <div className="flex items-center gap-2">

              <div className="h-2 w-2 rounded-full bg-red-400/70" />
              <div className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <div className="h-2 w-2 rounded-full bg-green-400/70" />

            </div>

            <span className="text-[9px] text-white/30">
              SCALATE · CRO REVIEW
            </span>

          </div>

          {/* Contenido */}

          <div className="p-5">

            {/* Título presentación */}

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
                delay: 0.9,
                duration: 0.5,
              }}
            >

              <p className="text-[9px] uppercase tracking-[.2em] text-blue-400">
                Análisis de conversión
              </p>

              <h3 className="mt-1 text-xl font-semibold text-white">
                Las oportunidades
                <br />
                de mayor impacto
              </h3>

            </motion.div>

            {/* Métricas */}

            <div className="mt-5 grid grid-cols-3 gap-2">

              <Metric
                icon={<MousePointer2 className="h-3.5 w-3.5" />}
                value="42%"
                label="Fricción"
                delay={1.1}
              />

              <Metric
                icon={<ShoppingCart className="h-3.5 w-3.5" />}
                value="+18%"
                label="Conversión"
                delay={1.2}
              />

              <Metric
                icon={<TrendingUp className="h-3.5 w-3.5" />}
                value="+24%"
                label="Potencial"
                delay={1.3}
              />

            </div>

            {/* Gráfico */}

            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between">

                <span className="text-[9px] text-white/40">
                  Impacto estimado
                </span>

                <span className="text-[9px] text-blue-400">
                  +32%
                </span>

              </div>

              <div className="flex h-[75px] items-end gap-2">

                {[32, 44, 38, 55, 63, 72, 88].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: `${height}%`,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 1.1 + index * 0.08,
                        ease: "easeOut",
                      }}
                      className="
                        flex-1
                        rounded-t-md
                        bg-gradient-to-t
                        from-blue-600/30
                        to-blue-400
                      "
                    />
                  )
                )}

              </div>

            </div>

            {/* Recomendación */}

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
                delay: 1.7,
                duration: 0.5,
              }}
              className="
                mt-5
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-blue-400/10
                bg-blue-500/[0.06]
                px-3
                py-2.5
              "
            >

              <div>

                <p className="text-[8px] uppercase tracking-[.15em] text-blue-400/70">
                  Prioridad #1
                </p>

                <p className="mt-0.5 text-[10px] font-medium text-white/80">
                  Optimizar página de producto
                </p>

              </div>

              <ArrowUpRight className="h-4 w-4 text-blue-400" />

            </motion.div>

          </div>

        </div>

      </motion.div>


      {/* ================================================= */}
      {/* BADGE */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.8,
          duration: 0.5,
        }}
        className="
          absolute
          bottom-[7%]
          left-1/2
          z-40
          -translate-x-1/2
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
            whitespace-nowrap
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-5
            py-2.5
            backdrop-blur-xl
          "
        >

          <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,.8)]" />

          <span className="text-xs font-medium text-white/65">
            Una estrategia clara, directa y accionable
          </span>

        </div>

      </motion.div>

    </motion.div>
  );
}


/* ========================================================= */
/* MÉTRICA */
/* ========================================================= */

function Metric({
  icon,
  value,
  label,
  delay,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}) {
  return (
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
        duration: 0.45,
        delay,
      }}
      className="
        rounded-xl
        border
        border-white/5
        bg-white/[0.025]
        p-2.5
      "
    >

      <div className="flex items-center gap-1.5 text-blue-400">
        {icon}

        <span className="text-sm font-semibold text-white">
          {value}
        </span>
      </div>

      <p className="mt-1 text-[8px] text-white/35">
        {label}
      </p>

    </motion.div>
  );
}


/* ========================================================= */
/* MINI SLIDE */
/* ========================================================= */

function MiniSlide({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        rounded-[18px]
        border
        border-white/10
        bg-[#17181C]
        p-4
        shadow-[0_20px_50px_rgba(0,0,0,.4)]
      "
    >

      <div className="h-1.5 w-10 rounded-full bg-blue-400/50" />

      <p className="mt-4 text-[9px] uppercase tracking-[.15em] text-white/35">
        {title}
      </p>

      <p className="mt-2 text-[11px] font-semibold leading-4 text-white/75">
        {text}
      </p>

      <div className="mt-4 space-y-2">

        <div className="h-1.5 w-full rounded-full bg-white/10" />

        <div className="h-1.5 w-[70%] rounded-full bg-white/10" />

        <div className="h-1.5 w-[45%] rounded-full bg-white/10" />

      </div>

    </div>
  );
}