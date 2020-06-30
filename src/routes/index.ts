import { Router } from 'express';
import heroesRouter from './heroes.routes';

const routes = Router();

routes.use('/heroes', heroesRouter);

export default routes;
