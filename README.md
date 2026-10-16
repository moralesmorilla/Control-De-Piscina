# Control de acceso a la piscina

Pequeña muestra en desarrollo de una aplicación web para ayudar a gestionar el acceso a la piscina de una comunidad. La idea es poder consultar a qué vivienda pertenece una persona y, más adelante, facilitar al personal autorizado el control de quién puede entrar. Este prototipo sirve como demostración inicial de cómo podría ser el proyecto completo.

## Estado del proyecto

El proyecto está **en desarrollo** y todavía es solo una muestra del proyecto completo. Por ahora permite buscar viviendas indicando bloque, escalera, piso y letra. Si encuentra resultados, muestra los nombres y las fotos de ejemplo asociados a esa vivienda.

Los datos actuales son de prueba y se cargan desde `public/data.json`. La aplicación todavía no tiene backend, no registra entradas a la piscina ni valida permisos de acceso.

## Funcionalidades pendientes

- Añadir propietarios.
- Actualizar los datos de los propietarios.
- Eliminar propietarios.
- Implementar el inicio de sesión.
- Crear un panel de administración para gestionar la información.
- Desarrollar el backend y conectarlo con la aplicación.
- Completar el control y registro de acceso a la piscina.

## Tecnologías

- React
- Vite
- JavaScript
- CSS

## Requisitos

- Node.js
- npm

## Instalación y uso

Desde la carpeta del proyecto, ejecuta:

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación en el navegador.

## Comandos disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la versión de producción
npm run preview  # Previsualiza la versión de producción
npm run lint     # Ejecuta ESLint
```
