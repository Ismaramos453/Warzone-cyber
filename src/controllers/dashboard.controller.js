import { Challenge } from '../models/challenge.model.js';
import { presentationFor } from '../services/challenge-presentation.service.js';

export const DashboardController = {
  index(req, res) {
    const challenges = Challenge.allForUser(req.session.user.id);
    res.render('dashboard', { challenges: challenges.map((challenge) => ({ ...challenge, presentation: presentationFor(challenge) })), solved: challenges.filter((c) => c.solved).length });
  }
};
