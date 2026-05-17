import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="absolute right-[-120px] top-32 h-[420px] w-[420px] rounded-full bg-[#c8843a]/20 blur-3xl" />
      <div className="absolute left-[-120px] bottom-10 h-[340px] w-[340px] rounded-full bg-[#4f7a42]/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <span className="mb-5 inline-flex rounded-full border border-[#d6a85f]/40 bg-white/70 px-4 py-2 text-sm font-medium text-[#6b3f22] shadow-sm">
            Inteligencia artificial aplicada al café verde
          </span>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Clasificación inteligente de defectos en{" "}
            <span className="text-[#8b4e24]">café verde</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b5a4f]">
            CoffeeVision AI automatiza la detección de defectos en granos de café
            verde mediante visión por computadora, reduciendo errores humanos y
            mejorando el control de calidad.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#solucion" className="rounded-full bg-[#6b3f22] px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
              Conocer solución
            </a>
            <a href="#proceso" className="rounded-full border border-[#6b3f22]/30 bg-white px-7 py-3 font-semibold text-[#6b3f22] transition hover:scale-105">
              Ver funcionamiento
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-2xl">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-[#3b2418] to-[#8b4e24] p-8 text-white">
            <p className="text-sm text-[#eacb9b]">Análisis en tiempo real</p>
            <h3 className="mt-3 text-3xl font-bold">350g de muestra</h3>
            <div className="mt-8 grid gap-4">
              {["Detección de defectos", "Clasificación por grado", "Reporte automático"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
