import { Router } from 'express';
import { DashboardController } from '../controllers/dashboard.controller.js';
import { ChallengeController } from '../controllers/challenge.controller.js';
import { RankingController } from '../controllers/ranking.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

export const appRouter = Router();
appRouter.use(requireAuth);
appRouter.get('/', (req, res) => res.redirect('/panel'));
appRouter.get('/panel', DashboardController.index);
appRouter.get('/retos', ChallengeController.list);
appRouter.get('/retos/:slug', ChallengeController.detail);
appRouter.post('/retos/:slug/flag', ChallengeController.submit);
appRouter.get('/clasificacion', RankingController.index);
