import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileWarning } from "lucide-react";
import Section from "./Section";

const problems = [
  {
    icon: AlertTriangle,
    title: "Criterio variable",
    text: "La clasificación puede cambiar según la experiencia, concentración o fatiga del evaluador.",
  },
  {
    icon: Clock,
    title: "Proceso lento",
    text: "La revisión manual de defectos puede consumir mucho tiempo y retrasar decisiones sobre el lote.",
  },
  {
    icon: FileWarning,
    title: "Registro limitado",
    text: "Sin evidencia digital, comparar evaluaciones y generar reportes se vuelve más complicado.",
  },
];

function Problem() {
  return (
    <Section
      id="problema"
      eyebrow="Problemática"
      title="El reto en la evaluación del café verde"
      subtitle="La inspección tradicional sigue siendo valiosa, pero mantener la consistencia se vuelve un desafío crítico en análisis masivos. Ahí es donde la automatización transforma el flujo, optimizando el proceso."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {problems.map((item, index) => (
          <InfoCard key={item.title} {...item} index={index} />
        ))}
      </div>
    </Section>
  );
}

function InfoCard({ icon: Icon, title, text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[#eadfd6] bg-white p-6 shadow-[0_18px_50px_rgba(67,38,22,0.08)]"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d6a85f]/20 blur-2xl transition group-hover:bg-[#d6a85f]/35" />

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.2 }}
        className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2b170f] to-[#8b4e24] text-[#f5d38d] shadow-lg"
      >
        <Icon size={26} />
      </motion.div>

      <h3 className="relative text-xl font-black text-[#2b170f]">{title}</h3>
      <p className="relative mt-3 leading-7 text-[#6b5a4f]">{text}</p>

      <div className="relative mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#8b4e24] to-[#d6a85f] transition-all duration-300 group-hover:w-28" />
    </motion.div>
  );
}

export default Problem;
