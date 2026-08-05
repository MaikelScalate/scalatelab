import Section from "../ui/Section";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";
import Timeline from "../ui/Timeline";

export default function MethodSection() {
  return (
    <Section id="metodologia" className="py-32">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <Title>
            Nuestro Método Paso a Paso
          </Title>

          <Subtitle className="mt-6">
            Descubre cómo analizamos, encontramos cuellos de botella y aplicamos
            sistemas para aportar resultados a cualquier marca E-commerce.
          </Subtitle>

        </div>

        <Timeline />

        <div className="mt-24 flex justify-center">

          <Button>
            Mejoremos mi tienda online
          </Button>

        </div>

      </Container>

    </Section>
  );
}