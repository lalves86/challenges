import { uuid } from 'uuidv4';

class Hero {
  id: string;

  name: string;

  rank: string;

  constructor({ name, rank }: Omit<Hero, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.rank = rank;
  }
}

export default Hero;
