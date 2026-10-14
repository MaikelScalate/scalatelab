"use client";

import { useState } from "react";

import {
  Users,
  ShoppingBag,
  Percent,
  CreditCard,
} from "lucide-react";

export default function Calculator() {

  const [sessions, setSessions] = useState(45000);
  const [orders, setOrders] = useState(810);
  const [conversion, setConversion] = useState(1.8);
  const [ticket, setTicket] = useState(65);

  const revenue = orders * ticket;

  // Escenario de mejora
const improvedConversion = conversion + 1;
const improvedTicket = ticket + 10;

// Pedidos potenciales, calculados sin el límite del slider
const improvedOrders = Math.round(
  sessions * (improvedConversion / 100)
);

// Facturación potencial
const improvedRevenue = improvedOrders * improvedTicket;

// Facturación adicional
const extraRevenue = improvedRevenue - revenue;

// Proyección anual
const annualImprovedRevenue = improvedRevenue * 12;
const annualExtraRevenue = extraRevenue * 12;
 
  return (
    <div
  className="
  mx-auto
  w-full
  pt-2
  max-w-7xl
  scale-100
lg:scale-84
  origin-top
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
      <div
  className="
grid
lg:grid-cols-[58%_42%]
"
>

        {/* IZQUIERDA */}

      <div
  className="
    border-b
    lg:border-b-0
    lg:border-r
    border-white/10
    p-3
sm:p-5
lg:p-10
    w-full
    flex
    flex-col
    items-center
    lg:items-stretch
"
>
          <h3
  className="
    mb-8
    w-full
    text-lg
    font-semibold
    text-white
  "
>
            Introduce tus métricas actuales
          </h3>

          <div
  className="
    w-full
    max-w-full
lg:max-w-none
    mx-auto
    space-y-5
    lg:max-w-none
    lg:space-y-7
"
>

            <div
  className="
    w-full
    min-h-[130px]
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-5
    lg:p-6
"
>

              <div className="grid w-full grid-cols-[1fr_130px] lg:grid-cols-[1fr_170px] items-start gap-3">

                <div className="flex-1 min-w-0">

                  <p className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-white sm:whitespace-nowrap">
                    <Users
                      size={17}
                      strokeWidth={2.3}
                      className="text-[#8B5CF6]"
                    />
                    Sesiones al mes
                  </p>

                  <p className="mt-1 text-xs lg:text-sm text-white/45 sm:whitespace-nowrap">
                    Visitas mensuales de tu tienda.
                  </p>

                </div>

                <div className="flex justify-end items-center gap-2 lg:gap-5">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={sessions.toLocaleString("es-ES")}
                    min={0}
                    max={500000}
                    step={500}
                    onChange={(e) => {
  const rawValue = e.target.value.replace(/\./g, "").trim();

  if (rawValue === "") return;

  let value = Number(rawValue);
  if (!Number.isFinite(value)) return;

  value = Math.max(0, Math.min(value, 500000));

  const newOrders = Math.min(
    50000,
    Math.floor(value * (conversion / 100))
  );

  setSessions(value);
  setOrders(newOrders);
}}
                    className="
    w-[93px]
lg:w-[110px]
tabular-nums
    lg:w-[110px]
    tabular-nums
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

                  <span className="text-xs lg:text-sm text-white/40">
  <span className="lg:hidden">500k</span>
  <span className="hidden lg:inline">500.000</span>
</span>

                </div>

              </div>

              <input
                type="range"
                min="0"
                max="500000"
                step="500"
                value={sessions}
                onChange={(e) => {
  const newSessions = Number(e.target.value);

  const newOrders = Math.min(
    50000,
    Math.floor(newSessions * (conversion / 100))
  );

  setSessions(newSessions);
  setOrders(newOrders);
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
    w-full
    min-h-[130px]
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-5
    lg:p-6
"
>
              <div className="grid w-full grid-cols-[1fr_130px] lg:grid-cols-[1fr_170px] items-start gap-3">

                <div className="flex-1 min-w-0">

                  <p className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-white sm:whitespace-nowrap">
                    <ShoppingBag
                      size={17}
                      strokeWidth={2.3}
                      className="text-[#8B5CF6]"
                    />
                    Pedidos al mes
                  </p>

                  <p className="mt-1 text-xs lg:text-sm text-white/45 sm:whitespace-nowrap">
                    Número de pedidos mensuales.
                  </p>

                </div>

                <div className="flex justify-end items-center gap-2 lg:gap-5">

                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={orders.toLocaleString("es-ES")}
                    min={1}
                    max={50000}
                    step={1}
                    onChange={(e) => {
  const rawValue = e.target.value.replace(/\./g, "").trim();

  if (rawValue === "") return;

  let value = Number(rawValue);
  if (!Number.isFinite(value)) return;

  const maxOrders = Math.min(
    50000,
    Math.floor(sessions * 0.1)
  );

  value = Math.max(0, Math.min(Math.round(value), maxOrders));

  setOrders(value);
  setConversion(
    sessions > 0 ? (value / sessions) * 100 : 0
  );
}}
                    className="
    w-[80px]
lg:w-[110px]
tabular-nums
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

                  <span className="text-xs lg:text-sm text-white/40">
                  50.000
                  </span>

                </div>

              </div>

              <input
                type="range"
                min="0"
max={Math.min(50000, Math.floor(sessions * 0.1))}
                step="1"
                value={orders}
                onChange={(e) => {
  const value = Number(e.target.value);

  const maxOrders = Math.min(
    50000,
    Math.floor(sessions * 0.1)
  );

  const newOrders = Math.max(
    0,
    Math.min(value, maxOrders)
  );

  setOrders(newOrders);
  setConversion(
    sessions > 0 ? (newOrders / sessions) * 100 : 0
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
    w-full
    min-h-[130px]
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-5
    lg:p-6
"
>
              <div className="grid w-full grid-cols-[1fr_130px] lg:grid-cols-[1fr_170px] items-start gap-3">

                <div className="flex-1 min-w-0">

                  <p className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-white sm:whitespace-nowrap">
                    <Percent
                      size={17}
                      strokeWidth={2.3}
                      className="text-[#8B5CF6]"
                    />
                    Tasa de conversión
                  </p>

                  <p className="mt-1 text-xs lg:text-sm text-white/45 sm:whitespace-nowrap">
                    Porcentaje de compradores.
                  </p>

                </div>

                <div className="flex justify-end items-center gap-2 lg:gap-5">

                  <input
                    type="text"
                    inputMode="decimal"
                    value={`${conversion.toFixed(1)} %`}
                    min={0}
                    max={10}
                    step={0.1}
                    onChange={(e) => {
  const rawValue = e.target.value
    .replace("%", "")
    .replace(",", ".")
    .trim();

  if (rawValue === "") return;

  let value = Number(rawValue);
  if (!Number.isFinite(value)) return;

  value = Math.max(0, Math.min(value, 10));

  const newOrders = Math.min(
    50000,
    Math.floor(sessions * (value / 100))
  );

  setConversion(value);
  setOrders(newOrders);
}}
                    className="
    w-[80px]
lg:w-[110px]
tabular-nums
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

                  <span className="text-xs lg:text-sm text-white/40">
                    10%
                  </span>

                </div>

              </div>

              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={conversion}
                onChange={(e) => {
  const newConversion = Number(e.target.value);

  const newOrders = Math.min(
    50000,
    Math.floor(sessions * (newConversion / 100))
  );

  setConversion(newConversion);
  setOrders(newOrders);
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
    w-full
    min-h-[130px]
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-5
    lg:p-6
"
>
              <div className="grid w-full grid-cols-[1fr_130px] lg:grid-cols-[1fr_170px] items-start gap-3">

                <div className="flex-1 min-w-0">

                  <p className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-white sm:whitespace-nowrap">
                    <CreditCard
                      size={17}
                      strokeWidth={2.3}
                      className="text-[#8B5CF6]"
                    />
                    Ticket medio
                  </p>

                  <p className="mt-1 text-xs lg:text-sm text-white/45 sm:whitespace-nowrap">
                    Importe medio por pedido.
                  </p>

                </div>

                <div className="flex justify-end items-center gap-2 lg:gap-5">

                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={`${ticket.toLocaleString("es-ES")} €`}
                    min={0}
                    max={250}
                    step={1}
                    onChange={(e) => {

                      let value = Number(
                        e.target.value
                          .replace(/\./g, "")
                          .replace("€", "")
                          .trim()
                      );

                      if (value < 0) value = 0;
                      if (value > 250) value = 250;

                      setTicket(value);

                    }}
                    className="
    w-[80px]
lg:w-[110px]
tabular-nums
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

                  <span className="text-xs lg:text-sm text-white/40">
                    250€
                  </span>

                </div>

              </div>

              <input
                type="range"
                min="0"
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

        <div
  className="
    p-6
    lg:p-10
    w-full
    flex
    flex-col
    items-center
    lg:items-stretch
"
>

          <div
  className="
    w-full
    max-w-full
lg:max-w-none
    mx-auto
    space-y-5
    lg:max-w-none
    lg:space-y-6
"
>

            {/* FACTURACIÓN */}

            <div
  className="
        w-full
        w-full
lg:max-w-none
        lg:max-w-none
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        text-center
      "
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Tu facturación mensual estimada
              </p>
              <h2
  className="
    mt-4
    h-[72px]
    lg:h-[88px]
    flex
    items-center
    justify-center
    whitespace-nowrap
    overflow-hidden
    text-ellipsis
    bg-gradient-to-r
    from-[#6D5BFF]
    to-[#E84AC2]
    bg-clip-text
    text-[30px]
    sm:text-[42px]
    lg:text-6xl
    font-bold
    text-transparent
    tabular-nums
"
>
                {revenue.toLocaleString("es-ES")}€
              </h2>

            </div>

            {/* POTENCIAL */}

            <div
  className="
        w-full
lg:max-w-none
        lg:max-w-none
        rounded-3xl
        border
        border-purple/20
        bg-gradient-to-br
        from-purple/10
        to-pink-500/10
        p-7
      "
            >
              <p className="text-xs uppercase tracking-[0.22em] text-pink-400">
  Veamos cuánto dejas sobre la mesa
</p>

<p className="mt-4 text-white/70">
  Mejorando solo tu tasa de conversión un 1% y tu ticket medio 10€:
</p>
<h3
  className="
    mt-5
    text-3xl
    lg:text-5xl
    font-bold
    bg-gradient-to-r
    from-[#6D5BFF]
    to-[#E84AC2]
    bg-clip-text
    text-transparent
    tabular-nums
  "
>
  {improvedRevenue.toLocaleString("es-ES")} €
</h3>

<p className="mt-2 text-sm text-white/60">
  Facturación potencial mensual
</p>

<p className="mt-5 text-2xl font-semibold text-white tabular-nums">
  {annualImprovedRevenue.toLocaleString("es-ES")} €
</p>

<p className="mt-1 text-sm text-white/50">
  Facturación potencial anual
</p>

<div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
  <p className="text-sm text-white/60">
    Incremento estimado de facturación
  </p>

  <p className="mt-2 text-2xl font-bold text-white tabular-nums">
    +{extraRevenue.toLocaleString("es-ES")} €
  </p>

  <p className="text-sm text-white/60">
    adicionales al mes
  </p>

  <p className="mt-4 text-xl font-semibold text-white tabular-nums">
    +{annualExtraRevenue.toLocaleString("es-ES")} €
  </p>

  <p className="text-sm text-white/60">
    adicionales al año
  </p>
</div>
</div>
          </div> {/* fin space-y-6 */}

        </div> {/* fin p-10 */}

      </div> {/* fin grid */}

    </div>
  )
}