import express from 'express';

const app = express();
app.use('/static', express.static('labs/shared'));
app.get('/', (req, res) => {
  const term = String(req.query.q || '');
  const result = term ? `<div class="result">Resultados para: ${term}</div>` : '';
  res.send(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Pulse News</title><link rel="stylesheet" href="/static/lab.css"></head><body><div class="bar">PULSE NEWS // BUSCADOR</div><main class="wrap"><p class="tag">LABORATORIO XSS · LOCAL</p><h1>Busca en Pulse News</h1><p>El buscador muestra la consulta en los resultados.</p><section class="card"><form><label>CONSULTA<input name="q" value="${term}" placeholder="Ciberseguridad"></label><button>Buscar</button></form>${result}<p class="hint">Objetivo: consigue ejecutar código en el contexto de los resultados. La flag se conserva en <code>window.trainingFlag</code>.</p></section></main><script>window.trainingFlag = 'flag{xss_reflejado_demo}';</script></body></html>`);
});
app.listen(8101, () => console.log('Laboratorio XSS: http://localhost:8101'));
