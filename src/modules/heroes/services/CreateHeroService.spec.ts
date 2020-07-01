import AppError from '@shared/errors/AppError';
import FakeHeroesRepository from '../repositories/fakes/FakeHeroesRepository';
import CreateHeroService from './CreateHeroService';

describe('CreateHero', () => {
  it('should be able to create a new hero', async () => {
    const fakeHeroesRepository = new FakeHeroesRepository();
    const createHero = new CreateHeroService(fakeHeroesRepository);

    const hero = await createHero.execute({
      name: 'Superman',
      rank: 'S',
    });

    expect(hero).toHaveProperty('id');
  });

  it('should not be able to create two heroes with the same name', async () => {
    const fakeHeroesRepository = new FakeHeroesRepository();
    const createHero = new CreateHeroService(fakeHeroesRepository);

    await createHero.execute({
      name: 'Superman',
      rank: 'S',
    });

    expect(
      createHero.execute({
        name: 'Superman',
        rank: 'S',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
