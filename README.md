# Portafolio

Portfolio personal desarrollado con Angular 19, SCSS y Bootstrap Icons.

## Stack

- Angular 19
- TypeScript
- SCSS
- Bootstrap 5
- Bootstrap Icons

## Scripts

```bash
npm install
npm start
npm run build
npm run test:ci
```

## Estructura principal

- `src/app/components/navbar` - navegación fija con scroll a secciones.
- `src/app/components/home` - presentación principal y enlaces.
- `src/app/components/about` - perfil, educación y habilidades.
- `src/app/components/projects` - proyectos seleccionados.
- `src/app/components/experiencia` - experiencia laboral.
- `public` - imágenes, iconos y CV descargable.

## Desarrollo

Para iniciar el servidor local:

```bash
npm start
```

La aplicación queda disponible en `http://localhost:4200/`.

## Verificación

Para validar build y tests:

```bash
npm run build
npm run test:ci
```

> Nota: el build puede mostrar advertencias de selectores CSS de Bootstrap. También evitá `npm audit fix --force` sin revisar el impacto, porque puede forzar actualizaciones mayores de Angular CLI/build tooling.
