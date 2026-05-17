import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Hero() {
  const [progress, setProgress] = useState(0);
  const mockupRef = useRef(null);
  const isMockupInView = useInView(mockupRef, { once: true, amount: 0.45 });

  useEffect(() => {
    if (!isMockupInView) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 55);

    return () => clearInterval(interval);
  }, [isMockupInView]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#120b07] px-4 pb-24 pt-32 text-white sm:px-6 md:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(214,168,95,0.22),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(111,78,55,0.35),transparent_35%),linear-gradient(135deg,#120b07_0%,#2b170f_48%,#5b3018_100%)]" />

      <div className="absolute left-1/2 top-28 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#d6a85f]/10 blur-3xl md:h-[520px] md:w-[520px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="text-center lg:text-left"
        >
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
            Control de calidad del café con{" "}
            <span className="bg-gradient-to-r from-[#f5d38d] via-[#c8843a] to-[#8f5b2f] bg-clip-text text-transparent">
              inteligencia artificial
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#d8c3b3] sm:text-lg lg:mx-0">
            CoffeeVision AI detecta defectos en granos de café verde, clasifica
            lotes y genera evidencia digital para apoyar evaluaciones más
            rápidas, trazables y consistentes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <HeroButton href="#proceso" primary>
              Ver cómo funciona
            </HeroButton>

            <HeroButton href="#software">
              Explorar plataforma
            </HeroButton>
          </div>

          <div className="mx-auto mt-8 grid max-w-sm grid-cols-3 gap-3 sm:max-w-2xl sm:gap-4 lg:mx-0">
            <Stat value="350g" label="muestra" />
            <Stat value="IA" label="visión" />
            <Stat value="CSV/PDF" label="reportes" />
          </div>
        </motion.div>

        <motion.div
          ref={mockupRef}
          initial={{ opacity: 0, y: 45, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[#d6a85f]/20 blur-3xl md:-inset-6" />

          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl sm:p-4 md:rounded-[2rem]">
            <div className="rounded-[1.4rem] bg-[#160d09]/90 p-4 sm:p-5 md:rounded-[1.5rem]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#d6a85f] sm:text-sm">
                    Live Quality Scan
                  </p>
                  <h3 className="text-xl font-black sm:text-2xl">
                    CoffeeVision AI
                  </h3>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="rounded-full bg-emerald-400/15 px-3 py-2 text-xs font-bold text-emerald-300 sm:px-4 sm:text-sm"
                >
                  Activo
                </motion.div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3b2418] to-[#7a3f1f] p-4 sm:p-5">
                <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-[#f5d38d]/20 blur-2xl" />

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <MiniCard title="Lote" value="L-0001" />
                  <MiniCard title="Muestra" value="350g" />
                  <MiniCard title="Calidad" value="Premium" />
                  <MiniCard title="Defectos" value="12" />
                </div>

                <div className="mt-5 rounded-2xl bg-black/20 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="text-[#eacb9b]">Análisis</span>
                    <span className="font-bold text-[#f5d38d]">
                      {progress}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.12, ease: "linear" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#f5d38d] to-[#c8843a]"
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  {[
                    "Defectos primarios",
                    "Conteo por equivalencias",
                    "Clasificación automática",
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

      <div className="pointer-events-none absolute bottom-[-70px] left-0 h-36 w-full bg-gradient-to-t from-[#fbf7f2] via-[#fbf7f2]/80 to-transparent md:bottom-[-90px] md:h-44" />
    </section>
  );
}

function HeroButton({ href, children, primary }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className={
        primary
          ? "relative overflow-hidden rounded-full bg-[#f5d38d] px-8 py-4 text-center font-bold text-[#2b170f] shadow-[0_18px_50px_rgba(214,168,95,0.28)]"
          : "relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur"
      }
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"
        animate={{ x: ["-130%", "130%", "-130%"] }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="relative">{children}</span>
    </motion.a>
  );
}

function Stat({ value, label }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.04 }}
      className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur sm:rounded-3xl sm:p-4"
    >
      <p className="text-xl font-black text-[#f5d38d] sm:text-2xl">{value}</p>
      <p className="mt-1 text-xs text-[#d8c3b3] sm:text-sm">{label}</p>
    </motion.div>
  );
}

function MiniCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur sm:p-4"
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#eacb9b] sm:text-xs">
        {title}
      </p>
      <p className="mt-2 text-base font-black text-white sm:text-xl">{value}</p>
    </motion.div>
  );
}

export default Hero;
