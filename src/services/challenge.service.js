import bcrypt from 'bcrypt';
import { Solve } from '../models/solve.model.js';

export async function submitFlag({ userId, challenge, flag }) {
  if (Solve.exists(userId, challenge.id)) return { status: 'already-solved' };
  const matches = await bcrypt.compare(flag.trim(), challenge.flag_hash);
  if (!matches) return { status: 'incorrect' };
  Solve.create(userId, challenge.id);
  return { status: 'correct', points: challenge.points };
}
