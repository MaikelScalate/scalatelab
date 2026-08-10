"use client";

import Link from "next/link";

export default function CookiePolicyPage() {
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
          GLOW MORADO — DERECHA / PARTE INFERIOR
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[300px]
          top-[520px]
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
        {/* LOGO */}

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

        {/* VOLVER */}

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

        {/* ===================================================
            CABECERA
            =================================================== */}

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
              cookies.
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
            Te explicamos qué son las cookies, cómo las utilizamos en SCALATE
            y cómo puedes gestionar tus preferencias.
          </p>

        </div>

        {/* ===================================================
            DOCUMENTO
            =================================================== */}

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
              1. ¿QUÉ ES UNA COOKIE?
              ================================================= */}

          <PolicySection title="1. ¿Qué es una cookie y para qué sirve?">

            <p>
              Una cookie es un pequeño archivo que se almacena en el navegador
              de tu dispositivo cuando visitas una página web. Las cookies
              permiten que una web recuerde determinada información y ayudan a
              proporcionar determinadas funcionalidades.
            </p>

            <p>
              En SCALATE utilizamos cookies y tecnologías similares para
              garantizar el funcionamiento de nuestra web, recordar determinadas
              preferencias cuando corresponda, analizar el uso de la web y,
              cuando proceda, medir o personalizar determinadas acciones de
              marketing.
            </p>

            <p>
              Las cookies que utilizamos no están destinadas a dañar tu
              dispositivo.
            </p>

          </PolicySection>

          {/* =================================================
              2. TIPOS
              ================================================= */}

          <PolicySection title="2. ¿Qué tipos de cookies utilizamos?">

            <p>
              Las cookies pueden clasificarse según diferentes criterios.
              Para facilitar la gestión de tus preferencias, en SCALATE las
              agrupamos principalmente en las siguientes categorías:
            </p>

            <div className="mt-6 grid gap-4">

              <CookieCard
                title="Cookies necesarias"
                description="Son necesarias para determinadas funciones esenciales de la web y para permitir su funcionamiento básico."
                required
              />

              <CookieCard
                title="Cookies de preferencias"
                description="Permiten recordar determinadas configuraciones o preferencias cuando estas funcionalidades se encuentren disponibles."
              />

              <CookieCard
                title="Cookies estadísticas"
                description="Nos ayudan a comprender cómo se utiliza nuestra web, medir su rendimiento y detectar oportunidades de mejora."
              />

              <CookieCard
                title="Cookies de marketing"
                description="Pueden utilizarse para medir campañas, crear audiencias o mostrar comunicaciones y publicidad más relevantes cuando corresponda."
              />

            </div>

          </PolicySection>

          {/* =================================================
              3. NECESARIAS
              ================================================= */}

          <PolicySection title="3. Cookies necesarias">

            <p>
              Las cookies necesarias permiten que determinadas funciones
              esenciales de la web funcionen correctamente.
            </p>

            <p>
              Estas cookies pueden utilizarse, por ejemplo, para mantener
              determinadas preferencias técnicas, gestionar elementos
              necesarios de la navegación o garantizar la seguridad y
              estabilidad del sitio.
            </p>

            <p>
              Debido a su carácter técnico y a que determinadas cookies de esta
              categoría pueden resultar necesarias para prestar el servicio
              solicitado, no siempre requieren consentimiento.
            </p>

            <p>
              No utilizamos estas cookies con finalidades publicitarias.
            </p>

          </PolicySection>

          {/* =================================================
              4. PREFERENCIAS
              ================================================= */}

          <PolicySection title="4. Cookies de preferencias">

            <p>
              Las cookies de preferencias permiten recordar determinadas
              opciones seleccionadas por el usuario o facilitar determinadas
              funcionalidades de la web.
            </p>

            <p>
              Estas cookies únicamente se utilizarán cuando las funcionalidades
              correspondientes estén activas y de acuerdo con la configuración
              de preferencias seleccionada.
            </p>

          </PolicySection>

          {/* =================================================
              5. ESTADÍSTICAS
              ================================================= */}

          <PolicySection title="5. Cookies estadísticas">

            <p>
              Las cookies estadísticas nos permiten comprender cómo los
              visitantes utilizan nuestra web y obtener información que nos
              ayude a mejorar su funcionamiento, estructura y contenido.
            </p>

            <p>
              Dependiendo de las herramientas que estén activas en cada
              momento, estas funcionalidades pueden incluir servicios de
              analítica o medición como Google Analytics o Microsoft Clarity.
            </p>

            <p>
              Estas herramientas no tienen por qué estar activas de forma
              permanente. Cuando su utilización requiera consentimiento, no se
              activarán hasta que hayas aceptado la categoría correspondiente.
            </p>

          </PolicySection>

          {/* =================================================
              6. MARKETING
              ================================================= */}

          <PolicySection title="6. Cookies de marketing">

            <p>
              Las cookies de marketing pueden utilizarse para medir campañas
              publicitarias, crear audiencias o comprender determinadas
              interacciones con nuestras acciones de marketing.
            </p>

            <p>
              Dependiendo de las funcionalidades activas, estas herramientas
              pueden incluir servicios como Google Ads o Meta.
            </p>

            <p>
              Las cookies de marketing que requieran consentimiento no se
              instalarán antes de que hayas aceptado expresamente esta
              categoría.
            </p>

          </PolicySection>

          {/* =================================================
              7. PROPIAS Y TERCEROS
              ================================================= */}

          <PolicySection title="7. Cookies propias y de terceros">

            <p>
              Podemos utilizar tanto cookies propias como cookies gestionadas
              por proveedores externos.
            </p>

            <p>
              Las cookies propias son aquellas gestionadas directamente por
              SCALATE o por proveedores que actúan por nuestra cuenta.
            </p>

            <p>
              Las cookies de terceros son aquellas gestionadas por proveedores
              externos que pueden prestar servicios de analítica, publicidad,
              medición, comunicación u otras funcionalidades.
            </p>

            <p>
              Cuando utilizamos servicios de terceros que requieren
              consentimiento, su activación estará condicionada a la
              configuración de preferencias correspondiente.
            </p>

          </PolicySection>

          {/* =================================================
              8. HERRAMIENTAS
              ================================================= */}

          <PolicySection title="8. Herramientas y servicios de terceros">

            <p>
              Para determinadas funciones de nuestra web podemos utilizar
              herramientas y servicios proporcionados por terceros.
            </p>

            <p>
              Dependiendo de las funcionalidades activas, estos servicios
              pueden incluir:
            </p>

            <ul>
              <li>Google Analytics.</li>
              <li>Google Tag Manager.</li>
              <li>Google Ads.</li>
              <li>Meta.</li>
              <li>Microsoft Clarity.</li>
              <li>Herramientas de gestión de reuniones.</li>
              <li>Otros proveedores tecnológicos necesarios.</li>
            </ul>

            <p>
              La lista anterior refleja herramientas que podemos utilizar
              dependiendo de las funcionalidades activas en cada momento y no
              significa que todas ellas estén necesariamente activas en todo
              momento.
            </p>

          </PolicySection>

          {/* =================================================
              9. GESTIÓN DEL CONSENTIMIENTO
              ================================================= */}

          <PolicySection title="9. ¿Cómo puedes gestionar tus cookies?">

            <p>
              En SCALATE ponemos a tu disposición un sistema de gestión de
              cookies que permite configurar tus preferencias.
            </p>

            <p>
              Puedes aceptar todas las cookies, rechazarlas cuando corresponda
              o seleccionar individualmente las categorías que deseas permitir.
            </p>

            <div
              className="
                mt-6
                rounded-2xl
                border
                border-purple-400/10
                bg-purple-500/[0.04]
                p-5
              "
            >
              <p className="!mt-0">
                <strong className="text-white">
                  Puedes modificar tu elección posteriormente
                </strong>{" "}
                mediante la opción de <strong className="text-white">Ajustes de Cookies</strong>{" "}
                disponible en nuestra web.
              </p>
            </div>

          </PolicySection>

          {/* =================================================
              10. RETIRAR CONSENTIMIENTO
              ================================================= */}

          <PolicySection title="10. ¿Cómo puedes retirar o modificar tu consentimiento?">

            <p>
              Puedes modificar tus preferencias de cookies en cualquier
              momento utilizando nuestro sistema de gestión de cookies.
            </p>

            <p>
              Al modificar tus preferencias, la configuración seleccionada se
              utilizará para gestionar las categorías de cookies que
              correspondan.
            </p>

            <p>
              Las cookies estrictamente necesarias para determinadas funciones
              de la web pueden seguir utilizándose cuando resulten necesarias
              para prestar el servicio solicitado o garantizar el
              funcionamiento básico del sitio.
            </p>

          </PolicySection>

          {/* =================================================
              11. NAVEGADORES
              ================================================= */}

          <PolicySection title="11. Gestión de cookies desde tu navegador">

            <p>
              También puedes configurar tu navegador para bloquear, eliminar o
              limitar determinadas cookies.
            </p>

            <p>
              La forma de gestionar las cookies depende del navegador que
              utilices. Las opciones habituales se encuentran en la sección de
              privacidad o configuración de cada navegador.
            </p>

            <p>
              Ten en cuenta que bloquear determinadas cookies puede afectar al
              funcionamiento de algunas funcionalidades de la web.
            </p>

          </PolicySection>

          {/* =================================================
              12. TRANSFERENCIAS
              ================================================= */}

          <PolicySection title="12. Transferencias internacionales">

            <p>
              Algunos proveedores tecnológicos que utilizamos pueden estar
              ubicados fuera del Espacio Económico Europeo.
            </p>

            <p>
              Cuando el uso de determinadas cookies o tecnologías implique una
              transferencia internacional de datos personales, adoptaremos las
              garantías y mecanismos exigidos por la normativa aplicable.
            </p>

            <p>
              La información específica sobre los proveedores y las
              transferencias aplicables dependerá de las herramientas que se
              encuentren activas en cada momento.
            </p>

          </PolicySection>

          {/* =================================================
              13. CONSERVACIÓN
              ================================================= */}

          <PolicySection title="13. ¿Cuánto tiempo se conservan las cookies?">

            <p>
              El tiempo durante el que una cookie permanece instalada depende
              de su finalidad, del proveedor que la gestione y de su
              configuración.
            </p>

            <p>
              Algunas cookies pueden desaparecer al cerrar el navegador,
              mientras que otras pueden permanecer durante un período
              determinado.
            </p>

            <p>
              La duración concreta de las cookies utilizadas por SCALATE se
              detallará en el inventario de cookies correspondiente cuando las
              herramientas estén definidas y activas.
            </p>

          </PolicySection>

          {/* =================================================
              14. ACTUALIZACIONES
              ================================================= */}

          <PolicySection title="14. Cambios en esta Política de Cookies">

            <p>
              Podemos actualizar esta Política de Cookies cuando sea necesario
              para reflejar cambios en las herramientas utilizadas, en las
              cookies implementadas o en los requisitos legales aplicables.
            </p>

            <p>
              La versión publicada en esta página será la versión vigente.
            </p>

          </PolicySection>

          {/* =================================================
              15. PRIVACIDAD
              ================================================= */}

          <PolicySection title="15. Relación con nuestra Política de Privacidad">

            <p>
              El uso de determinadas cookies y tecnologías similares puede
              implicar el tratamiento de datos personales.
            </p>

            <p>
              Para obtener información adicional sobre cómo tratamos los datos
              personales, puedes consultar nuestra{" "}
              <Link
                href="/politica-de-privacidad"
                className="
                  font-medium
                  text-purple-400
                  transition
                  hover:text-purple-300
                "
              >
                Política de Privacidad
              </Link>
              .
            </p>

          </PolicySection>

          {/* =================================================
              CONTACTO
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
              Si tienes cualquier pregunta sobre esta Política de Cookies o
              sobre cómo gestionamos las cookies y tecnologías similares,
              puedes contactar con nosotros.
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
    </main>
  );
}


/* =========================================================
   COMPONENTE — SECCIÓN
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


/* =========================================================
   COMPONENTE — TARJETA DE COOKIE
   ========================================================= */

function CookieCard({
  title,
  description,
  required = false,
}: {
  title: string;
  description: string;
  required?: boolean;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/[0.07]
        bg-black/25
        p-5
        transition
        duration-300
        hover:border-white/[0.12]
        hover:bg-white/[0.025]
      "
    >
      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-sm font-semibold text-white sm:text-base">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/45">
            {description}
          </p>
        </div>

        {required && (
          <span
            className="
              shrink-0
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.04]
              px-2.5
              py-1
              text-[9px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-white/40
            "
          >
            Necesarias
          </span>
        )}

      </div>
    </div>
  );
}