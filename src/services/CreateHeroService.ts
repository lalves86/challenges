import IHeroDTO from '../dtos/IHeroDTO';
import HeroesRepository from '../repositories/HeroesRepository';

interface IRequest {
  name: string;
  rank: string;
}

class CreateHeroService {
  private heroesRepository: HeroesRepository;

  constructor(heroesRepository: HeroesRepository) {
    this.heroesRepository = heroesRepository;
  }

  public execute({ name, rank }: IRequest): IHeroDTO {
    const findHero = this.heroesRepository.findByName(name);

    if (findHero) throw new Error('This hero already exists.');

    const hero = this.heroesRepository.create({ name, rank });

    return hero;
  }
}

export default CreateHeroService;
