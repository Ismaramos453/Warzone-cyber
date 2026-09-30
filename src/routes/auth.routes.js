import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { redirectIfAuthenticated } from '../middlewares/auth.middleware.js';

export const authRouter = Router();
authRouter.get('/acceso', redirectIfAuthenticated, AuthController.loginForm);
authRouter.post('/acceso', redirectIfAuthenticated, AuthController.login);
authRouter.get('/registro', redirectIfAuthenticated, AuthController.registerForm);
authRouter.post('/registro', redirectIfAuthenticated, AuthController.register);
authRouter.post('/salir', AuthController.logout);
