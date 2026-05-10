import { useRef } from "react";
import Slider from "react-slick";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { clients } from "../../../data/clients";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function ClientsCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <Section background="muted">
      <Container size="wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Casos de Éxito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que han transformado su operación con nuestra consultoría
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {clients.map((client, index) => (
              <div key={index}>
                <div className="bg-white border-2 border-border rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Logo Section - Left */}
                    <div className="bg-gradient-to-br from-muted to-accent p-12 md:p-16 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                      <div className="w-full max-w-md">
                        <div className="bg-white rounded-lg p-8 shadow-md flex items-center justify-center min-h-[200px]">
                          <span className="text-muted-foreground text-xl font-semibold text-center">
                            {client.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section - Right */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <Quote className="text-primary/20 mb-6" size={48} />

                      <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed font-medium">
                        "{client.description}"
                      </p>

                      <div className="flex items-center gap-4 mt-4">
                        <span className="inline-block text-sm bg-primary text-primary-foreground px-4 py-2 rounded font-medium">
                          {client.industry}
                        </span>
                        <div className="h-px flex-1 bg-border"></div>
                      </div>

                      <div className="mt-6 text-sm text-muted-foreground">
                        Caso de éxito #{(index + 1).toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
}
