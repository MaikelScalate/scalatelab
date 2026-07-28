"use client";

import { useEffect, useRef } from "react";
import CaseCard from "./CaseCard";
import { cases } from "@/app/data/cases";

const SPEED = 100;

export default function InfiniteCases() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);

  const offset = useRef(0);

  const paused = useRef(false);

  const dragging = useRef(false);

  const lastPointerX = useRef(0);
const dragOffset = useRef(0);
const dragTarget = useRef(0);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);
  function scheduleResume() {
  if (resumeTimeout.current) {
    clearTimeout(resumeTimeout.current);
  }

  resumeTimeout.current = setTimeout(() => {
    paused.current = false;
  }, 2000);
}
  useEffect(() => {
  if (!trackRef.current || !wrapperRef.current) return;

  const track = trackRef.current;
  const wrapper = wrapperRef.current;
  let frame = 0;
  let last = performance.now();

  function applyTransform() {
    track.style.transform = `translate3d(${offset.current}px,0,0)`;
  }
  const gap = parseFloat(getComputedStyle(track).gap || "32");
  function recycle() {
    while (track.firstElementChild) {
      const first = track.firstElementChild as HTMLElement;

      const firstWidth =
  first.offsetWidth + gap;

      if (-offset.current >= firstWidth) {
        offset.current += firstWidth;

        track.appendChild(first);
      } else {
        break;
      }
    }

    while (track.lastElementChild) {
      if (offset.current > 0) {
        const last =
          track.lastElementChild as HTMLElement;

        const lastWidth =
  last.offsetWidth + gap;

        offset.current -= lastWidth;

        track.insertBefore(last, track.firstChild);
      } else {
        break;
      }
    }
  }
  function onPointerDown(e: PointerEvent) {
  dragging.current = true;
  paused.current = true;

  lastPointerX.current = e.clientX;

  if (resumeTimeout.current) {
    clearTimeout(resumeTimeout.current);
  }
}

function onPointerMove(e: PointerEvent) {
  if (!dragging.current) return;

  const delta = e.clientX - lastPointerX.current;

lastPointerX.current = e.clientX;

dragTarget.current += delta;
}

function onPointerUp(e: PointerEvent) {
  if (!dragging.current) return;

  dragging.current = false;

  scheduleResume();
}
function onDocumentPointerDown(e: PointerEvent) {
  if (!wrapper.contains(e.target as Node)) {
    paused.current = false;

    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
  }
}
  function animate(now: number) {
    const delta = (now - last) / 1000;

    last = now;

    if (!paused.current) {
  offset.current -= SPEED * delta;
}
dragOffset.current +=
  (dragTarget.current - dragOffset.current) * 0.18;

offset.current += dragOffset.current;

dragTarget.current *= 0.82;

dragOffset.current *= 0.82;

recycle();
applyTransform();

    frame = requestAnimationFrame(animate);
  }

  frame = requestAnimationFrame(animate);
  wrapper.addEventListener("pointerdown", onPointerDown);
wrapper.addEventListener("pointermove", onPointerMove);
wrapper.addEventListener("pointerup", onPointerUp);
wrapper.addEventListener("pointercancel", onPointerUp);
wrapper.addEventListener("pointerleave", onPointerUp);
document.addEventListener("pointerdown", onDocumentPointerDown);
  animationRef.current = frame;

  return () => {
  cancelAnimationFrame(frame);

  wrapper.removeEventListener("pointerdown", onPointerDown);
  wrapper.removeEventListener("pointermove", onPointerMove);
  wrapper.removeEventListener("pointerup", onPointerUp);
  wrapper.removeEventListener("pointercancel", onPointerUp);
  wrapper.removeEventListener("pointerleave", onPointerUp);
  document.removeEventListener("pointerdown", onDocumentPointerDown);

  if (resumeTimeout.current) {
    clearTimeout(resumeTimeout.current);
  }
};
}, []);
  return (
    <div
      ref={wrapperRef}
      className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing touch-none"
    >
      <div
        ref={trackRef}
        className="flex w-max gap-8 px-12 will-change-transform"
      >
        {[
  ...cases,
  ...cases,
  ...cases,
  ...cases,
  ...cases,
  ...cases,
  ...cases,
  ...cases,
].map((project, index) => (
  <div
    key={`${project.name}-${index}`}
    className="w-[320px] shrink-0"
  >
    <CaseCard project={project} />
  </div>
))}
      </div>
    </div>
  );
}