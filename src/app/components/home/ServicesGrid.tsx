import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/button";
import { services } from "../../../data/services";

export function ServicesGrid() {
  return (
    <Section id="servicios">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas enterprise para empresas en crecimiento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button variant="ghost" className="w-full justify-start px-0 text-primary hover:text-primary-hover">
                Ver más →
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
