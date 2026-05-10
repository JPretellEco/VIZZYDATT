# Arquitectura del Proyecto - TechConsult

## Descripción General

Sitio web corporativo B2B para empresa de consultoría tecnológica, diseñado con estética enterprise sobria y escalabilidad en mente.

## Stack Tecnológico

- **Framework**: React 18 con Vite
- **Estilos**: Tailwind CSS v4
- **UI Components**: Radix UI (shadcn/ui)
- **Iconos**: Lucide React
- **Animaciones**: Motion (Framer Motion)
- **Lenguaje**: TypeScript
- **Gestor de paquetes**: pnpm

## Estructura del Proyecto

```
src/
├── app/
│   ├── App.tsx                    # Componente principal (Home page)
│   └── components/
│       ├── layout/                # Componentes de estructura global
│       │   ├── Navbar.tsx         # Navegación sticky
│       │   ├── Footer.tsx         # Footer enterprise
│       │   ├── Container.tsx      # Wrapper de max-width
│       │   ├── Section.tsx        # Wrapper de secciones
│       │   └── WhatsAppFloat.tsx  # Botón flotante WhatsApp
│       ├── home/                  # Secciones del Home
│       │   ├── Hero.tsx
│       │   ├── StatsBar.tsx
│       │   ├── ServicesGrid.tsx
│       │   ├── TrainingSection.tsx
│       │   ├── WhyUs.tsx
│       │   ├── ClientsCarousel.tsx
│       │   └── CTASection.tsx
│       └── ui/                    # Componentes UI primitivos (shadcn)
│           ├── button.tsx
│           ├── card.tsx
│           └── ...
├── data/                          # Datos centralizados
│   ├── services.ts                # Servicios ofrecidos
│   ├── courses.ts                 # Cursos de capacitación
│   └── clients.ts                 # Casos de éxito de clientes
└── styles/
    ├── index.css                  # Entry point de estilos
    ├── fonts.css                  # Tipografía (Inter)
    ├── theme.css                  # Sistema de diseño (tokens)
    └── tailwind.css               # Configuración Tailwind
```

## Sistema de Diseño

### Paleta de Colores

```css
/* Primary - Azul petróleo corporativo */
--primary: #2C5364
--primary-hover: #3E5C76

/* Secondary - Gris corporativo */
--secondary: #4A5568

/* Neutral */
--muted: #F7FAFC
--muted-foreground: #718096
--accent: #E2E8F0
--border: #E2E8F0
```

### Tipografía

- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Headings**: Semibold (600), letter-spacing negativo
- **Body**: Regular (400), line-height 1.6

### Espaciado

Sistema base de 8px con secciones de padding vertical generoso (16-24 en mobile/desktop).

### Border Radius

Mínimo corporativo: 4px (componentes), 0px para cards muy rectangulares.

## Patrones de Componentes

### Layout Components

**Container**: Wrapper de max-width con padding horizontal responsivo
```tsx
<Container size="default"> // narrow | default | wide
  {children}
</Container>
```

**Section**: Wrapper de sección con padding vertical
```tsx
<Section background="white"> // white | muted
  {children}
</Section>
```

### Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Cómo Modificar Contenido

### Cambiar Servicios

Editar `/src/data/services.ts`:
```ts
{
  icon: Code2,              // Icono de Lucide
  title: "Título",
  description: "Descripción breve",
  features: ["A", "B", "C"],
  slug: "url-slug"
}
```

### Cambiar Cursos

Editar `/src/data/courses.ts`:
```ts
{
  icon: FileSpreadsheet,
  title: "Nombre del Curso",
  description: "Descripción",
  duration: "X horas",
  slug: "url-slug"
}
```

### Cambiar Casos de Éxito

Editar `/src/data/clients.ts` (5 casos empresariales):
```ts
{
  name: "Nombre del Cliente",
  description: "Descripción detallada del proyecto, resultados medibles y métricas de impacto",
  industry: "Industria",
  logo: "/clients/logo.png" // Opcional
}
```

**Características del carrusel:**
- 1 caso visible a la vez (cards grandes horizontales)
- Layout: Logo izquierda (50%) + Contenido derecha (50%)
- Transición fade entre slides
- Autoplay cada 6 segundos
- Navegación con flechas laterales

### Cambiar Colores

Editar `/src/styles/theme.css` en la sección `:root`.

### Cambiar Logo

Editar `Navbar.tsx` y `Footer.tsx`, reemplazar el placeholder con imagen:
```tsx
<img src="/logo.png" alt="TechConsult" className="h-10" />
```

### Cambiar Datos de Contacto

Editar `Footer.tsx` y `WhatsAppFloat.tsx`.

## Expansión Futura

### Agregar Nuevas Páginas

1. Crear carpeta en `src/app/pages/`
2. Crear componente de página
3. Si se usa React Router, agregar ruta

### Agregar Blog

1. Instalar `react-router`
2. Crear `/src/app/pages/blog/`
3. Integrar CMS headless (Sanity/Contentful)

### Integrar CRM

1. Crear formulario de contacto
2. Conectar a API (HubSpot/Salesforce)
3. Agregar tracking de conversiones

## SEO

### Metadata
Agregar tags de metadata en futuro archivo HTML o usar Helmet/Next SEO.

### Sitemap
Generar sitemap.xml cuando se agreguen más páginas.

### Schema.org
Agregar JSON-LD para Organization, Service, Course.

## Performance

- Lazy loading de imágenes
- Code splitting por ruta (futuro)
- Optimización de fuentes con preload
- Minimización de bundle con Vite

## Deployment

Compatible con:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

Build command: `pnpm build`
Output directory: `dist/`

## Contacto del Proyecto

Para modificaciones o consultas técnicas, contactar al equipo de desarrollo.
