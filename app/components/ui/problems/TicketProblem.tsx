"use client";

import { motion } from "motion/react";

const DURATION = 10;

export default function TicketProblem() {

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0B0B0D]">

      {/* Background Glow */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/15 blur-[100px]"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 400 250"
preserveAspectRatio="none"
      >
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            x2="400"
            y1={20 + i * 20}
            y2={20 + i * 20}
            stroke="white"
            strokeWidth="1"
          />
        ))}

        {Array.from({ length: 13 }).map((_, i) => (
          <line
            key={`v-${i}`}
            y1="0"
            y2="240"
            x1={16 + i * 32}
            x2={16 + i * 32}
            stroke="white"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Graph */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 240"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>

          <filter id="graphGlow">

            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>

              <feMergeNode in="blur" />

              <feMergeNode in="SourceGraphic" />

            </feMerge>

          </filter>

        </defs>

        {/* AOV */}

        <motion.path
          d="
M-40 180
C40 180 110 90 170 90
C215 90 250 135 330 175
C390 195 430 215 520 230
"
          stroke="#ff4b4b"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: DURATION - 2,
          }}
        />

        {/* LTV */}

        <motion.path
          d="
M-40 180
C40 180 110 90 170 90
C215 90 250 55 320 70
C380 82 430 120 520 155
"
          stroke="#ff8c8c"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 2.8,
            delay: .15,
            repeat: Infinity,
            repeatDelay: DURATION - 2,
          }}
        />
      
                {/* Primera compra */}

        <motion.circle
          cx="170"
          cy="90"
          r="5"
          fill="#ff4b4b"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: [0, 1.5, 1],
          }}
          transition={{
            duration: .7,
            delay: 1.4,
            repeat: Infinity,
            repeatDelay: DURATION - .7,
          }}
        />

        <motion.circle
          cx="170"
          cy="90"
          r="14"
          fill="#ff4b4b22"
          animate={{
            scale: [1, 2.4, 1],
            opacity: [.7,0,.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Label */}

        <motion.g
          initial={{
            opacity:0,
            y:8,
          }}
          animate={{
            opacity:[0,1,1,0],
            y:[8,0,0,0],
          }}
          transition={{
            duration:5,
            repeat:Infinity,
            times:[0,.15,.85,1],
          }}
        >

          <rect
            x="122"
            y="58"
            width="96"
            height="22"
            rx="10"
            fill="#111114"
          />

          <text
            x="170"
            y="72"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="600"
          >
            Primera compra
          </text>

        </motion.g>
        <motion.circle
  r="5"
  fill="#ef4444"
  animate={{
    cx: [170, 210, 255, 315, 385, 470],
    cy: [90, 98, 132, 168, 198, 224],
    opacity: [0, 1, 1, 1, 1, 0],
  }}
  transition={{
    duration: DURATION,
    repeat: Infinity,
    ease: "linear",
    times: [0.20, 0.35, 0.55, 0.72, 0.87, 1],
  }}
/>
<motion.foreignObject
  width="80"
  height="40"
  animate={{
    x: [130, 170, 215, 275, 345, 430],
    y: [112, 120, 154, 190, 220, 246],
    opacity: [0, 1, 1, 1, 1, 0],
  }}
  transition={{
    duration: DURATION,
    repeat: Infinity,
    ease: "linear",
    times: [0.20, 0.35, 0.55, 0.72, 0.87, 1],
  }}
>
  <div
    className="flex h-full w-full items-center justify-center rounded-xl border border-red-500/20 bg-[#111114]"
>
    <span className="text-[11px] text-white/60">
      AOV:
      <span className="ml-1 font-semibold text-red-400">
        23€
      </span>
    </span>
  </div>
</motion.foreignObject>
<motion.circle
  r="5"
  fill="#ff9a9a"
  animate={{
    cx: [170, 205, 240, 280, 325, 380, 445, 500],
    cy: [90, 82, 66, 60, 70, 88, 122, 155],
    opacity: [0, 1, 1, 1, 1, 1, 1, 0],
  }}
  transition={{
    duration: DURATION,
    repeat: Infinity,
    ease: "linear",
    times: [0.20, 0.30, 0.40, 0.50, 0.62, 0.74, 0.87, 1],
  }}
/>
<motion.foreignObject
  width="80"
  height="40"
  animate={{
    x: [130, 165, 200, 240, 285, 340, 405, 460],
    y: [112, 104, 88, 82, 92, 110, 144, 178],
    opacity: [0, 1, 1, 1, 1, 1, 1, 0],
  }}
  transition={{
    duration: DURATION,
    repeat: Infinity,
    ease: "linear",
    times: [0.20, 0.30, 0.40, 0.50, 0.62, 0.74, 0.87, 1],
  }}
>
  <div
    className="flex h-full w-full items-center justify-center rounded-xl border border-red-500/20 bg-[#111114]"
>
    <span className="text-[11px] text-white/60">
      LTV:
      <span className="ml-1 font-semibold text-red-400">
        46€
      </span>
    </span>
  </div>
</motion.foreignObject>
              </svg>

            {/* ---------------- OPPORTUNITY PANEL ---------------- */}

      <motion.div
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          w-[220px]
          -translate-x-1/2
        "
        animate={{
          opacity: [0, 0, 0, 1, 1, 0],
          y: [20, 20, 20, 0, 0, -8],
          scale: [.95, .95, .95, 1, 1, .98],
        }}
        transition={{
          duration: DURATION,
          repeat: Infinity,
          ease: "easeOut",
          times: [0, .70, .78, .86, .95, 1],
        }}
      >
        <div
          className="
            rounded-2xl
            border
            border-emerald-500/30
            bg-[#111114]/90
            p-4
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(16,185,129,.22)]
          "
        >
          <div className="flex items-center justify-between">

            <span className="text-[10px] uppercase tracking-[0.22em] text-emerald-400">
              OPORTUNIDAD
            </span>

            <span className="rounded-full bg-red-500/10 px-2 py-1 text-[10px] font-semibold text-red-300">
              IA
            </span>

          </div>

          <h3 className="mt-3 text-3xl font-black leading-none text-white">
            +62%
          </h3>

          <p className="mt-1 text-xs text-white/55">
            Potencial de ingresos detectado
          </p>

          <div className="mt-4 space-y-2">

            {[
              "Cross-sell",
              "Upsell",
              "Fidelización",
            ].map((item) => (

              <motion.div
                key={item}
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0, 1],
                  x: [-6, -6, 0],
                }}
                transition={{
                  duration: .35,
                  repeat: Infinity,
                  repeatDelay: DURATION - .35,
                }}
              >

                <span className="text-xs text-white/65">
                  {item}
                </span>

                <span className="text-green-400">
                  ↑
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </div>

  );
}