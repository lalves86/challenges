import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import IHeroesRepository from '@modules/heroes/repositories/IHeroesRepository';

import Hero from '@modules/heroes/infra/typeorm/entities/Hero';

@injectable()
class ListHeroesService {
  constructor(
    @inject('HeroesRepository')
    private heroesRepository: IHeroesRepository,
  ) {}

  public async execute(id: string): Promise<Hero> {
    const hero = await this.heroesRepository.findById(id);

    if (!hero) throw new AppError(`Hero ${id} not found`);

    return hero;
  }
}

export default ListHeroesService;
