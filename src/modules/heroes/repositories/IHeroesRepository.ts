import Hero from '../infra/typeorm/entities/Hero';
import ICreateHeroDTO from '../dtos/ICreateHeroDTO';

interface IHeroesRepository {
  findByName(name: string): Promise<Hero | undefined>;
  findById(id: string): Promise<Hero | undefined>;
  create(data: ICreateHeroDTO): Promise<Hero>;
  save(hero: Hero): Promise<Hero>;
}

export default IHeroesRepository;
