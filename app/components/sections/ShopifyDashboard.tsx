"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  House,
  ShoppingBag,
  Package,
  Users,
  BarChart3,
  Megaphone,
  BadgePercent,
  Grid2x2,
  Settings,
} from "lucide-react";
export default function ShopifyDashboard() {
    const MAX_SALES = 100_000;

const [sales, setSales] = useState(48200);
const [orders, setOrders] = useState(1248);
const [conversion] = useState(4.9);

const [orderId, setOrderId] = useState(10542);
const [orderAmount, setOrderAmount] = useState(72.45);

const [showOrder, setShowOrder] = useState(false);

const customers = [
  "María",
  "Carlos",
  "Lucía",
  "David",
  "Andrea",
  "Sofía",
  "Alejandro",
  "Marta",
];

const [customer, setCustomer] = useState(customers[0]);
useEffect(() => {
  const interval = setInterval(() => {

    const amount = Number(
      (Math.random() * 90 + 30).toFixed(2)
    );

    const randomCustomer =
      customers[
        Math.floor(Math.random() * customers.length)
      ];

    setCustomer(randomCustomer);

    setOrderAmount(amount);

    setOrderId((prev) => prev + 1);

    setShowOrder(true);

    setSales((prev) => {

      const next = prev + amount;

      return next >= MAX_SALES
        ? 48200
        : next;
    });

    setOrders((prev) => prev + 1);

    setTimeout(() => {

      setShowOrder(false);

    }, 1800);

  }, 2500);

  return () => clearInterval(interval);

}, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 180,
        scale: 0.95,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        left-0
        top-1/2
        -translate-y-1/2

        h-[600px]
        w-[900px]

        overflow-hidden

        rounded-[20px]

        border
        border-white/10

        bg-[#111111]/70

        backdrop-blur-xl
      "
    >
        <header
  className="
    flex
    h-7
    items-center

    border-b
    border-white/10

    bg-[#1a1a1d]

    px-5
  "
>
  <div className="flex gap-2">

    <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />

    <div className="h-3 w-3 rounded-full bg-[#febc2e]" />

    <div className="h-3 w-3 rounded-full bg-[#28c840]" />

  </div>
</header>
      <div className="flex h-[572px]">

        {/* Sidebar */}

<aside
  className="
    flex
    h-full
    w-[150px]
    flex-col

    border-r
    border-white/10

    bg-white/[0.02]
  "
>
  {/* Logo */}

  <div
    className="
      flex
      items-center
      gap-3

      border-b
      border-white/10

      px-4
      py-5
    "
  >
    <div
  className="
    flex
    h-10
    w-10
    items-center
    justify-center
  "
>
  <Image
    src="/logo-scalate.png"
    alt="Scalate Lab"
    width={40}
    height={40}
    className="h-10 w-10 object-contain"
  />
</div>

    <div>
      <p className="text-sm font-semibold text-white">
        SCALATE
      </p>

      <p className="text-[10px] tracking-[0.25em] text-white/40">
        LAB
      </p>
    </div>
  </div>

  {/* Menú */}

  <div
  className="
    flex
    flex-col

    gap-2

    px-3
    py-5
  "
>
    <button className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2 text-sm text-white">
      <House size={16} />
      Inicio
    </button>

    <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5">
      <ShoppingBag size={16} />
      Pedidos
    </button>

    <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5">
      <Package size={16} />
      Productos
    </button>

    <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5">
      <Users size={16} />
      Clientes
    </button>

    <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5">
      <BarChart3 size={16} />
      Análisis
    </button>

    <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5">
      <Megaphone size={16} />
      Marketing
    </button>

    <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5">
      <BadgePercent size={16} />
      Descuentos
    </button>

    <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5">
      <Grid2x2 size={16} />
      Apps
    </button>
  </div>

 <div className="mt-auto border-t border-white/10 p-3">
    <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5">
      <Settings size={16} />
      Ajustes
    </button>
  </div>
</aside>
{/* Contenido */}

<div className="flex flex-1 flex-col">

  

  <main className="flex-1 p-8">
<div className="mb-6 flex items-center justify-between">

  <div>

    <p className="text-xs uppercase tracking-[0.25em] text-white/35">
      Dashboard
    </p>

    <h2 className="mt-1 text-2xl font-semibold text-white">
      Resumen general
    </h2>

  </div>

  <button
    className="
      rounded-xl
      border
      border-white/10

      bg-white/[0.03]

      px-4
      py-2

      text-sm
      text-white/70
    "
  >
    Últimos 30 días
  </button>

</div>
 <div className="grid grid-cols-3 gap-5">

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

    <p className="text-xs text-white/50">
      Ventas
    </p>

   <p
  className="
    mt-2
    w-full
    overflow-hidden
    whitespace-nowrap
    text-[28px]
    font-bold
    tracking-tight
    leading-none
    text-white
    tabular-nums
  "
>
  {sales.toLocaleString("es-ES")} €
</p>

    <p className="mt-4 text-xs font-medium text-emerald-400">
      +12.4%
    </p>

  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

    <p className="text-xs text-white/50">
      Pedidos
    </p>

    <p className="mt-2 text-[30px] font-bold tracking-tight text-white">
      {orders.toLocaleString("es-ES")}
    </p>

    <p className="mt-4 text-xs font-medium text-emerald-400">
      +8.2%
    </p>

  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

    <p className="text-xs text-white/50">
      Conversión
    </p>

    <p className="mt-2 text-[30px] font-bold tracking-tight text-white">
      {conversion.toFixed(1)}%
    </p>

    <p className="mt-4 text-xs font-medium text-emerald-400">
      +0.7%
    </p>

  </div>

</div>

  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

  <div className="mb-6 flex items-center justify-between">

    <div>

      <p className="text-sm font-medium text-white">
        Ventas
      </p>

      <p className="mt-1 text-xs text-white/45">
        Últimos 30 días
      </p>

    </div>

    <p className="text-sm font-medium text-emerald-400">
      +18.7%
    </p>

  </div>

  <div className="relative h-[190px]">

    {/* Líneas horizontales */}

    <div className="absolute inset-0 flex flex-col justify-between">

      <div className="border-t border-white/5" />
      <div className="border-t border-white/5" />
      <div className="border-t border-white/5" />
      <div className="border-t border-white/5" />
      <div className="border-t border-white/5" />

    </div>

    {/* Línea del gráfico */}

    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 700 190"
      preserveAspectRatio="none"
    >
      <path
        d="
          M0 145
          C70 120 120 140 170 105
          S280 60 340 95
          S430 160 500 90
          S620 40 700 65
        "
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>

  </div>

</div>

  <div className="mt-6 grid grid-cols-2 gap-5">

    <div className="h-44 rounded-2xl border border-white/10 bg-white/[0.03]" />

    <div className="h-44 rounded-2xl border border-white/10 bg-white/[0.03]" />

  </div>

</main>
</div>      {/* Contenido */}

</div>      {/* Flex */}
<AnimatePresence>

  {showOrder && (

    <motion.div

      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotate: -5,
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: -2,
      }}

      exit={{
        opacity: 0,
      }}

      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}

      className="
  absolute

  top-[350px]
  left-[200px]

  z-50

  w-[380px]

  rounded-[24px]

  border
  border-white/20

  bg-black/55

  p-5

  backdrop-blur-2xl

  shadow-[0_30px_120px_rgba(0,0,0,.55)]
"
    >

      <div className="flex items-center gap-5">

  <div
    className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-xl
      bg-emerald-500/20
    "
  >
    <ShoppingBag
      className="text-emerald-400"
      size={28}
    />
  </div>

  <div className="flex-1">

    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
      Nuevo pedido
    </p>

    <h3 className="mt-1 text-xl font-semibold text-white">
      #{orderId}
    </h3>

    <p className="mt-1 text-sm text-white/60">
      {customer}
    </p>

  </div>

  <div>

    <p className="text-2xl font-bold text-emerald-400">
      +{orderAmount.toFixed(2)}€
    </p>

  </div>

</div>

    </motion.div>

  )}

</AnimatePresence>
</motion.div>
  );
}