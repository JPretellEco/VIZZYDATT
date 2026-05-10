import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/button";
import { courses } from "../../../data/courses";

export function TrainingSection() {
  return (
    <Section id="capacitacion" background="muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Capacitación Empresarial
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Programas corporativos de formación tecnológica adaptados a tu equipo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <course.icon className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {course.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {course.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            Modalidades Corporativas
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Capacitación in-company, virtual en vivo, y programas personalizados
            con certificación empresarial
          </p>
          <Button size="lg">
            Ver Catálogo Completo
          </Button>
        </div>
      </Container>
    </Section>
  );
}
