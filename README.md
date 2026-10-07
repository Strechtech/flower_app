# Ever Green Rose Farm

Sitio web adaptable para presentar la finca, sus variedades de rosas y servicios, y facilitar el contacto con clientes. La interfaz está construida con React y Vite.

## Requisitos

- Node.js compatible con la versión de pnpm definida en el proyecto.
- Corepack para activar pnpm `12.8.1` (versión fijada en `package.json`).

## Instalación y desarrollo

Desde la raíz del repositorio:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Vite mostrará la dirección local para abrir el sitio. Para detener el servidor, usa `Ctrl+C`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `pnpm build` | Genera los archivos de producción en `dist/`. |
| `pnpm preview` | Previsualiza localmente la compilación de producción. |
| `pnpm lint` | Ejecuta ESLint. |

## Tecnologías

- React 19
- Vite 6
- Lucide React
- CSS responsive propio
- ESLint 9
- pnpm `12.8.1`

## Arquitectura actual

Es una aplicación frontend de una sola página, organizada por funcionalidad. `App.jsx` compone las secciones y cada componente se ocupa de una parte de la experiencia. No se incorporó arquitectura hexagonal porque actualmente no hay backend, persistencia ni integraciones que requieran puertos y adaptadores.

```text
src/
├── App.jsx
├── index.css
├── main.jsx
└── features/
    └── landing/
        ├── components/
        │   ├── AboutSection.jsx
        │   ├── ContactSection.jsx
        │   ├── HeroSection.jsx
        │   ├── ProductsSection.jsx
        │   ├── SectionHeading.jsx
        │   ├── ServicesSection.jsx
        │   ├── SiteFooter.jsx
        │   ├── SiteHeader.jsx
        │   └── TestimonialsSection.jsx
        └── data/
            └── content.js
public/
└── assets/
```

- `src/App.jsx`: composición y orden de las secciones.
- `src/features/landing/components/`: cabecera y componentes visuales de la landing.
- `src/features/landing/data/content.js`: contenido estático de productos, servicios, horarios y contacto.
- `src/index.css`: tokens visuales, estilos y reglas responsive.
- `public/assets/`: imágenes servidas desde el propio sitio.
- `pnpm-workspace.yaml`: política explícita de scripts permitidos durante la instalación.

El formulario de contacto prepara un mensaje `mailto:` con los datos ingresados. El visitante debe enviarlo desde su cliente de correo; la aplicación no recibe ni almacena mensajes.

## Dependencias y seguridad

- `pnpm-lock.yaml` fija el árbol resuelto para instalaciones reproducibles. Usa `pnpm install --frozen-lockfile` en CI y despliegues.
- pnpm mantiene las dependencias directas separadas de las transitivas, ayudando a detectar importaciones accidentales de paquetes no declarados.
- Los scripts de instalación de dependencias se restringen por defecto; `pnpm-workspace.yaml` autoriza `esbuild`, requerido por Vite.
- `.gitignore` excluye archivos de entorno, dependencias, salidas de compilación, caches y reportes locales. Los archivos `.env.example` pueden versionarse; no incluyas credenciales reales.

## Dirección del proyecto

La dirección inicial será una solución clásica: si el sitio evoluciona a tienda, se añadirá un backend para gestionar cuentas, roles, catálogo, inventario y pedidos, integrado con una pasarela de pagos mediante su API. **Web3/blockchain queda fuera del alcance actual**; se reconsiderará únicamente si surge un requisito técnico concreto que lo justifique.

## Pendientes y siguientes pasos

Estas funcionalidades todavía no están implementadas:

- [ ] **Definir el alcance comercial de la tienda.** Precisar catálogo, variantes, inventario, envíos, devoluciones y flujo de pedidos antes de implementar compras.
- [ ] **Diseñar el backend clásico** para autenticación, roles de administración, catálogo, inventario y pedidos cuando se confirme el alcance de la tienda.
- [ ] **Integrar una pasarela de pagos** mediante su API y checkout alojado. Confirmar que el proveedor opere en los países y medios de pago requeridos; validar pagos en el servidor mediante webhooks firmados. No almacenar datos de tarjetas.
- [ ] **Definir el caso de uso de IA.** Elegir un problema concreto y medible (por ejemplo, análisis de calidad de flores o pronóstico de demanda), identificar datos disponibles y evaluar precisión, privacidad, coste y revisión humana. Las claves y llamadas al modelo deben residir en el backend, nunca en el bundle público del navegador.
- [ ] **Elegir hosting y estrategia de despliegue.** Comparar Cloudflare Pages/Workers con Google Cloud según las necesidades concretas:
  - Cloudflare puede ser adecuado para publicar un sitio estático con CDN y añadir funciones ligeras en Workers.
  - Google Cloud ofrece opciones para una API, contenedores y servicios gestionados cuando se requiera backend o integración con servicios de su ecosistema.
  - Comparar coste, región y residencia de datos, facilidad de operación, funciones de backend, dominios, observabilidad y proceso de CI/CD. No hay una elección tomada todavía.
- [ ] **Implementar envío de consultas de contacto** si se requiere recibirlas y gestionarlas desde la plataforma; actualmente el formulario solo prepara un correo `mailto:`.
- [ ] **Automatizar CI/CD** para instalar con lockfile congelado, ejecutar lint y build en cada cambio, y desplegar a un entorno de prueba antes de producción.
- [ ] **Completar criterios de producción:** pruebas automatizadas, analítica respetuosa con la privacidad, revisión de accesibilidad, dominio, metadatos/imagen social y monitorización.

### Criterio recomendado para decidir plataforma

Mantener primero el sitio como contenido estático mientras solo presente la finca. Si se implementa tienda, elegir la plataforma después de definir los requisitos de backend, pagos, privacidad, tráfico y presupuesto. Cloudflare puede encajar con un frontend estático y una API pequeña; Google Cloud puede encajar si se necesitan más servicios gestionados. Web3 no forma parte de esta decisión inicial.
