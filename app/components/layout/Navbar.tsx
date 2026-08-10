"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";

export default function Navbar() {
  const [isBottom, setIsBottom] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const finalCTA = document.getElementById("contacto");

      if (!finalCTA) return;

      const rect = finalCTA.getBoundingClientRect();

      // El navbar desaparece cuando el Final CTA
      // entra aproximadamente en la mitad de la pantalla.
      const isFinalCTAVisible =
        rect.top < window.innerHeight * 0.5;

      setHideNavbar(isFinalCTAVisible);

      // Antes de llegar al CTA, el navbar baja después de 350px.
      setIsBottom(
        window.scrollY > 350 && !isFinalCTAVisible
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
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

        ${
          hideNavbar
            ? "pointer-events-none translate-y-24 opacity-0"
            : isBottom
              ? "top-auto bottom-6 translate-y-0 opacity-100"
              : "top-6 bottom-auto translate-y-0 opacity-100"
        }
      `}
    >
      <nav
        className="
          flex
          h-14
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-[#111111]/80
          px-4
          backdrop-blur-2xl
          transition-all
          duration-300
        "
      >
        {/* =====================================================
            LOGO
            ===================================================== */}

        <a
          href="/"
          className="
            bg-gradient-to-r
            from-[#3B82F6]
            via-[#7C3AED]
            to-[#D946EF]
            bg-clip-text
            text-2xl
            font-extrabold
            uppercase
            tracking-tight
            text-transparent
            transition-all
            duration-300
            hover:scale-105

            sm:text-3xl
            lg:text-1xl
          "
        >
          SCALATE
        </a>

        {/* =====================================================
            MENÚ
            ===================================================== */}

        <div className="hidden items-center gap-10 lg:flex">
          <a
            href="#deficiencias"
            className="
              text-base
              font-medium
              text-white/70
              transition
              hover:text-white
            "
          >
            Deficiencias
          </a>

          <a
            href="#calculadora"
            className="
              text-base
              font-medium
              text-white/70
              transition
              hover:text-white
            "
          >
            Calculadora
          </a>

          <a
            href="#pilares"
            className="
              text-base
              font-medium
              text-white/70
              transition
              hover:text-white
            "
          >
            Pilares
          </a>

          <a
            href="#metodologia"
            className="
              text-base
              font-medium
              text-white/70
              transition
              hover:text-white
            "
          >
            Metodología
          </a>

          <a
            href="#faq"
            className="
              text-base
              font-medium
              text-white/70
              transition
              hover:text-white
            "
          >
            FAQ's
          </a>
        </div>

        {/* =====================================================
            BOTÓN
            ===================================================== */}

        <Button
          href="#contacto"
          className="
            whitespace-nowrap
            px-3
            py-1.5
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