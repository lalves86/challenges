import { injectable, inject } from 'tsyringe';
import Hero from '@modules/heroes/infra/typeorm/entities/Hero';
import AppError from '@shared/errors/AppError';
import IHeroesRepository from '@modules/heroes/repositories/IHeroesRepository';

interface IRequest {
  id: string;
  name: string;
  rank: string;
}

@injectable()
class UpdateHeroService {
  constructor(
    @inject('HeroesRepository')
    private heroesRepository: IHeroesRepository,
  ) {}

  public async execute({ id, name, rank }: IRequest): Promise<Hero> {
    const hero = await this.heroesRepository.findById(id);

    if (!hero) throw new AppError(`Hero ${id} not found`);

    hero.id = id;
    hero.name = name;
    hero.rank = rank;

    await this.heroesRepository.save(hero);

    return hero;
  }
}

export default UpdateHeroService;
