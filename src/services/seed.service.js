import bcrypt from 'bcrypt';
import { db } from '../config/database.js';

export async function seed() {
  if (db.prepare('SELECT COUNT(*) AS count FROM users').get().count > 0) return;
  const teacherHash = await bcrypt.hash('Cambiar123!', 12);
  db.prepare('INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)')
    .run('Docente', 'teacher@warzone.local', teacherHash, 'teacher');

  const challenges = [
    ['XSS Reflejado', 'xss-reflejado', 'XSS', 'Fácil', 100, 'Identifica y explota una XSS reflejada en un laboratorio aislado.', 'http://localhost:8101', 'flag{xss_reflejado_demo}'],
    ['Login SQL', 'login-sql', 'SQL Injection', 'Media', 250, 'Analiza un formulario de acceso vulnerable a inyección SQL.', 'http://localhost:8102', 'flag{sqli_login_demo}'],
    ['Escalada de privilegios', 'privilegios', 'Autorización', 'Difícil', 500, 'Encuentra un fallo de control de acceso en el laboratorio.', 'http://localhost:8103', 'flag{idor_demo}']
  ];
  const insert = db.prepare(`INSERT INTO challenges
    (title, slug, category, difficulty, points, description, lab_url, flag_hash)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
  for (const challenge of challenges) {
    challenge[7] = await bcrypt.hash(challenge[7], 12);
    insert.run(...challenge);
  }
}
