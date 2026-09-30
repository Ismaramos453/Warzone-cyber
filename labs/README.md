# Laboratorios aislados

Cada subcarpeta representa un reto ejecutable fuera del portal MVC. Mantén estos servicios en una red Docker distinta, sin acceso a la base de datos del portal, y usa una cuenta/sistema de despliegue sin privilegios.

El portal tiene en sus semillas las URLs `http://localhost:8101`, `8102` y `8103`.

Para iniciar los tres laboratorios locales junto al portal, abre otra terminal en la raíz del proyecto y ejecuta:

```powershell
npm.cmd run labs
```

Mantén esa terminal abierta. Los puertos son: XSS `8101`, SQL Injection `8102` y control de acceso `8103`.

No se incluye código vulnerable listo para producción: el diseño evita que un laboratorio comprometido dé acceso al portal o a otros retos.
