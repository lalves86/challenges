import { injectable, inject } from 'tsyringe';

import IHeroesRepository from '@modules/heroes/repositories/IHeroesRepository';

import Hero from '@modules/heroes/infra/typeorm/entities/Hero';

@injectable()
class ListHeroesService {
  constructor(
    @inject('HeroesRepository')
    private heroesRepository: IHeroesRepository,
  ) {}

  public async execute(): Promise<Hero[]> {
    const heroes = await this.heroesRepository.all();

    return heroes;
  }
}

export default ListHeroesService;
