import { db } from '../config/database.js';

export const Solve = {
  exists(userId, challengeId) {
    return db.prepare('SELECT id FROM solves WHERE user_id = ? AND challenge_id = ?').get(userId, challengeId);
  },
  create(userId, challengeId) {
    db.prepare('INSERT INTO solves (user_id, challenge_id) VALUES (?, ?)').run(userId, challengeId);
  }
};
