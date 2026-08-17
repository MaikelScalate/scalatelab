"use client";

import Link from "next/link";
import { useState } from "react";

export default function OnboardingAcceso() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/onboarding-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = "/onboarding";
        return;
      }

      setError(
        data.error ||
          "La contraseña no es correcta. Inténtalo de nuevo."
      );
    } catch {
      setError("Ha ocurrido un error. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b] text-white">
      <Background />

      {/* =====================================================
          LOGO
          ===================================================== */}

      <header
        className="
          relative
          z-20
          flex
          w-full
          justify-center
          px-5
          pt-6
          sm:pt-7
          lg:pt-8
        "
      >
        <Link
          href="/"
          aria-label="Volver a Scalate"
          className="
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <img
            src="/icon.png"
            alt="Scalate"
            className="
              h-16
              w-16
              object-contain
              sm:h-14
              sm:w-14
            "
          />
        </Link>
      </header>

      {/* =====================================================
          CONTENIDO
          ===================================================== */}

      <section
        className="
          relative
          z-10
          flex
          min-h-[78vh]
          items-center
          justify-center
          px-5
          py-6
          sm:px-8
          sm:py-8
        "
      >
        <div className="mx-auto w-full max-w-lg">

          {/* =================================================
              ETIQUETA
              ================================================= */}

          <div className="flex justify-center">
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.10]
                bg-[#05060b]/80
                px-5
                py-2.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/70
                shadow-[0_0_30px_rgba(124,58,237,0.05)]
                backdrop-blur-sm
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              {/* PUNTO ANIMADO */}

              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span
                  className="
                    absolute
                    h-3
                    w-3
                    animate-ping
                    rounded-full
                    bg-purple-400/50
                  "
                />

                <span
                  className="
                    relative
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-gradient-to-r
                    from-[#3B82F6]
                    to-[#D946EF]
                    shadow-[0_0_12px_rgba(217,70,239,0.9)]
                  "
                />
              </span>

              <span>ONBOARDING</span>
            </div>
          </div>

          {/* =================================================
              TÍTULO
              ================================================= */}

          <div className="mt-5 text-center sm:mt-6">
            <h1
              className="
                text-[2.35rem]
                font-semibold
                leading-[1.04]
                tracking-[-0.055em]
                sm:text-[2.4rem]
              "
            >
              Un último paso
              <br />
              antes de empezar.
            </h1>
          </div>

          {/* =================================================
              TARJETA DE ACCESO
              ================================================= */}

          <div
            className="
              relative
              mt-10
              rounded-[28px]
              border
              border-white/[0.10]
              bg-[#08090f]/85
              p-6
              shadow-[0_0_80px_rgba(124,58,237,0.10)]
              backdrop-blur-xl
              sm:mt-12
              sm:p-8
            "
          >

            {/* Glow interior */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-32
                w-64
                -translate-x-1/2
                rounded-full
                bg-purple-600/10
                blur-[70px]
              "
            />

            <div className="relative">

              {/* =================================================
                  ICONO CANDADO
                  ================================================= */}

              <div className="mb-6 flex justify-center">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-purple-400/20
                    bg-purple-500/[0.08]
                    text-purple-300
                    shadow-[0_0_30px_rgba(168,85,247,0.12)]
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                    />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>

              {/* =================================================
                  TEXTO
                  ================================================= */}

              <div className="text-center">
                <h2
                  className="
                    text-xl
                    font-semibold
                    tracking-[-0.025em]
                    sm:text-2xl
                  "
                >
                  Accede a tu onboarding
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-white/45
                    sm:text-base
                  "
                >
                  Introduce tu contraseña para acceder.
                </p>
              </div>

              {/* =================================================
                  FORMULARIO
                  ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="mt-5"
              >

                <label
                  htmlFor="password"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-white/70
                  "
                >
                  Contraseña
                </label>

                <div className="relative">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Introduce tu contraseña"
                    autoComplete="off"
                    disabled={loading}
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-white/[0.12]
                      bg-white/[0.04]
                      px-5
                      pr-14
                      text-base
                      text-white
                      outline-none
                      placeholder:text-white/25
                      transition-all
                      duration-200
                      focus:border-purple-400/50
                      focus:bg-white/[0.06]
                      focus:ring-2
                      focus:ring-purple-500/10
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  />

                  {/* Mostrar / ocultar contraseña */}

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"
                    }
                    disabled={loading}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-white/35
                      transition-colors
                      hover:text-white/70
                      disabled:pointer-events-none
                      disabled:opacity-50
                    "
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m3 3 18 18" />
                        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M9.9 4.2A10.5 10.5 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-3.2 4.5" />
                        <path d="M6.6 6.6C3.7 8.5 2 12 2 12s3.5 8 10 8a10.6 10.6 0 0 0 4-.8" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* =================================================
                    ERROR
                    ================================================= */}

                {error && (
                  <p
                    role="alert"
                    className="
                      mt-3
                      text-sm
                      font-medium
                      text-red-400
                    "
                  >
                    {error}
                  </p>
                )}

                {/* =================================================
                    BOTÓN
                    ================================================= */}

                <button
                  type="submit"
                  disabled={loading || !password.trim()}
                  className="
                    mt-5
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-[#7C3AED]
                    to-[#D946EF]
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_0_25px_rgba(217,70,239,0.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_0_45px_rgba(217,70,239,0.45)]
                    active:scale-[0.98]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    disabled:hover:translate-y-0
                    disabled:hover:shadow-[0_0_25px_rgba(217,70,239,0.25)]
                    sm:text-base
                  "
                >
                  {loading ? "COMPROBANDO..." : "ACCEDER AL ONBOARDING"}
                </button>
              </form>

              {/* =================================================
                  PEQUEÑO TEXTO
                  ================================================= */}

              <p
                className="
                  mt-5
                  text-center
                  text-xs
                  leading-5
                  text-white/30
                "
              >
                ¿No encuentras tu contraseña? Contacta con nosotros.
              </p>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}


/* ===========================================================
   FONDO GLOBAL SCALATE
   =========================================================== */

function Background() {
  return (
    <>
      {/* =====================================================
          BASE
          ===================================================== */}

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

      {/* =====================================================
          HEXÁGONOS
          ===================================================== */}

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
          backgroundImage: "url('/backgrounds/hex-grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
        }}
      />

      {/* =====================================================
          GLOW AZUL — IZQUIERDA
          ===================================================== */}

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

      {/* =====================================================
          GLOW MORADO — DERECHA
          ===================================================== */}

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
          GLOW CENTRAL
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-1/2
          top-1/2
          z-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/[0.04]
          blur-[140px]
        "
      />
    </>
  );
}