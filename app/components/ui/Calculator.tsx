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

  const improvedConversion = conversion + 1;

  const improvedTicket = ticket + 10;

  const improvedOrders = Math.min(
  Math.round(
    sessions * (improvedConversion / 100)
  ),
  7000
);

  const improvedRevenue =
    improvedOrders * improvedTicket;

  const extraRevenue =
    improvedRevenue - revenue;
  let conversionScore = 0;

if (conversion >= 5) conversionScore = 30;
else if (conversion >= 4) conversionScore = 25;
else if (conversion >= 3) conversionScore = 20;
else if (conversion >= 2) conversionScore = 14;
else if (conversion >= 1) conversionScore = 8;

let ticketScore = 0;

if (ticket >= 150) ticketScore = 25;
else if (ticket >= 120) ticketScore = 22;
else if (ticket >= 100) ticketScore = 18;
else if (ticket >= 80) ticketScore = 14;
else if (ticket >= 60) ticketScore = 10;
else ticketScore = 0;

let sessionsScore = 0;

if (sessions >= 150000) sessionsScore = 15;
else if (sessions >= 100000) sessionsScore = 12;
else if (sessions >= 70000) sessionsScore = 9;
else if (sessions >= 40000) sessionsScore = 6;
else if (sessions >= 20000) sessionsScore = 3;

let revenueScore = 0;

if (revenue >= 1300000) revenueScore = 25;
else if (revenue >= 700000) revenueScore = 20;
else if (revenue >= 350000) revenueScore = 15;
else if (revenue >= 150000) revenueScore = 10;
else if (revenue >= 50000) revenueScore = 5;

let score = Math.min(
  100,
  conversionScore +
  ticketScore +
  sessionsScore +
  revenueScore
);
if (
  revenue >= 1400000 &&
  conversion >= 5 &&
  sessions >= 100000 &&
  ticket >= 200
) {
  score = 100;
}
  let scoreTitle = "";
  let scoreText = "";
const isTop = revenue >= 1300000;
  if (score < 50) {
    scoreTitle = "Baja";
    scoreText = "Tu tienda pierde ventas.";
  }
  else if (score < 75) {
    scoreTitle = "Media";
    scoreText = "Hay mucho potencial de mejora.";
  }
  else if (score < 90) {
    scoreTitle = "Excelente";
    scoreText = "¡Excelente! Y puedes escalar mucho más.";
  }
  else if (isTop) {
  scoreTitle = "Top 1%";
  scoreText = "Formas parte del 1% en E-commerce.";
}
else {
  scoreTitle = "Excelente";
  scoreText = "¡Excelente! Y puedes escalar mucho más.";
}
  return (
    <div
  className="
  mx-auto
  w-full
  max-w-7xl
  scale-100
lg:scale-90
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
    w-full
lg:max-w-none
    lg:max-w-none
    rounded-3xl
    border
      border-white/10
      bg-white/[0.03]
    p-5 lg:p-6
    "
            >

              <div className="flex w-full items-start gap-3">

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

                <div className="flex shrink-0 w-[130px] justify-end items-center gap-2 lg:w-[170px] lg:gap-5">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={sessions.toLocaleString("es-ES")}
                    min={0}
                    max={150000}
                    step={500}
                    onChange={(e) => {

                      let value = Number(
                        e.target.value.replace(/\./g, "")
                      );

                      if (value < 0) value = 0;
                      if (value > 150000) value = 150000;

                      setSessions(value);

                      const newOrders = Math.min(
                        Math.round(value * (conversion / 100)),
                        7000
                      );

                      setOrders(newOrders);

                    }}
                    className="
    w-[90px]
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
  <span className="lg:hidden">150k</span>
  <span className="hidden lg:inline">150.000</span>
</span>

                </div>

              </div>

              <input
                type="range"
                min="0"
                max="150000"
                step="500"
                value={sessions}
                onChange={(e) => {
                  const newSessions = Number(e.target.value);

                  setSessions(newSessions);

                  setOrders(
  Math.min(
    Math.round(
      newSessions * (conversion / 100)
    ),
    7000
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
    w-full
    w-full
lg:max-w-none
    lg:max-w-none
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
  p-5 lg:p-6
  "
            >
              <div className="flex w-full items-start gap-3">

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

                <div className="flex shrink-0 w-[130px] justify-end items-center gap-2 lg:w-[170px] lg:gap-5">

                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={orders.toLocaleString("es-ES")}
                    min={1}
                    max={7000}
                    step={1}
                    onChange={(e) => {

                      let value = Number(
                        e.target.value.replace(/\./g, "")
                      );

                      if (value < 1) value = 1;
                      if (value > 7000) value = 7000;

                      let newConversion =
                        (value / sessions) * 100;

                      const maxConversion = 10;

if (newConversion > maxConversion) {
  newConversion = maxConversion;
  value = Math.round(
    sessions * (maxConversion / 100)
  );
}

                      setOrders(value);
                      setConversion(newConversion);

                    }}
                    className="
    w-[95px] lg:w-[110px]
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
                  7000
                  </span>

                </div>

              </div>

              <input
                type="range"
                min="1"
                max="7000"
                step="1"
                value={orders}
                onChange={(e) => {
                  const newOrders = Number(e.target.value);

                  setOrders(newOrders);

                  const newConversion = Math.min(
  (newOrders / sessions) * 100,
  10
);

setConversion(newConversion);
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
    w-full
lg:max-w-none
    lg:max-w-none
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
  p-5 lg:p-6
  "
            >
              <div className="flex w-full items-start gap-3">

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

                <div className="flex shrink-0 w-[130px] justify-end items-center gap-2 lg:w-[170px] lg:gap-5">

                  <input
                    type="text"
                    inputMode="decimal"
                    value={`${conversion.toFixed(1)} %`}
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
  Math.min(
    Math.round(
      sessions * (value / 100)
    ),
    7000
  )
);

                    }}
                    className="
    w-[95px] lg:w-[110px]
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

                  setConversion(newConversion);

                  setOrders(
  Math.min(
    Math.round(
      sessions * (newConversion / 100)
    ),
    7000
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
    w-full
    w-full
lg:max-w-none
    lg:max-w-none
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
  p-5 lg:p-6
  "
            >
              <div className="flex w-full items-start gap-3">

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

                <div className="flex shrink-0 w-[130px] justify-end items-center gap-2 lg:w-[170px] lg:gap-5">

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
    w-[95px] lg:w-[110px]
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
                Tu facturación mensual
              </p>
              <h2
                className="
          mt-4
          break-words
          bg-gradient-to-r
          from-[#6D5BFF]
          to-[#E84AC2]
          bg-clip-text
          text-4xl
sm:text-5xl
lg:text-6xl
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
        w-full
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
                Mejorando solo un 1% más tu tasa de conversión y +10€ tu ticket medio podrías facturar:
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
        w-full
        w-full
lg:max-w-none
        lg:max-w-none
        rounded-3xl
        flex
        items-center
        gap-6
        border
        border-white/10
        bg-white/[0.03]
      p-5 lg:p-6
      "
            >
              {score >= 90 ? (

  <div
    className="
      relative
      flex
      h-20
      w-20
      items-center
      justify-center
      rounded-full
      bg-gradient-to-br
      from-[#6D5BFF]
      via-[#8B5CF6]
      to-[#E84AC2]
      p-[6px]
    "
  >
    <div
      className="
        flex
        h-full
        w-full
        items-center
        justify-center
        rounded-full
        bg-[#0D0D12]
        text-3xl
        font-bold
        text-white
      "
    >
      {score}
    </div>
  </div>

) : (

  <div
    className={`
      flex
      h-20
      w-20
      items-center
      justify-center
      rounded-full
      border-[6px]
      text-3xl
      font-bold
      ${
        score < 50
          ? "border-red-400/90 text-red-400"
          : score < 75
          ? "border-yellow-400/90 text-yellow-400"
          : "border-green-400/90 text-green-400"
      }
    `}
  >
    {score}
  </div>

)}

              <div className="flex flex-col justify-center flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Puntuación
                </p>

                <p
                  className={`
    mt-2
    text-2xl
    font-bold
    ${score < 50
  ? "text-red-400"
  : score < 75
    ? "text-yellow-400"
    : score < 90
      ? "text-green-400"
      : "text-white"
}
  `}
                >
                  {scoreTitle}
                </p>

                <p className="mt-1 text-sm text-white/55">
                  {scoreText}
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">

                    <div
                      className={`
h-full
rounded-full
bg-gradient-to-r
${score < 50
                          ? "from-red-500 to-orange-500"
                          : score < 75
                            ? "from-yellow-400 to-orange-400"
                            : score < 90
                              ? "from-green-400 to-green-500"
                              : "from-[#6D5BFF] via-[#8B5CF6] to-[#E84AC2]"
                        }
`}
                      style={{ width: `${score}%` }}
                    />

                  </div>

                  <span className="text-xs text-white/40">
                    100%
                  </span>

                </div> {/* fin barra */}

              </div> {/* fin columna derecha de la puntuación */}

            </div> {/* fin tarjeta PUNTUACIÓN */}

          </div> {/* fin space-y-6 */}

        </div> {/* fin p-10 */}

      </div> {/* fin grid */}

    </div>
  )
}