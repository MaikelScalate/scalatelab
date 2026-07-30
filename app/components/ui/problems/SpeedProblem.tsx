"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";

import { useEffect, useState } from "react";
const SIZE = 220;
const STROKE = 18;

const RADIUS = (SIZE - STROKE - 6) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const GREEN = "#22C55E";
const ORANGE = "#F59E0B";
const RED = "#EF4444";
export default function SpeedProblem() {
  const score = useMotionValue(100);
const [value, setValue] = useState(100);
const status =
  value > 80
    ? "EXCELENTE"
    : value > 60
    ? "ACEPTABLE"
    : "LENTO";

const statusColor =
  value > 80
    ? GREEN
    : value > 60
    ? ORANGE
    : RED;
    const progress = value / 100;
const showAlert = value <= 60;
const showWarning = value <= 48;
const dashOffset =
  (1 - progress) * (CIRCUMFERENCE * 0.75);
  const START_ANGLE = -140;
const SWEEP_ANGLE = 270;

const angle =
  (START_ANGLE + progress * SWEEP_ANGLE) * (Math.PI / 180);

const dotX =
  SIZE / 2 + Math.cos(angle) * RADIUS;

const dotY =
  SIZE / 2 + Math.sin(angle) * RADIUS;
useMotionValueEvent(score, "change", (latest) => {
  setValue(Math.round(latest));
});
useEffect(() => {
  const controls = animate(score, 48, {
  duration: 10,
  ease: "easeInOut",
  repeat: Infinity,
  repeatDelay: 0.6,
});

  return () => controls.stop();
}, [score]);
  return (
    <div className="
relative
flex
h-full
w-full
items-center
justify-center
overflow-hidden
rounded-[28px]
border
border-white/5
bg-gradient-to-br
from-[#111318]
via-[#09090B]
to-[#040404]
shadow-[0_20px_80px_rgba(0,0,0,.45)]
">
<motion.div
  className="absolute inset-0"
  animate={{
    background: showWarning
      ? `
        radial-gradient(circle at center,
        rgba(239,68,68,.16),
        transparent 70%)
      `
      : `
        radial-gradient(circle at 20% 20%, rgba(255,255,255,.05), transparent 30%),
        radial-gradient(circle at 80% 10%, rgba(34,197,94,.06), transparent 35%),
        radial-gradient(circle at 50% 100%, rgba(59,130,246,.04), transparent 40%)
      `,
  }}
  transition={{
    duration: 0.5,
  }}
/>

<div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage:
      "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)",
    backgroundSize: "18px 18px",
  }}
/>
<div
  className="
  absolute
  top-0
  left-0
  right-0
  h-28
  opacity-40
  pointer-events-none
  "
  style={{
    background:
      "linear-gradient(to bottom, rgba(255,255,255,.08), transparent)",
  }}
/>
      {/* Glow */}

      <motion.div
  className="
    absolute
    h-[300px]
w-[300px]
    rounded-full
    blur-[120px]
  "
  style={{
  background: `radial-gradient(circle, ${statusColor}33 0%, transparent 70%)`,
}}
animate={{
  scale:[1,1.08,1.14,1.2,1],
  opacity:[.45,.45,.55,.8,.45],
}}
/>


      <motion.div
  className="relative flex items-center justify-center"
  animate={{
    scale: [1, 1.015, 1],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
                <svg
  width={SIZE}
  height={SIZE}
  viewBox={`0 0 ${SIZE} ${SIZE}`}
>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,.06)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${CIRCUMFERENCE * 0.75} ${CIRCUMFERENCE}`}
            transform={`rotate(-140 ${SIZE / 2} ${SIZE / 2})`}
          />
                    <motion.circle
  cx={SIZE / 2}
  cy={SIZE / 2}
  r={RADIUS}
  fill="none"
  strokeWidth={STROKE}
  strokeLinecap="round"
  strokeDasharray={`${CIRCUMFERENCE * 0.75} ${CIRCUMFERENCE}`}
  animate={{
  strokeDashoffset: dashOffset,
  stroke: statusColor,
}}

transition={{
  duration: 0.1,
  ease: "linear",
}}
transform={`rotate(-140 ${SIZE / 2} ${SIZE / 2})`}

/>
<circle
  cx={dotX}
  cy={dotY}
  r="6"
  fill="white"
  stroke="white"
  strokeWidth="2"
  style={{
    filter: "drop-shadow(0 0 8px rgba(255,255,255,.9))",
    
  }}
/>
                  </svg>
                 <motion.div
  className="absolute"
  animate={{
    right: showWarning ? "50%" : 16,
    bottom: showWarning ? "50%" : 16,
    x: showWarning ? "50%" : 0,
    y: showWarning ? "50%" : 0,
    scale: showWarning ? 1.25 : 1,
  }}
  transition={{
    duration: 0.45,
    ease: "easeOut",
  }}
>
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15 border border-red-500/40">
    <span className="text-lg text-red-500 font-bold">
      !
    </span>
  </div>
</motion.div>
                          <motion.div
  className="absolute flex flex-col items-center"
  animate={{
    opacity: showWarning ? 0 : 1,
    scale: showWarning ? 0.92 : 1,
    y: showWarning ? -10 : 0,
  }}
  transition={{
    duration: 0.35,
  }}
>

          <div className="flex items-end">

            <span className="
text-[60px]
font-black
leading-none
text-white
drop-shadow-[0_0_18px_rgba(255,255,255,.18)]
">
              {value}
            </span>

            <span className="mb-2 text-2xl font-bold text-white/40">
              /100
            </span>

          </div>

          <span
            className="mt-2 text-xs font-bold tracking-[0.35em]"
            style={{
  color: statusColor,
}}
          >
            {status}
          </span>
<div
  className="mt-3 h-[3px] rounded-full transition-all duration-150"
  style={{
    width: `${progress * 88}px`,
    background: statusColor,
  }}
/>

                </motion.div>

      </motion.div>
      <motion.div
  className="
    absolute
    flex
    flex-col
    items-center
    justify-center
    rounded-2xl
    border
    border-red-500/30
    bg-red-500/10
    backdrop-blur-md
    px-8
    py-6
  "
  animate={{
    opacity: showWarning ? 1 : 0,
    scale: showWarning ? 1 : 0.9,
    y: showWarning ? 0 : 10,
  }}
  transition={{
    duration: 0.35,
  }}
>
  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
    <span className="text-2xl font-bold text-red-400">!</span>
  </div>

  <span className="text-lg font-semibold text-white">
    Optimizar urgente
  </span>

  <span className="mt-2 text-center text-sm text-white/60">
    El tiempo de carga está afectando
    a las conversiones.
  </span>
</motion.div>
<div
  className="
  absolute
  inset-0
  rounded-[28px]
  pointer-events-none
  "
  style={{
    border:"1px solid rgba(255,255,255,.06)",
    boxShadow:`
      inset 0 1px rgba(255,255,255,.08),
      0 20px 60px rgba(0,0,0,.35)
    `,
  }}
/>
    </div>
  );
}