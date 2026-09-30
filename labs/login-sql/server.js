import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('labs/shared'));
function page(message = '') {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Intranet Orion</title><link rel="stylesheet" href="/static/lab.css"></head><body><div class="bar">ORION INTRANET // ACCESO RESTRINGIDO</div><main class="wrap"><p class="tag">LABORATORIO SQL INJECTION · LOCAL</p><h1>Acceso de empleados</h1><p>Introduce tus credenciales para consultar los recursos internos.</p><section class="card"><form method="post"><label>USUARIO<input name="username" required></label><label>CONTRASEÑA<input name="password" type="password" required></label><button>Iniciar sesión</button></form>${message}<p class="hint">Pista: el validador construye una condición de acceso con los valores recibidos.</p></section></main></body></html>`;
}
app.get('/', (_, res) => res.send(page()));
app.post('/', (req, res) => {
  const username = String(req.body.username || '');
  const password = String(req.body.password || '');
  // Vulnerabilidad deliberada, exclusiva de este laboratorio local aislado.
  const bypass = /'\s*(or|\|\|)/i.test(username) || /'\s*(or|\|\|)/i.test(password);
  const valid = username === 'operador' && password === 'orion2026';
  if (bypass || valid) return res.send(page('<div class="result"><strong>Sesión de administrador iniciada.</strong><br>Flag: <code>flag{sqli_login_demo}</code></div>'));
  res.status(401).send(page('<div class="result">Credenciales no válidas.</div>'));
});
app.listen(8102, () => console.log('Laboratorio SQL: http://localhost:8102'));
