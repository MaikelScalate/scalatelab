"use client";

import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { timeline } from "./TimelineData";

export default function Timeline() {
  return (
    <div className="relative mx-auto mt-24 w-full max-w-[1280px]">

      {/* Línea se añadirá aquí */}
      <div
className="
hidden
lg:block
absolute
left-1/2
top-[-100px]
bottom-[0]
w-px
bg-white/10
-translate-x-1/2
"
/>
<motion.div
  initial={{ scaleY: 0 }}
  whileInView={{ scaleY: 1 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{
    duration: 2,
    ease: "easeOut",
  }}
  className="
    hidden
    lg:block
    absolute
    left-1/2
    top-[-100px]
    bottom-0
    w-px
    -translate-x-1/2
    origin-top
    bg-gradient-to-b
    from-purple
    via-[#A855F7]
    to-purple
  "
/>
      {timeline.map((step, index) => (

        <TimelineItem
          key={step.number}
          step={step}
          isLast={index === timeline.length - 1}
        />

      ))}

    </div>
  );
}