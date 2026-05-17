import { motion } from "framer-motion";

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="text-4xl font-black md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-[#6b5a4f]">{subtitle}</p>
        </motion.div>

        {children}
      </div>
    </section>
  );
}

export default Section;
