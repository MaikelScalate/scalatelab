"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  logo: string;
  glow: string;
};

export default function ToolCard({
  title,
  logo,
  glow,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: .9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: .55,
      }}
      className="
        relative
        w-[180px]
        rounded-[22px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        overflow-hidden
      "
    >
      {/* Glow */}

      <div
        className="absolute inset-0 opacity-30 blur-3xl"
        style={{
          background: glow,
        }}
      />

      {/* Contenido */}

      <div className="relative z-10 p-5">

        <img
          src={logo}
          alt={title}
          className="
            h-12
            w-auto
            object-contain
          "
        />

        <p
          className="
            mt-4
            text-lg
            font-semibold
            text-white
          "
        >
          {title}
        </p>

      </div>

    </motion.div>
  );
}