type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/5
        font-medium
        text-white/80
        backdrop-blur-md
        ${className}
      `}
    >
      {children}
    </span>
  );
}