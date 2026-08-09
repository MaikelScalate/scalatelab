"use client";

import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  ArrowUpRight,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function Step2() {
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
      {/* ================= FONDO ================= */}

      <div className="absolute inset-0 bg-[#0D0D0F]" />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,.08),transparent_65%)]
        "
      />

      {/* Glow central */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.18, 0.28, 0.18],
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
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/20
          blur-[100px]
        "
      />

      {/* ================= TÍTULO ================= */}

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
            1.2
          </div>

          <h2 className="text-lg font-semibold text-white">
            Creamos tu plan de acción
          </h2>
        </div>
      </motion.div>

      {/* ================= DOCUMENTO IZQUIERDO ================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -180,
          y: 20,
          rotate: -8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: -7,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          type: "spring",
          stiffness: 80,
        }}
        className="
          absolute
          left-[7%]
          top-[29%]
          z-20
          w-[170px]
        "
      >
        <DocumentCard
          label="AUDITORÍA CRO"
          title="Puntos de fuga"
          icon={<FileText className="h-5 w-5" />}
          accent="blue"
        />
      </motion.div>

      {/* ================= DOCUMENTO DERECHO ================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 180,
          y: 30,
          rotate: 8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 7,
        }}
        transition={{
          duration: 0.8,
          delay: 0.55,
          type: "spring",
          stiffness: 80,
        }}
        className="
          absolute
          right-[7%]
          top-[29%]
          z-20
          w-[170px]
        "
      >
        <DocumentCard
          label="ANÁLISIS"
          title="Oportunidades"
          icon={<TrendingUp className="h-5 w-5" />}
          accent="blue"
        />
      </motion.div>

      {/* ================= DOCUMENTO CENTRAL ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.8,
          type: "spring",
          stiffness: 75,
        }}
        className="
          absolute
          left-1/2
          top-[32%]
          z-30
          w-[205px]
          -translate-x-1/2
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-purple-400/30
            bg-[#17181C]
            shadow-[0_25px_80px_rgba(0,0,0,.45)]
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
from-purple-500/15
via-transparent
to-purple-500/5
            "
          />

          <div className="relative p-5">

            {/* Header */}

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-purple-500/15
text-purple-400
                "
              >
                <FileText className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[.18em] text-white/40">
                  Documento
                </p>

                <p className="text-sm font-semibold text-white">
                  Plan de acción
                </p>
              </div>

            </div>

            {/* Líneas */}

            <div className="mt-6 space-y-3">

              <ActionRow
                icon={<CheckCircle2 className="h-4 w-4" />}
                text="Quick Wins"
              />

              <ActionRow
                icon={<Zap className="h-4 w-4" />}
                text="Prioridades"
              />

              <ActionRow
                icon={<ArrowUpRight className="h-4 w-4" />}
                text="Roadmap CRO"
              />

            </div>

          </div>
        </div>
      </motion.div>

      {/* ================= BADGE INFERIOR ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 1.35,
        }}
        className="
          absolute
          bottom-[9%]
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

          <span className="whitespace-nowrap text-xs font-medium text-white/70">
            Priorizamos las mejoras con mayor impacto
          </span>
        </div>
      </motion.div>

    </motion.div>
  );
}

/* ========================================================= */
/* DOCUMENT CARD */
/* ========================================================= */

function DocumentCard({
  label,
  title,
  icon,
  accent,
}: {
  label: string;
  title: string;
  icon: React.ReactNode;
  accent: "blue" | "purple";
}) {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0, 5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative
        overflow-hidden
        rounded-[20px]
        border
        border-white/10
        bg-[#17181C]
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >

      {/* Glow */}

      <div
        className={`
          absolute
          inset-0
          blur-3xl
          ${
            accent === "blue"
              ? "bg-blue-500/10"
              : "bg-purple-500/10"
          }
        `}
      />

      <div className="relative p-4">

        <div className="flex items-center gap-3">

          <div
            className={`
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              ${
                accent === "blue"
                  ? "bg-blue-500/15 text-blue-400"
                  : "bg-purple-500/15 text-purple-400"
              }
            `}
          >
            {icon}
          </div>

          <div className="min-w-0">

            <p className="text-[8px] font-semibold uppercase tracking-[.16em] text-white/35">
              {label}
            </p>

            <p className="mt-1 truncate text-xs font-semibold text-white">
              {title}
            </p>

          </div>

        </div>

        {/* Simulación de documento */}

        <div className="mt-5 space-y-2">

          <div className="h-1.5 w-full rounded-full bg-white/10" />

          <div className="h-1.5 w-[78%] rounded-full bg-white/10" />

          <div className="h-1.5 w-[55%] rounded-full bg-white/10" />

          <div
            className={`
              mt-4
              h-7
              w-full
              rounded-lg
              ${
                accent === "blue"
                  ? "bg-blue-500/10"
                  : "bg-purple-500/10"
              }
            `}
          />

        </div>

      </div>

    </motion.div>
  );
}

/* ========================================================= */
/* ACTION ROW */
/* ========================================================= */

function ActionRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.4,
        delay: 1.1,
      }}
      className="
        flex
        items-center
        gap-3
        rounded-xl
        bg-white/[0.035]
        px-3
        py-2.5
      "
    >
      <div className="text-purple-400">
        {icon}
      </div>

      <span className="text-[11px] font-medium text-white/70">
        {text}
      </span>
    </motion.div>
  );
}