import { AlertTriangle, Clock, FileWarning } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

function Problem() {
  return (
    <Section id="problema" title="El problema" subtitle="La inspección tradicional del café verde depende de la experiencia visual del evaluador.">
      <div className="grid gap-6 md:grid-cols-3">
        <Card icon={AlertTriangle} title="Variación humana" text="Los resultados pueden cambiar dependiendo del evaluador, el cansancio o la experiencia." />
        <Card icon={Clock} title="Proceso lento" text="Analizar muestras manualmente consume tiempo y puede retrasar decisiones de calidad." />
        <Card icon={FileWarning} title="Poca trazabilidad" text="Sin registros digitales, comparar lotes y generar reportes se vuelve complicado." />
      </div>
    </Section>
  );
}

export default Problem;
