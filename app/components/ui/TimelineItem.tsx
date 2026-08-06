"use client";

import {
  motion,
  useInView,
} from "framer-motion";

import { useRef } from "react";
type Props = {
  step: {
    number: string;
    icon: any;
    title: string;
    text: string;
    animation: string;
  };
  isLast: boolean;
};

export default function TimelineItem({
  step,
  isLast,
}: Props) {
  const Icon = step.icon;
const ref = useRef(null);
const iconRef = useRef(null);
const isInView = useInView(iconRef, {
  amount: 0.9,
});
  return (
    <>
      {/* ================= MOBILE ================= */}

      <div className="mb-32 flex flex-col items-center lg:hidden">

        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-purple/40 bg-white/[0.03] backdrop-blur">
          <Icon className="h-7 w-7 text-purple" />
        </div>

      </div>

      {/* ================= DESKTOP ================= */}

      <motion.div
  ref={iconRef}
  className="
hidden
lg:grid
lg:grid-cols-[1fr_100px_1fr]
gap-16
items-center
mb-32
"
>

        {/* Texto */}

        <div>

          <motion.span
  animate={{
    color: isInView ? "#A855F7" : "#5F5F66",
    opacity: isInView ? 1 : 0.45,
  }}
  transition={{ duration: 0.45 }}
  className="text-4xl font-bold"
>
  {step.number}
</motion.span>
<motion.h3
  animate={{
    opacity: isInView ? 1 : 0.45,
    y: isInView ? 0 : 18,
  }}
  transition={{
    duration: 0.45,
    delay: 0.05,
  }}
  className="
    mt-4
    text-5xl
    font-bold
    leading-tight
    text-white
  "
>
  {step.title}
</motion.h3>

          <motion.p
  animate={{
  opacity: isInView ? 1 : 0.55,
  y: isInView ? 0 : 12,
}}
  transition={{
  duration: 0.45,
  delay: 0.10,
}}
  className="mt-6 text-xl leading-9 text-white/60"
>
  {step.text}
</motion.p>

        </div>

        {/* Línea */}

        <div className="relative flex justify-center">

  <motion.div
    animate={{
      borderColor: isInView
        ? "rgba(125,38,205,.9)"
        : "rgba(255,255,255,.10)",

      boxShadow: isInView
        ? "0 0 45px rgba(125,38,205,.45)"
        : "0 0 0 rgba(0,0,0,0)",

      scale: isInView ? 1.08 : 1,
      rotate: isInView ? 0 : -8,
    }}
    transition={{
      duration: .55,
    }}
    className="
      relative
      z-10
      flex
      h-20
      w-20
      items-center
      justify-center
      rounded-full
      border
      bg-white/[0.03]
      backdrop-blur-xl
    "
  >

    <motion.div
      animate={{
        color: isInView
          ? "#A855F7"
          : "#8A8A8A",
          scale: isInView ? 1 : .8,
      }}
    >
      <Icon className="h-8 w-8" />
    </motion.div>

  </motion.div>

</div>

        {/* Vídeo */}

          <motion.div

animate={{

scale: isInView ? 1.03 : .97,
borderColor: isInView
  ? "rgba(125,38,205,.55)"
  : "rgba(255,255,255,.08)",

boxShadow: isInView
  ? "0 0 80px rgba(125,38,205,.28)"
  : "0 0 0 rgba(0,0,0,0)"

}}

transition={{

duration:.6

}}

className="

overflow-hidden

rounded-[30px]

border

bg-[#121212]

"
>

            <video
              src={step.animation}
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />

          </motion.div>

        </motion.div>

      </>

  )
 }