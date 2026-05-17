import { motion } from "framer-motion";
import { Brain, Boxes, BarChart3, FileText } from "lucide-react";
import Section from "./Section";
import dashboard from "../assets/dashboard.png";

function Software() {
  return (
    <Section
      id="software"
      title="Software e inteligencia artificial"
      subtitle="La plataforma centraliza detección, clasificación, métricas y reportes del proceso de calidad."
    >
      <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:grid-rows-[auto_auto_auto] lg:items-start">
        <Feature
          className="lg:col-start-1 lg:row-start-1"
          icon={Brain}
          title="Modelo de visión artificial"
          text="Detecta defectos en granos de café verde mediante IA."
        />

        <Feature
          className="lg:col-start-1 lg:row-start-2"
          icon={Boxes}
          title="Gestión de lotes"
          text="Registra proveedores, muestras y evaluaciones realizadas."
        />

        <Feature
          className="lg:col-start-1 lg:row-start-3"
          icon={BarChart3}
          title="Métricas de calidad"
          text="Resume resultados para analizar el comportamiento de los lotes."
        />

        <Feature
          className="lg:col-start-2 lg:row-start-3"
          icon={FileText}
          title="Reportes CSV/PDF"
          text="Genera evidencia digital del análisis realizado."
        />

        <DashboardMockup />
      </div>
    </Section>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative self-start overflow-hidden rounded-[2rem] border border-[#eadfd6] bg-[#1a100b] p-3 shadow-2xl sm:p-5 lg:col-start-2 lg:row-start-1 lg:row-span-2"
    >
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#d6a85f]/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#120b07]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 truncate rounded-full bg-black/25 px-4 py-1 text-xs text-[#d8c3b3]">
            coffeevision.ai/dashboard
          </span>
        </div>

        <img
          src={dashboard}
          alt="Dashboard CoffeeVision AI"
          className="block h-auto w-full object-contain"
        />
      </div>
    </motion.div>
  );
}

function Feature({ icon: Icon, title, text, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-[#eadfd6] bg-white p-6 text-[#2b170f] shadow-[0_18px_50px_rgba(67,38,22,0.08)] ${className}`}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#d6a85f]/20 blur-2xl transition group-hover:bg-[#d6a85f]/35" />

      <h3 className="relative text-xl font-black text-[#2b170f]">{title}</h3>
      <p className="relative mt-3 leading-7 text-[#6b5a4f]">{text}</p>

      <motion.div
        whileHover={{ rotate: 8, scale: 1.12 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2b170f] to-[#8b4e24] text-[#f5d38d] shadow-lg"
      >
        <Icon size={25} />
      </motion.div>

      <div className="relative mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#8b4e24] to-[#d6a85f] transition-all duration-300 group-hover:w-28" />
    </motion.div>
  );
}

export default Software;
