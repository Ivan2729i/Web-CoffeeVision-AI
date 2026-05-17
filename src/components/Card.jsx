import { motion } from "framer-motion";

function Card({ icon: Icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[#eadfd6] bg-white p-7 shadow-[0_18px_50px_rgba(67,38,22,0.08)]"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d6a85f]/20 blur-2xl transition group-hover:bg-[#d6a85f]/35" />

      {Icon && (
        <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2b170f] to-[#8b4e24] text-[#f5d38d] shadow-lg">
          <Icon size={25} />
        </div>
      )}

      <h3 className="relative text-xl font-black text-[#2b170f]">
        {title}
      </h3>

      <p className="relative mt-4 leading-7 text-[#6b5a4f]">
        {text}
      </p>

      <div className="relative mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-[#8b4e24] to-[#d6a85f] opacity-70 transition group-hover:w-28" />
    </motion.div>
  );
}

export default Card;
