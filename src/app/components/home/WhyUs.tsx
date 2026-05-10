import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { CheckCircle2, Layers, Target } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Soluciones Escalables",
    description: "Tecnología enterprise pensada para crecer contigo. Arquitecturas robustas que soportan tu expansión sin reescrituras costosas.",
  },
  {
    icon: CheckCircle2,
    title: "Integración Real",
    description: "Nos integramos a tu stack tecnológico existente. Trabajamos con tus sistemas actuales sin disrupciones operativas.",
  },
  {
    icon: Target,
    title: "Resultados Medibles",
    description: "KPIs claros y ROI demostrable. Cada proyecto incluye métricas de impacto y seguimiento de resultados tangibles.",
  },
];

export function WhyUs() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Por Qué Elegirnos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformación digital con enfoque empresarial y resultados comprobados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <reason.icon className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
