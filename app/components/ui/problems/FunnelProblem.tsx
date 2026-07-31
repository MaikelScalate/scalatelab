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
    left-1/2
    top-1/2
    h-72
    w-72
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-red-500/15
    blur-[100px]
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
    y: [4, -4, 4],
  }}
  transition={{
    duration: 4,
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
    opacity: [0.15, 0.4, 0.15],
    scale: [1, 1.15, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    bottom-[42px]
    left-1/2
    h-24
    w-32
    -translate-x-1/2
    rounded-full
    bg-red-500/25
    blur-[55px]
  "
/>
{[...Array(8)].map((_, i) => (
  <motion.div
    key={i}
    animate={{
      y: [0, -12, 0],
      opacity: [0.2, 0.7, 0.2],
    }}
    transition={{
      duration: 2 + i * 0.3,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    }}
    className="absolute"
    style={{
      left: `${25 + i * 7}%`,
      top: `${30 + (i % 3) * 18}%`,
    }}
  >
    <div className="h-1.5 w-1.5 rounded-full bg-red-500/70" />
  </motion.div>
))}
    </div>
  );
}