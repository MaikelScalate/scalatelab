"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  logo: string;
  glow: string;
  initialX?: number;
  initialY?: number;
  delay?: number;
};

export default function ToolCard({
  title,
  logo,
  glow,
  initialX = 0,
  initialY = 30,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{
  opacity: 0,
  x: initialX,
  y: initialY,
  scale: 0.85,
}}

animate={{
    opacity:1,
    x:0,
    y:[0,-6,0,6,0],
    scale:[1,.98,1],
}}

transition={{
    opacity:{
        duration:.7,
        delay,
    },
    x:{
        duration:.7,
        delay,
        type:"spring",
        stiffness:90,
    },
    y:{
        duration:4,
        repeat:Infinity,
        ease:"easeInOut",
        delay:delay+1,
    },
    scale:{
        duration:4,
        repeat:Infinity,
        ease:"easeInOut",
        delay:delay+1,
    }
}}
      className="
        relative
        flex
        h-[88px]
        w-[160px]
        items-center
        justify-center
        overflow-hidden
        rounded-[20px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-25
          blur-3xl
        "
        style={{
          background: glow,
        }}
      />

      {/* Logo */}

      <img
        src={logo}
        alt={title}
        className="
          relative
          z-10
          max-h-[52px]
          max-w-[125px]
          object-contain
        "
      />
    </motion.div>
  );
}