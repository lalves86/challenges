import AppError from '@shared/errors/AppError';
import FakeHeroesRepository from '../repositories/fakes/FakeHeroesRepository';
import UpdateHeroService from './UpdateHeroService';

let fakeHeroesRepository: FakeHeroesRepository;
let updateHero: UpdateHeroService;

describe('UpdateHero', () => {
  beforeEach(() => {
    fakeHeroesRepository = new FakeHeroesRepository();
    updateHero = new UpdateHeroService(fakeHeroesRepository);
  });

  it('should be able to update a hero', async () => {
    const hero = await fakeHeroesRepository.create({
      name: 'Superman',
      rank: 'S',
    });

    const updatedHero = await updateHero.execute({
      id: hero.id,
      name: 'Superman',
      rank: 'A',
    });

    expect(updatedHero.rank).toEqual('A');
  });

  it('should not be able to update non existing hero', async () => {
    expect(
      updateHero.execute({
        id: 'Non-existing-id',
        name: 'Hulk',
        rank: 'A',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
