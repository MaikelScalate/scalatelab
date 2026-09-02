export default function PreCallVSL() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-5">

      {/* =========================================================
          GLOWS DE FONDO
          - En móvil están más separados hacia los laterales.
          - Desde sm vuelven a la posición centrada original.
          ========================================================= */}

      {/* Glow azul */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[450px]
          w-[650px]
          -translate-x-[75%]
          rounded-full
          bg-blue
          opacity-[0.04]
          blur-[150px]
          sm:-translate-x-1/2
        "
      />

      {/* Glow morado */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[300px]
          h-[450px]
          w-[650px]
          translate-x-[25%]
          rounded-full
          bg-purple
          opacity-[0.04]
          blur-[170px]
          sm:-translate-x-1/2
        "
      />

      <div className="relative mx-auto max-w-7xl text-center">

        {/* =========================================================
            BADGE
            ========================================================= */}
        <div className="mb-5 flex justify-center">
          <div
            className="
              relative
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple/50
              bg-black/40
              px-4
              py-2
              shadow-[0_0_20px_rgba(139,92,246,0.12)]
              backdrop-blur-md
            "
          >

            {/* Punto + ondas */}
            <span className="relative flex h-3 w-3 items-center justify-center">

              <span
                className="
                  absolute
                  h-3
                  w-3
                  rounded-full
                  border
                  border-purple/50
                  animate-ping
                "
              />

              <span
                className="
                  absolute
                  h-2
                  w-2
                  rounded-full
                  border
                  border-purple/60
                "
              />

              <span
                className="
                  relative
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-purple
                  shadow-[0_0_10px_rgba(168,85,247,1)]
                "
              />

            </span>

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.10em]
                text-white/70
                sm:text-sm
              "
            >
              Prepárate para escalar tu marca
            </span>

          </div>
        </div>


        {/* =========================================================
            TÍTULO
            En ordenador:
            
            MIRA ESTE VÍDEO DE TAN SOLO
            260 SEGUNDOS ANTES DE LA LLAMADA

            El salto se fuerza únicamente desde lg.
            ========================================================= */}
        <h1
          className="
            mx-auto
            max-w-6xl
            text-2xl
            font-extrabold
            uppercase
            leading-[1.08]
            tracking-tight
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >

          {/* Primera línea en ordenador */}
          <span className="lg:block">
            Mira este vídeo de tan solo{" "}
          </span>

          {/* Segunda línea en ordenador */}
          <span className="lg:block">
            <span
              className="
                bg-gradient-to-r
                from-blue
                via-indigo-400
                to-purple
                bg-clip-text
                text-transparent
              "
            >
              260 SEGUNDOS
            </span>{" "}
            antes de la llamada
          </span>

        </h1>


        {/* =========================================================
            DESCRIPCIÓN
            ========================================================= */}
        <p
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-base
            leading-relaxed
            text-white/55
            sm:text-lg
          "
        >
          Así sabrás de antemano los requisitos, qué veremos en la llamada
          y el proceso exacto que seguimos para escalar marcas como la tuya.
        </p>


        {/* =========================================================
            VIDEO
            ========================================================= */}
        <div className="group relative mx-auto mt-10 max-w-4xl">

          {/* Glow suave detrás del vídeo */}
          <div
  className="
    absolute
    -inset-2
    rounded-2xl
    bg-gradient-to-r
    from-blue/70
    via-purple/80
    to-blue/70
    opacity-70
    blur-2xl
  "
/>

          {/* Marco */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-white/10
              p-[1px]
            "
          >

            {/* =====================================================
                LÍNEA DE LUZ SUPERIOR
                ===================================================== */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl">
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-32
                  bg-gradient-to-r
                  from-transparent
                  via-blue
                  to-purple
                  shadow-[0_0_15px_#6366f1]
                  animate-border-top
                "
              />
            </div>


            {/* =====================================================
                LÍNEA DE LUZ DERECHA
                ===================================================== */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl">
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-32
                  w-[2px]
                  bg-gradient-to-b
                  from-transparent
                  via-purple
                  to-blue
                  shadow-[0_0_15px_#8b5cf6]
                  animate-border-right
                "
              />
            </div>


            {/* =====================================================
                LÍNEA DE LUZ INFERIOR
                ===================================================== */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl">
              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  h-[2px]
                  w-32
                  bg-gradient-to-l
                  from-transparent
                  via-blue
                  to-purple
                  shadow-[0_0_15px_#6366f1]
                  animate-border-bottom
                "
              />
            </div>


            {/* =====================================================
                LÍNEA DE LUZ IZQUIERDA
                ===================================================== */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl">
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-32
                  w-[2px]
                  bg-gradient-to-t
                  from-transparent
                  via-purple
                  to-blue
                  shadow-[0_0_15px_#8b5cf6]
                  animate-border-left
                "
              />
            </div>


            {/* =====================================================
                CONTENEDOR DEL VÍDEO
                ===================================================== */}
            <div
              className="
                relative
                aspect-video
                overflow-hidden
                rounded-[15px]
                bg-black
              "
            >

              {/*
                ===================================================
                WISTIA

                AQUÍ debes colocar el embed de Wistia.

                Cuando me pases el código de embed de Wistia,
                sustituimos este bloque por el código exacto.

                Por ahora dejo un iframe genérico para que la
                estructura visual siga funcionando.
                ===================================================
              */}

              <iframe
  className="absolute inset-0 h-full w-full"
  src="https://fast.wistia.net/embed/iframe/wq0bvwta6c"
  title="VSL Scalate"
  allow="autoplay; fullscreen"
  allowFullScreen
/>

              {/* Glow interior muy sutil */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[15px]
                  shadow-[inset_0_0_60px_rgba(37,99,235,0.08),inset_0_0_80px_rgba(124,58,237,0.08)]
                "
              />

            </div>
          </div>
        </div>


        {/* =========================================================
            TEXTO DEBAJO DEL VÍDEO
            - Móvil: pequeño
            - Ordenador: ligeramente mayor
            ========================================================= */}
        <p
          className="
            mt-6
            text-xs
            font-medium
            uppercase
            tracking-[0.18em]
            text-white/30
            sm:text-lg
          "
        >
          Es importante ver el vídeo completo
        </p>

      </div>
    </section>
  );
}