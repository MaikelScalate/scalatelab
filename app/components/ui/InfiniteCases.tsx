"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CaseCard from "./CaseCard";
import { cases } from "@/app/data/cases";

export default function InfiniteCases() {
  const loopCases = [...cases, ...cases];

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);
  const x = useMotionValue(0);
  const initialized = useRef(false);
  const [dragConstraints, setDragConstraints] = useState({
  left: 0,
  right: 0,
  });
  const [paused, setPaused] = useState(false);
  const SPEED = 100;
  function scheduleResume() {
  if (resumeTimeout.current) {
    clearTimeout(resumeTimeout.current);
  }

  resumeTimeout.current = setTimeout(() => {
    setPaused(false);
  }, 5000);
}
useEffect(() => {
  function handlePointerDown(e: PointerEvent) {
    if (!wrapperRef.current) return;

    if (!wrapperRef.current.contains(e.target as Node)) {
      setPaused(false);

      if (resumeTimeout.current) {
        clearTimeout(resumeTimeout.current);
      }
    }
  }
  function updateConstraints() {
  if (!containerRef.current || !wrapperRef.current) return;

  const totalWidth = containerRef.current.scrollWidth;
  const visibleWidth = wrapperRef.current.offsetWidth;

  const SIDE_PADDING = 32;

  setDragConstraints({
    left: -(totalWidth - visibleWidth) + SIDE_PADDING,
    right: -SIDE_PADDING,
  });
}

updateConstraints();

window.addEventListener("resize", updateConstraints);
  window.addEventListener("pointerdown", handlePointerDown);

  return () => {
    window.removeEventListener("resize", updateConstraints);
    window.removeEventListener("pointerdown", handlePointerDown);

    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
  };
}, []);
  useAnimationFrame((_, delta) => {
  if (!containerRef.current) return;
  if (paused) return;
  const width = containerRef.current.scrollWidth / 2;

  // Solo la primera vez
  if (!initialized.current) {
    x.set(-width);
    initialized.current = true;
  }

  // Movimiento hacia la derecha
  x.set(x.get() + (SPEED * delta) / 1000);

  // Reiniciar cuando vuelve al inicio
  if (x.get() >= 0) {
    x.set(-width);
  }
});

  return (
    <div
  ref={wrapperRef}
  className="relative w-full overflow-hidden"
>
      <motion.div
  ref={containerRef}
  style={{ x }}
  className="
  flex
  w-max
  gap-8
  px-12
  cursor-grab
  active:cursor-grabbing
  touch-pan-y
"

  drag="x"
  dragConstraints={dragConstraints}
  dragDirectionLock
  dragMomentum
  dragElastic={0.08}
  onPointerDown={() => {
  setPaused(true);

  if (resumeTimeout.current) {
    clearTimeout(resumeTimeout.current);
  }
}}
  onDragStart={() => {
    setPaused(true);

    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
  }}

  onDragEnd={() => {
    scheduleResume();
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