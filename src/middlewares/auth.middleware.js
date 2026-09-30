export function requireAuth(req, res, next) {
  if (!req.session.user) return res.redirect('/acceso');
  next();
}

export function requireTeacher(req, res, next) {
  if (req.session.user?.role !== 'teacher') return res.status(403).render('errors/403');
  next();
}

export function redirectIfAuthenticated(req, res, next) {
  if (req.session.user) return res.redirect('/panel');
  next();
}
