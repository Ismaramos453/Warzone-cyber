# Warzone Cyber Academy

Portal educativo de retos de ciberseguridad organizado con MVC. El portal no contiene vulnerabilidades intencionadas: cada laboratorio se despliega de forma aislada y el portal solo enlaza a él.

## Puesta en marcha

1. Copia `.env.example` a `.env` y cambia `SESSION_SECRET`.
2. Ejecuta `npm install`.
3. Ejecuta `npm run dev`.
4. Abre `http://localhost:3000`.

El primer arranque genera `data/warzone.db`, tres retos de ejemplo y el usuario docente `teacher@warzone.local` con contraseña `Cambiar123!`. Cámbiala antes de cualquier despliegue real.

## Arquitectura

- `src/routes`: define las URLs y delega en los controladores.
- `src/controllers`: coordina peticiones, respuestas y vistas.
- `src/models`: acceso exclusivo a SQLite y reglas de persistencia.
- `src/services`: lógica de negocio, como validación de flags y puntuación.
- `src/middlewares`: autenticación y autorización.
- `src/views`: plantillas EJS (vista).
- `src/public`: CSS y recursos estáticos.
- `labs`: manifiestos de laboratorios que deben desplegarse en contenedores/red aislada.

## Flujo de un reto

El alumno abre un reto desde `/retos/:slug`, accede al laboratorio aislado y envía la flag al portal. El servicio comprueba la flag, registra la resolución y actualiza la clasificación.

> No publiques laboratorios vulnerables en la misma red ni proceso que el portal. En producción, usa contenedores efímeros, límites de recursos y una red separada.
