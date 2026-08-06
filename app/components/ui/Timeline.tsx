"use client";
import {
  motion,
  useScroll,
} from "framer-motion";

import { useRef } from "react";
import TimelineItem from "./TimelineItem";
import { timeline } from "./TimelineData";

export default function Timeline() {
  const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start center", "end center"],
});
  return (
    <div
  ref={ref}
  className="relative mx-auto mt-24 w-full max-w-[1280px] lg:scale-[0.9]"
>

      {/* Línea se añadirá aquí */}
      <div
  className="
absolute
left-1/2
top-0
lg:top-[-100px]
bottom-0
w-px
bg-white/10
-translate-x-1/2
"
/>
<motion.div
  style={{
    scaleY: scrollYProgress,
  }}
  className="
    absolute
    left-1/2
    top-0
    lg:top-[-100px]
    bottom-0
    w-[2px]
    origin-top
    -translate-x-1/2
    rounded-full
    bg-gradient-to-b
    from-purple
    via-[#A855F7]
    to-purple
    shadow-[0_0_18px_rgba(168,85,247,.9)]
  "
/>

<div className="relative z-10">

  {timeline.map((step, index) => (

    <TimelineItem
      key={step.number}
      step={step}
      isLast={index === timeline.length - 1}
    />

  ))}

</div>

</div>
);
}