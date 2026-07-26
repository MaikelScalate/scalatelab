import Button from "../ui/Button";
export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2">
      <nav className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-[#111111]/80 px-4 backdrop-blur-2xl transition-all duration-300">

        {/* Logo */}
        <a
          href="/"
          className="
            bg-gradient-to-r
            from-[#3B82F6]
            via-[#7C3AED]
            to-[#D946EF]
            bg-clip-text
            text-4xl
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
            href="#"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Metodología
          </a>

          <a
            href="#"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Casos de éxito
          </a>

          <a
            href="#"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Servicios
          </a>

          <a
            href="#"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            FAQ
          </a>
        </div>

        {/* Botón */}
<Button href="#contacto">
  Escalemos tu marca
    className="
      px-8
  
      py-4
  
      text-base
    "
</Button>

      </nav>
    </header>
  );
}