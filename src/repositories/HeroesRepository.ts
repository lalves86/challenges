import { EntityRepository, Repository } from 'typeorm';
import IHeroDTO from '../dtos/IHeroDTO';
import Hero from '../entities/Hero';

interface IRequest {
  id: string;
  name: string;
  rank: string;
}

@EntityRepository(Hero)
class HeroesRepository extends Repository<Hero> {
  public async findByName(name: string): Promise<IHeroDTO | null> {
    const findHero = await this.findOne({
      where: { name },
    });

    return findHero || null;
  }

  public async findById(id: string): Promise<IHeroDTO | null> {
    const findHero = await this.findOne(id);

    return findHero || null;
  }
}

export default HeroesRepository;
