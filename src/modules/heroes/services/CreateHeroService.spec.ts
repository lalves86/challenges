import AppError from '@shared/errors/AppError';
import FakeHeroesRepository from '../repositories/fakes/FakeHeroesRepository';
import CreateHeroService from './CreateHeroService';

let fakeHeroesRepository: FakeHeroesRepository;
let createHero: CreateHeroService;

describe('CreateHero', () => {
  beforeEach(() => {
    fakeHeroesRepository = new FakeHeroesRepository();
    createHero = new CreateHeroService(fakeHeroesRepository);
  });

  it('should be able to create a new hero', async () => {
    const hero = await createHero.execute({
      name: 'Superman',
      rank: 'S',
    });

    expect(hero).toHaveProperty('id');
  });

  it('should not be able to create two heroes with the same name', async () => {
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
