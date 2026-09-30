# ⚔️ Warzone Cyber Academy

> Plataforma de entrenamiento en ciberseguridad con retos prácticos, puntuación y clasificación de estudiantes.

**Warzone Cyber Academy** es un entorno educativo construido con Node.js y Express. Los alumnos eligen libremente sus misiones, acceden a laboratorios locales aislados y validan sus hallazgos mediante flags para sumar experiencia en el ranking.

## ✨ Características

- 🔐 Registro e inicio de sesión con contraseñas cifradas mediante `bcrypt`.
- 🎯 Catálogo de retos con categoría, dificultad, puntos, briefing y pistas.
- 🧪 Laboratorios locales independientes para XSS, SQL Injection e IDOR.
- 🏆 Clasificación dinámica por retos resueltos y puntos acumulados.
- 📊 Panel de progreso personal para cada estudiante.
- 🧩 Arquitectura MVC organizada y preparada para ampliar retos o funcionalidades.

## 🖥️ Vista general

```text
Alumno ──► Portal Warzone ──► Elige una misión ──► Laboratorio aislado
               │                                           │
               └──── SQLite ◄── Valida la flag ◄────────────┘
                         │
                    Clasificación
```

## 🗂️ Arquitectura MVC

```text
src/
├── config/          # Entorno, conexión y migraciones de SQLite
├── controllers/     # Coordinan las peticiones HTTP
├── middlewares/     # Autenticación y autorización
├── models/          # Consultas y persistencia de datos
├── public/          # CSS y recursos estáticos
├── routes/          # Rutas del portal
├── services/        # Reglas de negocio, flags y presentación de retos
└── views/           # Plantillas EJS

labs/
├── xss-reflejado/   # Laboratorio XSS (puerto 8101)
├── login-sql/       # Laboratorio SQL Injection (puerto 8102)
├── privilegios/     # Laboratorio IDOR (puerto 8103)
└── shared/          # Estilos compartidos de los laboratorios
```

## 🚀 Instalación local

### Requisitos

- [Node.js](https://nodejs.org/) 24 o superior.
- npm (incluido con Node.js).

### 1. Configura el proyecto

```powershell
git clone https://github.com/Ismaramos453/Warzone-cyber.git
cd Warzone-cyber
Copy-Item .env.example .env
npm install
```

Edita `.env` y cambia `SESSION_SECRET` por un valor largo y aleatorio antes de desplegar la aplicación.

### 2. Inicia el portal

```powershell
npm run dev
```

El portal estará disponible en **http://localhost:3000**.

### 3. Inicia los laboratorios

En una segunda terminal, desde la raíz del proyecto:

```powershell
npm run labs
```

| Laboratorio | URL | Tema |
| --- | --- | --- |
| XSS Reflejado | `http://localhost:8101` | Inyección en cliente |
| Login SQL | `http://localhost:8102` | SQL Injection |
| Control de acceso | `http://localhost:8103` | IDOR / BOLA |

> En PowerShell con una política de scripts restrictiva, sustituye `npm` por `npm.cmd`.

## 👤 Cuenta inicial

En el primer arranque se crean la base de datos `data/warzone.db`, los retos iniciales y una cuenta docente:

| Campo | Valor |
| --- | --- |
| Correo | `teacher@warzone.local` |
| Contraseña | `Cambiar123!` |

⚠️ Cambia esta contraseña antes de utilizar el proyecto fuera de tu equipo de desarrollo.

## 🛡️ Nota de seguridad

Los laboratorios contienen vulnerabilidades **deliberadas** y están diseñados exclusivamente para prácticas locales y controladas. No los expongas a Internet ni los ejecutes en la misma red, contenedor o proceso que el portal principal. Para un entorno docente real, utiliza contenedores efímeros, bases de datos desechables, límites de recursos y aislamiento de red.

## 📌 Próximas mejoras

- Panel docente para crear y administrar retos.
- Despliegue aislado por alumno para cada laboratorio.
- Insignias, niveles y estadísticas de aprendizaje.
- Recuperación de contraseña y verificación por correo.
- Tests automatizados y almacenamiento de sesiones persistente.

---

Hecho para aprender ciberseguridad de forma práctica, ética y controlada. 🛡️
