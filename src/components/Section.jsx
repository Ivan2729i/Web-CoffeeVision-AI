import { motion } from "framer-motion";

function Section({ id, eyebrow = "CoffeeVision AI", title, subtitle, children }) {
  return (
    <section id={id} className="relative px-6 py-28">
      <div className="absolute inset-0 -z-10 bg-[#fbf7f2]" />
      <div className="absolute left-[-120px] top-20 -z-10 h-72 w-72 rounded-full bg-[#d6a85f]/15 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          {eyebrow && (
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#8b4e24]">
              {eyebrow}
            </p>
          )}

          <h2 className="text-4xl font-black tracking-[-0.04em] text-[#2b170f] md:text-6xl">
            {title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6b5a4f]">
            {subtitle}
          </p>
        </motion.div>

        {children}
      </div>
    </section>
  );
}

export default Section;
