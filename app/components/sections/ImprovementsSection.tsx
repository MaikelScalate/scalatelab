import Section from "../ui/Section";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import ImprovementCard from "../ui/ImprovementCard";

import {
  Target,
  TrendingUp,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function ImprovementsSection() {
  return (
    <Section className="py-32">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <Title>
            Diseñamos cada detalle para{" "}
            <span className="text-purple">
              que tu tienda venda más.
            </span>
          </Title>

          <Subtitle className="mt-6">

            Cada mejora está basada en experiencia de usuario,
            rendimiento y comportamiento real del cliente para
            aumentar la conversión, la facturación y la
            escalabilidad de tu marca.

          </Subtitle>

        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-2
          "
        >

          <ImprovementCard
  title="Mismo tráfico, más clientes"
  description="..."
  tags={[
    "CRO",
    "UX",
    "Checkout",
    "Confianza",
  ]}
>
  <Target
    size={56}
    strokeWidth={1.7}
    className="text-[#8B5CF6]"
  />
</ImprovementCard>

          <ImprovementCard
            icon={TrendingUp}
            title="Mismos clientes, más facturación"
            description="Incrementamos el ticket medio utilizando bundles, upsells y una estructura de compra diseñada para aumentar el valor de cada pedido."
            tags={[
              "Bundles",
              "Upsells",
              "Cross-sells",
              "AOV",
            ]}
          />

          <ImprovementCard
            icon={RefreshCw}
            title="Clientes recurrentes, negocio estable"
            description="Creamos estrategias para que tus clientes vuelvan a comprar aumentando el valor de vida de cada cliente y reduciendo el coste de adquisición."
            tags={[
              "LTV",
              "Retención",
              "Email",
              "Fidelización",
            ]}
          />

          <ImprovementCard
            icon={Sparkles}
            title="Mismos leads, experiencia nueva"
            description="Construimos una tienda rápida, escalable y visualmente impecable para ofrecer una experiencia premium desde el primer segundo."
            tags={[
              "Shopify",
              "Velocidad",
              "Branding",
              "Escalabilidad",
            ]}
          />

        </div>

      </Container>

    </Section>
  );
}