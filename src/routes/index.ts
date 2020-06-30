import { Router } from 'express';
import heroesRouter from './heroes.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/heroes', heroesRouter);

export default routes;
