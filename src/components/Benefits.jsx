import { Zap, ShieldCheck, ClipboardList, TrendingUp } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

function Benefits() {
  return (
    <Section
      title="Beneficios"
      subtitle="CoffeeVision AI está diseñado para complementar el trabajo humano y hacer más confiable el control de calidad."
    >
      <div className="grid gap-6 md:grid-cols-4">
        <Card icon={Zap} title="Rapidez" text="Reduce el tiempo necesario para evaluar una muestra." />
        <Card icon={ShieldCheck} title="Consistencia" text="Apoya resultados más uniformes entre diferentes evaluaciones." />
        <Card icon={ClipboardList} title="Trazabilidad" text="Guarda resultados digitales para consultar y comparar lotes." />
        <Card icon={TrendingUp} title="Escalabilidad" text="Puede crecer hacia más módulos, sensores y procesos agroindustriales." />
      </div>
    </Section>
  );
}

export default Benefits;
