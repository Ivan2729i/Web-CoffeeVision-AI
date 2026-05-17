import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#120b07] px-6 pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,95,0.22),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(111,78,55,0.35),transparent_35%),linear-gradient(135deg,#120b07_0%,#2b170f_48%,#5b3018_100%)]" />

      <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#d6a85f]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[#f3d7a6] shadow-2xl backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#d6a85f]" />
            IA + Visión artificial para café verde
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] md:text-7xl">
            Control de calidad del café con{" "}
            <span className="bg-gradient-to-r from-[#f5d38d] via-[#c8843a] to-[#8f5b2f] bg-clip-text text-transparent">
              inteligencia artificial
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8c3b3]">
            CoffeeVision AI detecta defectos en granos de café verde, clasifica
            lotes y genera evidencia digital para apoyar evaluaciones más
            rápidas, trazables y consistentes.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#proceso"
              className="rounded-full bg-[#f5d38d] px-8 py-4 font-bold text-[#2b170f] shadow-[0_18px_50px_rgba(214,168,95,0.28)] transition hover:-translate-y-1 hover:scale-[1.02]"
            >
              Ver cómo funciona
            </a>

            <a
              href="#software"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              Explorar plataforma
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
            <Stat value="350g" label="muestra fija" />
            <Stat value="IA" label="detección visual" />
            <Stat value="PDF" label="reportes" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[#d6a85f]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#160d09]/90 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#d6a85f]">Live Quality Scan</p>
                  <h3 className="text-2xl font-black">CoffeeVision AI</h3>
                </div>

                <div className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-bold text-emerald-300">
                  Activo
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3b2418] to-[#7a3f1f] p-5">
                <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-[#f5d38d]/20 blur-2xl" />

                <div className="grid gap-4 md:grid-cols-2">
                  <MiniCard title="Lote" value="L-0001" />
                  <MiniCard title="Muestra" value="350g" />
                  <MiniCard title="Calidad" value="Premium" />
                  <MiniCard title="Defectos" value="12" />
                </div>

                <div className="mt-6 rounded-2xl bg-black/20 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="text-[#eacb9b]">Análisis de granos</span>
                    <span className="font-bold text-[#f5d38d]">78%</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 1.4, delay: 0.6 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#f5d38d] to-[#c8843a]"
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    "Detección de defectos primarios",
                    "Conteo oficial por equivalencias",
                    "Clasificación automática del lote",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.12 }}
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-[#f6eadb]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#fbf7f2] to-transparent" />
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <p className="text-2xl font-black text-[#f5d38d]">{value}</p>
      <p className="mt-1 text-sm text-[#d8c3b3]">{label}</p>
    </div>
  );
}

function MiniCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <p className="text-xs uppercase tracking-[0.2em] text-[#eacb9b]">
        {title}
      </p>
      <p className="mt-2 text-xl font-black text-white">{value}</p>
    </div>
  );
}

export default Hero;
