import Section from "./Section";

function Software() {
  return (
    <Section
      id="software"
      title="Software e inteligencia artificial"
      subtitle="La plataforma centraliza la detección, clasificación, métricas y reportes del proceso de calidad."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-5">
          <Feature title="Modelo de visión artificial" text="Detecta defectos en granos de café verde mediante IA." />
          <Feature title="Gestión de lotes" text="Registra proveedores, muestras y evaluaciones realizadas." />
          <Feature title="Métricas de calidad" text="Resume resultados para analizar el comportamiento de los lotes." />
          <Feature title="Reportes automáticos" text="Genera evidencia digital del análisis realizado." />
        </div>

        <div className="rounded-[2rem] border border-[#eadfd6] bg-[#1a100b] p-5 shadow-2xl">
          <div className="rounded-[1.5rem] bg-[#fbf7f2] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#8b4e24]">Dashboard</p>
                <h3 className="text-2xl font-black text-[#2b170f]">
                  Quality Assessment
                </h3>
              </div>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                Online
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Metric value="24" label="Lotes" />
              <Metric value="91%" label="Calidad" />
              <Metric value="12" label="Defectos" />
            </div>

            <div className="mt-5 rounded-3xl border border-[#eadfd6] bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-black text-[#2b170f]">Clasificación</p>
                <p className="text-sm text-[#8b4e24]">L-0001</p>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-[#eadfd6]">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#8b4e24] to-[#d6a85f]" />
              </div>

              <div className="mt-5 grid gap-3">
                <Row label="Defectos primarios" value="0" />
                <Row label="Defectos secundarios" value="12" />
                <Row label="Resultado" value="Premium" strong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-[2rem] border border-[#eadfd6] bg-white p-6 shadow-[0_18px_50px_rgba(67,38,22,0.08)]">
      <h3 className="text-xl font-black text-[#2b170f]">{title}</h3>
      <p className="mt-3 leading-7 text-[#6b5a4f]">{text}</p>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
      <p className="text-2xl font-black text-[#8b4e24]">{value}</p>
      <p className="text-sm text-[#6b5a4f]">{label}</p>
    </div>
  );
}

function Row({ label, value, strong }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#fbf7f2] px-4 py-3">
      <span className="text-sm text-[#6b5a4f]">{label}</span>
      <span className={`font-black ${strong ? "text-[#8b4e24]" : "text-[#2b170f]"}`}>
        {value}
      </span>
    </div>
  );
}

export default Software;
