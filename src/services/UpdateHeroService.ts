import IHeroDTO from '../dtos/IHeroDTO';
import HeroesRepository from '../repositories/HeroesRepository';

interface IRequest {
  id: string;
  name: string;
  rank: string;
}

class UpdateHeroService {
  private heroesRepository: HeroesRepository;

  constructor(heroesRepository: HeroesRepository) {
    this.heroesRepository = heroesRepository;
  }

  public execute({ id, name, rank }: IRequest): IHeroDTO {
    const findHero = this.heroesRepository.findById(id);

    if (!findHero) throw new Error(`Hero ${id} not found`);

    const heroes = this.heroesRepository.index();

    const heroIndex = heroes.findIndex(hero => hero.id === id);

    if (heroIndex === -1) throw new Error(`hero ${id} not found`);

    const hero = this.heroesRepository.update({ id, name, rank, heroIndex });

    return hero;
  }
}

export default UpdateHeroService;
