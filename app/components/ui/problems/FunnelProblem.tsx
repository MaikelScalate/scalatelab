"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FunnelProblem() {

const [step, setStep] = useState<
  "product" |
  "click" |
  "added" |
  "cart" |
  "crosssell" |
  "funnel"
>("product");
  useEffect(() => {
    let cancelled = false;

    async function run() {
      while (!cancelled) {

setStep("product");

await new Promise(r => setTimeout(r, 2500));

setStep("click");

await new Promise(r => setTimeout(r, 180));

setStep("added");

await new Promise(r => setTimeout(r, 900));

setStep("cart");

await new Promise(r => setTimeout(r, 1800));

setStep("crosssell");

await new Promise(r => setTimeout(r, 1500));

setStep("funnel");

await new Promise(r => setTimeout(r, 2200));
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="
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
      "
    >
            <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.04), transparent 30%),
            radial-gradient(circle at 80% 10%, rgba(59,130,246,.06), transparent 35%)
          `,
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
      <motion.div
  layout
  animate={{
    scale:
      step === "funnel"
        ? 0.58
        : 1,

    y:
      step === "funnel"
        ? -85
        : 0,
  }}
  transition={{
    layout: {
      duration: 0.45,
    },
    duration: 0.6,
  }}
  className="
          relative
          w-[240px]
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-5
        "
      >
        <div className="mb-4 flex items-center justify-between">
  <div className="h-2 w-12 rounded-full bg-white/20" />

  <div className="flex gap-1">
    <div className="h-2 w-2 rounded-full bg-white/20" />
    <div className="h-2 w-2 rounded-full bg-white/20" />
    <div className="h-2 w-2 rounded-full bg-white/20" />
  </div>
</div>
              {step === "product" ||
 step === "click" ||
 step === "added" ? (
  <motion.div
    layout
    className="
      relative
      mb-5
      flex
      h-36
      items-center
      justify-center
      overflow-hidden
      rounded-2xl
      bg-gradient-to-br
      from-white/10
      to-white/[0.03]
    "
  >
    <div className="absolute h-24 w-24 rounded-full bg-red-500/10 blur-3xl" />

    <div className="h-24 w-16 rounded-xl border border-white/10 bg-white/5" />
  </motion.div>
) : (
  <motion.div
    layout
    className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-4"
  >
    <div className="flex justify-between text-sm text-white/70">
      <span>Order #1842</span>
      <span>✓</span>
    </div>

    <div className="mt-3 h-px bg-white/10" />

    <div className="mt-3 flex justify-between text-white">
      <span>1 Product</span>
      <span>39,90 €</span>
    </div>
  </motion.div>
)}
                <motion.div
  layout
  className="text-white text-lg font-bold"
>
  {step === "product" ||
 step === "click" ||
 step === "added"
  ? "Product 1"
  : "Checkout"}
</motion.div>
       <motion.div
  layout
  className="mt-1 text-sm text-white/50"
>
{step === "product" ||
 step === "click" ||
 step === "added"
  ? "Clothes Collection"
  : "Ready to complete your purchase"}
</motion.div>
               {(step === "product" ||
  step === "click" ||
  step === "added") && (
  <motion.div
    layout
    className="mt-2 flex items-center gap-2"
  >
    <span className="text-yellow-400 tracking-wide">
      ★★★★★
    </span>

    <span className="text-xs text-white/40">
      (128)
    </span>
  </motion.div>
)}
                {step === "product" ||
 step === "click" ||
 step === "added" ? (
  <div className="mt-4 flex items-end gap-3">
    <span className="text-2xl font-black text-white">
      39,90 €
    </span>

    <span className="text-sm text-white/30 line-through">
      49,90 €
    </span>
  </div>
) : (
  <motion.div
    layout
    className="mt-5 space-y-3"
  >
    <div className="flex justify-between text-white/80 text-sm">
      <span>Product</span>
      <span>39,90 €</span>
    </div>

    <div className="h-px bg-white/10" />

    <div className="flex justify-between font-semibold text-white">
      <span>Total</span>
      <span>39,90 €</span>
    </div>
  </motion.div>
)}
                <motion.button
  layout
  animate={{
    scale: step === "click" ? 0.93 : 1,
    backgroundColor:
      step === "added" || step === "cart"
        ? "#22C55E"
        : "#EF4444",
  }}
  transition={{
    duration: 0.25,
  }}
  className="
    mt-6
    w-full
    rounded-xl
    py-3
    text-sm
    font-bold
    text-white
    shadow-lg
  "
>
  {step === "product" && "COMPRAR AHORA"}
  {step === "click" && "COMPRAR AHORA"}
  {step === "added" && "✓ AÑADIDO"}
  {(step === "cart" ||
  step === "crosssell" ||
  step === "funnel") &&
  "PAGO SEGURO"}
</motion.button>
{step === "crosssell" && (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.7,
      y: -20,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    exit={{
      opacity: 0,
    }}
    transition={{
      duration: 0.35,
    }}
    className="
      absolute
      top-8
      left-1/2
      -translate-x-1/2
      rounded-2xl
      border
      border-yellow-400/30
      bg-yellow-400/10
      px-5
      py-4
      backdrop-blur-xl
      shadow-xl
    "
  >
    <div className="text-center">
      <div className="text-2xl">
        ⚠
      </div>

      <div className="mt-2 text-xs font-bold tracking-[0.2em] text-yellow-300">
        ADD
      </div>

      <div className="text-sm font-semibold text-white">
        CROSS-SELLS
      </div>
    </div>
  </motion.div>
)}
</motion.div>
{step === "funnel" && (
  <motion.div
    initial={{
      opacity: 0,
      y: 40,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.45,
    }}
    className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      flex
      flex-col
      items-center
      gap-3
    "
  >
    <div className="rounded-full bg-white/10 px-5 py-2 text-sm text-white">
      Landing
    </div>

    <div className="h-6 w-px bg-white/20" />

    <div className="rounded-full bg-white/10 px-5 py-2 text-sm text-white">
      Checkout
    </div>

    <div className="h-6 w-px bg-white/20" />

    <div className="rounded-full bg-red-500/20 px-5 py-2 text-sm text-red-300">
      Cross Sell
    </div>
  </motion.div>
)}
    </div>
  );
}