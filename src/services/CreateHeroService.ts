import { getCustomRepository } from 'typeorm';
import HeroesRepository from '../repositories/HeroesRepository';
import Hero from '../entities/Hero';
import AppError from '../errors/AppError';

interface IRequest {
  name: string;
  rank: string;
}

class CreateHeroService {
  public async execute({ name, rank }: IRequest): Promise<Hero> {
    const heroesRepository = getCustomRepository(HeroesRepository);

    const findHero = await heroesRepository.findByName(name);

    if (findHero) throw new AppError('This hero already exists.', 403);

    const hero = heroesRepository.create({ name, rank });

    await heroesRepository.save(hero);

    return hero;
  }
}

export default CreateHeroService;
