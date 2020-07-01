import { uuid } from 'uuidv4';
import Hero from '@modules/heroes/infra/typeorm/entities/Hero';
import IHeroesRepository from '@modules/heroes/repositories/IHeroesRepository';
import ICreateHeroDTO from '@modules/heroes/dtos/ICreateHeroDTO';

class HeroesRepository implements IHeroesRepository {
  private heroes: Hero[] = [];

  public async findByName(name: string): Promise<Hero | undefined> {
    const findHero = this.heroes.find(hero => hero.name === name);

    return findHero;
  }

  public async findById(id: string): Promise<Hero | undefined> {
    const findHero = this.heroes.find(hero => hero.id === id);

    return findHero;
  }

  public async create({ name, rank }: ICreateHeroDTO): Promise<Hero> {
    const hero = new Hero();

    Object.assign(hero, { id: uuid(), name, rank });

    this.heroes.push(hero);

    return hero;
  }

  public async save({ id, name, rank }: Hero): Promise<Hero> {
    const findIndex = this.heroes.findIndex(hero => hero.id === id);

    const hero = new Hero();

    Object.assign(hero, { id, name, rank });

    this.heroes[findIndex] = hero;

    return hero;
  }
}

export default HeroesRepository;
