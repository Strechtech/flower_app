# Ever Green Rose Farm

Sitio web de presentación para una floristería especializada en rosas. La aplicación está construida con React y Vite e incluye una página adaptable con secciones de historia, productos, servicios, testimonios y contacto.

## Requisitos

- Node.js
- pnpm `12.8.1` (declarado en `package.json`)

## Instalación y desarrollo

Activa pnpm mediante Corepack, incluido con Node.js:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Vite mostrará en la terminal la dirección local donde puedes abrir la aplicación.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `pnpm build` | Genera la versión de producción en `dist/`. |
| `pnpm preview` | Sirve localmente la compilación de producción. |
| `pnpm lint` | Ejecuta ESLint para revisar el proyecto. |

## Tecnologías

- React 19
- Vite 6
- Lucide React
- ESLint

## Estructura principal

- `src/App.jsx`: composición de la página.
- `src/features/landing/components/`: cabecera, secciones, formulario de contacto y pie.
- `src/features/landing/data/content.js`: contenido y datos presentacionales de la landing.
- `src/index.css`: estilos globales, componentes visuales y reglas responsive.
- `public/assets/`: imágenes locales utilizadas por el sitio.
- `vite.config.js`, `eslint.config.js` y `pnpm-workspace.yaml`: configuración de herramientas.

La interfaz está organizada por funcionalidad de frontend; no se introduce arquitectura hexagonal porque el proyecto no contiene backend, persistencia ni adaptadores externos propios. Los datos de productos y secciones están separados de su presentación para facilitar cambios y futuras integraciones.

El formulario de contacto abre el cliente de correo del visitante con un borrador dirigido a la dirección publicada. No envía ni almacena mensajes en un servidor.

## Dependencias y seguridad

El proyecto usa pnpm con una versión fijada y `pnpm-lock.yaml` para reproducir las versiones exactas de las dependencias. pnpm mantiene un árbol de dependencias aislado, lo que ayuda a evitar que el código importe accidentalmente paquetes transitivos que no están declarados directamente. Usa `pnpm install --frozen-lockfile` para instalar sin modificar el lockfile; no mezcles gestores ni regeneres el archivo de bloqueo con npm.

Los scripts de instalación de dependencias están restringidos por defecto; `pnpm-workspace.yaml` permite explícitamente solo el script de `esbuild`, requerido por Vite para compilar.
