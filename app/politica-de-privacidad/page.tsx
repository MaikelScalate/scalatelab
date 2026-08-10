"use client";

import Link from "next/link";
import Footer from "../components/sections/Footer";
export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          HEX GRID — PARTE SUPERIOR
          ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-0
          h-[520px]
          opacity-35
        "
        style={{
          backgroundImage: "url('/backgrounds/hex-grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
        }}
      />

      {/* =====================================================
          GLOW AZUL — SUPERIOR IZQUIERDA
          ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[280px]
          -top-[220px]
          z-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-600/[0.12]
          blur-[170px]
        "
      />

      {/* =====================================================
          GLOW MORADO — DERECHA
          ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[300px]
          top-[420px]
          z-0
          h-[650px]
          w-[650px]
          rounded-full
          bg-purple-600/[0.10]
          blur-[180px]
        "
      />

      {/* =====================================================
          OSCURECER EL FONDO
          ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-black/[0.35]
        "
      />

      {/* =====================================================
          HEADER
          ===================================================== */}
      <header
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          items-center
          justify-between
          px-6
          py-7
          sm:px-8
          lg:px-10
        "
      >
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
            transition-transform
            duration-300
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
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-white/60
            backdrop-blur-xl
            transition
            hover:border-white/20
            hover:bg-white/[0.06]
            hover:text-white
          "
        >
          Volver a la web
        </Link>
      </header>

      {/* =====================================================
          CONTENIDO PRINCIPAL
          ===================================================== */}
      <section
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-4xl
          px-6
          pb-24
          pt-20
          sm:px-8
          sm:pt-24
          lg:px-10
          lg:pb-32
          lg:pt-28
        "
      >
        {/* =====================================================
            CABECERA
            ===================================================== */}
        <div className="mb-16 text-center">
          <div
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
          </div>

          <h1
            className="
              text-[2.5rem]
              font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              sm:text-[3.5rem]
              lg:text-[4.2rem]
            "
          >
            Política de{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-violet-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              privacidad.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/50
              sm:text-base
            "
          >
            En SCALATE nos tomamos en serio la privacidad y la protección de
            los datos personales de las personas que visitan nuestra web,
            contactan con nosotros o utilizan nuestros servicios.
          </p>
        </div>

        {/* =====================================================
            DOCUMENTO
            ===================================================== */}
        <article
          className="
            relative
            rounded-[24px]
            border
            border-white/[0.08]
            bg-white/[0.025]
            p-6
            shadow-[0_0_80px_rgba(124,58,237,0.04)]
            backdrop-blur-xl
            sm:p-10
            lg:p-14
          "
        >
          {/* =================================================
              1. QUIÉNES SOMOS
              ================================================= */}
          <PolicySection title="1. ¿Quiénes somos?">
            <p>
              SCALATE es una empresa de marketing digital especializada en optimización y
              crecimiento de tiendas online, con especialización en Shopify.
              Nuestro objetivo es ayudar a las marcas a mejorar el rendimiento
              de sus tiendas online, optimizar su experiencia de usuario y
              aumentar su capacidad de conversión.
            </p>

            <p>
              Esta Política de Privacidad explica cómo tratamos los datos
              personales de las personas que visitan nuestra web, contactan
              con nosotros o solicitan información sobre nuestros servicios.
            </p>

            <div className="mt-6 rounded-2xl border border-white/[0.07] bg-black/30 p-5">
              <p className="!mt-0">
                <strong className="text-white">Sitio web:</strong>{" "}
                <a
                  href="https://scalatelab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 transition hover:text-purple-300"
                >
                  scalatelab.com
                </a>
              </p>

              <p>
                <strong className="text-white">Email de contacto:</strong>{" "}
                <a
                  href="mailto:maikel@scalatelab.com"
                  className="text-purple-400 transition hover:text-purple-300"
                >
                  maikel@scalatelab.com
                </a>
              </p>
            </div>
          </PolicySection>

          {/* =================================================
              2. QUÉ DATOS RECOPILAMOS
              ================================================= */}
          <PolicySection title="2. ¿Qué datos recopilamos?">
            <p>
              Cuando contactas con SCALATE o utilizas nuestros servicios,
              podemos recopilar los datos personales que nos facilites
              voluntariamente.
            </p>

            <ul>
              <li>Nombre y apellidos.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Teléfono, cuando sea necesario.</li>
              <li>Información sobre tu marca o negocio.</li>
              <li>
                Información que nos facilites al solicitar información o
                nuestros servicios.
              </li>
              <li>
                Cualquier otra información que decidas incluir en tus
                comunicaciones con nosotros.
              </li>
            </ul>

            <p>
              También podemos recopilar determinados datos técnicos y de
              navegación, como dirección IP, tipo de dispositivo, navegador,
              páginas visitadas y comportamiento de navegación, cuando
              corresponda y de acuerdo con tus preferencias de cookies.
            </p>
          </PolicySection>

          {/* =================================================
              3. PARA QUÉ UTILIZAMOS TUS DATOS
              ================================================= */}
          <PolicySection title="3. ¿Para qué utilizamos tus datos?">
            <p>Podemos utilizar tus datos personales para:</p>

            <ul>
              <li>Responder a solicitudes y consultas.</li>
              <li>Contactar contigo cuando hayas solicitado información.</li>
              <li>Analizar las necesidades de tu negocio.</li>
              <li>Prestar y gestionar nuestros servicios.</li>
              <li>
                Mantener la comunicación con clientes y potenciales clientes.
              </li>
              <li>
                Mejorar nuestra web, nuestros servicios y la experiencia de
                usuario.
              </li>
              <li>
                Analizar el rendimiento de nuestra web y nuestras campañas
                cuando exista una base jurídica que lo permita.
              </li>
              <li>
                Enviar comunicaciones comerciales cuando exista una base
                jurídica que lo permita.
              </li>
              <li>Cumplir nuestras obligaciones legales.</li>
            </ul>

            <p>
              No utilizaremos tus datos para finalidades incompatibles con
              aquellas para las que fueron recopilados.
            </p>
          </PolicySection>

          {/* =================================================
              4. BASES JURÍDICAS
              ================================================= */}
          <PolicySection title="4. Bases jurídicas para el tratamiento">
            <p>
              Cada tratamiento de datos personales debe apoyarse en una base
              jurídica válida. Dependiendo de la finalidad, podremos tratar
              tus datos basándonos en:
            </p>

            <ul>
              <li>
                <strong className="text-white">
                  Ejecución de una relación contractual:
                </strong>{" "}
                cuando el tratamiento sea necesario para prestar nuestros
                servicios o gestionar una relación contractual.
              </li>

              <li>
                <strong className="text-white">
                  Consentimiento:
                </strong>{" "}
                cuando la normativa exija que hayas prestado previamente tu
                consentimiento.
              </li>

              <li>
                <strong className="text-white">
                  Cumplimiento de obligaciones legales:
                </strong>{" "}
                cuando necesitemos tratar los datos para cumplir una obligación
                establecida por la normativa aplicable.
              </li>

              <li>
                <strong className="text-white">
                  Interés legítimo:
                </strong>{" "}
                cuando exista un interés legítimo de SCALATE y dicho interés
                prevalezca de acuerdo con la normativa aplicable.
              </li>
            </ul>
          </PolicySection>

          {/* =================================================
              5. MARKETING
              ================================================= */}
          <PolicySection title="5. Marketing y comunicaciones">
            <p>
              Podemos utilizar tus datos para enviarte información relacionada
              con nuestros servicios, novedades u oportunidades cuando exista
              una base jurídica que lo permita.
            </p>

            <p>
              Cuando el envío de comunicaciones comerciales requiera tu
              consentimiento, únicamente las enviaremos cuando hayas dado dicho
              consentimiento.
            </p>

            <p>
              Puedes dejar de recibir comunicaciones comerciales en cualquier
              momento siguiendo las instrucciones incluidas en la propia
              comunicación o contactando con nosotros en{" "}
              <a
                href="mailto:maikel@scalatelab.com"
                className="text-purple-400 hover:text-purple-300"
              >
                maikel@scalatelab.com
              </a>
              .
            </p>
          </PolicySection>

          {/* =================================================
              6. COOKIES
              ================================================= */}
          <PolicySection title="6. Cookies">
            <p>
              SCALATE utiliza cookies y tecnologías similares para garantizar
              el funcionamiento de la web, analizar su uso y, cuando
              corresponda, realizar mediciones, personalización o publicidad.
            </p>

            <p>
              Dependiendo de su categoría, determinadas cookies podrán
              requerir tu consentimiento antes de ser utilizadas.
            </p>

            <p>
              Nuestro sistema de gestión de cookies permite aceptar, rechazar
              o configurar las diferentes categorías disponibles.
            </p>

            <p>
              Para obtener información detallada sobre las cookies utilizadas,
              sus finalidades y cómo gestionar tus preferencias, puedes
              consultar nuestra{" "}
              <Link
                href="/politica-de-cookies"
                className="
                  font-medium
                  text-purple-400
                  transition
                  hover:text-purple-300
                "
              >
                Política de Cookies
              </Link>
              .
            </p>
          </PolicySection>

          {/* =================================================
              7. HERRAMIENTAS DE TERCEROS
              ================================================= */}
          <PolicySection title="7. Herramientas y servicios de terceros">
            <p>
              Para determinadas funciones de la web y para analizar su
              rendimiento podemos utilizar servicios de terceros, como
              herramientas de analítica, publicidad, medición, comunicación o
              gestión de formularios.
            </p>

            <p>
              Estas herramientas podrán incluir, dependiendo de las
              funcionalidades que estén activas en cada momento, servicios
              como Google Analytics, Google Tag Manager, Google Ads, Meta,
              Microsoft Clarity, herramientas de gestión de reuniones y otros
              proveedores tecnológicos.
            </p>

            <p>
              No todas estas herramientas tienen por qué estar activas de forma
              permanente. La utilización de aquellas que requieran
              consentimiento estará condicionada a la configuración de
              preferencias correspondiente.
            </p>
          </PolicySection>

          {/* =================================================
              8. COMPARTIR DATOS
              ================================================= */}
          <PolicySection title="8. ¿Con quién compartimos tus datos?">
            <p>
              SCALATE no vende tus datos personales.
            </p>

            <p>
              Podemos compartir determinados datos con proveedores
              tecnológicos, colaboradores y prestadores de servicios que
              necesitamos para mantener nuestra web, gestionar comunicaciones
              o prestar nuestros servicios.
            </p>

            <p>
              Estos proveedores únicamente accederán a los datos necesarios
              para prestar los servicios correspondientes y estarán sujetos a
              las obligaciones aplicables en materia de protección de datos.
            </p>

            <p>
              También podremos comunicar información cuando exista una
              obligación legal o cuando sea necesario para proteger nuestros
              derechos, bienes o intereses legítimos.
            </p>
          </PolicySection>

          {/* =================================================
              9. TRANSFERENCIAS INTERNACIONALES
              ================================================= */}
          <PolicySection title="9. Transferencias internacionales">
            <p>
              Algunos de nuestros proveedores tecnológicos pueden estar
              ubicados fuera del Espacio Económico Europeo.
            </p>

            <p>
              Cuando se produzca una transferencia internacional de datos,
              adoptaremos las garantías y mecanismos exigidos por la normativa
              aplicable para proteger tus datos personales.
            </p>
          </PolicySection>

          {/* =================================================
              10. CONSERVACIÓN
              ================================================= */}
          <PolicySection title="10. ¿Cuánto tiempo conservamos tus datos?">
            <p>
              Conservaremos los datos personales durante el tiempo necesario
              para cumplir la finalidad para la que fueron recopilados.
            </p>

            <p>
              Posteriormente, podrán conservarse durante los períodos
              necesarios para cumplir obligaciones legales, atender posibles
              responsabilidades o defender nuestros derechos.
            </p>

            <p>
              Cuando los datos ya no sean necesarios, serán eliminados o
              anonimizados de forma adecuada.
            </p>
          </PolicySection>

          {/* =================================================
              11. SEGURIDAD
              ================================================= */}
          <PolicySection title="11. Seguridad de los datos">
            <p>
              Aplicamos medidas técnicas y organizativas razonables destinadas
              a proteger los datos personales frente a accesos no autorizados,
              pérdida, alteración, divulgación o destrucción.
            </p>

            <p>
              No obstante, ningún sistema de almacenamiento o transmisión de
              información por Internet puede garantizar una seguridad absoluta.
            </p>
          </PolicySection>

          {/* =================================================
              12. DERECHOS
              ================================================= */}
          <PolicySection title="12. ¿Qué derechos tienes sobre tus datos?">
            <p>
              Puedes ejercer, cuando corresponda, los siguientes derechos:
            </p>

            <ul>
              <li>Acceso a tus datos personales.</li>
              <li>Rectificación de datos inexactos o incompletos.</li>
              <li>Supresión de tus datos.</li>
              <li>Limitación del tratamiento.</li>
              <li>Oposición al tratamiento.</li>
              <li>Portabilidad de tus datos cuando resulte aplicable.</li>
              <li>
                Retirada del consentimiento cuando el tratamiento se base en
                dicho consentimiento.
              </li>
            </ul>

            <p>
              Para ejercer tus derechos puedes escribir a:
            </p>

            <div className="mt-5 rounded-2xl border border-purple-400/10 bg-purple-500/[0.04] p-5">
              <a
                href="mailto:maikel@scalatelab.com"
                className="
                  text-base
                  font-medium
                  text-purple-400
                  transition
                  hover:text-purple-300
                "
              >
                maikel@scalatelab.com
              </a>
            </div>

            <p>
              Las solicitudes serán atendidas dentro de los plazos establecidos
              por la normativa aplicable.
            </p>
          </PolicySection>

          {/* =================================================
              13. RECLAMACIONES
              ================================================= */}
          <PolicySection title="13. Derecho a presentar una reclamación">
            <p>
              Si consideras que el tratamiento de tus datos personales no se
              ajusta a la normativa aplicable, puedes ponerte primero en
              contacto con nosotros para intentar resolver la situación.
            </p>

            <p>
              También tienes derecho a presentar una reclamación ante la
              autoridad de control competente en materia de protección de
              datos.
            </p>
          </PolicySection>

          {/* =================================================
              14. MENORES
              ================================================= */}
          <PolicySection title="14. Menores de edad">
            <p>
              Nuestros servicios no están dirigidos específicamente a menores
              de edad y no recopilamos deliberadamente datos personales de
              menores sin las garantías y autorizaciones que puedan resultar
              exigibles.
            </p>
          </PolicySection>

          {/* =================================================
              15. ENLACES A TERCEROS
              ================================================= */}
          <PolicySection title="15. Enlaces a terceros">
            <p>
              Nuestra web puede contener enlaces a redes sociales, herramientas
              o sitios web de terceros.
            </p>

            <p>
              SCALATE no es responsable de las prácticas de privacidad,
              contenidos o medidas de seguridad de dichos sitios. Te
              recomendamos consultar sus respectivas políticas cuando accedas
              a ellos.
            </p>
          </PolicySection>

          {/* =================================================
              16. CAMBIOS
              ================================================= */}
          <PolicySection title="16. Cambios en esta Política de Privacidad">
            <p>
              Podemos actualizar esta Política de Privacidad cuando sea
              necesario para reflejar cambios en nuestros servicios,
              herramientas utilizadas o requisitos legales.
            </p>

            <p>
              La versión publicada en esta página será la versión vigente.
            </p>
          </PolicySection>

          {/* =================================================
              CONTACTO FINAL
              ================================================= */}
          <div
            className="
              mt-16
              rounded-[20px]
              border
              border-white/[0.08]
              bg-gradient-to-br
              from-blue-500/[0.06]
              via-transparent
              to-purple-500/[0.06]
              p-6
              sm:p-8
            "
          >
            <h2 className="text-xl font-semibold tracking-tight">
              ¿Tienes alguna duda?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
              Si tienes cualquier pregunta sobre esta Política de Privacidad o
              sobre cómo tratamos tus datos personales, puedes contactar con
              nosotros directamente.
            </p>

            <a
              href="mailto:maikel@scalatelab.com"
              className="
                mt-5
                inline-flex
                text-sm
                font-medium
                text-purple-400
                transition
                hover:text-purple-300
              "
            >
              maikel@scalatelab.com →
            </a>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}

/* =========================================================
   COMPONENTE DE CADA SECCIÓN
   ========================================================= */

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-white/[0.06] py-10 first:pt-0 last:border-b-0">
      <h2
        className="
          text-xl
          font-semibold
          leading-tight
          tracking-[-0.025em]
          sm:text-2xl
        "
      >
        {title}
      </h2>

      <div
        className="
          mt-5
          space-y-5
          text-sm
          leading-7
          text-white/55
          sm:text-base
          sm:leading-8

          [&_p]:m-0

          [&_ul]:my-0
          [&_ul]:list-disc
          [&_ul]:space-y-3
          [&_ul]:pl-5

          [&_li]:pl-1

          [&_strong]:font-semibold
          [&_strong]:text-white
        "
      >
        {children}
      </div>
    </section>
  );
}