"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";

export default function Navbar() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBottom(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        left-1/2
        z-50

        w-[85%]
        sm:w-[92%]
        lg:w-[90%]

        max-w-5xl

        -translate-x-1/2

        transition-all
        duration-700
        ease-in-out

        ${isBottom ? "bottom-6 top-auto" : "top-6 bottom-auto"}
      `}
    >
      <nav className="flex h-14 items-center justify-between rounded-full border border-white/10 bg-[#111111]/80 px-4 backdrop-blur-2xl transition-all duration-300">

        {/* Logo */}
        <a
          href="/"
          className="
            bg-gradient-to-r
            from-[#3B82F6]
            via-[#7C3AED]
            to-[#D946EF]
            bg-clip-text
            text-2xl
            sm:text-3xl
            lg:text-1xl
            font-extrabold
            uppercase
            tracking-tight
            text-transparent
            transition-all
            duration-300
            hover:scale-105
          "
        >
          SCALATE
        </a>

        {/* Menú */}
        <div className="hidden items-center gap-10 lg:flex">
          <a
  href="#deficiencias"
  className="text-base font-medium text-white/70 transition hover:text-white"
>
  Deficiencias
</a>

          <a
            href="#calculadora"
            className="text-base font-medium text-white/70 transition hover:text-white"
          >
            Calculadora
          </a>

          <a
            href="#mejoras"
            className="text-base font-medium text-white/70 transition hover:text-white"
          >
            Mejoras
          </a>

          <a
            href="#"
            className="text-base font-medium text-white/70 transition hover:text-white"
          >
            Metodología
          </a>
          <a
            href="#"
            className="text-base font-medium text-white/70 transition hover:text-white"
          >
              FAQ's
          </a>
        </div>

        {/* Botón */}
        <Button
  href="#contacto"
  className="
    whitespace-nowrap
    px-4
    py-2
    text-sm

    lg:px-6
    lg:py-2
    lg:text-base
  "
>
  Escalemos tu marca
</Button>

      </nav>
    </header>
  );
}