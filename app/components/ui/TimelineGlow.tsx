"use client";

export default function TimelineGlow() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[-100px]
        h-[120px]
        w-[6px]
        -translate-x-1/2
        rounded-full
        blur-md
        pointer-events-none
        animate-timelineGlow
      "
    />
  );
}