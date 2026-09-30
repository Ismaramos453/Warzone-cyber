import 'dotenv/config';

export const env = {
  port: Number(process.env.PORT || 3000),
  sessionSecret: process.env.SESSION_SECRET || 'solo-para-desarrollo-cambiar-en-produccion',
  isProduction: process.env.NODE_ENV === 'production'
};
