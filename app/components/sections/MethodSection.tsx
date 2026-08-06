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

        <div className="mx-auto max-w-5xl text-center">

          <Title
className="
text-5xl
lg:text-7xl
"
>
            Nuestro Método Paso a Paso
          </Title>

          <Subtitle
className="
mx-auto
mt-8
max-w-3xl
text-xl
"
>
            Descubre cómo analizamos, encontramos cuellos de botella y aplicamos
            sistemas para aportar resultados a cualquier marca E-commerce.
          </Subtitle>

        </div>

        <div className="mt-28 lg:mt-36">

  <Timeline />

</div>

        <div className="mt-24 flex justify-center">

          <Button
                      className="
                        h-12
                        px-8
                        text-2lg
                      "
                    >
                       Mejoremos tu tienda online
                    </Button>

        </div>

      </Container>

    </Section>
  );
}