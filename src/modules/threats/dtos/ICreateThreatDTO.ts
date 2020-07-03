import Hero from '@modules/heroes/infra/typeorm/entities/Hero';
import IAttackDTO from './IAttackDTO';

export default interface ICreateThreatDTO {
  attack: IAttackDTO;
  contention: Hero[];
}
