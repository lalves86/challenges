import { Router } from 'express';
import HeroesRepository from '../repositories/HeroesRepository';
import CreateHeroService from '../services/CreateHeroService';
import UpdateHeroService from '../services/UpdateHeroService';
import DeleteHeroService from '../services/DeleteHeroService';

const heroesRouter = Router();

const heroesRepository = new HeroesRepository();

heroesRouter.get('/', (request, response) => {
  const heroes = heroesRepository.index();

  return response.json(heroes);
});

heroesRouter.get('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const heroes = heroesRepository.findById(id);

    return response.json(heroes);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

heroesRouter.post('/', (request, response) => {
  try {
    const { name, rank } = request.body;

    const createHero = new CreateHeroService(heroesRepository);

    const hero = createHero.execute({ name, rank });

    return response.json(hero);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

heroesRouter.put('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { name, rank } = request.body;

    const updateHero = new UpdateHeroService(heroesRepository);

    const hero = updateHero.execute({ id, name, rank });

    return response.json(hero);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

heroesRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const deleteHero = new DeleteHeroService(heroesRepository);

    const hero = deleteHero.execute(id);

    return response.json({ message: hero });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default heroesRouter;
