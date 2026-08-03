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
        border-white/10
        bg-[#121218]
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#8B5CF6]/40
      "
    >
      {/* Barra superior */}

      <div
        className="
          mb-8
          h-[3px]
          w-12
          rounded-full
          bg-gradient-to-r
          from-[#6D5BFF]
          via-[#8B5CF6]
          to-[#E84AC2]
        "
      />

      {/* Icono */}

      <div className="mb-8">
        {children}
      </div>

      {/* Título */}

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Texto */}

      <p className="mt-5 leading-8 text-white/60">
        {description}
      </p>

      {/* Tags */}

      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-white/70
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}