"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Footer from "../components/sections/Footer";
import {
  getCountries,
  getCountryCallingCode,
  type Country,
} from "react-phone-number-input";
type FormData = {
  name: string;
  email: string;
  phone: string;
  website: string;
  role: string;
  years: string;
  reason: string;
  manager: string;
  revenue: string;
  objective: string;
  obstacles: string;
  areas: string;
  investment: string;
  commitment: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  website: "",
  role: "",
  years: "",
  reason: "",
  manager: "",
  revenue: "",
  objective: "",
  obstacles: "",
  areas: "",
  investment: "",
  commitment: "",
};

const YES_COMMITMENT =
  "Sí, escalar mi marca es lo más importante.";

const NO_COMMITMENT =
  "No, ahora mismo no es una prioridad.";

export default function AplicarPage() {
  const [formData, setFormData] =
    useState<FormData>(initialData);

  const [submitted, setSubmitted] = useState(false);

  const [privacyAccepted, setPrivacyAccepted] =
    useState(false);

  // País seleccionado para el teléfono. España es el valor inicial.
  const [phoneCountry, setPhoneCountry] = useState<Country>("ES");

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCommitment = (value: string) => {
    updateField("commitment", value);
  };

const [isSending, setIsSending] = useState(false);
const [submitError, setSubmitError] = useState("");

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (formData.commitment !== YES_COMMITMENT) {
    return;
  }

  if (!privacyAccepted) {
    return;
  }

  setIsSending(true);
  setSubmitError("");

  try {
    const response = await fetch("/api/aplicar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result?.error || "No se ha podido enviar la solicitud."
      );
    }

    console.log("Solicitud enviada correctamente:", result);

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {
    console.error("Error enviando solicitud:", error);

    setSubmitError(
      "No se ha podido enviar la solicitud. Inténtalo de nuevo."
    );
  } finally {
    setIsSending(false);
  }
};

  const canSubmit =
    formData.commitment === YES_COMMITMENT &&
    privacyAccepted;
const handleWhatsApp = () => {
  if (!canSubmit) return;

  const callingCode = getCountryCallingCode(phoneCountry);

  const message = `
Hola Maikel 👋

Quiero aportar mis respuestas para llevar mi marca al siguiente nivel.

DATOS PERSONALES

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone ? `+${callingCode} ${formData.phone}` : "No indicado"}
Web: ${formData.website}
Cargo: ${formData.role || "No indicado"}

MARCA

Años en el mercado: ${formData.years || "No indicado"}
Gestión del E-commerce: ${formData.manager || "No indicado"}
Facturación media mensual: ${formData.revenue || "No indicado"}

Objetivo a 6-12 meses:
${formData.objective || "No indicado"}

Obstáculos:
${formData.obstacles || "No indicado"}

COMPROMISO

${formData.commitment}
`.trim();

  const whatsappUrl =
    `https://wa.me/34610086292?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};
  /*
   * =========================================================
   * PANTALLA DE CONFIRMACIÓN
   * =========================================================
   */

  if (submitted) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#05060b] text-white">
        <Background />

        <header
          className="
            relative
            z-20
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            justify-between
            px-5
            py-4
            sm:px-8
            sm:py-5
            lg:px-10
          "
        >
          {/* LOGO — MISMO ESTILO QUE NAVBAR */}

          <Link
            href="/"
            aria-label="Volver a la web"
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
              transition-all
              duration-300
              hover:scale-105

              sm:text-3xl
              lg:text-1xl
            "
          >
            SCALATE
          </Link>

          <BackButton />
        </header>

        <section
          className="
            relative
            z-10
            flex
            min-h-[62vh]
            items-center
            justify-center
            px-5
            py-16
            sm:px-6
            sm:py-20
          "
        >
          <div
            className="
              w-full
              max-w-2xl
              rounded-[28px]
              border
              border-white/[0.08]
              bg-[#05060b]
              p-8
              text-center
              shadow-[0_0_70px_rgba(124,58,237,0.08)]
              sm:p-14
            "
          >
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-purple-400/20
                bg-purple-500/10
                text-2xl
                text-purple-300
              "
            >
              ✓
            </div>

            <h1
              className="
                mt-7
                text-3xl
                font-semibold
                tracking-[-0.045em]
                sm:text-4xl
              "
            >
              Hemos recibido tu solicitud.
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-white/50
                sm:text-base
              "
            >
              Gracias por contarnos tu situación. Revisaremos
              la información y nos pondremos en contacto contigo
              si vemos que podemos ayudarte a escalar tu marca.
            </p>

            <Link
              href="/"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-[#7C3AED]
                to-[#D946EF]
                px-7
                py-3.5
                font-semibold
                text-white
                shadow-[0_0_25px_rgba(217,70,239,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-[0_0_45px_rgba(217,70,239,0.45)]
                active:scale-95
              "
            >
              Volver a la web
            </Link>
          </div>
        </section>

        <div className="hidden lg:block">
  <Footer />
</div>
      </main>
    );
  }

  /*
   * =========================================================
   * PÁGINA PRINCIPAL
   * =========================================================
   */

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b] text-white">
      <Background />

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          justify-between
          px-5
          py-4
          sm:px-8
          sm:py-5
          lg:px-10
        "
      >
        {/* LOGO — MISMO QUE NAVBAR */}

        <Link
          href="/"
          aria-label="Volver a la web"
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
            transition-all
            duration-300
            hover:scale-105

            sm:text-3xl
            lg:text-1xl
          "
        >
          SCALATE
        </Link>

        {/* BOTÓN */}

        <BackButton />
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          px-5
          pb-10
          pt-8
          text-center
          sm:px-8
          sm:pb-14
          sm:pt-12
          lg:pb-16
          lg:pt-14
        "
      >
        {/* E-COMMERCE GROWTH */}

        <div
          className="
            mx-auto
            mb-5
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/[0.10]
            bg-[#05060b]/80
            px-4
            py-2
            text-xs
            font-medium
            uppercase
            tracking-[0.12em]
            text-white/70
          "
        >
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span
              className="
                absolute
                h-2.5
                w-2.5
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
                shadow-[0_0_12px_rgba(217,70,239,0.8)]
              "
            />
          </span>

          <span>E-commerce Growth</span>
        </div>

        {/* TÍTULO */}

        <h1
          className="
            text-[2.5rem]
            font-semibold
            leading-[1.04]
            tracking-[-0.055em]
            sm:text-[3.5rem]
            lg:text-[3.4rem]
          "
        >
          Hablemos de tu marca.
        </h1>

        {/* SUBTÍTULO */}

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-white/55
            sm:text-lg
            sm:leading-8
          "
        >
          Queremos entender dónde está tu marca, cuáles son tus objetivos y qué está impidiendo
          que llegues allí. Cuéntanos tu situación y estudiaremos tu caso.
        </p>
      </section>

      {/* =====================================================
          FORMULARIO
          ===================================================== */}

      <section
        className="
          relative
          z-10
          px-5
          pb-20
          sm:px-6
          lg:pb-28
        "
      >
        <form
          onSubmit={handleSubmit}
          className="
            mx-auto
            max-w-2xl
            rounded-[28px]
            border
            border-white/[0.08]
            bg-[#05060b]
            p-5
            shadow-[0_0_80px_rgba(0,0,0,0.30)]
            sm:p-8
            lg:p-10
          "
        >
          {/* =================================================
              INTRO
              ================================================= */}

          <div
            className="
              border-b
              border-white/[0.07]
              pb-8
            "
          >
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.14em]
                text-purple-300/80
              "
            >
              Antes de empezar
            </p>

            <h2
              className="
                mt-3
                text-2xl
                font-semibold
                tracking-[-0.04em]
                sm:text-3xl
              "
            >
              Queremos conocerte mejor.
            </h2>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-white/40
              "
            >
              Responde con la mayor sinceridad posible.
              Cuanto más concreto seas, mejor sabremos
              si somos un buen encaje para ayudarte a escalar.
            </p>
          </div>

          {/* =================================================
              01 — DATOS PERSONALES
              ================================================= */}

          <div className="mt-10">
            <FormSectionTitle
              number="01"
              title="Permítenos conocerte"
            />

            <div className="mt-7 space-y-6">
              <Field
                label="Nombre y apellidos"
                required
                value={formData.name}
                onChange={(value) =>
                  updateField("name", value)
                }
                placeholder="Tu nombre"
              />

              <Field
                label="Correo electrónico"
                type="email"
                required
                value={formData.email}
                onChange={(value) =>
                  updateField("email", value)
                }
                placeholder="nombre@empresa.com"
              />

              <PhoneField
                country={phoneCountry}
                onCountryChange={setPhoneCountry}
                value={formData.phone}
                onChange={(value) => updateField("phone", value)}
              />

              <Field
                label="Página web de tu marca E-commerce"
                required
                value={formData.website}
                onChange={(value) =>
                  updateField("website", value)
                }
                placeholder="tumarca.com"
              />

              <SelectField
                label="Tu cargo actual en la empresa"
                required
                value={formData.role}
                onChange={(value) =>
                  updateField("role", value)
                }
                options={[
                  "Fundador/a",
                  "CEO",
                  "CMO",
                  "COO",
                  "Otro",
                ]}
              />
            </div>
          </div>

          {/* =================================================
              02 — MARCA
              ================================================= */}

          <div
            className="
              mt-14
              border-t
              border-white/[0.07]
              pt-10
            "
          >
            <FormSectionTitle
              number="02"
              title="Conozcamos tu marca"
            />
            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-white/40
              "
            >
              Necesitamos conocer tu situación actual para
              entender tu punto de partida.
            </p>
            <div className="mt-7 space-y-6">
              <SelectField
                label="¿Cuántos años lleva tu marca en el mercado?"
                required
                value={formData.years}
                onChange={(value) =>
                  updateField("years", value)
                }
                options={[
                  "Menos de 1 año",
                  "1 - 3 años",
                  "3 - 5 años",
                  "Más de 5 años",
                ]}
              />
              <div className="mt-7 space-y-6">
              <SelectField
                label="¿Cuál es la facturación media mensual de tu marca E-commerce?"
                required
                value={formData.revenue}
                onChange={(value) =>
                  updateField("revenue", value)
                }
                options={[
                  "0€ - 10.000€",
                  "10.000€ - 30.000€",
                  "30.000€ - 60.000€",
                  "+60.000€",
                ]}
              />
              <TextAreaField
                label="¿Cuál es tu mayor objetivo empresarial con tu marca a 6-12 meses?"
                required
                value={formData.objective}
                onChange={(value) =>
                  updateField("objective", value)
                }
                placeholder="Ej.: duplicar facturación, mejorar la tasa de conversión, potenciar otros canales de venta, llegar a más audiencia..."
              />

              <TextAreaField
                label="¿Qué obstáculos crees que están impidiendo que logres esos resultados?"
                required
                value={formData.obstacles}
                onChange={(value) =>
                  updateField("obstacles", value)
                }
                placeholder="Sé autocrítico/a. Es imprescindible conocer el problema real."
              />
<SelectField
                label="¿Quién gestiona actualmente tu ecosistema E-commerce?"
                required
                value={formData.manager}
                onChange={(value) =>
                  updateField("manager", value)
                }
                options={[
                  "Yo mismo/a",
                  "Mi equipo interno",
                  "Un freelance",
                  "Una agencia",
                  "Combinación de varios",
                ]}
              />
            </div>
          </div>
</div>

          {/* =================================================
              03 — COMPROMISO
              ================================================= */}

          <div
            className="
              mt-14
              border-t
              border-white/[0.07]
              pt-10
            "
          >
            <FormSectionTitle
              number="03"
              title="Una última cosa."
            />

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-white/40
              "
            >
              Trabajamos con marcas que realmente están
              preparadas para dar el siguiente paso.
            </p>

            <div
              className="
                mt-7
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#05060b]
                p-5
                sm:p-7
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                  leading-7
                  tracking-[-0.025em]
                  sm:text-2xl
                "
              >
                ¿Estás dispuesto/a a invertir el tiempo, esfuerzo
                e inversión necesaria para llevar tu marca al
                siguiente nivel?
              </h3>

              <div className="mt-7 space-y-3">
                <CommitmentOption
                  selected={
                    formData.commitment === YES_COMMITMENT
                  }
                  onClick={() =>
                    handleCommitment(YES_COMMITMENT)
                  }
                >
                  Sí, escalar mi marca es lo más importante.
                </CommitmentOption>

                <CommitmentOption
                  selected={
                    formData.commitment === NO_COMMITMENT
                  }
                  negative
                  onClick={() =>
                    handleCommitment(NO_COMMITMENT)
                  }
                >
                  No, ahora mismo no es una prioridad.
                </CommitmentOption>
              </div>
            </div>

            {formData.commitment === NO_COMMITMENT && (
              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#05060b]
                  p-6
                  text-center
                "
              >
                <p className="text-lg font-medium text-white">
                  Gracias por tu sinceridad.
                </p>

                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-md
                    text-sm
                    leading-6
                    text-white/45
                  "
                >
                  En este momento no podemos ayudarte. Cuando
                  escalar tu marca sea una prioridad, estaremos
                  aquí.
                </p>
              </div>
            )}
          </div>

          {/* =================================================
              04 — ENVÍO
              ================================================= */}

          <div
            className="
              mt-14
              border-t
              border-white/[0.07]
              pt-10
            "
          >
            <FormSectionTitle
              number="04"
              title="Perfecto. Vamos a por ello."
            />

            <div
              className="
                mt-7
                rounded-2xl
                border
                border-purple-400/15
                bg-purple-500/[0.035]
                p-5
                sm:p-7
              "
            >
              <p
                className="
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                Revisaremos la información que nos has
                proporcionado para valorar si podemos ayudarte
                realmente a conseguir tus objetivos.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-white/40
                "
              >
                Si vemos que existe una oportunidad clara de
                trabajar juntos, nos pondremos en contacto
                contigo.
              </p>
            </div>

            {/* PRIVACIDAD */}

            <label
              className={`
                mt-7
                flex
                items-start
                gap-3
                text-sm
                leading-6
                ${
                  formData.commitment === NO_COMMITMENT
                    ? "pointer-events-none opacity-35"
                    : "text-white/50"
                }
              `}
            >
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) =>
                  setPrivacyAccepted(e.target.checked)
                }
                disabled={
                  formData.commitment === NO_COMMITMENT
                }
                className="
                  mt-1
                  h-4
                  w-4
                  shrink-0
                  accent-purple-500
                "
              />

              <span>
                He leído y acepto la{" "}
                <Link
                  href="/politica-de-privacidad"
                  className="
                    text-purple-400
                    transition
                    hover:text-purple-300
                  "
                >
                  Política de Privacidad
                </Link>
                .
              </span>
            </label>

            {/* BOTÓN FINAL */}

            <div className="mt-8">
              <button
  type="submit"
  disabled={!canSubmit || isSending}
                className={`
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  ${
                    canSubmit
                      ? `
                        cursor-pointer
                        bg-gradient-to-r
                        from-[#7C3AED]
                        to-[#D946EF]
                        shadow-[0_0_25px_rgba(217,70,239,0.25)]
                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-[0_0_45px_rgba(217,70,239,0.45)]
                        active:scale-95
                      `
                      : `
                        cursor-not-allowed
                        bg-white/[0.07]
                        text-white/30
                      `
                  }
                `}
              >
                {isSending ? "Enviando solicitud..." : "Enviar solicitud →"}
              </button>
              <button
  type="button"
  disabled={!canSubmit}
  onClick={handleWhatsApp}
  className={`
    mt-3
    inline-flex
    w-full
    items-center
    justify-center
    rounded-full
    border
    px-6
    py-4
    font-semibold
    transition-all
    duration-300

    ${
      canSubmit
        ? `
          cursor-pointer
          border-[#25D366]/40
          bg-[#25D366]/10
          text-[#25D366]
          hover:-translate-y-1
          hover:bg-[#25D366]/15
          hover:border-[#25D366]/60
          active:scale-95
        `
        : `
          cursor-not-allowed
          border-white/[0.08]
          bg-white/[0.03]
          text-white/20
        `
    }
  `}
>
  Enviar por WhatsApp
</button>
              {submitError && (
  <p className="mt-4 text-center text-sm text-red-400">
    {submitError}
  </p>
)}
            </div>

            {!privacyAccepted &&
              formData.commitment === YES_COMMITMENT && (
                <p
                  className="
                    mt-3
                    text-center
                    text-xs
                    text-white/30
                  "
                >
                  Acepta la Política de Privacidad para poder
                  enviar la solicitud.
                </p>
              )}

            {formData.commitment === "" && (
              <p
                className="
                  mt-3
                  text-center
                  text-xs
                  text-white/30
                "
              >
                Selecciona una opción en la última pregunta para continuar.
              </p>
            )}
          </div>
        </form>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <div className="hidden lg:block">
  <Footer />
</div>
    </main>
  );
}

/* ===========================================================
   BOTÓN VOLVER A LA WEB
   MISMO ESTILO QUE Button.tsx
   =========================================================== */

function BackButton() {
  return (
    <Link
      href="/"
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-[#7C3AED]
        to-[#D946EF]
        px-5
        py-2.5
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        shadow-[0_0_25px_rgba(217,70,239,0.25)]
        hover:-translate-y-1
        hover:scale-[1.02]
        hover:shadow-[0_0_45px_rgba(217,70,239,0.45)]
        active:scale-95

        sm:px-6
        sm:py-3
      "
    >
      Volver a la web
    </Link>
  );
}

/* ===========================================================
   FONDO GLOBAL
   =========================================================== */

function Background() {
  return (
    <>
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

      {/* =====================================================
          GLOW AZUL
          MUCHO MÁS HACIA FUERA
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-[-720px]
          top-[20px]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-600/30
          blur-[180px]

          sm:left-[-380px]
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
          GLOW MORADO
          MUCHO MÁS HACIA FUERA
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          right-[-720px]
          top-[80px]
          z-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-purple-600/35
          blur-[180px]

          sm:right-[-380px]
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
    </>
  );
}

/* ===========================================================
   TÍTULO DE SECCIÓN
   =========================================================== */

function FormSectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div>
      <div
        className="
          inline-flex
          rounded-lg
          border
          border-purple-400/20
          bg-purple-500/10
          px-3
          py-1
          text-xs
          font-semibold
          text-purple-300
        "
      >
        {number}
      </div>

      <h2
        className="
          mt-4
          text-2xl
          font-semibold
          tracking-[-0.035em]
          sm:text-3xl
        "
      >
        {title}
      </h2>
    </div>
  );
}

/* ===========================================================
   INPUT
   =========================================================== */

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-sm
          font-medium
          text-white/65
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-purple-400">
            *
          </span>
        )}
      </label>

      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-white/[0.08]
          bg-[#08090f]
          px-4
          py-3.5
          text-sm
          text-white
          outline-none
          placeholder:text-white/20
          transition
          focus:border-purple-400/40
          focus:bg-[#0a0b12]
        "
      />
    </div>
  );
}

/* ===========================================================
   TEXTAREA
   =========================================================== */

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-sm
          font-medium
          leading-6
          text-white/65
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-purple-400">
            *
          </span>
        )}
      </label>

      <textarea
        required={required}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        rows={5}
        className="
          w-full
          resize-y
          rounded-xl
          border
          border-white/[0.08]
          bg-[#08090f]
          px-4
          py-3.5
          text-sm
          leading-6
          text-white
          outline-none
          placeholder:text-white/20
          transition
          focus:border-purple-400/40
          focus:bg-[#0a0b12]
        "
      />
    </div>
  );
}

/* ===========================================================
   SELECT
   =========================================================== */

function SelectField({
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-sm
          font-medium
          leading-6
          text-white/65
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-purple-400">
            *
          </span>
        )}
      </label>

      <select
        required={required}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full
          appearance-none
          rounded-xl
          border
          border-white/[0.08]
          bg-[#08090f]
          px-4
          py-3.5
          text-sm
          text-white
          outline-none
          transition
          focus:border-purple-400/40
          focus:bg-[#0a0b12]
        "
      >
        <option
          value=""
          disabled
          className="bg-[#08090f] text-white/50"
        >
          Seleccionar...
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#08090f] text-white"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ===========================================================
   OPCIONES SÍ / NO
   =========================================================== */

function CommitmentOption({
  children,
  selected,
  onClick,
  negative = false,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  negative?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full
        rounded-xl
        border
        px-5
        py-4
        text-left
        transition-all

        ${
          selected
            ? negative
              ? "border-white/20 bg-[#0a0b12] text-white"
              : "border-purple-400/50 bg-purple-500/10 text-white shadow-[0_0_25px_rgba(168,85,247,0.08)]"
            : "border-white/[0.08] bg-[#08090f] text-white/60 hover:border-white/20 hover:bg-[#0a0b12] hover:text-white"
        }
      `}
    >
      <div className="flex items-start gap-3">
        <span
          className={`
            mt-0.5
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            text-[10px]
            transition

            ${
              selected
                ? negative
                  ? "border-white/50 bg-white/10"
                  : "border-purple-300 bg-purple-500 text-white"
                : "border-white/20 bg-[#08090f]"
            }
          `}
        >
          {selected ? "✓" : ""}
        </span>

        <span className="font-medium leading-6">
          {children}
        </span>
      </div>
    </button>
  );
}
function PhoneField({
  country,
  onCountryChange,
  value,
  onChange,
}: {
  country: Country;
  onCountryChange: (country: Country) => void;
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const countries = useMemo(() => {
    const displayNames = new Intl.DisplayNames(["es"], {
      type: "region",
    });

    return getCountries().map((code) => ({
      code,
      name: displayNames.of(code) || code,
      callingCode: getCountryCallingCode(code),
      flag: countryFlag(code),
    }));
  }, []);

  const filteredCountries = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("es");

    if (!term) return countries;

    return countries.filter((item) =>
      [item.name, item.code, `+${item.callingCode}`].some((value) =>
        value.toLocaleLowerCase("es").includes(term)
      )
    );
  }, [countries, search]);

  const selectedCountry = countries.find(
    (item) => item.code === country
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectCountry = (code: Country) => {
    onCountryChange(code);
    setOpen(false);
    setSearch("");
  };

  /*
   * IMPORTANTE:
   * El input SOLO guarda el número nacional.
   *
   * Ejemplo:
   * país = ES (+34)
   * teléfono = 600000000
   *
   * formData.phone = "600000000"
   *
   * NO:
   * +34600000000
   * 34600000000
   */

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const onlyNumbers = event.target.value.replace(/\D/g, "");

    onChange(onlyNumbers);
  };

  return (
    <div>
      <label
        className="
          mb-2
          block
          text-sm
          font-medium
          text-white/65
        "
      >
        Número de teléfono
      </label>

      <div ref={wrapperRef} className="relative z-30">
        <div
          className="
            flex
            min-h-[54px]
            overflow-visible
            rounded-xl
            border
            border-white/[0.08]
            bg-[#08090f]
            transition
            focus-within:border-purple-400/40
            focus-within:bg-[#0a0b12]
          "
        >
          {/* SELECTOR DE PAÍS */}
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="listbox"
            onClick={() => setOpen((current) => !current)}
            className="
              flex
              shrink-0
              items-center
              gap-2
              rounded-l-xl
              border-r
              border-white/[0.08]
              px-3
              text-sm
              font-medium
              text-white
              transition
              hover:bg-white/[0.04]
              focus:outline-none
              focus:ring-1
              focus:ring-purple-400/40
              sm:px-4
            "
          >
            <span className="text-lg leading-none">
              {selectedCountry?.flag}
            </span>

            <span className="font-semibold text-white">
              +{selectedCountry?.callingCode}
            </span>

            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className={`ml-1 h-4 w-4 text-white/45 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="m5 7.5 5 5 5-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* NÚMERO — SOLO NÚMEROS */}
          <input
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            value={value}
            onChange={handlePhoneChange}
            placeholder="600 000 000"
            className="
              min-w-0
              flex-1
              border-0
              bg-transparent
              px-4
              text-sm
              text-white
              outline-none
              placeholder:text-white/20
            "
          />
        </div>

        {/* SELECTOR DE PAÍSES */}
        {open && (
          <div
            className="
              absolute
              left-0
              top-[calc(100%+8px)]
              z-50
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.10]
              bg-[#08090f]
              shadow-[0_20px_60px_rgba(0,0,0,0.55)]
            "
          >
            {/* BUSCADOR */}
            <div className="border-b border-white/[0.08] p-3">
              <div className="relative">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    text-white/35
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="6.5" />
                  <path
                    d="m16 16 4 4"
                    strokeLinecap="round"
                  />
                </svg>

                <input
                  autoFocus
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Buscar país o prefijo..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#05060b]
                    py-3
                    pl-10
                    pr-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/25
                    focus:border-purple-400/40
                  "
                />
              </div>
            </div>

            {/* LISTA DE PAÍSES */}
            <div className="max-h-72 overflow-y-auto overscroll-contain py-1">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((item) => {
                  const selected = item.code === country;

                  return (
                    <button
                      key={item.code}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => selectCountry(item.code)}
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        px-4
                        py-3
                        text-left
                        transition
                        hover:bg-white/[0.05]
                        ${
                          selected
                            ? "bg-purple-500/[0.08]"
                            : ""
                        }
                      `}
                    >
                      <span className="w-7 text-lg leading-none">
                        {item.flag}
                      </span>

                      <span className="min-w-0 flex-1 truncate text-sm font-medium text-white">
                        {item.name}
                      </span>

                      <span className="text-sm font-semibold text-white/70">
                        +{item.callingCode}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="px-4 py-8 text-center text-sm text-white/40">
                  No hemos encontrado ningún país.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function countryFlag(countryCode: string) {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

<style jsx global>{`
  .phone-input-scalate {
    display: flex;
    flex: 1;
    min-width: 0;
    align-items: center;
  }

  .phone-input-scalate .PhoneInputCountry {
    display: none;
  }

  .phone-input-scalate .PhoneInputInput {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: none;
    background: transparent;
    color: white;
    font-size: 14px;
    padding: 0 16px;
  }

  .phone-input-scalate .PhoneInputInput::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  .phone-input-scalate .PhoneInputInput:focus {
    outline: none;
  }

  .phone-input-scalate input:-webkit-autofill,
  .phone-input-scalate input:-webkit-autofill:hover,
  .phone-input-scalate input:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #08090f inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`}</style>