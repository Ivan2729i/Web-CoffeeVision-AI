import Section from "./Section";

function Hardware() {
  return (
    <Section
      id="hardware"
      title="Hardware del sistema"
      subtitle="El prototipo guía la muestra de café verde de forma ordenada para facilitar la captura y análisis de cada grano."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1a100b] p-6 text-white shadow-2xl">
          <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#d6a85f]/20 blur-3xl" />

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d6a85f]">
            Prototipo físico
          </p>

          <h3 className="mt-4 text-4xl font-black">
            Flujo controlado para inspección visual
          </h3>

          <p className="mt-5 max-w-2xl leading-8 text-[#d8c3b3]">
            El sistema inicia con una tolva impresa en 3D, después ordena los
            granos mediante cilindros motorizados y finalmente los dirige hacia
            la zona de captura para ser analizados por visión artificial.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <MiniSpec value="350g" label="muestra" />
            <MiniSpec value="2" label="cámaras" />
            <MiniSpec value="IA" label="análisis" />
          </div>
        </div>

        <div className="grid gap-5">
          <HardwareItem number="01" title="Tolva de entrada" text="Recibe la muestra y la conduce hacia el sistema de separación." />
          <HardwareItem number="02" title="Ordenamiento mecánico" text="Cilindros y motores ayudan a regular el paso de los granos." />
          <HardwareItem number="03" title="Zona de captura" text="Las cámaras registran imágenes para alimentar el modelo de IA." />
          <HardwareItem number="04" title="Control electrónico" text="La electrónica coordina el movimiento y el flujo del prototipo." />
        </div>
      </div>
    </Section>
  );
}

function HardwareItem({ number, title, text }) {
  return (
    <div className="flex gap-5 rounded-[2rem] border border-[#eadfd6] bg-white p-5 shadow-[0_18px_50px_rgba(67,38,22,0.08)]">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2b170f] font-black text-[#f5d38d]">
        {number}
      </div>

      <div>
        <h3 className="text-lg font-black text-[#2b170f]">{title}</h3>
        <p className="mt-2 leading-7 text-[#6b5a4f]">{text}</p>
      </div>
    </div>
  );
}

function MiniSpec({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <p className="text-3xl font-black text-[#f5d38d]">{value}</p>
      <p className="mt-1 text-sm text-[#d8c3b3]">{label}</p>
    </div>
  );
}

export default Hardware;
