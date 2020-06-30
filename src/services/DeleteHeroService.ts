import HeroesRepository from '../repositories/HeroesRepository';

class DeleteHeroService {
  private heroesRepository: HeroesRepository;

  constructor(heroesRepository: HeroesRepository) {
    this.heroesRepository = heroesRepository;
  }

  public execute(id: string): string {
    const findHero = this.heroesRepository.findById(id);

    if (!findHero) throw new Error(`Hero ${id} not found`);

    this.heroesRepository.delete(id);

    return `Hero ${id} is deleted`;
  }
}

export default DeleteHeroService;
