# VIZYDATT- Sitio Web Corporativo

Sitio web profesional para empresa de consultoría tecnológica y capacitación empresarial.

## Características

✅ **Diseño Enterprise B2B**: Estética corporativa sobria y profesional  
✅ **Totalmente Responsivo**: Optimizado para desktop, tablet y móvil  
✅ **Performance Optimizado**: Carga rápida y experiencia fluida  
✅ **Arquitectura Escalable**: Fácil de expandir con nuevas secciones  
✅ **Componentes Reutilizables**: Código modular y mantenible  
✅ **SEO Ready**: Preparado para optimización en buscadores  

## Secciones del Sitio

1. **Hero Section**: Presentación principal con CTAs
2. **Stats Bar**: Métricas corporativas (años, clientes, proyectos)
3. **Servicios**: 6 servicios tecnológicos principales
   - Desarrollo Web
   - Desarrollo de Aplicaciones
   - Analítica de Datos
   - Automatización
   - Agentes AI Empresariales
   - Chatbots Corporativos
4. **Capacitación**: 6 cursos empresariales
   - Power BI
   - Excel Empresarial
   - Python
   - SQL
   - IA Aplicada a Negocios
   - Automatización Empresarial
5. **Por Qué Elegirnos**: Propuesta de valor
6. **Casos de Éxito**: Carrusel horizontal con 5 casos empresariales destacados
7. **CTA Final**: Llamado a la acción principal
8. **Footer Corporativo**: Navegación completa y contacto

## Modificaciones Rápidas

### Cambiar Textos Principales

**Hero** → `/src/app/components/home/Hero.tsx`
- Headline principal
- Subtítulo
- Textos de botones

**Servicios** → `/src/data/services.ts`
- Títulos y descripciones de servicios

**Cursos** → `/src/data/courses.ts`
- Información de capacitaciones

**Casos de Éxito** → `/src/data/clients.ts`
- Clientes y descripción de proyectos

### Cambiar Colores

Editar `/src/styles/theme.css`:
```css
--primary: #2C5364        /* Color principal */
--primary-hover: #3E5C76  /* Hover del color principal */
--secondary: #4A5568      /* Color secundario */
```

### Cambiar Logo

Reemplazar el placeholder en:
- `/src/app/components/layout/Navbar.tsx`
- `/src/app/components/layout/Footer.tsx`

### Cambiar Datos de Contacto

**Email y Teléfono** → `/src/app/components/layout/Footer.tsx`  
**WhatsApp** → `/src/app/components/layout/WhatsAppFloat.tsx`

## Instalación Local

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build
```

## Tecnologías Utilizadas

- React 18
- TypeScript
- Tailwind CSS v4
- Vite
- Lucide Icons
- Radix UI

## Cómo Agregar Logos de Clientes Reales

En el carrusel de casos de éxito, actualmente hay un placeholder blanco con el nombre. Para agregar logos reales:

1. Coloca las imágenes de logos en `/public/clients/` (ejemplo: `retail-corp.png`)
2. Edita `/src/data/clients.ts` y agrega el campo `logo`:

```ts
{
  name: "Empresa Retail Corp",
  logo: "/clients/retail-corp.png",  // ← Agregar esta línea
  description: "Implementación de sistema...",
  industry: "Retail"
}
```

3. Edita `/src/app/components/home/ClientsCarousel.tsx` (línea ~60), reemplaza:

```tsx
<div className="bg-white rounded-lg p-8 shadow-md flex items-center justify-center min-h-[200px]">
  <span className="text-muted-foreground text-xl font-semibold text-center">
    {client.name}
  </span>
</div>
```

Por:

```tsx
<div className="bg-white rounded-lg p-8 shadow-md flex items-center justify-center min-h-[200px]">
  <img 
    src={client.logo} 
    alt={client.name}
    className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
  />
</div>
```

## Próximos Pasos Recomendados

1. **Logos de Clientes**: Agregar logos reales al carrusel de casos de éxito
2. **Contenido Real**: Reemplazar textos placeholder con contenido de la empresa
3. **Imágenes**: Agregar fotografías corporativas reales
4. **Logo**: Diseñar e integrar logo profesional
5. **Formulario de Contacto**: Implementar formulario funcional
6. **Integración WhatsApp**: Configurar número real
7. **Analytics**: Agregar Google Analytics o similar
8. **SEO**: Configurar metadata, sitemap, schema.org
9. **Blog**: Considerar agregar sección de blog/recursos
10. **Multiidioma**: Implementar versión en inglés si es necesario

## Escalabilidad Futura

El sitio está preparado para crecer con:
- Blog corporativo
- Portal de clientes
- Sistema de agendamiento
- Integración con CRM
- Catálogo de cursos completo
- Plataforma e-learning

## Documentación Técnica

Para información detallada de arquitectura, ver `ARCHITECTURE.md`.

## Soporte

Para consultas técnicas o modificaciones, contactar al equipo de desarrollo.

---

**Diseñado con enfoque enterprise B2B** | **Optimizado para conversión corporativa**
# VIZZYDATT
