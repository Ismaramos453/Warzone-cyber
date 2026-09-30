import express from 'express';

const app = express();
app.use('/static', express.static('labs/shared'));
const records = { 1: { name: 'Tu perfil', department: 'Laboratorio' }, 2: { name: 'Expediente de administración', department: 'Dirección', flag: 'flag{idor_demo}' } };
app.get('/', (req, res) => {
  const id = Number(req.query.id || 1);
  const record = records[id] || { name: 'No encontrado', department: '—' };
  res.send(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Orion Expedientes</title><link rel="stylesheet" href="/static/lab.css"></head><body><div class="bar">ORION // EXPEDIENTES</div><main class="wrap"><p class="tag">LABORATORIO IDOR · LOCAL</p><h1>Mi expediente</h1><p>Consulta la información asociada a tu cuenta.</p><section class="card"><div class="record"><strong>${record.name}</strong><p>Departamento: ${record.department}</p>${record.flag ? `<p>Documento restringido: <code>${record.flag}</code></p>` : ''}</div><p class="hint">Pista: observa el identificador utilizado para cargar el expediente.</p></section></main></body></html>`);
});
app.listen(8103, () => console.log('Laboratorio IDOR: http://localhost:8103'));
