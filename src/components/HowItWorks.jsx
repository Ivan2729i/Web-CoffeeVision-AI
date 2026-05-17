import { motion } from "framer-motion";
import Section from "./Section";

function HowItWorks() {
  const steps = [
    "Ingreso de muestra de 350g en tolva",
    "Ordenamiento de granos mediante sistema mecánico",
    "Captura con cámaras durante el flujo",
    "Detección de defectos con IA",
    "Clasificación final y reporte",
  ];

  return (
    <Section id="proceso" title="Cómo funciona" subtitle="Un flujo diseñado para convertir la inspección visual en un proceso más uniforme y digital.">
      <div className="grid gap-5">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-5 rounded-3xl border border-[#eadfd6] bg-white p-5 shadow-sm"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6b3f22] font-bold text-white">
              {index + 1}
            </span>
            <p className="font-semibold text-[#4a2a18]">{step}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default HowItWorks;
