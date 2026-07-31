"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function FunnelProblem() {
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
  <motion.div
  animate={{
    x: [-120, 220],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "linear",
    repeatDelay: 1,
  }}
  className="
    pointer-events-none
    absolute
    top-0
    h-full
    w-10
    rotate-12
    bg-gradient-to-r
    from-transparent
    via-white/20
    to-transparent
    blur-md
  "
/>
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
<motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.6, 1, 0.6],
  }}
  transition={{
    duration: 1.8,
    repeat: Infinity,
  }}
  className="
    absolute
    right-[58px]
top-[70px]
    text-[42px]
    text-red-500
    drop-shadow-[0_0_18px_rgba(239,68,68,.8)]
  "
>
    ⚠
</motion.div>
{[...Array(10)].map((_, i) => (
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
      left: `${44 + Math.random() * 12}%`,
      bottom: `${60 + Math.random() * 45}px`,
    }}
  >
    <div className="h-1 w-1 rounded-full bg-red-500" />
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