import Section from "../ui/Section";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import ImprovementCard from "../ui/ImprovementCard";

import {
  Target,
  TrendingUp,
  RefreshCw,
} from "lucide-react";

export default function ImprovementsSection() {
  return (
    <Section
  id="mejoras"
  className="pt-15 py-32"
>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Title
  className="
    text-[2rem]
sm:text-[2.3rem]
lg:text-[2.5rem]
    leading-tight
  "
>
  Así logramos que tu marca{" "}
<span
  className="
    bg-gradient-to-r
    from-[#6D5BFF]
    via-[#8B5CF6]
    to-[#E84AC2]
    bg-clip-text
    text-transparent
  "
>
  venda más.
</span>
</Title>

        </div>

        <div
  className="
    relative
    mt-0
    mx-auto
    scale-[0.90]
    overflow-hidden
    rounded-[42px]
    border
    border-white/[0.08]
    bg-[linear-gradient(180deg,#171720_0%,#111116_100%)]
    shadow-[0_0_80px_rgba(139,92,246,.05)]
    px-14
    pb-14
    py-[0.1rem]
    lg:px-20
  "
>
    <div
  className="
    absolute
    left-1/2
    top-0
    h-80
    w-[700px]
    -translate-x-1/2
    rounded-full
    bg-[#8B5CF6]/10
    blur-[120px]
    pointer-events-none
  "
/>

<div
  className="
    absolute
    inset-0
    opacity-[0.035]
    bg-[radial-gradient(circle,rgba(255,255,255,.7)_1px,transparent_1px)]
    [background-size:22px_22px]
    pointer-events-none
  "
/>
    <div className="relative mb-8 text-center">

  {/* Línea superior */}

  <div
    className="
      mx-auto
      mb-8
      h-[2px]
w-56
      rounded-full
      bg-gradient-to-r
      from-transparent
      via-[#8B5CF6]
      to-transparent
    "
  />

  {/* Puntos */}

  <div
    className="
      absolute
      left-1/2
      top-6
      h-32
      w-[700px]
      -translate-x-1/2
      opacity-30
animate-[pulse_6s_ease-in-out_infinite]
      bg-[radial-gradient(circle,rgba(255,255,255,.18)_1px,transparent_1px)]
      [background-size:14px_14px]
      pointer-events-none
    "
  />

  <p
    className="
      relative
      text-[2.8rem]
      font-heading
      font-bold
      text-white
    "
  >
    Los 3 pilares
  </p>

  <p
    className="
      relative
      mt-2
      text-lg
      text-white/50
    "
  >
    para escalar tu E-commerce
  </p>

</div>
<div
  className="
    grid
    grid-cols-1
lg:grid-cols-3
gap-12
  "
>
          <ImprovementCard
            title="Mismo tráfico, más clientes"
            description="Optimizamos el recorrido del usuario para aumentar la tasa de conversión mediante mejoras de CRO, UX y eliminación de fricciones."
            tags={[
              "Optimización CRO",
"Experiencia UX",
"Checkout",
"Confianza",
            ]}
          >
            <Target
              size={64}
              strokeWidth={1.7}
              className="
text-[#8B5CF6]
drop-shadow-[0_0_20px_rgba(139,92,246,.45)]
"
            />
          </ImprovementCard>

          <ImprovementCard
            title="Mismos clientes, más facturación"
            description="Incrementamos el ticket medio utilizando bundles, upsells y una estructura de compra diseñada para aumentar el valor de cada pedido."
            tags={[
              "Bundles",
"Upsells",
"Cross-sells",
"Ticket medio",
            ]}
          >
            <TrendingUp
              size={64}
              strokeWidth={1.7}
              className="
text-[#8B5CF6]
drop-shadow-[0_0_20px_rgba(139,92,246,.45)]
"
            />
          </ImprovementCard>

          <ImprovementCard
            title="Clientes estables, negocio recurrente"
            description="Creamos estrategias para que vuelvan a comprar aumentando el valor de vida de cada cliente y reduciendo el coste de adquisición."
            tags={[
              "Email",
"Retención",
"LTV",
"Fidelización",
            ]}
          >
            <RefreshCw
              size={64}
              strokeWidth={1.7}
              className="
text-[#8B5CF6]
drop-shadow-[0_0_20px_rgba(139,92,246,.45)]
"
            />
          </ImprovementCard>
              </div> {/* fin grid */}

      </div> {/* fin contenedor */}

      </Container>
    </Section>
  );
}