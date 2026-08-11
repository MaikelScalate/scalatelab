import Section from "../ui/Section";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";
import Timeline from "../ui/Timeline";

export default function MethodSection() {
  return (
    <Section
  id="metodologia"
  className="
    pt-0
    pb-24
    lg:pt-16
    lg:pb-32
  "
>

      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <Title
className="
text-4xl
lg:text-5xl
"
>
  <span className="lg:hidden">
    Nuestro Método
  </span>

  <span className="hidden lg:inline">
    Nuestro Método Paso a Paso
  </span>
</Title>

          <Subtitle
  className="
    mx-auto
    mt-6
    max-w-2xl
    text-base
    lg:text-lg
  "
>
            Descubre cómo analizamos, encontramos cuellos de botella y aplicamos
            sistemas para aportar resultados a cualquier marca E-commerce.
          </Subtitle>

        </div>

        <div className="mt-6 lg:mt-32">

  <Timeline />

</div>

        <div className="mt-[-50px] flex justify-center">

          <Button
          href="./aplicar"
                      className="
                        h-12
                        px-8
                        text-2lg
                      "
                    >
                       Escalemos tu tienda online
                    </Button>

        </div>

      </Container>

    </Section>
  );
}