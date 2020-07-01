import Hero from '../infra/typeorm/entities/Hero';
import ICreateHeroDTO from '../dtos/ICreateHeroDTO';

interface IHeroesRepository {
  findByName(name: string): Promise<Hero | undefined>;
  findById(id: string): Promise<Hero | undefined>;
  all(): Promise<Hero[]>;
  create(data: ICreateHeroDTO): Promise<Hero>;
  save(hero: Hero): Promise<Hero>;
  delete(id: string): Promise<void>;
}

export default IHeroesRepository;
