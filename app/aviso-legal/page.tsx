"use client";

import Link from "next/link";
import Footer from "../components/sections/Footer";

export default function LegalNoticePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b] text-white">

      {/* =====================================================
          FONDO — IGUAL QUE APLICAR
          ===================================================== */}

      {/* BASE NEGRA */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          bg-[#05060b]
        "
      />

      {/* HEXÁGONOS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          opacity-35
        "
        style={{
          backgroundImage:
            "url('/backgrounds/hex-grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
        }}
      />

      {/* GLOW AZUL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-[-420px]
          top-[20px]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-600/30
          blur-[180px]

          sm:left-[-580px]
          sm:top-[-20px]
          sm:h-[800px]
          sm:w-[800px]

          lg:left-[-800px]
          lg:top-[-80px]
          lg:h-[900px]
          lg:w-[900px]
          lg:bg-blue-600/25
          lg:blur-[210px]
        "
      />

      {/* GLOW MORADO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          right-[-420px]
          top-[80px]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-purple-600/35
          blur-[180px]

          sm:right-[-580px]
          sm:top-[20px]
          sm:h-[800px]
          sm:w-[800px]

          lg:right-[-850px]
          lg:top-[-60px]
          lg:h-[900px]
          lg:w-[900px]
          lg:bg-purple-600/28
          lg:blur-[210px]
        "
      />

      {/* =====================================================
          CONTENIDO
          ===================================================== */}

      <div className="relative z-10">

        {/* HEADER */}
        <header className="mx-auto max-w-5xl px-5 pt-8 sm:px-8 lg:px-10">

          <div className="flex items-center justify-between">

            <Link
              href="/"
              className="
                bg-gradient-to-r
                from-[#3B82F6]
                via-[#7C3AED]
                to-[#D946EF]
                bg-clip-text
                text-2xl
                font-extrabold
                uppercase
                tracking-tight
                text-transparent
                transition
                hover:scale-105
                sm:text-3xl
              "
            >
              SCALATE
            </Link>

            <Link
              href="/"
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                text-sm
                font-medium
                text-white/70
                transition
                hover:border-white/20
                hover:bg-white/[0.07]
                hover:text-white
              "
            >
              Volver a la web
            </Link>

          </div>

        </header>

        {/* =====================================================
            AVISO LEGAL
            ===================================================== */}

        <section className="mx-auto max-w-4xl px-5 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">

          <div className="mb-12 text-center">

            <span
            className="
              mb-6
              inline-flex
              items-center
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/[0.06]
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-purple-300
            "
          >
            Información legal
            </span>

            <h1
              className="
                mt-6
                text-4xl
                font-semibold
                tracking-[-0.04em]
                text-white
                sm:text-5xl
              "
            >
              Aviso legal
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Información legal relativa al sitio web de SCALATE.
            </p>

          </div>

          <div
            className="
              rounded-[28px]
              border
              border-white/[0.08]
              bg-[#05060b]/90
              p-6
              shadow-[0_0_80px_rgba(0,0,0,0.25)]
              sm:p-10
              lg:p-14
            "
          >

            <div className="space-y-12">

              {/* 1 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  1. Identificación del titular
                </h2>

                <div className="mt-5 space-y-3 text-sm leading-7 text-white/60 sm:text-base">

                  <p>
                    <strong className="text-white/85">
                      Denominación social:
                    </strong>{" "}
                    SCALATE S.L.{" "}
                  </p>

                  <p>
                    <strong className="text-white/85">
                      NIF/CIF:
                    </strong>{" "}
                    <span className="text-white/35">
                      [pendiente]
                    </span>
                  </p>

                  <p>
                    <strong className="text-white/85">
                      Domicilio:
                    </strong>{" "}
                    <span className="text-white/35">
                      [pendiente]
                    </span>
                  </p>

                  <p>
                    <strong className="text-white/85">
                      Sitio web:
                    </strong>{" "}
                    scalatelab.com
                  </p>

                  <p>
                    <strong className="text-white/85">
                      Email:
                    </strong>{" "}
                    <a
                      href="mailto:maikel@scalatelab.com"
                      className="text-white transition hover:text-[#D946EF]"
                    >
                      maikel@scalatelab.com
                    </a>
                  </p>

                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  2. Objeto
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  El presente Aviso Legal regula el acceso, navegación y uso
                  del sitio web scalatelab.com, así como las responsabilidades
                  derivadas de la utilización de sus contenidos y servicios.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                  SCALATE es una marca orientada a servicios de marketing
                  digital, optimización y crecimiento de tiendas online,
                  con especialización en Shopify.
                </p>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  3. Condiciones de acceso y uso
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  El acceso al sitio web es, con carácter general, gratuito.
                  La persona usuaria se compromete a utilizar el sitio de
                  forma lícita, responsable y de acuerdo con la legislación
                  aplicable.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                  Queda prohibido utilizar el sitio web para fines ilícitos,
                  fraudulentos o que puedan causar daños a SCALATE, a terceros
                  o al propio funcionamiento del sitio.
                </p>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  4. Propiedad intelectual e industrial
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  Los contenidos del sitio web, incluyendo textos, diseños,
                  elementos gráficos, logotipos, imágenes, código y demás
                  elementos, están protegidos por la normativa aplicable en
                  materia de propiedad intelectual e industrial.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                  Salvo autorización expresa, no se permite la reproducción,
                  distribución, transformación o explotación de dichos
                  contenidos fuera de los límites legalmente permitidos.
                </p>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  5. Responsabilidad
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  SCALATE procura que la información publicada en el sitio web
                  sea correcta y esté actualizada, aunque no garantiza que
                  todos los contenidos sean permanentemente exactos,
                  completos o estén libres de errores.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                  SCALATE no será responsable, dentro de los límites
                  establecidos por la legislación aplicable, de los daños que
                  puedan derivarse de interrupciones, errores técnicos o
                  circunstancias ajenas a su control.
                </p>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  6. Enlaces a terceros
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  El sitio web puede contener enlaces a páginas, plataformas
                  o servicios de terceros. SCALATE no controla dichos sitios
                  y no asume responsabilidad por sus contenidos, condiciones
                  o políticas.
                </p>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  7. Protección de datos
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  El tratamiento de los datos personales realizados a través
                  del sitio web se regula por nuestra{" "}
                  <Link
                    href="/politica-de-privacidad"
                    className="text-white underline underline-offset-4 hover:text-[#D946EF]"
                  >
                    Política de Privacidad
                  </Link>
                  .
                </p>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  8. Cookies
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  El sitio web puede utilizar cookies y tecnologías similares.
                  Para obtener información sobre su utilización y gestión,
                  puedes consultar nuestra{" "}
                  <Link
                    href="/politica-de-cookies"
                    className="text-white underline underline-offset-4 hover:text-[#D946EF]"
                  >
                    Política de Cookies
                  </Link>
                  .
                </p>
              </section>

              {/* 9 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  9. Modificaciones
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  SCALATE podrá modificar, actualizar o eliminar contenidos
                  del sitio web cuando lo considere necesario, así como
                  actualizar el presente Aviso Legal para adaptarlo a cambios
                  legales, técnicos o relacionados con sus servicios.
                </p>
              </section>

              {/* 10 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  10. Legislación aplicable y jurisdicción
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  El presente Aviso Legal se regirá por la legislación
                  española, sin perjuicio de aquellas normas imperativas que
                  puedan resultar aplicables.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                  Para la resolución de cualquier controversia serán
                  competentes los juzgados y tribunales que correspondan de
                  acuerdo con la normativa aplicable.
                </p>
              </section>

              {/* 11 */}
              <section>
                <h2 className="text-xl font-semibold text-white">
                  11. Contacto
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                  Para cualquier consulta relacionada con este sitio web o
                  con el presente Aviso Legal puedes contactar con nosotros:
                </p>

                <p className="mt-4 text-sm text-white/70 sm:text-base">
                  <a
                    href="mailto:maikel@scalatelab.com"
                    className="text-white underline underline-offset-4 hover:text-[#D946EF]"
                  >
                    maikel@scalatelab.com
                  </a>
                </p>
              </section>

            </div>

          </div>

        </section>

        <Footer />

      </div>
    </main>
  );
}