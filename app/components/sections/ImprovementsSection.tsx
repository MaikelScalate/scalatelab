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
    -translate-x-1/2

    h-[170px]
    w-[980px]

    opacity-25

    bg-[radial-gradient(circle,rgba(255,255,255,.65)_1px,transparent_1px)]
    [background-size:17px_17px]

    [clip-path:polygon(0_0,100%_0,72%_100%,28%_100%)]

    [mask-image:radial-gradient(circle_at_center,white,transparent_82%)]

    pointer-events-none
  "
/>
<div
  className="
    absolute
    left-1/2
    top-6
    -translate-x-1/2

    h-40
    w-[700px]

    rounded-full

    bg-white/10

    blur-[95px]

    pointer-events-none
  "
/>
<div className="relative -mt-0 mb-8 text-center z-10">
    {/* Línea */}

<div
  className="
    mx-auto
    mb-5
    h-[3px]
    w-72
    rounded-full
    bg-gradient-to-r
    from-transparent
    via-[#8B5CF6]
    to-transparent
  "
/>

<p
  className="
    text-[2.9rem]
    font-bold
    text-white
  "
>
  Los 3 pilares
</p>

<p
  className="
    mt-2
    text-lg
    text-white/45
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
gap-4
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