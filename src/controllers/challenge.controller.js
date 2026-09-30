import { Challenge } from '../models/challenge.model.js';
import { submitFlag } from '../services/challenge.service.js';
import { presentationFor } from '../services/challenge-presentation.service.js';

export const ChallengeController = {
  list(req, res) { res.render('challenges/list', { challenges: Challenge.allForUser(req.session.user.id).map((challenge) => ({ ...challenge, presentation: presentationFor(challenge) })) }); },
  detail(req, res) {
    const challenge = Challenge.findBySlug(req.params.slug, req.session.user.id);
    if (!challenge) return res.status(404).render('errors/404');
    res.render('challenges/detail', { challenge: { ...challenge, presentation: presentationFor(challenge) }, result: null });
  },
  async submit(req, res) {
    const challenge = Challenge.findBySlug(req.params.slug, req.session.user.id);
    if (!challenge) return res.status(404).render('errors/404');
    const result = await submitFlag({ userId: req.session.user.id, challenge, flag: req.body.flag || '' });
    res.render('challenges/detail', { challenge: { ...challenge, solved: result.status !== 'incorrect', presentation: presentationFor(challenge) }, result });
  }
};
