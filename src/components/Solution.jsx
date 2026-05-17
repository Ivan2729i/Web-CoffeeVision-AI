import { BrainCircuit, LayoutDashboard, ScanLine } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

function Solution() {
  return (
    <Section
      id="solucion"
      title="Una solución que une hardware, IA y software"
      subtitle="CoffeeVision AI apoya al evaluador con un flujo digital que detecta defectos, clasifica lotes y genera información útil para la toma de decisiones."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Card
          icon={ScanLine}
          title="Captura guiada"
          text="El prototipo controla el paso del café para facilitar una inspección visual más ordenada."
        />
        <Card
          icon={BrainCircuit}
          title="Análisis con IA"
          text="El modelo identifica defectos primarios y secundarios en los granos de café verde."
        />
        <Card
          icon={LayoutDashboard}
          title="Dashboard web"
          text="La plataforma muestra resultados, métricas y reportes para documentar cada evaluación."
        />
      </div>
    </Section>
  );
}

export default Solution;
