import AppError from '@shared/errors/AppError';
import FakeHeroesRepository from '../repositories/fakes/FakeHeroesRepository';
import UpdateHeroService from './UpdateHeroService';
import CreateHeroService from './CreateHeroService';

describe('UpdateHero', () => {
  it('should be able to update a hero', async () => {
    const fakeHeroesRepository = new FakeHeroesRepository();
    const createHero = new CreateHeroService(fakeHeroesRepository);
    const updateHero = new UpdateHeroService(fakeHeroesRepository);

    const hero = await createHero.execute({
      name: 'Superman',
      rank: 'S',
    });

    const updatedHero = await updateHero.execute({
      id: hero.id,
      name: 'Hulk',
      rank: 'A',
    });

    expect(updatedHero.name).toEqual('Hulk');
    expect(updatedHero.rank).toEqual('A');
  });

  it('should not be able to update non existing hero', async () => {
    const fakeHeroesRepository = new FakeHeroesRepository();
    const updateHero = new UpdateHeroService(fakeHeroesRepository);

    expect(
      updateHero.execute({
        id: 'Non-existing-id',
        name: 'Hulk',
        rank: 'A',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
