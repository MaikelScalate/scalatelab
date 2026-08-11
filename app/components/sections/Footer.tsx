"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";

type CookiePreferences = {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  preferences: false,
  statistics: false,
  marketing: false,
};

type FooterProps = {
  desktopOnly?: boolean;
};

export default function Footer({
  desktopOnly = false,
}: FooterProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showCookieQuick, setShowCookieQuick] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const savedConsent = localStorage.getItem("scalate-cookie-consent");

    if (!savedConsent) {
      setShowBanner(true);
      return;
    }

    try {
      const parsed = JSON.parse(savedConsent);

      setPreferences({
        ...defaultPreferences,
        ...parsed,
        necessary: true,
      });
    } catch {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (newPreferences: CookiePreferences) => {
    const finalPreferences = {
      ...newPreferences,
      necessary: true,
    };

    localStorage.setItem(
      "scalate-cookie-consent",
      JSON.stringify(finalPreferences)
    );

    setPreferences(finalPreferences);
    setShowBanner(false);
    setShowCookieQuick(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    });
  };

  const rejectOptional = () => {
    savePreferences({
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    });
  };

  const openCookieSettings = () => {
    setShowBanner(false);
    setShowSettings(false);
    setShowCookieQuick(true);
  };

  const openDetailedSettings = () => {
    setShowBanner(false);
    setShowCookieQuick(false);
    setShowSettings(true);
  };

  return (
    <>
      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="relative overflow-hidden">

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            pb-10
            pt-20

            sm:px-8
            sm:pt-24

            lg:px-12
            lg:pb-12
            lg:pt-24
          "
        >

          {/* =================================================
              =================================================
              MOBILE / TABLET
              =================================================
              ================================================= */}

          <div className={desktopOnly ? "hidden" : "lg:hidden"}>

            {/* =================================================
                MARCA
                ================================================= */}

            <div className="max-w-md">

              <a
                href="/"
                className="
                  inline-block
                  bg-gradient-to-r
                  from-[#3B82F6]
                  via-[#7C3AED]
                  to-[#D946EF]
                  bg-clip-text
                  text-4xl
                  font-extrabold
                  uppercase
                  tracking-[-0.04em]
                  text-transparent
                  transition-transform
                  duration-300
                  hover:scale-[1.02]

                  sm:text-5xl
                "
              >
                SCALATE
              </a>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-6
                  text-white/45

                  sm:text-base
                  sm:leading-7
                "
              >
                Optimizamos tu E-commerce para convertir más
                y escalar sin depender de aumentar
                tu inversión en publicidad.
              </p>

              {/* CTA */}

              <div className="mt-7">

                <Button
                  href="./aplicar"
                  className="
                    px-5
                    py-2.5
                    text-sm

                    sm:px-6
                    sm:py-3
                    sm:text-base
                  "
                >
                  Escalemos tu marca
                </Button>

              </div>

            </div>


            {/* =================================================
                NAVEGACIÓN MOBILE
                ================================================= */}

            <div
              className="
                mt-14
                grid
                grid-cols-2
                gap-x-12
                gap-y-10

                sm:grid-cols-3
                sm:gap-x-16
              "
            >

              {/* =================================================
                  EXPLORA
                  ================================================= */}

              <div>

                <p
                  className="
                    mb-5
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/35
                  "
                >
                  Explora
                </p>

                <div className="flex flex-col gap-3.5">

                  <a
                    href="#deficiencias"
                    className="
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    Deficiencias
                  </a>

                  <a
                    href="#calculadora"
                    className="
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    Calculadora
                  </a>

                  <a
                    href="#pilares"
                    className="
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    Pilares
                  </a>

                  <a
                    href="#metodologia"
                    className="
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    Metodología
                  </a>

                </div>

              </div>


              {/* =================================================
                  EMPRESA
                  ================================================= */}

              <div>

                <p
                  className="
                    mb-5
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/35
                  "
                >
                  Empresa
                </p>

                <div className="flex flex-col gap-3.5">

                  <a
                    href="#faq"
                    className="
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    FAQ&apos;s
                  </a>

                  <a
                    href="#contacto"
                    className="
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    Contacto
                  </a>

                  <a
                    href="/politica-de-privacidad"
                    className="
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    Política de privacidad
                  </a>
<a
  href="/politica-de-cookies"
  className="
    text-sm
    text-white/60
    transition-colors
    duration-200
    hover:text-white
  "
>
  Política de Cookies
</a>

<button
  type="button"
  onClick={openCookieSettings}
  className="
    text-left
    text-sm
    text-white/60
    transition-colors
    duration-200
    hover:text-white
  "
>
  Ajustes de Cookies
</button>
                </div>

              </div>


              {/* =================================================
                  REDES
                  ================================================= */}

              <div>

                <p
                  className="
                    mb-5
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/35
                  "
                >
                  Hablemos
                </p>

                <div className="flex flex-col gap-3.5">

                  {/* INSTAGRAM */}

                  <a
                    href="https://www.instagram.com/maikelgudinecom/"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                      />

                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="0.8"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>

                    Instagram
                  </a>


                  {/* LINKEDIN */}

                  <a
                    href="https://www.linkedin.com/in/maikel-gudin-096a862b8/"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                      />

                      <path d="M8 10v6" />
                      <path d="M8 7.5v.01" />
                      <path d="M12 16v-3.2a2.8 2.8 0 0 1 5.6 0V16" />
                      <path d="M12 10v6" />
                    </svg>

                    LinkedIn
                  </a>


                  {/* YOUTUBE */}

                  <a
                    href="https://www.youtube.com/@MaikelGudinEcom"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-white/60
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="4"
                      />

                      <path
                        d="M10 9l5 3-5 3V9z"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>

                    YouTube
                  </a>
{/* TIKTOK */}

<a
  href="https://www.tiktok.com/@maikelgudinecom"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    gap-2
    text-sm
    text-white/60
    transition-colors
    duration-200
    hover:text-white
  "
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.2v13.1a2.85 2.85 0 1 1-2.85-2.85c.15 0 .3.01.45.04V9.05a6.1 6.1 0 0 0-.45-.02A6.05 6.05 0 1 0 15.82 15V8.56a8.05 8.05 0 0 0 4.7 1.51V6.87a4.83 4.83 0 0 1-.93-.18Z" />
  </svg>

  TikTok
</a>
                </div>

              </div>

            </div>


            {/* =================================================
                SEPARADOR MOBILE
                ================================================= */}

            <div
              className="
                mt-16
                h-px
                w-full
                bg-white/[0.08]
              "
            />


            {/* =================================================
                BOTTOM MOBILE
                ================================================= */}

            <div
              className="
                flex
                flex-col
                gap-4
                pt-6

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <p
                className="
                  text-xs
                  text-white/35

                  sm:text-sm
                "
              >
                © 2026 Scalate. Todos los derechos reservados.
              </p>

            </div>

          </div>


        {/* =====================================================
            =====================================================
            DESKTOP
            =====================================================
            ===================================================== */}

        <div
  className={
    desktopOnly
      ? "block"
      : "hidden lg:block"
  }
>
          {/* =================================================
              PARTE SUPERIOR
              ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            {/* COPYRIGHT */}

            <p
              className="
                text-sm
                text-white/35
              "
            >
              © 2026 Scalate. Todos los derechos reservados.
            </p>

            {/* LOGO */}

            <a
              href="/"
              className="
                absolute
                left-1/2
                -translate-x-1/2

                bg-gradient-to-r
                from-[#3B82F6]
                via-[#7C3AED]
                to-[#D946EF]
                bg-clip-text
                text-3xl
                font-extrabold
                uppercase
                tracking-[-0.04em]
                text-transparent
                transition-transform
                duration-300
                hover:scale-[1.03]
              "
            >
              SCALATE
            </a>

            {/* REDES */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/maikelgudinecom/"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle cx="12" cy="12" r="4" />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/maikel-gudin-096a862b8/"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                  />

                  <path d="M8 10v6" />
                  <path d="M8 7.5v.01" />
                  <path d="M12 16v-3.2a2.8 2.8 0 0 1 5.6 0V16" />
                  <path d="M12 10v6" />
                </svg>
              </a>

              {/* YOUTUBE */}

              <a
                href="https://www.youtube.com/@MaikelGudinEcom"
                aria-label="YouTube"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="4"
                  />

                  <path
                    d="M10 9l5 3-5 3V9z"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              {/* TIKTOK */}

<a
  href="https://www.tiktok.com/@maikelgudinecom"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="TikTok"
  className="
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-xl
    border
    border-white/[0.08]
    bg-white/[0.03]
    text-white/55
    transition-all
    duration-300
    hover:border-white/[0.16]
    hover:bg-white/[0.06]
    hover:text-white
  "
>
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.2v13.1a2.85 2.85 0 1 1-2.85-2.85c.15 0 .3.01.45.04V9.05a6.1 6.1 0 0 0-.45-.02A6.05 6.05 0 1 0 15.82 15V8.56a8.05 8.05 0 0 0 4.7 1.51V6.87a4.83 4.83 0 0 1-.93-.18Z" />
  </svg>
</a>
            </div>
          </div>

          {/* =================================================
              LÍNEA
              ================================================= */}

          <div
            className="
              mt-10
              h-px
              w-full
              bg-white/[0.08]
            "
          />

          {/* =================================================
              PARTE INFERIOR
              ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center
              pt-6
            "
          >
            <a
              href="/politica-de-privacidad"
              className="
                text-xs
                text-white/35
                underline-offset-4
                transition-colors
                duration-200
                hover:text-white/60
                hover:underline
              "
            >
              Política de privacidad
            </a>

            <span
              className="
                mx-3
                text-xs
                text-white/20
              "
            >
              |
            </span>
<a
  href="/politica-de-cookies"
  className="
    text-xs
    text-white/35
    underline-offset-4
    transition-colors
    duration-200
    hover:text-white/60
    hover:underline
  "
>
  Política de Cookies
</a>

<span
  className="
    mx-3
    text-xs
    text-white/20
  "
>
  |
</span>
            <button
              type="button"
              onClick={openCookieSettings}
              className="
                text-xs
                text-white/25
                transition-colors
                duration-200
                hover:text-white/60
              "
            >
              Ajustes de Cookies
            </button>
          </div>
        </div>
        </div>

      </footer>


      {/* =====================================================
          COOKIE BANNER
          ===================================================== */}

      {showBanner && !showSettings && (
        <div
          className="
            fixed
            bottom-4
            right-4
            z-[100]
            w-[calc(100%-2rem)]
            max-w-[390px]
            rounded-[24px]
            border
            border-white/[0.08]
            bg-[#242424]
            p-5
            shadow-[0_20px_80px_rgba(0,0,0,0.55)]
            sm:bottom-6
            sm:right-6
            sm:p-6
          "
        >

          <h3
            className="
              text-base
              font-semibold
              text-white
            "
          >
            Cookies
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-5
              text-white/45
            "
          >
            Utilizamos cookies para mejorar tu experiencia,
            analizar el tráfico del sitio y ofrecer contenido
            personalizado.
          </p>

          <p
            className="
              mt-1
              text-xs
              leading-5
              text-white/35
            "
          >
            Puedes modificar tus preferencias en cualquier momento.
          </p>


          <div
            className="
              mt-5
              flex
              gap-3
            "
          >

            <button
              type="button"
              onClick={openDetailedSettings}
              className="
                flex-1
                rounded-full
                bg-white
                px-4
                py-2.5
                text-sm
                font-medium
                text-black
                transition-all
                duration-200
                hover:bg-white/90
              "
            >
              Personalizar
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="
                flex-1
                rounded-full
                bg-gradient-to-r
                from-[#3B82F6]
                via-[#7C3AED]
                to-[#D946EF]
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:scale-[1.02]
              "
            >
              Aceptar todas
            </button>

          </div>

        </div>
      )}


      {/* =====================================================
          COOKIE QUICK PANEL — DESDE COOKIE SETTINGS
          ===================================================== */}

      {showCookieQuick && !showSettings && (
        <div
          className="
            fixed
            bottom-5
            left-5
            z-[105]
            w-[calc(100%-2.5rem)]
            max-w-[360px]
            rounded-[22px]
            border
            border-white/[0.08]
            bg-[#242424]
            p-5
            shadow-[0_24px_80px_rgba(0,0,0,0.55)]
            sm:bottom-7
            sm:left-7
          "
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">
                Preferencias de privacidad
              </p>
              <p className="mt-2 text-xs leading-5 text-white/40">
  Puedes aceptar todas las cookies o decidir qué categorías
  quieres permitir. Para más información, lee la{" "}
  <a
    href="/politica-de-cookies"
    className="text-purple-400 transition-colors hover:text-purple-300"
  >
    Política de Cookies
  </a>
  .
</p>
            </div>

            <button
              type="button"
              onClick={() => setShowCookieQuick(false)}
              aria-label="Cerrar"
              className="
                flex h-7 w-7 shrink-0 items-center justify-center
                rounded-full border border-white/[0.08]
                text-white/45 transition hover:border-white/20 hover:text-white
              "
            >
              ×
            </button>
          </div>

          <div className="mt-4 flex gap-2.5">
            <button
              type="button"
              onClick={openDetailedSettings}
              className="
                flex-1 rounded-full border border-white/[0.10]
                px-4 py-2.5 text-xs font-medium text-white/75
                transition hover:border-white/20 hover:text-white
              "
            >
              Elegir cookies
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="
                flex-1 rounded-full bg-gradient-to-r
                from-[#3B82F6] via-[#7C3AED] to-[#D946EF]
                px-4 py-2.5 text-xs font-semibold text-white
                transition hover:scale-[1.02]
              "
            >
              Aceptar todas
            </button>
          </div>
        </div>
      )}


      {/* =====================================================
          COOKIE SETTINGS
                    ===================================================== */}

      {Boolean(showSettings) && (
        <div
          className="
            fixed
            inset-0
            z-[110]
            flex
            items-end
            justify-center
            bg-black/60
            p-4
            backdrop-blur-sm

            sm:items-center
          "
        >

          <div
            className="
              relative
              w-full
              max-w-[440px]
              rounded-[26px]
              border
              border-white/[0.08]
              bg-[#242424]
              p-5
              shadow-[0_30px_100px_rgba(0,0,0,0.65)]

              sm:p-6
            "
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setShowSettings(false)}
              aria-label="Cerrar"
              className="
                absolute
                right-4
                top-4
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.10]
                text-white/50
                transition
                hover:border-white/20
                hover:text-white
              "
            >
              ×
            </button>


            {/* HEADER */}

            <div className="pr-10">

              <h2
                className="
                  text-lg
                  font-semibold
                  text-white
                "
              >
                Configuración de cookies
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  leading-5
                  text-white/45
                "
              >
                Elige qué tipos de cookies quieres permitir durante tu navegación en Scalate.
              </p>

            </div>


            {/* =================================================
                NECESARIAS
                ================================================= */}

            <div
              className="
                mt-6
                rounded-2xl
                bg-white/[0.05]
                p-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Necesarias
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-white/35
                    "
                  >
                    Permiten el funcionamiento básico y la seguridad
                    de la web.
                  </p>

                </div>


                <div
                  className="
                    flex
                    h-6
                    w-11
                    items-center
                    justify-end
                    rounded-full
                    bg-white/20
                    px-1
                  "
                >
                  <div
                    className="
                      h-4
                      w-4
                      rounded-full
                      bg-white
                    "
                  />
                </div>

              </div>

            </div>


            {/* =================================================
                PREFERENCIAS
                ================================================= */}

            <CookieOption
              title="Preferencias"
              description="Permiten recordar configuraciones y preferencias."
              enabled={preferences.preferences}
              onChange={(value) =>
                setPreferences((current) => ({
                  ...current,
                  preferences: value,
                }))
              }
            />


            {/* =================================================
                ESTADÍSTICAS
                ================================================= */}

            <CookieOption
              title="Estadísticas"
              description="Nos ayudan a entender cómo se utiliza la web."
              enabled={preferences.statistics}
              onChange={(value) =>
                setPreferences((current) => ({
                  ...current,
                  statistics: value,
                }))
              }
            />


            {/* =================================================
                MARKETING
                ================================================= */}

            <CookieOption
              title="Marketing"
              description="Permiten personalización y seguimiento de campañas."
              enabled={preferences.marketing}
              onChange={(value) =>
                setPreferences((current) => ({
                  ...current,
                  marketing: value,
                }))
              }
            />


            {/* =================================================
                ACTIONS
                ================================================= */}

            <div className="mt-5 flex gap-3">

              <button
                type="button"
                onClick={rejectOptional}
                className="
                  flex-1
                  rounded-full
                  border
                  border-white/[0.10]
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-white/70
                  transition
                  hover:border-white/20
                  hover:text-white
                "
              >
                Solo necesarias
              </button>

              <button
                type="button"
                onClick={() => savePreferences(preferences)}
                className="
                  flex-1
                  rounded-full
                  bg-gradient-to-r
                  from-[#3B82F6]
                  via-[#7C3AED]
                  to-[#D946EF]
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:scale-[1.02]
                "
              >
                Guardar preferencias
              </button>

            </div>

          </div>

                </div>
      )}

    </>
  );
}


/* =====================================================
   COMPONENTE — OPCIÓN DE COOKIE
   ===================================================== */

function CookieOption({
  title,
  description,
  enabled,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div
      className="
        mt-3
        rounded-2xl
        bg-white/[0.05]
        p-4
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >

        <div>

          <p
            className="
              text-sm
              font-semibold
              text-white
            "
          >
            {title}
          </p>

          <p
            className="
              mt-1
              text-xs
              leading-5
              text-white/35
            "
          >
            {description}
          </p>

        </div>


        {/* TOGGLE */}

        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          aria-label={`Activar ${title}`}
          onClick={() => onChange(!enabled)}
          className={`
            relative
            flex
            h-6
            w-11
            shrink-0
            items-center
            rounded-full
            p-1
            transition-colors
            duration-200
            ${
              enabled
                ? "bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#D946EF]"
                : "bg-white/20"
            }
          `}
        >

          <span
            className={`
              h-4
              w-4
              rounded-full
              bg-white
              shadow-sm
              transition-transform
              duration-200
              ${
                enabled
                  ? "translate-x-5"
                  : "translate-x-0"
              }
            `}
          />

        </button>

      </div>

    </div>
  );
}