import { motion } from "framer-motion";

const steps = [
  ["01", "Tolva 3D", "La muestra de 350g ingresa al sistema."],
  ["02", "Ordenamiento", "Los granos se separan para pasar de forma controlada."],
  ["03", "Captura", "Las cámaras registran el flujo del café verde."],
  ["04", "IA", "El modelo detecta defectos primarios y secundarios."],
  ["05", "Reporte", "El dashboard genera resultados y evidencia digital."],
];

function HowItWorks() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-[#120b07] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,95,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(79,122,66,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
            Proceso
          </p>
          <h2 className="text-4xl font-black md:text-6xl">
            De la muestra al resultado final
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d8c3b3]">
            CoffeeVision AI integra hardware, captura visual e inteligencia artificial
            para convertir la evaluación del café verde en un flujo más claro,
            medible y trazable.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-5">
          <div className="absolute left-0 top-16 hidden h-[2px] w-full bg-gradient-to-r from-transparent via-[#d6a85f]/60 to-transparent md:block" />

          {steps.map(([num, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#d6a85f]/40 bg-[#1a100b] text-2xl font-black text-[#f5d38d] shadow-[0_0_40px_rgba(214,168,95,0.18)]">
                {num}
              </div>

              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#d8c3b3]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
