"use client";

import { motion } from "motion/react";

export default function BrowserProblem() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#090909]">

      {/* Glow */}

      <motion.div
        animate={{
          opacity: [0.08, 0.12, 0.35, 0.08],
          scale: [1, 1.02, 1.18, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-44 w-44 rounded-full bg-red-500/20 blur-[65px]"
      />

      {/* Browser */}

      <motion.div
        animate={{
  x: [0, 0, 0, 0, 0, -1, 1, -1, 1, 0],
}}
transition={{
  duration: 6,
  repeat: Infinity,
  times: [0, .75, .80, .84, .88, .91, .94, .97, .99, 1],
}}
        className="relative w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#111111]"
      >

        {/* Top */}

        <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">

          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70"/>

          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70"/>

          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70"/>

        </div>

        {/* Landing */}

        <motion.div

          initial={{
    y:260
}}

animate={{
    y:[260,260,0,0]
}}

transition={{
    duration:6,
    repeat:Infinity,
    times:[0,.18,.45,1],
    ease:[0.22,1,0.36,1]
}}

          className="relative p-2"
        >
<div className="flex items-center justify-between">

    <span className="text-[8px] font-semibold tracking-[0.22em] text-white">

        SCALATE

    </span>

    <div className="flex gap-2 text-[6px] text-white/40">

        <span>Inicio</span>

        <span>Casos</span>

        <span>Contacto</span>

    </div>

</div>
<div className="mt-4 rounded-xl border border-white/5 bg-white/[0.03] p-3">

    <div className="flex gap-3">

        <div className="h-10 w-10 rounded-lg bg-white/8 to-fuchsia-500"/>

        <div className="flex-1">

            <div className="h-2 w-20 rounded-full bg-white"/>

            <div className="mt-2 h-1.5 w-16 rounded-full bg-white/20"/>

            <div className="mt-1 h-1.5 w-12 rounded-full bg-white/20"/>

        </div>

    </div>

    <div className="mt-3 inline-flex rounded-md bg-white/8 px-3 py-1">

        <span className="text-[6px] font-medium text-white">

            Solicitar auditoría

        </span>

    </div>

</div>
<div className="mt-3 flex items-center justify-between">

    <div className="flex gap-1">

        {[1,2,3,4,5].map(i=>(
            <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-white/30"
            />
        ))}

    </div>

    <span className="text-[6px] text-white/40">

        4.9

    </span>

</div>
<div className="mt-3 flex gap-2">

    {["Leggings","Tops","Sets"].map(item=>(

        <div

            key={item}

            className="rounded-full border border-white/10 px-2 py-1 text-[6px] text-white/60"

        >

            {item}

        </div>

    ))}

</div>
<div className="mt-4 grid grid-cols-3 gap-2">

    {[1,2,3].map(i=>(

        <div

            key={i}

            className="rounded-lg border border-white/6 bg-white/[0.03] p-2"

        >

            <div className="h-8 rounded bg-gradient-to-br from-zinc-700 to-zinc-800"/>

            <div className="mt-2 h-1.5 rounded-full bg-white/20"/>

            <div className="mt-1 h-1.5 w-2/3 rounded-full bg-white/10"/>

        </div>

    ))}

</div>
<div className="mt-4 rounded-lg border border-white/5 bg-white/[0.03] p-2">

    <div className="flex gap-1">

        {[1,2,3,4,5].map(i=>(

            <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-yellow-400"
            />

        ))}

    </div>

    <div className="mt-2 h-1.5 rounded-full bg-white/15"/>

    <div className="mt-1 h-1.5 w-3/4 rounded-full bg-white/10"/>

</div>
          {/* Scan */}

          <motion.div

            animate={{
              y: [-20, 170, 170],
              opacity: [0,1,1,0],
            }}

            transition={{
              duration:5,
              repeat:Infinity,
              times:[0,.25,.65,.75],
            }}

            className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]"
          />

          {/* Issue 1 */}

          <motion.div
          animate={{
              opacity:[0,0,0,1,1,0],
              scale:[.8,.8,.8,1,1,1],
            }}

            transition={{
              duration:5,
              repeat:Infinity,
              times:[0,.58,.68,.78,.9,1],
            }}
    className="
    absolute
    right-2
    top-16

    rounded-md

    border
    border-red-500/30

    bg-red-500/10

    px-3
py-2

text-[7px]

rounded-lg

shadow-[0_0_20px_rgba(239,68,68,.12)]
    backdrop-blur
    "
>

    <p className="text-[6px] font-medium text-red-300">

        ⚠ FALTA UPSELL

    </p>

</motion.div>

          {/* Issue 2 */}
<motion.div
animate={{
              opacity:[0,0,0,1,1,0],
              scale:[.8,.8,.8,1,1,1],
            }}

            transition={{
              duration:5,
              repeat:Infinity,
              times:[0,.58,.68,.78,.9,1],
            }}

    className="
    absolute
    left-7
    top-40

    rounded-md

    border
    border-red-500/30

    bg-red-500/10

    px-3
py-2

text-[7px]

rounded-lg

shadow-[0_0_20px_rgba(239,68,68,.12)]

    backdrop-blur
    "
>

    <p className="text-[6px] font-medium text-red-300">

        ⚠ POCO VISIBLE

    </p>

</motion.div>
        

          {/* Issue 3 */}

          <motion.div

            animate={{
              opacity:[0,0,0,0,1,0],
              scale:[.8,.8,.8,.8,1,1],
            }}

            transition={{
              duration:5,
              repeat:Infinity,
              times:[0,.68,.75,.82,.9,1],
            }}

            className="
    absolute
    right-13
    bottom-30

    rounded-md

    border
    border-red-500/30

    bg-red-500/10

    px-3
py-2

text-[7px]

rounded-lg

shadow-[0_0_20px_rgba(239,68,68,.12)]
    backdrop-blur
    "
>

    <p className="text-[6px] font-medium text-red-300">

        ⚠ CREAR SUSCRIPCIÓN

    </p>

</motion.div>

        </motion.div>

      </motion.div>

    </div>
  );
}