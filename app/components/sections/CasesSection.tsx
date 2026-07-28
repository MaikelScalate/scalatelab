import InfiniteCases from "../ui/InfiniteCases";

export default function CasesSection() {
  return (
    <section className="relative pt-16 pb-28">

      {/* Cabecera */}

      <div className="mx-auto w-[90%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <h2
            className="
              text-2xl
              font-bold
              tracking-tight
              text-white

              md:text-4xl
            "
          >
            Cada marca es un mundo.
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-lg
              leading-relaxed
              text-white/60
            "
          >
            Descubre cómo transformamos las tiendas online con las que trabajamos.
          </p>

        </div>

      </div>

      {/* Carrusel */}

      <div className="mt-10">
        <InfiniteCases />
      </div>

    </section>
  );
}