import { app } from './app.js';
import { env } from './config/env.js';
import { migrate } from './config/database.js';
import { seed } from './services/seed.service.js';

migrate();
await seed();
app.listen(env.port, () => console.log(`Warzone disponible en http://localhost:${env.port}`));
