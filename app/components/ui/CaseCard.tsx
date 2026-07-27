import Image from "next/image";
type Project = {
  name: string;
  image: string;
  href?: string;
  hasPage: boolean;
};

type Props = {
  project: Project;
};

export default function CaseCard({ project }: Props) {
  return (
  <div
    className="
      group
      relative
      h-[350px]
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-zinc-900
    "
  >
    <Image
      src={project.image}
      alt={project.name}
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/80
        via-black/20
        to-transparent
      "
    />

    <div
      className="
        absolute
        bottom-6
        left-6
      "
    >
      <h3
        className="
          text-xl
          font-semibold
          text-white
        "
      >
        {project.name}
      </h3>
    </div>
  </div>
);
}