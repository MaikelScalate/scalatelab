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
useEffect(() => {
  let cancelled = false;

  async function run() {
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
// ✍️ Escribe la review negativa
for (let i = 0; i <= negativeReview.length; i++) {
  if (cancelled) return;

  setReview(negativeReview.slice(0, i));

  await new Promise(r => setTimeout(r, 28));
}

await new Promise(r => setTimeout(r, 3500));
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
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
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
            ? "#FACC15"
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

    </div>
  );
}