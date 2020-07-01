import { Router } from 'express';
import { container } from 'tsyringe';
import CreateHeroService from '@modules/heroes/services/CreateHeroService';
import UpdateHeroService from '@modules/heroes/services/UpdateHeroService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensuseAuthenticated';

const heroesRouter = Router();

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

heroesRouter.post('/', async (request, response) => {
  const { name, rank } = request.body;

  const createHero = container.resolve(CreateHeroService);

  const hero = await createHero.execute({ name, rank });

  return response.json(hero);
});

heroesRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, rank } = request.body;

  const updateHero = container.resolve(UpdateHeroService);

  const hero = await updateHero.execute({ id, name, rank });

  return response.json(hero);
});

// heroesRouter.delete('/:id', async (request, response) => {
//   const { id } = request.params;

//   const heroesRepository = getCustomRepository(HeroesRepository);

//   await heroesRepository.delete(id);

//   return response.json({ message: `Hero ${id} deleted` });
// });

export default heroesRouter;
