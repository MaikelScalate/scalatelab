"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Button from "../ui/Button";
import {
  ArrowUpRight,
  Check,
  ShoppingBag,
  TrendingUp,
  Sparkles,
  Code2,
  MousePointer2,
} from "lucide-react";

export default function UniqueWebSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Movimiento suave ligado al ratón para que el mockup tenga profundidad 3D.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(
    useTransform(pointerY, [-1, 1], [3.5, -3.5]),
    { stiffness: 140, damping: 20, mass: 0.7 }
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-1, 1], [-4.5, 4.5]),
    { stiffness: 140, damping: 20, mass: 0.7 }
  );

  const isInView = useInView(sectionRef, {
  amount: 0.25,
  once: true,
});
  const benefits = [
    {
      number: "01",
      title: "Una web que te diferencia",
      text: "Hecha a medida para diferenciarte en el mercado.",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "Más conversión, ticket medio y LTV",
      text: "Una estructura pensada para convertir más y mejor.",
      icon: TrendingUp,
    },
    {
      number: "03",
      title: "Sin depender de desarrolladores",
      text: "Una base flexible para modificar a tu gusto.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Una base para tu marketing",
      text: "Una web lista para hacer rendir mejor tus campañas.",
      icon: ShoppingBag,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-16
        sm:px-8
        lg:px-12
        lg:py-24
      "
    >
      {/* ========================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================================================= */}

      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? { opacity: 0.08 }
            : {
                x: [-40, 35, -40],
                y: [-20, 30, -20],
                scale: [1, 1.08, 1],
                opacity: [0.07, 0.13, 0.07],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          h-[520px]
          w-[760px]
          -translate-x-1/2
          rounded-full
          bg-purple-600
          blur-[150px]
        "
      />

      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? { opacity: 0.035 }
            : {
                x: [50, -35, 50],
                y: [25, -25, 25],
                scale: [0.95, 1.12, 0.95],
                opacity: [0.025, 0.065, 0.025],
              }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[45%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-fuchsia-500
          blur-[140px]
        "
      />

      {/* ========================================================= */}
      {/* CONTENIDO */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ======================================================= */}
        {/* TÍTULO */}
        {/* ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
  mx-auto
  mb-4
  w-full
  text-center
  sm:mb-6
  lg:mb-8
"
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/[0.07]
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-purple-300
            "
          >
            <motion.span
  animate={{
    opacity: [0.45, 1, 0.45],
    scale: [0.85, 1.25, 0.85],
    boxShadow: [
      "0 0 5px rgba(168,85,247,.4)",
      "0 0 18px rgba(168,85,247,1)",
      "0 0 5px rgba(168,85,247,.4)",
    ],
  }}
  transition={{
    duration: 1.8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    h-1.5
    w-1.5
    rounded-full
    bg-purple-400
  "
/>
            Tu ventaja competitiva
          </div>

          <h2
  className="
    mx-auto
    w-full
    text-center
    text-[24px]
    font-semibold
    leading-[1.12]
    tracking-[-0.035em]
    text-white
    sm:whitespace-nowrap
    sm:w-fit
    sm:text-3xl
    lg:text-4xl
  "
>
  ¿Qué consigues con una{" "}
  <span className="text-purple-400">
    web única y diferencial?
  </span>
</h2>

          <p
  className="
    mx-auto
    mt-5
    w-full
    max-w-[340px]
    text-center
    text-[13px]
    leading-6
    text-white/50
    sm:mt-7
    sm:max-w-none
    sm:whitespace-nowrap
    sm:text-base
    lg:text-lg
    lg:leading-7
  "
>
  Una web diseñada alrededor de tu marca, tus clientes y tus objetivos de crecimiento.
</p>
        </motion.div>

        {/* ======================================================= */}
        {/* PANEL PRINCIPAL */}
        {/* ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.98,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  y: 45,
                  scale: 0.98,
                }
          }
          transition={{
            duration: 1.05,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
  relative
  mx-auto
  w-full
  scale-[0.9]
  max-w-[1190px]
  overflow-hidden
  rounded-[24px]
  border
  border-white/[0.09]
  bg-[#0b0c11]
  shadow-[0_30px_100px_rgba(0,0,0,.45)]
"
        >
          {/* Borde / glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[32px]
              bg-[radial-gradient(circle_at_25%_50%,rgba(168,85,247,.12),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(168,85,247,.06),transparent_30%)]
            "
          />

          <motion.div
            aria-hidden="true"
            animate={
              prefersReducedMotion
                ? { opacity: 0.25 }
                : { x: ["-120%", "120%"] }
            }
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatDelay: 3.5,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-purple-300/[0.10] to-transparent blur-xl"
          />

          <div
            className="
              relative
              grid
              lg:grid-cols-2
            "
          >
            {/* ================================================= */}
            {/* IZQUIERDA — ANIMACIÓN */}
            {/* ================================================= */}

            <div
              onPointerMove={(event) => {
                if (prefersReducedMotion) return;
                const rect = event.currentTarget.getBoundingClientRect();
                pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
                pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
              }}
              onPointerLeave={() => {
                pointerX.set(0);
                pointerY.set(0);
              }}
              className="
  relative
  min-h-[360px]
  overflow-hidden
  border-b
  border-white/[0.07]
  p-5
  sm:p-8
  lg:min-h-[450px]
  lg:border-b-0
  lg:border-r
  lg:p-10
"
            >
              {/* Visual principal */}

              <div className="absolute inset-x-6 inset-y-0 flex items-center justify-center sm:inset-x-10">

                {/* WEB MOCKUP */}

                <motion.div
                  animate={
                    isInView
                      ? prefersReducedMotion
                        ? { y: 0 }
                        : { y: [10, -2, 10], scale: [1, 1.008, 1] }
                      : { y: 20, scale: 0.985 }
                  }
                  transition={{
                    duration: 5.5,
                    repeat: prefersReducedMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 1200,
                  }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
                  className="
                    absolute
                    left-1/2
                    top-[56%]
                    w-[105%]
                    max-w-[500px]
                    sm:top-1/2
                    sm:w-[82%]
                    sm:max-w-[430px]
                    will-change-transform
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[20px]
                      border
                      border-white/[0.10]
                      bg-[#101117]
                      shadow-[0_30px_80px_rgba(0,0,0,.5)]
                    "
                  >
                    <motion.div
                      aria-hidden="true"
                      animate={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { top: ["-10%", "110%"], opacity: [0, 0.35, 0] }
                      }
                      transition={{
                        duration: 4.5,
                        repeat: prefersReducedMotion ? 0 : Infinity,
                        repeatDelay: 3.5,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute left-0 z-30 h-10 w-full bg-gradient-to-b from-transparent via-purple-300/[0.10] to-transparent blur-sm"
                    />
                    {/* Browser */}
                    <div
                      className="
                        flex h-8 items-center gap-1.5
                        border-b border-white/[0.06] px-4
                        bg-white/[0.012]
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/10" />

                      <motion.div
                        animate={prefersReducedMotion ? {} : { opacity: [0.3, 0.55, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="
                          ml-4 h-4 flex-1 rounded-full
                          border border-white/[0.05]
                          bg-white/[0.025]
                        "
                      />
                    </div>

                    {/* E-commerce content */}
                    <div className="relative p-3 sm:p-4">
                      {/* Mini store navigation */}
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={
                              prefersReducedMotion
                                ? {}
                                : { opacity: [0.65, 1, 0.65], scale: [1, 1.03, 1] }
                            }
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="text-[8px] font-bold tracking-[0.18em] text-white sm:text-[9px]"
                          >
                            TU MARCA
                          </motion.div>

                          <div className="hidden h-3 w-px bg-white/10 sm:block" />

                          <div className="hidden items-center gap-3 sm:flex">
                            <span className="text-[6px] font-medium text-white/35">
                              NUEVO
                            </span>
                            <span className="text-[6px] font-medium text-white/35">
                              COLECCIÓN
                            </span>
                            <span className="text-[6px] font-medium text-white/35">
                              BEST SELLERS
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border border-white/10 bg-white/[0.02]" />
                          <div className="relative h-4 w-4 rounded border border-white/10 bg-white/[0.02]">
                            <motion.span
                              animate={
                                prefersReducedMotion
                                  ? {}
                                  : { scale: [1, 1.18, 1] }
                              }
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-purple-500 text-[5px] font-bold text-white"
                            >
                              2
                            </motion.span>
                          </div>
                        </div>
                      </div>

                      {/* Hero store area */}
                      <div className="grid grid-cols-[1fr_.82fr] items-center gap-3 sm:gap-5">
                        {/* Copy */}
                        <div className="relative z-10">
                          <span className="text-[6px] font-semibold uppercase tracking-[0.18em] text-purple-300/80 sm:text-[7px]">
                            NUEVA COLECCIÓN
                          </span>

                          <motion.div
                            animate={
                              prefersReducedMotion
                                ? {}
                                : { width: ["38%", "72%", "38%"] }
                            }
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="mt-2 h-1.5 rounded-full bg-purple-400/80"
                          />

                          <div className="mt-2 h-1.5 w-[91%] rounded-full bg-white/35" />
                          <div className="mt-1.5 h-1.5 w-[73%] rounded-full bg-white/15" />

                          <div className="mt-3 flex items-center gap-2">
                            <motion.div
                              animate={
                                prefersReducedMotion
                                  ? {}
                                  : { scale: [1, 1.04, 1] }
                              }
                              transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="inline-flex items-center gap-1.5 rounded-md bg-purple-500 px-3 py-2 text-[6px] font-semibold text-white shadow-[0_0_22px_rgba(168,85,247,.28)] sm:text-[7px]"
                            >
                              DESCUBRIR
                              <ArrowUpRight className="h-2.5 w-2.5" />
                            </motion.div>

                            <span className="text-[6px] text-white/30">
                              Ver colección
                            </span>
                          </div>
                        </div>

                        {/* Main product card */}
                        <motion.div
                          animate={
                            prefersReducedMotion
                              ? {}
                              : {
                                  y: [0, -5, 0],
                                  rotate: [-1, 1, -1],
                                }
                          }
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative aspect-[.88] overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.09] via-white/[0.035] to-white/[0.015] shadow-[0_20px_45px_rgba(0,0,0,.35)]"
                        >
                          {/* Product atmosphere */}
                          <motion.div
                            animate={
                              prefersReducedMotion
                                ? {}
                                : {
                                    opacity: [0.18, 0.4, 0.18],
                                    scale: [0.88, 1.05, 0.88],
                                  }
                            }
                            transition={{
                              duration: 3.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-4 rounded-full bg-purple-500/25 blur-2xl"
                          />

                          {/* Producto real */}
                          <motion.div
                            animate={
                              prefersReducedMotion
                                ? {}
                                : { y: [0, -4, 0], rotate: [-0.6, 0.6, -0.6] }
                            }
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-0 flex items-center justify-center px-4 pb-8 pt-10"
                          >
                            <img
                              src="/producto.png"
                              alt="Producto de la tienda"
                              className="
                                h-full w-full object-contain
                                drop-shadow-[0_18px_30px_rgba(0,0,0,.45)]
                              "
                            />
                          </motion.div>

                          {/* Product badge */}
                          <span className="absolute left-2.5 top-2.5 rounded-md border border-purple-300/20 bg-purple-500/15 px-2 py-1 text-[5px] font-semibold uppercase tracking-[0.12em] text-purple-200 sm:text-[6px]">
                            BEST SELLER
                          </span>

                          {/* Product info */}
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                            <div>
                              <div className="text-[6px] font-medium text-white/65">
                                ESSENTIAL SET
                              </div>
                              <div className="mt-1 text-[7px] font-semibold text-white">
                                89€
                              </div>
                            </div>
                            <div className="flex gap-1">
                              <span className="h-2 w-2 rounded-full border border-white/30 bg-white/20" />
                              <span className="h-2 w-2 rounded-full border border-purple-300/40 bg-purple-400/40" />
                              <span className="h-2 w-2 rounded-full border border-white/20 bg-white/10" />
                            </div>
                          </div>

                          {/* Product shine */}
                          <motion.div
                            animate={
                              prefersReducedMotion
                                ? { opacity: 0 }
                                : { x: ["-130%", "150%"], opacity: [0, 0.55, 0] }
                            }
                            transition={{
                              duration: 3.2,
                              repeat: Infinity,
                              repeatDelay: 2.8,
                              ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-md"
                          />
                        </motion.div>
                      </div>

                      {/* Trust / benefits row */}
                      <div className="mt-3 flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.018] px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-500/10 text-purple-300">
                            <Sparkles className="h-2.5 w-2.5" />
                          </div>
                          <div>
                            <div className="text-[6px] font-semibold text-white/65">
                              DISEÑO A MEDIDA
                            </div>
                            <div className="text-[5px] text-white/25">
                              Pensado para convertir
                            </div>
                          </div>
                        </div>

                        <div className="hidden items-center gap-3 sm:flex">
                          <span className="text-[5px] text-white/25">
                            ENVÍO GRATIS
                          </span>
                          <span className="h-2.5 w-px bg-white/10" />
                          <span className="text-[5px] text-white/25">
                            PAGO SEGURO
                          </span>
                        </div>
                      </div>

                      {/* Product cards */}
                      <div className="mt-3 grid grid-cols-3 gap-1.5">
                        {[
                          { name: "STUDIO", price: "76€", accent: "bg-purple-300/30" },
                          { name: "SIGNATURE", price: "94€", accent: "bg-white/20" },
                          { name: "ESSENTIAL", price: "89€", accent: "bg-purple-400/25" },
                        ].map((product, index) => (
                          <motion.div
                            key={product.name}
                            animate={
                              prefersReducedMotion
                                ? {}
                                : {
                                    y: [0, index === 1 ? -3 : -1, 0],
                                    opacity: [0.58, 0.95, 0.58],
                                  }
                            }
                            transition={{
                              duration: 3 + index * 0.35,
                              delay: index * 0.25,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="rounded-lg border border-white/[0.06] bg-white/[0.022] p-1.5"
                          >
                            <div className="relative aspect-[1.25] overflow-hidden rounded-md bg-white/[0.035]">
                              <div
                                className={`absolute left-1/2 top-1/2 h-[68%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-md ${product.accent} blur-[0.2px]`}
                              />
                              <div className="absolute bottom-1 left-1 right-1 h-px bg-white/10" />
                            </div>

                            <div className="mt-1.5 flex items-center justify-between gap-1">
                              <span className="truncate text-[5px] font-medium text-white/40">
                                {product.name}
                              </span>
                              <span className="text-[5px] font-semibold text-white/65">
                                {product.price}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Simulated cursor */}
                      <motion.div
                        animate={
                          prefersReducedMotion
                            ? {}
                            : {
                                x: [0, 70, 120, 35, 0],
                                y: [0, -5, 18, 6, 0],
                              }
                        }
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute left-[43%] top-[50%] z-30 hidden sm:block"
                      >
                        <MousePointer2
                          className="
                            h-4 w-4
                            rotate-[-12deg]
                            fill-white
                            text-white
                            drop-shadow-[0_0_10px_rgba(255,255,255,.35)]
                          "
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    </div>                  </div>

                  {/* ================================================= */}
                  {/* MÉTRICAS FLOTANTES */}
                  {/* ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={
                      isInView
                        ? prefersReducedMotion
                          ? { opacity: 1, x: 0 }
                          : { opacity: 1, x: 0, y: [0, -5, 0] }
                        : {
                            opacity: 0,
                            x: -25,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      delay: 0.7,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      repeatDelay: 2.5,
                    }}
                    className="
                      absolute
                      -left-8
                      bottom-8
                      hidden
                      rounded-2xl
                      border
                      border-purple-400/20
                      bg-[#111219]/95
                      px-4
                      py-3
                      shadow-[0_20px_50px_rgba(0,0,0,.45)]
                      backdrop-blur-xl
                      sm:block
                    "
                  >
                    <div className="text-[9px] uppercase tracking-wider text-white/35">
                      Conversión
                    </div>

                    <div className="mt-1 text-lg font-bold text-purple-300">
                      +4.7%
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    animate={
                      isInView
                        ? prefersReducedMotion
                          ? { opacity: 1, x: 0 }
                          : { opacity: 1, x: 0, y: [0, 5, 0] }
                        : {
                            opacity: 0,
                            x: 25,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      delay: 0.9,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      repeatDelay: 2.8,
                    }}
                    className="
                      absolute
                      -right-8
                      top-10
                      hidden
                      rounded-2xl
                      border
                      border-purple-400/20
                      bg-[#111219]/95
                      px-4
                      py-3
                      shadow-[0_20px_50px_rgba(0,0,0,.45)]
                      backdrop-blur-xl
                      sm:block
                    "
                  >
                    <div className="text-[9px] uppercase tracking-wider text-white/35">
                      AOV
                    </div>

                    <div className="mt-1 text-lg font-bold text-purple-300">
                      +76€
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>

            {/* ================================================= */}
            {/* DERECHA — BENEFICIOS */}
            {/* ================================================= */}

            <div
              className="
                relative
                flex
                flex-col
                justify-center
                p-5
                sm:p-7
                lg:p-10
              "
            >
              <div className="mb-6">
                <h3
                  className="
                    mt-3
                    max-w-md
                    text-2xl
                    font-semibold
                    tracking-[-0.025em]
                    text-white
                    sm:text-3xl
                  "
                >
                  Una web que trabaja a tu favor.
                </h3>
              </div>

              <div className="space-y-2.5">
                {benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;

                  return (
                    <motion.div
                      key={benefit.number}
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              x: 0,
                            }
                          : {
                              opacity: 0,
                              x: 25,
                            }
                      }
                      transition={{
                        duration: 0.65,
                        delay: 0.35 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group
                        rounded-xl
                        border
                        border-white/[0.06]
                        bg-white/[0.015]
                        p-3.5
                        transition-colors
                        duration-300
                        hover:border-purple-400/20
                        hover:bg-purple-500/[0.035]
                        sm:p-4
                      "
                    >
                      <div className="flex gap-4">
                        {/* Número / icono */}

                        <motion.div
                          whileHover={
                            prefersReducedMotion
                              ? undefined
                              : { rotate: 6, scale: 1.08 }
                          }
                          transition={{ type: "spring", stiffness: 300, damping: 18 }}
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-purple-400/15
                            bg-purple-500/[0.08]
                            text-purple-300
                          "
                        >
                          <BenefitIcon className="h-4 w-4" />
                        </motion.div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold text-purple-400/60">
                              {benefit.number}
                            </span>

                            <h4 className="text-sm font-semibold text-white sm:text-base">
                              {benefit.title}
                            </h4>
                          </div>

                          <p
                            className="
                              mt-1.5
                              text-xs
                              leading-5
                              text-white/45
                              sm:text-sm
                              sm:leading-6
                            "
                          >
                            {benefit.text}
                          </p>
                        </div>

                        <Check
                          className="
                            mt-1
                            h-4
                            w-4
                            shrink-0
                            text-purple-400/70
                          "
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </motion.div>
        {/* ======================================================= */}
{/* CTA FUERA DEL PANEL */}
{/* ======================================================= */}

<motion.div
  initial={{
    opacity: 0,
    y: 24,
    scale: 0.98,
  }}
  animate={
    isInView
      ? {
          opacity: 1,
          y: 0,
          scale: 1,
        }
      : {
          opacity: 0,
          y: 24,
          scale: 0.98,
        }
  }
  transition={{
    duration: 0.7,
    delay: 0.9,
  }}
  className="
    mt-10
    flex
    flex-col
    items-center
  "
>
  <div className="mt-[-35px] flex justify-center">
  
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.025 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              <Button
                className="
                  h-12
                  px-8
                  text-2lg
                "
              >
                         Quiero mi web diferencial
                      </Button>
            </motion.div>
  
</div>

  <p className="mt-3 text-center text-[10px] text-white/25">
    Construyamos una web que haga crecer tu marca.
  </p>
</motion.div>
      </div>
    </section>
  );
}