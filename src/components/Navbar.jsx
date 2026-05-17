import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#1a100b]/75 px-7 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-20 w-20 items-center justify-center">
            <img
              src={logo}
              alt="CoffeeVision AI Logo"
              className="h-20 w-20 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div>
            <h1 className="text-lg font-black tracking-wide text-white">
              CoffeeVision AI
            </h1>
            <p className="text-xs text-[#c7b2a0]">
              Vision AI for Coffee Quality
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#e8d8ca] md:flex">
          <NavLink href="#problema" text="Problema" />
          <NavLink href="#solucion" text="Solución" />
          <NavLink href="#proceso" text="Proceso" />
          <NavLink href="#hardware" text="Hardware" />
          <NavLink href="#software" text="Software" />
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-full bg-[#f5d38d] px-6 py-3 text-sm font-bold text-[#1a100b] transition hover:scale-105 md:flex"
        >
          Contacto
        </a>
      </div>
    </motion.header>
  );
}

function NavLink({ href, text }) {
  return (
    <a href={href} className="relative transition hover:text-[#f5d38d]">
      {text}
    </a>
  );
}

export default Navbar;
