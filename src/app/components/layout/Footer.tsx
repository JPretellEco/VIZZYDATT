import { Container } from "./Container";
import { Linkedin, Mail, Phone } from "lucide-react";
import { siteConfig } from "../../../config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Servicios",
      links: [
        { label: "Desarrollo Web", href: "#" },
        { label: "Desarrollo de Aplicaciones", href: "#" },
        { label: "Analítica de Datos", href: "#" },
        { label: "Automatización", href: "#" },
        { label: "Agentes AI", href: "#" },
        { label: "Chatbots", href: "#" },
      ],
    },
    {
      title: "Capacitación",
      links: [
        { label: "Power BI", href: "#" },
        { label: "Excel Empresarial", href: "#" },
        { label: "Python", href: "#" },
        { label: "SQL", href: "#" },
        { label: "IA para Negocios", href: "#" },
        { label: "Automatización", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Nosotros", href: "#nosotros" },
        { label: "Casos de Éxito", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
  ];

  return (
    <footer className="bg-foreground text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-primary font-semibold text-xl">T</span>
                </div>
                <span className="ml-3 text-xl font-semibold">
                  {siteConfig.company.name}
                </span>
              </div>
              <p className="text-white/70 mb-6 max-w-sm">
                {siteConfig.company.description}
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm">{siteConfig.contact.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/70">
                © {currentYear} {siteConfig.company.name}. Todos los derechos reservados.
              </p>

              <div className="flex gap-4">
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
