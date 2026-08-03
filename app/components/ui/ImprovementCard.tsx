interface ImprovementCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export default function ImprovementCard({
  children,
  title,
  description,
  tags,
}: ImprovementCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
border-[#8B5CF6]/20
bg-[#121218]
shadow-[0_0_45px_rgba(139,92,246,.08)]
        min-h-[340px]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#A855F7]/35
hover:shadow-[0_0_80px_rgba(139,92,246,.14)]
      "
    >
        <div
  className="
    absolute
    -left-20
    -top-20
    h-60
    w-60
    rounded-full
    bg-[#6D5BFF]/5
    blur-[110px]
  "
/>

<div
  className="
    absolute
    right-[-90px]
    top-[-90px]
    h-52
    w-52
    rounded-full
    border
    border-white/5
  "
/>
<div
  className="
    absolute
    right-[-120px]
    top-[-120px]
    h-72
    w-72
    rounded-full
    border
    border-white/[0.03]
  "
/>

<div
  className="
    absolute
    right-[-180px]
    top-[-180px]
    h-[430px]
    w-[430px]
    rounded-full
    border
    border-white/[0.02]
  "
/>
      {/* Barra superior */}

      <div
        className="
          mb-8
          h-[4px]
          w-16
          rounded-full
          bg-gradient-to-r
          from-[#6D5BFF]
          via-[#8B5CF6]
          to-[#E84AC2]
        "
      />

      {/* Icono */}

      <div className="mb-7">
        {children}
      </div>

      {/* Título */}

      <h3 className="text-[27px]
leading-tight font-bold text-white">
        {title}
      </h3>

      {/* Texto */}

      <p className="mt-5 text-[15px]
leading-8 text-white/60">
        {description}
      </p>
    </div>
  );
}