import { Cpu, Camera, Cog, PackageOpen } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

function Hardware() {
  return (
    <Section
      id="hardware"
      title="Hardware del sistema"
      subtitle="El prototipo guía la muestra de café verde de forma ordenada para facilitar la captura y análisis de cada grano."
    >
      <div className="grid gap-6 md:grid-cols-4">
        <Card icon={PackageOpen} title="Tolva 3D" text="Recibe la muestra de 350g y dirige el café hacia el sistema de separación." />
        <Card icon={Cog} title="Sistema mecánico" text="Motores y cilindros ayudan a ordenar los granos para su inspección individual." />
        <Card icon={Camera} title="Cámaras" text="Capturan imágenes del flujo de granos para enviarlas al modelo de visión artificial." />
        <Card icon={Cpu} title="Control electrónico" text="Microcontroladores y módulos de control coordinan el movimiento del prototipo." />
      </div>
    </Section>
  );
}

export default Hardware;
