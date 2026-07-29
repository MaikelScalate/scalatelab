"use client";

import { motion } from "motion/react";

export default function MobileProblem() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0B0B0D]">

      {/* Glow */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-500/20
          blur-[90px]
        "
      />

      {/* Animated Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 500 260"
        fill="none"
      >
        <motion.path
          d="M-20 50 L80 50 L130 90 L210 90 L260 40 L340 40 L390 80 L520 80"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="12 18"
          animate={{
            strokeDashoffset: [60, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M-20 120 L70 120 L120 160 L200 160 L250 110 L340 110 L400 150 L520 150"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="12 18"
          animate={{
            strokeDashoffset: [60, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M-20 195 L90 195 L150 145 L250 145 L320 195 L520 195"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="12 18"
          animate={{
            strokeDashoffset: [60, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Phone */}
      <motion.div
        animate={{
          y: [5, -5, 5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20
          h-[185px]
          w-[95px]
          rounded-[28px]
          border
          border-white/10
          bg-gradient-to-b
          from-[#17171B]
          to-[#0F0F12]
          shadow-[0_0_40px_rgba(239,68,68,.25)]
        "
      >
        {/* Notch */}
        <div
          className="
            absolute
            left-1/2
            top-2
            h-2.5
            w-10
            -translate-x-1/2
            rounded-full
            bg-black
          "
        />

        {/* Screen */}
        <div
          className="
            absolute
            inset-[7px]
            overflow-hidden
            rounded-[22px]
            bg-[#141417]
          "
        >

          {/* Shimmer */}
          <motion.div
            animate={{
              x: [-120, 160],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-0
              h-full
              w-10
              rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
            "
          />

          {/* Spinner */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-9
              w-9
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border-[3px]
              border-white/10
              border-t-red-500
            "
          />
                    {/* UI Placeholder */}
          <div className="absolute left-1/2 top-[68%] w-14 -translate-x-1/2">
            <div className="h-1 rounded-full bg-white/15" />
            <div className="mt-2 h-1 rounded-full bg-white/10" />
            <div className="mt-2 h-1 w-10 rounded-full bg-white/10" />
          </div>

          {/* Warning Icon */}
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.15, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 0.6,
              delay: 2,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeOut",
            }}
            className="
              absolute
              right-2
              top-2
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-red-500/30
              bg-red-500
              shadow-[0_0_20px_rgba(239,68,68,.45)]
            "
          >
            <span className="text-sm font-bold text-white">
              !
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Alert */}
      <motion.div
        initial={{
          opacity: 0,
          x: -20,
          scale: 0.92,
        }}
        animate={{
          opacity: [0, 0, 1, 1, 0],
          x: [-20, -20, 0, 0, 0],
          scale: [0.92, 0.92, 1, 1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.28, 0.38, 0.82, 1],
        }}
        className="
          absolute
          left-5
          top-12
          z-30
          w-[170px]
          overflow-hidden
          rounded-2xl
          border
          border-red-500/30
          bg-[#121214]/95
          backdrop-blur-xl
          shadow-[0_0_35px_rgba(239,68,68,.25)]
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            gap-2
            border-b
            border-white/5
            px-4
            py-3
          "
        >
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-red-400
            "
          >
            ALERTA
          </span>
        </div>

        {/* Body */}
        <div className="px-4 py-4">

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
            "
          >
            OPTIMIZAR
          </p>

          <p
            className="
              mt-1
              text-lg
              font-black
              leading-none
              text-red-400
            "
          >
            UX MÓVIL
          </p>

          <div className="mt-4 h-px bg-white/10" />

          <p
            className="
              mt-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-white/70
            "
          >
            PRIORIDAD: ALTA
          </p>

        </div>
      </motion.div>
            {/* Scan Effect */}
      <motion.div
        animate={{
          y: [-120, 120],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-10
          h-16
          w-[130px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-transparent
          via-red-500/30
          to-transparent
          blur-xl
        "
      />

      {/* Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-48
          w-48
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-red-500/20
        "
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: 2 + i * 0.25,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: `${18 + i * 10}%`,
            top: `${25 + (i % 3) * 18}%`,
          }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
        </motion.div>
      ))}

      {/* Vignette */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_45%,#0B0B0D_100%)]
        "
      />
    </div>
  );
}