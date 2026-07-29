"use client";

import { motion } from "motion/react";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
  delay?: number;
};

export default function GrowthProblemCard({
  title,
  description,
  children,
  delay = 0,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeInOut",
      }}
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#121212]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-red-500/40
      "
    >
      <div className="relative h-[300px] overflow-hidden">

  {children}

  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      right-0
      h-20
      bg-gradient-to-b
      from-transparent
      to-[#121212]
    "
  />

</div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-white">
          {title}
        </h3>

        <p
  className="mt-1 text-sm leading-7 text-text-secondary [&_strong]:font-semibold [&_strong]:text-white"
  dangerouslySetInnerHTML={{ __html: description }}
/>
      </div>
    </motion.article>
  );
}