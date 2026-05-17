import { BrainCircuit, LayoutDashboard } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

function Solution() {
  return (
    <Section id="solucion" title="Nuestra solución" subtitle="CoffeeVision AI combina hardware, visión artificial y software web para apoyar el control de calidad.">
      <div className="grid gap-6 md:grid-cols-2">
        <Card icon={BrainCircuit} title="Visión por computadora" text="El sistema identifica defectos primarios y secundarios en granos de café verde usando inteligencia artificial." />
        <Card icon={LayoutDashboard} title="Dashboard inteligente" text="Los resultados se visualizan en una plataforma web moderna con métricas, reportes y clasificación del lote." />
      </div>
    </Section>
  );
}

export default Solution;
