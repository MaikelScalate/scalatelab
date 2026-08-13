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
  className="pt-11 pb-32 lg:pt-20 lg:pb-32"
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
            Descubre cuánto{" "}
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

        <div className="mt-6 mb-[0px] px-0 sm:px-4 lg:px-0 lg:mb-[-60]">
  <Calculator />
</div>
      <div className="mt-12 h-12  flex justify-center lg:mt-0">
  <Button href="./aplicar" className="w-full max-w-[280px]">
    Quiero dejar de perder ventas
  </Button>
</div>
      </Container>
    </Section>
  );
}