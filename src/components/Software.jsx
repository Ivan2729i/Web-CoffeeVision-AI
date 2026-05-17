import { Brain, BarChart3, FileText, MonitorSmartphone } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

function Software() {
  return (
    <Section
      id="software"
      title="Software e inteligencia artificial"
      subtitle="La plataforma web centraliza la detección, clasificación, métricas y reportes del proceso de calidad."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card icon={Brain} title="Modelo de IA" text="Detecta defectos en granos de café verde mediante visión por computadora." />
        <Card icon={MonitorSmartphone} title="Dashboard web" text="Permite visualizar resultados, lotes, proveedores y evaluaciones desde una interfaz moderna." />
        <Card icon={BarChart3} title="Métricas de calidad" text="Muestra indicadores para analizar el desempeño de los lotes evaluados." />
        <Card icon={FileText} title="Reportes automáticos" text="Genera documentos con evidencia y resultados del análisis realizado." />
      </div>
    </Section>
  );
}

export default Software;
