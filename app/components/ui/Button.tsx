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
        px-7
        py-3
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_35px_rgba(217,70,239,0.45)]
        active:scale-95
        ${className}
      `}
    >
      {children}
    </Link>
  );
}