import { User } from '../models/user.model.js';

export const RankingController = {
  index(req, res) { res.render('ranking', { students: User.ranking(), currentUserId: req.session.user.id }); }
};
