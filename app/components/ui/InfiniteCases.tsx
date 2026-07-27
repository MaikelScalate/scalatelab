"use client";
import { motion } from "framer-motion";
import CaseCard from "./CaseCard";
import { cases } from "@/app/data/cases";

export default function InfiniteCases() {

  const loopCases = [...cases, ...cases];

  return (
    <div className="relative w-full overflow-hidden">

      <motion.div
        className="flex gap-8"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >

        {loopCases.map((project, index) => (
          <div
            key={`${project.name}-${index}`}
            className="w-[320px] shrink-0"
          >
            <CaseCard project={project} />
          </div>
        ))}

      </motion.div>

    </div>
  );
}