import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensuseAuthenticated';
import HeroesController from '../controllers/HeroesController';

const heroesRouter = Router();
const heroesController = new HeroesController();

heroesRouter.use(ensureAuthenticated);

heroesRouter.get('/', heroesController.index);

heroesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  heroesController.show,
);

heroesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      rank: Joi.string().valid('C', 'B', 'A', 'S').required(),
    },
  }),
  heroesController.create,
);

heroesRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      rank: Joi.string().valid('C', 'B', 'A', 'S'),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  heroesController.update,
);

heroesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  heroesController.delete,
);

export default heroesRouter;
