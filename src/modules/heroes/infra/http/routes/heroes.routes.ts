import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensuseAuthenticated';
import HeroesController from '../controllers/HeroesController';

const heroesRouter = Router();
const heroesController = new HeroesController();

heroesRouter.use(ensureAuthenticated);

heroesRouter.get('/', heroesController.index);

heroesRouter.get('/:id', heroesController.show);

heroesRouter.post('/', heroesController.create);

heroesRouter.put('/:id', heroesController.update);

heroesRouter.delete('/:id', heroesController.delete);

export default heroesRouter;
