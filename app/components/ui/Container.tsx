type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-5
        lg:px-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}