import { getCustomRepository } from 'typeorm';
import HeroesRepository from '../repositories/HeroesRepository';
import Hero from '../entities/Hero';

interface IRequest {
  id: string;
  name: string;
  rank: string;
}

class UpdateHeroService {
  public async execute({ id, name, rank }: IRequest): Promise<Hero> {
    const heroesRepository = getCustomRepository(HeroesRepository);

    const findHero = heroesRepository.findById(id);

    if (!findHero) throw new Error(`Hero ${id} not found`);

    const hero = await heroesRepository.save({ id, name, rank });

    return hero;
  }
}

export default UpdateHeroService;
