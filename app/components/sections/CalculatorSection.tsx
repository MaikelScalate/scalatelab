import Section from "../ui/Section";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";
import Calculator from "../ui/Calculator";

export default function CalculatorSection() {
  return (
    <Section
      id="calculadora"
      className="py-36"
    >
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <Title
            className="
              text-[1.9rem]
              sm:text-4xl
              lg:text-[2.8rem]
            "
          >
            Calcula cuánto{" "}
            <span className="text-purple">
              dinero al mes
            </span>{" "}
            dejas sobre la mesa.
          </Title>

          <Subtitle className="mx-auto mt-6 max-w-3xl text-lg">
            Descubre cuánto podrías llegar a ganar mejorando pequeñas métricas
            importantes de tu Shopify sin invertir más en publicidad.
          </Subtitle>

        </div>

        {/* MÁS ESPACIO */}
        <div className="mt-20">
          <Calculator />
        </div>

        {/* MÁS ESPACIO */}
        <div className="mt-20 flex justify-center">

          <Button
            className="
              h-12
              px-8
              text-lg
            "
          >
            Quiero dejar de perder ventas
          </Button>

        </div>

      </Container>
    </Section>
  );
}