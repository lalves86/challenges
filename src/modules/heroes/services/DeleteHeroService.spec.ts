import AppError from '@shared/errors/AppError';
import FakeHeroesRepository from '../repositories/fakes/FakeHeroesRepository';
import DeleteHeroService from './DeleteHeroService';

let fakeHeroesRepository: FakeHeroesRepository;
let deleteHero: DeleteHeroService;

describe('DeleteHero', () => {
  beforeEach(() => {
    fakeHeroesRepository = new FakeHeroesRepository();
    deleteHero = new DeleteHeroService(fakeHeroesRepository);
  });

  it('should be able to delete a hero', async () => {
    const hero = await fakeHeroesRepository.create({
      name: 'Superman',
      rank: 'S',
    });

    const response = await deleteHero.execute(hero.id);

    expect(response).toBeUndefined();
  });

  it('should not be able to delete a non-existing hero id', async () => {
    expect(deleteHero.execute('non-existing-id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
