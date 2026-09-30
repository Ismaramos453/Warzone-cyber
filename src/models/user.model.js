import { db } from '../config/database.js';

export const User = {
  findByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email.toLowerCase());
  },
  create({ name, email, passwordHash, role = 'student' }) {
    const result = db.prepare(`INSERT INTO users (name, email, password_hash, role)
      VALUES (?, ?, ?, ?)`).run(name, email.toLowerCase(), passwordHash, role);
    return db.prepare('SELECT id, name, email, role FROM users WHERE id = ?').get(result.lastInsertRowid);
  },
  ranking() {
    return db.prepare(`SELECT u.id, u.name, COALESCE(SUM(c.points), 0) AS points,
      COUNT(s.id) AS solved_count
      FROM users u
      LEFT JOIN solves s ON s.user_id = u.id
      LEFT JOIN challenges c ON c.id = s.challenge_id
      WHERE u.role = 'student'
      GROUP BY u.id
      ORDER BY points DESC, solved_count DESC, u.name ASC`).all();
  }
};
