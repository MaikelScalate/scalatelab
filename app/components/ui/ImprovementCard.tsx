import { motion } from "motion/react";
const particles = [
  { left: "70%", top: "12%", duration: 2.6, delay: 0.2 },
  { left: "76%", top: "20%", duration: 2.9, delay: 0.7 },
  { left: "82%", top: "28%", duration: 2.4, delay: 0.4 },
  { left: "88%", top: "15%", duration: 3.0, delay: 1.0 },
  { left: "92%", top: "35%", duration: 2.7, delay: 0.8 },
  { left: "80%", top: "42%", duration: 2.5, delay: 1.2 },
  { left: "72%", top: "50%", duration: 2.8, delay: 0.5 },
  { left: "90%", top: "55%", duration: 2.3, delay: 1.5 },
];
interface ImprovementCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function ImprovementCard({
  children,
  title,
  description,
}: ImprovementCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
border-[#8B5CF6]/20
bg-[#121218]
shadow-[0_0_45px_rgba(139,92,246,.08)]
        min-h-[340px]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#A855F7]/35
hover:shadow-[0_0_80px_rgba(139,92,246,.14)]
      "
    >
        <div
  className="
    absolute
    -left-20
    -top-20
    h-60
    w-60
    rounded-full
    bg-[#6D5BFF]/5
    blur-[110px]
  "
/>

<div
  className="
    absolute
    right-[-90px]
    top-[-90px]
    h-52
    w-52
    rounded-full
    border
    border-white/[0.025]
  "
/>
<div
  className="
    absolute
    right-[-120px]
    top-[-120px]
    h-72
    w-72
    rounded-full
    border
    border-white/[0.03]
  "
/>

<div
  className="
    absolute
    right-[-180px]
    top-[-180px]
    h-[430px]
    w-[430px]
    rounded-full
    border
    border-white/[0.02]
  "
/>
<div
  className="
    absolute
    top-0
    right-0
    w-[180px]
    h-[180px]
    overflow-hidden
    pointer-events-none
  "
>
  {particles.map((particle, i) => (
    <motion.div
      key={i}
      className="
        absolute
        h-[2px]
        w-[2px]
        rounded-full
        bg-white
      "
      style={{
        left: particle.left,
        top: particle.top,
      }}
      animate={{
        opacity: [0.15, 0.9, 0.15],
        y: [4, -5, 4],
        x: [0, -3, 0],
        scale: [0.8, 1.5, 0.8],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
        ease: "easeInOut",
      }}
    />
  ))}
</div>
      {/* Barra superior */}

      <div
        className="
          mb-8
          h-[4px]
          w-16
          rounded-full
          bg-gradient-to-r
          from-[#6D5BFF]
          via-[#8B5CF6]
          to-[#E84AC2]
        "
      />

      {/* Icono */}

      <div className="mb-7">
        {children}
      </div>

      {/* Título */}

      <h3 className="text-[27px]
leading-tight font-bold text-white">
        {title}
      </h3>

      {/* Texto */}

      <p className="mt-5 text-[15px]
leading-8 text-white/60">
        {description}
      </p>
    </div>
  );
}