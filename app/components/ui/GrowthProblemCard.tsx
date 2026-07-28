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
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#0B0B0D]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-purple-500/40
      "
    >
      <div className="h-[250px]">
        {children}
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-7 text-text-secondary">
          {description}
        </p>
      </div>
    </motion.article>
  );
}