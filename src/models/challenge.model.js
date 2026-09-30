import { db } from '../config/database.js';

export const Challenge = {
  allForUser(userId) {
    return db.prepare(`SELECT c.*, CASE WHEN s.id IS NULL THEN 0 ELSE 1 END AS solved
      FROM challenges c LEFT JOIN solves s ON s.challenge_id = c.id AND s.user_id = ?
      WHERE c.is_active = 1 ORDER BY c.points ASC, c.title ASC`).all(userId);
  },
  findBySlug(slug, userId) {
    return db.prepare(`SELECT c.*, CASE WHEN s.id IS NULL THEN 0 ELSE 1 END AS solved
      FROM challenges c LEFT JOIN solves s ON s.challenge_id = c.id AND s.user_id = ?
      WHERE c.slug = ? AND c.is_active = 1`).get(userId, slug);
  },
  solvedCount(userId) {
    return db.prepare('SELECT COUNT(*) AS count FROM solves WHERE user_id = ?').get(userId).count;
  }
};
