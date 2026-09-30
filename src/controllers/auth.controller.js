import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';

export const AuthController = {
  loginForm(req, res) { res.render('auth/login', { error: null }); },
  registerForm(req, res) { res.render('auth/register', { error: null }); },
  async login(req, res) {
    const { email = '', password = '' } = req.body;
    const user = User.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).render('auth/login', { error: 'Correo o contraseña incorrectos.' });
    }
    req.session.user = { id: user.id, name: user.name, role: user.role };
    res.redirect('/panel');
  },
  async register(req, res) {
    const { name = '', email = '', password = '' } = req.body;
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || password.length < 10) {
      return res.status(400).render('auth/register', { error: 'Usa un nombre, correo válido y una contraseña de 10 caracteres o más.' });
    }
    if (User.findByEmail(email)) return res.status(409).render('auth/register', { error: 'Ese correo ya está registrado.' });
    const user = User.create({ name: name.trim(), email, passwordHash: await bcrypt.hash(password, 12) });
    req.session.user = user;
    res.redirect('/panel');
  },
  logout(req, res) { req.session.destroy(() => res.redirect('/acceso')); }
};
