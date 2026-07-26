import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

export default function Hero() {
  return (
    <Section className="pt-40">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Columna izquierda */}
          <div className="flex flex-col items-start">

            <Badge className="mb-6">
              Shopify Optimization
            </Badge>

            <Title className="mb-8">
              <>
                Optimizamos tu tienda{" "}
                <span className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 align-middle">
                  🛍️ Shopify
                </span>{" "}
                para escalar sin aumentar tu inversión en publicidad.
              </>
            </Title>

            <Subtitle className="mb-10">
              Diseñamos y optimizamos tiendas online para convertirlas en marcas
              sólidas que crecen de forma rentable.
            </Subtitle>

            <Button>
              Quiero optimizar mi tienda online
            </Button>

          </div>

          {/* Columna derecha */}
          <div className="relative flex h-[650px] items-center justify-center">

            <div className="h-[620px] w-full rounded-[32px] border border-white/10 bg-[#111111]/70 backdrop-blur-xl">

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}