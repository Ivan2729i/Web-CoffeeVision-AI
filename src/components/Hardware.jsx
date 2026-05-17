import { motion } from "framer-motion";
import Section from "./Section";
import prototipo from "../assets/prototipo.png";

function Hardware() {
  return (
    <Section
      id="hardware"
      title="Hardware del sistema"
      subtitle="El prototipo guía la muestra de café verde de forma ordenada para facilitar la captura y análisis de cada grano."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-[#eadfd6] bg-[#1a100b] p-3 shadow-2xl sm:p-5"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#d6a85f]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.5rem]">
            <img
              src={prototipo}
              alt="Prototipo físico CoffeeVision AI"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#120b07]/80 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/35 p-5 text-white backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5d38d]">
                Prototipo físico
              </p>
              <h3 className="mt-2 text-2xl font-black">
                Flujo controlado para inspección visual
              </h3>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4">
          <HardwareItem
            number="01"
            title="Tolva de entrada"
            text="Recibe la muestra de 350g y la conduce hacia el sistema de separación."
          />
          <HardwareItem
            number="02"
            title="Ordenamiento mecánico"
            text="Cilindros y motores ayudan a regular el paso de los granos."
          />
          <HardwareItem
            number="03"
            title="Zona de captura"
            text="Las cámaras registran imágenes para alimentar el modelo de IA."
          />
          <HardwareItem
            number="04"
            title="Control electrónico"
            text="La electrónica coordina el movimiento y el flujo del prototipo."
          />
        </div>
      </div>
    </Section>
  );
}

function HardwareItem({ number, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -5, scale: 1.015 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-[1.8rem] border border-[#eadfd6] bg-white px-5 py-6 shadow-[0_18px_50px_rgba(67,38,22,0.08)]"
    >
      <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-gradient-to-b from-[#2b170f] via-[#8b4e24] to-[#d6a85f]" />
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d6a85f]/20 blur-2xl transition group-hover:bg-[#d6a85f]/35" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2b170f] text-sm font-black text-[#f5d38d] shadow-lg">
          {number}
        </div>

        <div>
          <h3 className="text-lg font-black text-[#2b170f]">{title}</h3>
          <p className="mt-2 leading-7 text-[#6b5a4f]">{text}</p>
        </div>
      </div>

      <div className="relative ml-16 mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#8b4e24] to-[#d6a85f] transition-all duration-300 group-hover:w-32" />
    </motion.div>
  );
}

export default Hardware;
