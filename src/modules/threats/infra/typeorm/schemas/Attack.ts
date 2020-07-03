import { ObjectID } from 'typeorm';

class Attack {
  id: ObjectID;

  location: {
    lat: number;
    long: number;
  };

  dangerLevel: string;

  monsterName: string;
}

export default Attack;
