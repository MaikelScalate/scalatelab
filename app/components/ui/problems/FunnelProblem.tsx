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
            id="glass"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="rgba(255,255,255,.14)"
            />

            <stop
              offset="100%"
              stopColor="rgba(255,255,255,.02)"
            />

          </linearGradient>
<clipPath id="funnelClip">
  <path
    d="
      M35 65
      Q160 42 285 65
      L215 210
      L173 310
      L147 310
      L105 210
      Z
    "
  />
  <path
  d="
    M70 80
    C105 70 130 66 160 66
    C190 66 215 70 250 80

    L205 176
  "
  fill="none"
  stroke="rgba(255,255,255,.16)"
  strokeWidth="2"
/>
</clipPath>
        </defs>

        <path
  d="
    M35 72
    C70 58 110 52 160 52
    C210 52 250 58 285 72

    L230 185

    C215 218 192 240 160 252

    C128 240 105 218 90 185

    Z
  "
  fill="url(#glass)"
  stroke="rgba(255,255,255,.08)"
  strokeWidth="2"
/>
<path
  d="
    M58 74
    Q160 58 262 74
    L202 198
  "
  fill="none"
  stroke="rgba(255,255,255,.18)"
  strokeWidth="2"
/>
        <path
  d="
    M147 212

    C147 228 149 255 150 310

    L170 310

    C171 255 173 228 173 212

    Z
  "
  fill="rgba(255,255,255,.05)"
/>
<path
  d="
    M102 198

    C120 222 140 236 160 242

    C180 236 200 222 218 198

    Z
  "
  fill="rgba(255,60,60,.32)"
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
  style={{
    clipPath: "url(#funnelClip)",
  }}
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