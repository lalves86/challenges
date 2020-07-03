import FakeThreatsRepository from '../repositories/fakes/FakeThreatsRepository';
import CreateThreatService from './CreateThreatService';

let fakeThreatsRepository: FakeThreatsRepository;
let createThreat: CreateThreatService;

describe('CreateThreat', () => {
  beforeEach(() => {
    fakeThreatsRepository = new FakeThreatsRepository();
    createThreat = new CreateThreatService(fakeThreatsRepository);
  });

  it('should be able to store a threat', async () => {
    const threat = await createThreat.execute({
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

    expect(threat).toHaveProperty('id');
    expect(threat.attack.monsterName).toEqual('Carnage');
  });
});
