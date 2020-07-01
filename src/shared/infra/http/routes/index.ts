import { Router } from 'express';
import heroesRouter from '@modules/heroes/infra/http/routes/heroes.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/heroes', heroesRouter);

export default routes;
