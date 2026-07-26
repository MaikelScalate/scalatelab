import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Button({
  children,
  href = "#",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-[#7C3AED]
        to-[#D946EF]
        font-semibold
        text-white
        transition-all
        duration-300
        shadow-[0_0_25px_rgba(217,70,239,0.25)]
        hover:-translate-y-1
        hover:scale-[1.02]
        hover:shadow-[0_0_45px_rgba(217,70,239,0.45)]
        active:scale-95
        ${className}
      `}
    >
      {children}
    </Link>
  );
}