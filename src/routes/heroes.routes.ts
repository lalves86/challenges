import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import HeroesRepository from '../repositories/HeroesRepository';
import CreateHeroService from '../services/CreateHeroService';
import UpdateHeroService from '../services/UpdateHeroService';

const heroesRouter = Router();

heroesRouter.get('/', async (request, response) => {
  const heroesRepository = getCustomRepository(HeroesRepository);
  const heroes = await heroesRepository.find();

  return response.json(heroes);
});

heroesRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const heroesRepository = getCustomRepository(HeroesRepository);
    const heroes = await heroesRepository.findById(id);

    return response.json(heroes);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

heroesRouter.post('/', async (request, response) => {
  try {
    const { name, rank } = request.body;

    const createHero = new CreateHeroService();

    const hero = await createHero.execute({ name, rank });

    return response.json(hero);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

heroesRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { name, rank } = request.body;

    const updateHero = new UpdateHeroService();

    const hero = await updateHero.execute({ id, name, rank });

    return response.json(hero);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

heroesRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const heroesRepository = getCustomRepository(HeroesRepository);

    await heroesRepository.delete(id);

    return response.json({ message: `Hero ${id} deleted` });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default heroesRouter;
