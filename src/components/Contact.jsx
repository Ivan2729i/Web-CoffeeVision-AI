import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contacto" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#2b1b13] px-8 py-16 text-center text-white shadow-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d6a85f]">
          Proyecto tecnológico
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          CoffeeVision AI
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#d8c3b3]">
          Tecnología aplicada al análisis de café verde para apoyar procesos de
          calidad más rápidos, trazables y consistentes.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="rounded-full bg-white px-8 py-3 font-bold text-[#2b1b13] transition hover:scale-105"
          >
            Conocer más
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
