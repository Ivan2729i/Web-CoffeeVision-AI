import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#120b07] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,95,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(79,122,66,0.18),transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d6a85f]">
          CoffeeVision AI
        </p>

        <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Tecnología para una evaluación de café más clara y trazable
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#d8c3b3]">
          Un sistema que integra prototipo físico, visión artificial y dashboard
          web para apoyar el control de calidad del café verde.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#proceso"
            className="rounded-full bg-[#f5d38d] px-8 py-4 font-bold text-[#2b170f] transition hover:-translate-y-1 hover:scale-[1.02]"
          >
            Ver funcionamiento
          </a>

          <a
            href="#software"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
          >
            Ver plataforma
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
