import FakeThreatsRepository from '../repositories/fakes/FakeThreatsRepository';
import CreateThreatService from './CreateThreatService';
import ListThreatsService from './ListThreatsService';

let fakeThreatsRepository: FakeThreatsRepository;
let createThreat: CreateThreatService;
let listThreats: ListThreatsService;

describe('ListThreats', () => {
  beforeEach(() => {
    fakeThreatsRepository = new FakeThreatsRepository();
    createThreat = new CreateThreatService(fakeThreatsRepository);
    listThreats = new ListThreatsService(fakeThreatsRepository);
  });

  it('should be able to list the history of threats', async () => {
    const threat1 = await createThreat.execute({
      attack: {
        location: {
          lat: -10.836597,
          lng: -45.236007,
        },
        dangerLevel: 'A',
        monsterName: 'Carnage',
      },
      contention: [
        {
          id: 'b639f617-06df-4e36-89b3-b5ca1b3cb09b',
          name: 'Hulk',
          rank: 'B',
          createdAt: new Date('2020-07-01T15:14:28.486Z'),
          updatedAt: new Date('2020-07-01T15:17:33.950Z'),
        },
      ],
    });

    const threat2 = await createThreat.execute({
      attack: {
        location: {
          lat: -5.836597,
          lng: -25.236007,
        },
        dangerLevel: 'S',
        monsterName: 'Black Dragon',
      },
      contention: [
        {
          id: 'b639f617-06df-4e36-89b3-b5ca1b3cb09b',
          name: 'Superman',
          rank: 'S',
          createdAt: new Date('2020-07-01T15:14:28.486Z'),
          updatedAt: new Date('2020-07-01T15:17:33.950Z'),
        },
      ],
    });

    const threats = await listThreats.execute();

    expect(threats).toEqual([threat1, threat2]);
  });
});
