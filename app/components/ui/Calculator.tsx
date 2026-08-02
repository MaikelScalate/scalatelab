"use client";

import { useState } from "react";

import {
  Users,
  ShoppingBag,
  Percent,
  CreditCard,
} from "lucide-react";

export default function Calculator() {

  const [sessions, setSessions] = useState(50000);
  const [orders, setOrders] = useState(1250);
 const [conversion, setConversion] = useState(2.5);
 const [ticket, setTicket] = useState(51);

const revenue = orders * ticket;

const improvedConversion = conversion + 1;

const improvedTicket = ticket + 10;

const improvedOrders = Math.round(
  sessions * (improvedConversion / 100)
);

const improvedRevenue =
  improvedOrders * improvedTicket;

const extraRevenue =
  improvedRevenue - revenue;
  return (
    <div
      className="
  mx-auto
  max-w-7xl
  overflow-hidden
  rounded-[34px]
  border
  border-white/10
  shadow-[0_0_80px_rgba(130,60,255,.08)]
"
style={{
  background:
    "radial-gradient(circle at top left, rgba(109,91,255,.10), transparent 35%), radial-gradient(circle at bottom right, rgba(232,74,194,.08), transparent 45%), #0D0D12",
}}
    >
      <div className="grid lg:grid-cols-[58%_42%]">

        {/* IZQUIERDA */}

        <div className="border-r border-white/10 p-10">
        <h3 className="mb-8 text-lg font-semibold text-white">
  Introduce tus métricas actuales
</h3>

<div className="space-y-7">

  <div
    className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-6
    "
  >

    <div className="flex items-start justify-between gap-8">

  <div>

    <p className="flex items-center gap-2 text-sm font-semibold text-white">
      <Users
        size={17}
        strokeWidth={2.3}
        className="text-[#8B5CF6]"
      />
      Sesiones al mes
    </p>

    <p className="mt-1 text-sm text-white/45">
      Visitas mensuales de tu tienda.
    </p>

  </div>

  <div className="flex items-center gap-5">
      <input
  style={{
    width: `${Math.max(
      sessions.toLocaleString("es-ES").length + 2,
      8
    )}ch`,
  }}
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  value={sessions.toLocaleString("es-ES")}
  min={500}
  max={150000}
  step={500}
  onChange={(e) => {

    let value = Number(
  e.target.value.replace(/\./g, "")
);

    if (value < 500) value = 500;
    if (value > 150000) value = 150000;

    setSessions(value);

    const newOrders = Math.min(
  Math.round(value * (conversion / 100)),
  10000
);

setOrders(newOrders);

  }}
  className="
    w-auto
    rounded-2xl
    border
    border-white/10
    bg-[#18181D]
    h-12
px-3
    text-center
    font-semibold
    text-white
    outline-none
  "
/>

      <span className="text-white/40">
  150.000
</span>

</div>

</div>

<input
  type="range"
  min="500"
max="150000"
step="500"
  value={sessions}
  onChange={(e) => {
  const newSessions = Number(e.target.value);

  setSessions(newSessions);

  setOrders(
    Math.round(
      newSessions * (conversion / 100)
    )
  );
}}
  className="
    mt-3
    w-full
    accent-[#8B5CF6]
"
/>

  </div>
{/* PEDIDOS */}

<div
  className="
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-6
  "
>
  <p className="flex items-center gap-2 text-sm font-semibold text-white">
  <ShoppingBag
    size={17}
    strokeWidth={2.3}
    className="text-[#8B5CF6]"
  />
  Pedidos al mes
</p>

  <p className="mt-1 text-sm text-white/45">
    Número de pedidos mensuales.
  </p>

  <div className="mt-1 flex items-center justify-end gap-5">

    <input
  type="text"
inputMode="numeric"
pattern="[0-9]*"
value={orders.toLocaleString("es-ES")}
  style={{
  width: `${Math.max(
    orders.toLocaleString("es-ES").length + 2,
    7
  )}ch`,
}}
  min={1}
  max={10000}
  step={1}
  onChange={(e) => {

  let value = Number(
  e.target.value.replace(/\./g, "")
);

  if (value < 1) value = 1;
  if (value > 10000) value = 10000;

  let newConversion =
    (value / sessions) * 100;

  if (newConversion > 10) {
    newConversion = 10;
    value = Math.round(
      sessions * 0.10
    );
  }

  setOrders(value);
  setConversion(newConversion);

}}
  className="
    w-auto
    rounded-2xl
    border
    border-white/10
    bg-[#18181D]
    h-12
px-3
    text-center
    font-semibold
    text-white
    outline-none
  "
/>

    <span className="text-white/40">
      10.000
    </span>
  </div>

  <input
  type="range"
  min="1"
max="10000"
step="1"
  value={orders}
  onChange={(e) => {
  const newOrders = Number(e.target.value);

  setOrders(newOrders);

  setConversion(
    (newOrders / sessions) * 100
  );
}}
  className="
    mt-3
    w-full
    accent-[#8B5CF6]
"
/>
</div>

{/* CONVERSIÓN */}

<div
  className="
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-6
  "
>
  <p className="flex items-center gap-2 text-sm font-semibold text-white">
  <Percent
    size={17}
    strokeWidth={2.3}
    className="text-[#8B5CF6]"
  />
  Tasa de conversión
</p>

  <p className="mt-1 text-sm text-white/45">
    Porcentaje de visitantes que compran.
  </p>

  <div className="mt-1 flex items-center justify-end gap-5">

    <input
 type="text"
inputMode="decimal"
value={`${conversion.toFixed(1)} %`}
style={{
  width: `${Math.max(
    `${conversion.toFixed(1)} %`.length + 3,
    8
  )}ch`,
}}
  min={0}
  max={10}
  step={0.1}
  onChange={(e) => {

    let value = Number(
  e.target.value
    .replace("%", "")
    .replace(",", ".")
    .trim()
);

    if (value < 0) value = 0;
    if (value > 10) value = 10;

    setConversion(value);

    setOrders(
      Math.round(
        sessions * (value / 100)
      )
    );

  }}
  className="
    w-auto
    rounded-2xl
    border
    border-white/10
    bg-[#18181D]
    h-12
px-3
    text-center
    font-semibold
    text-white
    outline-none
  "
/>

    <span className="text-white/40">
      10%
    </span>
  </div>

  <input
  type="range"
  min="0"
  max="10"
  step="0.1"
  value={conversion}
  onChange={(e) => {
  const newConversion = Number(e.target.value);

  setConversion(newConversion);

  setOrders(
    Math.round(
      sessions * (newConversion / 100)
    )
  );
}}
  className="
    mt-3
    w-full
    accent-[#8B5CF6]
"
/>
</div>

{/* TICKET */}

<div
  className="
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-6
  "
>
  <p className="flex items-center gap-2 text-sm font-semibold text-white">
  <CreditCard
    size={17}
    strokeWidth={2.3}
    className="text-[#8B5CF6]"
  />
  Ticket medio
</p>

  <p className="mt-1 text-sm text-white/45">
    Importe medio por pedido.
  </p>

  <div className="mt-1 flex items-center justify-end gap-5">

    <input
    style={{
  width: `${Math.max(
    `${ticket.toLocaleString("es-ES")} €`.length + 3,
    8
  )}ch`,
}}
  type="text"
inputMode="numeric"
pattern="[0-9]*"
value={`${ticket.toLocaleString("es-ES")} €`}
  min={10}
  max={250}
  step={1}
  onChange={(e) => {

    let value = Number(
  e.target.value
    .replace(/\./g, "")
    .replace("€", "")
    .trim()
);

    if (value < 10) value = 10;
    if (value > 250) value = 250;

    setTicket(value);

  }}
  className="
    w-auto
    rounded-2xl
    border
    border-white/10
    bg-[#18181D]
    h-12
px-3
    text-center
    font-semibold
    text-white
    outline-none
  "
/>

    <span className="text-white/40">
      250€
    </span>
  </div>

  <input
  type="range"
  min="10"
  max="250"
  value={ticket}
  onChange={(e) => setTicket(Number(e.target.value))}
  className="
    mt-3
    w-full
    accent-[#8B5CF6]
"
/>
</div>
</div>

        </div>

       {/* ================= DERECHA ================= */}

<div className="p-10">

  <div className="space-y-6">

    {/* FACTURACIÓN */}

    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        text-center
      "
    >
      <p className="text-xs uppercase tracking-[0.22em] text-white/45">
        Tu facturación mensual
      </p>
      <h2
        className="
          mt-4
          bg-gradient-to-r
          from-[#6D5BFF]
          to-[#E84AC2]
          bg-clip-text
          text-6xl
          font-bold
          text-transparent
        "
      >
        {revenue.toLocaleString("es-ES")}€
      </h2>

      <p className="mt-3 text-sm text-white/50">
        Esta es tu facturación mensual estimada.
      </p>
    </div>

    {/* POTENCIAL */}

    <div
      className="
        rounded-3xl
        border
        border-purple/20
        bg-gradient-to-br
        from-purple/10
        to-pink-500/10
        p-7
      "
    >
      <p className="text-xs uppercase tracking-[0.22em] text-purple">
        Veamos cuánto dejas sobre la mesa
      </p>

      <p className="mt-4 text-white/70">
        Mejorando solo un 1% tu tasa de conversión y 10€ tu ticket medio podrías facturar:
      </p>

      <h3
        className="
          mt-5
          bg-gradient-to-r
          from-[#6D5BFF]
          to-[#E84AC2]
          bg-clip-text
          text-5xl
          font-bold
          text-transparent
        "
      >
        {improvedRevenue.toLocaleString("es-ES")}€
      </h3>

      <div
        className="
          mt-4
          inline-flex
          rounded-full
          bg-gradient-to-r
          from-[#5B4EFF]
          to-[#E84AC2]
          px-5
          py-2
          text-sm
          font-semibold
          text-white
        "
      >
        +{extraRevenue.toLocaleString("es-ES")}€ adicionales al mes
      </div>
    </div>

    {/* PUNTUACIÓN */}

    <div
      className="
        flex
        items-center
        gap-6
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
      "
    >
      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border-[6px]
          border-yellow-400
          text-3xl
          font-bold
          text-yellow-400
        "
      >
        62
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/45">
          Puntuación
        </p>

        <p className="mt-2 text-2xl font-bold text-yellow-400">
          Media
        </p>

        <p className="mt-1 text-sm text-white/55">
          Tu tienda tiene margen de mejora.
        </p>
      </div>
    </div>
</div>
  </div>
</div>
</div>
  );
}