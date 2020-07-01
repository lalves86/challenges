import { getRepository, Repository } from 'typeorm';
import Hero from '@modules/heroes/infra/typeorm/entities/Hero';
import IHeroesRepository from '@modules/heroes/repositories/IHeroesRepository';
import ICreateHeroDTO from '@modules/heroes/dtos/ICreateHeroDTO';

class HeroesRepository implements IHeroesRepository {
  private ormRepository: Repository<Hero>;

  constructor() {
    this.ormRepository = getRepository(Hero);
  }

  public async findByName(name: string): Promise<Hero | undefined> {
    const findHero = await this.ormRepository.findOne({
      where: { name },
    });

    return findHero || undefined;
  }

  public async findById(id: string): Promise<Hero | undefined> {
    const findHero = await this.ormRepository.findOne(id);

    return findHero || undefined;
  }

  public async all(): Promise<Hero[]> {
    const heroes = await this.ormRepository.find();

    return heroes;
  }

  public async create({ name, rank }: ICreateHeroDTO): Promise<Hero> {
    const hero = this.ormRepository.create({ name, rank });

    await this.ormRepository.save(hero);

    return hero;
  }

  public async save({ id, name, rank }: Hero): Promise<Hero> {
    const hero = this.ormRepository.save({ id, name, rank });

    return hero;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default HeroesRepository;
