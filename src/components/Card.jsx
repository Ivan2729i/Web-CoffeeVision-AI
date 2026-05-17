import { motion } from "framer-motion";

function Card({ icon: Icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-[#eadfd6] bg-white/80 p-7 shadow-sm backdrop-blur transition"
    >
      {Icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6b3f22] text-white">
          <Icon size={24} />
        </div>
      )}

      <h3 className="text-xl font-bold text-[#4a2a18]">{title}</h3>
      <p className="mt-3 leading-7 text-[#6b5a4f]">{text}</p>
    </motion.div>
  );
}

export default Card;
