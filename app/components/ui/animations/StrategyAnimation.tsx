"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  ShoppingCart,
  Users,
  Sparkles,
} from "lucide-react";

type Props = {
  play: boolean;
};

export default function StrategyAnimation({ play }: Props) {
  const [showOrders, setShowOrders] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!play) {
      setShowOrders(false);
      setCycle(0);
      return;
    }

    setShowOrders(false);
    setCycle((value) => value + 1);

    const ordersTimer = setTimeout(() => {
      setShowOrders(true);
    }, 5200);

    const restartTimer = setTimeout(() => {
      setShowOrders(false);
      setCycle((value) => value + 1);
    }, 10500);

    return () => {
      clearTimeout(ordersTimer);
      clearTimeout(restartTimer);
    };
  }, [play]);

  if (!play) {
    return (
      <div className="h-full w-full rounded-[30px] bg-[#0b0c11]" />
    );
  }

  return (
    <div
      className="
        relative
        h-[380px]
        w-full
        overflow-hidden
        rounded-[30px]
        bg-[#0b0c11]
      "
    >

      {/* ===================================================== */}
      {/* FONDO */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(124,58,237,.10),transparent_65%)]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/10
          blur-[110px]
        "
      />

      {/* ===================================================== */}
      {/* ESCENA COMPLETA */}
      {/* ===================================================== */}

      <motion.div
        key={cycle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
      >

        {/* =================================================== */}
        {/* TÍTULO */}
        {/* =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            absolute
            left-1/2
            top-5
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
              bg-black/45
              px-6
              py-3
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
              02
            </div>

            <h2 className="whitespace-nowrap text-lg font-semibold text-white">
              Diseñamos la estrategia
            </h2>
          </div>
        </motion.div>

        {/* =================================================== */}
        {/* LÍNEA IZQUIERDA */}
        {/* =================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 1.1,
            ease: "easeOut",
          }}
          className="
            absolute
            left-[18%]
            top-[57%]
            z-10
            h-px
            w-[17%]
            origin-left
            bg-gradient-to-r
            from-transparent
            via-purple-500/50
            to-purple-400
          "
        />

        {/* =================================================== */}
        {/* LÍNEA QUICK WINS */}
        {/* =================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 2.2,
            ease: "easeOut",
          }}
          className="
            absolute
            left-[62%]
            top-[43%]
            z-10
            h-px
            w-[13%]
            origin-left
            bg-gradient-to-r
            from-purple-400
            to-purple-400/20
          "
        />

        {/* =================================================== */}
        {/* LÍNEA CONVERSIÓN */}
        {/* =================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 2.5,
            ease: "easeOut",
          }}
          className="
            absolute
            left-[62%]
            top-[57%]
            z-10
            h-px
            w-[13%]
            origin-left
            bg-gradient-to-r
            from-purple-400
            to-purple-400/20
          "
        />

        {/* =================================================== */}
        {/* LÍNEA RECURRENCIA */}
        {/* =================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 2.8,
            ease: "easeOut",
          }}
          className="
            absolute
            left-[62%]
            top-[71%]
            z-10
            h-px
            w-[13%]
            origin-left
            bg-gradient-to-r
            from-purple-400
            to-purple-400/20
          "
        />

        {/* =================================================== */}
        {/* ANALYTICS */}
        {/* =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            type: "spring",
            stiffness: 90,
          }}
          className="
            absolute
            left-[7%]
            top-[43%]
            z-20
            flex
            h-[82px]
            w-[92px]
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
          "
        >
          <div
            className="
              absolute
              inset-0
              rounded-2xl
              bg-purple-500/10
              blur-xl
            "
          />

          <BarChart3
            className="
              relative
              z-10
              h-10
              w-10
              text-purple-400
            "
          />
        </motion.div>

        {/* =================================================== */}
        {/* PANEL CENTRAL */}
        {/* =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 1.7,
            type: "spring",
            stiffness: 90,
          }}
          className="
            absolute
            left-1/2
            top-[57%]
            z-30
            flex
            h-[120px]
            w-[120px]
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            items-center
            justify-center
            rounded-[20px]
            border
            border-purple-400/30
            bg-gradient-to-br
            from-purple-500/20
            via-[#171426]
            to-[#0f1017]
            shadow-[0_0_55px_rgba(139,92,246,.25)]
          "
        >

          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px rgba(168,85,247,.15)",
                "0 0 35px rgba(168,85,247,.35)",
                "0 0 15px rgba(168,85,247,.15)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              bg-purple-500/15
            "
          >
            <ShoppingCart
              className="
                h-8
                w-8
                text-purple-400
              "
            />
          </motion.div>

          <p
            className="
              mt-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white/60
            "
          >
            Estrategia
          </p>

        </motion.div>

        {/* =================================================== */}
        {/* QUICK WINS */}
        {/* =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 3,
          }}
          className="
            absolute
            right-[7%]
            top-[36%]
            z-20
            flex
            h-[54px]
            w-[105px]
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            px-3
            backdrop-blur-xl
          "
        >

          <Sparkles className="h-5 w-5 text-purple-400" />

          <div>
            <p className="text-[10px] font-semibold text-white">
              Quick Wins
            </p>

            <p className="text-[8px] text-white/40">
              Alto impacto
            </p>
          </div>

        </motion.div>

        {/* =================================================== */}
        {/* CONVERSIÓN */}
        {/* =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 3.3,
          }}
          className="
            absolute
            right-[7%]
            top-[52%]
            z-20
            flex
            h-[54px]
            w-[105px]
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            px-3
            backdrop-blur-xl
          "
        >

          <Sparkles className="h-5 w-5 text-purple-400" />

          <div>
            <p className="text-[10px] font-semibold text-white">
              Conversión
            </p>

            <p className="text-[8px] text-white/40">
              Prioridad alta
            </p>
          </div>

        </motion.div>

        {/* =================================================== */}
        {/* RECURRENCIA */}
        {/* =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 3.6,
          }}
          className="
            absolute
            right-[7%]
            top-[68%]
            z-20
            flex
            h-[54px]
            w-[105px]
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            px-3
            backdrop-blur-xl
          "
        >

          <Users className="h-5 w-5 text-purple-400" />

          <div>
            <p className="text-[10px] font-semibold text-white">
              Recurrencia
            </p>

            <p className="text-[8px] text-white/40">
              Fidelización
            </p>
          </div>

        </motion.div>

        {/* =================================================== */}
        {/* PEDIDOS */}
        {/* =================================================== */}

        <AnimatePresence>

          {showOrders && (
            <>
              <OrderCard
                className="left-[8%] top-[20%]"
                delay={0}
                number="#10592"
                name="David"
                amount="+100,79€"
              />

              <OrderCard
                className="left-[36%] top-[24%]"
                delay={0.35}
                number="#10593"
                name="Laura"
                amount="+84,50€"
              />

              <OrderCard
                className="right-[5%] top-[19%]"
                delay={0.7}
                number="#10594"
                name="María"
                amount="+129,90€"
              />
            </>
          )}

        </AnimatePresence>

      </motion.div>

    </div>
  );
}


/* ========================================================= */
/* TARJETA DE PEDIDO */
/* ========================================================= */

function OrderCard({
  className,
  delay,
  number,
  name,
  amount,
}: {
  className: string;
  delay: number;
  number: string;
  name: string;
  amount: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 0.9,
      }}
      transition={{
        duration: 0.65,
        delay,
      }}
      className={`
        absolute
        ${className}
        z-50
        w-[150px]
        rounded-[18px]
        border
        border-white/10
        bg-black/75
        px-4
        py-3
        shadow-[0_0_30px_rgba(168,85,247,.12)]
        backdrop-blur-xl
      `}
    >

      <div className="flex items-center justify-between">

        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
          Nuevo pedido
        </p>

        <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />

      </div>

      <div className="mt-2 flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold text-white">
            {number}
          </p>

          <p className="text-[9px] text-white/40">
            {name}
          </p>
        </div>

        <p className="text-sm font-bold text-emerald-400">
          {amount}
        </p>

      </div>

    </motion.div>
  );
}