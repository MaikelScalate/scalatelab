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
  className="pt-20 pb-32"
>
      <Container>

        <div className="mx-auto max-w-6xl text-center">

          <Title
            className="
              text-[1.8rem]
    sm:text-[2.2rem]
    lg:text-[2.5rem]
            "
          >
            Calcula cuánto{" "}
            <span className="text-purple">
              dinero al mes
            </span>{" "}
            dejas sobre la mesa.
          </Title>

          <Subtitle  className="    mx-auto    mt-6    max-w-3xl    text-base    sm:text-lg  ">
            Y cuánto podrías ganar mejorando métricas
            clave sin invertir más en publicidad.
          </Subtitle>

        </div>

        <div className="-mx-4 lg:mx-0 mt-10">
  <Calculator />
</div>

<div className="mt-[-25px] lg:mt-1 flex justify-center">
          <Button
            className="
              h-12
              px-8
              text-2lg
            "
          >
            Quiero dejar de perder ventas
          </Button>
        </div>

      </Container>
    </Section>
  );
}