import Section from "./Section";

const benefits = [
  ["01", "Más rapidez", "Reduce el tiempo de revisión de muestras."],
  ["02", "Mayor consistencia", "Apoya evaluaciones más uniformes entre lotes."],
  ["03", "Trazabilidad", "Guarda resultados digitales y evidencia del análisis."],
  ["04", "Mejor toma de decisiones", "Ayuda a clasificar lotes con información clara."],
];

function Benefits() {
  return (
    <Section
      title="Beneficios del sistema"
      subtitle="Una herramienta diseñada para complementar al evaluador humano y fortalecer el control de calidad."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {benefits.map(([num, title, text]) => (
          <div
            key={title}
            className="group flex gap-5 rounded-[2rem] border border-[#eadfd6] bg-white p-6 shadow-[0_18px_50px_rgba(67,38,22,0.08)] transition hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2b170f] font-black text-[#f5d38d]">
              {num}
            </div>

            <div>
              <h3 className="text-xl font-black text-[#2b170f]">{title}</h3>
              <p className="mt-2 leading-7 text-[#6b5a4f]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Benefits;
