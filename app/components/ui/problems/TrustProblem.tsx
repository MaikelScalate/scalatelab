"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function TrustProblem() {
  const [stars, setStars] = useState(0);
const positiveReview =
  "Entrega rápida y excelente calidad. Muy recomendable.";
const negativeReview =
  "La web tardó demasiado y abandoné la compra.";
const [review, setReview] = useState("");
const [isPositive, setIsPositive] = useState(true);
const [shake, setShake] = useState(false);
useEffect(() => {
  let cancelled = false;

  async function run() {
    while (!cancelled) {
    setStars(0);
setReview("");
setIsPositive(true);
await new Promise(r => setTimeout(r, 500));
if (cancelled) return;

// ⭐ Se rellenan las estrellas
for (let i = 1; i <= 4; i++) {
  setStars(i);
  await new Promise(r => setTimeout(r, 250));
}

// ✍️ Escribe la review positiva
for (let i = 0; i <= positiveReview.length; i++) {
  if (cancelled) return;

  setReview(positiveReview.slice(0, i));

  await new Promise(r => setTimeout(r, 28));
}

await new Promise(r => setTimeout(r, 1800));

// 🧹 Borra la review positiva
for (let i = positiveReview.length; i >= 0; i--) {
  if (cancelled) return;

  setReview(positiveReview.slice(0, i));

  await new Promise(r => setTimeout(r, 18));
}

// ⭐ Baja la valoración
setStars(3);
await new Promise(r => setTimeout(r, 250));

setStars(2);
await new Promise(r => setTimeout(r, 250));
setIsPositive(false);

setShake(true);

await new Promise(r => setTimeout(r, 350));

setShake(false);

// ✍️ Escribe la review negativa
for (let i = 0; i <= negativeReview.length; i++) {
  if (cancelled) return;

  setReview(negativeReview.slice(0, i));

  await new Promise(r => setTimeout(r, 28));
}

await new Promise(r => setTimeout(r, 3500));

} // ← cierre del while
 } 
  run();

  return () => {
    cancelled = true;
  };
}, []);
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#090909]">

      {/* Glow */}
      <motion.div
        animate={{
          opacity: [0.18, 0.3, 0.18],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[300px]
          w-[300px]
          rounded-full
          bg-yellow-500/10
          blur-[120px]
        "
      />

      {/* Dots */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,.8) .8px, transparent .8px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Card */}
        <motion.div
  animate={{
  y: [3, -3, 3],
  x: shake ? [0, -2, 2, -2, 2, 0] : 0,
}}
        transition={{
  y: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
  x: {
    duration: 0.35,
  },
}}
        className="
          relative
          z-20
          w-[240px]
          overflow-hidden
          rounded-2xl
          border
          border-white/5
          bg-gradient-to-b
          from-[#1B1B1F]
          to-[#111113]
          shadow-[0_20px_60px_rgba(0,0,0,.45)]
        "
      >

        {/* Header */}

        <div className="border-b border-white/5 px-5 py-4">

          <div className="flex gap-1 text-[18px]">
  {[0, 1, 2, 3, 4].map((i) => (
    <motion.span
      key={i}
      animate={{
        scale: stars > i ? [0.8, 1.2, 1] : 1,
        color:
  stars > i
    ? isPositive
      ? "#FACC15"
      : "#EF4444"
    : "rgba(255,255,255,.18)",
      }}
      transition={{
        duration: 0.25,
      }}
    >
      ★
    </motion.span>
  ))}
</div>

        </div>

        {/* Body */}

        <div className="px-5 py-5">

          <p className="min-h-[52px] text-sm leading-6 text-white/90">
  {review}
  <motion.span
    animate={{
      opacity: [1, 0, 1],
    }}
    transition={{
      duration: 0.8,
      repeat: Infinity,
    }}
    className="ml-0.5 text-white/40"
  >
    |
  </motion.span>
</p>

          <div className="mt-5 flex items-center justify-between">

            <motion.span
  animate={{
    opacity: isPositive ? 1 : 0.65,
  }}
  className="text-xs font-medium text-white/50"
>
  {isPositive ? "Laura M." : "Carlos R."}
</motion.span>

            <motion.div
  animate={{
    scale: isPositive ? 1 : 0.95,
    opacity: 1,
  }}
  transition={{
    duration: 0.35,
  }}
  className={`
    rounded-full
    border
    px-3
    py-1
    text-[11px]
    font-semibold
    ${
      isPositive
        ? "border-green-500/25 bg-green-500/10 text-green-400"
        : "border-red-500/25 bg-red-500/10 text-red-400"
    }
  `}
>
  {isPositive ? "✓ Verificada" : "✕ Sin verificar"}
</motion.div>

          </div>

        </div>

      </motion.div>
<motion.div
  initial={{ opacity: 0, y: 8, scale: 0.9 }}
  animate={{
    opacity: isPositive ? 0 : 1,
    y: isPositive ? 8 : 0,
    scale: isPositive ? 0.9 : 1,
  }}
  transition={{
    duration: 0.35,
  }}
  className="
    absolute
    top-8
    rounded-full
    border
    border-red-500/20
    bg-[#17171B]
    px-4
    py-2
    z-10
    text-xs
    font-medium
    text-red-400
    shadow-lg
    backdrop-blur-xl
  "
>
  ⚠ Optimizar prueba social
</motion.div>
    </div>
  );
}