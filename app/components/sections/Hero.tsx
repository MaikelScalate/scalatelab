import HeroBackground from "../background/HeroBackground";
import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import ShopifyDashboard from "./ShopifyDashboard";
export default function Hero() {
  return (
    <Section
  className="
    relative
    overflow-hidden

    pt-28
    pb-20

    lg:pt-23
    lg:pb-28
  "
>
  <HeroBackground />
      <Container className="relative z-10">
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16">

          {/* Columna izquierda */}
          <div
  className="
    flex
    flex-col
    items-center
    text-center

    mb-10

    lg:mb-0
    lg:items-start
    lg:text-left
  "
>

            <Title
  className="
    mb-6
    max-w-[720px]

    text-3xl
    leading-tight

    sm:text-5xl

    lg:text-5xl

    xl:text-5xl
  "
>
              <>
                Optimizamos tu tienda{" "}
                <span
  className="
    inline-flex
    items-center
    gap-1

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
    className="
  h-12
  sm:h-9
  lg:h-11
  xl:h-14
  w-auto
"
  />
  <span
  className="
    text-3xl
    sm:text-3xl
    lg:text-3xl
    xl:text-4xl
    font-semibold
  "
>
  Shopify
</span>
</span>{" "}
                para escalar sin invertir más en publi.
              </>
            </Title>

            <Subtitle
  className="
    mb-10

    max-w-xl

    text-2lg

    leading-8

    lg:text-xl
  "
>
              Diseñamos y{" "}
<span className="font-semibold text-white">
  transformamos tiendas online en marcas sólidas
</span>{" "}
que crecen de manera rentable.
            </Subtitle>

            <Button
  className="
    px-6
    py-3
    text-2sm

    sm:px-7
    sm:py-3.5
    sm:text-base

    lg:px-8
    lg:py-4
    lg:text-2lg
  "
>
              Quiero optimizar mi tienda online
            </Button>
        </div>
        {/* Columna derecha */}
<div
  className="
    relative

    flex
    justify-center
    items-center

    h-[320px]

    sm:h-[420px]

    lg:h-[700px]
  "
>
 <div
  className="
    origin-top

    -translate-x-40
    sm:-translate-x-40
    lg:-translate-x-80

    scale-[0.55]
    sm:scale-[0.55]
    lg:scale-100

    transition-transform
  "
>
  <ShopifyDashboard />
</div>
</div>
</div>
</Container>
</Section>
);
}