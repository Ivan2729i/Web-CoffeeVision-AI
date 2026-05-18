import { motion } from "framer-motion";
import { PackageOpen, Cog, Camera, Brain, FileText } from "lucide-react";

const steps = [
  {
    icon: PackageOpen,
    num: "01",
    title: "Tolva Especializada",
    text: "La muestra de 350g ingresa al sistema.",
  },
  {
    icon: Cog,
    num: "02",
    title: "Ordenamiento",
    text: "Los granos se separan para pasar de forma controlada.",
  },
  {
    icon: Camera,
    num: "03",
    title: "Captura",
    text: "Las cámaras registran el flujo del café verde.",
  },
  {
    icon: Brain,
    num: "04",
    title: "Modelo de IA",
    text: "El modelo detecta defectos primarios y secundarios en los granos de café verde.",
  },
  {
    icon: FileText,
    num: "05",
    title: "Reporte",
    text: "El dashboard genera resultados y evidencia digital trazable.",
  },
];

function HowItWorks() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-[#120b07] px-4 py-28 text-white sm:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,95,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(79,122,66,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#d6a85f]">
            Proceso
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            De la muestra al resultado final
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#d8c3b3]">
            CoffeeVision AI integra hardware, captura visual e inteligencia
            artificial para convertir la evaluación del café verde en un flujo
            más claro, medible y trazable.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute left-6 top-0 h-full w-[2px] origin-top bg-gradient-to-b from-[#d6a85f] via-[#8b4e24] to-transparent md:left-1/2 md:hidden"
          />

          <div className="grid gap-5 md:grid-cols-5">
            <div className="absolute left-0 top-14 hidden h-[2px] w-full bg-gradient-to-r from-transparent via-[#d6a85f]/70 to-transparent md:block" />

            {steps.map((step, index) => (
              <ProcessCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative ml-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl md:ml-0"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d6a85f]/15 blur-2xl transition group-hover:bg-[#d6a85f]/30" />

      <div className="relative mb-7 flex items-center gap-4 md:block">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.12,
          }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f5d38d] text-[#2b170f] shadow-[0_0_35px_rgba(245,211,141,0.25)]"
        >
          <Icon size={28} />
        </motion.div>

        <span className="rounded-full border border-[#d6a85f]/30 bg-[#1a100b] px-4 py-2 text-sm font-black text-[#f5d38d] md:mt-5 md:inline-flex">
          {step.num}
        </span>
      </div>

      <h3 className="relative text-xl font-black">{step.title}</h3>
      <p className="relative mt-3 text-sm leading-7 text-[#d8c3b3]">
        {step.text}
      </p>

      <div className="relative mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#f5d38d] to-[#8b4e24] transition-all duration-300 group-hover:w-24" />
    </motion.div>
  );
}

export default HowItWorks;
