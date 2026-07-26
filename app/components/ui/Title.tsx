type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Title({
  children,
  className = "",
}: TitleProps) {
  return (
    <h2
      className={`
        font-heading
        font-bold
        leading-tight
        tracking-tight
        text-white
        ${className}
      `}
    >
      {children}
    </h2>
  );
}