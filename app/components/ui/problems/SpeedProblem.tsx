"use client";

import { motion } from "motion/react";

const DURATION = 10;

const GREEN = "#22c55e";
const ORANGE = "#f59e0b";
const RED = "#ef4444";

export default function SpeedProblem() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#0B0B0D]">

      {/* Background glow */}

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[130px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,.22) 0%, rgba(34,197,94,.05) 45%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* Glass circle */}

      <div
        className="
          absolute
          left-1/2
          top-[44%]
          h-[310px]
          w-[310px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
        "
        style={{
          borderColor: "rgba(255,255,255,.05)",
          boxShadow:
            "0 0 120px rgba(34,197,94,.08) inset",
        }}
      />

      {/* Gauge */}

      <svg
        viewBox="0 0 320 260"
        className="relative z-20 h-[270px] w-[320px] overflow-visible"
        fill="none"
      >
                {/* Outer Ring */}

        <path
          d="M40 200 A120 120 0 0 1 280 200"
          stroke="rgba(255,255,255,.05)"
          strokeWidth="34"
          strokeLinecap="round"
        />

        {/* Inner Ring */}

        <path
          d="M40 200 A120 120 0 0 1 280 200"
          stroke="rgba(255,255,255,.08)"
          strokeWidth="24"
          strokeLinecap="round"
        />

        {/* Progress */}

        <path
          d="M40 200 A120 120 0 0 1 280 200"
          stroke={GREEN}
          strokeWidth="22"
          strokeLinecap="round"
        />
                {/* Segments */}

        {Array.from({ length: 31 }).map((_, i) => {
          const angle = -120 + i * 8;

          return (
            <line
              key={i}
              x1="160"
              y1="82"
              x2="160"
              y2={i % 5 === 0 ? "62" : "72"}
              stroke="rgba(255,255,255,.18)"
              strokeWidth={i % 5 === 0 ? 3 : 2}
              strokeLinecap="round"
              transform={`rotate(${angle} 160 200)`}
            />
          );
        })}
                <path
          d="M40 200 A120 120 0 0 1 280 200"
          stroke="rgba(255,255,255,.15)"
          strokeWidth="2"
          strokeLinecap="round"
        />
                {/* Needle */}

        <motion.g
          style={{
            transformOrigin: "160px 200px",
          }}
          initial={{
            rotate: -115,
          }}
        >
          {/* Shadow */}

          <line
            x1="160"
            y1="200"
            x2="160"
            y2="112"
            stroke="rgba(0,0,0,.35)"
            strokeWidth="9"
            strokeLinecap="round"
            transform="translate(2 2)"
          />

          {/* Needle */}

          <line
            x1="160"
            y1="200"
            x2="160"
            y2="112"
            stroke="url(#needleGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Tip */}

          <circle
            cx="160"
            cy="92"
            r="5"
            fill="white"
          />
        </motion.g>
                {/* Hub */}

        <circle
          cx="160"
          cy="200"
          r="20"
          fill="#090909"
          stroke="rgba(255,255,255,.10)"
          strokeWidth="3"
        />

        <circle
          cx="160"
          cy="200"
          r="11"
          fill="#1D1D1D"
          stroke="rgba(255,255,255,.12)"
          strokeWidth="2"
        />

        <circle
          cx="160"
          cy="200"
          r="4"
          fill="white"
        />
        {/* Score */}

<text
  x="160"
  y="170"
  textAnchor="middle"
  fill="white"
  fontSize="56"
  fontWeight="800"
>
  100
</text>

<text
  x="210"
  y="170"
  fill="rgba(255,255,255,.45)"
  fontSize="22"
  fontWeight="700"
>
  /100
</text>

<text
  x="160"
  y="194"
  textAnchor="middle"
  fill={GREEN}
  fontSize="12"
  fontWeight="700"
  letterSpacing="5"
>
  EXCELENTE
</text>
                <defs>
          <linearGradient
            id="needleGradient"
            x1="160"
            y1="200"
            x2="160"
            y2="112"
          >
            <stop
              offset="0%"
              stopColor="#9ca3af"
            />

            <stop
              offset="70%"
              stopColor="#ffffff"
            />

            <stop
              offset="100%"
              stopColor="#ffffff"
            />
          </linearGradient>
        </defs>
              </svg>

          </div>
  );
}