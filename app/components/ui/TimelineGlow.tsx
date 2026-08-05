"use client";

export default function TimelineGlow() {
  return (
    <div
      className="
      absolute
      left-1/2
      top-[-100px]
      h-[180px]
      w-[14px]
      -translate-x-1/2
      rounded-full
      pointer-events-none
      animate-timelineGlow
      "
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(255,255,255,.95), rgba(168,85,247,.95), transparent)",
        filter: "blur(10px)",
      }}
    />
  );
}