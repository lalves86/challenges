import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import IHeroesRepository from '@modules/heroes/repositories/IHeroesRepository';

@injectable()
class DeleteHeroService {
  constructor(
    @inject('HeroesRepository')
    private heroesRepository: IHeroesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const hero = await this.heroesRepository.findById(id);

    if (!hero) throw new AppError(`Hero ${id} not found`);

    await this.heroesRepository.delete(id);
  }
}

export default DeleteHeroService;
