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
  {[...Array(14)].map((_, i) => (
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
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        opacity: [0, 0.8, 0],
        y: [2, -2, 2],
        scale: [0.8, 1.3, 0.8],
      }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        delay: Math.random() * 2,
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