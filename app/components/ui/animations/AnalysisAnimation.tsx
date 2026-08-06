"use client";

import ToolCard from "./ToolCard";

export default function AnalysisAnimation() {
  return (
    <div
      className="
        relative
        h-[380px]
        overflow-hidden
        rounded-[30px]
        bg-[#171717]
      "
    >
      {/* Fondo */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#242424] via-[#171717] to-[#101010]" />

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[340px]
          w-[340px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/15
          blur-[120px]
        "
      />

      {/* Título */}

      <div
        className="
          absolute
          left-10
          top-1/2
          z-30
          -translate-y-1/2
          max-w-[220px]
        "
      >
        <p className="text-5xl font-bold text-[#8B5CF6]">
          1.
        </p>

        <h2
          className="
            mt-4
            text-4xl
            font-semibold
            leading-tight
            text-white
          "
        >
          Auditamos toda tu marca
        </h2>
      </div>

      {/* Logo Scalate */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          flex
          h-32
          w-32
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-500
          via-[#7C3AED]
          to-fuchsia-500
          shadow-[0_0_80px_rgba(59,130,246,.35)]
        "
      >
        <img
          src="/logo-scalate.png"
          alt="Scalate"
          className="h-14 w-14"
        />
      </div>

      {/* Google Analytics */}

      <div className="absolute left-[360px] top-[40px] z-20">
        <ToolCard
          title="Google Analytics 4"
          logo="/google-analytics.png"
          glow="rgba(251,146,60,.45)"
        />
      </div>

      {/* Search Console */}

      <div className="absolute left-[340px] bottom-[38px] z-20">
        <ToolCard
          title="Search Console"
          logo="/tools/search-console.png"
          glow="rgba(59,130,246,.45)"
        />
      </div>

      {/* Clarity */}

      <div className="absolute right-[320px] top-[40px] z-20">
        <ToolCard
          title="Microsoft Clarity"
          logo="/clarity.png"
          glow="rgba(59,130,246,.45)"
        />
      </div>

      {/* Shopify */}

      <div className="absolute right-[300px] bottom-[40px] z-20">
        <ToolCard
          title="Shopify"
          logo="/logoshopify.png"
          glow="rgba(34,197,94,.45)"
        />
      </div>

      {/* Google Serach Console */}

      <div className="absolute right-[540px] top-[8px] z-20">
        <ToolCard
          title="Google Search Console"
          logo="/google-search.png"
          glow="rgba(168,85,247,.45)"
        />
      </div>
    </div>
  );
}