import { Router } from 'express';
import { container } from 'tsyringe';
import CreateHeroService from '@modules/heroes/services/CreateHeroService';
import UpdateHeroService from '@modules/heroes/services/UpdateHeroService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensuseAuthenticated';
import HeroesController from '../controllers/HeroesController';

const heroesRouter = Router();
const heroesController = new HeroesController();

heroesRouter.use(ensureAuthenticated);

// heroesRouter.get('/', async (request, response) => {
//   const heroesRepository = getCustomRepository(HeroesRepository);
//   const heroes = await heroesRepository.find();

//   return response.json(heroes);
// });

// heroesRouter.get('/:id', async (request, response) => {
//   const { id } = request.params;

//   const heroesRepository = getCustomRepository(HeroesRepository);
//   const heroes = await heroesRepository.findById(id);

//   return response.json(heroes);
// });

heroesRouter.post('/', heroesController.create);

heroesRouter.put('/:id', heroesController.update);

// heroesRouter.delete('/:id', async (request, response) => {
//   const { id } = request.params;

//   const heroesRepository = getCustomRepository(HeroesRepository);

//   await heroesRepository.delete(id);

//   return response.json({ message: `Hero ${id} deleted` });
// });

export default heroesRouter;
