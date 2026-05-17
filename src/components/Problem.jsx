import { AlertTriangle, Clock, FileWarning } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

function Problem() {
  return (
    <Section
      id="problema"
      title="El reto en la evaluación del café verde"
      subtitle="La inspección manual sigue siendo importante, pero puede presentar variaciones cuando se analizan muestras grandes o repetitivas."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Card
          icon={AlertTriangle}
          title="Criterio variable"
          text="La clasificación puede cambiar según la experiencia, concentración o fatiga del evaluador."
        />
        <Card
          icon={Clock}
          title="Proceso lento"
          text="La revisión manual de defectos puede consumir tiempo y retrasar decisiones sobre el lote."
        />
        <Card
          icon={FileWarning}
          title="Registro limitado"
          text="Sin evidencia digital, comparar evaluaciones y generar reportes se vuelve más complicado."
        />
      </div>
    </Section>
  );
}

export default Problem;
