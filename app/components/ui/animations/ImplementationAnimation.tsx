"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Rocket,
  ShoppingCart,
  Sparkles,
  Zap,
  MousePointer2,
} from "lucide-react";

type Props = {
  play: boolean;
};

type Order = {
  id: number;
  name: string;
  amount: string;
};

const orders: Order[] = [
  {
    id: 10592,
    name: "David",
    amount: "+100,79€",
  },
  {
    id: 10593,
    name: "Laura",
    amount: "+84,50€",
  },
  {
    id: 10594,
    name: "Carlos",
    amount: "+129,90€",
  },
  {
    id: 10595,
    name: "Sofía",
    amount: "+74,99€",
  },
  {
    id: 10596,
    name: "María",
    amount: "+115,00€",
  },
  {
    id: 10597,
    name: "Daniel",
    amount: "+92,40€",
  },
  {
    id: 10598,
    name: "Lucía",
    amount: "+138,90€",
  },
  {
    id: 10599,
    name: "Pablo",
    amount: "+79,50€",
  },
];

export default function ImplementationAnimation({
  play,
}: Props) {
  const [cycle, setCycle] = useState(0);
  const [showPhone, setShowPhone] = useState(false);
  const [orderIndex, setOrderIndex] = useState(0);

  /*
  ============================================================
  CICLO

  0s    → entra 03
  0.5s  → entra web
  1.5s  → aparecen mejoras
  3.8s  → "Mejoras activas"
  5.5s  → web empieza a subir
  6.4s  → móvil entra
  6.8s  → empiezan pedidos
  12s   → desaparece todo
  13s   → nuevo ciclo
  ============================================================
  */

  useEffect(() => {
    if (!play) {
      setCycle(0);
      setShowPhone(false);
      setOrderIndex(0);
      return;
    }

    const phoneTimer = setTimeout(() => {
      setShowPhone(true);
    }, 6400);

    const cycleTimer = setTimeout(() => {
      setShowPhone(false);
      setOrderIndex(0);
      setCycle((value) => value + 1);
    }, 13000);

    return () => {
      clearTimeout(phoneTimer);
      clearTimeout(cycleTimer);
    };
  }, [play, cycle]);

  /*
  ============================================================
  PEDIDOS INFINITOS
  ============================================================
  */

  useEffect(() => {
    if (!play || !showPhone) return;

    const interval = setInterval(() => {
      setOrderIndex((value) => value + 1);
    }, 850);

    return () => clearInterval(interval);
  }, [play, showPhone]);

  return (
    <div
      className="
        relative
        h-[380px]
        w-full
        overflow-hidden
        rounded-[30px]
        bg-[#090a0f]
      "
    >
      {/* ================================================= */}
      {/* FONDO */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[#090a0f]" />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(124,58,237,.09),transparent_65%)]
        "
      />

      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [0.9, 1.1, 0.9],
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
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/10
          blur-[110px]
        "
      />

      {/* ================================================= */}
      {/* ESCENA COMPLETA */}
      {/* ================================================= */}

      <AnimatePresence mode="wait">
        {play && (
          <motion.div
            key={cycle}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
            "
          >
            {/* ================================================= */}
            {/* TÍTULO 03 */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: -18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                absolute
                left-1/2
                top-5
                z-[100]
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
                  bg-black/50
                  px-6
                  py-3
                  shadow-[0_10px_40px_rgba(0,0,0,.3)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-purple-500/15
                    text-lg
                    font-bold
                    text-purple-400
                  "
                >
                  03
                </div>

                <h2
                  className="
                    whitespace-nowrap
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  Ejecutamos el plan
                </h2>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* ESCENA WEB */}
            {/* ================================================= */}

            <AnimatePresence mode="wait">
              {!showPhone && (
                <motion.div
                  key={`website-${cycle}`}
                  initial={{
                    opacity: 0,
                    y: 45,
                    scale: 0.92,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -130,
                    scale: 0.88,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-[55%]
                    z-20
                    h-[235px]
                    w-[82%]
                    max-w-[470px]
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >
                  {/* ================================================= */}
                  {/* VENTANA */}
                  {/* ================================================= */}

                  <div
                    className="
                      relative
                      h-full
                      w-full
                      overflow-visible
                      rounded-[20px]
                      border
                      border-white/10
                      bg-[#101117]
                      shadow-[0_0_70px_rgba(0,0,0,.45)]
                    "
                  >
                    {/* ================================================= */}
                    {/* BARRA SUPERIOR */}
                    {/* ================================================= */}

                    <div
                      className="
                        flex
                        h-[42px]
                        items-center
                        gap-2
                        overflow-hidden
                        rounded-t-[20px]
                        border-b
                        border-white/10
                        bg-white/[0.025]
                        px-4
                      "
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                      <div
                        className="
                          ml-4
                          h-5
                          flex-1
                          rounded-full
                          bg-white/[0.035]
                        "
                      />
                    </div>

                    {/* ================================================= */}
                    {/* CONTENIDO */}
                    {/* ================================================= */}

                    <div className="relative flex h-[calc(100%-42px)] overflow-hidden rounded-b-[20px]">
                      {/* ================================================= */}
                      {/* PRODUCTO */}
                      {/* ================================================= */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.5,
                        }}
                        className="
                          flex
                          w-[42%]
                          items-center
                          justify-center
                          p-5
                        "
                      >
                        <div
                          className="
                            relative
                            flex
                            h-[145px]
                            w-[110px]
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-xl
                            border
                            border-white/10
                            bg-gradient-to-br
                            from-white/20
                            via-white/10
                            to-white/[0.03]
                            shadow-[0_15px_30px_rgba(0,0,0,.35)]
                          "
                        >
                          <img
                            src="/producto.png"
                            alt="Producto"
                            className="
                              relative
                              z-10
                              h-full
                              w-full
                              scale-[1.35]
                              object-contain
                            "
                          />

                          {/* Brillo */}

                          <motion.div
                            animate={{
                              x: ["-120%", "120%"],
                            }}
                            transition={{
                              duration: 2.8,
                              repeat: Infinity,
                              repeatDelay: 2,
                              ease: "easeInOut",
                            }}
                            className="
                              pointer-events-none
                              absolute
                              inset-y-0
                              z-20
                              w-1/3
                              skew-x-[-20deg]
                              bg-white/10
                              blur-xl
                            "
                          />
                        </div>
                      </motion.div>

                      {/* ================================================= */}
                      {/* INFORMACIÓN */}
                      {/* ================================================= */}

                      <div className="flex flex-1 flex-col justify-center pr-6">
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.7,
                          }}
                          className="space-y-3"
                        >
                          <div className="h-3 w-[85%] rounded-full bg-white/15" />

                          <div className="h-2.5 w-[65%] rounded-full bg-white/10" />

                          <div className="h-2.5 w-[72%] rounded-full bg-white/10" />

                          {/* ================================================= */}
                          {/* BOTÓN AÑADIR */}
                          {/* ================================================= */}

                          <motion.div
                            initial={{
                              scaleX: 0,
                            }}
                            animate={{
                              scaleX: 1,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: 1.1,
                            }}
                            className="
                              flex
                              h-[38px]
                              w-[105px]
                              origin-left
                              items-center
                              justify-center
                              rounded-lg
                              bg-gradient-to-r
                              from-purple-600
                              to-fuchsia-500
                              text-[11px]
                              font-semibold
                              text-white
                              shadow-[0_0_25px_rgba(168,85,247,.35)]
                            "
                          >
                            Añadir
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    {/* ================================================= */}
                    {/* DESTELLOS DE OPTIMIZACIÓN */}
                    {/* ================================================= */}

                    <OptimizationPulse
                      icon={<Zap className="h-4 w-4" />}
                      top="30%"
                      left="28%"
                      delay={1.5}
                    />

                    <OptimizationPulse
                      icon={<MousePointer2 className="h-4 w-4" />}
                      top="52%"
                      left="55%"
                      delay={2}
                    />

                    <OptimizationPulse
                      icon={<Sparkles className="h-4 w-4" />}
                      top="68%"
                      left="38%"
                      delay={2.4}
                    />

                    {/* ================================================= */}
                    {/* MEJORAS ACTIVAS */}
                    {/* ================================================= */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 35,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 3.4,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="
                        absolute
                        right-[-18px]
                        top-[32%]
                        z-[60]
                        flex
                        h-[105px]
                        w-[125px]
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#151620]/95
                        shadow-[0_0_45px_rgba(124,58,237,.35)]
                        backdrop-blur-xl
                      "
                    >
                      <motion.div
                        animate={{
                          rotate: [0, -8, 8, 0],
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                        }}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-purple-500/15
                          text-purple-400
                        "
                      >
                        <Rocket className="h-6 w-6" />
                      </motion.div>

                      <p
                        className="
                          mt-2
                          text-[11px]
                          font-medium
                          text-white
                        "
                      >
                        Mejoras activas
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================= */}
      {/* MÓVIL + PEDIDOS */}
      {/* ================================================= */}

      <AnimatePresence>
        {play && showPhone && (
          <PhoneOrders
            key={`phone-${cycle}`}
            orderIndex={orderIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ========================================================= */
/* PULSO DE OPTIMIZACIÓN */
/* ========================================================= */

function OptimizationPulse({
  icon,
  top,
  left,
  delay,
}: {
  icon: React.ReactNode;
  top: string;
  left: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1.15, 0.8],
      }}
      transition={{
        duration: 1.8,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
      }}
      style={{
        top,
        left,
      }}
      className="
        absolute
        z-20
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        bg-purple-500/20
        text-purple-400
        shadow-[0_0_25px_rgba(168,85,247,.4)]
      "
    >
      {icon}
    </motion.div>
  );
}

/* ========================================================= */
/* MÓVIL */
/* ========================================================= */

function PhoneOrders({
  orderIndex,
}: {
  orderIndex: number;
}) {
  /*
    Generamos una ventana móvil con una cola
    de pedidos que continúa entrando.
  */

  const visibleOrders = Array.from(
    { length: 4 },
    (_, index) => {
      const position =
        (orderIndex + index) % orders.length;

      return orders[position];
    }
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 430,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 35,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 430,
        scale: 0.92,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="
        absolute
        bottom-[-120px]
        left-1/2
        z-50
        h-[430px]
        w-[235px]
        -translate-x-1/2
        overflow-hidden
        rounded-[38px]
        border
        border-white/15
        bg-[#090b10]
        shadow-[0_0_90px_rgba(124,58,237,.38)]
      "
    >
      {/* ================================================= */}
      {/* DYNAMIC ISLAND */}
      {/* ================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-4
          z-30
          h-7
          w-[105px]
          -translate-x-1/2
          rounded-full
          bg-black
        "
      />

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div
        className="
          px-6
          pb-3
          pt-16
        "
      >
        <p className="text-[10px] text-white/40">
          Ventas
        </p>

        <h3
          className="
            mt-1
            text-[20px]
            font-semibold
            text-white
          "
        >
          Nuevos pedidos
        </h3>

        <div className="mt-4 h-px bg-white/5" />
      </div>

      {/* ================================================= */}
      {/* PEDIDOS */}
      {/* ================================================= */}

      <div
        className="
          relative
          h-[290px]
          overflow-hidden
          px-4
        "
      >
        <AnimatePresence initial={false}>
          {visibleOrders.map((order, index) => (
            <motion.div
              key={`${order.id}-${orderIndex}-${index}`}
              initial={{
                opacity: 0,
                y: 65,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -65,
                scale: 0.92,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="
                absolute
                left-4
                right-4
                flex
                h-[66px]
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.055]
                px-3
                shadow-[0_8px_25px_rgba(0,0,0,.18)]
              "
              style={{
                top: `${index * 73}px`,
              }}
            >
              {/* ICONO */}

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-purple-500/15
                  text-purple-400
                "
              >
                <ShoppingCart className="h-5 w-5" />
              </div>

              {/* INFO */}

              <div className="min-w-0 flex-1">
                <p
                  className="
                    truncate
                    text-[10px]
                    font-semibold
                    text-white
                  "
                >
                  NUEVO PEDIDO
                </p>

                <p
                  className="
                    mt-1
                    truncate
                    text-[9px]
                    text-white/40
                  "
                >
                  #{order.id} · {order.name}
                </p>
              </div>

              {/* PRECIO */}

              <p
                className="
                  shrink-0
                  text-[11px]
                  font-bold
                  text-emerald-400
                "
              >
                {order.amount}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}