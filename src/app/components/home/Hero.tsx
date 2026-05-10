import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../layout/Container";
import { siteConfig } from "../../../config/site";

export function Hero() {
  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary-hover/60 to-secondary/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-transparent" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            {siteConfig.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="default"
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              {siteConfig.hero.ctaPrimary}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <MessageCircle size={20} />
              {siteConfig.hero.ctaSecondary}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>{siteConfig.stats.years} años en el mercado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>{siteConfig.stats.clients} clientes corporativos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>{siteConfig.stats.projects} proyectos entregados</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
