"use client";

import { motion } from "framer-motion";
import ToolCard from "../ToolCard";

export default function Step1() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full w-full overflow-hidden rounded-[30px]"
    >
      {/* Fondo */}

      <div className="absolute inset-0 bg-[#111111]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.08),transparent_60%)]" />
      <motion.div
  animate={{
    scale: [1, 2.8],
    opacity: [0.35, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeOut",
  }}
  className="
absolute
left-1/2
top-[58%]
z-0
h-[120px]
w-[120px]
-translate-x-1/2
-translate-y-1/2
rounded-full
border
border-blue-400/40
"
/>

<motion.div
  animate={{
    scale: [1, 3.6],
    opacity: [0.22, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    delay: .5,
    ease: "easeOut",
  }}
  className="
absolute
left-1/2
top-[58%]
z-0
h-[120px]
w-[120px]
-translate-x-1/2
-translate-y-1/2
rounded-full
border
border-purple/30
"
/>

      {/* Título */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="
          absolute
          left-1/2
          top-6
          z-40
          -translate-x-1/2
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-black/40
            px-6
            py-3
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-blue-500/15
              text-xl
              font-bold
              text-blue-400
            "
          >
            01
          </div>

          <div>
            <p className="text-xs uppercase tracking-[.25em] text-blue-400">
              Paso
            </p>

            <h2 className="text-xl font-semibold text-white">
              Auditamos toda tu tienda
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Logo */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-[58%]
          z-30
          flex
          h-[110px]
          w-[110px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-500
          via-[#7C3AED]
          to-fuchsia-500
        "
      >
        <img
          src="/logo-scalate.png"
          className="h-full w-full object-contain p-6"
        />
      </motion.div>

      {/* Analytics */}

      <div className="absolute left-[6%] top-[32%]">
        <ToolCard
          title=""
          logo="/google-analytics.png"
          glow="rgba(251,146,60,.45)"
          initialX={-300}
          delay={.8}
        />
      </div>

      {/* Clarity */}

      <div className="absolute right-[6%] top-[32%]">
        <ToolCard
          title=""
          logo="/clarity.png"
          glow="rgba(59,130,246,.45)"
          initialX={300}
          delay={1}
        />
      </div>

      {/* Search Console */}

      <div className="absolute left-[6%] bottom-[8%]">
        <ToolCard
          title=""
          logo="/google-search.png"
          glow="rgba(59,130,246,.45)"
          initialX={-300}
          initialY={120}
          delay={1.2}
        />
      </div>

      {/* Shopify */}

      <div className="absolute right-[6%] bottom-[8%]">
        <ToolCard
          title=""
          logo="/logo-shopify.png"
          glow="rgba(34,197,94,.45)"
          initialX={300}
          initialY={120}
          delay={1.4}
        />
      </div>
    </motion.div>
  );
}