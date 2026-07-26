type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Subtitle({
  children,
  className = "",
}: SubtitleProps) {
  return (
    <p
      className={`
        max-w-2xl
        text-lg
        leading-8
        text-text-secondary
        md:text-xl
        ${className}
      `}
    >
      {children}
    </p>
  );
}