import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

export default function Hero() {
  return (
    <Section className="pt-28 pb-20 lg:pt-40 lg:pb-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* Columna izquierda */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <Title
  className="
    mb-6
    max-w-[720px]

    text-4xl
    leading-tight

    sm:text-5xl

    lg:text-5xl

    xl:text-6xl
  "
>
              <>
                Optimizamos tu tienda{" "}
                <span
  className="
    inline-flex
    items-center
    gap-2

    rounded-xl

    border
    border-white/10

    bg-white/5

    px-3

    py-1.5

    align-middle
  "
>
  <Image
    src="/logoshopify.png"
    alt="Shopify"
    width={36}
    height={36}
    className="h-10 w-auto"
  />
  <span className="text-2xl font-semibold">
  Shopify
</span>
</span>{" "}
                para escalar sin aumentar tu inversión en publicidad.
              </>
            </Title>

            <Subtitle
  className="
    mb-10

    max-w-xl

    text-lg

    leading-8

    lg:text-xl
  "
>
              Diseñamos y{" "}
<span className="font-semibold text-white">
  optimizamos tiendas online para convertirlas en marcas sólidas
</span>{" "}
que crecen de forma rentable.
            </Subtitle>

            <Button
  className="
    px-8

    py-4

    text-base
  "
>
              Quiero optimizar mi tienda online
            </Button>

          </div>

          {/* Columna derecha */}
          <div className="relative flex h-[560px] items-center justify-center lg:h-[620px]">

            <div className="h-full w-full rounded-[32px] border border-white/10 bg-[#111111]/70 backdrop-blur-xl">

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}