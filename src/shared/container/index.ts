import { container } from 'tsyringe';
import '@modules/users/providers';
import HeroesRepository from '@modules/heroes/infra/typeorm/repositories/HeroesRepository';
import IHeroesRepository from '@modules/heroes/repositories/IHeroesRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IThreatsRepository from '@modules/threats/repositories/IThreatsRepository';
import ThreatsRepository from '@modules/threats/infra/typeorm/repositories/ThreatsRepository';

container.registerSingleton<IHeroesRepository>(
  'HeroesRepository',
  HeroesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IThreatsRepository>(
  'ThreatsRepository',
  ThreatsRepository,
);
