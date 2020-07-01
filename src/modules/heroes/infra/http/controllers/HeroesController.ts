import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateHeroService from '@modules/heroes/services/CreateHeroService';
import UpdateHeroService from '@modules/heroes/services/UpdateHeroService';
import ListHeroesService from '@modules/heroes/services/ListHeroesService';
import ListHeroByIdService from '@modules/heroes/services/ListHeroByIdService';
import DeleteHeroService from '@modules/heroes/services/DeleteHeroService';

export default class HeroesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listHeroes = container.resolve(ListHeroesService);

    const heroes = await listHeroes.execute();

    return response.json(heroes);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listheroById = container.resolve(ListHeroByIdService);

    const hero = await listheroById.execute(id);

    return response.json(hero);
  }

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

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteHero = container.resolve(DeleteHeroService);

    await deleteHero.execute(id);

    return response.json({ message: `Hero ${id} deleted` });
  }
}
