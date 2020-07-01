import FakeHeroesRepository from '../repositories/fakes/FakeHeroesRepository';
import ListHeroesService from './ListHeroesService';

let fakeHeroesRepository: FakeHeroesRepository;
let listHeroes: ListHeroesService;

describe('ListHeroes', () => {
  beforeEach(() => {
    fakeHeroesRepository = new FakeHeroesRepository();
    listHeroes = new ListHeroesService(fakeHeroesRepository);
  });

  it('should be able to list all the heroes', async () => {
    const hero1 = await fakeHeroesRepository.create({
      name: 'Superman',
      rank: 'S',
    });

    const hero2 = await fakeHeroesRepository.create({
      name: 'Hulk',
      rank: 'A',
    });

    const heroes = await listHeroes.execute();

    expect(heroes).toEqual([hero1, hero2]);
  });
});
