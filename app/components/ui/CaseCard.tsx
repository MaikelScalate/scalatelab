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
    relative
    overflow-visible
  "
>
  {[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    className="
absolute
rounded-full
bg-white
shadow-[0_0_8px_rgba(255,255,255,.8)]
"
    style={{
      width: 2 + Math.random() * 2,
      height: 2 + Math.random() * 2,
      left:
        i < 10
          ? `${8 + Math.random() * 18}%`
          : `${74 + Math.random() * 18}%`,
      top: `${-70 + Math.random() * 55}px`,
    }}
    animate={{
      y: [0, -8, 0],
      opacity: [0.15, 0.8, 0.15],
      scale: [1, 1.4, 1],
    }}
    transition={{
      duration: 2.5 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 2,
      ease: "easeInOut",
    }}
  />
))}
          <Link
            href={project.href}
            onPointerDown={(e) => e.stopPropagation()}
            className="
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
            Ver proyecto

            <span
              className="
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