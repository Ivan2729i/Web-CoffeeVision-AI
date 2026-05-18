import { motion } from "framer-motion";

const whatsappLink =
  "https://wa.link/5qgnx5";

function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#120b07] px-6 py-28 text-white"
    >
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
          Un sistema que integra componentes físicos, visión e inteligencia artificial y un dashboard
          web para apoyar el control de calidad del café verde.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ContactButton href={whatsappLink} primary external>
            Contactar por WhatsApp
          </ContactButton>

          <ContactButton href="#proceso">Descubrir Funcionamiento</ContactButton>

          <ContactButton href="#software">Ver plataforma</ContactButton>
        </div>
      </motion.div>
    </section>
  );
}

function ContactButton({ href, children, primary, external }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={
        primary
          ? "relative overflow-hidden rounded-full bg-[#f5d38d] px-8 py-4 font-bold text-[#2b170f] shadow-[0_18px_45px_rgba(245,211,141,0.25)]"
          : "relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur"
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

export default Contact;
