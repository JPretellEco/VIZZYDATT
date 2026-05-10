import { useEffect, useRef, useState } from "react";
import { Container } from "../layout/Container";
import { TrendingUp, Users, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 15,
    prefix: "+",
    label: "Años transformando empresas",
  },
  {
    icon: Users,
    value: 200,
    prefix: "+",
    label: "Clientes corporativos",
  },
  {
    icon: Briefcase,
    value: 500,
    prefix: "+",
    label: "Proyectos entregados",
  },
  {
    icon: GraduationCap,
    value: 1000,
    prefix: "+",
    label: "Profesionales capacitados",
  },
];

function AnimatedCounter({ end, duration = 2000, prefix = "" }: { end: number; duration?: number; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-semibold text-primary mb-1">
      {prefix}{count.toLocaleString()}
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="bg-muted border-y border-border py-8 md:py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                  <stat.icon className="text-primary" size={24} />
                </div>
              </div>
              <AnimatedCounter end={stat.value} prefix={stat.prefix} duration={2000} />
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
