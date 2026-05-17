import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#120b07] px-6 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,95,0.14),transparent_32%)]" />

      <motion.a
        href="#inicio"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className="relative mx-auto flex max-w-7xl items-center justify-center gap-4 text-center"
      >
        <img
          src={logo}
          alt="CoffeeVision AI Logo"
          className="h-16 w-16 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]"
        />

        <div className="text-left">
          <p className="text-xl font-black">CoffeeVision AI</p>
          <p className="mt-1 text-sm text-[#c7b2a0]">
            © 2026 · CoffeeVision AI
          </p>
        </div>
      </motion.a>
    </footer>
  );
}

export default Footer;
