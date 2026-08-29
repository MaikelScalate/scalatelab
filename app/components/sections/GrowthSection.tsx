import Section from "../ui/Section";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";

import GrowthProblemsCarousel from "../ui/GrowthProblemsCarousel";

export default function GrowthSection() {
  return (
    <Section
      id="deficiencias"
      className="pt-10 pb-22"
    >
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <Title
            className="
              text-[1.8rem]
              sm:text-4xl
              lg:text-[2.8rem]
              xl:text-[2.4rem]
            "
          >
            Tu tienda está{" "}
            <span className="text-[#C24641]">
              perdiendo ventas
            </span>{" "}
            sin que lo sepas.
          </Title>

          <Subtitle className="mx-auto mt-6 text-lg">
            Y estas son algunas de las razones.
          </Subtitle>

        </div>

        <GrowthProblemsCarousel />

        <div className="mt-16 flex justify-center">

          <Button
            href="./aplicar"
            className="
              h-11
              px-6
              text-2lg
            "
          >
            Apliquemos las soluciones
          </Button>

        </div>

      </Container>
    </Section>
  );
}