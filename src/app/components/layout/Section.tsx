import { cn } from "../ui/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "muted";
}

export function Section({ children, className, background = "white" }: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    muted: "bg-muted",
  };

  return (
    <section className={cn("py-16 md:py-24", bgClasses[background], className)}>
      {children}
    </section>
  );
}
