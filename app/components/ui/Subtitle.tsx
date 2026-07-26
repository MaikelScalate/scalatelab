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
        leading-relaxed
        text-text-secondary
        ${className}
      `}
    >
      {children}
    </p>
  );
}