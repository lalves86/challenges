import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateHeroService from '@modules/heroes/services/CreateHeroService';
import UpdateHeroService from '@modules/heroes/services/UpdateHeroService';

export default class HeroesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, rank } = request.body;

    const createHero = container.resolve(CreateHeroService);

    const hero = await createHero.execute({ name, rank });

    return response.json(hero);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, rank } = request.body;

    const updateHero = container.resolve(UpdateHeroService);

    const hero = await updateHero.execute({ id, name, rank });

    return response.json(hero);
  }
}
