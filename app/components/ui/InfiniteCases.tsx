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
  const loopCases = Array.from({ length: 8 }, () => cases).flat();

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);
  const x = useMotionValue(0);
  const initialized = useRef(false);
  const [paused, setPaused] = useState(false);
  const SPEED = 100;
  function scheduleResume() {
  if (resumeTimeout.current) {
    clearTimeout(resumeTimeout.current);
  }

  resumeTimeout.current = setTimeout(() => {
    setPaused(false);
  }, 3000);
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

  window.addEventListener("pointerdown", handlePointerDown);

  return () => {
    window.removeEventListener("pointerdown", handlePointerDown);

    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
  };
}, []);
  useAnimationFrame((_, delta) => {
  if (!containerRef.current) return;
  if (paused) return;
  const singleWidth = containerRef.current.scrollWidth / 8;

if (!initialized.current) {
  x.set(-singleWidth * 3);
  initialized.current = true;
}

const next = x.get() + (SPEED * delta) / 1000;

x.set(next);

if (next >= -singleWidth * 2) {
  x.set(next - singleWidth);
}

if (next <= -singleWidth * 4) {
  x.set(next + singleWidth);
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
  const singleWidth =
    containerRef.current!.scrollWidth / 8;

  if (x.get() >= -singleWidth * 2) {
    x.set(x.get() - singleWidth);
  }

  if (x.get() <= -singleWidth * 4) {
    x.set(x.get() + singleWidth);
  }

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