import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  ["#problema", "Problema"],
  ["#solucion", "Solución"],
  ["#proceso", "Proceso"],
  ["#hardware", "Hardware"],
  ["#software", "Software"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed left-0 top-0 z-50 w-full px-4"
      >
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#1a100b]/75 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:mt-5 md:px-7">
          <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
            <motion.img
              src={logo}
              alt="CoffeeVision AI Logo"
              whileHover={{ scale: 1.08, rotate: -3 }}
              whileTap={{ scale: 0.94 }}
              className="h-12 w-12 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] md:h-16 md:w-16"
            />

            <div>
              <h1 className="text-base font-black tracking-wide text-white md:text-lg">
                CoffeeVision AI
              </h1>
              <p className="text-[11px] text-[#c7b2a0] md:text-xs">
                Vision AI for Coffee Quality
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#e8d8ca] lg:flex">
            {links.map(([href, text]) => (
              <NavLink key={text} href={href} text={text} />
            ))}
          </nav>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="hidden rounded-full bg-[#f5d38d] px-6 py-3 text-sm font-bold text-[#1a100b] lg:flex"
          >
            Contacto
          </motion.a>

          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur transition hover:bg-white/15 lg:hidden"
            aria-label="Abrir menú"
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Menu
                size={23}
                className="transition group-hover:rotate-6 group-hover:text-[#f5d38d]"
              />
            </motion.div>
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-[#120b07] px-6 py-6 text-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <a href="#inicio" onClick={closeMenu} className="flex items-center gap-3">
                  <motion.img
                    src={logo}
                    alt="CoffeeVision AI Logo"
                    whileHover={{ scale: 1.08, rotate: -3 }}
                    whileTap={{ scale: 0.94 }}
                    className="h-14 w-14 object-contain"
                  />

                  <div>
                    <p className="font-black">CoffeeVision AI</p>
                    <p className="text-xs text-[#c7b2a0]">Menú principal</p>
                  </div>
                </a>

                <motion.button
                  type="button"
                  onClick={closeMenu}
                  whileTap={{ scale: 0.85, rotate: 90 }}
                  whileHover={{ scale: 1.08, rotate: 8 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
                  aria-label="Cerrar menú"
                >
                  <X size={22} />
                </motion.button>
              </div>

              <nav className="mt-10 grid gap-3">
                {links.map(([href, text], index) => (
                  <motion.a
                    key={text}
                    href={href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 55, scale: 0.92 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    whileHover={{ x: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{
                      delay: index * 0.07,
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-bold text-[#f6eadb]"
                  >
                    <span className="absolute inset-y-0 left-0 w-1 bg-[#f5d38d] opacity-0 transition group-hover:opacity-100" />
                    <span className="relative">{text}</span>
                  </motion.a>
                ))}

                <motion.a
                  href="#contacto"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: 55, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{
                    delay: 0.38,
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className="mt-3 rounded-2xl bg-[#f5d38d] px-5 py-4 text-center font-black text-[#1a100b] shadow-[0_18px_40px_rgba(245,211,141,0.25)]"
                >
                  Contacto
                </motion.a>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
                className="mt-auto rounded-3xl border border-white/10 bg-white/10 p-5"
              >
                <p className="text-sm font-bold text-[#f5d38d]">
                  CoffeeVision AI
                </p>
                <p className="mt-2 text-sm leading-6 text-[#d8c3b3]">
                  IA, hardware y dashboard para el análisis de café verde.
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, text }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      className="relative transition hover:text-[#f5d38d]"
    >
      {text}
    </motion.a>
  );
}

export default Navbar;
