import InfiniteCases from "../ui/InfiniteCases";
import CaseCard from "../ui/CaseCard";
import { cases } from "@/app/data/cases";

export default function CasesSection() {
  return (
    <section className="relative pt-16
pb-28">

      <div className="mx-auto w-[90%] max-w-7xl">

        {/* Cabecera */}

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
            Descubre cómo trabajamos.
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
            Haz clic en cualquiera proyecto para ver el detrás de escena.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20">
  <InfiniteCases />
</div>

      </div>

    </section>
  );
}