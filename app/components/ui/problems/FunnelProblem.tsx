"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FunnelProblem() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number;

    const duration = 4200;

    const loop = (time: number) => {
      if (!start) start = time;

      const elapsed = (time - start) % duration;

      setProgress(elapsed / duration);

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[28px] bg-[#090909]">
      <Funnel progress={progress} />
    </div>
  );
}
function Funnel({
  progress,
}: {
  progress: number;
}) {

  const blocked = progress > 0.72 && progress < 0.90;

  return (
    <div className="relative h-[360px] w-[320px]">
 <div className="absolute inset-0 flex items-center justify-center">
  <div className="h-[320px] w-[320px] rounded-full bg-white/5 blur-[140px]" />
</div>
      <svg
        width="320"
        height="360"
        viewBox="0 0 320 360"
        className="absolute inset-0 z-10"
      >
        <defs>

          <linearGradient
    id="glassOuter"
    x1="0"
    y1="0"
    x2="0"
    y2="1"
>
    <stop offset="0%" stopColor="rgba(255,255,255,.12)" />
    <stop offset="45%" stopColor="rgba(255,255,255,.05)" />
    <stop offset="100%" stopColor="rgba(255,255,255,.02)" />
</linearGradient>

<linearGradient
    id="glassInner"
    x1="0"
    y1="0"
    x2="0"
    y2="1"
>
    <stop offset="0%" stopColor="rgba(255,255,255,.05)" />
    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
</linearGradient>

<linearGradient
    id="dangerGlow"
    x1="0"
    y1="0"
    x2="0"
    y2="1"
>
    <stop offset="0%" stopColor="#ff5858" />
    <stop offset="100%" stopColor="#8b1111" />
</linearGradient>
<clipPath id="funnelClip">
  <path
    d="
      M25 72
      C65 55 112 48 160 48
      C208 48 255 55 295 72
      L228 198
      C212 224 190 242 160 252
      C130 242 108 224 92 198
      L149 330
      L171 330
      Z
    "
  />
</clipPath>

        </defs>
        <path
    d="
        M25 72

        C65 55 112 48 160 48

        C208 48 255 55 295 72

        L228 198

        C212 224 190 242 160 252

        C130 242 108 224 92 198

        Z
    "
    fill="url(#glassOuter)"
    stroke="rgba(255,255,255,.08)"
    strokeWidth="1.5"
/>
<path
    d="
        M42 82

        C76 69 117 63 160 63

        C203 63 244 69 278 82

        L220 188

        C204 211 185 226 160 234

        C135 226 116 211 100 188

        Z
    "
    fill="url(#glassInner)"
/>
<path
    d="
        M149 245

        C149 258 150 285 151 330

        L169 330

        C170 285 171 258 171 245

        Z
    "
    fill="rgba(255,255,255,.05)"
/>
<path
    d="
        M100 196

        C118 220 140 235 160 242

        C180 235 202 220 220 196

        L220 215

        C198 235 181 247 160 253

        C139 247 122 235 100 215

        Z
    "
    fill="url(#dangerGlow)"
    opacity=".75"
/>
<path
    d="
        M62 79

        C98 67 127 63 160 63

        C193 63 222 67 258 79

        L210 182
    "
    fill="none"
    stroke="rgba(255,255,255,.14)"
    strokeWidth="2"
/>

<path
    d="
        M92 190

        C112 214 133 228 160 236
    "
    fill="none"
    stroke="rgba(255,255,255,.08)"
    strokeWidth="2"
/>
      </svg>
      <motion.div
  className="absolute left-1/2 top-[308px] h-5 w-5 -translate-x-1/2 rounded-full bg-white"
  animate={{
    scale: blocked ? [1, 1.25, 1] : 1,
  }}
  transition={{
    duration: 0.5,
    repeat: blocked ? Infinity : 0,
  }}
/>
{blocked && (
  <motion.div
    className="absolute left-1/2 top-[225px] h-3 w-24 -translate-x-1/2 rounded-full bg-red-500 blur-xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.9 }}
    exit={{ opacity: 0 }}
  />
)}
{blocked && (
  <motion.div
    className="absolute left-1/2 top-[185px] -translate-x-1/2 text-2xl text-red-500"
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
  >
    ⚠
  </motion.div>
)}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-white/5
          blur-[100px]
          opacity-20
        "
      />

      <div
  className="absolute inset-0"
  // style={{
  //   clipPath: "url(#funnelClip)",
  // }}
>
  {[-36, 0, 36].map((offset) => (
    <AnimatedUser
      key={offset}
      offset={offset}
      progress={progress}
    />
  ))}
</div>

    </div>
  );
}

function AnimatedUser({
  offset,
  progress,
}: {
  offset: number;
  progress: number;
}) {

  const forward = progress < 0.82;

  const t = forward
    ? progress / 0.82
    : 1 - ((progress - 0.82) / 0.18);

let y = -28 + t * 240;

// Rebote al llegar al cuello
if (t > 0.88) {
  const bounce = Math.sin((t - 0.88) * Math.PI * 8) * 8;
  y -= bounce;
}

  const x = offset * (1 - t * 0.94);

const scale = 1 - t * 0.72;
let color = "#FFFFFF";

if (t > 0.45) color = "#22C55E"; // Verde

if (t > 0.70) color = "#FACC15"; // Amarillo

if (t > 0.88) color = "#EF4444"; // Rojo
  return (
    <div
  className="absolute left-1/2 top-0 z-20"
  style={{
    transform: `
      translate(${x}px, ${y}px)
      scale(${scale})
    `,
  }}
>
      <UserIcon color={color} />
    </div>
  );
}
function UserIcon({
  color,
}: {
  color: string;
}) {
  return (
    <div className="flex flex-col items-center">

      <div
  className="h-3 w-3 rounded-full"
  style={{
    background: color,
  }}
/>

      <div
  className="mt-1 h-4 w-6 rounded-full"
  style={{
    background: color,
  }}
/>

    </div>
  );
}