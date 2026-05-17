import { motion } from "framer-motion";
import { ScanLine, Brain, LayoutDashboard } from "lucide-react";
import Section from "./Section";

const solutions = [
  {
    icon: ScanLine,
    title: "Captura guiada",
    text: "El prototipo controla el paso del café para facilitar una inspección visual más ordenada.",
  },
  {
    icon: Brain,
    title: "Análisis con IA",
    text: "El modelo identifica defectos primarios y secundarios en los granos de café verde.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard web",
    text: "La plataforma muestra resultados, métricas y reportes para documentar cada evaluación.",
  },
];

function Solution() {
  return (
    <Section
      id="solucion"
      title="Una solución que une hardware, IA y software"
      subtitle="CoffeeVision AI apoya al evaluador con un flujo digital que detecta defectos, clasifica lotes y genera información útil para la toma de decisiones."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {solutions.map((item, index) => (
          <SolutionCard key={item.title} {...item} index={index} />
        ))}
      </div>
    </Section>
  );
}

function SolutionCard({ icon: Icon, title, text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[#eadfd6] bg-[#2b170f] p-6 text-white shadow-[0_18px_50px_rgba(67,38,22,0.16)]"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#f5d38d]/20 blur-2xl transition group-hover:bg-[#f5d38d]/35" />

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.2 }}
        className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5d38d] text-[#2b170f] shadow-lg"
      >
        <Icon size={26} />
      </motion.div>

      <h3 className="relative text-xl font-black">{title}</h3>
      <p className="relative mt-3 leading-7 text-[#d8c3b3]">{text}</p>

      <div className="relative mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#f5d38d] to-[#8b4e24] transition-all duration-300 group-hover:w-28" />
    </motion.div>
  );
}

export default Solution;
