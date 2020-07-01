import AppError from '@shared/errors/AppError';
import FakeHeroesRepository from '../repositories/fakes/FakeHeroesRepository';
import ListHeroByIdService from './ListHeroByIdService';

let fakeHeroesRepository: FakeHeroesRepository;
let listHeroById: ListHeroByIdService;

describe('ListHeroById', () => {
  beforeEach(() => {
    fakeHeroesRepository = new FakeHeroesRepository();
    listHeroById = new ListHeroByIdService(fakeHeroesRepository);
  });

  it('should be able to list a hero by id', async () => {
    const hero = await fakeHeroesRepository.create({
      name: 'Superman',
      rank: 'S',
    });

    const returnedHero = await listHeroById.execute(hero.id);

    expect(returnedHero.name).toEqual('Superman');
  });

  it('should not be able to list non-existing hero', async () => {
    expect(listHeroById.execute('non-existing-id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
