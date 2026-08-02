"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function FunnelProblem() {
  const particles = [
  { left: 45, bottom: 62 },
  { left: 47, bottom: 74 },
  { left: 49, bottom: 86 },
  { left: 50, bottom: 98 },
  { left: 52, bottom: 70 },
  { left: 53, bottom: 82 },
  { left: 55, bottom: 95 },
  { left: 56, bottom: 108 },
  { left: 48, bottom: 118 },
  { left: 54, bottom: 126 },
];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#090909]">
{/* Background Glow */}
<motion.div
  animate={{
    opacity: [0.18, 0.35, 0.18],
    scale: [0.95, 1.08, 0.95],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    z-0
    left-1/2
    top-1/2
h-[420px]
w-[420px]
blur-[140px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-red-500/15
  "
/>
<svg
  className="absolute inset-0 z-[5] h-full w-full"
  viewBox="0 0 500 300"
  fill="none"
>
  <motion.path
    d="
      M-40 95
      L80 95
      L150 145
      L250 145
      L330 190
      L420 190
      L540 255
    "
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
<div
  className="absolute inset-0 z-[1] opacity-[0.025]"
  style={{
    backgroundImage:
      "radial-gradient(circle at center, rgba(255,255,255,.75) .8px, transparent .8px)",
    backgroundSize: "22px 22px",
    maskImage:
"radial-gradient(circle at center, transparent 110px, rgba(0,0,0,.4) 170px, black 230px)",

WebkitMaskImage:
"radial-gradient(circle at center, transparent 110px, rgba(0,0,0,.4) 170px, black 230px)",
  }}
/>
<motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.18, 0.35, 0.18],
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
    z-10
    h-[210px]
    w-[210px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-black/70
    blur-[45px]
  "
/>
<motion.div
  animate={{
    y: [3, -3, 3],
    rotate: [0, 0.4, 0, -0.4, 0],
    scale: [1, 1.01, 1],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
relative
z-20
-mt-12
overflow-hidden
rounded-2xl
drop-shadow-[0_0_35px_rgba(255,70,70,.18)]
"
>
  <Image
    src="/images/funnel.png"
    alt="Funnel"
    width={210}
    height={210}
    priority
  />
  <motion.div
  animate={{
    opacity: [0, 0.18, 0],
    y: [30, -20, -70],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeOut",
  }}
  className="
    pointer-events-none
    absolute
    left-1/2
    bottom-[42px]
    h-24
    w-14
    -translate-x-1/2
    rounded-full
    bg-gradient-to-t
    from-red-500/45
    to-transparent
    blur-xl
  "
/>
</motion.div>
<motion.div
  animate={{
    y: [0, -2, 0],
    opacity: [0.9, 1, 0.9],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-1/2
    top-[245px]
    z-30
    flex
    -translate-x-1/2
    items-center
    gap-2
    rounded-full
    border
    border-red-500/25
    bg-[#171717]/90
    px-4
    py-2
    backdrop-blur-xl
  "
>
  <div
    className="
      flex
      h-6
      w-6
      items-center
      justify-center
      rounded-full
      bg-red-500
      text-sm
      font-bold
      text-white
      shadow-[0_0_16px_rgba(239,68,68,.45)]
    "
  >
    !
  </div>

  <span className="whitespace-nowrap text-sm font-semibold text-red-300">
    1.5% tasa de conversión
  </span>
</motion.div>
<motion.div
  animate={{
    opacity: [0.15, 0.55, 0.15],
    scale: [1, 1.4, 1],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-1/2
    bottom-[72px]
    h-20
    w-20
    -translate-x-1/2
    rounded-full
    bg-red-500/35
    blur-[45px]
  "
/>
<motion.div
  animate={{
    opacity: [0.2, 0.7, 0.2],
    scaleY: [0.8, 1.3, 0.8],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="
    absolute
    left-1/2
    bottom-[48px]
    h-20
    w-[3px]
    -translate-x-1/2
    rounded-full
    bg-red-500
    blur-[3px]
  "
/>

{particles.map((particle, i) => (
  <motion.div
    key={i}
    animate={{
      y: [0, -18, 0],
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.4, 1],
    }}
    transition={{
      duration: 2 + i * 0.2,
      repeat: Infinity,
      delay: i * 0.15,
    }}
    className="absolute"
    style={{
      left: `${particle.left}%`,
      bottom: `${particle.bottom}px`,
    }}
  >
    <div
      className="
        h-1.5
        w-1.5
        rounded-full
        bg-red-400
        shadow-[0_0_10px_rgba(239,68,68,.9)]
      "
    />
  </motion.div>
))}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    z-0
    bg-[radial-gradient(circle,transparent_45%,#090909_100%)]
  "
/>
    </div>
  );
}