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
        h-[350px]
        rounded-[32px]
        border
        border-white/10

        bg-white/[0.03]
      "
    />
  );
}