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
        text-4xl
        font-bold
        leading-tight
        tracking-tight
        text-white
        md:text-5xl
        lg:text-6xl
        ${className}
      `}
    >
      {children}
    </h2>
  );
}