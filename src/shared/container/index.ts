import { container } from 'tsyringe';
import HeroesRepository from '@modules/heroes/infra/typeorm/repositories/HeroesRepository';
import IHeroesRepository from '@modules/heroes/repositories/IHeroesRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IHeroesRepository>(
  'HeroesRepository',
  HeroesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
