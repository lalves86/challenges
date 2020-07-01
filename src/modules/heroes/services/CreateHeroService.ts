import { injectable, inject } from 'tsyringe';
import Hero from '@modules/heroes/infra/typeorm/entities/Hero';
import AppError from '@shared/errors/AppError';
import IHeroesRepository from '../repositories/IHeroesRepository';

interface IRequest {
  name: string;
  rank: string;
}

@injectable()
class CreateHeroService {
  constructor(
    @inject('HeroesRepository')
    private heroesRepository: IHeroesRepository,
  ) {}

  public async execute({ name, rank }: IRequest): Promise<Hero> {
    const findHero = await this.heroesRepository.findByName(name);

    if (findHero) throw new AppError('This hero already exists.', 403);

    const hero = await this.heroesRepository.create({ name, rank });

    return hero;
  }
}

export default CreateHeroService;
