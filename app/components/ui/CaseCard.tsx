import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
type Project = {
  name: string;
  image: string;
  href?: string;
  hasPage: boolean;
};

type Props = {
  project: Project;
};

export default function CaseCard({ project }: Props) {
  const particles = [
  { left: "8%", top: "25%", duration: 2.1, delay: 0.1 },
  { left: "16%", top: "60%", duration: 2.8, delay: 0.3 },
  { left: "24%", top: "35%", duration: 2.4, delay: 0.7 },
  { left: "33%", top: "70%", duration: 2.6, delay: 1.0 },
  { left: "44%", top: "22%", duration: 2.2, delay: 0.4 },
  { left: "56%", top: "65%", duration: 2.5, delay: 1.3 },
  { left: "68%", top: "30%", duration: 2.9, delay: 0.6 },
  { left: "80%", top: "55%", duration: 2.3, delay: 1.5 },
  { left: "90%", top: "40%", duration: 2.7, delay: 0.9 },
  { left: "12%", top: "45%", duration: 2.4, delay: 1.8 },
  { left: "38%", top: "18%", duration: 2.6, delay: 0.2 },
  { left: "62%", top: "78%", duration: 2.8, delay: 1.2 },
  { left: "74%", top: "15%", duration: 2.3, delay: 0.8 },
  { left: "95%", top: "68%", duration: 2.7, delay: 1.6 },
];
  return (
    <div
      className={`
        group
        relative
        block
        h-[360px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-zinc-900
        ${project.hasPage ? "cursor-default" : "cursor-default"}
      `}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        draggable={false}
        className="
          object-cover
          select-none
          transition-transform
          duration-700
          group-hover:scale-105
          group-active:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      {project.hasPage && project.href && (
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            flex
            justify-center
            pb-8
          "
        >
          <Link
            href={project.href}
            onPointerDown={(e) => e.stopPropagation()}
            className="
relative
overflow-hidden
flex
items-center
gap-2
rounded-full
border
border-white/10
bg-white/10
px-5
py-2.5
text-sm
font-medium
text-white
backdrop-blur-md
transition-all
duration-300
group-hover:bg-purple
group-hover:text-white
group-active:bg-purple
group-active:text-white
"
          >
            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
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
        opacity: [0, 0.8, 0],
        y: [2, -2, 2],
        scale: [0.8, 1.3, 0.8],
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
<span className="relative z-10">Ver proyecto</span>

<span
  className="
    relative
    z-10
    transition-transform
    duration-300
    group-hover:translate-x-1
    group-active:translate-x-1
  "
>
  →
</span>
          </Link>
        </div>
      )}
    </div>
  );
}