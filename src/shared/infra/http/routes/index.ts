import { Router } from 'express';
import heroesRouter from '@modules/heroes/infra/http/routes/heroes.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import threatsRouter from '@modules/threats/infra/http/routes/threats.router';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/heroes', heroesRouter);
routes.use('/threats', threatsRouter);

export default routes;
