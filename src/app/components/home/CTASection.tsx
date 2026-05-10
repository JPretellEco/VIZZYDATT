import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <Section>
      <Container>
        <div className="bg-gradient-to-br from-primary to-primary-hover rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Impulsa tu Transformación Digital
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda una consultoría sin costo y descubre cómo podemos optimizar
            tus procesos con tecnología enterprise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              <Mail size={20} />
              Solicitar Consultoría
              <ArrowRight size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
