import { uuid } from 'uuidv4';
import IHeroDTO from '../dtos/IHeroDTO';

interface IRequest {
  id: string;
  name: string;
  rank: string;
  heroIndex: number;
}

class HeroesRepository {
  private heroesRepository: IHeroDTO[] = [];

  public index(): IHeroDTO[] {
    const heroes = this.heroesRepository;

    return heroes;
  }

  public findByName(name: string): IHeroDTO | null {
    const findHero = this.heroesRepository.find(hero => hero.name === name);

    return findHero || null;
  }

  public findById(id: string): IHeroDTO | null {
    const findHero = this.heroesRepository.find(hero => hero.id === id);

    return findHero || null;
  }

  public create({ name, rank }: Omit<IHeroDTO, 'id'>): IHeroDTO {
    const hero = {
      id: uuid(),
      name,
      rank,
    };

    this.heroesRepository = [...this.heroesRepository, hero];

    return hero;
  }

  public update({ id, name, rank, heroIndex }: IRequest): IHeroDTO {
    const hero = {
      id,
      name,
      rank,
    };

    this.heroesRepository[heroIndex] = hero;

    return hero;
  }

  public delete(id: string): void {
    const heroes = this.heroesRepository.filter(hero => hero.id !== id);

    this.heroesRepository = [...heroes];
  }
}

export default HeroesRepository;
